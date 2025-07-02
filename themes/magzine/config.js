const CONFIG = {
  // 首屏信息栏按钮文字
  MAGZINE_HOME_BANNER_ENABLE: true, // 首屏右上角的宣传位
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: '了解更多',

  MAGZINE_HOME_HIDDEN_CATEGORY: '分享杂文', //不希望在首页展示的文章分类，用英文逗号隔开

  MAGZINE_HOME_TITLE: '日拱一卒无有尽，功不唐捐终入海',
  MAGZINE_HOME_DESCRIPTION:
    '其实这部分内容还没想好',
  MAGZINE_HOME_TIPS: '想好后会添加进来',

  // 首页底部推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  MAGZINE_RECOMMEND_POST_TAG: '推荐',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: '推荐文章',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // 右侧面板深色模式

  MAGZINE_POST_LIST_COVER: true, // 文章列表显示图片封面
  MAGZINE_POST_LIST_PREVIEW: true, // 列表显示文章预览
  MAGZINE_POST_LIST_CATEGORY: true, // 列表显示文章分类
  MAGZINE_POST_LIST_TAG: true, // 列表显示文章标签

  MAGZINE_POST_DETAIL_CATEGORY: true, // 文章显示分类
  MAGZINE_POST_DETAIL_TAG: true, // 文章显示标签

  // 文章页面联系卡
  MAGZINE_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  MAGZINE_SOCIAL_CARD_TITLE_1: '暂无社群',
  MAGZINE_SOCIAL_CARD_TITLE_2: '要不加二狗TG？',
  MAGZINE_SOCIAL_CARD_TITLE_3: '点击加二狗',
  MAGZINE_SOCIAL_CARD_URL: 'https://t.me/madergo',

  // 页脚菜单
  MAGZINE_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: '蓝星网络笔记',
          href: 'https://lanxing.substack.com'
        },
        {
          title: '加密阿尔法',
          href: 'https://www.youtube.com/@0xAlphaBox'
        }
      ]
    },
    {
      name: '社交媒体',
      menus: [
        {
          title: 'X/Twitter',
          href: 'https://x.com/Mad_Ergo'
        },
        {
          title: 'Telegram',
          href: 'https://t.me/madergo'
        },
        {
          title: 'YouTuBe',
          href: ''
        },
        {
          title: '微信公众号',
          href: ''
        },
        { title: '小红书', href: '' }
      ]
    },
    {
      name: '二狗也疯狂',
      menus: [
        { title: '关于二狗', href: 'https://www.allbuy.money/article/22389622-f085-818d-b14e-cf920c425680' },
      ]
    }
  ],

  // 旧版本顶部菜单
  MAGZINE_MENU_CATEGORY: true, // 显示分类
  MAGZINE_MENU_TAG: true, // 显示标签
  MAGZINE_MENU_ARCHIVE: true, // 显示归档
  MAGZINE_MENU_SEARCH: true, // 显示搜索

  MAGZINE_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
