(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[5],{611:function(e,t,n){"use strict";n.r(t);var r=n(623),o=n(0),a=n.n(o),u=n(618);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(u.MDXTag,{name:"wrapper",components:t},a.a.createElement(u.MDXTag,{name:"p",components:t},a.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Theme")," object contains the various methods to return required value."),a.a.createElement(u.MDXTag,{name:"pre",components:t},a.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:"live=true",live:"true"}},"import { Theme } from \"@fasolutions/harmony\";\n<div style={{color: Theme.colorText('primary')}}>\n")),a.a.createElement(u.MDXTag,{name:"h1",components:t},"Hello, world!"),a.a.createElement(u.MDXTag,{name:"pre",components:t},a.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},'import React from "react";\nimport Example from "./place";\n\nexport default () => <Example />;\n')),a.a.createElement(u.MDXTag,{name:"pre",components:t},a.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:"render=true",render:"true"}},'<div\n  style={{\n    backgroundColor: "rebeccapurple",\n    padding: "20px",\n    marginTop: "20px",\n  }}\n/>\n')),a.a.createElement(u.MDXTag,{name:"pre",components:t},a.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:"live=true",live:"true"}},'<div style={{ backgroundColor: "tomato", padding: "20px" }} />\n')))}},617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(621)),u=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),p=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(l,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var s=function(e){var t=e.components,n=e.children;return o.default.createElement(p,{value:t},n)};s.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=s},618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(619);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(617);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=p(a),i=p(n(620)),c=n(617);function p(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,p=e.components,l=void 0===p?{}:p,s=e.Layout,m=e.layoutProps,d=l[n+"."+t]||l[t]||f[t]||t;return s?((0,i.default)(this,s),u.default.createElement(s,r({components:l},m),u.default.createElement(d,a,c))):u.default.createElement(d,a,c)}}]),t}(a.Component);t.default=(0,c.withMDXComponents)(m)},620:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,l=p&&p(Object);e.exports=function e(t,n,s){if("string"!==typeof n){if(l){var f=p(n);f&&f!==l&&e(t,f,s)}var m=u(n);i&&(m=m.concat(i(n)));for(var d=0;d<m.length;++d){var v=m[d];if(!r[v]&&!o[v]&&(!s||!s[v])){var y=c(n,v);try{a(t,v,y)}catch(h){}}}return t}return t}},621:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(622));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},622:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(u(r),u(n(7))),a=u(n(67));u(n(121));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,u,s="__create-react-context-"+(0,a.default)()+"__",f=function(e){function n(){var t,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return t=r=c(this,e.call.apply(e,[this].concat(a))),r.emitter=l(r.props.value),c(r,t)}return p(n,e),n.prototype.getChildContext=function(){var e;return(e={})[s]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(u=r)?0!==a||1/a===1/u:a!==a&&u!==u)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,u},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[s]=o.default.object.isRequired,n);var m=function(t){function n(){var e,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=r=c(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return p(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[s]&&this.context[s].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[s]&&this.context[s].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[s]?this.context[s].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return m.contextTypes=((u={})[s]=o.default.object,u),{Provider:f,Consumer:m}},e.exports=t.default},623:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.ef6b0619.chunk.js.map