// Tailwind Config for custom colors
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'royal': '#4c1d95',
                'violet-soft': '#8b5cf6',
            }
        }
    }
}

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
