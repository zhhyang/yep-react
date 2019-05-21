const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of @jdcfe/yep-react, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
  );
}
export {default as Switch} from './switch';
export {default as Checkbox} from './checkbox';
export {default as Radio} from './radio';
export {default as Button} from './button';
export {default as Popup} from './popup';
export {default as ActionSheet} from './action-sheet';
export {default as Picker} from './picker';
export {default as ProgressBar} from './progress-bar';
export {default as Icon} from './icon';
export {default as Toast} from './toast';
export {default as Dialog} from './dialog';
export {default as WhiteSpace} from './white-space';
export {default as ImagePicker} from './image-picker';
export {default as Skeleton} from './skeleton';
export {default as TabBar} from './tab-bar';
export {default as Sticky} from './sticky';
export {default as List} from './list';
export {default as Mask} from './mask';
export {default as ToTop} from './to-top';
export {default as Scratch} from './scratch';
export {default as Badge} from './badge';
export {default as IndexedList} from './indexed-list';
export {default as Gesture} from './gesture';
export {default as SwipeAction} from './swipe-action';
export {default as CountDown} from './count-down';
export {default as Message} from './message';
export {default as AutoComplete} from './auto-complete';
export {default as Dropdown} from './dropdown';
export {default as InputItem} from './input-item';
export {default as NavBar} from './nav-bar';
export {default as Carousel} from './carousel';
export {default as Tabs} from './tabs';
export {default as Rate} from './rate';
export {default as DatePicker} from './date-picker';
export {default as PickerView} from './picker-view';
export {default as InfiniteLoader} from './infinite-loader';
export {default as SearchBar} from './search-bar';
export {default as AreaPicker} from './area-picker';
export {default as VirtualList} from './virtual-list';
export {default as Loading} from './loading';
export {default as Steps} from './steps';
export {default as Price} from './price';
export {default as PullToRefresh} from './pull-to-refresh';
export {default as Cell} from './cell';
