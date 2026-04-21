import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],  // ← plus dans "integrations" mais dans "vite.plugins"
    },
});