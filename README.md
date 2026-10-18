# The Dark Square Sovereign — Chess Club Dashboard

A responsive, dark-themed club landing page made with plain HTML, CSS, and JavaScript. It uses your club link:

**https://www.chess.com/club/club-f0acc5c5**

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser. For the most reliable behavior, use a simple local server or GitHub Pages.

## Publish it free with GitHub Pages
1. Sign in to GitHub and create a new repository, for example `dark-square-sovereign`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README (plus the `assets` and `music` folders if you keep them).
3. Open the repository's **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub to publish the page. The Pages URL will appear in that settings screen.

## Embed it in a Chess.com club sidebar
If your club editor supports HTML iframes, paste this and replace `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY` with your real GitHub Pages details:

```html
<iframe
  src="https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/"
  title="The Dark Square Sovereign club dashboard"
  width="100%"
  height="900"
  style="border:0;max-width:100%;"
  loading="lazy">
</iframe>
```

**Important:** Chess.com may restrict iframe embeds, scripts, styling, or external content in club sidebars. If the iframe is blocked, use the hosted page as a separate link or paste a simplified static sidebar instead. A page hosted on GitHub Pages cannot bypass Chess.com's content rules.

## What's included
- Responsive layout for desktop and mobile
- Club link buttons and copy-link tool
- Club principles, tactics links, and community cards
- Floating toolbox with scan effect, celebration, glow toggle, and page navigation
- Keyboard-friendly controls and reduced-motion support

## Customize
- Club link: update `CLUB_URL` in `script.js` and the club links in `index.html` if your club URL ever changes.
- Colors: edit the CSS variables at the top of `styles.css`.
- Wording: edit the headings and paragraphs in `index.html`.
- Fonts: the design uses system fonts and does not require an external font service.

## Music and assets
This starter does not include copyrighted music or image files. See `music/README.txt` and `assets/README.txt` for notes if you decide to add your own media.
