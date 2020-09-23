(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./demo-link/app.js":
/*!**************************************!*\
  !*** ./demo-link/app.js + 3 modules ***!
  \**************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./demo-link/comps.js */
/*! ModuleConcatenation bailout: Cannot concat with ./demo/image/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./demo/utils.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./site/lib/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/history/esm/history.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/invariant/browser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-helmet/lib/Helmet.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=a.n(n),r=a("./node_modules/@babel/runtime/helpers/createClass.js"),i=a.n(r),c=a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),s=a.n(c),l=a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=a.n(l),d=a("./node_modules/@babel/runtime/helpers/inherits.js"),p=a.n(d),u=a("./node_modules/@babel/runtime/helpers/defineProperty.js"),g=a.n(u),y=a("./node_modules/react/index.js"),f=a.n(y),b=a("./node_modules/react-helmet/lib/Helmet.js"),h=(a("./demo/index.scss"),a("./demo/utils.js")),v=a("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),k=a.n(v),w=a("./node_modules/prop-types/index.js"),E=a.n(w),j=a("./node_modules/invariant/browser.js"),_=a.n(j),x=a("./node_modules/history/esm/history.js"),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var N=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},C=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return a=n=O(this,e.call.apply(e,[this].concat(r))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!N(e)){e.preventDefault();var t=n.context.router.history,a=n.props,o=a.replace,r=a.to;o?t.replace(r):t.push(r)}},O(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);_()(this.context.router,"You should not use <Link> outside a <Router>"),_()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,r="string"==typeof t?Object(x.b)(t,null,null,o.location):t,i=o.createHref(r);return f.a.createElement("a",F({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(f.a.Component);C.propTypes={onClick:E.a.func,target:E.a.string,replace:E.a.bool,to:E.a.oneOfType([E.a.string,E.a.object]).isRequired,innerRef:E.a.oneOfType([E.a.string,E.a.func])},C.defaultProps={replace:!1},C.contextTypes={router:E.a.shape({history:E.a.shape({push:E.a.func.isRequired,replace:E.a.func.isRequired,createHref:E.a.func.isRequired}).isRequired}).isRequired};var S=C,P=a("./node_modules/classnames/index.js"),R=a.n(P),T=a("./demo/image/index.js"),A=a.n(T),I=function(e){function t(){return o()(this,t),s()(this,m()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.type;return f.a.createElement("div",null,f.a.createElement("img",{src:A.a.right,alt:"",className:"open_icon"==e?"active":0}))}}]),t}(f.a.Component),B=a("./site/lib/utils.js"),L=function(e){function t(){var e,a;o()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=s()(this,(e=m()(t)).call.apply(e,[this].concat(r))),g()(k()(a),"state",{open:a.props.open}),g()(k()(a),"onClick",function(){var e=a.props.category,t=JSON.parse(sessionStorage.getItem("openStatus"))||{};Object.assign(t,g()({},e.name,!a.state.open)),sessionStorage.setItem("openStatus",JSON.stringify(t)),a.setState({open:!a.state.open})}),a}return p()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.category,a=e.components;return f.a.createElement("div",{className:"page-module-list__item--wrapper"},f.a.createElement("div",{className:"page-module-list__item",onClick:this.onClick},f.a.createElement("div",{className:"page-module-list__icon"},f.a.createElement("div",null,f.a.createElement("img",{src:t.icon,alt:""}))),f.a.createElement("div",{className:"page-module-list__info"},f.a.createElement("div",{className:"page-module-list__info__title"},t.label),f.a.createElement("div",{className:"page-module-list__info__desc"},t.desc)),f.a.createElement("div",{className:"page-module-list__arrow"},f.a.createElement(I,{type:this.state.open?"open_icon":"close_icon"}))),f.a.createElement("ul",{className:R()({open:this.state.open})},Array.isArray(a)?a.filter(function(e){return e.category===t.name}).map(function(e,t){return f.a.createElement("li",{key:t},f.a.createElement(S,{to:"/component/".concat(e.name),key:t},f.a.createElement("div",null,f.a.createElement("i",{className:"indexicon"}),f.a.createElement("span",{style:{color:"#6a6a77"}},Object(B.a)(e.name)," ",e.title),f.a.createElement("s",null))))}):Object.keys(a).filter(function(e){return a[e].category===t.name}).map(function(e,t){var n=a[e];return f.a.createElement("li",{key:t},f.a.createElement(S,{to:"/component/".concat(e),key:t},f.a.createElement("div",null,f.a.createElement("i",{className:"indexicon"}),f.a.createElement("span",{style:{color:"#6a6a77"}},Object(B.a)(e)," ",n.title),f.a.createElement("s",null))))})))}}]),t}(f.a.Component),V=a("./demo-link/comps.js");a.d(t,"default",function(){return q});var q=function(e){function t(){return o()(this,t),s()(this,m()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;-1===window.location.href.indexOf("component")&&sessionStorage.setItem("scrollTop",e)},-1===window.location.href.indexOf("component")&&window.scrollTo(0,Number(sessionStorage.getItem("scrollTop")||0))}},{key:"render",value:function(){var e=JSON.parse(sessionStorage.getItem("openStatus"))||{};return f.a.createElement("section",{className:"page-index"},f.a.createElement(b.Helmet,{title:"示例"}),f.a.createElement("img",{className:"index-github",src:A.a.github,onClick:function(){window.location.href="https://github.com/jdf2e/yep-react"}}),f.a.createElement("div",{className:"logo"},f.a.createElement("img",{src:"https://storage.jd.com/imgtools/a88936e68d-2f02ea30-b2ac-11e9-b365-ffed7307867d.png",alt:""})),f.a.createElement("div",{className:"page-title"},"Yep-React"),f.a.createElement("div",{className:"page-module-list"},h.CATEGORIES.map(function(t){return f.a.createElement(L,{key:t.name,category:t,components:V.a,open:e[t.name]})})),f.a.createElement("div",{className:"add-footer"},"邮箱：yep@jd.com | Copyright © 京东前端开发部"))}}]),t}(y.PureComponent);g()(q,"propTypes",{}),g()(q,"defaultProps",{})},"./demo-link/comps.js":
/*!****************************!*\
  !*** ./demo-link/comps.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,a){"use strict";t.a=[{name:"action-sheet",category:"Feedback",title:"动作面板",desc:"从底部弹出的模态框，提供和当前场景相关的2个以上的操作动作，也支持提供标题和取消按钮，内置固定的展示样式，不支持特别灵活的定制。"},{name:"area-picker",category:"Feedback",title:"地址选择组件",desc:"与主站App地址选择组件一致的react实现"},{name:"auto-complete",category:"Feedback",title:"自动完成",desc:"根据用户输入筛选命中选项并高亮展示"},{name:"avatar",category:"View",title:"头像",desc:"用户头像常用于社区、问答等场景，支持图片、图标、字符等形式"},{name:"badge",category:"View",title:"徽标数",desc:"图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量"},{name:"button",category:"Basic",title:"按钮",desc:"通用按钮组件，点击触发一个操作"},{name:"carousel",category:"View",title:"走马灯",desc:"轮播图，常用于展示一组图片"},{name:"cell",category:"Layout",title:"列表项",desc:"可自定义标题，列表项内容，列表项内容支持配置单行和多行，可根据场景配置右侧图标，均可添加回调函数。"},{name:"checkbox",category:"Form",title:"复选框",desc:"多项选择"},{name:"collapse",category:"Feedback",title:"折叠面板",desc:"折叠面板，可进行内容折叠展开操作，可以多面板配合使用。"},{name:"count-down",category:"View",title:"倒计时",desc:"倒计时组件"},{name:"date-picker",category:"Form",title:"日期选择",desc:"底部弹起的模态框用于选择日期或时间"},{name:"dialog",category:"Feedback",title:"对话框",desc:"用于显示系统的重要信息，并请求用户进行操作反馈"},{name:"gesture",category:"Basic",title:"手势操作",desc:"为移动端 React 组件提供手势操作。"},{name:"icon",category:"Basic",title:"图标",desc:"svg图标库"},{name:"image-picker",category:"Form",title:"图片上传选择器",desc:"支持图片选择，上传和删除，支持自定义图片大小以及宽高，新增和删除图片时可自定义处理函数。"},{name:"indexed-list",category:"Layout",title:"索引列表",desc:"此组件常用于 “通讯录”/“城市列表” 等场景中，支持索引导航功能。"},{name:"infinite-loader",category:"View",title:"滚动无限加载",desc:"滚动无限加载"},{name:"input-item",category:"Form",title:"输入框",desc:"输入框，可以带清空按钮，可被禁用。"},{name:"jd-button",category:"Basic",title:"京东APP风格按钮",desc:"京东APP风格按钮"},{name:"lazy-load",category:"Basic",title:"懒加载组件",desc:"懒加载组件,常用于延迟加载图片等"},{name:"list",category:"Layout",title:"列表",desc:"单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表"},{name:"loading",category:"View",title:"加载动画",desc:"基于 Lottie 实现的京东 7.0 统一 loading 动画"},{name:"mask",category:"Basic",title:"遮罩层",desc:"全局统一遮罩层，配合模态框组件，遮罩可设置非透明、透明两种。并在遮罩层统一解决 iOS 上滑动穿透的问题"},{name:"message",category:"Feedback",title:"通知",desc:"弹出通知，包括绝对定位和相对定位，绝对定位直接在视窗顶部底部弹出，相对定位，在组件响应的位置动画弹出"},{name:"nav-bar",category:"Navigation",title:"导航栏",desc:"位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。"},{name:"number-keyboard",category:"Form",title:"数字键盘",desc:"数字键盘件通常与密码输入框组件配合使用"},{name:"password-input",category:"Form",title:"密码输入框",desc:"密码输入框通常与数字键盘组件配合使用"},{name:"picker-view",category:"Form",title:"选择器",desc:"功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口"},{name:"picker",category:"Form",title:"选择器",desc:"在一组预设的数据中进行选择，例如：性别、地址"},{name:"popup",category:"Basic",title:"弹出框",desc:"作为 Dialog Picker 和 ActionSheet 组件的模态框容器组件实现"},{name:"price",category:"Basic",title:"价格",desc:"展示价格，包括小数点位置、大小、删除状态等自定义方式。"},{name:"progress-bar",category:"Feedback",title:"进度条",desc:"表示某个任务的当前进度"},{name:"pull-to-refresh",category:"Feedback",title:"下拉刷新",desc:"通过下拉触发，立刻重新加载内容。"},{name:"radio",category:"Form",title:"单选框",desc:"单项选择，例如:性别"},{name:"rate",category:"Form",title:"评分",desc:"评分组件，可用于选择，也可只用于展示"},{name:"scratch",category:"Feedback",title:"刮奖",desc:"刮开涂层，展示结果。"},{name:"search-bar",category:"Form",title:"搜索",desc:"一般位于顶部导航下方，输入内容进行搜索，可一键清空搜索内容。"},{name:"skeleton",category:"View",title:"占位符",desc:"使用 SVG 创建一个模拟将被加载的内容结构的加载器集合，类似于 Facebook 卡片加载器"},{name:"stepper",category:"Form",title:"步进器",desc:"常用场景为购物车或商品详情页面增删商品数量"},{name:"steps",category:"Navigation",title:"步骤条",desc:"拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。"},{name:"sticky",category:"Layout",title:"吸顶",desc:"使某块区域固定顶部"},{name:"swipe-action",category:"Feedback",title:"滑动操作",desc:"结合手势左右滑动，从屏幕一侧唤出操作"},{name:"switch",category:"Form",title:"滑动开关",desc:"在两个互斥对象进行选择，例如:开或关、"},{name:"tab-bar",category:"Navigation",title:"标签栏",desc:"位于 APP 底部，方便用户在不同功能模块之间进行快速切换。"},{name:"tabs",category:"Navigation",title:"标签页",desc:"常用于平级区域大块内容的的收纳和展现，支持手势在垂直，水平方向滑动tab面板切换tab选项卡。"},{name:"to-top",category:"Feedback",title:"回到顶部",desc:"页面滚动一定位置时点击回到顶部"},{name:"toast",category:"Feedback",title:"轻提示",desc:"一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。"},{name:"tooltip",category:"Feedback",title:"提示框",desc:"可以依附在触发器四周出现的提示框"},{name:"virtual-list",category:"Layout",title:"虚拟滚动列表",desc:"只渲染可视区域内的内容，用于解决大数据情况下的渲染速度问题"},{name:"white-space",category:"Layout",title:"留白",desc:"在上下或左右快速添加空白区域"}]},"./demo/image/base.png":
/*!*****************************!*\
  !*** ./demo/image/base.png ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/base.8854b8ca.png"},"./demo/image/form.png":
/*!*****************************!*\
  !*** ./demo/image/form.png ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/form.40b81615.png"},"./demo/image/github.png":
/*!*******************************!*\
  !*** ./demo/image/github.png ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/github.50f9b3ed.png"},"./demo/image/index.js":
/*!*****************************!*\
  !*** ./demo/image/index.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports={base:a(/*! ./base.png */"./demo/image/base.png"),layout:a(/*! ./layout.png */"./demo/image/layout.png"),nav:a(/*! ./nav.png */"./demo/image/nav.png"),form:a(/*! ./form.png */"./demo/image/form.png"),operation:a(/*! ./operation.png */"./demo/image/operation.png"),view:a(/*! ./view.png */"./demo/image/view.png"),right:a(/*! ./right.png */"./demo/image/right.png"),github:a(/*! ./github.png */"./demo/image/github.png")}},"./demo/image/layout.png":
