// <!-- auto generated navs start -->
const autoGenNavs = {
  headerNavs: [
    {
      text: 'home',
      to: '/',
    },
    {
      text: '反馈',
      to: 'https://github.com/alibaba/ice',
      external: true,
      newWindow: true,
    },
    {
      text: '帮助',
      to: 'https://alibaba.github.io/ice',
      external: true,
      newWindow: true,
    },
  ],
  asideNavs: [
    {
      text: '首页',
      to: '/dashboard',
      icon: 'nav-list',
    },
    {
      text: '图表页',
      to: '/charts',
      icon: 'nav-list',
      children: [
        {
          text: '图表列表',
          to: '/chart/chart-list',
        },
      ],
    },
    {
      text: '表格页',
      to: '/table',
      icon: 'nav-list',
      children: [
        {
          text: '基础表格',
          to: '/table/basic-table',
        },
        {
          text: '展示型表格',
          to: '/table/table-display',
        },
        {
          text: '表格列表',
          to: '/table/table-list',
        },
      ],
    },
    {
      text: '列表页',
      to: 'list',
      icon: 'nav-list',
      children: [
        {
          text: '文章列表',
          to: '/list/article-list',
        },
        {
          text: '卡片列表',
          to: '/list/card-list',
        },
        {
          text: '图文列表',
          to: '/list/picture-list',
        },
      ],
    },
    {
      text: '内容页',
      to: '/portlets',
      icon: 'nav-list',
      children: [
        {
          text: '基础详情页',
          to: '/portlets/base',
        },
        {
          text: '条款协议页',
          to: '/portlets/terms',
        },
        {
          text: '进度展示页',
          to: '/portlets/progress',
        },
      ],
    },
    {
      text: '结果页',
      to: '/result',
      icon: 'nav-list',
      children: [
        {
          text: '成功',
          to: '/result/success',
        },
        {
          text: '失败',
          to: '/result/fail',
        },
      ],
    },
    {
      text: '异常页',
      to: '/exception',
      icon: 'nav-list',
      children: [
        {
          text: '204',
          to: '/exception/204',
        },
        {
          text: '403',
          to: '/exception/403',
        },
        {
          text: '404',
          to: '/exception/404',
        },
        {
          text: '500',
          to: '/exception/500',
        },
      ],
    },
  ],
};
// <!-- auto generated navs end -->

const customNavs = [];

function transform(navs) {
  // custom logical
  return navs;
}

export default transform([
  ...autoGenNavs,
  ...customNavs,
]);
