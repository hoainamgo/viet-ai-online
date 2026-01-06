/**
 * Kit Content Loader
 * Auto-detects which kit page is currently being viewed
 * and dynamically loads the appropriate content file
 */

// Detect current kit from URL or page context
function detectCurrentKit() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');

    // Map filenames to kit names
    const kitMap = {
        'youtube': 'youtube',
        'tiktok': 'tiktok',
        'marketing': 'marketing',
        'engineer': 'engineer',
        'brand': 'brand',
        'writer': 'writer'
    };

    return kitMap[filename] || null;
}

// Get content for a specific category and language
function getKitContent(category, lang = 'en') {
    const kitName = detectCurrentKit();
    if (!kitName) {
        console.warn('Could not detect kit name');
        return null;
    }

    // Get content from the globally loaded kit content
    const kitContent = window[`${kitName.toUpperCase()}_CONTENT`];

    if (!kitContent) {
        console.error(`Content not loaded for kit: ${kitName}`);
        return null;
    }

    // Return content for the requested category in the specified language
    const categoryContent = kitContent[category];

    if (!categoryContent) {
        console.warn(`No content found for category: ${category}`);
        return null;
    }

    // If it's a simple string/array, return the language version
    return categoryContent[lang] || categoryContent['en'] || categoryContent;
}

// Load kit-specific content file dynamically
async function loadKitContent() {
    const kitName = detectCurrentKit();

    if (!kitName) {
        console.log('Not on a kit page or kit not detected');
        return false;
    }

    try {
        // Dynamically load the kit's content file
        const script = document.createElement('script');
        script.src = `js/content/${kitName}.js`;
        script.async = false;

        return new Promise((resolve, reject) => {
            script.onload = () => {
                console.log(`✅ Loaded content for ${kitName} kit`);
                resolve(true);
            };
            script.onerror = () => {
                console.error(`❌ Failed to load content for ${kitName} kit`);
                reject(false);
            };
            document.head.appendChild(script);
        });
    } catch (error) {
        console.error('Error loading kit content:', error);
        return false;
    }
}

// Helper to get all content for current kit (for backward compatibility)
function getAllKitContent(lang = 'en') {
    const kitName = detectCurrentKit();
    if (!kitName) return null;

    const kitContent = window[`${kitName.toUpperCase()}_CONTENT`];
    if (!kitContent) return null;

    // Build a flat object with all content in specified language
    const result = {};
    for (const [category, content] of Object.entries(kitContent)) {
        result[category] = content[lang] || content['en'] || content;
    }

    return result;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        detectCurrentKit,
        getKitContent,
        loadKitContent,
        getAllKitContent
    };
}
