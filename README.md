# SHPE FAU Website

A modern, responsive website for the **Society of Hispanic Professional Engineers at Florida Atlantic University**, built with **React (CRA), Tailwind CSS, and Supabase**.

## 🚀 Features

* **Responsive Design** with Tailwind CSS
* **Multi-page Navigation** via React Router
* **Reusable Components** (modular architecture)
* **Modern UI** based on Figma designs
* **Accessibility** with semantic HTML and keyboard navigation
* **Supabase Integration** for backend data and authentication

---

## 📂 Project Structure

```
src/
├── components/             # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Section.jsx
│   ├── AboutSection.jsx
│   ├── StatsSection.jsx
│   ├── EventsSection.jsx
│   └── CTASection.jsx
├── pages/                  # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Events.jsx
│   ├── Resources.jsx
│   ├── Sponsors.jsx
│   └── Contact.jsx
├── content/                # JSON content (board, team, sponsors, events)
├── App.jsx                 # Main app + routes
├── index.js                # CRA entry (React 18 createRoot)
└── index.css               # Global styles (Tailwind)
```

---

## 🛠️ Getting Started

### Dockerized Development

We have a diverse group of contributors, and each has a different setup (e.g., Mac, Windows, Linux). To ensure a consistent runtime environment for everyone, we've added Docker files to facilitate setup.

#### Prerequisites

* [Docker](https://www.docker.com)
* [Node](https://nodejs.org/en) (v22)

Even though the app runs in Docker, you may want to install Node for editor integration (e.g., for autocompletion, linting, or type checking).

#### Installation

```bash
npm install
```

Installing Node and running `npm install` locally ensures that your editor recognizes all dependencies and provides better development tooling.

#### Run (Development)
To start the container/app:
```bash
docker compose up
```

Use the `-d` flag to run in the background and check the logs with:
```bash
docker compose logs -f
```

Stop/delete container:
```bash
docker compose down
```

### Running Locally

You can run the app directly on your machine without Docker. However, using Docker is recommended to avoid environment inconsistencies.

#### Prerequisites

* [Node.js](https://nodejs.org/en) (v22 recommended; Node v16–20 work; CRA supports Node ≥14).
  * `npm`: It comes with Node.
* [`nvm`](https://github.com/nvm-sh/nvm) (optional): You can run `nvm use` to ensure you have the same Node version installed.

#### Installation

```bash
npm install
```

#### Run (Development)

```bash
npm start
```

* Runs at **[http://localhost:3000](http://localhost:3000)**.
* Supports hot reload.

#### Build (Production)

```bash
npm run build
```

* Outputs static site into `build/`.

---

## 🔑 Environment Variables (CRA)

CRA only exposes variables that start with `REACT_APP_`.

Create a `.env` file at project root:

```env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

Example Supabase client (`src/lib/supabaseClient.js`):

```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

---

## 🎨 Tailwind CSS Setup

Already configured with CRA:

**`postcss.config.js`**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**`tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shpe-blue': '#192858',
        'shpe-red': '#DC2626',
        'shpe-gold': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**`src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧭 Routing

**`App.jsx`** example:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
```

**`src/index.js`** entry point:

```js
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

---

## 🎨 Design System

### Colors

* **Primary (Navy Blue)**: `#192858`
* **Secondary (Red)**: `#DC2626`
* **Accent (Gold)**: `#F59E0B`

### Typography

* Font: Inter (Google Fonts)
* Headings: 600–700 weight
* Body: 400 weight

### Component Variants

* **Buttons**: primary, secondary, outline
* **Cards**: default, elevated, outlined, filled

---

## 🧩 Customization

### Adding New Pages

1. Create a file in `src/pages/`
2. Add a `<Route>` in `App.jsx`
3. Link it in `Navbar.jsx`

### Updating Content

* JSON-driven data in `src/content/`
* Components pull directly from JSON files (board, team, sponsors, events)

---

## 🛠️ Technologies Used

* React 18 (CRA)
* React Router 6
* Tailwind CSS 3
* PostCSS + Autoprefixer
* Supabase (backend)

---

## 🌐 Browser Support

* Chrome, Firefox, Safari, Edge (latest)

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/branch-name`)
3. Run locally with `npm start`
4. Commit + push your changes
5. Open a Pull Request to `main`

---

## 📦 Deployment (Optional: Firebase Hosting)

1. Install Firebase CLI:

   ```bash
   npm i -g firebase-tools
   firebase login
   ```
2. Initialize Hosting:

   ```bash
   firebase init hosting
   # Public dir: build
   # Configure as SPA: Yes
   ```
3. Deploy:

   ```bash
   npm run build
   firebase deploy
   ```

---

## 📜 License

MIT License
