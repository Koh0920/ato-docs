// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: 'Ato.Sys Docs',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/anomalyco/capsuled-dev/edit/main/apps/ato-docs/',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      pagefind: true,
      components: {
        PageFrame: './src/components/PageFrame.astro',
        PageTitle: './src/components/PageTitle.astro',
        Header: './src/components/Header.astro',
        PageSidebar: './src/components/TocSidebar.astro',
      },
    }),
  ],
});
