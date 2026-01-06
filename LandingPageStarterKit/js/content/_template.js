/**
 * Product Content Template
 * Rename this file to your-product.js (e.g., course.js, app.js)
 * Then update the script src in product.html
 */

const PRODUCT_CONTENT = {
    // Basic Info - CUSTOMIZE THESE
    name: {
        en: "Product Name",
        vi: "Tên Sản Phẩm"
    },

    tagline: {
        en: "Short tagline here",
        vi: "Tagline ngắn ở đây"
    },

    price: {
        en: "$49",
        vi: "$49"
    },

    badge: {
        en: "New Release",
        vi: "Mới ra mắt"
    },

    heroDesc: {
        en: "Your compelling product description. Explain the main value proposition and what makes this product special.",
        vi: "Mô tả sản phẩm hấp dẫn. Giải thích giá trị chính và điều gì làm sản phẩm này đặc biệt."
    },

    // Problem/Solution
    problem: {
        en: "Describe the problem your audience faces.",
        vi: "Mô tả vấn đề khách hàng của bạn gặp phải."
    },

    solution: {
        en: "Explain how your product solves this problem.",
        vi: "Giải thích cách sản phẩm của bạn giải quyết vấn đề này."
    },

    // Features - Add/remove as needed
    features: {
        en: [
            { title: "Feature 1", desc: "Description of feature 1" },
            { title: "Feature 2", desc: "Description of feature 2" },
            { title: "Feature 3", desc: "Description of feature 3" },
            { title: "Feature 4", desc: "Description of feature 4" },
            { title: "Feature 5", desc: "Description of feature 5" },
            { title: "Feature 6", desc: "Description of feature 6" }
        ],
        vi: [
            { title: "Tính năng 1", desc: "Mô tả tính năng 1" },
            { title: "Tính năng 2", desc: "Mô tả tính năng 2" },
            { title: "Tính năng 3", desc: "Mô tả tính năng 3" },
            { title: "Tính năng 4", desc: "Mô tả tính năng 4" },
            { title: "Tính năng 5", desc: "Mô tả tính năng 5" },
            { title: "Tính năng 6", desc: "Mô tả tính năng 6" }
        ]
    },

    // Comparison Table
    comparison: {
        en: {
            title: "Before vs After",
            rows: [
                { aspect: "Time", before: "Hours", after: "Minutes" },
                { aspect: "Cost", before: "Expensive", after: "Affordable" },
                { aspect: "Quality", before: "Inconsistent", after: "Professional" }
            ]
        },
        vi: {
            title: "Trước vs Sau",
            rows: [
                { aspect: "Thời gian", before: "Nhiều giờ", after: "Vài phút" },
                { aspect: "Chi phí", before: "Đắt đỏ", after: "Phải chăng" },
                { aspect: "Chất lượng", before: "Không ổn định", after: "Chuyên nghiệp" }
            ]
        }
    },

    // FAQ
    faq: {
        en: [
            {
                q: "Common question 1?",
                a: "Answer to question 1."
            },
            {
                q: "Common question 2?",
                a: "Answer to question 2."
            },
            {
                q: "Common question 3?",
                a: "Answer to question 3."
            }
        ],
        vi: [
            {
                q: "Câu hỏi phổ biến 1?",
                a: "Trả lời câu hỏi 1."
            },
            {
                q: "Câu hỏi phổ biến 2?",
                a: "Trả lời câu hỏi 2."
            },
            {
                q: "Câu hỏi phổ biến 3?",
                a: "Trả lời câu hỏi 3."
            }
        ]
    },

    // CTA
    ctaText: {
        en: "Get Product Now",
        vi: "Mua Ngay"
    },

    ctaPrice: {
        en: "$49 (one-time)",
        vi: "$49 (một lần)"
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCT_CONTENT;
}
