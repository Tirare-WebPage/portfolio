# Deploy the portfolio to GitHub Pages

This patch prepares the existing Next.js portfolio repository `Tirare-WebPage/portfolio` for GitHub Pages.
The intended URL is **https://tirare-webpage.github.io/portfolio/**.

## Files to copy into the repository

Copy the files and folders in this patch into the root of the existing GitHub repository, preserving their relative paths and replacing the files that already exist:

- `.github/workflows/deploy.yml`
- `next.config.ts`
- `app/layout.tsx`
- `app/page.tsx` (includes the LinkedIn icon fix and Queen’s Commonwealth certificate link)
- `preview.html` (keeps the standalone preview in sync)
- `components/EvidenceGallery.tsx`
- `components/PortfolioCadExplorer.tsx`

Do not delete the repository's existing `package-lock.json`; the workflow uses `npm ci`.

## Turn on Pages

1. Open https://github.com/Tirare-WebPage/portfolio/settings/pages
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Commit and push the changed files to the `main` branch. Adding `.github/workflows/deploy.yml` will trigger the build automatically.
4. Open the **Actions** tab and select **Deploy portfolio to GitHub Pages**. Wait for the build and deployment jobs to show green check marks.
5. The deployed page should be available at https://tirare-webpage.github.io/portfolio/ .

The workflow builds Next.js's static `out/` directory and publishes it with GitHub Pages. It also configures `/portfolio` as the site's base path and prefixes the manually referenced files in `public/`. Local development remains rooted at `http://localhost:3000/`.

## Troubleshooting

If the workflow fails, open the failed run in **Actions**, expand the first red step, and use that error to diagnose the build. Pages will not publish until the workflow succeeds.
