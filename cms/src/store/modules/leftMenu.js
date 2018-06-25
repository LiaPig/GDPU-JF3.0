const leftMenu = {
    state: {
      isCollapse: true,
      menuList: [
        {
          path: '/',
          icon: 'icon iconfont icon-zhuye',
          title: '首页',
          key: 1,
          status: 1
        },
        {
          path: '/system',
          icon: 'icon iconfont icon-wxbgongju',
          title: '系统管理',
          key: 2,
          status: 1,
          children: [
            {
              path: '/system',
              icon: 'icon iconfont icon-chengyuan',
              title: '成员管理',
              key: 21
            },
            {
              path: '/system',
              icon: 'icon iconfont icon-jiaoseziliao',
              title: '角色管理',
              key: 22
            },
            {
              path: '/system/menu',
              icon: 'icon iconfont icon-caidanshezhi',
              title: '菜单管理',
              key: 23
            },
            {
              path: '/system/',
              icon: 'icon iconfont icon-wangzhan',
              title: '网站配置',
              key: 24
            }
          ]
        },
        {
          path: '/b',
          icon: 'icon iconfont icon-dongtaiwenben',
          title: '文章管理',
          key: 3,
          status: 1,
          children: [
            {
              path: '/',
              icon: 'icon iconfont icon-ai-article',
              title: '文章管理',
              key: 31
            },
            {
              path: '/',
              icon: 'icon iconfont icon-dingdanguanli',
              title: '内容发布',
              key: 32
            },
            {
              path: '/',
              icon: 'icon iconfont icon-guanli',
              title: '分类管理',
              key: 33
            }
          ]
        },
        {
          path: '/ab',
          icon: 'icon iconfont icon-iconfonthuagongyuanliao',
          title: '文件管理',
          key: 4,
          status: 1,
          children: [
            {
              path: '/',
              icon: 'icon iconfont icon-xiangce',
              title: '图册管理',
              key: 41
            },
            {
              path: '/',
              icon: 'icon iconfont icon-wenjian1',
              title: '附件管理',
              key: 42
            }
          ]
        },
        {
          path: '/abc',
          icon: 'icon iconfont icon-shouye',
          title: '服务管理',
          key: 5,
          status: 1,
          children: [
            {
              path: '/',
              icon: 'icon iconfont icon-weixiu',
              title: '报障单管理',
              key: 51
            },
            {
              path: '/',
              icon: 'icon iconfont icon-fuwuguwen',
              title: '其他服务管理',
              key: 52
            }
          ]
        }
      ],
      breadList: [],
      activeBread: ''
    },
    mutations: {
      SET_COLLAPSE: (state, isCollapse) => {
        state.isCollapse = isCollapse
      },
      SET_MENULIST: (state, menuList) => {
        state.menuList = menuList
      },
      SET_BREADLIST: (state, breadList) => {
        state.breadList = breadList
      },
      ADD_BREADLIST: (state, bread) => {
        state.breadList.push(bread)
      },
      SET_ACTIVEBREAD: (state, activeBread) => {
        state.activeBread = activeBread
      },
      REMOVE_BREADLIST: (state, targetName) => {
        if (state.breadList.length > 1) {
          let tabs = state.breadList;
          let activePath = state.activeBread;
          if (activePath === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activePath = nextTab.path;
                }
              }
            });
          }
          state.activeBread = activePath
          state.breadList = tabs.filter(tab => tab.name !== targetName)
        }
      }
    },
    actions: {
      setIsCollapse({ commit }, isCollapse) {
        commit('SET_COLLAPSE', isCollapse)
      },
      setMenuList({ commit }, menuList) {
        commit('SET_MENULIST', menuList)
      },
      setBreadList({ commit }, breadList) {
        commit('SET_BREADLIST', breadList)
      },
      addBreadList({ commit }, bread) {
        commit('ADD_BREADLIST', bread)
      },
      setActiveBread({ commit }, activeBread) {
        commit('SET_ACTIVEBREAD', activeBread)
      },
      removeBreadList({ commit }, targetName) {
        commit('REMOVE_BREADLIST', targetName)
      }
    }
}

export default leftMenu
