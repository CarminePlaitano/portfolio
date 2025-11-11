<!--
  README for CarminePlaitano/portfolio
  Paste this into README.md in the repo root
-->

<section align="center">
  <h1>Carmine Plaitano</h1>
  <h3>
    <strong>My personal website portfolio.</strong><br />
    Find the live site at <a href="https://carmineplaitano.it" target="_blank">carmineplaitano.it</a>
  </h3>
</section>

---

<section>
  <h2>📘 About</h2>
  <p>
    This repository contains the source code of my personal portfolio website. It showcases my recent work, contact information,
    and links to projects and social profiles. The site is implemented using <strong>React</strong> + <strong>TypeScript</strong>,
    bundled with <strong>Vite</strong>, styled with SCSS/CSS, and supports localization (i18next).
  </p>
</section>

<section>
  <h2>🧩 Highlights</h2>
  <ul>
    <li>Modern front-end stack: React + TypeScript + Vite</li>
    <li>Localized content using <code>i18next</code></li>
    <li>SCSS and modular styling</li>
    <li>Fast dev server and optimized builds</li>
    <li>Designed to be easily deployed to Vercel / Netlify / any static host</li>
  </ul>
</section>

<section>
  <h2>🗂 Repository structure</h2>
  <pre>
  .
  ├─ .github/               # CI / workflows
  ├─ public/                # Static public files
  ├─ src/                   # React + TypeScript source
  ├─ index.html
  ├─ package.json
  ├─ vite.config.ts
  └─ README.md
  </pre>
</section>

<section>
  <h2>🚀 Getting started — run locally</h2>

  <details>
    <summary><strong>Prerequisites</strong></summary>
    <ul>
      <li>Node.js (>= 16 recommended)</li>
      <li>npm or yarn</li>
    </ul>
  </details>

  <details>
    <summary><strong>Install & run</strong></summary>

```bash
# clone
git clone https://github.com/CarminePlaitano/portfolio.git
cd portfolio

# install dependencies
npm ci
# or
# yarn install

# start dev server
npm run dev
# or
# yarn dev

# open http://localhost:5173 (or the port printed by Vite)
