const ENV = process.env.NODE_ENV;
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  // tslint:disable-next-line:no-console
  console.warn('You are using a whole package of @jdcfe/lrc-m, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
import Switch from './switch';
import Checkbox from './checkbox';
import Radio from './radio';
import Button from './button';
import Popup from './popup';
import ActionSheet from './action-sheet';
import Picker from './picker';
import ProgressBar from './progress-bar';
import Icon from './icon';
import Toast from './toast';
import Dialog from './dialog';
import WhiteSpace from './white-space';
import Upload from './upload';
import Placeholder from './placeholder';
import TabBar from './tab-bar';
import Sticky from './sticky';

export default {
  ActionSheet,
  Button,
  Switch,
  Checkbox,
  Radio,
  Popup,
  Picker,
  ProgressBar,
  Icon,
  Toast,
  Dialog,
  WhiteSpace,
  Upload,
  Placeholder,
  TabBar,
  Sticky,
};
