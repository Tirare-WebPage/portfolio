"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "work"],
  ["How I think", "process"],
  ["Stories", "stories"],
  ["Research", "research"],
  ["Recognition", "recognition"],
  ["About", "about"],
] as const;

export default function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header portfolio-header">
      <a href="#top" className="portfolio-brand" onClick={close} aria-label="Anurag Mishra, home">
        <span className="portfolio-monogram" aria-hidden="true">AM<span>.</span></span>
        <span className="portfolio-brand-text">ANURAG MISHRA<small>WORK / RESEARCH / NOTES</small></span>
      </a>
      <nav className={`desktop-nav portfolio-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={close}>Contact <ArrowUpRight size={14} /></a>
      </nav>
      <button className="mobile-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
