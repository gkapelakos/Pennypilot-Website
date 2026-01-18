# PennyPilot Website

The official landing page for PennyPilot, a privacy-centric and local-first personal finance application.

This repository contains the source code for the PennyPilot marketing website and download portal. Built with React and Vite, the site is engineered for performance and accessibility, mirroring the core principles of the PennyPilot application: simplicity, efficiency, and absolute user privacy.

## Technical Architecture

The application is built using a modern, lightweight frontend stack:

- **Framework**: React 18
- **Build Tooling**: Vite
- **Routing**: React Router 6
- **Iconography**: Lucide React
- **Styling**: Vanilla CSS with custom property tokens, CSS Grid, and responsive fluid typography.

## Core Features

- **Privacy Autonomy**: The website contains zero tracking scripts, third-party cookies, or analytical engines.
- **Dynamic Release Integration**: Automated integration with the GitHub Releases API to provide real-time access to the latest APK distributions.
- **Mobile-Responsive Design**: A robust user interface optimized for mobile stability using dynamic viewport units and high-precision touch targets.
- **Modern Aesthetic**: A premium interface utilizing glassmorphism effects and hardware-accelerated animations.

## Directory Structure

- `src/components/`: Modular UI components including navigation and structural layouts.
- `src/pages/`: Page-level components defining the site's primary views.
- `src/index.css`: Centralized design system and global style definitions.
- `public/`: Static assets and media resources.

## Local Development

### Prerequisites

- Node.js (Latest Long Term Support version)
- npm (distributed with Node.js)

### Installation and Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/gkapelakos/Pennypilot-Website.git
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Initiate the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

## Deployment and Build Process

To generate a production-optimized distribution:

```bash
npm run build
```

The resulting assets will be located in the `dist/` directory. This output is ready for deployment to any static hosting environment, such as Veriself, GitHub Pages, or dedicated web servers.

## License

This project is a component of the PennyPilot ecosystem and is distributed under the terms of the MIT License. Refer to the `LICENSE` file for full legal documentation.
