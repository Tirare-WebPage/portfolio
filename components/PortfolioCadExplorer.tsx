"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, RotateCcw, Rotate3D } from "lucide-react";

type CadModel = {
  id: number;
  label: string;
  file: string;
  stageNote: string;
  reasoningTitle: string;
  reasoning: string;
  question: string;
};

// The four entries pair the model slots with the design logic supplied by Anurag.
// Once the real public-safe GLBs are inspected, refine each label to match its geometry.
const models: CadModel[] = [
  {
    id: 1,
    label: "Reality",
    file: "/models/trike-cad-01.glb",
    stageNote: "Start with the vehicle that exists",
    reasoningTitle: "The existing tricycle is the baseline.",
    reasoning: "The project began with a vehicle already carrying goods and earning income. Its frame, rear axle, pedal and chain, brakes, repair habits and available mounting space are constraints to design around—not things a retrofit can casually discard.",
    question: "What can be added without asking the operator to replace a working asset?",
  },
  {
    id: 2,
    label: "First attempt",
    file: "/models/trike-cad-02.glb",
    stageNote: "Power delivery came first",
    reasoningTitle: "A working torque path can still be the wrong retrofit.",
    reasoning: "The early architecture focused on transferring torque and delivering electric assistance. CAD helped examine that power path, but technical viability on paper was not enough: added parts, fabrication demands, installation complexity and repairability mattered too.",
    question: "Does it transfer torque—and can it be fitted and maintained on the vehicles people already own?",
  },
  {
    id: 3,
    label: "Constraint collision",
    file: "/models/trike-cad-03.glb",
    stageNote: "Design meets field conditions",
    reasoningTitle: "The constraints had to be solved together.",
    reasoning: "A candidate that looked workable in isolation could collide with the fixed rear axle, frame geometry, chain line or available mounting space. Dust, shock loads, misalignment, overloading, maintenance variation and differences between tricycles made the design problem more specific. Some approaches had to be rejected or revised.",
    question: "What fails when a theoretically workable concept meets the actual vehicle and its operating conditions?",
  },
  {
    id: 4,
    label: "Current platform",
    file: "/models/trike-cad-04.glb",
    stageNote: "A revised direction to test",
    reasoningTitle: "The current direction is shaped by retrofit reality.",
    reasoning: "The revised platform prioritises a reversible attachment, preserving the original vehicle structure and manual operation, and keeping the rider central to the propulsion system. The CAD represents design intent. It does not, by itself, prove safe installation, drivetrain compatibility or field performance.",
    question: "The current direction is a design candidate. CAD is not proof of full-vehicle validation.",
  },
];

type ViewerStatus = "checking" | "missing" | "loading" | "ready" | "error";

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
      existing.addEventListener("error", () => reject(new Error("The 3D viewer library could not load.")), { once: true });
      if (customElements.get("model-viewer")) resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js";
    script.dataset.tirareModelViewer = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("The 3D viewer library could not load."));
    document.head.appendChild(script);
  });

  return window.__portfolioModelViewerPromise;
}

