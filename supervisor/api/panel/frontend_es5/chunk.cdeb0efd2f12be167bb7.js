(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[452],{70452:function(e,t,n){"use strict";var r=n(55317),i=n(50424),o=n(55358),s=n(63864),a=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,l="[1-9]\\d?",c="\\d\\d",u="[^\\s]+",d=/\[([^]*?)\]/gm;function f(e,t){for(var n=[],r=0,i=e.length;r<i;r++)n.push(e[r].substr(0,t));return n}var h=function(e){return function(t,n){var r=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return r>-1?r:null}};function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++){var o=i[r];for(var s in o)e[s]=o[s]}return e}var m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],y=["January","February","March","April","May","June","July","August","September","October","November","December"],v=f(y,3),g={dayNamesShort:f(m,3),dayNames:m,monthNamesShort:v,monthNames:y,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},b=p({},g),k=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},w={D:function(e){return String(e.getDate())},DD:function(e){return k(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return k(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return k(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return k(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return k(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return k(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return k(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return k(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return k(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return k(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return k(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+k(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+k(Math.floor(Math.abs(t)/60),2)+":"+k(Math.abs(t)%60,2)}},E=function(e){return+e-1},S=[null,l],D=[null,u],P=["isPm",u,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],T=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],x=(h("monthNamesShort"),h("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"}),C=function(e,t,n){if(void 0===t&&(t=x.default),void 0===n&&(n={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var r=[];t=(t=x[t]||t).replace(d,(function(e,t){return r.push(t),"@@@"}));var i=p(p({},b),n);return(t=t.replace(a,(function(t){return w[t](e,i)}))).replace(/@@@/g,(function(){return r.shift()}))};var M=n(14516);var _,O,A=function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}return!1}(),z=(function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()),j=(0,M.Z)((function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})})),Y=A?function(e,t){return j(t).format(e)}:function(e){return C(e,"longDate")};(0,M.Z)((function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})}));!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(_||(_={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(O||(O={}));var H,F,R,N,I,Z=function(e){if(e.time_format===O.language||e.time_format===O.system){var t=e.time_format===O.language?e.language:void 0,n=(new Date).toLocaleString(t);return n.includes("AM")||n.includes("PM")}return e.time_format===O.am_pm},U=(0,M.Z)((function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Z(e)})})),L=z?function(e,t){return U(t).format(e)}:function(e,t){return C(e,(Z(t)," A"))};(0,M.Z)((function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:Z(e)})})),n(87507),n(41857),n(12064),n(52039);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=K(e);if(t){var i=K(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return q(this,n)}}function q(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(){Q=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!te(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=ie(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:re(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=re(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function X(e){var t,n=ie(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function ee(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function te(e){return e.decorators&&e.decorators.length}function ne(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function re(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function ie(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===B(t)?t:String(t)}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var se,ae,le,ce,ue,de,fe,he,pe,me,ye,ve,ge,be,ke,we,Ee,Se;!function(e,t,n,r){var i=Q();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),n),a=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(ne(o.descriptor)||ne(i.descriptor)){if(te(o)||te(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(te(o)){if(te(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}ee(o,i)}else t.push(o)}return t}(s.d.map(X)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("supervisor-formfield-label")],(function(e,t){return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(r,t);var n=W(r);function r(){var t;$(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=n.call.apply(n,[this].concat(o)),e(G(t)),t}return r}(t),d:[{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"imageUrl",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"iconPath",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"version",value:void 0},{kind:"method",key:"render",value:function(){return(0,i.dy)(H||(H=V(["\n      ",'\n      <span class="label">',"</span>\n      ","\n    "])),this.imageUrl?(0,i.dy)(F||(F=V(['<img loading="lazy" .src=',' class="icon" />'])),this.imageUrl):this.iconPath?(0,i.dy)(R||(R=V(["<ha-svg-icon .path=",' class="icon"></ha-svg-icon>'])),this.iconPath):"",this.label,this.version?(0,i.dy)(N||(N=V(['<span class="version">(',")</span>"])),this.version):"")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,i.iv)(I||(I=V(["\n      :host {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n      }\n      .label {\n        margin-right: 4px;\n      }\n      .version {\n        color: var(--secondary-text-color);\n      }\n      .icon {\n        max-height: 22px;\n        max-width: 22px;\n        margin-right: 8px;\n      }\n    "])))}}]}}),i.oi);function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xe(e,t){return(xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Ie(e);if(t){var i=Ie(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Me(this,n)}}function Me(e,t){return!t||"object"!==De(t)&&"function"!=typeof t?_e(e):t}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(){Oe=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!je(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Re(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=Fe(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:He(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=He(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function Ae(e){var t,n=Fe(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function ze(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function je(e){return e.decorators&&e.decorators.length}function Ye(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function He(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function Fe(e){var t=function(e,t){if("object"!==De(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==De(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===De(t)?t:String(t)}function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ne(e,t,n){return(Ne="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ie(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,n,r){var i=Oe();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),n),a=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(Ye(o.descriptor)||Ye(i.descriptor)){if(je(o)||je(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(je(o)){if(je(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}ze(o,i)}else t.push(o)}return t}(s.d.map(Ae)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("supervisor-snapshot-content")],(function(e,t){var n=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}(r,t);var n=Ce(r);function r(){var t;Te(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=n.call.apply(n,[this].concat(o)),e(_e(t)),t}return r}(t);return{F:n,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"snapshot",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"snapshotType",value:function(){return"full"}},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"folders",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"addons",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"homeAssistant",value:function(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"snapshotHasPassword",value:function(){return!1}},{kind:"field",decorators:[(0,o.Cb)()],key:"snapshotName",value:function(){return""}},{kind:"field",decorators:[(0,o.Cb)()],key:"snapshotPassword",value:function(){return""}},{kind:"method",key:"willUpdate",value:function(e){var t,r,i,o,s,a;(Ne(Ie(n.prototype),"willUpdate",this).call(this,e),this.hasUpdated)||(this.folders=(s=this.snapshot?this.snapshot.folders:["homeassistant","ssl","share","media","addons/local"],a=[],s.includes("homeassistant")&&a.push({slug:"homeassistant",name:"Home Assistant configuration",checked:!1}),s.includes("ssl")&&a.push({slug:"ssl",name:"SSL",checked:!1}),s.includes("share")&&a.push({slug:"share",name:"Share",checked:!1}),s.includes("addons/local")&&a.push({slug:"addons/local",name:"Local add-ons",checked:!1}),a.sort((function(e,t){return e.name>t.name?1:-1}))),this.addons=(this.snapshot?this.snapshot.addons:null===(t=this.supervisor)||void 0===t?void 0:t.supervisor.addons).map((function(e){return{slug:e.slug,name:e.name,version:e.version,checked:!1}})).sort((function(e,t){return e.name>t.name?1:-1})),this.snapshotType=(null===(r=this.snapshot)||void 0===r?void 0:r.type)||"full",this.snapshotName=(null===(i=this.snapshot)||void 0===i?void 0:i.name)||"",this.snapshotHasPassword=(null===(o=this.snapshot)||void 0===o?void 0:o.protected)||!1)}},{kind:"method",key:"render",value:function(){var e=this;if(!this.supervisor)return(0,i.dy)(se||(se=Pe([""])));var t="partial"===this.snapshotType?this._getSection("folders"):void 0,n="partial"===this.snapshotType?this._getSection("addons"):void 0;return(0,i.dy)(ae||(ae=Pe(["\n      ","\n      ","\n      ","\n      ","\n      ","\n      ","\n    "])),this.snapshot?(0,i.dy)(le||(le=Pe(['<div class="details">\n            ',"\n            (",")<br />\n            ","\n          </div>"])),"full"===this.snapshot.type?this.supervisor.localize("snapshot.full_snapshot"):this.supervisor.localize("snapshot.partial_snapshot"),Math.ceil(10*this.snapshot.size)/10+" MB",L(new Date(this.snapshot.date),this.hass.locale)):(0,i.dy)(ce||(ce=Pe(['<paper-input\n            name="snapshotName"\n            .label=',"\n            .value=","\n            @value-changed=","\n          >\n          </paper-input>"])),this.supervisor.localize("snapshot.name"),this.snapshotName,this._handleTextValueChanged),this.snapshot&&"full"!==this.snapshot.type?"":(0,i.dy)(ue||(ue=Pe(['<div class="sub-header">\n              ','\n            </div>\n            <div class="snapshot-types">\n              <ha-formfield\n                .label=',"\n              >\n                <ha-radio\n                  @change=",'\n                  value="full"\n                  name="snapshotType"\n                  .checked=',"\n                >\n                </ha-radio>\n              </ha-formfield>\n              <ha-formfield\n                .label=","\n              >\n                <ha-radio\n                  @change=",'\n                  value="partial"\n                  name="snapshotType"\n                  .checked=',"\n                >\n                </ha-radio>\n              </ha-formfield>\n            </div>"])),this.snapshot?this.supervisor.localize("snapshot.select_type"):this.supervisor.localize("snapshot.type"),this.supervisor.localize("snapshot.full_snapshot"),this._handleRadioValueChanged,"full"===this.snapshotType,this.supervisor.localize("snapshot.partial_snapshot"),this._handleRadioValueChanged,"partial"===this.snapshotType),this.snapshot&&"partial"===this.snapshotType?(0,i.dy)(de||(de=Pe(["\n            ","\n          "])),this.snapshot.homeassistant?(0,i.dy)(fe||(fe=Pe(["\n                  <ha-formfield\n                    .label=","\n                  >\n                    <ha-checkbox\n                      .checked=","\n                      @click=","\n                    >\n                    </ha-checkbox>\n                  </ha-formfield>\n                "])),(0,i.dy)(he||(he=Pe(['<supervisor-formfield-label\n                      label="Home Assistant"\n                      .iconPath=',"\n                      .version=","\n                    >\n                    </supervisor-formfield-label>"])),r.T__,this.snapshot.homeassistant),this.homeAssistant,(function(){e.homeAssistant=!e.homeAssistant})):""):"","partial"===this.snapshotType?(0,i.dy)(pe||(pe=Pe(["\n            ","\n            ","\n          "])),null!=t&&t.templates.length?(0,i.dy)(me||(me=Pe(["\n                  <ha-formfield\n                    .label=","\n                  >\n                    <ha-checkbox\n                      @change=","\n                      .checked=","\n                      .indeterminate=","\n                      .section=",'\n                    >\n                    </ha-checkbox>\n                  </ha-formfield>\n                  <div class="section-content">',"</div>\n                "])),(0,i.dy)(ye||(ye=Pe(["<supervisor-formfield-label\n                      .label=","\n                      .iconPath=","\n                    >\n                    </supervisor-formfield-label>"])),this.supervisor.localize("snapshot.folders"),r.in3),this._toggleSection,t.checked,t.indeterminate,"folders",t.templates):"",null!=n&&n.templates.length?(0,i.dy)(ve||(ve=Pe(["\n                  <ha-formfield\n                    .label=","\n                  >\n                    <ha-checkbox\n                      @change=","\n                      .checked=","\n                      .indeterminate=","\n                      .section=",'\n                    >\n                    </ha-checkbox>\n                  </ha-formfield>\n                  <div class="section-content">',"</div>\n                "])),(0,i.dy)(ge||(ge=Pe(["<supervisor-formfield-label\n                      .label=","\n                      .iconPath=","\n                    >\n                    </supervisor-formfield-label>"])),this.supervisor.localize("snapshot.addons"),r.$Z0),this._toggleSection,n.checked,n.indeterminate,"addons",n.templates):""):"",this.snapshot?"":(0,i.dy)(be||(be=Pe(["<ha-formfield\n            .label=","\n          >\n            <ha-checkbox\n              .checked=","\n              @change=","\n            >\n            </ha-checkbox\n          ></ha-formfield>"])),this.supervisor.localize("snapshot.password_protection"),this.snapshotHasPassword,this._toggleHasPassword),this.snapshotHasPassword?(0,i.dy)(ke||(ke=Pe(["\n            <paper-input\n              .label=",'\n              type="password"\n              name="snapshotPassword"\n              .value=',"\n              @value-changed=","\n            >\n            </paper-input>\n          "])),this.supervisor.localize("snapshot.password"),this.snapshotPassword,this._handleTextValueChanged):"")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,i.iv)(we||(we=Pe(['\n      ha-checkbox {\n        --mdc-checkbox-touch-target-size: 16px;\n        display: block;\n        margin: 4px 12px 8px 0;\n      }\n      ha-formfield {\n        display: contents;\n      }\n      supervisor-formfield-label {\n        display: inline-flex;\n        align-items: center;\n      }\n      paper-input[type="password"] {\n        display: block;\n        margin: 4px 0 4px 16px;\n      }\n      .details {\n        color: var(--secondary-text-color);\n      }\n      .section-content {\n        display: flex;\n        flex-direction: column;\n        margin-left: 16px;\n      }\n      .security {\n        margin-top: 16px;\n      }\n      .snapshot-types {\n        display: flex;\n      }\n      .sub-header {\n        margin-top: 8px;\n      }\n    '])))}},{kind:"method",key:"snapshotDetails",value:function(){var e,t,n={};if(this.snapshot||(n.name=this.snapshotName||Y(new Date,this.hass.locale)),this.snapshotHasPassword&&(n.password=this.snapshotPassword),"full"===this.snapshotType)return n;var r=null===(e=this.addons)||void 0===e?void 0:e.filter((function(e){return e.checked})).map((function(e){return e.slug})),i=null===(t=this.folders)||void 0===t?void 0:t.filter((function(e){return e.checked})).map((function(e){return e.slug}));return null!=r&&r.length&&(n.addons=r),null!=i&&i.length&&(n.folders=i),this.homeAssistant&&(n.homeassistant=this.homeAssistant),n}},{kind:"method",key:"_getSection",value:function(e){var t=this,n=[],o="addons"===e?new Map(this.supervisor.addon.addons.map((function(e){return[e.slug,e]}))):void 0,a=0;this[e].forEach((function(l){var c;n.push((0,i.dy)(Ee||(Ee=Pe(["<ha-formfield\n        .label=","\n      >\n        <ha-checkbox\n          .item=","\n          .checked=","\n          .section=","\n          @change=","\n        >\n        </ha-checkbox>\n      </ha-formfield>"])),(0,i.dy)(Se||(Se=Pe(["<supervisor-formfield-label\n          .label=","\n          .iconPath=","\n          .imageUrl=","\n          .version=","\n        >\n        </supervisor-formfield-label>"])),l.name,"addons"===e?r.$Z0:r.in3,"addons"===e&&(0,s.I)(t.hass.config.version,0,105)&&null!=o&&null!==(c=o.get(l.slug))&&void 0!==c&&c.icon?"/api/hassio/addons/".concat(l.slug,"/icon"):void 0,l.version),l,l.checked,e,t._updateSectionEntry)),l.checked&&a++}));var l=a===this[e].length;return{templates:n,checked:l,indeterminate:!l&&0!==a}}},{kind:"method",key:"_handleRadioValueChanged",value:function(e){var t=e.currentTarget;this[t.name]=t.value}},{kind:"method",key:"_handleTextValueChanged",value:function(e){this[e.currentTarget.name]=e.detail.value}},{kind:"method",key:"_toggleHasPassword",value:function(){this.snapshotHasPassword=!this.snapshotHasPassword}},{kind:"method",key:"_toggleSection",value:function(e){var t=e.currentTarget.section;this[t]=("addons"===t?this.addons:this.folders).map((function(t){return Object.assign({},t,{checked:e.currentTarget.checked})}))}},{kind:"method",key:"_updateSectionEntry",value:function(e){var t=e.currentTarget.item,n=e.currentTarget.section;this[n]=this[n].map((function(n){return n.slug===t.slug?Object.assign({},n,{checked:e.currentTarget.checked}):n}))}}]}}),i.oi)}}]);
//# sourceMappingURL=chunk.cdeb0efd2f12be167bb7.js.map