/**
 * Company Pages Content
 * Shared content for About, Contact, Privacy, Terms
 */

const COMPANY_CONTENT = {
    // === ABOUT PAGE ===
    about: {
        title: {
            en: "About X10 Kits",
            vi: "Về X10 Kits"
        },
        hero: {
            title: {
                en: "Empowering the Individual Economy",
                vi: "Trao Quyền Cho Nền Kinh Tế Cá Nhân"
            },
            subtitle: {
                en: "We believe in a future where one person, armed with the right AI tools, can build a global business.",
                vi: "Chúng tôi tin vào một tương lai nơi một cá nhân, được trang bị AI, có thể xây dựng doanh nghiệp toàn cầu."
            }
        },
        story: {
            title: {
                en: "Our Story",
                vi: "Câu Chuyện Của Chúng Tôi"
            },
            p1: {
                en: "X10 Kits started with a simple observation: AI is powerful, but using it for real work is messy. You have to copy-paste prompts, wrestle with context, and piece together fragmented tools.",
                vi: "X10 Kits bắt đầu từ một quan sát đơn giản: AI rất mạnh, nhưng dùng nó cho công việc thực tế rất lộn xộn. Bạn phải copy-paste prompt, vật lộn với ngữ cảnh và chắp vá các công cụ rời rạc."
            },
            p2: {
                en: "We wanted to change that. We built 'Kits'—packaged, pre-engineered workflows that turn complex AI capabilities into simple, actionable steps. No more guessing. Just results.",
                vi: "Chúng tôi muốn thay đổi điều đó. Chúng tôi xây dựng các 'Kit'—những quy trình được đóng gói sẵn, biến khả năng phức tạp của AI thành các bước đơn giản, thực tế. Không còn đoán mò. Chỉ có kết quả."
            }
        },
        mission: {
            title: {
                en: "Our Mission",
                vi: "Sứ Mệnh"
            },
            desc: {
                en: "To help 10,000 creators and solopreneurs achieve financial independence through AI-driven productivity.",
                vi: "Giúp 10.000 nhà sáng tạo và solopreneur đạt được tự do tài chính nhờ năng suất từ AI."
            }
        }
    },

    // === CONTACT PAGE ===
    contact: {
        title: {
            en: "Contact Us",
            vi: "Liên Hệ"
        },
        hero: {
            title: {
                en: "We're Here to Help",
                vi: "Chúng Tôi Ở Đây Để Hỗ Trợ Bạn"
            },
            subtitle: {
                en: "Questions? Feedback? Just want to say hi? Drops us a line.",
                vi: "Câu hỏi? Góp ý? Hay chỉ muốn chào nhau? Hãy nhắn cho chúng tôi."
            }
        },
        form: {
            name: { en: "Your Name", vi: "Tên của bạn" },
            email: { en: "Email Address", vi: "Email" },
            subject: { en: "Subject", vi: "Chủ đề" },
            message: { en: "Message", vi: "Lời nhắn" },
            btn: { en: "Send Message", vi: "Gửi Tin Nhắn" }
        },
        info: {
            email: "support@x10kits.com",
            address: "Sincere City, Digital Ocean"
        }
    },

    // === PRIVACY PAGE ===
    privacy: {
        title: {
            en: "Privacy Policy",
            vi: "Chính Sách Bảo Mật"
        },
        lastUpdated: {
            en: "Last Updated: December 2025",
            vi: "Cập nhật lần cuối: Tháng 12/2025"
        },
        content: {
            en: `
                <h3>1. Introduction</h3>
                <p>We respect your privacy. This policy explains how we handle your data.</p>
                <h3>2. Data Collection</h3>
                <p>We collect minimal data necessary to process payments and deliver your kits. We do not sell your data.</p>
                <h3>3. AI Processing</h3>
                <p>When you use our kits with third-party AI models (like Claude or GPT), their privacy policies apply to your prompts. X10 Kits does not store your conversations.</p>
                <h3>4. Cookies</h3>
                <p>We use cookies for analytics and site functionality.</p>
            `,
            vi: `
                <h3>1. Giới thiệu</h3>
                <p>Chúng tôi tôn trọng quyền riêng tư. Chính sách này giải thích cách chúng tôi xử lý dữ liệu của bạn.</p>
                <h3>2. Thu thập dữ liệu</h3>
                <p>Chúng tôi chỉ thu thập dữ liệu tối thiểu cần thiết để xử lý thanh toán và gửi Kit cho bạn. Chúng tôi không bán dữ liệu của bạn.</p>
                <h3>3. Xử lý AI</h3>
                <p>Khi bạn dùng Kit với các mô hình AI bên thứ ba (như Claude hay GPT), chính sách bảo mật của họ áp dụng cho prompt của bạn. X10 Kits không lưu trữ hội thoại của bạn.</p>
                <h3>4. Cookies</h3>
                <p>Chúng tôi sử dụng cookies để phân tích và vận hành trang web.</p>
            `
        }
    },

    // === TERMS PAGE ===
    terms: {
        title: {
            en: "Terms of Service",
            vi: "Điều Khoản Sử Dụng"
        },
        lastUpdated: {
            en: "Last Updated: December 2025",
            vi: "Cập nhật lần cuối: Tháng 12/2025"
        },
        content: {
            en: `
                <h3>1. Acceptance</h3>
                <p>By using X10 Kits, you agree to these terms.</p>
                <h3>2. License</h3>
                <p>You get a personal, non-transferable license to use the Kits. You may not resell or redistribute the raw prompt files.</p>
                <h3>3. Refunds</h3>
                <p>We offer a 15-day money-back guarantee if you are not satisfied.</p>
                <h3>4. Disclaimer</h3>
                <p>The Kits are tools. Your results depend on how you use them.</p>
            `,
            vi: `
                <h3>1. Chấp nhận</h3>
                <p>Sử dụng X10 Kits đồng nghĩa bạn đồng ý với các điều khoản này.</p>
                <h3>2. Giấy phép</h3>
                <p>Bạn nhận được giấy phép cá nhân, không chuyển nhượng. Bạn không được bán lại hoặc chia sẻ file prompt gốc.</p>
                <h3>3. Hoàn tiền</h3>
                <p>Chúng tôi hoàn tiền trong 15 ngày nếu bạn không hài lòng.</p>
                <h3>4. Miễn trừ trách nhiệm</h3>
                <p>Các Kit là công cụ. Kết quả phụ thuộc vào cách bạn sử dụng chúng.</p>
            `
        }
    }
};
