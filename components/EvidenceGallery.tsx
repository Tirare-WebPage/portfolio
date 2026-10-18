"use client";

import { useState } from "react";
import { ArrowUpRight, FileImage, X } from "lucide-react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type EvidenceItem = {
  label: string;
  detail: string;
  file: string;
  alt: string;
};

const items: EvidenceItem[] = [
  { label: "IIIT Delhi · E-Pitch Café", detail: "Winner / Proof-of-Concept track and grant confirmation", file: "/evidence/iiitd-grant.jpg", alt: "IIIT Delhi E-Pitch Café award or grant evidence" },
  { label: "Queen’s Commonwealth Essay Competition", detail: "Bronze Medal certificate", file: "/evidence/qcec-bronze.jpg", alt: "Queen’s Commonwealth Essay Competition Bronze Medal certificate" },
  { label: "F1 in Schools · Seraphis", detail: "National Finals qualification / team evidence", file: "/evidence/f1-nationals.jpg", alt: "F1 in Schools National Finals evidence" },
  { label: "WRO Future Engineers", detail: "National finalist / selection record", file: "/evidence/wro-future-engineers.jpg", alt: "WRO Future Engineers competition record" },
  { label: "Robotics for Good · India 2025", detail: "National-stage selection record", file: "/evidence/robotics-for-good.jpg", alt: "Robotics for Good Youth Challenge India 2025 record" },
  { label: "IRIS National Fair · ETSD0071", detail: "Submission confirmation — not a publication certificate", file: "/evidence/iris-submission.jpg", alt: "IRIS National Fair submission confirmation" },
  { label: "GitHub Foundations", detail: "Credential badge or certificate", file: "/evidence/github-foundations.jpg", alt: "GitHub Foundations credential" },
  { label: "Leadership roles", detail: "Student Innovation Council / Climate Cardinals evidence", file: "/evidence/leadership.jpg", alt: "Leadership role confirmation" },
];

function EvidenceTile({ item, onOpen }: { item: EvidenceItem; onOpen: (item: EvidenceItem) => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <button type="button" className={`evidence-tile${loaded ? " has-evidence" : ""}`} onClick={() => loaded && onOpen(item)} aria-label={loaded ? `Open ${item.label} evidence` : `${item.label}: evidence image slot`}>
      <div className="evidence-thumbnail">
        <img src={`${publicBasePath}${item.file}`} alt={item.alt} loading="lazy" onLoad={() => setLoaded(true)} onError={() => setLoaded(false)} />
        {!loaded && <div className="evidence-placeholder"><FileImage size={24} strokeWidth={1.3} /><span>EVIDENCE SLOT</span></div>}
        {loaded && <span className="evidence-open"><ArrowUpRight size={15} /></span>}
      </div>
      <span className="evidence-label">{item.label}</span>
      <span className="evidence-detail">{item.detail}</span>
      {!loaded && <code>{item.file.replace("/", "")}</code>}
    </button>
  );
}

export default function EvidenceGallery() {
  const [active, setActive] = useState<EvidenceItem | null>(null);
  return (
    <>
      <div className="evidence-grid">
        {items.map(item => <EvidenceTile key={item.file} item={item} onOpen={setActive} />)}
      </div>
      {active && (
        <div className="evidence-lightbox" role="presentation" onClick={() => setActive(null)}>
          <div className="evidence-lightbox-panel" role="dialog" aria-modal="true" aria-label={active.label} onClick={e => e.stopPropagation()}>
            <button type="button" className="lightbox-close" aria-label="Close evidence viewer" onClick={() => setActive(null)}><X size={20} /></button>
            <img src={`${publicBasePath}${active.file}`} alt={active.alt} />
            <div><strong>{active.label}</strong><p>{active.detail}</p></div>
          </div>
        </div>
      )}
    </>
  );
}
