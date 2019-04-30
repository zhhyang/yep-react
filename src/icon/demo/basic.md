---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    const icons = [
      'add-circle',
      'add-user',
      'add-users',
      'add',
      'arrow-back',
      'arrow-down-hollow',
      'arrow-down',
      'arrow-right',
      'arrow-up',
      'baitiao',
      'box',
      'calculator',
      'calendar',
      'calendar2',
      'cancel',
      'category',
      'charge',
      'close',
      'confirm',
      'credit-card',
      'data',
      'delete-with-bg',
      'delete',
      'doctorial-hat',
      'dongdong',
      'email',
      'flag',
      'follow',
      'heart',
      'help',
      'invoice',
      'invoice2',
      'item-checked',
      'jimi',
      'lego_bianji',
      'lego_biaoge',
      'lego_cuowu1',
      'lego_cuowu2',
      'lego_dingwei',
      'lego_duihao2',
      'lego_duohao1',
      'lego_fangda',
      'lego_fasong',
      'lego_fenxiang',
      'lego_gengduo',
      'lego_gouwuche',
      'lego_guanbi',
      'lego_guanzhu',
      'lego_jianshao',
      'lego_jiazai',
      'lego_jingxuan',
      'lego_liuyan',
      'lego_mima',
      'lego_mokuai',
      'lego_quanping',
      'lego_remai',
      'lego_rili',
      'lego_saoma',
      'lego_shanchu',
      'lego_shangchuan',
      'lego_shangjiantou',
      'lego_shezhi',
      'lego_shijian',
      'lego_shoucang',
      'lego_shouqi',
      'lego_shuaxin',
      'lego_sousuo',
      'lego_suoxiao',
      'lego_tianjia',
      'lego_tupiao',
      'lego_wenjian',
      'lego_xiajiantou',
      'lego_xiangshang',
      'lego_xiangxia',
      'lego_xiangyou',
      'lego_xiangzuo',
      'lego_xianshi',
      'lego_xiazai',
      'lego_xinpinshangshi',
      'lego_yichang',
      'lego_yonghu',
      'lego_youjian',
      'lego_youjianotu',
      'lego_youshuangjiantou',
      'lego_zanting',
      'lego_zengjia',
      'lego_zhekou',
      'lego_zhidi',
      'lego_zhiding',
      'lego_zuojiantou',
      'lego_zuoshuangjiantou',
      'list-download',
      'list',
      'location',
      'medal',
      'modify',
      'notice',
      'oder',
      'order',
      'org',
      'people',
      'plus',
      'score',
      'shop-baocun',
      'shop-beifen',
      'shop-bianji',
      'shop-chenggongyuandi',
      'shop-chiping',
      'shop-cuxiao',
      'shop-dakaixinshuangkou',
      'shop-danpin',
      'shop-daochu',
      'shop-goumai',
      'shop-guanbi',
      'shop-guanbitongzhi',
      'shop-jiangxu',
      'shop-jinzhi',
      'shop-jinzhiyuandi',
      'shop-kongzhuangtai',
      'shop-paixu',
      'shop-pinpai',
      'shop-qingcang',
      'shop-qingchu',
      'shop-resouci',
      'shop-rili',
      'shop-shaixuan',
      'shop-shanchu',
      'shop-shangpin',
      'shop-shangsheng',
      'shop-shengxu',
      'shop-shezhi',
      'shop-shibai',
      'shop-shibaiyuandi',
      'shop-shuoming',
      'shop-sousuo',
      'shop-tishi',
      'shop-tishiyuandi',
      'shop-tuichu',
      'shop-tuijian',
      'shop-xiajiang',
      'shop-xiazai',
      'shop-yidong',
      'shop-yishaixuan',
      'shop-yiwen',
      'shop-yiwenyuandi',
      'shop-yonghu',
      'shop-youjian',
      'shop-youjianquxiao',
      'shop-yunying',
      'shop-zhengque',
      'shop-zhuyi',
      'shop-zhuyiyuandi',
      'shop-zidingyi',
      'shop-zidingyiqu',
      'signOut',
      'tip',
      'training',
      'trophy',
      'view',
      'wallet',
      'zoom',
    ];

    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: style}} />
        <div className="iconContainer">
          {icons.map(icon => (
            <div className="iconItem">
              <Icon type={icon} key={icon} className="iconStyle" />
              <h6 className="iconName">{icon}</h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const style = `
  .iconContainer {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .iconItem {
    width: 50px;
    height: 60px;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
        align-items: center;
  }
  .iconStyle{
    width: 30px;
    height: 30px;
  }
  .iconName{
    margin-top: 12px;
    font-family: PingFangSC-Medium;
    	font-size: 10px;
    	font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 0px;
    	color: #000;
    	width: 100%;
    	overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
  }
`;
ReactDOM.render(<Demo />, mountNode);
```
