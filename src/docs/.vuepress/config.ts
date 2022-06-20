module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Component Library 🥂',
      description: 'Documentation site for the Vue component library plugin',
    },
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    repo: '', // Github repo
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
          { text: 'GitHub', link: '' }, // external link to git repo...again
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['standard-component'],
            },
          ],
        },
      },
    },
  },
}
