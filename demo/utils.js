const icon = require('./image');

exports.CATEGORIES = [
  {
    name: 'Basic',
    label: '基础',
    desc: '按钮、手势操作、遮罩层、弹窗等',
    icon: icon.base,
  },
  {
    name: 'Layout',
    label: '布局',
    desc: '包括索引、吸顶、滚动列表等',
    icon: icon.layout,
  },
  {
    name: 'View',
    label: '视图',
    desc: '包括微标、轮播图、倒计时、滚动加载等',
    icon: icon.view,
  },
  {
    name: 'Navigation',
    label: '导航',
    desc: '包括导航栏、标签栏等',
    icon: icon.nav,
  },
  {
    name: 'Feedback',
    label: '操作反馈',
    desc: '动作面板、对话框、进度条、轻提示等',
    icon: icon.operation,
  },
  {
    name: 'Form',
    label: '表单',
    desc: '复选框、评分、滑动开关、日期选择、图片上传等',
    icon: icon.form,
  },
];

exports.clearCache = () => {
  sessionStorage.setItem('openStatus', JSON.stringify({}));
  sessionStorage.setItem('scrollTop', '0');
};