/*!*******************************!*\
  !*** ./demo/image/layout.png ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/layout.82e1956d.png"},"./demo/image/nav.png":
/*!****************************!*\
  !*** ./demo/image/nav.png ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/nav.b7135280.png"},"./demo/image/operation.png":
/*!**********************************!*\
  !*** ./demo/image/operation.png ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/operation.0dc97d77.png"},"./demo/image/right.png":
/*!******************************!*\
  !*** ./demo/image/right.png ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/right.dbf5d112.png"},"./demo/image/view.png":
/*!*****************************!*\
  !*** ./demo/image/view.png ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports=a.p+"demo/view.ab244318.png"},"./demo/index.scss":
/*!*************************!*\
  !*** ./demo/index.scss ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){},"./demo/utils.js":
/*!***********************!*\
  !*** ./demo/utils.js ***!
  \***********************/
/*! no static exports found */
/*! exports used: CATEGORIES */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){var n=a(/*! ./image */"./demo/image/index.js");t.CATEGORIES=[{name:"Basic",label:"基础",desc:"按钮、手势操作、遮罩层、弹窗等",icon:n.base},{name:"Layout",label:"布局",desc:"包括索引、吸顶、滚动列表等",icon:n.layout},{name:"View",label:"视图",desc:"包括微标、轮播图、倒计时、滚动加载等",icon:n.view},{name:"Navigation",label:"导航",desc:"包括导航栏、标签栏等",icon:n.nav},{name:"Feedback",label:"操作反馈",desc:"动作面板、对话框、进度条、轻提示等",icon:n.operation},{name:"Form",label:"表单",desc:"复选框、评分、滑动开关、日期选择、图片上传等",icon:n.form}],t.clearCache=function(){sessionStorage.setItem("openStatus",JSON.stringify({})),sessionStorage.setItem("scrollTop","0")}},"./site/lib/utils.js":
/*!***************************!*\
  !*** ./site/lib/utils.js ***!
  \***************************/
/*! exports provided: toCamelCase */
/*! exports used: toCamelCase */function(e,t,a){"use strict";function n(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}a.d(t,"a",function(){return n})}}]);