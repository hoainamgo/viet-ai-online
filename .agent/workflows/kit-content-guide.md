---
description: Hướng dẫn sử dụng Kit Content Loading System cho landing pages
---

# Kit Content Loading System

## Mục đích
Load nội dung động cho từng trang kit (youtube.html, writer.html...) từ file `js/kit-content.js` để hỗ trợ đa ngôn ngữ.

## File quan trọng
- `js/kit-content.js` - Data tất cả kit (EN + VI)
- `js/i18n.js` - Translations cho index page

## Cách thêm kit mới

### 1. Thêm data vào `js/kit-content.js`
```javascript
// Thêm vào KIT_CONTENT object
newkit: {
    en: {
        name: "New Kit",
        tagline: "Kit description",
        price: "$29",
        badge: "NEW",
        heroDesc: "...",
        agents: [...],
        features: [...],
        comparison: { title: "...", rows: [...] },
        faq: [...]
    },
    vi: { ... }
}
```

### 2. Tạo trang HTML
```bash
Copy youtube.html → newkit.html
Sửa title, gradient colors
```

### 3. Include script trong HTML
```html
<script src="js/kit-content.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        renderKitContent('newkit', 'en');
    });
</script>
```

## Attributes cần có trong HTML

| Selector | Nội dung |
|----------|----------|
| `[data-kit="name"]` | Tên kit |
| `[data-kit="tagline"]` | Tagline |
| `[data-kit="heroDesc"]` | Mô tả hero |
| `[data-kit="agents"]` | Container cho agents grid |
| `[data-kit="features"]` | Container cho features |
| `[data-kit="comparison"]` | Comparison table container |
| `[data-kit="faq"]` | FAQ accordion container |

## Thêm ngôn ngữ mới

```javascript
// Trong kit object, thêm key ngôn ngữ
youtube: {
    en: { ... },
    vi: { ... },
    ja: { ... },  // Thêm Japanese
    ko: { ... }   // Thêm Korean
}
```

## Test
```bash
npx serve . -l 8080
# Mở http://localhost:8080/newkit.html
```
