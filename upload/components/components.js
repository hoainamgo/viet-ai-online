/**
 * X10 Creator Kits - Shared Components Loader
 * Loads shared HTML components (footer, header, etc.) into pages
 */

// Component paths - adjust if folder structure changes
const COMPONENTS = {
    header: 'components/header.html',
    footer: 'components/footer.html',
    // Add more components here as needed:
    // sidebar: 'components/sidebar.html',
};


/**
 * Load a component into the page
 * @param {string} componentName - Name of the component (e.g., 'footer')
 * @param {string} targetSelector - CSS selector for the target container
 */
async function loadComponent(componentName, targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) {
        console.warn(`Component target not found: ${targetSelector}`);
        return;
    }

    const componentPath = COMPONENTS[componentName];
    if (!componentPath) {
        console.error(`Unknown component: ${componentName}`);
        return;
    }

    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.status}`);
        }
        const html = await response.text();
        target.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
        // Fallback: show minimal footer on error
        if (componentName === 'footer') {
            target.innerHTML = `
                <footer class="bg-slate-900 text-slate-300 py-8 text-center">
                    <p class="text-sm">© 2025 X10 Creator Kits. Global Edition.</p>
                </footer>
            `;
        }
    }
}

/**
 * Auto-load all components on page load
 * Looks for elements with data-component attribute
 * Usage: <div data-component="footer"></div>
 */
function autoLoadComponents() {
    document.querySelectorAll('[data-component]').forEach(async (element) => {
        const componentName = element.getAttribute('data-component');
        if (componentName && COMPONENTS[componentName]) {
            await loadComponent(componentName, `[data-component="${componentName}"]`);
        }
    });
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', autoLoadComponents);

// Export for manual usage
window.X10Components = {
    load: loadComponent,
    autoLoad: autoLoadComponents,
    paths: COMPONENTS
};
