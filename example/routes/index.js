import Home from '../pages/index';

import navs from './nav.config'

const routes = [];
navs.forEach(nav => {
  nav.list.filter(c => !c.disabled).forEach(com => {
    routes.push({
      path: com.path,
      component: require(`../pages${com.path}`).default
    })
  })
});

export default [{
  path: '/',
  exact: true,
  component: Home
}].concat(routes);
