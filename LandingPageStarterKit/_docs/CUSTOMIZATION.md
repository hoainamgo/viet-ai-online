# Customization Guide

Make the template truly yours.

## 1. Colors & Branding

We use TailwindCSS with custom configuration in the HTML `<head>`.

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    // Update these hex codes
                    primary: '#4361ee',    // Branding main color
                    secondary: '#5a78f0',  // Lighter shade
                    accent: '#FF6B35',     // CTA buttons
                    dark: '#0f172a',       // Background dark
                    light: '#f8fafc'       // Text light
                }
            }
        }
    }
</script>
```

## 2. Fonts

Default is **Inter** from Google Fonts.

To change:
1. Go to [Google Fonts](https://fonts.google.com)
2. Select your font
3. Replace the `<link>` tag in `<head>`
4. Update `fontFamily` in `tailwind.config`:
   ```javascript
   fontFamily: {
       sans: ['YourFont', 'sans-serif'],
   }
   ```

## 3. Styling Changes (`css/styles.css`)

The core styles handle:
- Glassmorphism effects (`.glass-panel`)
- Animations (`.animate-float`)
- Gradients (`.hero-gradient`)

### Changing the Hero Gradient
Look for `.hero-gradient` in `css/styles.css`:

```css
.hero-gradient {
    background: linear-gradient(135deg,
            var(--bg-dark) 0%,
            #NEW_COLOR_1 30%,  /* Change this */
            #NEW_COLOR_2 60%,  /* Change this */
            #0f0f23 100%);
}
```

## 4. Components

### Header (`components/header.html`)
- To add a dropdown: Copy the existing "Products" structure.
- To remove: Simply delete the HTML block.

### Footer (`components/footer.html`)
- Update links and columns.
- The year auto-updates via the script at the bottom.

## 5. Adding Custom Scripts

Add your analytics or chat widgets (Google Analytics, Crisp, etc.) at the end of the `<body>` tag in `index.html` and `product.html`.
