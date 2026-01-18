# PennyPilot Website

This repository contains the source code for the official PennyPilot landing page and download portal. The website is engineered to provide a high-performance, accessible, and privacy-centric interface for the PennyPilot ecosystem.

## Overview

The PennyPilot website serves as the primary distribution channel and informational hub for the application. Reflecting the core principles of the PennyPilot app, this platform is optimized for efficiency, performance, and complete user privacy.

## Technical Specifications

The platform utilization a modern frontend architecture built for speed and stability:

- **Framework**: React 18
- **Build Engine**: Vite
- **Navigation**: React Router 6
- **Iconography**: Lucide React
- **Design System**: Vanilla CSS implementation utilizing CSS Variable tokens, Grid layouts, and fluid typography.

## Key Features

- **Privacy-Centric**: Zero tracking scripts, third-party cookies, or analytics engines are utilized.
- **Automated Distribution**: Direct integration with the GitHub Releases API for real-time access to the latest application binaries (APK).
- **Responsive Architecture**: Fully optimized for mobile and desktop environments using modern CSS layout techniques.
- **Premium Interface**: A sophisticated design utilizing hardware-accelerated animations and modern glassmorphism effects.

## Project Structure

- `src/components/`: Modular UI components and structural layouts.
- `src/pages/`: Primary page-level views and routing logic.
- `src/index.css`: Design system tokens and global style definitions.
- `public/`: Static assets and media resources.

## Development Environment

### Prerequisites

- Node.js (Latest LTS version)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gkapelakos/Pennypilot-Website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The local environment will be available at `http://localhost:5173`.

## Build and Deployment

To generate a production-optimized distribution:

```bash
npm run build
```

The compiled assets will be generated in the `dist/` directory, ready for implementation on any static hosting provider.

## License

This project is a component of the PennyPilot ecosystem and is distributed under the MIT License. Refer to the `LICENSE` file for full documentation.
