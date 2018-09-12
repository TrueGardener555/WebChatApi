export default [
  {
    title: 'Dashboard',
    key: 'dashboardAlpha',
    url: '/dashboard/alpha',
    icon: 'icmn icmn-home',
  },
  {
    title: 'Audience',
    key: 'Audience',
    url: '/subscribers',
    icon: 'icmn icmn-accessibility',
  },
  {
    title: 'Live Chat',
    key: 'livechat',
    url: '/chat',
    icon: 'icmn icmn-bubbles4',
  },
  {
    title: 'Growth Tools',
    key: 'growthtools',
    url: '/growth-tools',
    icon: 'icmn icmn-stats-dots',
  },
  {
    title: 'Broadcasting',
    key: 'broadcasting',
    icon: 'icmn icmn-sphere',
    children: [
      {
        title: 'Broadcasts',
        key: 'broadcasts',
        url: '/posting',
      },
      {
        title: 'AutoPosting',
        key: 'autoposting',
        url: '/autoposting',
      },
    ],
  },
  {
    title: 'Automation',
    key: 'automation',
    icon: 'icmn icmn-spinner',
    children: [
      {
        title: 'Main Menu',
        key: 'mainmenu',
        url: '/automation/menu/view',
      },
      {
        title: 'Default Reply',
        key: 'defaultreply',
        url: '/automation/default',
      },
      {
        title: 'Welcome Message',
        key: 'welcomemessage',
        url: '/automation/welcome',
      },
      {
        title: 'Keywords',
        key: 'keywords',
        url: '/automation/keywords',
      },
      {
        title: 'Sequences',
        key: 'sequences',
        url: '/sequence',
      },
      {
        title: 'Rules',
        key: 'rules',
        url: '/rules',
      },
    ],
  },
  {
    title: 'Flows',
    key: 'flows',
    url: '/cms',
    icon: 'icmn icmn-folder',
  },
  {
    title: 'Settings',
    key: 'settings',
    url: '/settings',
    icon: 'icmn icmn-cog',
  },

  {
    title: 'Templates',
    key: 'templates',
    url: '/templates',
    icon: 'icmn icmn-gift',
  },
  {
    title: 'Help',
    key: 'help',
    url: '/empty',
    icon: 'icmn icmn-bullhorn',
  },
  {
    title: 'Empty Page',
    key: 'empty',
    url: '/empty',
    icon: 'icmn icmn-books',
  },
]
