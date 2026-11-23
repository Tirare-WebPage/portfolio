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
  autoPlay?: boolean;
  loop?: boolean;
  clipStart?: number;
  clipEnd?: number;
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
