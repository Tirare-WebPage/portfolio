"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Box, FileImage, Film, Rotate3D } from "lucide-react";

type AssetKind = "image" | "video" | "model" | "pdf";
type Aspect = "landscape" | "portrait" | "square" | "cinematic";

type Props = {
  kind: AssetKind;
  src: string;
  fallbackSrc?: string;
  title: string;
  description?: string;
  alt?: string;
  aspect?: Aspect;
  fit?: "cover" | "contain";
  controls?: boolean;
  className?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) =>
  path.startsWith("/") && basePath ? `${basePath}${path}` : path;

declare global {
  interface Window {
    __portfolioModelViewerPromise?: Promise<void>;
  }
}

function loadModelViewer(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("The 3D viewer is only available in the browser."));
  }
  if (customElements.get("model-viewer")) return Promise.resolve();
  if (window.__portfolioModelViewerPromise) return window.__portfolioModelViewerPromise;

  window.__portfolioModelViewerPromise = new Promise<void>((resolve, reject) => {
    const finish = () => {
      customElements.whenDefined("model-viewer").then(() => resolve(), reject);
    };
    const fail = () => reject(new Error("The 3D viewer library could not be loaded."));
    const existing = document.querySelector<HTMLScriptElement>("script[data-portfolio-model-viewer]");

    if (existing) {
      existing.addEventListener("load", finish, { once: true });
      existing.addEventListener("error", fail, { once: true });
      // The script may already have loaded between the first check and this branch.
      if (customElements.get("model-viewer")) resolve();
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js";
    script.dataset.portfolioModelViewer = "true";
    script.addEventListener("load", finish, { once: true });
    script.addEventListener("error", fail, { once: true });
    document.head.appendChild(script);
  });

  return window.__portfolioModelViewerPromise;
}

function MediaPlaceholder({
  kind,
  title,
  description,
  src,
}: {
  kind: AssetKind;
  title: string;
  description?: string;
  src: string;
}) {
  const Icon = kind === "model" ? Rotate3D : kind === "video" ? Film : kind === "pdf" ? Box : FileImage;
  return (
    <div className="asset-placeholder">
      <span className="asset-placeholder-icon"><Icon size={23} strokeWidth={1.4} /></span>
      <div className="asset-placeholder-copy">
        <span className="asset-placeholder-label">
          {kind === "model" ? "INTERACTIVE CAD SLOT" : kind === "video" ? "VIDEO SLOT" : kind === "pdf" ? "DOCUMENT SLOT" : "PHOTOGRAPH SLOT"}
        </span>
        <strong>{title}</strong>
        {description ? <p>{description}</p> : null}
        <code>{src}</code>
      </div>
    </div>
  );
}

export default function AssetFrame({
  kind,
  src,
  fallbackSrc,
  title,
  description,
  alt,
  aspect = "landscape",
  fit = "cover",
  controls = true,
  className = "",
}: Props) {
  const [resolvedSrc, setResolvedSrc] = useState("");
  const [missing, setMissing] = useState(false);
  const [modelError, setModelError] = useState("");
  const modelHost = useRef<HTMLDivElement>(null);
  const primaryUrl = withBasePath(src);
  const fallbackUrl = fallbackSrc ? withBasePath(fallbackSrc) : "";

  // Do not preflight public files with fetch(HEAD). Some static hosts and local
  // development configurations answer HEAD differently from GET. Let the real
  // image/video/model/PDF request determine whether the asset exists.
  useEffect(() => {
    setMissing(false);
    setModelError("");
    setResolvedSrc(primaryUrl);
  }, [primaryUrl, fallbackUrl, kind]);

  const handleAssetError = () => {
    if (fallbackUrl && resolvedSrc !== fallbackUrl) {
      setResolvedSrc(fallbackUrl);
      setModelError("");
      return;
    }
    setMissing(true);
    setResolvedSrc("");
  };

  useEffect(() => {
    if (kind !== "model" || !resolvedSrc || !modelHost.current || missing) return;
    let cancelled = false;
    const host = modelHost.current;
    host.replaceChildren();

    loadModelViewer()
      .then(() => {
        if (cancelled || !modelHost.current) return;
        const viewer = document.createElement("model-viewer");
        viewer.setAttribute("src", resolvedSrc);
        viewer.setAttribute("alt", alt || title);
        viewer.setAttribute("camera-controls", "");
        viewer.setAttribute("touch-action", "pan-y");
        viewer.setAttribute("shadow-intensity", "0.65");
        viewer.setAttribute("exposure", "1");
        viewer.setAttribute("environment-image", "neutral");
        viewer.setAttribute("camera-orbit", "35deg 72deg auto");
        viewer.setAttribute("interaction-prompt", "none");
        viewer.setAttribute("loading", "lazy");
        viewer.className = "asset-model-viewer";
        viewer.addEventListener("error", () => {
          if (!cancelled) {
            if (fallbackUrl && resolvedSrc !== fallbackUrl) {
              setResolvedSrc(fallbackUrl);
              setModelError("");
            } else {
              setModelError("The model file was reached, but it could not be rendered. Check that it is a valid, complete GLB export.");
            }
          }
        }, { once: true });
        host.appendChild(viewer);
      })
      .catch(() => {
        if (!cancelled) setModelError("The 3D viewer library could not load. Check your internet connection and allow unpkg.com.");
      });

    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, [kind, resolvedSrc, alt, title, missing, fallbackUrl]);

  const wrapperClass = `asset-frame asset-${aspect} ${className}`.trim();
  return (
    <div className={wrapperClass}>
      {missing ? <MediaPlaceholder kind={kind} title={title} description={description} src={src} /> : null}
      {!missing && !resolvedSrc ? (
        <div className="asset-loading" aria-label={`Loading ${title}`}>
          <span className="asset-loading-line" /><span>{title}</span>
        </div>
      ) : null}
      {!missing && resolvedSrc && kind === "image" ? (
        <Image
          src={resolvedSrc}
          alt={alt || title}
          fill
          unoptimized
          sizes="(max-width: 760px) 100vw, 50vw"
          className={`asset-image fit-${fit}`}
          onError={handleAssetError}
        />
      ) : null}
      {!missing && resolvedSrc && kind === "video" ? (
        <video
          src={resolvedSrc}
          controls={controls}
          playsInline
          preload="metadata"
          muted
          className="asset-video"
          onError={handleAssetError}
          aria-label={title}
        />
      ) : null}
      {!missing && resolvedSrc && kind === "model" ? (
        <>
          <div className="asset-model-host" ref={modelHost} />
          {modelError ? (
            <div className="asset-model-error">
              <Rotate3D size={20} />
              <p>{modelError}</p>
              <code>{resolvedSrc}</code>
            </div>
          ) : (
            <span className="asset-interaction-hint">DRAG TO ROTATE · SCROLL TO ZOOM</span>
          )}
        </>
      ) : null}
      {!missing && resolvedSrc && kind === "pdf" ? (
        <iframe
          className="asset-pdf"
          src={resolvedSrc}
          title={title}
          loading="lazy"
          onError={handleAssetError}
        />
      ) : null}
    </div>
  );
}
