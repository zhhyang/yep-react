import Home from '../pages/index';
import Switch from '../pages/switch';
import Checkbox from '../pages/checkbox';
import Radio from '../pages/radio';
import Button from '../pages/button';
import Popup from '../pages/popup';
import ActionSheet from '../pages/action-sheet';
import Picker from '../pages/picker';



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
},{
  path: '/button',
  component: Button
},{
  path: '/popup',
  component: Popup
},{
  path: '/action-sheet',
  component: ActionSheet
},{
  path: '/picker',
  component: Picker
},];
