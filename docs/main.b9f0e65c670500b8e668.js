(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"18oE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=d(n("q1tI")),i=d(n("TSYQ")),l=d(n("17x9")),s=d(n("lSCD")),u=d(n("vN+2")),c=d(n("Wsih")),f=d(n("y9A1"));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n("aSow");var m=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={loading:!0},r.onLoad=function(){r.setState({image:r.image.src,loading:!1})},r.onError=function(e){var t=r.props,n=t.onError,a=t.fallback;r.loadImage(a),(0,s.default)(n)&&n(e)},r.initializeImageEvents=function(){r.image&&(r.image.onload=null,r.image.onerror=null)},r.initializeImage=function(e){var t=e.src,n=e.placeholder;r.setState({image:n,loading:!0},function(){r.loadImage(t)})},r.loadImage=function(e){r.initializeImageEvents();var t=new Image;r.image=t,t.onload=r.onLoad,t.onerror=r.onError,t.src=e},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.placeholder,n=e.src;this.initializeImage({src:n,placeholder:t})}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.src,r=t.placeholder;n!==e.src&&this.initializeImage({placeholder:r,src:n})}},{key:"componentWillUnmount",value:function(){this.initializeImageEvents()}},{key:"render",value:function(){var e=this.state,t=e.image,n=e.loading,a=this.props,l=a.className,s=a.alt,u=a.rounded,c=a.wrapperClassName,f=(a.src,a.fallback,a.placeholder,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(a,["className","alt","rounded","wrapperClassName","src","fallback","placeholder"]));return o.default.createElement("figure",r({},f,{className:(0,i.default)("figure",c,{"is-loading":n})}),o.default.createElement("img",{className:(0,i.default)("figure-img progressive-img",l,{rounded:u}),src:t,alt:s}))}}]),t}();m.propTypes={onError:l.default.func,className:l.default.string,wrapperClassName:l.default.string,placeholder:l.default.string,alt:l.default.string,fallback:l.default.string,src:l.default.string.isRequired,rounded:l.default.bool},m.defaultProps={onError:u.default,className:"",wrapperClassName:"",alt:"",placeholder:c.default,fallback:f.default,rounded:!1},t.default=m},"23DD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FEATURE_TYPES=void 0;var r=i(n("q1tI")),a=i(n("TSYQ")),o=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.title,n=e.desc,o=e.type,i=o.className,l=o.text;return r.default.createElement("div",{className:"feature"},r.default.createElement("h1",{className:"font-weight-bold title"},t,r.default.createElement("span",{className:(0,a.default)("badge",i)},l)),r.default.createElement("p",{className:"description"},n))};l.propTypes={title:o.default.string.isRequired,desc:o.default.string.isRequired,type:o.default.shape({className:o.default.string.isRequired,text:o.default.string.isRequired})};t.FEATURE_TYPES={UX:{className:"badge-warning",text:"UX"},PERFORMANCE:{className:"badge-info",text:"Performance"}};t.default=l},"3+vR":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".album {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid #eae8db; }\n\n.album .figure {\n  width: 250px;\n  height: 250px;\n  margin: 0; }\n\n.album .caption {\n  max-width: calc(100% - 300px);\n  color: #8e8d89; }\n\n@-webkit-keyframes loading {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1); }\n  50% {\n    background-color: rgba(165, 165, 165, 0.3); }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1); } }\n\n@keyframes loading {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1); }\n  50% {\n    background-color: rgba(165, 165, 165, 0.3); }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1); } }\n\n.content-placeholder {\n  height: 250px;\n  margin: 25px 0;\n  -webkit-animation: loading 1s infinite ease-in-out;\n  animation: loading 1s infinite ease-in-out; }\n",""])},"6TDH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAlbums=t.FETCH_ALBUMS=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("vDqi"));var a=t.FETCH_ALBUMS="albums/FETCH_ALBUMS";t.fetchAlbums=function(){return{type:a,payload:r.default.get("https://jsonplaceholder.typicode.com/photos")}}},CJnu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("pgU/");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},E6Ev:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t,n,r,a){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getTargetElement=function(){return o.elementScrollToBeObserved.current},this.maxItemsToRender=t,this.isWindowScroll=n,this.heightOfItem=r,this.elementScrollToBeObserved=a,this.lastScrollPosition=0}return r(e,[{key:"getNewScrollPosition",value:function(e){if(this.isWindowScroll){var t=e.screenTop?e.screenTop:e.screenY;return(window.scrollY-t)/this.heightOfItem}return e.scrollTop/this.heightOfItem}},{key:"getListStartEndIndex",value:function(e){return{startPosition:this.lastScrollPosition-this.maxItemsToRender>0?this.lastScrollPosition-this.maxItemsToRender:0,endPosition:this.lastScrollPosition+this.maxItemsToRender>=e?e:this.lastScrollPosition+this.maxItemsToRender}}},{key:"getNewPositionDetails",value:function(e){var t=this.getNewScrollPosition(this.elementScrollToBeObserved.current),n=Math.abs(this.lastScrollPosition-t)>=this.maxItemsToRender/5;if(!n)return{shouldUpdatePositionInState:!1};this.lastScrollPosition=t;var r=this.getListStartEndIndex(e),a=r.startPosition,o=r.endPosition;return{startPosition:a,endPosition:o,topBufferHeight:a*this.heightOfItem,bottomBufferheight:e*this.heightOfItem-o*this.heightOfItem,shouldUpdatePositionInState:n}}}]),e}();t.default=a},EBKe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("suqn");Object.defineProperty(t,"AlbumsContainer",{enumerable:!0,get:function(){return o(r).default}});var a=n("MB+L");function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"AlbumsReducer",{enumerable:!0,get:function(){return o(a).default}})},EOfp:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"img.progressive-img {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n  object-fit: cover; }\n",""])},ERIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n("q1tI")),a=n("EBKe");n("Hglc");t.default=function(){return r.default.createElement("div",{className:"container-fluid"},r.default.createElement(a.AlbumsContainer,null))}},G41X:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EMPTY_ARRAY=[],t.EMPTY_STRING=""},Hglc:function(e,t,n){var r=n("bpRq");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(e.exports=r.locals)},"MB+L":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.FETCH_ALBUMS:return{fetching:!1,albumList:t.payload?t.payload.data:a.EMPTY_ARRAY};default:return e}};var r=n("6TDH"),a=n("G41X"),o={fetching:!0,albumList:a.EMPTY_ARRAY}},VdbR:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".album-container {\n  display: flex;\n  position: relative;\n  height: 100%; }\n\n.album-container .features-container {\n  width: 400px;\n  margin: 0px 15px 0 -15px; }\n\n.album-container .features-container .features-wrapper {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -70px;\n  color: #dcdcd6; }\n\n.album-container .features-container .features-wrapper .features {\n  overflow: scroll; }\n\n.album-container .features-container .features-wrapper .features .feature {\n  position: relative;\n  padding: 10px;\n  border: 1px solid #eae8db;\n  border-width: 1px 1px 0 0; }\n\n.album-container .features-container .features-wrapper .features .feature .title .badge {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-radius: 5px 0 0 0;\n  font-size: small; }\n\n.album-container .features-container .features-wrapper .features .feature .description {\n  color: #8e8d89; }\n\n.album-container .features-container .features-wrapper .features .feature:nth-of-type(1) {\n  border-top-right-radius: 5px; }\n\n.album-container .features-container .features-wrapper .features .feature:last-child {\n  border-bottom-right-radius: 5px;\n  border-width: 1px 1px 1px 0; }\n\n.album-container .features-container .features-wrapper .features .feature:last-child .title .badge {\n  border-radius: 5px 0 4px 0; }\n\n.album-container .album-list {\n  width: calc(100% - 400px); }\n",""])},Wsih:function(e,t,n){e.exports=n.p+"c0f7ecd52e284c0ad393f41f3c46ea1f.png"},aSow:function(e,t,n){var r=n("EOfp");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(e.exports=r.locals)},bpRq:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"body {\n  font-family: 'Oswald', sans-serif;\n  background: #33334f; }\n\n.text-first-letter-uppercase::first-letter {\n  text-transform: uppercase; }\n",""])},cokx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("ANjH"),a=n("EBKe"),o=(0,r.combineReducers)({AlbumsReducer:a.AlbumsReducer});t.default=o},cuZV:function(e,t,n){var r=n("3+vR");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(e.exports=r.locals)},dQyt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("q1tI")),a=i(n("17x9")),o=i(n("s8ns"));function i(e){return e&&e.__esModule?e:{default:e}}n("cuZV");var l=function(e){var t=e.title,n=e.style,a=e.url;return r.default.createElement("div",{className:"album",style:n},r.default.createElement(o.default,{rounded:!0,wrapperClassName:"shadow-lg",className:"img-fluid",src:a}),r.default.createElement("p",{className:"text-first-letter-uppercase font-italic ml-5 caption"},t))};l.propTypes={style:a.default.object,url:a.default.string.isRequired,title:a.default.string.isRequired},t.default=l},dgrS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("17x9")),l=c(n("CJnu")),s=n("G41X"),u=c(n("dQyt"));function c(e){return e&&e.__esModule?e:{default:e}}n("cuZV");var f=function(e){var t=e.title,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["title"]);return a({},n,{title:t+" "+t,url:"https://picsum.photos/1200/1200/?image="+(Math.floor(200*Math.random())+300)})},d=function(){return o.default.createElement("div",{className:"content-placeholder"},o.default.createElement("div",{className:"content-placeholder-image"}),o.default.createElement("div",{className:"content-placeholder-description"}))},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.fetching,n=e.albumList;if(t||0===n.length&&!navigator.onLine)return o.default.createElement(o.default.Fragment,null,o.default.createElement(d,null),o.default.createElement(d,null),o.default.createElement(d,null),o.default.createElement(d,null));var r=n.map(f);return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,{isWindowScroll:!0,heightOfItem:300,listItemRenderer:u.default,listItems:r,maxBufferItemsToRender:5}))}}]),t}();p.propTypes={fetching:i.default.bool.isRequired,albumList:i.default.arrayOf(i.default.shape({albumId:i.default.number.isRequired,id:i.default.number.isRequired,title:i.default.string.isRequired,url:i.default.string.isRequired,thumbnailUrl:i.default.string.isRequired}))},p.defaultProps={albumList:s.EMPTY_ARRAY},t.default=p},iZso:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("dgrS");Object.defineProperty(t,"AlbumList",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},"pgU/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=f(o),l=f(n("17x9")),s=f(n("TSYQ")),u=f(n("E6Ev")),c=n("G41X");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){var t=e.item,n=e.style;return i.default.createElement("div",{style:n,className:"react-scrollable-list-item"},t.content)};p.propTypes={item:l.default.object,style:l.default.object};var m=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.listRef=i.default.createRef(),r.state={startPosition:0,endPosition:0},r.getWindowRef=function(){return{current:window}},r.updateScrollPosition=function(){requestAnimationFrame(function(){var e=r.props.listItems,t=r.positionHelper.getNewPositionDetails(e.length),n=t.startPosition,a=t.endPosition,o=t.topBufferHeight,i=t.bottomBufferheight;t.shouldUpdatePositionInState&&r.setState({startPosition:n,endPosition:a,topBufferHeight:o,bottomBufferheight:i})})},d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isWindowScroll,n=e.maxBufferItemsToRender,r=e.heightOfItem,a=t?this.getWindowRef():this.listRef;this.positionHelper=new u.default(n,t,r,a),this.positionHelper.getTargetElement().addEventListener("scroll",this.updateScrollPosition),this.setState({startPosition:0,endPosition:n})}},{key:"componentWillUnmount",value:function(){this.positionHelper.getTargetElement().removeEventListener("scroll",this.updateScrollPosition)}},{key:"render",value:function(){var e=this.props,t=e.heightOfItem,n=e.listItems,a=e.wrapperClassname,o=e.listItemRenderer,l=this.state,u=l.startPosition,c=l.endPosition,f=l.topBufferHeight,d=l.bottomBufferheight,m=n.slice(u,c),h="function"==typeof o?o:p;return i.default.createElement("div",{className:(0,s.default)("react-scrollable-list",a),ref:this.listRef},i.default.createElement("div",{key:"list-spacer-top",style:{height:f+"px"}}),m.map(function(e,n){return i.default.createElement(h,r({style:{height:t+"px"},key:e.id},e,{index:n}))}),i.default.createElement("div",{key:"list-spacer-bottom",style:{height:d+"px"}}))}}]),t}();m.propTypes={listItems:l.default.array.isRequired,heightOfItem:l.default.number,maxBufferItemsToRender:l.default.number,wrapperClassname:l.default.string,isWindowScroll:l.default.bool,listItemRenderer:l.default.oneOfType([l.default.node,l.default.func]).isRequired},m.defaultProps={listItems:[],heightOfItem:30,maxBufferItemsToRender:50,wrapperClassname:c.EMPTY_STRING,isWindowScroll:!1},t.default=m},rwGo:function(e,t,n){var r=n("VdbR");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,a);r.locals&&(e.exports=r.locals)},s8ns:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("18oE");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},suqn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n("q1tI")),o=f(n("17x9")),i=n("/MKj"),l=n("iZso"),s=f(n("23DD")),u=n("zdF5"),c=n("6TDH");function f(e){return e&&e.__esModule?e:{default:e}}n("rwGo");var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),r(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchAlbums)()}},{key:"render",value:function(){var e=this.props,t=e.fetching,n=e.albumList;return a.default.createElement("div",{className:"album-container"},a.default.createElement("div",{className:"features-container"},a.default.createElement("div",{className:"features-wrapper"},a.default.createElement("div",{className:"features"},a.default.createElement("h1",{className:"text-center display-4"},"FEATURES"),u.FEATURE_LIST.map(function(e){var t=e.id,n=e.title,r=e.desc,o=e.type;return a.default.createElement(s.default,{key:t,type:o,title:n,desc:r})})))),a.default.createElement("div",{className:"album-list"},a.default.createElement(l.AlbumList,{fetching:t,albumList:n})))}}]),t}();d.propTypes={fetching:o.default.bool.isRequired,albumList:o.default.arrayOf(o.default.shape({albumId:o.default.number.isRequired,id:o.default.number.isRequired,title:o.default.string.isRequired,url:o.default.string.isRequired,thumbnailUrl:o.default.string.isRequired})),fetchAlbums:o.default.func.isRequired};t.default=(0,i.connect)(function(e){return e.AlbumsReducer},{fetchAlbums:c.fetchAlbums})(d)},tjUo:function(e,t,n){"use strict";(function(e){var t=u(n("q1tI")),r=u(n("i8i4")),a=n("/MKj"),o=n("ANjH"),i=u(n("2QeP")),l=u(n("ERIh")),s=u(n("cokx"));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.createStore)(s.default,(0,o.compose)((0,o.applyMiddleware)(i.default),window.devToolsExtension?window.devToolsExtension():function(e){return e}));r.default.render(t.default.createElement(a.Provider,{store:c},t.default.createElement(l.default,null)),document.getElementById("app")),e&&e.hot&&e.hot.accept()}).call(this,n("YuTi")(e))},y9A1:function(e,t,n){e.exports=n.p+"1933938d4694354c7565f7943a4c8d6d.png"},zdF5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FEATURE_LIST=void 0;var r=n("23DD");t.FEATURE_LIST=[{id:"1",type:r.FEATURE_TYPES.PERFORMANCE,title:"Virtualized List",desc:"By rendering only a portion of the list in the DOM, we can maintain a very light-weighted DOM."},{id:"2",type:r.FEATURE_TYPES.UX,title:"Progressive Images",desc:"No one likes to view Blank/Broken images. We can show a placeholder image till the image is loaded and replace it once we get the original image to be shown. And when the network call fails, we show fallback image."},{id:"3",type:r.FEATURE_TYPES.PERFORMANCE,title:"Services workers",desc:"Leveraging service workers and IndexDB, we can cache assets and js files along with API calls."},{id:"4",type:r.FEATURE_TYPES.PERFORMANCE,title:"Chunked and Hashed",desc:"By splitting up the main.js and node_modules, we can skip downloading the node_modules again, when ever the main.js changes. This gets applied even to the node_modules, i.e. if any one of the node_modules gets updated, the entire vendor chunk has to be downloaded again. This can be avoided if we split even the node_modules. This will reduce the network usage of the user by time significantly."}]}},[["tjUo",23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]]]);