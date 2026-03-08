# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/blog site for Bernardo Farah built with **Hugo** (v0.155+). Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Commands

- **Dev server:** `hugo server -D` (includes draft content)
- **Build:** `hugo`
- **Production build:** `hugo --gc --minify`
- **New content:** `hugo new posts/my-post.md`, `hugo new projects/my-project.md`, `hugo new resume/my-job.md`
- **Print test:** Generate PDF with Chrome headless to verify print layout:
  ```
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf=/tmp/resume.pdf --no-pdf-header-footer http://localhost:1313/resume/
  ```

## Architecture

### Content Types

Three content types under `content/`:
- **posts/** — Blog articles (markdown with title, date, tags, description; optional `href` for external links, shown with ↗ indicator)
- **projects/** — External project links (title, href, description; no standalone pages generated)
- **resume/** — Work experience entries (company, location, from/to dates; no standalone pages generated). Jobs are grouped by company in the template.

Structured resume data (summary, education, interests) lives in `data/resume.yml`.
Homepage content (intro copy) lives in `content/_index.md`.

### Theme

Everything UI-related is in `themes/bernardo.me/`:
- `layouts/` — Hugo templates; `_default/` for base layouts, type-specific dirs for overrides
- `partials/` — Reusable template fragments (baseof.html is the base template)
- `assets/scss/` — SCSS stylesheets; `main.scss` is the entrypoint
- `static/` — Fonts, favicons, CNAME
- `archetypes/` — Templates for `hugo new` commands
- `assets/scss/base/_vendor.scss` — Vendored Bourbon/Neat utilities (modular-scale, tint, shade, media mixin)

Top-level `layouts/` overrides theme templates (e.g., `layouts/index.html` for homepage).

### Layout Pattern

The site uses a consistent width pattern:
- **Header/footer:** 55em
- **Intro sections:** 55em with `border-bottom` (homepage `.intro`, resume `.resume-intro`)
- **Detail content:** 45em (resume `.resume`, blog posts)

This creates a visual bridge from the wide header to narrower content.

### Styling

- SCSS compiled via Dart Sass (`css.Sass` pipe)
- **Important:** Use `.RelPermalink` (not `.Permalink`) for CSS links to avoid CORS issues with Hugo's dev asset server
- Color system: orange primary (#f29e0b), blue secondary (#337196)
- Typography: Newsreader (serif body), Texta (sans-serif headings), Office Code Pro (monospace)
- Breakpoints: `$medium-screen-up` (600px), `$large-screen-up` (900px) via vendored `media()` mixin
- Print styles in `main.scss` `@media print` block — resume page breaks use `break-inside: avoid` on `.job` elements
- Logo dot animation (`.accent`) only plays on fresh visits via `document.referrer` check

### Config

`config.yml` — Hugo configuration including site params, social links, Google Analytics ID, and disabled taxonomies.

## TODO

- **Modernize CSS:** Replace vendored Bourbon/Neat utilities with modern CSS. `modular-scale()` → CSS `clamp()`/custom properties, `tint()`/`shade()` → `color-mix()`, `@include media()` → plain `@media` queries. The vendored functions in `_vendor.scss` are the last legacy dependency.
