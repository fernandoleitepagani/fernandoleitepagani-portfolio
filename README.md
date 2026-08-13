# Portfolio

A minimal, monochrome, terminal/vim-themed portfolio site. Pure HTML and CSS,
no JavaScript, no build step, no external requests (system fonts only).

## Structure

```
.
├── index.html      the whole page
├── style.css       all styling
├── favicon.svg      small ">_" tab icon
├── assets/
│   ├── photo.jpg    (add this yourself)
│   └── resume.pdf   (add this yourself)
└── README.md
```

## 1. Add your photo

Drop an image at `assets/photo.jpg`. Then in `index.html`, find this block
inside `<section id="about">` and replace it:

```html
<div class="photo-placeholder">
  <p>[ image ]</p>
  <p class="dim">assets/photo.jpg</p>
</div>
```

with:

```html
<img class="photo" src="assets/photo.jpg" alt="Photo of [Your Name]">
```

The CSS applies a grayscale filter automatically, so any photo you add will
stay on-theme even if it's in color.

## 2. Add your CV

Drop your file at `assets/resume.pdf`. The existing link in the "CV" section
(`href="assets/resume.pdf"`) will just start working — no other change
needed. If you'd rather link to a different filename, update that `href`.

## 3. Edit the text

Open `index.html` and replace the placeholder text:

- `[Your Name]` (appears twice: `<title>` in `<head>` is fine to leave, but
  update the `<h1>` and the meta description)
- the tagline under your name
- the `about.md` paragraphs
- the email / GitHub / LinkedIn links in the contact section

## 4. Publish with GitHub Pages

1. Create a new GitHub repository (public).
2. Push these files to the `main` branch, at the repo root.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://yourusername.github.io/repo-name/`
   after a minute or two.

If you want the site at `https://yourusername.github.io/` directly (no
`/repo-name/` path), name the repository `yourusername.github.io`.

## Notes for extending it

- Everything is one page (`index.html`) split into `<section>` blocks
  (`about`, `cv`, `contact`) — add more the same way.
- Colors, spacing, and type scale are all CSS custom properties or
  `clamp()` values at the top of `style.css` — change `--bg` / `--fg` there
  if you want a different shade rather than pure black/white.
- No animation and no JavaScript were used on purpose, per the brief. If you
  later want a hover transition or a small script (e.g. a contact form),
  those are the two places to add them.
