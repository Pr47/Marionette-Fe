export const noLoginMenu = [
  {
    id: 'user-menu',
    text: '用户',
    items: [
      {
        id: 'login',
        text: '用户登录',
        link: '/login'
      }
    ]
  },
  {
    id: 'help-menu',
    text: '帮助',
    items: [
      {
        id: 'help',
        text: '帮助指南',
        link: '/help'
      },
      {
        id: 'about',
        text: '关于',
        link: '/about'
      }
    ]
  },
]

export const loginMenu = [
  {
    id: 'user-menu',
    text: '用户',
    items: [
      {
        id: 'info',
        text: '用户信息',
        link: '/info'
      },
      {
        id: 'manage',
        text: '用户管理',
        link: '/manage'
      },
      {
        id: 'logout',
        text: '退出登录',
        link: '/logout'
      }
    ]
  },
  {
    id: 'system-menu',
    text: '系统',
    items: [
      {
        id: 'status',
        text: '系统运行状态',
        link: '/status'
      },
      {
        id: 'settings',
        text: '系统设置',
        link: '/settings'
      },
      {
        id: 'reboot',
        text: '系统重启',
        link: '/reboot'
      }
    ]
  },
  {
    id: 'task-menu',
    text: '任务',
    items: [
      {
        id: 'task-manager',
        text: '任务管理器',
        link: '/taskmgr'
      }
    ]
  },
  {
    id: 'help-menu',
    text: '帮助',
    items: [
      {
        id: 'help',
        text: '帮助指南',
        link: '/help'
      },
      {
        id: 'about',
        text: '关于',
        link: '/about'
      }
    ]
  }
]

export default {
  noLoginMenu,
  loginMenu
}
