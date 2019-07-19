---
order: 1
title: 设置初始位置
description: 使用 jumpIndex 设置初始位置，可配置跳转到指定列表的索引。
---

```js
import React from 'react';
import {VirtualList, Button} from '@jdcfe/yep-react';

const dataSource = [];

function generateLi(i) {
  const goods = [
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/3239/32/15737/216163/5be00b23Edc8033ba/0a2b4f5fbe02b898.jpg',
      jdPrice: 15.9,
      name: '厨邦 酱油 特级生抽 820ml',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/5121/27/14398/110595/5bdbcd5dE1a8194ca/eba79d9b1600b30e.jpg',
      jdPrice: 3.5,
      name: '中盐 无碘盐 未加碘纯精岩盐 400g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t19111/312/1281088851/301564/1795305f/5ac42eb6Neefca1cb.jpg',
      jdPrice: 7.5,
      name: '京糖（JINGTANG） 单晶冰糖 400g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t14794/317/1848512418/235575/2ca5461e/5a5c1b70Naec68239.jpg',
      jdPrice: 10.8,
      name: '韩国进口 海牌海苔 香脆紫菜烤海苔 休闲零食 经典原味 16g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t28402/112/750658684/76640/4aedab47/5cd5272fNb2a40c75.jpg',
      jdPrice: 49,
      name: '小猪酷琦 儿童坐便器 婴儿坐便圈男女宝宝马桶圈坐垫小孩便盆尿盆',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t20998/292/1875203961/206853/151f42a5/5b3dc467Nadde5e9a.jpg',
      jdPrice: 13.2,
      name: '海天 上等蚝油 火锅蘸料520g*2',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/30923/11/8994/217735/5ca2cd25E818d6f55/1493b3a7b8d221f0.jpg',
      jdPrice: 14.5,
      name: '海底捞 番茄 火锅底料 200g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t29170/164/1535753357/247929/9eed92ac/5ce3c71cN0b627b05.jpg',
      jdPrice: 119,
      name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t6271/188/1097646384/363056/91e4ace8/594b1f21N5db82bc4.jpg',
      jdPrice: 9.5,
      name: '展艺 烘焙原料 红豆沙馅料粽子月饼馅 500g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/1699/20/528/261530/5b91e9faE261317e3/9f17576f462b469b.jpg',
      jdPrice: 13.7,
      name: '丘比 草莓果酱 340g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/21940/25/1816/279968/5c1741f9E09677b33/6bb7cca2137dc8c1.jpg',
      jdPrice: 72,
      name: '伊利 纯牛奶250ml*24盒',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/63186/11/1867/470730/5d02f605Ecfe2cdad/c42e5e02df52d883.jpg',
      jdPrice: 15.3,
      name: '双汇 火腿肠 王中王火腿肠 40g*10支装',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t1/9822/14/176/389727/5bc94b99E76cce301/04a3fd4ffca4342e.jpg',
      jdPrice: 7.5,
      name: '欣和 调味酱 豆瓣酱 葱伴侣 六月香 豆瓣酱 300g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t25231/11/2696040579/97759/3c238231/5becd70aN6db7f84a.jpg',
      jdPrice: 7.9,
      name: '厨邦 葱姜汁料酒 500ml',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t12034/35/836883436/344689/3897bccf/5a14e3adN06b2e0eb.jpg',
      jdPrice: 1.4,
      name: '展艺 烘焙原料 无铝双效泡打粉 戚风蛋糕材料膨松剂烘焙用原装50克',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t3526/269/2117689366/198878/8bfc57c3/584230dfNb54c8a6b.jpg',
      jdPrice: 14.5,
      name: '烘焙原料 展艺 麦芽糖 搅搅糖 糖果糖浆糖稀 儿时饴糖 454g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t23824/129/578792649/170763/db19dc16/5b35f9f3N64638dcd.jpg',
      jdPrice: 7.2,
      name: '特瑞肯（TRICON）黄面包糠 炸鸡面包屑  200g',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t25543/113/1972177031/333951/1ebaa717/5bc041a3Ncc7f96e2.jpg',
      jdPrice: 89.9,
      name: '秋林里道斯 红肠 哈尔滨红肠 110g每袋*10 方便速食 熟食 香肠 火腿肠',
    },
    {
      image: 'https://m.360buyimg.com/babel/jfs/t11347/222/2729840063/345826/c4e58ce6/5cd541d9N04f2a833.jpg',
      jdPrice: 27.9,
      name: '韩国进口三养（SAMYANG）方便面 火鸡面 超辣鸡肉味拌面 700g（140g*5',
    },
  ];
  return goods.map((item, index) => (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '1px solid #eee',
        padding: 10,
        marginBottom: 10,
      }}
      key={index}
    >
      <div style={{flex: 1}}>
        <img src={item.image} />
      </div>
      <div style={{flex: 2, paddingLeft: 10}}>
        <div style={{lineHeight: 1.2, color: '#333', marginBottom: 10}}>{item.name}</div>
        <div>
          京东价：<span style={{color: 'red'}}>¥ {item.jdPrice}</span>
        </div>
        <div class="serial-number">排行：{i}</div>
      </div>
    </li>
  ));
}
function generateData(len) {
  for (let i = 0; i < len; i++) {
    dataSource.push(generateLi(i));
  }
}

class Demo extends React.Component {
  state = {
    initial: 100,
    dataSource: generateData(1000),
  };
  onClick = () => {
    this.setState({
      initial: this.state.initial + 100,
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>jump to {this.state.initial + 100}</Button>
        <br />
        <br />
        <div className={'virtual-box'}>
          <VirtualList jumpIndex={this.state.initial}>{dataSource}</VirtualList>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
