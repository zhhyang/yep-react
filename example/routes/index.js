import Home from '../pages/index';
import Switch from '../pages/switch';
import Checkbox from '../pages/checkbox';
import Radio from '../pages/radio';



export default [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/switch',
  component: Switch
},{
  path: '/checkbox',
  component: Checkbox
},{
  path: '/radio',
  component: Radio
},];
