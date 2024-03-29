module.exports = {
  title: 'Time Thief Documentation',
  tagline: 'Running across Centuries',
  url: 'https://time-thief.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'devparanjay',
  projectName: 'time-thief-documentation',
  themeConfig: {
    navbar: {
      title: 'Time Thief Documentation',
      logo: {
        alt: 'Time Thief Logo',
        src: 'img/tt_logo_gray.gif',
      },
      links: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          to: 'docs/game-introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'https://time-thief.bss.design',
          label: 'Register Now!',
          position: 'left',
        },
        // {
        //   to: 'blog', label: 'Blog', position: 'left'
        // },
        {
          href: 'https://github.com/devparanjay/time-thief-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/game-introduction',
            },
            {
              label: 'Project Guides',
              to: 'docs/project-details',
            },
            {
              label: 'Competition Analysis',
              to: 'docs/probable-competition',
            },
            {
              label: 'Game Testing',
              to: 'docs/alpha-testing',
            }
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'Timeline',
              to: 'development/timeline',
            },
            {
              label: 'Team',
              to: 'development/team',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/devparanjay/time-thief-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paranjay Bind, Shiv Mehra, Rishabh Dhanuka, Wadalka Rushikesh`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/devparanjay/time-thief-documentation/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/devparanjay/time-thief-documentation/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
