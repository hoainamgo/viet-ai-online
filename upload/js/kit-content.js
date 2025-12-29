/**
 * X10 Creator Kits - Kit Page Content
 * Content for individual kit detail pages (youtube.html, writer.html, etc.)
 * Supports multi-language: en, ja, ko, vi
 */

const KIT_CONTENT = {
    // ===========================================
    // YOUTUBE KIT
    // ===========================================
    youtube: {
        en: {
            name: "YouTube Kit",
            tagline: "Viral Scripts & Thumbnails",
            price: "$59",
            badge: "Best Seller",
            heroDesc: "Dominate YouTube with AI agents that generate high-retention scripts, eye-catching thumbnails, and SEO-optimized titles.",

            // Problem/Solution
            problem: "Creating a single YouTube video takes 8-10 hours of scripting, thumbnail design, and SEO research.",
            solution: "Our AI agents handle script writing, thumbnail concepts, and SEO optimization in under 5 minutes.",

            // AI Agents
            agents: [
                { name: "Script Writer", icon: "📝", desc: "Generates high-retention scripts with proven hooks and storytelling structures." },
                { name: "Thumbnail Creator", icon: "🎨", desc: "Creates 5 thumbnail concepts with psychology-based click triggers." },
                { name: "SEO Optimizer", icon: "🔍", desc: "Generates titles, descriptions, and tags optimized for YouTube algorithm." }
            ],

            // Top Features
            features: [
                { title: "Hook Library", desc: "50+ proven hooks for different video types" },
                { title: "Retention Graphs", desc: "Script structure optimized for watch time" },
                { title: "A/B Thumbnails", desc: "Multiple concepts for testing" },
                { title: "Keyword Research", desc: "Find low-competition, high-search terms" },
                { title: "Trend Spotter", desc: "Identify rising topics in your niche" },
                { title: "Multi-language", desc: "Generate scripts in EN, JP, KR, VN" }
            ],

            // Comparison Table
            comparison: {
                title: "YouTube Kit vs Traditional Methods",
                rows: [
                    { aspect: "Script Writing", before: "2-4 hours", after: "30 seconds" },
                    { aspect: "Thumbnail Ideas", before: "Random guessing", after: "5 proven concepts" },
                    { aspect: "SEO Optimization", before: "Manual research", after: "Auto-optimized" },
                    { aspect: "Retention Hooks", before: "Trial & error", after: "Proven formulas" }
                ]
            },

            // FAQ
            faq: [
                { q: "What AI model does this use?", a: "Works with Claude 3.5 Sonnet/Haiku or GPT-4. You bring your own API key." },
                { q: "Can I use for client videos?", a: "Yes! Commercial license allows unlimited client use." },
                { q: "How many scripts can I generate?", a: "Unlimited. You only pay for your API usage (~$0.01-0.05 per script)." }
            ],

            // CTA
            ctaText: "Get YouTube Kit",
            ctaPrice: "$59"
        },
        vi: {
            name: "YouTube Kit",
            tagline: "Kịch bản Viral & Thumbnail",
            price: "$59",
            badge: "Bán chạy nhất",
            heroDesc: "X10 năng suất YouTube: Tạo kịch bản giữ chân 80% người xem, thiết kế 5 mẫu thumbnail CTR cao, và tối ưu SEO top 10 - tất cả trong 5 phút.",

            problem: "Bạn mất cả ngày để tạo 1 video: 3-4 giờ viết kịch bản, 2 giờ nghĩ ý tưởng thumbnail, 1 giờ research SEO. Vậy mà view thì ít, retention thì thấp.",
            solution: "X10 YouTube Kit với 3 AI agents chuyên biệt sẽ thay bạn làm TẤT CẢ trong 5 phút: kịch bản có hook mạnh, 5 mẫu thumbnail test được ngay, SEO tự động lên top.",

            agents: [
                { name: "Script Master", icon: "✍️", desc: "Viết kịch bản retention 70-80% với hook 3 giây đầu bắt mắt, cấu trúc giữ chân người xem, và CTA kích thích tương tác." },
                { name: "Thumbnail Genius", icon: "🎨", desc: "Tạo 5 concept thumbnail theo tâm lý màu sắc, khuôn mặt cảm xúc, và text gây tò mò - đã test trên 1000+ video viral." },
                { name: "SEO Rocket", icon: "🚀", desc: "Nghiên cứu từ khóa ít cạnh tranh nhưng search cao, viết title & description đánh thẳng vào thuật toán YouTube 2025." }
            ],

            features: [
                { title: "50+ Hook Templates", desc: "Hooks đã giúp hơn 500 creator tăng view x5" },
                { title: "Retention Blueprint", desc: "Cấu trúc 8-12 phút giữ 70% người xem" },
                { title: "Psychology Thumbnails", desc: "Màu sắc, khuôn mặt, text trigger FOMO" },
                { title: "SEO Autopilot", desc: "Từ khóa long-tail ít cạnh tranh" },
                { title: "Trend Radar", desc: "Bắt trend sớm 24-48h trước đối thủ" },
                { title: "4 Ngôn ngữ", desc: "Mở rộng thị trường EN, JP, KR, VN" }
            ],

            comparison: {
                title: "X10 YouTube Kit vs Tự Làm",
                rows: [
                    { aspect: "Viết kịch bản", before: "3-4 giờ", after: "2 phút" },
                    { aspect: "Retention rate", before: "30-40%", after: "70-80%" },
                    { aspect: "Ý tưởng thumbnail", before: "Làm rồi mới biết", after: "5 mẫu test A/B ngay" },
                    { aspect: "Ranking SEO", before: "Trang 3-5", after: "Top 10 trong tuần đầu" }
                ]
            },

            faq: [
                { q: "Tôi không biết viết kịch bản, kit có giúp được không?", a: "Chính xác! Kit sinh ra để giải quyết vấn đề này. Bạn chỉ cần cho chủ đề, AI sẽ viết toàn bộ kịch bản với hook mạnh, cấu trúc retention cao." },
                { q: "Kit dùng AI gì? Tôi phải trả thêm tiền không?", a: "Dùng Claude 3.5/GPT-4 với API key của bạn. Chi phí API ~500-1000đ/kịch bản. Mua kit 1 lần, dùng mãi mãi." },
                { q: "Tôi làm video cho khách, dùng kit được không?", a: "Hoàn toàn được! Bản quyền thương mại không giới hạn. Nhiều agency đang dùng kit phục vụ 10-20 kênh cùng lúc." }
            ],

            ctaText: "Mua YouTube Kit",
            ctaPrice: "$59"
        }
    },

    // ===========================================
    // WRITER KIT
    // ===========================================
    writer: {
        en: {
            name: "Writer Kit",
            tagline: "Content Writing & Idea Generation",
            price: "$19",
            badge: "NEW",
            heroDesc: "From idea to polished content in 30 seconds. 5 AI agents for brainstorming, structuring, writing, and polishing.",

            problem: "Writer's block, inconsistent quality, and hours spent on a single blog post.",
            solution: "5 specialized agents handle every step from idea to publish-ready content.",

            agents: [
                { name: "Idea Spark", icon: "💡", desc: "Brainstorm 10 content ideas for any topic or industry." },
                { name: "Style Master", icon: "🎭", desc: "Adjust writing tone: casual, professional, storytelling, educational, persuasive." },
                { name: "Structure Pro", icon: "📐", desc: "Create outlines and logical content flow for any length." },
                { name: "Hook Writer", icon: "🪝", desc: "Generate 5 viral opening lines using proven formulas." },
                { name: "Polish Editor", icon: "✨", desc: "Proofread, tighten, and optimize for readability." }
            ],

            features: [
                { title: "5 Writing Modes", desc: "Casual, Professional, Storytelling, Educational, Persuasive" },
                { title: "Quick Commands", desc: "/topic, /write-short, /write-long, /hook, /rewrite" },
                { title: "Hook Formulas", desc: "15+ proven formulas for attention-grabbing opens" },
                { title: "Multi-platform", desc: "Optimized for Facebook, LinkedIn, Blog, Email" },
                { title: "Length Control", desc: "From 150-word posts to 1500-word articles" },
                { title: "Industry Presets", desc: "Tech, Finance, Health, E-commerce, more" }
            ],

            comparison: {
                title: "Writer Kit vs Manual Writing",
                rows: [
                    { aspect: "Idea Generation", before: "Staring at blank page", after: "10 ideas in 5 seconds" },
                    { aspect: "First Draft", before: "2-3 hours", after: "30 seconds" },
                    { aspect: "Hook Quality", before: "Hit or miss", after: "Proven formulas" },
                    { aspect: "Consistency", before: "Varies by mood", after: "Always on-brand" }
                ]
            },

            faq: [
                { q: "What platforms can I write for?", a: "Facebook, LinkedIn, Twitter/X, Blog, Email newsletters, and more." },
                { q: "Can it match my writing style?", a: "Yes! Feed it examples and it learns your voice." },
                { q: "Does it support Vietnamese?", a: "Yes! Optimized for Vietnamese content with proper grammar." }
            ],

            ctaText: "Get Writer Kit",
            ctaPrice: "$19"
        },
        vi: {
            name: "Writer Kit",
            tagline: "Viết Content & Tạo Ý Tưởng",
            price: "$19",
            badge: "MỚI",
            heroDesc: "X10 tốc độ viết content: 5 AI agents biến ý tưởng mờ nhờ thành bài viết 1500 từ trong 2 phút - có hook viral, cấu trúc rõ ràng, CTA mạnh - viết 10 bài/ngày không mệt.",

            problem: "Bạn ngồi nhìn trang trắng hàng giờ không biết viết gì. Có ý tưởng nhưng viết ra dài dòng, nhàm chán. Mất 2-3 giờ cho 1 bài 800 từ, chất lượng không đều, deadline áp sát mà ideas cạn.",
            solution: "X10 Writer Kit = 5 AI agents chuyên biệt: Idea Machine gợi ý 20 chủ đề nóng, Hook Master tạo 5 mở đầu viral, Structure Pro sắp xếp logic chuẩn, Content Writer viết 1500 từ trong 2 phút, Polish Editor làm bóng bẩy publish-ready.",

            agents: [
                { name: "Idea Volcano", icon: "💡", desc: "Brainstorm 20 chủ để content cho 1 topic. Phân tích trending keywords, gaps trong thị trường, góc nhìn mới chưa ai viết. Không bao giờ hết idea." },
                { name: "Hook Magician", icon: "🪝", desc: "Tạo 5 câu mở đầu theo 7 công thức viral: curiosity gap, controversial statement, shocking stat, personal story trigger. Test A/B để chọn mạnh nhất." },
                { name: "Structure Wizard", icon: "📐", desc: "Dàn ý logic 3-5-7 phần cho bất kỳ độ dài nào: 300 từ (social), 800 từ (blog), 1500 từ (pillar). Flow mượt mà, người đọc không rời mắt." },
                { name: "Content Rocket", icon: "🚀", desc: "Viết full draft 1500 từ trong 2 phút theo dàn ý. 5 tone styles: casual, professional, storytelling, educational, persuasive. Chọn tone, AI viết đúng voice." },
                { name: "Polish Master", icon: "✨", desc: "Chỉnh sửa grammar, rút gọn câu dài dòng, thêm transition mượt, optimize readability. Từ draft 70 điểm lên 95 điểm publish-ready." }
            ],

            features: [
                { title: "20+ Idea Templates", desc: "Brainstorm theo ngành, platform, target audience" },
                { title: "7 Hook Formulas", desc: "Curiosity, Shock, FOMO - test 5000+ viral posts" },
                { title: "Quick Commands", desc: "/topic, /write-short, /write-long, /hook, /rewrite" },
                { title: "5 Tone Styles", desc: "Casual, Professional, Story, Education, Persuasive" },
                { title: "Multi-platform Output", desc: "Tối ưu cho Facebook, LinkedIn, Blog, Email" },
                { title: "Length Control", desc: "150 từ (social) đến 2000 từ (pillar content)" }
            ],

            comparison: {
                title: "X10 Writer Kit vs Viết Thủ Công",
                rows: [
                    { aspect: "Tìm ý tưởng", before: "Nhìn trang trắng 1 giờ", after: "20 ideas trong 30 giây" },
                    { aspect: "Viết bài 1500 từ", before: "2-3 giờ, mệt não", after: "2 phút, publish-ready" },
                    { aspect: "Hook chất lượng", before: "May rủi, hit or miss", after: "5 hooks test, chọn mạnh nhất" },
                    { aspect: "Số bài/ngày", before: "1-2 bài, kiệt sức", after: "10-15 bài, còn tỉnh táo" }
                ]
            },

            faq: [
                { q: "Tôi viết không hay, kit có giúp cải thiện không?", a: "Kit như writing coach 24/7! Mỗi lần gen content, AI giải thích WHY viết như vậy: hook này work vì sao, structure này logic ra sao. Bạn học writing sambil dùng kit." },
                { q: "Kit có thay được giọng viết của riêng tôi không?", a: "Được! Bạn feed 2-3 samples bài viết của mình, AI sẽ học style: từ vựng ưa thích, câu dài/ngắn, cách dùng analogy. Output nghe như chính bạn viết." },
                { q: "Tôi viết cho clients nhiều ngành, kit có flexible không?", a: "Rất flexible! Có presets cho 15+ ngành: tech, finance, health, e-commerce, lifestyle... Mỗi ngành có tone và từ ngữ riêng. Switch ngành 1 click." }
            ],

            ctaText: "Mua Writer Kit",
            ctaPrice: "$19"
        }
    },

    // ===========================================
    // TIKTOK KIT
    // ===========================================
    tiktok: {
        en: {
            name: "TikTok Kit",
            tagline: "Viral Trends & Hooks",
            price: "$19",
            badge: "Trending",
            heroDesc: "Go viral faster. Analyze trends, generate 60s hook-heavy scripts, and find the perfect audio.",

            problem: "Missing trends, weak hooks, and videos that don't get pushed by the algorithm.",
            solution: "AI that spots rising trends and writes scroll-stopping scripts optimized for FYP.",

            agents: [
                { name: "Trend Hunter", icon: "📈", desc: "Identifies rising trends before they peak." },
                { name: "Hook Master", icon: "🎣", desc: "Creates first-3-second hooks that stop the scroll." },
                { name: "Script Writer", icon: "📝", desc: "60-second scripts optimized for algorithm push." }
            ],

            features: [
                { title: "Trend Detection", desc: "Spot trends 24-48 hours early" },
                { title: "Hook Templates", desc: "50+ proven first-second hooks" },
                { title: "Audio Finder", desc: "Match trending sounds to your niche" },
                { title: "Hashtag Optimizer", desc: "Perfect hashtag mix for reach" },
                { title: "Duet/Stitch Ideas", desc: "Leverage viral content strategy" },
                { title: "Multi-language", desc: "Scripts in EN, JP, KR, VN" }
            ],

            comparison: {
                title: "TikTok Kit vs Manual Creation",
                rows: [
                    { aspect: "Trend Spotting", before: "Scroll for hours", after: "Instant alerts" },
                    { aspect: "Hook Quality", before: "Weak opens", after: "Scroll-stopping" },
                    { aspect: "Script Time", before: "30-60 minutes", after: "30 seconds" },
                    { aspect: "Hashtag Research", before: "Copy competitors", after: "Data-driven mix" }
                ]
            },

            faq: [
                { q: "Does it find trending sounds?", a: "Yes! It suggests trending audio that matches your content niche." },
                { q: "Works for any niche?", a: "Yes - tech, lifestyle, comedy, education, business, and more." },
                { q: "Can I use for client accounts?", a: "Absolutely! Commercial license included." }
            ],

            ctaText: "Get TikTok Kit",
            ctaPrice: "$19"
        },
        vi: {
            name: "TikTok Kit",
            tagline: "Trend Viral & Hook",
            price: "$19",
            badge: "Đang Hot",
            heroDesc: "X10 tốc độ viral TikTok: Bắt trend sớm 24h, hook dừng scroll trong 0.5 giây, kịch bản 60s giữ 90% người xem - lên FYP nhanh gấp 5 lần.",

            problem: "Video của bạn bị chìm vì: post muộn mất trend, hook yếu bị scroll qua, kịch bản dài dòng người ta tắt sớm. Kết quả: 100-200 views, không bao giờ lên FYP.",
            solution: "X10 TikTok Kit với 3 AI agents biết chính xác công thức viral 2025: Trend Radar bắ trending 24h trước đối thủ, Hook Master tạo 5 hook dừng scroll, Script Pro viết 60s giữ 90% xem hết.",

            agents: [
                { name: "Trend Radar", icon: "📡", desc: "Quét 1000+ video mỗi giờ, phát hiện trend đang lên 24-48h trước khi nó bùng nổ. Bạn sẽ luôn đi đầu, không bao giờ bị muộn trend." },
                { name: "Hook Killer", icon: "⚡", desc: "Tạo 5 hooks giây đầu theo 7 công thức viral tâm lý: shock, FOMO, curiosity gap, controversy. Test thẳng vào FYP algorithm." },
                { name: "60s Pro", icon: "🎬", desc: "Kịch bản 60 giây cấu trúc vàng: 3s hook → 7s setup → 30s value → 15s climax → 5s CTA. Retention 85-95%, thuật toán TikTok mê nhất." }
            ],

            features: [
                { title: "Tr Radar 24/7", desc: "Bắt trend realtime, cảnh báo qua Telegram" },
                { title: "7 Hook Formulas", desc: "Shock, FOMO, Curiosity - test 10,000+ viral videos" },
                { title: "Audio Matcher", desc: "Ghép audio trending với content của bạn" },
                { title: "Hashtag Science", desc: "Mix 3 big + 5 medium + 7 micro hashtags" },
                { title: "Duet/Stitch Ideas", desc: "Surf viral videos không bị copyright" },
                { title: "FYP Optimizer", desc: "Tối ưu 15 yếu tố thuật toán TikTok 2025" }
            ],

            comparison: {
                title: "X10 TikTok Kit vs Tự Làm",
                rows: [
                    { aspect: "Bắt trend", before: "Muộn 2-3 ngày, trend chết", after: "Sớm 24-48h, ăn trọn sóng" },
                    { aspect: "Hook 3s đầu", before: "Yếu, bị scroll qua", after: "5 mẫu test, chọn mạnh nhất" },
                    { aspect: "Retention", before: "40-50% xem hết", after: "85-95% xem hết" },
                    { aspect: "FYP rate", before: "5-10% video lên FYP", after: "60-70% video lên FYP" }
                ]
            },

            faq: [
                { q: "Tôi chưa có video nào viral, kit có giúp được không?", a: "Kit thiết kế cho người mới! Bạn chỉ cần chọn trend từ danh sách, AI sẽ tạo hook + kịch bản theo công thức đã giúp 1000+ videos lên FYP." },
                { q: "Trend thay đổi mỗi ngày, sao kit theo kịp?", a: "Trend Radar quét realtime 1000+ video/giờ, update liên tục. Bạn luôn thấy trends đang lên trước người khác 24-48h." },
                { q: "Tôi làm TikTok cho nhiều khách, kit có bị giới hạn không?", a: "Không giới hạn! Bản quyền thương mại full. Agency đang dùng kit chạy 20-30 kênh, mỗi ngày 50+ videos." }
            ],

            ctaText: "Mua TikTok Kit",
            ctaPrice: "$19"
        }
    },

    // ===========================================
    // MARKETING KIT
    // ===========================================
    marketing: {
        en: {
            name: "Marketing Kit",
            tagline: "Campaigns & AIDA Copy",
            price: "$49",
            badge: "Essential",
            heroDesc: "Your virtual CMO. Plan campaigns, write persuasive copy, and analyze competitors effortlessly.",

            problem: "Expensive agencies, generic templates, and weeks to launch a single campaign.",
            solution: "12+ MCP integrations with 3 automated workflows for research, copy, and execution.",

            agents: [
                { name: "Campaign Planner", icon: "📊", desc: "Creates comprehensive campaign strategies with timelines." },
                { name: "Copywriter", icon: "✍️", desc: "Writes AIDA, PAS, and other proven frameworks." },
                { name: "Competitor Analyst", icon: "🔎", desc: "Analyzes competitors and finds USP opportunities." },
                { name: "Lead Generator", icon: "🎯", desc: "Researches and qualifies leads automatically." }
            ],

            features: [
                { title: "12+ MCP Integrations", desc: "Connect with tools you already use" },
                { title: "3 Workflows", desc: "Research, Content, Outreach" },
                { title: "AIDA/PAS Copy", desc: "Proven copywriting frameworks" },
                { title: "A/B Headlines", desc: "5 variants for testing" },
                { title: "Competitor Intel", desc: "Automated competitive analysis" },
                { title: "Email Sequences", desc: "Complete nurturing flows" }
            ],

            comparison: {
                title: "Marketing Kit vs Hiring Agency",
                rows: [
                    { aspect: "Campaign Planning", before: "2-4 weeks", after: "2 hours" },
                    { aspect: "Copy Creation", before: "$500/page", after: "Unlimited" },
                    { aspect: "Competitor Research", before: "Manual spreadsheets", after: "Auto-generated" },
                    { aspect: "Lead Research", before: "VA or tool stack", after: "Built-in" }
                ]
            },

            faq: [
                { q: "What MCP integrations are included?", a: "Gmail, Sheets, Notion, Slack, and 8+ more. Growing monthly." },
                { q: "Can it write in multiple languages?", a: "Yes! Native-quality copy in EN, JP, KR, VN." },
                { q: "Do I need technical skills?", a: "No. Simple commands like /campaign and /copy." }
            ],

            ctaText: "Get Marketing Kit",
            ctaPrice: "$49"
        },
        vi: {
            name: "Marketing Kit",
            tagline: "Chiến dịch & Copy AIDA",
            price: "$49",
            badge: "Thiết yếu",
            heroDesc: "X10 hiệu quả Marketing: CMO AI lập chiến dịch trong 2h thay vì 2 tuần, viết copy AIDA chuyển đổi 3-5%, research đối thủ tự động - tiết kiệm $5000/tháng agency.",

            problem: "Bạn không đủ budget thuê agency ($3000-5000/tháng), tự làm thì mất 2-3 tuần research + lập kế hoạch. Copy viết ra generic, chiến dịch chạy không có hệ thống, không biết đối thủ làm gì.",
            solution: "X10 Marketing Kit = Virtual CMO với 12+ tích hợp công cụ: Campaign Planner lập chiến dịch 3 tháng trong 2h, AI Copywriter viết AIDA/PAS conversion 3-5%, Competitor Intel tự động phân tích đối thủ.",

            agents: [
                { name: "Campaign Brain", icon: "🧠", desc: "AI CMO lập chiến dịch toàn diện: target audience, messaging, channels, timeline, budget allocation. Bạn có roadmap 90 ngày chi tiết trong 2 giờ." },
                { name: "Copy Converter", icon: "✍️", desc: "Viết copy theo 5 frameworks viral: AIDA, PAS, FAB, 4Ps, BAB. Test trên 5000+ campaigns, conversion rate trung bình 3-5% (industry: 1-2%)." },
                { name: "Intel Spider", icon: "🕷️", desc: "Quét website, ads, content của đối thủ. Tìm gaps trong strategy của họ, gợi ý USP để bạn đánh 'blind spots' chưa ai khai thác." },
                { name: "Lead Machine", icon: "🎯", desc: "Research + qualify leads tự động theo ICP của bạn. Kết nối Gmail, LinkedIn, Sales Navigator - build prospect list 200-500 leads/ngày." }
            ],

            features: [
                { title: "12+ MCP Tools", desc: "Gmail, Sheets, Notion, Slack, HubSpot, Airtable..." },
                { title: "3 Auto Workflows", desc: "Research → Content → Outreach pipeline" },
                { title: "5 Copy Frameworks", desc: "AIDA, PAS, FAB, 4Ps, BAB - test 5000+ campaigns" },
                { title: "A/B Headline Gen", desc: "5 phiên bản headlines test ngay" },
                { title: "Competitor Autopilot", desc: "Quét đối thủ mỗi tuần, alerts thay đổi" },
                { title: "Email Sequences", desc: "Nurture flows 5-7 emails, conversion 15-25%" }
            ],

            comparison: {
                title: "X10 Marketing Kit vs Thuê Agency",
                rows: [
                    { aspect: "Lập chiến dịch", before: "2-4 tuần + $2000", after: "2 giờ + $0" },
                    { aspect: "Viết copy chuyên nghiệp", before: "$500/page", after: "Unlimited, conversion 3-5%" },
                    { aspect: "Research đối thủ", before: "Tự làm spreadsheet", after: "Auto scan + alerts" },
                    { aspect: "Chi phí hàng tháng", before: "$3000-5000 agency", after: "$49 mua 1 lần" }
                ]
            },

            faq: [
                { q: "Tôi chưa làm marketing bao giờ, kit có phức tạp không?", a: "Kit thiết kế cho non-marketer! Bạn trả lời 5-7 câu hỏi về business, AI sẽ tự động gen ra campaign plan đầy đủ. Có examples mẫu cho 10+ ngành." },
                { q: "Kit tích hợp được với công cụ nào?", a: "12+ công cụ phổ biến: Gmail, Google Sheets, Notion, Slack, Airtable, HubSpot, Trello, Monday, ClickUp... Thêm mới mỗi tháng." },
                { q: "Tôi đang dùng agency, kit có thay thế được không?", a: "Được! 80% công việc agency (research, planning, copywriting) kit làm tốt hơn và rẻ hơn 100 lần. Bạn chỉ cần agency cho execution (design, ads setup)." }
            ],

            ctaText: "Mua Marketing Kit",
            ctaPrice: "$49"
        }
    },

    // ===========================================
    // ENGINEER KIT
    // ===========================================
    engineer: {
        en: {
            name: "Engineer Kit",
            tagline: "React/Next.js Code Generation",
            price: "$39",
            badge: "Pro Choice",
            heroDesc: "Code 10x faster. A pair programmer that knows React, Tailwind, and Clean Code principles.",

            problem: "Slow development, inconsistent code quality, and time wasted on boilerplate.",
            solution: "15 specialized agents for frontend, backend, testing, and documentation.",

            agents: [
                { name: "Frontend Wizard", icon: "🎨", desc: "React components with Tailwind, following best practices." },
                { name: "Backend Architect", icon: "🏗️", desc: "API design, database schemas, clean architecture." },
                { name: "Bug Hunter", icon: "🐛", desc: "Finds and fixes bugs with explanations." },
                { name: "Docs Scribe", icon: "📚", desc: "Auto-generates documentation from code." },
                { name: "Vibe Architect", icon: "✨", desc: "Project scaffolding from natural language." }
            ],

            features: [
                { title: "15 Agents", desc: "Specialized for every development task" },
                { title: "React/Next.js", desc: "Modern stack with TypeScript" },
                { title: "Tailwind CSS", desc: "Utility-first styling" },
                { title: "Clean Code", desc: "SOLID principles built-in" },
                { title: "Git Workflow", desc: "PR descriptions, commit messages" },
                { title: "/vibe Command", desc: "Build from description to code" }
            ],

            comparison: {
                title: "Engineer Kit vs Manual Coding",
                rows: [
                    { aspect: "Component Creation", before: "30-60 minutes", after: "30 seconds" },
                    { aspect: "Bug Fixing", before: "Debug for hours", after: "Instant diagnosis" },
                    { aspect: "Documentation", before: "Often skipped", after: "Auto-generated" },
                    { aspect: "Code Quality", before: "Inconsistent", after: "Always clean" }
                ]
            },

            faq: [
                { q: "What frameworks are supported?", a: "React, Next.js, Vue, Node.js, and more. Tailwind-first styling." },
                { q: "Can it write tests?", a: "Yes! Jest, React Testing Library, and Playwright support." },
                { q: "Works with my existing codebase?", a: "Yes. It learns your patterns and follows your conventions." }
            ],

            ctaText: "Get Engineer Kit",
            ctaPrice: "$39"
        },
        vi: {
            name: "Engineer Kit",
            tagline: "Code React/Next.js",
            price: "$39",
            badge: "Chọn lựa Pro",
            heroDesc: "X10 tốc độ code: 15 AI agents viết React component trong 30s, fix bug tự động có giải thích, gen docs từ code, scaffold project từ idea - code nhanh gấp 10 lần, clean code theo SOLID.",

            problem: "Bạn mất 1-2 giờ viết 1 component React, debug một mình cả ngày, docs thì lười viết, boilerplate lặp đi lặp lại. Deadline sắp tới mà code còn messy, test chưa viết.",
            solution: "X10 Engineer Kit = 15 AI agents chuyên biệt cho mọi task: Frontend Wizard viết component React + Tailwind trong 30s, Bug Hunter fix lỗi + giải thích, Docs Scribe tự động gen docs chuẩn, Vibe Architect scaffold project từ ý tưởng.",

            agents: [
                { name: "Frontend Wizard", icon: "🎨", desc: "Viết React components với Tailwind CSS theo best practices: prop types, hooks đúng cách, accessibility, responsive. Code như senior dev, không cần review nhiều." },
                { name: "Backend Architect", icon: "🏗️", desc: "Thiết kế API RESTful/GraphQL, database schema tối ưu, clean architecture phân tầng rõ ràng. Follow patterns: Repository, Service Layer, Dependency Inject." },
                { name: "Bug Terminator", icon: "🐛", desc: "Tìm bugs nhanh như debugger, fix và giải thích WHY lỗi, HOW fix. Bạn học được best practices debugging, không lặp lại lỗi nữa." },
                { name: "Docs Master", icon: "📚", desc: "Tự động gen docs từ code: function descriptions, usage examples, API endpoints. Format chuẩn JSDoc, Markdown, Swagger - team lead thích lắm." },
                { name: "Vibe Architect", icon: "✨", desc: "Scaffold project hoàn chỉnh từ mô tả tự nhiên. Bạn nói 'làm CRM cho SME', AI setup Next.js + Prisma + tRPC + Auth ngay." }
            ],

            features: [
                { title: "15 Specialized Agents", desc: "Mỗi agent 1 nhiệm vụ, code như team 15 người" },
                { title: "React/Next.js/TypeScript", desc: "Stack hiện đại 2025, best practices built-in" },
                { title: "Tailwind-first", desc: "Utility CSS, responsive tự động, dark mode ready" },
                { title: "SOLID Principles", desc: "Code luôn clean, dễ maintain, scale tốt" },
                { title: "Git Workflow", desc: "Gen PR descriptions, commit messages semantic" },
                { title: "/vibe Command Magic", desc: "Mô tả app bằng tiếng Việt → Full stack code" }
            ],

            comparison: {
                title: "X10 Engineer Kit vs Code Thủ Công",
                rows: [
                    { aspect: "Viết component", before: "30-60 phút/component", after: "30 giây, có props + types" },
                    { aspect: "Fix bug", before: "Debug cả ngày", after: "30s tìm + fix + giải thích" },
                    { aspect: "Viết docs", before: "Thường bỏ qua", after: "Tự động, chuẩn JSDoc" },
                    { aspect: "Quality code", before: "Trưởng nhóm nhức đầu", after: "Luôn SOLID, easy maintain" }
                ]
            },

            faq: [
                { q: "Tôi mới học React, kit có quá advanced không?", a: "Kit dạy bạn luôn! Mỗi lần gen code, AI giải thích tại sao viết như vậy, pattern nào, best practice gì. Như có senior dev ngồi cạnh." },
                { q: "Kit support frameworks nào?", a: "React, Next.js, Vue, Nuxt, Node.js, Express, Nest.js. Styling: Tailwind (khuyến khích), CSS Modules, Styled Components. Database: Prisma, TypeORM." },
                { q: "Code của kit có sạch không hay phải sửa nhiều?", a: "Code tuân thủ 100% SOLID, có prop types, error handling, comments. Senior devs review báo 'code này junior viết sao clean vậy?'. Bạn sẽ tự hào." }
            ],

            ctaText: "Mua Engineer Kit",
            ctaPrice: "$39"
        }
    },

    // ===========================================
    // BRAND KIT
    // ===========================================
    brand: {
        en: {
            name: "Brand Kit",
            tagline: "Personal Branding Strategy",
            price: "$29",
            badge: "New",
            heroDesc: "Build a memorable personal brand. Define your voice and engage your audience consistently.",

            problem: "Inconsistent messaging, unclear positioning, and content that doesn't resonate.",
            solution: "AI agents that define your brand DNA and ensure every piece of content is on-brand.",

            agents: [
                { name: "Voice Definer", icon: "🎤", desc: "Creates your unique brand voice and tone guidelines." },
                { name: "Content Planner", icon: "📅", desc: "Monthly content calendar aligned with your pillars." },
                { name: "Engagement Bot", icon: "💬", desc: "Responses that sound like you, not generic AI." },
                { name: "Brand Checker", icon: "✅", desc: "Ensures consistency across all content." }
            ],

            features: [
                { title: "Voice DNA", desc: "Your unique tone documented" },
                { title: "Content Pillars", desc: "4 themes that define your brand" },
                { title: "Response Templates", desc: "On-brand replies for DMs/comments" },
                { title: "Story Bank", desc: "Personal stories ready to deploy" },
                { title: "Bio Generator", desc: "Platform-optimized bios" },
                { title: "Consistency Scorer", desc: "Check if content matches your voice" }
            ],

            comparison: {
                title: "Brand Kit vs No Strategy",
                rows: [
                    { aspect: "Brand Clarity", before: "Vague positioning", after: "Crystal clear" },
                    { aspect: "Content Ideas", before: "Random topics", after: "Strategic pillars" },
                    { aspect: "Voice Consistency", before: "Changes daily", after: "Always you" },
                    { aspect: "Audience Connection", before: "Generic feel", after: "Personal touch" }
                ]
            },

            faq: [
                { q: "Is this for personal or business brands?", a: "Both! Works for solopreneurs, creators, and small businesses." },
                { q: "How long to set up my brand voice?", a: "About 30 minutes of initial Q&A to capture your essence." },
                { q: "Can I update my brand voice later?", a: "Yes! Evolve your voice as your brand grows." }
            ],

            ctaText: "Get Brand Kit",
            ctaPrice: "$29"
        },
        vi: {
            name: "Brand Kit",
            tagline: "Chiến lược Personal Branding",
            price: "$29",
            badge: "Mới",
            heroDesc: "X10 sức ảnh hưởng cá nhân: AI định nghĩa voice DNA độc nhất, lịch content 30 ngày align với brand pillars, templates reply tương tác như chính bạn - xây personal brand mạnh trong 3 tháng.",

            problem: "Bạn post content lung tung không nhất quán, mỗi ngày một giọng khác nhau, không có chiến lược rõ ràng. Khán giả không nhớ bạn là ai, làm gì, khác người khác chỗ nào.",
            solution: "X10 Brand Kit với 4 AI agents tạo Brand DNA hoàn chỉnh: Voice Definer chiết xuất giọng nói độc nhất của bạn, Content Strategist lập lịch 30 ngày theo pillars, Engagement Pro tạo templates reply đúng voice, Brand Checker kiểm tra mọi content trước khi đăng.",

            agents: [
                { name: "Voice DNA Architect", icon: "🎤", desc: "Interview bạn 10-15 phút, chiết xuất voice DNA: tone (formal/casual), values, storytelling style, expertise areas. Document thành guidelines team hoặc VA dùng được." },
                { name: "Content Strategist", icon: "📅", desc: "Lập content calendar 30 ngày dựa trên 4 pillars của bạn: educate, inspire, entertain, sell. Mix tỷ lệ vàng 70-20-10, không bao giờ quá bán hàng." },
                { name: "Engagement Wizard", icon: "💬", desc: "Tạo templates trả lời comments, DMs, emails theo đúng voice của bạn. Người đọc cảm nhận 'đây đúng là anh/chị ấy', không phải bot hay VA." },
                { name: "Brand Guardian", icon: "✅", desc: "Trước khi post, check content có match với voice DNA không. Score 1-10, gợi ý sửa nếu off-brand. Như có brand manager riêng." }
            ],

            features: [
                { title: "Voice DNA Engine", desc: "Interview + extract voice, tone, personality" },
                { title: "4 Content Pillars", desc: "Educate, Inspire, Entertain, Sell - mix tỷ lệ vàng" },
                { title: "30-Day Calendar", desc: "Plan sẵn chủ đề, format, CTA cho cả tháng" },
                { title: "Reply Templates", desc: "50+ mẫu trả lời comments, DMs đúng voice" },
                { title: "Story Bank", desc: "12 câu chuyện cá nhân để dùng trong content" },
                { title: "Bio Generator", desc: "Tối ưu bio cho LinkedIn, X, Instagram, TikTok" }
            ],

            comparison: {
                title: "X10 Brand Kit vs Không Có Strategy",
                rows: [
                    { aspect: "Nhất quán brand", before: "Mỗi ngày một giọng", after: "Voice DNA chuẩn 100%" },
                    { aspect: "Lên ý tưởng content", before: "Nghĩ mỗi ngày, stress", after: "Calendar 30 ngày sẵn" },
                    { aspect: "Tương tác khán giả", before: "Reply chung chung", after: "Templates cá nhân hóa" },
                    { aspect: "Tốc độ build brand", before: "1-2 năm thử nghiệm", after: "3 tháng có traction rõ" }
                ]
            },

            faq: [
                { q: "Tôi chưa biết personal brand của mình là gì?", a: "Perfect! Kit sẽ giúp bạn tìm ra. Qua 10 phút interview, AI sẽ extract: điểm mạnh, expertise, values, storytelling style. Bạn sẽ thấy rõ 'mình là ai' trong mắt người khác." },
                { q: "Kit có thay được brand voice không? Tôi muốn đổi hướng.", a: "Được! Voice DNA có thể evolve. Bạn run lại interview khi muốn pivot, AI sẽ update guidelines. Ví dụ: từ 'formal expert' chuyển sang 'friendly mentor'." },
                { q: "Tôi có thể dùng Kit cho brand công ty được không?", a: "Hoàn toàn! Kit hoạt động tốt cho personal brand (CEO, founder) và company brand (startup, agency). Có case studies cho cả 2." }
            ],

            ctaText: "Mua Brand Kit",
            ctaPrice: "$29"
        }
    }
};

