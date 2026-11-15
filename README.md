# Morrow landing page

Morrow is a fictional client-work platform created for the Sankar Group front-end development assignment. The landing page includes a responsive navigation, product overview, feature cards, a three-step explainer, interactive monthly/yearly pricing, and a demo request form with client-side validation and a success state. The copy describes a small service team's everyday work instead of relying on placeholder customer claims.

## Run locally

No package dependencies or build step are required. From this folder, start the local preview with:

```sh
npm run dev
```

Then visit <http://localhost:8000>. You can also open `index.html` directly in a browser.

## Files

- `index.html` — page structure and content
- `styles.css` — visual design and responsive layouts
- `script.js` — mobile navigation, pricing toggle, and demo form behavior
- `screenshots/desktop.png` and `screenshots/mobile.png` — layout previews

The demo form is front-end only. It validates the entered details and displays a confirmation message; no data is sent or stored. All styling and fonts use local assets and system fallbacks.

## Design choices

1. Morrow is a fictional workspace for small client-service teams, giving the page a clear audience and product story.
2. A warm paper, sage, and terracotta palette keeps the page calm while maintaining strong contrast for actions.
3. The custom dashboard preview shows the product in context without relying on external image assets.
4. The sections follow a simple path from the value proposition to features, workflow, pricing, and a demo request.
5. Responsive layouts keep the dashboard, pricing cards, navigation, and form usable on small screens.
6. The demo form checks required fields and email format, then shows an inline success state without a backend.

## Technologies used

- HTML5 for the page structure
- CSS3 for styling and responsive layouts
- Vanilla JavaScript for navigation, pricing, and form interactions
