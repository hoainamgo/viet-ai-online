
// ==========================================
// LANDING PAGE CMS CORE LOGIC
// ==========================================

// Global State
let CURRENT_DATA = {
    name: { en: "", vi: "" },
    price: { en: "", vi: "" },
    badge: { en: "", vi: "" },
    heroDesc: { en: "", vi: "" },
    ctaText: { en: "Get Started", vi: "Bắt đầu ngay" },
    ctaPrice: { en: "", vi: "" },
    features: { en: [], vi: [] },
    faq: { en: [], vi: [] },
    // Defaults for new languages
    ja: null,
    ko: null
};

let CURRENT_LANG = 'en';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Load API Keys from LocalStorage
    document.getElementById('ai-key').value = localStorage.getItem('cms_ai_key') || '';
    document.getElementById('gh-token').value = localStorage.getItem('cms_gh_token') || '';
    document.getElementById('gh-owner').value = localStorage.getItem('cms_gh_owner') || '';
    document.getElementById('gh-repo').value = localStorage.getItem('cms_gh_repo') || '';

    // Initialize UI
    renderForm();
    switchTab('content');
});

// ==========================================
// TAB & UI NAVIGATION
// ==========================================

function switchTab(tabId) {
    // Hide all views
    document.querySelectorAll('[id^="view-"]').forEach(el => el.classList.add('hidden'));
    // Show selected view
    document.getElementById(`view-${tabId}`).classList.remove('hidden');

    // Update Sidebar Active State
    document.querySelectorAll('[id^="tab-"]').forEach(btn => {
        btn.classList.remove('bg-blue-600/10', 'text-blue-400', 'border', 'border-blue-600/20');
        btn.classList.add('text-slate-400', 'hover:bg-white/5');
    });

    const activeBtn = document.getElementById(`tab-${tabId}`);
    activeBtn.classList.remove('text-slate-400', 'hover:bg-white/5');
    activeBtn.classList.add('bg-blue-600/10', 'text-blue-400', 'border', 'border-blue-600/20');
}

// ==========================================
// FORM HANDLING
// ==========================================

function renderForm() {
    CURRENT_LANG = document.getElementById('lang-select').value;

    // Ensure language object exists
    if (!CURRENT_DATA.name[CURRENT_LANG]) {
        initializeLanguage(CURRENT_LANG);
    }

    // Bind Basic Fields
    bindField('name', 'inp-name');
    bindField('price', 'inp-price');
    bindField('badge', 'inp-badge');
    bindField('heroDesc', 'inp-heroDesc');
    bindField('ctaText', 'inp-ctaText');
    bindField('ctaPrice', 'inp-ctaPrice');

    // Render Lists
    renderList('features', 'list-features', (item, index) => `
        <div class="glass-panel p-3 rounded-lg flex gap-3 items-start group">
            <div class="flex-1">
                <input type="text" oninput="updateListItem('features', ${index}, 'title', this.value)" value="${item.title || ''}" class="w-full bg-transparent border-none focus:ring-0 text-sm font-bold placeholder-white/20 mb-1" placeholder="Feature Title">
                <textarea oninput="updateListItem('features', ${index}, 'desc', this.value)" rows="2" class="w-full bg-transparent border-none focus:ring-0 text-xs text-slate-400 placeholder-white/20 resize-none" placeholder="Description">${item.desc || ''}</textarea>
            </div>
            <button onclick="deleteListItem('features', ${index})" class="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"><i class="fa-solid fa-trash"></i></button>
        </div>
    `);

    renderList('faq', 'list-faq', (item, index) => `
        <div class="glass-panel p-3 rounded-lg flex gap-3 items-start group">
            <div class="flex-1">
                <input type="text" oninput="updateListItem('faq', ${index}, 'q', this.value)" value="${item.q || ''}" class="w-full bg-transparent border-none focus:ring-0 text-sm font-bold placeholder-white/20 mb-1" placeholder="Question?">
                <textarea oninput="updateListItem('faq', ${index}, 'a', this.value)" rows="2" class="w-full bg-transparent border-none focus:ring-0 text-xs text-slate-400 placeholder-white/20 resize-none" placeholder="Answer">${item.a || ''}</textarea>
            </div>
            <button onclick="deleteListItem('faq', ${index})" class="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"><i class="fa-solid fa-trash"></i></button>
        </div>
    `);
}

function initializeLanguage(lang) {
    if (!CURRENT_DATA.name) CURRENT_DATA.name = {};
    // Init all fields for new lang
    ['name', 'price', 'badge', 'heroDesc', 'ctaText', 'ctaPrice'].forEach(key => {
        if (!CURRENT_DATA[key]) CURRENT_DATA[key] = {};
        CURRENT_DATA[key][lang] = "";
    });
    ['features', 'faq'].forEach(key => {
        if (!CURRENT_DATA[key]) CURRENT_DATA[key] = {};
        CURRENT_DATA[key][lang] = [];
    });
}

