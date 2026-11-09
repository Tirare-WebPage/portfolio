# Anurag Mishra — Personal Portfolio

A long-form portfolio presenting Anurag Mishra and Tirare together while keeping the personal portfolio distinct from the company's product site. The site covers the Tirare mobility project, MRII mechanical architecture, design evolution, INSEF research, IIIT Delhi recognition, provisional-application filing record, other projects, personal work and selected achievements.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To create the static export configured for GitHub Pages:

```bash
npm run build
```

The deployable export is written to `out/`. The canonical source is in `app/` and `components/`.

## Page structure

- Hero — Anurag's identity and featured MRII visual
- Tirare — the cargo-tricycle retrofit problem, design intent, founder role and project media
- MRII — mechanical interface, compliant coupling, sprag-clutch / overrunning architecture, physical prototype media and operating conditions
- Design development — four visible CAD stages, reference vehicle models and supporting animations
- Research — INSEF 2026–27 project and research approach
- Milestones — IIIT Delhi E-Pitch Café recognition and provisional-application e-filing acknowledgement
- Other work — F1 in Schools, robotics, Climate Cardinals, student leadership and writing
- Personal record — pigeon rescue photographs and account
- Recognition, About and Contact

All page sections are visible in the scroll flow. There are no accordion stories, hidden CAD panels, dropdowns or start/preview pages.

## Original Tirare pitch assets

Copy the source pitch project's `assets/cad/` and selected `assets/media/` files into this project's `public/assets/` directory:

- 3D models: `public/assets/cad/`
- Videos and pitch photographs: `public/assets/media/`

The `public/models/` directory is not used. The asset names and destinations are listed in `docs/PITCH_ASSET_MAP.md`, `docs/CAD_ASSETS.md` and `docs/STORY_ASSETS.md`.

## Personal photographs and evidence

See `docs/STORY_ASSETS.md` and `docs/EVIDENCE_ASSETS.md`. Priority files include:

- `public/profile/anurag-portrait.jpg`
- `public/evidence/iiitd-award-receiving.jpg`
- `public/evidence/iiitd-grant-certificate.jpg`
- `public/evidence/patent-efiling-acknowledgement.pdf`
- `public/stories/pigeon-rescue/01-balcony.jpg` through `04-aftercare.jpg`
- `public/stories/tirare/mrii-bench-prototype.jpg`

Missing assets appear as labelled image, video, PDF or 3D-model placeholders. The page does not invent personal photographs, certificates or prototype evidence.

## Evidence and publication safeguards

- The MRII physical subsystem has been built and demonstrated; complete vehicle integration and field performance remain to be validated.
- The sprag-clutch / overrunning mechanism is part of the intended architecture. Its isolation behaviour must be demonstrated on the assembled system under matched test conditions.
- CAD and animations communicate design intent; they do not prove safety, reliability or manufacturing readiness.
- The Indian filing is described as a provisional application submitted on 2 October 2026, not a granted patent.
- Redact personal and confidential information from certificates, acknowledgements and filings before publishing.
- The pigeon rescue is a personal account, not a credential or quantified impact claim.
- Wharton competition performance refers to a team simulation, not personal investment returns.

Inspect every GLB for confidential geometry and patent-sensitive dimensions before publishing. Obtain permission before publishing recognisable photographs of other people.
