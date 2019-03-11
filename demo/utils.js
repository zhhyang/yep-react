export function getCategories(components) {
  return [...new Set([...Object.keys(components).map(component => components[component].category)])];
}

export const CATEGORIES = [
  {
    name: 'Basic',
    label: '基础',
  },
  {
    name: 'View',
    label: '视图',
  },
  {
    name: 'Feedback',
    label: '操作反馈',
  },
  {
    name: 'Form',
    label: '表单',
  },
  {
    name: 'Layout',
    label: '布局',
  },
  {
    name: 'Navigation',
    label: '导航',
  },
];
