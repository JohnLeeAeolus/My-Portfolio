# Portfolio (React + Vite)

Single-page portfolio website built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Customize

- Update your name, role, location, email, links, projects, and skills in `src/content.js`.
- Theme and layout tokens live in `src/index.css` (`--accent`, `--bg`, `--surface`, `--container`).

## Pages

- `/` Home
- `/about` About
- `/projects` Projects
- `/contact` Contact

## Deploy note

If you deploy to a static host, configure a rewrite so all routes serve `index.html` (SPA routing).
