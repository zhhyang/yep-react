import warning from 'warning';
import CloseO from './svgs/CloseO';
import JiaZai from './svgs/JiaZai';
import Star from './svgs/Star';
import StarO from './svgs/StarO';

const Icon = () => {
  warning(false, 'Icon', 'Empty Icon');
  return null;
};
Icon.CloseO = CloseO;
Icon.JiaZai = JiaZai;
Icon.Star = Star;
Icon.StarO = StarO;
export default Icon;
