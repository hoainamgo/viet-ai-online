---
description: Hướng dẫn AI tạo landing page mới từ Starter Kit
---

# Create Landing Page Workflow

Workflow này giúp bạn tạo nhanh một landing page mới dựa trên template `product.html` của Starter Kit.

## Bước 1: Thu thập thông tin
User cần cung cấp:
- Tên sản phẩm
- Mô tả ngắn (tagline)
- Giá sản phẩm
- 3-5 tính năng chính (Features)
- Vấn đề & Giải pháp (Problem/Solution)
- Màu sắc chủ đạo (nếu muốn thay đổi)

## Bước 2: Tạo file Content
1. Copy `js/content/_template.js` thành `js/content/[ten-san-pham].js`
2. Điền thông tin vào object `PRODUCT_CONTENT`:
   - `name`, `tagline`, `price`
   - `heroDesc`
   - `features` list
   - `comparison` table
   - `faq` list (tự generate nếu user chưa có)

## Bước 3: Tạo file HTML
1. Copy `product.html` thành `[ten-san-pham].html`
2. Mở file mới tạo:
   - Sửa `<title>`
   - Thay đổi màu `tailwind.config` nếu cần
   - Sửa đường dẫn script ở cuối file:
     ```html
     <script src="js/content/[ten-san-pham].js"></script>
     ```
   - (Optional) Thay đổi ảnh Hero hoặc layout nếu cần thiết

## Bước 4: Cập nhật Navigation
1. Mở `components/header.html`
2. Thêm link vào menu "Products" hoặc tạo menu mới:
   ```html
   <a href="[ten-san-pham].html" ...>
       <span class="...">📦 [Tên Sản Phẩm]</span>
   </a>
   ```
3. Mở `components/footer.html`
4. Thêm link vào danh sách Products

## Bước 5: Kiểm tra
1. Yêu cầu user mở `http://localhost:8080/[ten-san-pham].html`
2. Kiểm tra hiển thị đa ngôn ngữ (EN/VI)
3. Kiểm tra các nút CTA

---
**Ví dụ prompt cho AI:**
"Tôi muốn tạo trang bán khóa học Yoga. Giá $29. Tính năng: 30 bài học, Video 4K, Hỗ trợ 1-1. Màu chủ đạo là xanh lá."
