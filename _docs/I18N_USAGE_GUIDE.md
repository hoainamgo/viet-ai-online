# Hướng Dẫn Kiến Trúc Content & i18n (X10 Creator Kits)

## Tổng Quan
Chúng ta đã chuyển từ file `kit-content.js` khổng lồ sang **kiến trúc module** để dễ quản lý và tối ưu chiến lược nội dung.

- **Trang Chủ (Index)**: Dùng `js/i18n.js` (Hệ thống: `data-t`)
- **Trang Kit Chi Tiết**: Dùng `js/content/[kit].js` (Hệ thống: `data-kit`)

## 1. Chiến Lược Nội Dung: "Chân Thành & Trao Quyền" (Sincere & Empowering)
Chúng ta chuyển từ "Khơi gợi nỗi đau" (Pain Amplification) sang **"Chân thành trao quyền"**.

**Nguyên tắc Tone & Mood:**
1. **Công nhận (Acknowledge)**: Ghi nhận nỗ lực hiện tại của creator ("Bạn đã làm rất tốt").
2. **Đồng cảm (Empathize)**: Thấu hiểu giới hạn về thời gian/công cụ ("Làm thủ công tốn quá nhiều sức").
3. **Giải pháp (Solution)**: Đề xuất kit như đòn bẩy năng suất ("Giữ nguyên chất lượng, làm nhanh gấp 10").
4. **Trung thực (Honesty)**: Thực tế về khả năng của AI (Là Trợ lý, không phải Thay thế).

**Ví dụ:**
❌ *Chê bai:* "View lẹt đẹt và bạn đang thất bại."
✅ *Khích lệ:* "Bạn có ý tưởng tuyệt vời. Hãy để AI lo phần thực thi nhàm chán để bạn tập trung sáng tạo."

## 2. Cấu Trúc File
Các file nội dung nằm trong thư mục `js/content/`:
- `youtube.js`
- `tiktok.js`
- `marketing.js`
- `engineer.js`
- `brand.js`
- `writer.js`

**Cấu trúc bên trong (`[kit].js`):**
```javascript
const [KIT]_CONTENT = {
    badge: { en: "Value", vi: "Trị giá" },
    name: { en: "Kit Name", vi: "Tên Kit" },
    heroDesc: { en: "Sincere description...", vi: "Mô tả chân thành..." },
    // ... features, agents, comparison, faq
};
```

## 3. Hướng Dẫn Migrate (Phương pháp "Log")
Để migrate một trang kit (ví dụ: `tiktok.html`), làm theo các bước sau:

### Bước A. Tạo/Cập nhật File Content
Tạo file `js/content/tiktok.js`, đảm bảo biến `const TIKTOK_CONTENT` được định nghĩa và export đúng.

### Bước B. Inject Script vào HTML
Trong file `tiktok.html`, thay thế đoạn script render cũ (gần thẻ đóng `</body>`) bằng đoạn code sau:

```html
    <!-- [KIT] Content -->
    <script src="js/content/[ten_file_kit].js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const lang = localStorage.getItem('x10_lang') || 'vi';
            
            // 1. Apply translation chung (Nav, Footer...)
            if (typeof applyTranslations === 'function') {
                applyTranslations(lang);
            }
            
            // 2. Load nội dung [KIT] vào Hero Section
            // Thay [KIT_VAR] bằng tên biến thực tế (ví dụ: TIKTOK_CONTENT)
            if (typeof [KIT_VAR] !== 'undefined') {
                const badge = document.querySelector('[data-kit="badge"]');
                const name = document.querySelector('[data-kit="name"]');
                const heroDesc = document.querySelector('[data-kit="heroDesc"]');
                const price = document.querySelector('[data-kit="price"]');
                const ctaText = document.querySelector('[data-kit="ctaText"]');
                
                if (badge) badge.textContent = [KIT_VAR].badge[lang] || [KIT_VAR].badge.en;
                if (name) name.textContent = [KIT_VAR].name[lang] || [KIT_VAR].name.en;
                if (heroDesc) heroDesc.textContent = [KIT_VAR].heroDesc[lang] || [KIT_VAR].heroDesc.en;
                if (price) price.textContent = [KIT_VAR].price[lang] || [KIT_VAR].price.en;
                if (ctaText) ctaText.textContent = [KIT_VAR].ctaText[lang] || [KIT_VAR].ctaText.en;
            }
            
            // 3. Render các Dynamic Sections (Agents, Features, v.v.)
            // Đảm bảo renderKitContent hiểu biến content mới hoặc update hàm đó
            if (typeof renderKitContent === 'function') {
                 renderKitContent('[ten_kit]', lang);
            }
        });
    </script>
```

### Bước C. Cập nhật Bundle
Đảm bảo footer và phần pricing hiển thị **"All 6 Kits"** và giá **"$214"** (giá sau giảm).

---
**Maintained By**: X10 Dev Team
**Last Standardized**: "Youtube Kit Successful Migration"
