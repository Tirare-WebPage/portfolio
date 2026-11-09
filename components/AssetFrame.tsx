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
const withBasePath = (path: string) => path.startsWith("/") && basePath ? `${basePath}${path}` : path;

declare global {
  interface Window {
    __portfolioModelViewerPromise?: Promise<void>;
  }
}

function loadModelViewer(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("Browser only"));
  if (customElements.get("model-viewer")) return Promise.resolve();
  if (window.__portfolioModelViewerPromise) return window.__portfolioModelViewerPromise;
  window.__portfolioModelViewerPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-portfolio-model-viewer]");
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("The 3D viewer could not load.")), { once: true });
      if (customElements.get("model-viewer")) resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js";
    script.dataset.portfolioModelViewer = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("The 3D viewer could not load."));
    document.head.appendChild(script);
  });
  return window.__portfolioModelViewerPromise;
}

function MediaPlaceholder({ kind, title, description, src }: { kind: AssetKind; title: string; description?: string; src: string }) {
  const Icon = kind === "model" ? Rotate3D : kind === "video" ? Film : kind === "pdf" ? Box : FileImage;
  return (
    <div className="asset-placeholder">
      <span className="asset-placeholder-icon"><Icon size={23} strokeWidth={1.4} /></span>
      <div className="asset-placeholder-copy">
        <span className="asset-placeholder-label">{kind === "model" ? "INTERACTIVE CAD SLOT" : kind === "video" ? "VIDEO SLOT" : kind === "pdf" ? "DOCUMENT SLOT" : "PHOTOGRAPH SLOT"}</span>
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
  const candidates = [src, ...(fallbackSrc ? [fallbackSrc] : [])];

  useEffect(() => {
    let cancelled = false;
    setResolvedSrc("");
    setMissing(false);
    setModelError("");

    const check = async () => {
      for (const candidate of candidates) {
        const url = withBasePath(candidate);
        try {
          const response = await fetch(url, { method: "HEAD", cache: "no-store" });
          if (response.ok) {
            if (!cancelled) setResolvedSrc(url);
            return;
          }
        } catch {
          // A cross-origin fallback can reject HEAD because of CORS. Try it directly;
          // the media element below will report a genuine load failure.
          if (/^https?:\/\//i.test(candidate)) {
            if (!cancelled) setResolvedSrc(candidate);
            return;
          }
        }
      }
      if (!cancelled) setMissing(true);
    };

    void check();
    return () => { cancelled = true; };
    // Candidate paths are static component props.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, fallbackSrc, kind]);

  useEffect(() => {
    if (kind !== "model" || !resolvedSrc || !modelHost.current) return;
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
          if (!cancelled) setModelError("This model could not be rendered. Check that the GLB file is complete and publicly accessible.");
        }, { once: true });
        host.appendChild(viewer);
      })
      .catch(() => {
        if (!cancelled) setModelError("The interactive 3D viewer could not be loaded. Check the internet connection or use a still render of the model.");
      });

    return () => { cancelled = true; host.replaceChildren(); };
  }, [kind, resolvedSrc, alt, title]);

  const wrapperClass = `asset-frame asset-${aspect} ${className}`.trim();
  return (
    <div className={wrapperClass}>
      {missing ? <MediaPlaceholder kind={kind} title={title} description={description} src={src} /> : null}
      {!missing && !resolvedSrc ? <div className="asset-loading" aria-label={`Checking for ${title}`}><span className="asset-loading-line" /><span>{title}</span></div> : null}
      {!missing && resolvedSrc && kind === "image" ? (
        <Image src={resolvedSrc} alt={alt || title} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" className={`asset-image fit-${fit}`} onError={() => setMissing(true)} />
      ) : null}
      {!missing && resolvedSrc && kind === "video" ? (
        <video src={resolvedSrc} controls={controls} playsInline preload="metadata" muted className="asset-video" onError={() => setMissing(true)} aria-label={title} />
      ) : null}
      {!missing && resolvedSrc && kind === "model" ? (
        <>
          <div className="asset-model-host" ref={modelHost} />
          {modelError ? <div className="asset-model-error"><Rotate3D size={20}/><p>{modelError}</p><code>{src}</code></div> : null}
          {!modelError ? <span className="asset-interaction-hint">DRAG TO ROTATE · SCROLL TO ZOOM</span> : null}
        </>
      ) : null}
      {!missing && resolvedSrc && kind === "pdf" ? (
        <iframe className="asset-pdf" src={resolvedSrc} title={title} loading="lazy" />
      ) : null}
    </div>
  );
}
