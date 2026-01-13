# PennyPilot Website

The official landing page for **PennyPilot**, a privacy-first, local-first personal finance application.

This website is designed to be static, lightweight, and respectful of the user, mirroring the philosophy of the application itself. It contains no tracking scripts, analytics, or external dependencies other than Google Fonts.

## Overview

- **Static HTML/CSS/JS**: No build steps or frameworks required.
- **Privacy Focused**: No cookies, no analytics.
- **Auto-Updating**: Fetches the latest APK releases directly from the GitHub API.

## Structure

- `index.html`: Main entry point containing semantic markup.
- `style.css`: Custom vanilla CSS variables, grid layouts, and responsive design.
- `script.js`: Handles fetching and displaying the latest GitHub Releases.
- `assets/`: Contains images and static resources.

## Running Locally

Since this is a static site, you can open `index.html` directly in your browser. However, for the best experience (and to avoid CORS issues with some local setups), it is recommended to serve it via a local server.

### using Python
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

### using VS Code
Install the "Live Server" extension and click "Go Live".

## Deployment

The site is ready for deployment on any static hosting provider (e.g., Veriself, GitHub Pages, Netlify, Vercel).

1. Upload the files to your web root.
2. Ensure the `assets` folder is included.
3. No build script is needed.

## License

This project is part of the PennyPilot ecosystem and is open source.
