/**
 * Engineer Kit Content - SINCERE & EMPOWERING VERSION
 * Focus: Efficiency, Quality, Work-Life Balance
 */

const ENGINEER_CONTENT = {
    // Basic Info
    name: {
        en: "Engineer Kit",
        vi: "Engineer Kit"
    },

    tagline: {
        en: "Your AI Dev Team",
        vi: "Team Dev AI Của Bạn"
    },

    price: {
        en: "$39",
        vi: "$39"
    },

    badge: {
        en: "Tech",
        vi: "Công Nghệ"
    },

    heroDesc: {
        en: "Coding is creative problem solving, not typing boilerplate. Let AI handle the repetitive syntax, debugging, and documentation so you can focus on building the architecture and logic that actually matters.",
        vi: "Code là giải quyết vấn đề đầy sáng tạo, không phải việc gõ lại boilerplate. Hãy để AI xử lý cú pháp lặp lại, debug và document, để bạn tập trung xây dựng kiến trúc và logic thực sự quan trọng."
    },

    // Problem/Solution
    problem: {
        en: "You spend 80% of your time on setup, debugging obscure errors, and reading documentation. The actual building part—the fun part—gets squeezed into the last 20%. It leads to burnout and missed deadlines.",
        vi: "Bạn dành 80% thời gian để setup, debug các lỗi khó hiểu và đọc tài liệu. Phần xây dựng thực sự—phần thú vị nhất—bị ép vào 20% thời gian còn lại. Điều này dẫn đến kiệt sức và trễ deadline."
    },

    solution: {
        en: "X10 Engineer Kit gives you specialized AI agents that act as your Junior Devs. They write the tests, generate the boilerplate, and explain complex codebases instantly. You become the Architect, reviewing code instead of just typing it.",
        vi: "X10 Engineer Kit cung cấp các AI agent chuyên biệt đóng vai trò như Junior Dev của bạn. Chúng viết test, tạo boilerplate, và giải thích codebase phức tạp tức thì. Bạn trở thành Kiến trúc sư, review code thay vì chỉ cặm cụi gõ."
    },

    // AI Agents
    agents: {
        en: [
            {
                name: "Code Architect",
                icon: "🏗️",
                desc: "Turns requirements into clean file structures and system designs. Handles the scaffolding so you start with a working foundation, not a blank screen."
            },
            {
                name: "Bug Hunter",
                icon: "🐞",
                desc: "Pastes error logs or buggy code, gets the fix immediately. Explains WHY it broke so you actually learn, rather than just copy-pasting StackOverflow."
            },
            {
                name: "DocuBot",
                icon: "📝",
                desc: "Automatically generates READMEs, API documentation, and code comments. Keeps your project maintainable without the tedious manual writing."
            }
        ],
        vi: [
            {
                name: "Code Architect",
                icon: "🏗️",
                desc: "Biến yêu cầu thành cấu trúc file và thiết kế hệ thống gọn gàng. Xử lý phần khung (scaffolding) để bạn bắt đầu với nền tảng hoạt động được, không phải màn hình trắng."
            },
            {
                name: "Bug Hunter",
                icon: "🐞",
                desc: "Paste log lỗi hoặc code bug, nhận fix ngay lập tức. Giải thích TẠI SAO lỗi để bạn học hỏi, thay vì chỉ copy-paste StackOverflow một cách mù quáng."
            },
            {
                name: "DocuBot",
                icon: "📝",
                desc: "Tự động tạo README, tài liệu API và comment code. Giữ cho dự án của bạn dễ bảo trì mà không tốn công viết tài liệu thủ công nhàm chán."
            }
        ]
    },

    // Features
    features: {
        en: [
            { title: "Stack Agnostic", desc: "Works with JS, Python, Go, Rust, etc." },
            { title: "Test Generator", desc: "Unit & Integration tests in seconds" },
            { title: "Refactoring Engine", desc: "Clean up legacy code automatically" },
            { title: "SQL Wizard", desc: "Complex queries written in natural language" },
            { title: "Regex Solver", desc: "Never struggle with Regular Expressions again" },
            { title: "CI/CD Helper", desc: "Generate workflow files for GitHub Actions" }
        ],
        vi: [
            { title: "Đa Ngôn Ngữ", desc: "Hỗ trợ JS, Python, Go, Rust, v.v." },
            { title: "Tạo Unit Test", desc: "Viết test case trong vài giây" },
            { title: "Refactoring Engine", desc: "Dọn dẹp code cũ tự động" },
            { title: "SQL Wizard", desc: "Viết query phức tạp bằng ngôn ngữ tự nhiên" },
            { title: "Regex Solver", desc: "Không bao giờ phải vật lộn với Regex nữa" },
            { title: "CI/CD Helper", desc: "Tạo file workflow cho GitHub Actions" }
        ]
    },

    // Comparison
    comparison: {
        en: {
            title: "Junior Dev vs AI Agents",
            rows: [
                { aspect: "Availability", before: "9-5, Mon-Fri", after: "24/7/365" },
                { aspect: "Cost", before: "$3000+/month", after: "$39 (One-time)" },
                { aspect: "Knowledge", before: "Limited stack", after: "All languages" },
                { aspect: "Speed", before: "Hours per task", after: "Seconds per task" }
            ]
        },
        vi: {
            title: "Junior Dev vs AI Agents",
            rows: [
                { aspect: "Thời gian làm việc", before: "8 tiếng/ngày", after: "24/7/365" },
                { aspect: "Chi phí", before: "$1000+/tháng", after: "$39 (Một lần)" },
                { aspect: "Kiến thức", before: "Stack hạn chế", after: "Mọi ngôn ngữ" },
                { aspect: "Tốc độ", before: "Giờ/task", after: "Giây/task" }
            ]
        }
    },

    // FAQ
    faq: {
        en: [
            { q: "Will this replace me?", a: "No. It replaces the boring parts of your job. You are still the one defining the logic and architecture. Think of it like a powerful IDE on steroids." },
            { q: "Security? Does my code leave my machine?", a: "The prompts you evaluate are local. If you use the cloud API, it follows strict privacy policies (no training on your code). You control what you send." },
            { q: "Can it handle complex logic?", a: "It's best at breaking complex logic into smaller functions. You guide the high-level logic, and the agents implement the specific functions efficiently." }
        ],
        vi: [
            { q: "Nó có thay thế tôi không?", a: "Không. Nó thay thế những phần nhàm chán. Bạn vẫn là người định nghĩa logic và kiến trúc. Hãy nghĩ về nó như một IDE siêu năng lực." },
            { q: "Về bảo mật? Code của tôi có lọt ra ngoài?", a: "Nếu bạn dùng local LLM, code ở lại máy bạn. Nếu dùng Cloud API, nó tuân theo chính sách bảo mật (không train trên code của bạn). Bạn kiểm soát những gì mình gửi." },
            { q: "Nó xử lý logic phức tạp được không?", a: "Nó giỏi nhất việc chia logic phức tạp thành các function nhỏ. Bạn dẫn dắt logic cấp cao, các agent thực thi chi tiết hiệu quả." }
        ]
    },

    // File Structure
    fileStructure: {
        en: `x10-engineer-kit/
├── .claude/
│   ├── commands/
│   │   ├── code-architect.md
│   │   ├── bug-hunter.md
│   │   ├── docu-bot.md
│   │   ├── refactor.md
│   │   └── test-gen.md
│   ├── settings.json
│   └── CLAUDE.md
├── prompts/
│   ├── architecture/
│   ├── testing/
│   └── documentation/
├── examples/
│   └── clean-code-patterns/
├── README.md
└── LICENSE.key`,
        vi: `x10-engineer-kit/
├── .claude/
│   ├── commands/
│   │   ├── code-architect.md  # Kiến trúc sư Code
│   │   ├── bug-hunter.md      # Săn lỗi & Debug
│   │   ├── docu-bot.md        # Viết tài liệu
│   │   ├── refactor.md        # Refactor code
│   │   └── test-gen.md        # Tạo Test case
│   ├── settings.json
│   └── CLAUDE.md
├── prompts/
│   ├── architecture/
│   ├── testing/
│   └── documentation/
├── examples/
│   └── clean-code-patterns/
├── README.md
└── LICENSE.key`
    },

    // Final CTA Section
    finalCta: {
        title: {
            en: "Ready to 10x Your Coding Speed?",
            vi: "Sẵn Sàng Code Nhanh Gấp 10 Lần?"
        },
        subtitle: {
            en: "Focus on the logic, let AI handle the syntax.",
            vi: "Tập trung vào logic, để AI lo phần cú pháp."
        },
        button: {
            en: "Get Engineer Kit — $39",
            vi: "Sở hữu Engineer Kit — $39"
        }
    },

    // CTA
    ctaText: {
        en: "Get Engineer Kit",
        vi: "Sở hữu Engineer Kit"
    },

    ctaPrice: {
        en: "$39",
        vi: "$39"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENGINEER_CONTENT;
}
