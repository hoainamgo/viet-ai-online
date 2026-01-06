# Quick Start Guide

Build your premium landing page in 5 minutes.

## 1. Setup

Get the code running on your local machine.

```bash
# Option 1: Using npx (Recommended)
npx serve .

# Option 2: Using Python
python -m http.server 8000

# Open http://localhost:3000 (or 8000)
```

## 2. Basic Configuration

### Edit `index.html`
1. Open `index.html`
2. Update `<title>` and `<meta name="description">`
3. Update `tailwind.config` colors to match your brand:
   ```javascript
   colors: {
       primary: '#YOUR_COLOR',
       accent: '#YOUR_ACCENT',
       // ...
   }
   ```

### Edit Header & Footer
1. Open `components/header.html`
2. Change the Logo text/link
3. Update specific navigation links
4. Open `components/footer.html`
5. Update social links and copyright

## 3. Creating a Product Page

1. Copy `product.html` to `your-product.html`
2. Copy `js/content/_template.js` to `js/content/your-product.js`
3. Edit `js/content/your-product.js` with your content (EN/VI)
4. In `your-product.html`, update the script tag:
   ```html
   <!-- Change this line at the bottom -->
   <script src="js/content/your-product.js"></script>
   ```

## 4. Deployment

### GitHub Pages (Free)
1. Create a public repo on GitHub
2. Push this code
3. Go to Settings > Pages
4. Select `main` branch and `/` folder
5. Save

### Vercel / Netlify (Free)
1. Connect your GitHub repo
2. It will auto-detect static site
3. Click Deploy
