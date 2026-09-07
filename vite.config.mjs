import { defineConfig } from 'vite';

export default defineConfig({
    root: 'html',
    base: '/Projeto-ong/',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    }
});