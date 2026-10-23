# IKS Digital Heritage Hub

A bilingual (English + Marathi), responsive digital exhibition for Indian Knowledge Systems (IKS) student projects. Built with plain HTML, CSS and JavaScript for GitHub Pages.

https://virajpathak27.github.io/iks-digital-heritage-hub/

## Features

- Responsive heritage/museum-inspired design
- English and Marathi interface and project content
- Search and category filtering
- Dedicated project detail pages using stable hash URLs
- QR code for every project page
- Downloadable QR PNG and printable QR label
- Project records maintained in `data/projects.json`
- No build step, package manager, or server required
- Works as a GitHub Pages static site

## Project files

```text
iks-digital-heritage-hub/
├── index.html
├── assets/
│   ├── app.js
│   └── styles.css
├── data/
│   └── projects.json
├── README.md
└── LICENSE
```

## Run locally

Because the project fetches JSON, open it through a local HTTP server rather than double-clicking `index.html`.

With Python installed, run this from the project directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

QR generation uses QRCode.js from a CDN, so the first load and QR creation need an internet connection. The website content itself is static; project pages do not require a backend.

## Publish on GitHub Pages

1. Create a **public** GitHub repository, for example `iks-digital-heritage-hub`.
2. Upload all files and folders from this project. Keep `index.html` at the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the GitHub Pages deployment to finish. The URL is typically:
   `https://YOUR-USERNAME.github.io/iks-digital-heritage-hub/`
7. Open the published site and test a project page and its QR code from a phone.

If the repository is named `YOUR-USERNAME.github.io`, the URL is typically `https://YOUR-USERNAME.github.io/`.

## Add a new project

Edit `data/projects.json` and add an object to the array. Keep each `id` unique and URL-safe. Example:

```json
{
  "id": "example-project",
  "title": {
    "en": "Example IKS Project",
    "mr": "उदाहरण IKS प्रकल्प"
  },
  "category": "History",
  "categoryMr": "इतिहास",
  "period": {
    "en": "Historical period",
    "mr": "ऐतिहासिक कालखंड"
  },
  "region": {
    "en": "Region, India",
    "mr": "प्रदेश, भारत"
  },
  "summary": {
    "en": "A short summary of the project.",
    "mr": "प्रकल्पाचा थोडक्यात मराठी सारांश."
  },
  "description": {
    "en": "Detailed project description with careful, sourced claims.",
    "mr": "संदर्भाधारित प्रकल्पाचे सविस्तर वर्णन."
  },
  "format": "Research report",
  "student": "Student project",
  "mediaUrl": "https://example.com",
  "mediaLabel": {
    "en": "Project resource",
    "mr": "प्रकल्प स्रोत"
  },
  "references": [
    {
      "label": "Source title",
      "url": "https://example.com"
    }
  ],
  "icon": "📚",
  "theme": "terracotta"
}
```

Allowed theme values used in the demo: `terracotta`, `teal`, `indigo`, `green`, `ochre`, `plum`. Keep the JSON valid: use double quotes and commas between objects.

After committing the JSON change, GitHub Pages redeploys the site. The new project page will be available at:

`https://YOUR-USERNAME.github.io/iks-digital-heritage-hub/#project/example-project`

## QR code behavior

The QR code encodes the current project's URL. On a locally served site, the QR points to localhost and will not work on another person's phone. **Generate/download final QR codes only after publishing the website**, so the QR contains the public GitHub Pages URL.

Project URLs are based on the currently opened site, so they work with both user-site and repository-site GitHub Pages URLs. The project identifier is in the URL hash (`#project/id`), allowing GitHub Pages to serve the same `index.html` for all project detail pages.

QR generation relies on the QRCode.js CDN (`cdnjs.cloudflare.com`). Ensure internet access when generating or downloading QR images.

## Suggested project submission standards

- Include a short summary and a more detailed description.
- Cite reliable books, institutional sources, papers or official resources.
- Credit images and verify that they may be reused.
- Do not publish private student information without consent.
- Clearly distinguish documented evidence from interpretation or belief.
- Test each QR code with more than one phone before printing.

## Customisation

- Change colours and layout in `assets/styles.css`.
- Change interface translations in the `T` object in `assets/app.js`.
- Add or edit projects in `data/projects.json`.
- Update title, description and theme color in `index.html` as needed.

## Important limitation

GitHub Pages is static hosting. It does not provide a database, secure admin login, or server-side submission handling. This version deliberately uses JSON edited through GitHub. If a teacher-approved submission workflow is needed later, integrate a suitable form service or backend.

## License

See `LICENSE`. Verify the rights for any third-party content, images and linked research material before reuse.