// Data Binding Helpers
function bindField(dataKey, elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    // Set value
    el.value = CURRENT_DATA[dataKey][CURRENT_LANG] || "";

    // Bind Listener (avoid duplicate binding)
    el.oninput = (e) => {
        CURRENT_DATA[dataKey][CURRENT_LANG] = e.target.value;
        markUnsaved();
    };
}

function renderList(key, containerId, templateFn) {
    const container = document.getElementById(containerId);
    const list = CURRENT_DATA[key][CURRENT_LANG] || [];
    container.innerHTML = list.map((item, index) => templateFn(item, index)).join('');
}

function addItem(key) {
    const list = CURRENT_DATA[key][CURRENT_LANG];
    if (key === 'features') list.push({ title: "New Feature", desc: "Description" });
    if (key === 'faq') list.push({ q: "New Question", a: "Answer" });
    renderForm(); // Re-render logic handles the list
    markUnsaved();
}

function deleteListItem(key, index) {
    CURRENT_DATA[key][CURRENT_LANG].splice(index, 1);
    renderForm();
    markUnsaved();
}

function updateListItem(key, index, field, value) {
    CURRENT_DATA[key][CURRENT_LANG][index][field] = value;
    markUnsaved();
}

// ==========================================
// AI LOGIC
// ==========================================

async function runAIMagic() {
    const apiKey = document.getElementById('ai-key').value;
    const provider = document.getElementById('ai-provider').value;
    const prodName = document.getElementById('ai-product-name').value;
    const prompt = document.getElementById('ai-prompt').value;

    // Get Selected Languages
    const checkedLangs = Array.from(document.querySelectorAll('input[name="ai-lang"]:checked')).map(cb => cb.value);

    if (!apiKey) { alert("Please enter an API Key"); return; }

    // Save Key
    localStorage.setItem('cms_ai_key', apiKey);

    updateAIStatus("Generating content... this may take 30s...", true);

    const SYSTEM_PROMPT = `You are a professional copywriter. 
    Generate a JSON object for a Landing Page Product. 
    Fields required: name, price, badge, heroDesc, ctaText, ctaPrice, features (array of {title, desc}), faq (array of {q, a}).
    
    Strictly return ONLY valid JSON. No markdown formatting.
    Target Languages: ${checkedLangs.join(', ')}.
    
    Structure Example:
    {
      "name": { "en": "...", "vi": "..." },
      ...
      "features": { "en": [...], "vi": [...] }
    }`;

    const USER_PROMPT = `Product: ${prodName}. Description: ${prompt}. Values: High quality, premium.`;

    try {
        let resultJSON = {};

        if (provider === 'openai') {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { role: "user", content: USER_PROMPT }
                    ],
                    temperature: 0.7
                })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error.message);

            let content = data.choices[0].message.content;
            // Clean markdown if present
            content = content.replace(/```json/g, '').replace(/```/g, '');
            resultJSON = JSON.parse(content);
        }

        // TODO: Add Gemini Request implementation here if needed
        // For now handling OpenAI mainly as default.

        // Merge Result
        console.log("AI Result:", resultJSON);
        CURRENT_DATA = resultJSON;

        // Ensure structure stability for arrays if AI missed something
        checkedLangs.forEach(lang => {
            if (!CURRENT_DATA.features[lang]) CURRENT_DATA.features[lang] = [];
            if (!CURRENT_DATA.faq[lang]) CURRENT_DATA.faq[lang] = [];
        });

        renderForm();
        switchTab('content');
        updateAIStatus("Success! Content generated.", false);
        alert("✨ Content generated successfully!");

    } catch (e) {
        console.error(e);
        updateAIStatus(`Error: ${e.message}`, false);
        alert("AI Generation Failed: " + e.message);
    }
}

function updateAIStatus(msg, isLoading) {
    const el = document.getElementById('ai-status');
    el.textContent = msg;
    const btn = document.getElementById('btn-magic');
    if (isLoading) {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
    } else {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Everything';
    }
}

// ==========================================
// AI TRANSLATOR
// ==========================================