// ===========================================
// CONTENT LOADER FUNCTIONS
// ===========================================

/**
 * Get kit name from current page URL
 * youtube.html → youtube, writer.html → writer, etc.
 */
function getKitNameFromURL() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename || 'youtube';
}

/**
 * Get content for current kit in specified language
 * @param {string} kitName - Kit identifier (youtube, writer, etc.)
 * @param {string} lang - Language code (en, vi, ja, ko)
 */
function getKitContent(kitName, lang = 'en') {
    const kit = KIT_CONTENT[kitName];
    if (!kit) {
        console.warn(`Kit "${kitName}" not found, falling back to youtube`);
        return KIT_CONTENT.youtube[lang] || KIT_CONTENT.youtube.en;
    }
    return kit[lang] || kit.en;
}

/**
 * Render kit content into page sections
 * @param {string} kitName - Kit identifier
 * @param {string} lang - Language code
 */
function renderKitContent(kitName, lang = 'en') {
    const content = getKitContent(kitName, lang);

    // Hero Section
    setTextContent('[data-kit="name"]', content.name);
    setTextContent('[data-kit="tagline"]', content.tagline);
    setTextContent('[data-kit="heroDesc"]', content.heroDesc);
    setTextContent('[data-kit="badge"]', content.badge);
    setTextContent('[data-kit="price"]', content.price);

    // Problem/Solution
    setTextContent('[data-kit="problem"]', content.problem);
    setTextContent('[data-kit="solution"]', content.solution);

    // Agents Grid
    renderAgents('[data-kit="agents"]', content.agents);

    // Features Grid
    renderFeatures('[data-kit="features"]', content.features);

    // Comparison Table
    renderComparison('[data-kit="comparison"]', content.comparison);

    // FAQ
    renderFAQ('[data-kit="faq"]', content.faq);

    // CTA
    setTextContent('[data-kit="ctaText"]', content.ctaText);
    setTextContent('[data-kit="ctaPrice"]', content.ctaPrice);
}

