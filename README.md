# Northfield Advisory — landing page

Plain HTML/CSS/JS, no build step needed. Files:

- `index.html` — page structure and copy
- `style.css` — all styling (colors/fonts are defined as CSS variables at the top)
- `script.js` — mobile nav toggle, footer year, contact form handling

## Customize it

1. Replace "Northfield Advisory" and the copy in `index.html` with your real business name and content.
2. Colors and fonts live at the top of `style.css` under `:root` — change `--accent`, `--bg`, etc. there and the whole site updates.
3. The contact form in `index.html` doesn't send anywhere yet (GitHub Pages only serves static files, it can't run a server). Options to make it actually work:
   - [Formspree](https://formspree.io) — free tier, just point the form's `action` at your Formspree endpoint and remove the JS `preventDefault` in `script.js`.
   - [Netlify Forms](https://www.netlify.com/platform/core/forms/) — if you host on Netlify instead.
   - Your own backend/API, if you have one.

## Publish it on GitHub Pages

1. Create a new repository on GitHub (e.g. `northfield-site`).
2. Push these three files to it:
   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two, then your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

To use a custom domain instead, add a `CNAME` file with your domain name, and point your domain's DNS to GitHub Pages (GitHub's docs walk through the exact records to add).
