# ⚡ Shahnawaz Hussain // Portfolio 3.0

A high-performance personal portfolio built with **React 19**, **Tailwind CSS v4**, and **Vite 7**, designed with a custom **editorial brutalism & technical HUD** aesthetic. This repository showcases my projects, engineering focus, and professional history without relying on generic web templates.

---

## 🛠️ Key Technical Features

### 1. Blueprint Wireframe Mode (`SYS_GRID`)
* Includes a floating system diagnostics button (`SYS_GRID`). 
* When enabled, it applies a `.blueprint-active` class that dynamically overlays dashed wireframes around all component box models and displays a subtle grid canvas background, making the structure transparent.

### 2. Terminal Stdout Experience (Experience Logs)
* The professional history section is styled as an interactive log console.
* Categorizes entries dynamically into `WORK_LOG` and `EVENT_LOG` process logs.
* Selecting log entries dynamically streams metadata details, timestamps, and project scopes in a console-like pane.

### 3. Technical Custom Cursor
* Features an interactive crosshair square cursor on desktop viewports.
* Tracks mouse coordinates with damping physics and displays live, context-aware command tags (e.g. `[SELECT]`, `[PROJECT]`) when hovering interactive elements.

### 4. Background Geolocation Visitor Telemetry
* Integrates a client-side telemetry tracker (`client/src/utils/tracker.js`) that queries geocoded IP coordinates (city, region, country, ISP) on mount.
* Automatically sends visit alerts and heartbeat likes directly to the inbox using a secure Web3Forms webhook without exposing personal email addresses.

---

## 🗂️ Project Structure

```text
├── client/
│   ├── src/
│   │   ├── components/       # Custom HUD and modular layout nodes
│   │   ├── pages/            # Core content viewport sections
│   │   ├── data/             # Experience log datasets & Project arrays
│   │   ├── utils/            # Visitor tracker and HTTP webhook modules
│   │   ├── style.css         # Tailwind v4 theme configurations & resets
│   │   └── index.css         # Global baseline styles & custom cursors
│   ├── package.json          # Frontend client-side dependencies
│   └── vite.config.js        # Vite bundler parameters
├── package.json              # Root command proxy scripts (dev, build, install)
└── vercel.json               # SPA routing configurations for Vercel
```

---

## ⚙️ Local Development Setup

Thanks to a root-level helper, you can install dependencies and run the project directly from the root folder without manual directory changes:

### 1. Install Dependencies
```bash
npm run install-client
```

### 2. Configure Environment Variables
Create a `.env` file inside the `client/` directory:
```bash
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```
*(Get a free access key instantly at [Web3Forms](https://web3forms.com) to receive visitor email logs).*

### 3. Run Dev Server
```bash
npm run dev
```
The server will start listening at **`http://localhost:5173/`**.

### 4. Production Build
Generate optimized static bundle assets:
```bash
npm run build
```
Compiled output will reside inside `client/dist/` ready for static deployment.

---

## 🧰 Technology Stack
* **Framework**: React 19.x (Single Page Architecture)
* **Styling**: Tailwind CSS v4.x (@theme custom variables)
* **Motion**: Framer Motion 12.x (Micro-interactions & entrance animations)
* **Bundler**: Vite 7.x (Hot Module Replacement)
* **Icons**: Lucide React