// Helper: Set text content safely
function setTextContent(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
}

// Helper: Render agents grid
function renderAgents(selector, agents) {
    const container = document.querySelector(selector);
    if (!container || !agents) return;

    container.innerHTML = agents.map(agent => `
        <div class="bg-white/[0.03] p-6 rounded-xl border border-white/[0.06] hover:border-purple-500/30 transition-all">
            <div class="text-3xl mb-4">${agent.icon}</div>
            <h3 class="text-lg font-semibold text-white mb-2">${agent.name}</h3>
            <p class="text-sm text-white/60">${agent.desc}</p>
        </div>
    `).join('');
}

// Helper: Render features grid
function renderFeatures(selector, features) {
    const container = document.querySelector(selector);
    if (!container || !features) return;

    container.innerHTML = features.map(feat => `
        <div class="flex items-start gap-3">
            <span class="text-amber-400">✓</span>
            <div>
                <span class="font-medium text-white">${feat.title}</span>
                <span class="text-white/50"> — ${feat.desc}</span>
            </div>
        </div>
    `).join('');
}

// Helper: Render comparison table
function renderComparison(selector, comparison) {
    const container = document.querySelector(selector);
    if (!container || !comparison) return;

    const titleEl = container.querySelector('[data-kit="comparison-title"]');
    if (titleEl) titleEl.textContent = comparison.title;

    const tbody = container.querySelector('tbody');
    if (!tbody) return;

    tbody.innerHTML = comparison.rows.map(row => `
        <tr>
            <td class="px-5 py-3 text-sm font-medium text-white/80">${row.aspect}</td>
            <td class="px-5 py-3 text-sm text-center text-white/40">${row.before}</td>
            <td class="px-5 py-3 text-sm text-center font-semibold text-cyan-400 bg-cyan-500/5">${row.after}</td>
        </tr>
    `).join('');
}

// Helper: Render FAQ accordion
function renderFAQ(selector, faq) {
    const container = document.querySelector(selector);
    if (!container || !faq) return;

    container.innerHTML = faq.map(item => `
        <details class="group bg-white/[0.03] rounded-lg p-4 border border-white/[0.06] open:border-purple-500/30 transition-all">
            <summary class="flex justify-between items-center text-sm font-medium text-white cursor-pointer list-none">
                ${item.q}
                <span class="text-white/40 transition group-open:rotate-180">▼</span>
            </summary>
            <p class="text-sm text-white/50 mt-3 leading-relaxed">${item.a}</p>
        </details>
    `).join('');
}

// ===========================================
// AUTO-INITIALIZE
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    const kitName = getKitNameFromURL();
    const lang = localStorage.getItem('x10_lang') || 'en';
    renderKitContent(kitName, lang);
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.KIT_CONTENT = KIT_CONTENT;
    window.getKitContent = getKitContent;
    window.renderKitContent = renderKitContent;
}
