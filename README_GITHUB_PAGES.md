# Deploy the portfolio to GitHub Pages

This repository is configured to export a personal portfolio to **https://tirare-webpage.github.io/portfolio/**. Tirare is presented as Anurag's flagship project, while this remains the personal website.

## Deploy

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Commit and push the complete updated project to the `main` branch.
4. Open the **Actions** tab and inspect the Pages workflow.
5. When build and deployment succeed, the site will be published at the URL above.

The workflow should build the Next.js `out/` directory with `GITHUB_PAGES=true` so the `/portfolio` base path is applied. Keep `package-lock.json` committed for `npm ci`.

## Add files

Copy CAD and pitch media into `public/assets/cad/` and `public/assets/media/`. Add certificates and personal photographs at the exact paths listed in `docs/EVIDENCE_ASSETS.md` and `docs/STORY_ASSETS.md`. The website now references `public/assets/`; it does not use `public/models/`.

GitHub Pages paths are case-sensitive. Preserve file names or update the matching path in `app/page.tsx`. Do not commit `.env` files, API keys, private documents, unredacted e-filing acknowledgements or patent-sensitive CAD.
