/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */



export const menusConfig = {
  zh: {
    message: {
      home: "首页",
      sysManagement: "系统管理",
      Baseinfo: "基础信息",
      Dict: "字典管理",
      editor: "编辑器",
      error: "错误页面",
      fourZeroFour: "404",
      fourZeroOne: "401",
      components: "组件",
      video: "视频组件",
      map: "地图组件",
      draggable: "拖拽组件",
      splitPane: "切割面板",
      button: "按钮组件",
      cropping: "图片裁剪",
      countTo: "数字动画",
      selector: "选择器组件",
      flowChart: "流程图",
      seamless: "无缝滚动",
    },
  },
  en: {
    message: {
      home: "Home",
      sysManagement: "System Manage",
      Baseinfo: "Base Info",
      Dict: "Dict Manage",
      editor: "Editor",
      error: "Error Page",
      fourZeroFour: "404",
      fourZeroOne: "401",
      components: "Components",
      video: "Video Components",
      map: "Map Components",
      draggable: "Draggable Components",
      splitPane: "Split Pane",
      button: "Button Components",
      cropping: "Picture Cropping",
      countTo: "Digital Animation",
      selector: "Selector Components",
      flowChart: "Flow Chart",
      seamless: "Seamless Scroll",
    },
  },
};

// 按钮配置
export const buttonConfig = {
  zh: {
    message: {
      LoginOut: "退出系统",
      fullscreen: "全屏",
      exitfullscreen: "退出全屏",
      refreshRoute: "刷新路由",
      login: "登陆",
      register: "注册",
      add: "新增",
      mark: "标记/取消",
      save: "保存",
      search: "搜索",
      expendAll: "全部展开",
      collapseAll: "全部折叠",
      systemSet: "系统设置",
    },
  },
  en: {
    message: {
      LoginOut: "loginOut",
      fullscreen: "fullScreen",
      exitfullscreen: "exitFullscreen",
      refreshRoute: "refreshRoute",
      login: "login",
      register: "register",
      add: "Add",
      mark: "Mark/Cancel",
      save: "Save",
      search: "Search",
      expendAll: "Expand All",
      collapseAll: "Collapse All",
      systemSet: "System Set",
    },
  },
};

const localesList = [menusConfig, buttonConfig];

export const localesConfigs = {
  zh: {
    message: Object.assign({}, ...localesList.map((v) => v.zh.message)),
    // ...zhVxeTable,
  },
  en: {
    message: Object.assign({}, ...localesList.map((v) => v.en.message)),
    // ...enVxeTable,
  },
};
