import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'server',
    adapter: netlify(),
});


