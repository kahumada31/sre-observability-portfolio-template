# 📊 SRE & Observability Portfolio Template
> A modern, high-tech, dark-themed developer and SRE portfolio template tailored for **Site Reliability Engineers, Observability Analysts, DevOps Engineers, and Cloud Infrastructure Specialists**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success.svg)](https://pages.github.com/)
[![Built with HTML5 & CSS3](https://img.shields.io/badge/Built%20with-Vanilla%20JS%20%7C%20CSS3-cyan.svg)](https://developer.mozilla.org/)
[![Responsive](https://img.shields.io/badge/Design-100%25%20Responsive-brightgreen.svg)](#)

---

## 🌟 Live Demo

Check out the live demo here: **[https://kahumada31.github.io/](https://kahumada31.github.io/)**

---

## ⚡ Features

- **📡 Live Telemetry Status Ticker:** Real-time animated top bar displaying SLO uptime, P95 latency, and incident standby status.
- **📈 Interactive Observability Console (Showcase APM):**
  - **Live Canvas Chart:** Real-time throughput (TPS) vs latency time-series rendering with smooth Bézier curves.
  - **Synthetics Monitor:** Multi-step monitor cards with HTTP 200 checks, latency, and status badges.
  - **Distributed Traces Visualizer:** Waterfall trace cascade broken down by microservice and database spans.
- **⭐ Verified Certifications Hub:** Interactive cards with category filters (*Observability, Cloud, Security*) and direct credential verification links.
- **🕒 Experience Timeline:** High-impact timeline formatted for critical operations, major incident response (P1/P2 War Rooms), and measurable achievements.
- **🧩 Skills & Competencies Matrix:** Organized by domain expertise (APM, SRE, Infrastructure, Backend) without counterproductive percentage bars.
- **📋 1-Click Clipboard Copy:** Instant toast notification for copying email address.
- **🚀 100% Vanilla & Ultra Lightweight:** No heavy dependencies, no jQuery, no framework overhead — blazing-fast 100/100 Google Lighthouse score.

---

## 🚀 Quick Start (Deploy in 3 Minutes)

### Step 1: Use this Template
1. Click the green **`Use this template`** button at the top right of this repository (or select **Create a new repository**).
2. Name your new repository: `tu-usuario.github.io` (replace `tu-usuario` with your GitHub username).
3. Set the repository to **Public**.

### Step 2: Customize your Data
Clone your new repository to your local machine:
```bash
git clone https://github.com/tu-usuario/tu-usuario.github.io.git
cd tu-usuario.github.io
```

Open `index.html` in your favorite editor (VS Code, Sublime, etc.) and replace the placeholder fields:
- `[TU NOMBRE]` ➔ Your Full Name
- `[Tu Especialidad / Cargo]` ➔ Your Job Title
- `tu-email@ejemplo.com` ➔ Your Contact Email
- Customize your Experience, Certifications, and Social links.

### Step 3: Publish to GitHub Pages
Push your changes back to GitHub:
```bash
git add .
git commit -m "feat: customize portfolio with my credentials"
git push origin main
```

1. Go to your repository **Settings** ➔ **Pages** (in the left sidebar).
2. Under **Branch**, select `main` and root `/`.
3. Click **Save**.
4. 🎉 Your portfolio is live at `https://tu-usuario.github.io/`!

---

## 🎨 Customization Guide

### Changing Accent Colors
In `css/styles.css`, you can change the global CSS variables at the top of the file:

```css
:root {
  --telemetry-green: #10B981;   /* Healthy status & SLOs */
  --telemetry-cyan: #06B6D4;    /* Primary APM accent */
  --telemetry-indigo: #6366F1;  /* Tracing accent */
  --bg-primary: #070B14;        /* Canvas background */
}
```

---

## 📁 Repository Structure

```text
├── index.html            # Main semantic HTML structure & content
├── css/
│   └── styles.css        # Modular design tokens & responsive styling
├── js/
│   └── app.js            # Telemetry simulation engine & UI interactivity
├── assets/               # Folder for custom images, badges & CV PDF
├── LICENSE               # MIT License
└── README.md             # Documentation & getting started guide
```

---

## 📄 License & Attribution

This project is licensed under the **MIT License** — free to use for personal and commercial portfolios.

Created with 💙 by **[Axel Kabir Ahumada Tenazoa](https://github.com/kahumada31)** ([LinkedIn](https://www.linkedin.com/in/axel-kabir-ahumada-tenazoa/)).

If this template helped you, please give it a ⭐ **Star** on GitHub!
