/**
 * Documentation Content
 * Bilingual (EN/VI) markdown content for docs.html
 */

const DOCS_CONTENT = {
    title: {
        en: "Documentation - X10 Creator Kits",
        vi: "Tài Liệu - X10 Creator Kits"
    },

    // Using markdown strings for easier formatting
    body: {
        en: `
# 🚀 Getting Started with X10

Welcome to **X10 Creator Kits** - The AI toolset to multiply your productivity by 10x!

## ⚡ 1. Quick Setup (3 Steps)

### Step 1: Prepare Environment
You need one of the following (all free):
- **VS Code** + **Roo Code** Extension (Recommended)
- Or **Claude Code** (Terminal)
- Or **Cursor**

### Step 2: Load Your Kit
1. Choose the Kit you want (e.g., \`01_YouTubeKit\`, \`03_TikTokKit\`).
2. Copy the entire \`.claude/\` folder from that Kit into your project folder.

### Step 3: Activate (With Roo Code)
1. Open VS Code.
2. Go to Roo Code Settings > Scroll to "Custom Modes".
3. Roo Code will automatically detect \`.roomodes\` file and show modes like **Brainstorm**, **Viral**, **Strategy**.

---

## 🎯 2. How to X10 Your Productivity

### Don't just chat, use Commands
Instead of typing long prompts, use shortcuts for standardized workflows:

| Kit | X10 Command | Effect |
|-----|----------|----------|
| **YouTube** | \`/script "Topic"\` | Full script in 30s |
| **TikTok** | \`/hook "Topic"\` | 5 viral hooks to keep retention |
| **Marketing** | \`/ads "Product"\` | 3 ad copies (AIDA/PAS) |
| **Code** | \`/vibe "Idea"\` | Turn idea into real code |

### Use the Right Modes for Smarter AI
- **Brainstorm Mode**: When you're stuck. AI will ask questions to spark ideas.
- **Execution Mode**: When you need it DONE. AI executes without chatter.
- **Viral Mode** (TikTok): AI optimizes strictly for clicks/views.

---

## 💡 3. Pro Tips

1. **Onboarding**: Type \`/kit-help\` anytime for a guide.
2. **Custom Level**: Open \`.claude/kit.json\` and change \`contentLevel\` to \`beginner\` (to learn) or \`pro\` (to work).
3. **Scheduling**: Use \`/calendar\` to let AI manage your posting schedule.

> **X10 Philosophy:** Don't work harder, work smarter with AI Kits.
`,
        vi: `
# 🚀 Getting Started with X10

Chào mừng bạn đến với **X10 Creator Kits** - Bộ công cụ AI giúp bạn nhân bản năng suất lên gấp 10 lần!

## ⚡ 1. Cài đặt nhanh (3 bước)

### Bước 1: Chuẩn bị môi trường
Bạn cần một trong các phần mềm sau (đều miễn phí):
- **VS Code** + Extension **Roo Code** (Khuyên dùng)
- Hoặc **Claude Code** (Terminal)
- Hoặc **Cursor**

### Bước 2: Nạp Kit vào dự án
1. Chọn Kit bạn muốn dùng (VD: \`01_YouTubeKit\`, \`03_TikTokKit\`).
2. Copy toàn bộ thư mục \`.claude/\` từ Kit đó vào thư mục dự án của bạn.

### Bước 3: Kích hoạt (Với Roo Code)
1. Mở VS Code.
2. Vào phần Settings của Roo Code > Kéo xuống "Custom Modes".
3. Roo Code sẽ tự động nhận diện file \`.roomodes\` và hiển thị các chế độ như **Brainstorm**, **Viral**, **Strategy**.

---

## 🎯 2. Cách X10 Năng Suất

### Đừng chỉ chat, hãy dùng Lệnh (Commands)
Thay vì gõ dài dòng, hãy dùng các lệnh tắt để AI làm việc chuẩn quy trình:

| Kit | Lệnh X10 | Tác dụng |
|-----|----------|----------|
| **YouTube** | \`/script "Chủ đề"\` | Ra kịch bản full trong 30s |
| **TikTok** | \`/hook "Chủ đề"\` | Tạo 5 hooks viral giữ chân người xem |
| **Marketing** | \`/ads "Sản phẩm"\` | Viết 3 bài quảng cáo AIDA/PAS |
| **Code** | \`/vibe "Ý tưởng"\` | Biến ý tưởng thành code thật |

### Dùng đúng Chế độ (Modes) để AI thông minh hơn
- **Brainstorm Mode**: Khi bạn bí ý tưởng. AI sẽ hỏi ngược lại để khơi gợi.
- **Execution Mode**: Khi bạn cần làm xong việc NGAY. AI sẽ làm, không nói nhiều.
- **Viral Mode** (TikTok): AI sẽ tập trung tối đa vào click/view.

---

## 💡 3. Mẹo Pro dành cho bạn

1. **Onboarding**: Gõ \`/kit-help\` bất cứ lúc nào để xem hướng dẫn.
2. **Tuỳ chỉnh Level**: Mở \`.claude/kit.json\` và sửa \`contentLevel\` thành \`beginner\` (để học) hoặc \`pro\` (để làm việc).
3. **Lên lịch**: Dùng \`/calendar\` để AI giúp bạn quản lý lịch đăng bài cả tháng.

> **Triết lý X10:** Đừng làm việc chăm chỉ hơn, hãy làm việc thông minh hơn với AI Kits.
`
    }
};
