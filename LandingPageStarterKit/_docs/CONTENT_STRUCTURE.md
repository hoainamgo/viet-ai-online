# Content Structure Guide

How to organize your content for multi-language support.

## The Content Object

Each product page uses a JavaScript object to store content. This allows switching languages instantly without reloading the page.

File: `js/content/your-product.js`

```javascript
const PRODUCT_CONTENT = {
    // 1. Simple Text Fields
    name: {
        en: "English Name",
        vi: "Tên Tiếng Việt"
    },

    // 2. Arrays (Features, Benefits)
    features: {
        en: [
            { title: "Feature 1", desc: "..." },
            { title: "Feature 2", desc: "..." }
        ],
        vi: [
            { title: "Tính năng 1", desc: "..." },
            { title: "Tính năng 2", desc: "..." }
        ]
    },

    // 3. Complex Objects (Tables, FAQ)
    faq: {
        en: [
            { q: "Question?", a: "Answer" }
        ],
        vi: [
            { q: "Câu hỏi?", a: "Câu trả lời" }
        ]
    }
};
```

## Linking to HTML

To display this content in your HTML, use `data-kit` attributes or specific IDs.

### 1. Simple Text
Matches the key in your content object.

```html
<!-- Will display content.name.en or content.name.vi -->
<h1 data-kit="name"></h1>
```

### 2. Lists (Features)
Currently, lists are handled by specific rendering logic in `product.html` or custom scripts.
You may need to write a small helper function if you change the HTML structure significantly.

## Adding a New Language

1. Update `js/i18n.js` (if you want site-wide translations like "Home", "Contact")
2. Add the language key to your content files (e.g., `ja` for Japanese)
3. Add the button in `components/header.html`

```javascript
// Example: Adding Japanese
name: {
    en: "Product Name",
    vi: "Tên Sản Phẩm",
    ja: "商品名"
}
```
