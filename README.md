# Agrinama — Premium Nicotine Pouches Kenya

Modern React + Vite website for Agrinama, a Kenyan tobacco-free nicotine pouch brand.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
agrinama/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component
    ├── index.css               # Global styles & animations
    ├── data/
    │   ├── theme.js            # Design tokens / colour palette
    │   ├── products.js         # Product catalogue data
    │   ├── content.js          # Copy: reviews, FAQs, steps, etc.
    │   └── index.js            # Barrel export
    └── components/
        ├── AgeGate.jsx         # 18+ verification modal
        ├── NavBar.jsx          # Sticky navigation with cart badge
        ├── Hero.jsx            # Auto-rotating hero with animated rings
        ├── CategoryStrip.jsx   # 4-category quick-access strip
        ├── Products.jsx        # Filterable product grid + cards
        ├── HowItWorks.jsx      # 4-step guide
        ├── Reviews.jsx         # Customer testimonials + aggregate stats
        ├── FAQ.jsx             # Accordion FAQ section
        ├── Wholesale.jsx       # B2B retailer CTA banner
        ├── Newsletter.jsx      # Email signup
        ├── Footer.jsx          # Full 4-column footer
        └── WhatsAppButton.jsx  # Floating WhatsApp CTA
```

## ✏️ Customising

### Change colours
Edit `src/data/theme.js` — all design tokens live there.

### Add / edit products
Edit `src/data/products.js` — each product has:
- `id`, `cat` (mint | fruit | strong | cessation)
- `name`, `mg`, `flavor`, `price`, `desc`, `icon`
- `color` + `glow` for visual theming
- `tag` + `tagBg` for the badge

### Update copy (reviews, FAQs, steps)
Edit `src/data/content.js`.

### Phone number / WhatsApp
Search for `+254 700 000 000` and replace with your real number.

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Google Fonts | Playfair Display + Inter |

No UI framework dependencies — pure React with inline styles.

## ⚠️ Legal Notice

This website template is for adults aged 18+ only.
Nicotine products must comply with local Kenyan regulations.
Ensure you hold any required licences before going live.
# Agrinama
