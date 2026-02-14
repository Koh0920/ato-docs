// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: 'Ato Docs',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        {
          label: 'Resources',
          items: [
            { label: 'Future Roadmap', slug: 'future-roadmap' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/anomalyco/capsuled-dev/edit/main/apps/ato-docs/',
      },
      customCss: ['./src/styles/custom.css'],
      pagefind: true,
      components: {
        PageFrame: './src/components/PageFrame.astro',
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        PageSidebar: './src/components/TocSidebar.astro',
      },
    }),
  ],
});