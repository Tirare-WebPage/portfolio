# Anurag Mishra — Personal Portfolio

A personal work archive, separate from Tirare’s company website. It documents selected projects, the process behind the work, personal stories, research status, recognitions and supporting evidence.

## Preview

Open `preview.html` directly in a browser to inspect the layout and story flow without installing Node packages. The 3D models and Google Drive paper still need their online assets/permissions; use the Next.js app for the full interactive experience.

## Run locally on Windows

Install Node.js LTS first, then open PowerShell in this folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`. Keep the terminal open while using the local website.

To create a static export for hosting, run:

```powershell
npm.cmd run build
```

Next.js exports the static site into `out/` using the current `next.config.ts` configuration. Preview the exported folder with a static server before publishing.

## What is included

- Responsive portfolio homepage and navigation
- Work sections for Tirare/MRII, F1 in Schools and robotics
- A five-step process section explaining the design approach
- Four-stage interactive CAD viewer with stage-specific design reasoning
- Collapsible project stories: Tirare’s origin, the repaired laptop, the early design revision, the F1 second opportunity, and a personal essay about "the art of not ignoring"
- MRII technical animation embed (the long physical-prototype video and founder-pitch video are not embedded)
- IRIS research section with a Google Drive preview and external fallback
- Recognition and certificate/evidence gallery with honest placeholders
- Accessible nav, reduced-motion handling, contact links and metadata

## Add the four CAD models

See `docs/CAD_ASSETS.md`. Place reviewed, public-safe exports in `public/models/` with these names:

- `trike-cad-01.glb`
- `trike-cad-02.glb`
- `trike-cad-03.glb`
- `trike-cad-04.glb`

The viewer supports orbit, zoom, reset and fullscreen. It loads `<model-viewer>` from a CDN at runtime and therefore requires internet access to load the interactive viewer. Missing `.glb` files show placeholders. Review patent-sensitive geometry before publishing.

## Add certificates and evidence

See `docs/EVIDENCE_ASSETS.md` for the exact filenames. Gallery items remain placeholders until a file is added. Redact private identifiers and contact details before adding any document image to a public site.

## Research paper

The IRIS paper is embedded using the supplied Drive file ID. The source document must have link-view permissions for visitors to see the embed. If it does not, use the external Drive control on that section or change the sharing setting yourself. The project is labelled submitted for evaluation, not published or peer-reviewed.

## Important editorial boundaries

- MRII provisional application no. `202611118183` is a provisional filing, not a granted patent.
- The MRII subsystem has been physically demonstrated; full cargo-tricycle integration and field performance remain to be validated.
- QCEC wording is Bronze Medal; no international numerical rank is claimed.
- F1 in Schools is described as a team National Finals qualification. The 1.2-second / 60-metre claim is omitted pending verification of its track and timing context.
- Wharton competition gains are labelled as simulation results, not real money earned.
- The pigeon rescue is a writing/story item only, not a credential or achievement.
- Personal diary details, private family experiences and private correspondence are not reproduced by default.

## Before publishing

1. Add actual project photos, checked certificates and cleared CAD exports.
2. Confirm the embedded research paper can be viewed by the intended audience.
3. Verify competition status wording against the actual certificates/official notices.
4. Review all CAD and media for intellectual-property and privacy risks.
5. Test on mobile, keyboard-only navigation and at least one other browser.