async function runAITranslate() {
    const apiKey = document.getElementById('ai-key').value;
    const provider = document.getElementById('ai-provider').value;
    const sourceLang = document.getElementById('trans-source').value;
    const targetLang = document.getElementById('trans-target').value;

    if (!apiKey) { alert("Please enter an API Key in the AI Magic tab first."); return; }

    // UI Feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Translating...";
    btn.disabled = true;

    try {
        // Prepare Data to Translate
        const dataToTranslate = {
            name: CURRENT_DATA.name[sourceLang],
            price: CURRENT_DATA.price[sourceLang],
            badge: CURRENT_DATA.badge[sourceLang],
            heroDesc: CURRENT_DATA.heroDesc[sourceLang],
            ctaText: CURRENT_DATA.ctaText[sourceLang],
            ctaPrice: CURRENT_DATA.ctaPrice[sourceLang],
            features: CURRENT_DATA.features[sourceLang] || [],
            faq: CURRENT_DATA.faq[sourceLang] || []
        };

        const SYSTEM_PROMPT = `You are a professional translator. 
        Translate the values in the JSON object from ${sourceLang} to ${targetLang}.
        Keep the same keys. Return ONLY valid JSON.`;

        let resultJSON = {};

        if (provider === 'openai') {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                body: JSON.stringify({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { role: "user", content: JSON.stringify(dataToTranslate) }
                    ],
                    temperature: 0.3
                })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error.message);

            let content = data.choices[0].message.content.replace(/```json/g, '').replace(/```/g, '');
            resultJSON = JSON.parse(content);
        }

        // Apply Translation
        initializeLanguage(targetLang);
        CURRENT_DATA.name[targetLang] = resultJSON.name;
        CURRENT_DATA.price[targetLang] = resultJSON.price;
        CURRENT_DATA.badge[targetLang] = resultJSON.badge;
        CURRENT_DATA.heroDesc[targetLang] = resultJSON.heroDesc;
        CURRENT_DATA.ctaText[targetLang] = resultJSON.ctaText;
        CURRENT_DATA.ctaPrice[targetLang] = resultJSON.ctaPrice;
        CURRENT_DATA.features[targetLang] = resultJSON.features || [];
        CURRENT_DATA.faq[targetLang] = resultJSON.faq || [];

        alert(`Successfully translated to ${targetLang.toUpperCase()}!`);

        // Switch view to see changes
        document.getElementById('lang-select').value = targetLang;
        renderForm();
        switchTab('content');

    } catch (e) {
        console.error(e);
        alert("Translation Error: " + e.message);
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// ==========================================
// GITHUB SYNC
// ==========================================

async function syncToGitHub() {
    const token = document.getElementById('gh-token').value;
    const owner = document.getElementById('gh-owner').value;
    const repo = document.getElementById('gh-repo').value;
    const path = document.getElementById('gh-path').value;

    if (!token || !owner || !repo) {
        alert("Please fill in all GitHub fields.");
        return;
    }

    // Save Creds
    localStorage.setItem('cms_gh_token', token);
    localStorage.setItem('cms_gh_owner', owner);
    localStorage.setItem('cms_gh_repo', repo);

    const statusEl = document.getElementById('gh-status');
    statusEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Committing to GitHub...';
    statusEl.className = "mt-4 text-sm text-blue-400";

    try {
        const octokit = new Octokit({ auth: token });

        // 1. Get current SHA (if file exists)
        let sha = null;
        try {
            const { data } = await octokit.repos.getContent({ owner, repo, path });
            sha = data.sha;
        } catch (e) {
            // File doesn't exist yet, that's fine
        }

        // 2. Prepare Content (Base64)
        const contentStr = `const PRODUCT_CONTENT = ${JSON.stringify(CURRENT_DATA, null, 4)};\n\nif (typeof module !== 'undefined' && module.exports) { module.exports = PRODUCT_CONTENT; }`;
        const contentEncoded = btoa(unescape(encodeURIComponent(contentStr)));

        // 3. Commit/Push
        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path,
            message: `Update ${path} via KillerCMS`,
            content: contentEncoded,
            sha: sha || undefined
        });

        statusEl.innerHTML = '<i class="fa-solid fa-check"></i> Successfully pushed to GitHub!';
        statusEl.className = "mt-4 text-sm text-green-400";
        document.getElementById('unsaved-indicator').classList.add('hidden');

    } catch (e) {
        console.error(e);
        statusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Error: ${e.message}`;
        statusEl.className = "mt-4 text-sm text-red-400";
    }
}

// ==========================================
// EXPORT & SYNC
// ==========================================

function exportFile() {
    const content = `const PRODUCT_CONTENT = ${JSON.stringify(CURRENT_DATA, null, 4)};\n\nif (typeof module !== 'undefined' && module.exports) { module.exports = PRODUCT_CONTENT; }`;

    // Create Blob
    const blob = new Blob([content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    // Download Link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function markUnsaved() {
    document.getElementById('unsaved-indicator').classList.remove('hidden');
}

// Theme Preview Updates
function updateThemePreview() {
    const primary = document.getElementById('color-primary').value;
    const accent = document.getElementById('color-accent').value;
    const bg = document.getElementById('color-bg').value;

    const box = document.getElementById('theme-preview-box');
    const btn = document.getElementById('theme-preview-btn');

    box.style.backgroundColor = bg;
    btn.style.backgroundColor = accent;
    btn.style.color = '#000'; // Simplified contrast logic
}
updateThemePreview(); // Init
```