export default function PortfolioCadExplorer() {
  const [selectedId, setSelectedId] = useState(1);
  const [status, setStatus] = useState<ViewerStatus>("checking");
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const hostRef = useRef<HTMLDivElement>(null);
  const model = models.find((item) => item.id === selectedId) ?? models[0];

  useEffect(() => {
    let cancelled = false;
    setStatus("checking");
    setActiveUrl(null);
    setMessage("");

    fetch(model.file, { method: "HEAD", cache: "no-store" })
      .then((response) => {
        if (cancelled) return;
        if (!response.ok) {
          setStatus("missing");
          setMessage(`The public model export has not been added yet. Its expected location is public${model.file}.`);
          return;
        }
        setActiveUrl(model.file);
        setStatus("loading");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("missing");
        setMessage(`The model export is not available at ${model.file}. Add the approved GLB file and reload.`);
      });

    return () => { cancelled = true; };
  }, [model.file]);

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!activeUrl || !host) return;
    host.replaceChildren();

    loadModelViewer()
      .then(() => {
        if (cancelled || !hostRef.current) return;
        const viewer = document.createElement("model-viewer");
        viewer.setAttribute("src", activeUrl);
        viewer.setAttribute("alt", `Interactive 3D view of ${model.label} cargo-tricycle CAD model`);
        viewer.setAttribute("camera-controls", "");
        viewer.setAttribute("touch-action", "pan-y");
        viewer.setAttribute("shadow-intensity", "0.7");
        viewer.setAttribute("exposure", "1");
        viewer.setAttribute("environment-image", "neutral");
        viewer.setAttribute("camera-orbit", "35deg 72deg auto");
        viewer.setAttribute("interaction-prompt", "none");
        viewer.setAttribute("loading", "eager");
        viewer.className = "model-viewer-element";
        viewer.addEventListener("load", () => { if (!cancelled) setStatus("ready"); }, { once: true });
        viewer.addEventListener("error", () => {
          if (!cancelled) {
            setStatus("error");
            setMessage("This model could not be rendered. Export a self-contained GLB and check that its geometry and materials are valid.");
          }
        }, { once: true });
        hostRef.current.replaceChildren(viewer);
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
          setMessage("The 3D viewer library could not load. The rest of the page is still available.");
        }
      });

    return () => { cancelled = true; host.replaceChildren(); };
  }, [activeUrl, model.label]);

  function resetView() {
    const viewer = hostRef.current?.querySelector<HTMLElement>("model-viewer");
    if (!viewer) return;
    viewer.setAttribute("camera-orbit", "35deg 72deg auto");
    viewer.setAttribute("camera-target", "auto auto auto");
  }

  async function fullscreen() {
    const viewer = hostRef.current?.querySelector<HTMLElement>("model-viewer");
    if (!viewer) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await viewer.requestFullscreen();
    } catch {
      setMessage("Fullscreen is not available in this browser.");
    }
  }

  return (
    <div className="cad-section">
      <div className="cad-explorer">
        <div className="cad-viewer-column">
          <div className="cad-viewer-topline">
            <span>Model 0{model.id} · {model.label}</span>
            <span className="cad-status"><i className={`status-dot status-${status}`} />{status === "ready" ? "READY" : status === "loading" ? "LOADING" : status.toUpperCase()}</span>
          </div>
          <div className={`cad-viewer-stage${status === "ready" ? " has-model" : ""}`}>
            <div ref={hostRef} className="model-host" aria-live="polite" />
            {status !== "ready" && (
              <div className="cad-empty-state">
                <div className="cad-placeholder-mark" aria-hidden="true"><Rotate3D size={31} strokeWidth={1.1} /><span /></div>
                <h3>{status === "checking" || status === "loading" ? "Preparing viewer" : status === "error" ? "Viewer unavailable" : "Model export pending"}</h3>
                <p>{message || "The viewer will show the public-safe CAD export here. No substitute geometry is used."}</p>
                {status === "missing" && <code>{model.file}</code>}
              </div>
            )}
          </div>
          <div className="cad-viewer-controls">
            <span>Drag to orbit · scroll or pinch to zoom</span>
            <div className="cad-tool-buttons">
              <button type="button" onClick={resetView} aria-label="Reset model view" disabled={status !== "ready"}><RotateCcw size={16} /> <span>Reset</span></button>
              <button type="button" onClick={fullscreen} aria-label="View model fullscreen" disabled={status !== "ready"}><Maximize2 size={16} /> <span>Expand</span></button>
            </div>
          </div>
        </div>
        <div className="cad-model-list" aria-label="Choose a CAD model">
          <p className="cad-list-kicker">DESIGN ITERATIONS</p>
          {models.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`cad-model-option${selectedId === item.id ? " is-selected" : ""}`}
              onClick={() => setSelectedId(item.id)}
              aria-pressed={selectedId === item.id}
            >
              <span className="cad-model-index">0{item.id}</span>
              <span className="cad-model-label">{item.label}<small>{item.stageNote}</small></span>
              <span className="cad-model-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
          <div className="cad-list-note"><span className="small-rule" /><p>The CAD explains the design direction. Safe operation and vehicle-level performance still need physical validation.</p></div>
        </div>
      </div>
      <article className="cad-reasoning-panel" aria-live="polite">
        <div className="cad-reasoning-number">0{model.id}</div>
        <div className="cad-reasoning-content">
          <p className="eyebrow">WHY THIS MODEL EXISTS</p>
          <h3>{model.reasoningTitle}</h3>
          <p>{model.reasoning}</p>
          <blockquote>{model.question}</blockquote>
        </div>
      </article>
    </div>
  );
}
