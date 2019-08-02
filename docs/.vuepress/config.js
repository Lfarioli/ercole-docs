module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Ercole',
      description: 'Proactive Asset Software Management'
    },
      },
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        algolia: {},
        sidebar: [
          ['/introduction', 'Introduction'],
          ['/guide', 'Getting Started'],
          ['/architecture', 'Architecture']
        ]
      },
    },
    logo: '/ercole.svg',
    sidebarDepth: 2,
    displayAllHeaders: true
  }
}