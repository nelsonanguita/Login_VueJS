(self["webpackChunkhoramedica"]=self["webpackChunkhoramedica"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return g},L:function(){return l},LL:function(){return I},Pz:function(){return b},ZR:function(){return C},aH:function(){return m},b$:function(){return w},eu:function(){return A},hl:function(){return H},m9:function(){return $},ne:function(){return j},pd:function(){return _},q4:function(){return v},ru:function(){return M},tV:function(){return c},uI:function(){return y},vZ:function(){return k},w1:function(){return V},xO:function(){return T},xb:function(){return L},z$:function(){return z},zd:function(){return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&a+1<t.length&&56320===(64512&t.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++a)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,a=0;while(n<t.length){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],s=t[n++],l=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(1023&l))}else{const i=t[n++],o=t[n++];e[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,s=r+2<t.length,l=s?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;s||(d=64,i||(h=64)),a.push(n[c],n[u],n[h],n[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,s=i?n[t.charAt(r)]:0;++r;const l=r<t.length,c=l?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==s||null==c||null==h)throw new o;const d=e<<2|s>>4;if(a.push(d),64!==c){const t=s<<4&240|c>>2;if(a.push(t),64!==h){const t=c<<6&192|h;a.push(t)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(t){const e=a(t);return i.encodeByteArray(e,!0)},l=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},v=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},b=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function M(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function V(){const t=z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H(){try{return"object"===typeof indexedDB}catch(t){return!1}}function A(){return new Promise(((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class C extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},a=`${this.service}/${t}`,r=this.errors[t],i=r?B(r,n):"Error",o=`${this.serviceName}: ${i} (${a}).`,s=new C(a,o,n);return s}}function B(t,e){return t.replace(S,((t,n)=>{const a=e[n];return null!=a?String(a):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function k(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const n=t[r],i=e[r];if(P(n)&&P(i)){if(!k(n,i))return!1}else if(n!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function P(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function F(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,a]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(a)}})),e}function _(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=new E(t,e);return n.subscribe.bind(n)}class E{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let a;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");a=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===a.next&&(a.next=x),void 0===a.error&&(a.error=x),void 0===a.complete&&(a.complete=x);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(t){}})),this.observers.push(a),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function x(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({}),r=Array.isArray;function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function s(t){return!0===t}function l(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function v(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function b(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function z(t,e){for(var n=Object.create(null),a=t.split(","),r=0;r<a.length;r++)n[a[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}z("slot,component",!0);var y=z("key,ref,slot,slot-scope,is");function M(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var a=t.indexOf(e);if(a>-1)return t.splice(a,1)}}var w=Object.prototype.hasOwnProperty;function V(t,e){return w.call(t,e)}function H(t){var e=Object.create(null);return function(n){var a=e[n];return a||(e[n]=t(n))}}var A=/-(\w)/g,O=H((function(t){return t.replace(A,(function(t,e){return e?e.toUpperCase():""}))})),C=H((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),I=/\B([A-Z])/g,B=H((function(t){return t.replace(I,"-$1").toLowerCase()}));function S(t,e){function n(n){var a=arguments.length;return a?a>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function L(t,e){return t.bind(e)}var k=Function.prototype.bind?L:S;function P(t,e){e=e||0;var n=t.length-e,a=new Array(n);while(n--)a[n]=t[n+e];return a}function T(t,e){for(var n in e)t[n]=e[n];return t}function F(t){for(var e={},n=0;n<t.length;n++)t[n]&&T(e,t[n]);return e}function _(t,e,n){}var j=function(t,e,n){return!1},E=function(t){return t};function D(t,e){if(t===e)return!0;var n=h(t),a=h(e);if(!n||!a)return!n&&!a&&String(t)===String(e);try{var r=Array.isArray(t),i=Array.isArray(e);if(r&&i)return t.length===e.length&&t.every((function(t,n){return D(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||i)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every((function(n){return D(t[n],e[n])}))}catch(l){return!1}}function x(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function N(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var R="data-server-rendered",U=["component","directive","filter"],G=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:_,parsePlatformTagName:E,mustUseProp:j,async:!0,_lifecycleHooks:G},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function J(t,e,n,a){Object.defineProperty(t,e,{value:n,enumerable:!!a,writable:!0,configurable:!0})}var Z=new RegExp("[^".concat(q.source,".$_\\d]"));function Y(t){if(!Z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X="__proto__"in{},Q="undefined"!==typeof window,tt=Q&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,at=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var rt=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var it,ot=tt&&tt.match(/firefox\/(\d+)/),st={}.watch,lt=!1;if(Q)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){lt=!0}}),window.addEventListener("test-passive",null,ct)}catch(rl){}var ut=function(){return void 0===it&&(it=!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),it},ht=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,pt="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);ft="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var vt=null;function mt(){return vt&&{proxy:vt}}function bt(t){void 0===t&&(t=null),t||vt&&vt._scope.off(),vt=t,t&&t._scope.on()}var gt=function(){function t(t,e,n,a,r,i,o,s){this.tag=t,this.data=e,this.children=n,this.text=a,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),zt=function(t){void 0===t&&(t="");var e=new gt;return e.text=t,e.isComment=!0,e};function yt(t){return new gt(void 0,void 0,void 0,String(t))}function Mt(t){var e=new gt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=0,Vt=[],Ht=function(){for(var t=0;t<Vt.length;t++){var e=Vt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Vt.length=0},At=function(){function t(){this._pending=!1,this.id=wt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Vt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,a=e.length;n<a;n++){var r=e[n];0,r.update()}},t}();At.target=null;var Ot=[];function Ct(t){Ot.push(t),At.target=t}function It(){Ot.pop(),At.target=Ot[Ot.length-1]}var Bt=Array.prototype,St=Object.create(Bt),Lt=["push","pop","shift","unshift","splice","sort","reverse"];Lt.forEach((function(t){var e=Bt[t];J(St,t,(function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var r,i=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),i}))}));var kt=Object.getOwnPropertyNames(St),Pt={},Tt=!0;function Ft(t){Tt=t}var _t={notify:_,depend:_,addSub:_,removeSub:_},jt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?_t:new At,this.vmCount=0,J(t,"__ob__",this),r(t)){if(!n)if(X)t.__proto__=St;else for(var a=0,i=kt.length;a<i;a++){var o=kt[a];J(t,o,St[o])}e||this.observeArray(t)}else{var s=Object.keys(t);for(a=0;a<s.length;a++){o=s[a];Dt(t,o,Pt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e],!1,this.mock)},t}();function Et(t,e,n){return t&&V(t,"__ob__")&&t.__ob__ instanceof jt?t.__ob__:!Tt||!n&&ut()||!r(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Qt(t)||t instanceof gt?void 0:new jt(t,e,n)}function Dt(t,e,n,a,i,o){var s=new At,l=Object.getOwnPropertyDescriptor(t,e);if(!l||!1!==l.configurable){var c=l&&l.get,u=l&&l.set;c&&!u||n!==Pt&&2!==arguments.length||(n=t[e]);var h=!i&&Et(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(t):n;return At.target&&(s.depend(),h&&(h.dep.depend(),r(e)&&Nt(e))),Qt(e)&&!i?e.value:e},set:function(e){var a=c?c.call(t):n;if(N(a,e)){if(u)u.call(t,e);else{if(c)return;if(!i&&Qt(a)&&!Qt(e))return void(a.value=e);n=e}h=!i&&Et(e,!1,o),s.notify()}}}),s}}function xt(t,e,n){if(!Kt(t)){var a=t.__ob__;return r(t)&&v(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),a&&!a.shallow&&a.mock&&Et(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||a&&a.vmCount?n:a?(Dt(a.value,e,n,void 0,a.shallow,a.mock),a.dep.notify(),n):(t[e]=n,n)}}function $t(t,e){if(r(t)&&v(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Kt(t)||V(t,e)&&(delete t[e],n&&n.dep.notify())}}function Nt(t){for(var e=void 0,n=0,a=t.length;n<a;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),r(e)&&Nt(e)}function Rt(t){return Gt(t,!1),t}function Ut(t){return Gt(t,!0),J(t,"__v_isShallow",!0),t}function Gt(t,e){if(!Kt(t)){Et(t,e,ut());0}}function Wt(t){return Kt(t)?Wt(t["__v_raw"]):!(!t||!t.__ob__)}function qt(t){return!(!t||!t.__v_isShallow)}function Kt(t){return!(!t||!t.__v_isReadonly)}function Jt(t){return Wt(t)||Kt(t)}function Zt(t){var e=t&&t["__v_raw"];return e?Zt(e):t}function Yt(t){return Object.isExtensible(t)&&J(t,"__v_skip",!0),t}var Xt="__v_isRef";function Qt(t){return!(!t||!0!==t.__v_isRef)}function te(t){return ne(t,!1)}function ee(t){return ne(t,!0)}function ne(t,e){if(Qt(t))return t;var n={};return J(n,Xt,!0),J(n,"__v_isShallow",e),J(n,"dep",Dt(n,"value",t,null,e,ut())),n}function ae(t){t.dep&&t.dep.notify()}function re(t){return Qt(t)?t.value:t}function ie(t){if(Wt(t))return t;for(var e={},n=Object.keys(t),a=0;a<n.length;a++)oe(e,t,n[a]);return e}function oe(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Qt(t))return t.value;var a=t&&t.__ob__;return a&&a.dep.depend(),t},set:function(t){var a=e[n];Qt(a)&&!Qt(t)?a.value=t:e[n]=t}})}function se(t){var e=new At,n=t((function(){e.depend()}),(function(){e.notify()})),a=n.get,r=n.set,i={get value(){return a()},set value(t){r(t)}};return J(i,Xt,!0),i}function le(t){var e=r(t)?new Array(t.length):{};for(var n in t)e[n]=ce(t,n);return e}function ce(t,e,n){var a=t[e];if(Qt(a))return a;var r={get value(){var a=t[e];return void 0===a?n:a},set value(n){t[e]=n}};return J(r,Xt,!0),r}var ue="__v_rawToReadonly",he="__v_rawToShallowReadonly";function de(t){return fe(t,!1)}function fe(t,e){if(!f(t))return t;if(Kt(t))return t;var n=e?he:ue,a=t[n];if(a)return a;var r=Object.create(Object.getPrototypeOf(t));J(t,n,r),J(r,"__v_isReadonly",!0),J(r,"__v_raw",t),Qt(t)&&J(r,Xt,!0),(e||qt(t))&&J(r,"__v_isShallow",!0);for(var i=Object.keys(t),o=0;o<i.length;o++)pe(r,t,i[o],e);return r}function pe(t,e,n,a){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];return a||!f(t)?t:de(t)},set:function(){}})}function ve(t){return fe(t,!0)}function me(t,e){var n,a,r=u(t);r?(n=t,a=_):(n=t.get,a=t.set);var i=ut()?null:new Ha(vt,n,_,{lazy:!0});var o={effect:i,get value(){return i?(i.dirty&&i.evaluate(),At.target&&i.depend(),i.value):n()},set value(t){a(t)}};return J(o,Xt,!0),J(o,"__v_isReadonly",r),o}var be="watcher",ge="".concat(be," callback"),ze="".concat(be," getter"),ye="".concat(be," cleanup");function Me(t,e){return Ce(t,null,e)}function we(t,e){return Ce(t,null,{flush:"post"})}function Ve(t,e){return Ce(t,null,{flush:"sync"})}var He,Ae={};function Oe(t,e,n){return Ce(t,e,n)}function Ce(t,e,n){var i=void 0===n?a:n,o=i.immediate,s=i.deep,l=i.flush,c=void 0===l?"pre":l;i.onTrack,i.onTrigger;var h,d,f=vt,p=function(t,e,n){return void 0===n&&(n=null),xn(t,null,n,f,e)},v=!1,m=!1;if(Qt(t)?(h=function(){return t.value},v=qt(t)):Wt(t)?(h=function(){return t.__ob__.dep.depend(),t},s=!0):r(t)?(m=!0,v=t.some((function(t){return Wt(t)||qt(t)})),h=function(){return t.map((function(t){return Qt(t)?t.value:Wt(t)?ya(t):u(t)?p(t,ze):void 0}))}):h=u(t)?e?function(){return p(t,ze)}:function(){if(!f||!f._isDestroyed)return d&&d(),p(t,be,[g])}:_,e&&s){var b=h;h=function(){return ya(b())}}var g=function(t){d=z.onStop=function(){p(t,ye)}};if(ut())return g=_,e?o&&p(e,ge,[h(),m?[]:void 0,g]):h(),_;var z=new Ha(vt,h,_,{lazy:!0});z.noRecurse=!e;var y=m?[]:Ae;return z.run=function(){if(z.active)if(e){var t=z.get();(s||v||(m?t.some((function(t,e){return N(t,y[e])})):N(t,y)))&&(d&&d(),p(e,ge,[t,y===Ae?void 0:y,g]),y=t)}else z.get()},"sync"===c?z.update=z.run:"post"===c?(z.post=!0,z.update=function(){return nr(z)}):z.update=function(){if(f&&f===vt&&!f._isMounted){var t=f._preWatchers||(f._preWatchers=[]);t.indexOf(z)<0&&t.push(z)}else nr(z)},e?o?z.run():y=z.get():"post"===c&&f?f.$once("hook:mounted",(function(){return z.get()})):z.get(),function(){z.teardown()}}var Ie=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=He;try{return He=this,t()}finally{He=e}}else 0},t.prototype.on=function(){He=this},t.prototype.off=function(){He=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Be(t){return new Ie(t)}function Se(t,e){void 0===e&&(e=He),e&&e.active&&e.effects.push(t)}function Le(){return He}function ke(t){He&&He.cleanups.push(t)}function Pe(t,e){vt&&(Te(vt)[t]=e)}function Te(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}function Fe(t,e,n){void 0===n&&(n=!1);var a=vt;if(a){var r=a.$parent&&a.$parent._provided;if(r&&t in r)return r[t];if(arguments.length>1)return n&&u(e)?e.call(a):e}else 0}var _e=H((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var a="!"===t.charAt(0);return t=a?t.slice(1):t,{name:t,once:n,capture:a,passive:e}}));function je(t,e){function n(){var t=n.fns;if(!r(t))return xn(t,null,arguments,e,"v-on handler");for(var a=t.slice(),i=0;i<a.length;i++)xn(a[i],null,arguments,e,"v-on handler")}return n.fns=t,n}function Ee(t,e,n,a,r,o){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=_e(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=je(c,o)),s(h.once)&&(c=t[l]=r(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=_e(l),a(h.name,e[l],h.capture))}function De(t,e,n){var a;t instanceof gt&&(t=t.data.hook||(t.data.hook={}));var r=t[e];function l(){n.apply(this,arguments),M(a.fns,l)}i(r)?a=je([l]):o(r.fns)&&s(r.merged)?(a=r,a.fns.push(l)):a=je([r,l]),a.merged=!0,t[e]=a}function xe(t,e,n){var a=e.options.props;if(!i(a)){var r={},s=t.attrs,l=t.props;if(o(s)||o(l))for(var c in a){var u=B(c);$e(r,l,c,u,!0)||$e(r,s,c,u,!1)}return r}}function $e(t,e,n,a,r){if(o(e)){if(V(e,n))return t[n]=e[n],r||delete e[n],!0;if(V(e,a))return t[n]=e[a],r||delete e[a],!0}return!1}function Ne(t){for(var e=0;e<t.length;e++)if(r(t[e]))return Array.prototype.concat.apply([],t);return t}function Re(t){return c(t)?[yt(t)]:r(t)?Ge(t):void 0}function Ue(t){return o(t)&&o(t.text)&&l(t.isComment)}function Ge(t,e){var n,a,l,u,h=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=h.length-1,u=h[l],r(a)?a.length>0&&(a=Ge(a,"".concat(e||"","_").concat(n)),Ue(a[0])&&Ue(u)&&(h[l]=yt(u.text+a[0].text),a.shift()),h.push.apply(h,a)):c(a)?Ue(u)?h[l]=yt(u.text+a):""!==a&&h.push(yt(a)):Ue(a)&&Ue(u)?h[l]=yt(u.text+a.text):(s(t._isVList)&&o(a.tag)&&i(a.key)&&o(e)&&(a.key="__vlist".concat(e,"_").concat(n,"__")),h.push(a)));return h}function We(t,e){var n,a,i,s,l=null;if(r(t)||"string"===typeof t)for(l=new Array(t.length),n=0,a=t.length;n<a;n++)l[n]=e(t[n],n);else if("number"===typeof t)for(l=new Array(t),n=0;n<t;n++)l[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){l=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)l.push(e(u.value,l.length)),u=c.next()}else for(i=Object.keys(t),l=new Array(i.length),n=0,a=i.length;n<a;n++)s=i[n],l[n]=e(t[s],s,n);return o(l)||(l=[]),l._isVList=!0,l}function qe(t,e,n,a){var r,i=this.$scopedSlots[t];i?(n=n||{},a&&(n=T(T({},a),n)),r=i(n)||(u(e)?e():e)):r=this.$slots[t]||(u(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ke(t){return Sr(this.$options,"filters",t,!0)||E}function Je(t,e){return r(t)?-1===t.indexOf(e):t!==e}function Ze(t,e,n,a,r){var i=W.keyCodes[e]||n;return r&&a&&!W.keyCodes[e]?Je(r,a):i?Je(i,t):a?B(a)!==e:void 0===t}function Ye(t,e,n,a,i){if(n)if(h(n)){r(n)&&(n=F(n));var o=void 0,s=function(r){if("class"===r||"style"===r||y(r))o=t;else{var s=t.attrs&&t.attrs.type;o=a||W.mustUseProp(e,s,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=O(r),c=B(r);if(!(l in o)&&!(c in o)&&(o[r]=n[r],i)){var u=t.on||(t.on={});u["update:".concat(r)]=function(t){n[r]=t}}};for(var l in n)s(l)}else;return t}function Xe(t,e){var n=this._staticTrees||(this._staticTrees=[]),a=n[t];return a&&!e||(a=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),tn(a,"__static__".concat(t),!1)),a}function Qe(t,e,n){return tn(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function tn(t,e,n){if(r(t))for(var a=0;a<t.length;a++)t[a]&&"string"!==typeof t[a]&&en(t[a],"".concat(e,"_").concat(a),n);else en(t,e,n)}function en(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function nn(t,e){if(e)if(f(e)){var n=t.on=t.on?T({},t.on):{};for(var a in e){var r=n[a],i=e[a];n[a]=r?[].concat(r,i):i}}else;return t}function an(t,e,n,a){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];r(o)?an(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return a&&(e.$key=a),e}function rn(t,e){for(var n=0;n<e.length;n+=2){var a=e[n];"string"===typeof a&&a&&(t[e[n]]=e[n+1])}return t}function on(t,e){return"string"===typeof t?e+t:t}function sn(t){t._o=Qe,t._n=g,t._s=b,t._l=We,t._t=qe,t._q=D,t._i=x,t._m=Xe,t._f=Ke,t._k=Ze,t._b=Ye,t._v=yt,t._e=zt,t._u=an,t._g=nn,t._d=rn,t._p=on}function ln(t,e){if(!t||!t.length)return{};for(var n={},a=0,r=t.length;a<r;a++){var i=t[a],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==e&&i.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(i);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===i.tag?l.push.apply(l,i.children||[]):l.push(i)}}for(var c in n)n[c].every(cn)&&delete n[c];return n}function cn(t){return t.isComment&&!t.asyncFactory||" "===t.text}function un(t){return t.isComment&&t.asyncFactory}function hn(t,e,n,r){var i,o=Object.keys(n).length>0,s=e?!!e.$stable:!o,l=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&r&&r!==a&&l===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=dn(t,n,c,e[c]))}else i={};for(var u in n)u in i||(i[u]=fn(n,u));return e&&Object.isExtensible(e)&&(e._normalized=i),J(i,"$stable",s),J(i,"$key",l),J(i,"$hasNormal",o),i}function dn(t,e,n,a){var i=function(){var e=vt;bt(t);var n=arguments.length?a.apply(null,arguments):a({});n=n&&"object"===typeof n&&!r(n)?[n]:Re(n);var i=n&&n[0];return bt(e),n&&(!i||1===n.length&&i.isComment&&!un(i))?void 0:n};return a.proxy&&Object.defineProperty(e,n,{get:i,enumerable:!0,configurable:!0}),i}function fn(t,e){return function(){return t[e]}}function pn(t){var e=t.$options,n=e.setup;if(n){var a=t._setupContext=vn(t);bt(t),Ct();var r=xn(n,null,[t._props||Ut({}),a],t,"setup");if(It(),bt(),u(r))e.render=r;else if(h(r))if(t._setupState=r,r.__sfc){var i=t._setupProxy={};for(var o in r)"__sfc"!==o&&oe(i,r,o)}else for(var o in r)K(o)||oe(t,r,o);else 0}}function vn(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};J(e,"_v_attr_proxy",!0),mn(e,t.$attrs,a,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};mn(e,t.$listeners,a,t,"$listeners")}return t._listenersProxy},get slots(){return gn(t)},emit:k(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return oe(t,e,n)}))}}}function mn(t,e,n,a,r){var i=!1;for(var o in e)o in t?e[o]!==n[o]&&(i=!0):(i=!0,bn(t,o,a,r));for(var o in t)o in e||(i=!0,delete t[o]);return i}function bn(t,e,n,a){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[a][e]}})}function gn(t){return t._slotsProxy||zn(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function zn(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function yn(){return Vn().slots}function Mn(){return Vn().attrs}function wn(){return Vn().listeners}function Vn(){var t=vt;return t._setupContext||(t._setupContext=vn(t))}function Hn(t,e){var n=r(t)?t.reduce((function(t,e){return t[e]={},t}),{}):t;for(var a in e){var i=n[a];i?r(i)||u(i)?n[a]={type:i,default:e[a]}:i.default=e[a]:null===i&&(n[a]={default:e[a]})}return n}function An(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=ln(e._renderChildren,r),t.$scopedSlots=n?hn(t.$parent,n.data.scopedSlots,t.$slots):a,t._c=function(e,n,a,r){return Tn(t,e,n,a,r,!1)},t.$createElement=function(e,n,a,r){return Tn(t,e,n,a,r,!0)};var i=n&&n.data;Dt(t,"$attrs",i&&i.attrs||a,null,!0),Dt(t,"$listeners",e._parentListeners||a,null,!0)}var On=null;function Cn(t){sn(t.prototype),t.prototype.$nextTick=function(t){return Xn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,a=n.render,i=n._parentVnode;i&&e._isMounted&&(e.$scopedSlots=hn(e.$parent,i.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&zn(e._slotsProxy,e.$scopedSlots)),e.$vnode=i;try{bt(e),On=e,t=a.call(e._renderProxy,e.$createElement)}catch(rl){Dn(rl,e,"render"),t=e._vnode}finally{On=null,bt()}return r(t)&&1===t.length&&(t=t[0]),t instanceof gt||(t=zt()),t.parent=i,t}}function In(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Bn(t,e,n,a,r){var i=zt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:a,tag:r},i}function Sn(t,e){if(s(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=On;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],r=!0,l=null,c=null;n.$on("hook:destroyed",(function(){return M(a,n)}));var u=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==l&&(clearTimeout(l),l=null),null!==c&&(clearTimeout(c),c=null))},d=$((function(n){t.resolved=In(n,e),r?a.length=0:u(!0)})),f=$((function(e){o(t.errorComp)&&(t.error=!0,u(!0))})),p=t(d,f);return h(p)&&(m(p)?i(t.resolved)&&p.then(d,f):m(p.component)&&(p.component.then(d,f),o(p.error)&&(t.errorComp=In(p.error,e)),o(p.loading)&&(t.loadingComp=In(p.loading,e),0===p.delay?t.loading=!0:l=setTimeout((function(){l=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,u(!1))}),p.delay||200)),o(p.timeout)&&(c=setTimeout((function(){c=null,i(t.resolved)&&f(null)}),p.timeout)))),r=!1,t.loading?t.loadingComp:t.resolved}}function Ln(t){if(r(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||un(n)))return n}}var kn=1,Pn=2;function Tn(t,e,n,a,i,o){return(r(n)||c(n))&&(i=a,a=n,n=void 0),s(o)&&(i=Pn),Fn(t,e,n,a,i)}function Fn(t,e,n,a,i){if(o(n)&&o(n.__ob__))return zt();if(o(n)&&o(n.is)&&(e=n.is),!e)return zt();var s,l;if(r(a)&&u(a[0])&&(n=n||{},n.scopedSlots={default:a[0]},a.length=0),i===Pn?a=Re(a):i===kn&&(a=Ne(a)),"string"===typeof e){var c=void 0;l=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),s=W.isReservedTag(e)?new gt(W.parsePlatformTagName(e),n,a,void 0,void 0,t):n&&n.pre||!o(c=Sr(t.$options,"components",e))?new gt(e,n,a,void 0,void 0,t):fr(c,n,t,a,e)}else s=fr(e,n,t,a);return r(s)?s:o(s)?(o(l)&&_n(s,l),o(n)&&jn(n),s):zt()}function _n(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,r=t.children.length;a<r;a++){var l=t.children[a];o(l.tag)&&(i(l.ns)||s(n)&&"svg"!==l.tag)&&_n(l,e,n)}}function jn(t){h(t.style)&&ya(t.style),h(t.class)&&ya(t.class)}function En(t,e,n){return Tn(vt,t,e,n,2,!0)}function Dn(t,e,n){Ct();try{if(e){var a=e;while(a=a.$parent){var r=a.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var o=!1===r[i].call(a,t,e,n);if(o)return}catch(rl){$n(rl,a,"errorCaptured hook")}}}$n(t,e,n)}finally{It()}}function xn(t,e,n,a,r){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&m(i)&&!i._handled&&(i.catch((function(t){return Dn(t,a,r+" (Promise/async)")})),i._handled=!0)}catch(rl){Dn(rl,a,r)}return i}function $n(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(rl){rl!==t&&Nn(rl,null,"config.errorHandler")}Nn(t,e,n)}function Nn(t,e,n){if(!Q||"undefined"===typeof console)throw t;console.error(t)}var Rn,Un=!1,Gn=[],Wn=!1;function qn(){Wn=!1;var t=Gn.slice(0);Gn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var Kn=Promise.resolve();Rn=function(){Kn.then(qn),rt&&setTimeout(_)},Un=!0}else if(et||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Rn="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(qn)}:function(){setTimeout(qn,0)};else{var Jn=1,Zn=new MutationObserver(qn),Yn=document.createTextNode(String(Jn));Zn.observe(Yn,{characterData:!0}),Rn=function(){Jn=(Jn+1)%2,Yn.data=String(Jn)},Un=!0}function Xn(t,e){var n;if(Gn.push((function(){if(t)try{t.call(e)}catch(rl){Dn(rl,e,"nextTick")}else n&&n(e)})),Wn||(Wn=!0,Rn()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function Qn(t){if(void 0===t&&(t="$style"),!vt)return a;var e=vt[t];return e||a}function ta(t){if(Q){var e=vt;e&&we((function(){var n=e.$el,a=t(e,e._setupProxy);if(n&&1===n.nodeType){var r=n.style;for(var i in a)r.setProperty("--".concat(i),a[i])}}))}}function ea(t){u(t)&&(t={loader:t});var e=t.loader,n=t.loadingComponent,a=t.errorComponent,r=t.delay,i=void 0===r?200:r,o=t.timeout,s=(t.suspensible,t.onError);var l=null,c=0,h=function(){return c++,l=null,d()},d=function(){var t;return l||(t=l=e().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),s)return new Promise((function(e,n){var a=function(){return e(h())},r=function(){return n(t)};s(t,a,r,c+1)}));throw t})).then((function(e){return t!==l&&l?l:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e)})))};return function(){var t=d();return{component:t,delay:i,timeout:o,error:a,loading:n}}}function na(t){return function(e,n){if(void 0===n&&(n=vt),n)return aa(n,t,e)}}function aa(t,e,n){var a=t.$options;a[e]=wr(a[e],n)}var ra=na("beforeMount"),ia=na("mounted"),oa=na("beforeUpdate"),sa=na("updated"),la=na("beforeDestroy"),ca=na("destroyed"),ua=na("activated"),ha=na("deactivated"),da=na("serverPrefetch"),fa=na("renderTracked"),pa=na("renderTriggered"),va=na("errorCaptured");function ma(t,e){void 0===e&&(e=vt),va(t,e)}var ba="2.7.14";function ga(t){return t}var za=new ft;function ya(t){return Ma(t,za),za.clear(),t}function Ma(t,e){var n,a,i=r(t);if(!(!i&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof gt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)Ma(t[n],e)}else if(Qt(t))Ma(t.value,e);else{a=Object.keys(t),n=a.length;while(n--)Ma(t[a[n]],e)}}}var wa,Va=0,Ha=function(){function t(t,e,n,a,r){Se(this,He&&!He._vm?He:t?t._scope:void 0),(this.vm=t)&&r&&(t._watcher=this),a?(this.deep=!!a.deep,this.user=!!a.user,this.lazy=!!a.lazy,this.sync=!!a.sync,this.before=a.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Va,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="",u(e)?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=_)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Ct(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(rl){if(!this.user)throw rl;Dn(rl,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&ya(t),It(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');xn(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&M(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function Aa(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Ba(t,e)}function Oa(t,e){wa.$on(t,e)}function Ca(t,e){wa.$off(t,e)}function Ia(t,e){var n=wa;return function a(){var r=e.apply(null,arguments);null!==r&&n.$off(t,a)}}function Ba(t,e,n){wa=t,Ee(e,n||{},Oa,Ca,Ia,t),wa=void 0}function Sa(t){var e=/^hook:/;t.prototype.$on=function(t,n){var a=this;if(r(t))for(var i=0,o=t.length;i<o;i++)a.$on(t[i],n);else(a._events[t]||(a._events[t]=[])).push(n),e.test(t)&&(a._hasHookEvent=!0);return a},t.prototype.$once=function(t,e){var n=this;function a(){n.$off(t,a),e.apply(n,arguments)}return a.fn=e,n.$on(t,a),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(t)){for(var a=0,i=t.length;a<i;a++)n.$off(t[a],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var l=s.length;while(l--)if(o=s[l],o===e||o.fn===e){s.splice(l,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var a=P(arguments,1),r='event handler for "'.concat(t,'"'),i=0,o=n.length;i<o;i++)xn(n[i],e,a,e,r)}return e}}var La=null;function ka(t){var e=La;return La=t,function(){La=e}}function Pa(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ta(t){t.prototype._update=function(t,e){var n=this,a=n.$el,r=n._vnode,i=ka(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),i(),a&&(a.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){xa(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||M(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),xa(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Fa(t,e,n){var a;t.$el=e,t.$options.render||(t.$options.render=zt),xa(t,"beforeMount"),a=function(){t._update(t._render(),n)};var r={before:function(){t._isMounted&&!t._isDestroyed&&xa(t,"beforeUpdate")}};new Ha(t,a,_,r,!0),n=!1;var i=t._preWatchers;if(i)for(var o=0;o<i.length;o++)i[o].run();return null==t.$vnode&&(t._isMounted=!0,xa(t,"mounted")),t}function _a(t,e,n,r,i){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==a&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(i||t.$options._renderChildren||l),u=t.$vnode;t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i;var h=r.data.attrs||a;t._attrsProxy&&mn(t._attrsProxy,h,u.data&&u.data.attrs||a,t,"$attrs")&&(c=!0),t.$attrs=h,n=n||a;var d=t.$options._parentListeners;if(t._listenersProxy&&mn(t._listenersProxy,n,d||a,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,Ba(t,n,d),e&&t.$options.props){Ft(!1);for(var f=t._props,p=t.$options._propKeys||[],v=0;v<p.length;v++){var m=p[v],b=t.$options.props;f[m]=Lr(m,b,e,t)}Ft(!0),t.$options.propsData=e}c&&(t.$slots=ln(i,r.context),t.$forceUpdate())}function ja(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Ea(t,e){if(e){if(t._directInactive=!1,ja(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Ea(t.$children[n]);xa(t,"activated")}}function Da(t,e){if((!e||(t._directInactive=!0,!ja(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Da(t.$children[n]);xa(t,"deactivated")}}function xa(t,e,n,a){void 0===a&&(a=!0),Ct();var r=vt;a&&bt(t);var i=t.$options[e],o="".concat(e," hook");if(i)for(var s=0,l=i.length;s<l;s++)xn(i[s],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),a&&bt(r),It()}var $a=[],Na=[],Ra={},Ua=!1,Ga=!1,Wa=0;function qa(){Wa=$a.length=Na.length=0,Ra={},Ua=Ga=!1}var Ka=0,Ja=Date.now;if(Q&&!et){var Za=window.performance;Za&&"function"===typeof Za.now&&Ja()>document.createEvent("Event").timeStamp&&(Ja=function(){return Za.now()})}var Ya=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Xa(){var t,e;for(Ka=Ja(),Ga=!0,$a.sort(Ya),Wa=0;Wa<$a.length;Wa++)t=$a[Wa],t.before&&t.before(),e=t.id,Ra[e]=null,t.run();var n=Na.slice(),a=$a.slice();qa(),er(n),Qa(a),Ht(),ht&&W.devtools&&ht.emit("flush")}function Qa(t){var e=t.length;while(e--){var n=t[e],a=n.vm;a&&a._watcher===n&&a._isMounted&&!a._isDestroyed&&xa(a,"updated")}}function tr(t){t._inactive=!1,Na.push(t)}function er(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ea(t[e],!0)}function nr(t){var e=t.id;if(null==Ra[e]&&(t!==At.target||!t.noRecurse)){if(Ra[e]=!0,Ga){var n=$a.length-1;while(n>Wa&&$a[n].id>t.id)n--;$a.splice(n+1,0,t)}else $a.push(t);Ua||(Ua=!0,Xn(Xa))}}function ar(t){var e=t.$options.provide;if(e){var n=u(e)?e.call(t):e;if(!h(n))return;for(var a=Te(t),r=pt?Reflect.ownKeys(n):Object.keys(n),i=0;i<r.length;i++){var o=r[i];Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(n,o))}}}function rr(t){var e=ir(t.$options.inject,t);e&&(Ft(!1),Object.keys(e).forEach((function(n){Dt(t,n,e[n])})),Ft(!0))}function ir(t,e){if(t){for(var n=Object.create(null),a=pt?Reflect.ownKeys(t):Object.keys(t),r=0;r<a.length;r++){var i=a[r];if("__ob__"!==i){var o=t[i].from;if(o in e._provided)n[i]=e._provided[o];else if("default"in t[i]){var s=t[i].default;n[i]=u(s)?s.call(e):s}else 0}}return n}}function or(t,e,n,i,o){var l,c=this,u=o.options;V(i,"_uid")?(l=Object.create(i),l._original=i):(l=i,i=i._original);var h=s(u._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||a,this.injections=ir(u.inject,i),this.slots=function(){return c.$slots||hn(i,t.scopedSlots,c.$slots=ln(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return hn(i,t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=hn(i,t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,a){var o=Tn(l,t,e,n,a,d);return o&&!r(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,a){return Tn(l,t,e,n,a,d)}}function sr(t,e,n,i,s){var l=t.options,c={},u=l.props;if(o(u))for(var h in u)c[h]=Lr(h,u,e||a);else o(n.attrs)&&cr(c,n.attrs),o(n.props)&&cr(c,n.props);var d=new or(n,c,s,i,t),f=l.render.call(null,d._c,d);if(f instanceof gt)return lr(f,n,d.parent,l,d);if(r(f)){for(var p=Re(f)||[],v=new Array(p.length),m=0;m<p.length;m++)v[m]=lr(p[m],n,d.parent,l,d);return v}}function lr(t,e,n,a,r){var i=Mt(t);return i.fnContext=n,i.fnOptions=a,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function cr(t,e){for(var n in e)t[O(n)]=e[n]}function ur(t){return t.name||t.__name||t._componentTag}sn(or.prototype);var hr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;hr.prepatch(n,n)}else{var a=t.componentInstance=pr(t,La);a.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,a=e.componentInstance=t.componentInstance;_a(a,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,xa(n,"mounted")),t.data.keepAlive&&(e._isMounted?tr(n):Ea(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Da(e,!0):e.$destroy())}},dr=Object.keys(hr);function fr(t,e,n,a,r){if(!i(t)){var l=n.$options._base;if(h(t)&&(t=l.extend(t)),"function"===typeof t){var c;if(i(t.cid)&&(c=t,t=Sn(c,l),void 0===t))return Bn(c,e,n,a,r);e=e||{},ei(t),o(e.model)&&br(t.options,e);var u=xe(e,t,r);if(s(t.options.functional))return sr(t,u,e,n,a);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}vr(e);var p=ur(t.options)||r,v=new gt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:u,listeners:d,tag:r,children:a},c);return v}}}function pr(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},a=t.data.inlineTemplate;return o(a)&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),new t.componentOptions.Ctor(n)}function vr(t){for(var e=t.hook||(t.hook={}),n=0;n<dr.length;n++){var a=dr[n],r=e[a],i=hr[a];r===i||r&&r._merged||(e[a]=r?mr(i,r):i)}}function mr(t,e){var n=function(n,a){t(n,a),e(n,a)};return n._merged=!0,n}function br(t,e){var n=t.model&&t.model.prop||"value",a=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[a],l=e.model.callback;o(s)?(r(s)?-1===s.indexOf(l):s!==l)&&(i[a]=[l].concat(s)):i[a]=l}var gr=_,zr=W.optionMergeStrategies;function yr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var a,r,i,o=pt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)a=o[s],"__ob__"!==a&&(r=t[a],i=e[a],n&&V(t,a)?r!==i&&f(r)&&f(i)&&yr(r,i):xt(t,a,i));return t}function Mr(t,e,n){return n?function(){var a=u(e)?e.call(n,n):e,r=u(t)?t.call(n,n):t;return a?yr(a,r):r}:e?t?function(){return yr(u(e)?e.call(this,this):e,u(t)?t.call(this,this):t)}:e:t}function wr(t,e){var n=e?t?t.concat(e):r(e)?e:[e]:t;return n?Vr(n):n}function Vr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Hr(t,e,n,a){var r=Object.create(t||null);return e?T(r,e):r}zr.data=function(t,e,n){return n?Mr(t,e,n):e&&"function"!==typeof e?t:Mr(t,e)},G.forEach((function(t){zr[t]=wr})),U.forEach((function(t){zr[t+"s"]=Hr})),zr.watch=function(t,e,n,a){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in T(i,t),e){var s=i[o],l=e[o];s&&!r(s)&&(s=[s]),i[o]=s?s.concat(l):r(l)?l:[l]}return i},zr.props=zr.methods=zr.inject=zr.computed=function(t,e,n,a){if(!t)return e;var r=Object.create(null);return T(r,t),e&&T(r,e),r},zr.provide=function(t,e){return t?function(){var n=Object.create(null);return yr(n,u(t)?t.call(this):t),e&&yr(n,u(e)?e.call(this):e,!1),n}:e};var Ar=function(t,e){return void 0===e?t:e};function Or(t,e){var n=t.props;if(n){var a,i,o,s={};if(r(n)){a=n.length;while(a--)i=n[a],"string"===typeof i&&(o=O(i),s[o]={type:null})}else if(f(n))for(var l in n)i=n[l],o=O(l),s[o]=f(i)?i:{type:i};else 0;t.props=s}}function Cr(t,e){var n=t.inject;if(n){var a=t.inject={};if(r(n))for(var i=0;i<n.length;i++)a[n[i]]={from:n[i]};else if(f(n))for(var o in n){var s=n[o];a[o]=f(s)?T({from:o},s):{from:s}}else 0}}function Ir(t){var e=t.directives;if(e)for(var n in e){var a=e[n];u(a)&&(e[n]={bind:a,update:a})}}function Br(t,e,n){if(u(e)&&(e=e.options),Or(e,n),Cr(e,n),Ir(e),!e._base&&(e.extends&&(t=Br(t,e.extends,n)),e.mixins))for(var a=0,r=e.mixins.length;a<r;a++)t=Br(t,e.mixins[a],n);var i,o={};for(i in t)s(i);for(i in e)V(t,i)||s(i);function s(a){var r=zr[a]||Ar;o[a]=r(t[a],e[a],n,a)}return o}function Sr(t,e,n,a){if("string"===typeof n){var r=t[e];if(V(r,n))return r[n];var i=O(n);if(V(r,i))return r[i];var o=C(i);if(V(r,o))return r[o];var s=r[n]||r[i]||r[o];return s}}function Lr(t,e,n,a){var r=e[t],i=!V(n,t),o=n[t],s=_r(Boolean,r.type);if(s>-1)if(i&&!V(r,"default"))o=!1;else if(""===o||o===B(t)){var l=_r(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=kr(a,r,t);var c=Tt;Ft(!0),Et(o),Ft(c)}return o}function kr(t,e,n){if(V(e,"default")){var a=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:u(a)&&"Function"!==Tr(e.type)?a.call(t):a}}var Pr=/^\s*function (\w+)/;function Tr(t){var e=t&&t.toString().match(Pr);return e?e[1]:""}function Fr(t,e){return Tr(t)===Tr(e)}function _r(t,e){if(!r(e))return Fr(e,t)?0:-1;for(var n=0,a=e.length;n<a;n++)if(Fr(e[n],t))return n;return-1}var jr={enumerable:!0,configurable:!0,get:_,set:_};function Er(t,e,n){jr.get=function(){return this[e][n]},jr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,jr)}function Dr(t){var e=t.$options;if(e.props&&xr(t,e.props),pn(t),e.methods&&Kr(t,e.methods),e.data)$r(t);else{var n=Et(t._data={});n&&n.vmCount++}e.computed&&Ur(t,e.computed),e.watch&&e.watch!==st&&Jr(t,e.watch)}function xr(t,e){var n=t.$options.propsData||{},a=t._props=Ut({}),r=t.$options._propKeys=[],i=!t.$parent;i||Ft(!1);var o=function(i){r.push(i);var o=Lr(i,e,n,t);Dt(a,i,o),i in t||Er(t,"_props",i)};for(var s in e)o(s);Ft(!0)}function $r(t){var e=t.$options.data;e=t._data=u(e)?Nr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),a=t.$options.props,r=(t.$options.methods,n.length);while(r--){var i=n[r];0,a&&V(a,i)||K(i)||Er(t,"_data",i)}var o=Et(e);o&&o.vmCount++}function Nr(t,e){Ct();try{return t.call(e,e)}catch(rl){return Dn(rl,e,"data()"),{}}finally{It()}}var Rr={lazy:!0};function Ur(t,e){var n=t._computedWatchers=Object.create(null),a=ut();for(var r in e){var i=e[r],o=u(i)?i:i.get;0,a||(n[r]=new Ha(t,o||_,_,Rr)),r in t||Gr(t,r,i)}}function Gr(t,e,n){var a=!ut();u(n)?(jr.get=a?Wr(e):qr(n),jr.set=_):(jr.get=n.get?a&&!1!==n.cache?Wr(e):qr(n.get):_,jr.set=n.set||_),Object.defineProperty(t,e,jr)}function Wr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),At.target&&e.depend(),e.value}}function qr(t){return function(){return t.call(this,this)}}function Kr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?_:k(e[n],t)}function Jr(t,e){for(var n in e){var a=e[n];if(r(a))for(var i=0;i<a.length;i++)Zr(t,n,a[i]);else Zr(t,n,a)}}function Zr(t,e,n,a){return f(n)&&(a=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,a)}function Yr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=xt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var a=this;if(f(e))return Zr(a,t,e,n);n=n||{},n.user=!0;var r=new Ha(a,t,e,n);if(n.immediate){var i='callback for immediate watcher "'.concat(r.expression,'"');Ct(),xn(e,a,[r.value],a,i),It()}return function(){r.teardown()}}}var Xr=0;function Qr(t){t.prototype._init=function(t){var e=this;e._uid=Xr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Ie(!0),e._scope._vm=!0,t&&t._isComponent?ti(e,t):e.$options=Br(ei(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pa(e),Aa(e),An(e),xa(e,"beforeCreate",void 0,!1),rr(e),Dr(e),ar(e),xa(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function ti(t,e){var n=t.$options=Object.create(t.constructor.options),a=e._parentVnode;n.parent=e.parent,n._parentVnode=a;var r=a.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function ei(t){var e=t.options;if(t.super){var n=ei(t.super),a=t.superOptions;if(n!==a){t.superOptions=n;var r=ni(t);r&&T(t.extendOptions,r),e=t.options=Br(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function ni(t){var e,n=t.options,a=t.sealedOptions;for(var r in n)n[r]!==a[r]&&(e||(e={}),e[r]=n[r]);return e}function ai(t){this._init(t)}function ri(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),u(t.install)?t.install.apply(t,n):u(t)&&t.apply(null,n),e.push(t),this}}function ii(t){t.mixin=function(t){return this.options=Br(this.options,t),this}}function oi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,a=n.cid,r=t._Ctor||(t._Ctor={});if(r[a])return r[a];var i=ur(t)||ur(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Br(n.options,t),o["super"]=n,o.options.props&&si(o),o.options.computed&&li(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,U.forEach((function(t){o[t]=n[t]})),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=T({},o.options),r[a]=o,o}}function si(t){var e=t.options.props;for(var n in e)Er(t.prototype,"_props",n)}function li(t){var e=t.options.computed;for(var n in e)Gr(t.prototype,n,e[n])}function ci(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&u(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ui(t){return t&&(ur(t.Ctor.options)||t.tag)}function hi(t,e){return r(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function di(t,e){var n=t.cache,a=t.keys,r=t._vnode;for(var i in n){var o=n[i];if(o){var s=o.name;s&&!e(s)&&fi(n,i,a,r)}}}function fi(t,e,n,a){var r=t[e];!r||a&&r.tag===a.tag||r.componentInstance.$destroy(),t[e]=null,M(n,e)}Qr(ai),Yr(ai),Sa(ai),Ta(ai),Cn(ai);var pi=[String,RegExp,Array],vi={name:"keep-alive",abstract:!0,props:{include:pi,exclude:pi,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,a=t.vnodeToCache,r=t.keyToCache;if(a){var i=a.tag,o=a.componentInstance,s=a.componentOptions;e[r]={name:ui(s),tag:i,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&fi(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)fi(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){di(t,(function(t){return hi(e,t)}))})),this.$watch("exclude",(function(e){di(t,(function(t){return!hi(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Ln(t),n=e&&e.componentOptions;if(n){var a=ui(n),r=this,i=r.include,o=r.exclude;if(i&&(!a||!hi(i,a))||o&&a&&hi(o,a))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,M(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},mi={KeepAlive:vi};function bi(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:gr,extend:T,mergeOptions:Br,defineReactive:Dt},t.set=xt,t.delete=$t,t.nextTick=Xn,t.observable=function(t){return Et(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,T(t.options.components,mi),ri(t),ii(t),oi(t),ci(t)}bi(ai),Object.defineProperty(ai.prototype,"$isServer",{get:ut}),Object.defineProperty(ai.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ai,"FunctionalRenderContext",{value:or}),ai.version=ba;var gi=z("style,class"),zi=z("input,textarea,option,select,progress"),yi=function(t,e,n){return"value"===n&&zi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Mi=z("contenteditable,draggable,spellcheck"),wi=z("events,caret,typing,plaintext-only"),Vi=function(t,e){return Ii(e)||"false"===e?"false":"contenteditable"===t&&wi(e)?e:"true"},Hi=z("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Ai="http://www.w3.org/1999/xlink",Oi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ci=function(t){return Oi(t)?t.slice(6,t.length):""},Ii=function(t){return null==t||!1===t};function Bi(t){var e=t.data,n=t,a=t;while(o(a.componentInstance))a=a.componentInstance._vnode,a&&a.data&&(e=Si(a.data,e));while(o(n=n.parent))n&&n.data&&(e=Si(e,n.data));return Li(e.staticClass,e.class)}function Si(t,e){return{staticClass:ki(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Li(t,e){return o(t)||o(e)?ki(t,Pi(e)):""}function ki(t,e){return t?e?t+" "+e:t:e||""}function Pi(t){return Array.isArray(t)?Ti(t):h(t)?Fi(t):"string"===typeof t?t:""}function Ti(t){for(var e,n="",a=0,r=t.length;a<r;a++)o(e=Pi(t[a]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Fi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var _i={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ji=z("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ei=z("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Di=function(t){return ji(t)||Ei(t)};function xi(t){return Ei(t)?"svg":"math"===t?"math":void 0}var $i=Object.create(null);function Ni(t){if(!Q)return!0;if(Di(t))return!1;if(t=t.toLowerCase(),null!=$i[t])return $i[t];var e=document.createElement(t);return t.indexOf("-")>-1?$i[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:$i[t]=/HTMLUnknownElement/.test(e.toString())}var Ri=z("text,number,password,search,email,tel,url");function Ui(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Gi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Wi(t,e){return document.createElementNS(_i[t],e)}function qi(t){return document.createTextNode(t)}function Ki(t){return document.createComment(t)}function Ji(t,e,n){t.insertBefore(e,n)}function Zi(t,e){t.removeChild(e)}function Yi(t,e){t.appendChild(e)}function Xi(t){return t.parentNode}function Qi(t){return t.nextSibling}function to(t){return t.tagName}function eo(t,e){t.textContent=e}function no(t,e){t.setAttribute(e,"")}var ao=Object.freeze({__proto__:null,createElement:Gi,createElementNS:Wi,createTextNode:qi,createComment:Ki,insertBefore:Ji,removeChild:Zi,appendChild:Yi,parentNode:Xi,nextSibling:Qi,tagName:to,setTextContent:eo,setStyleScope:no}),ro={create:function(t,e){io(e)},update:function(t,e){t.data.ref!==e.data.ref&&(io(t,!0),io(e))},destroy:function(t){io(t,!0)}};function io(t,e){var n=t.data.ref;if(o(n)){var a=t.context,i=t.componentInstance||t.elm,s=e?null:i,l=e?void 0:i;if(u(n))xn(n,a,[s],a,"template ref function");else{var c=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Qt(n),f=a.$refs;if(h||d)if(c){var p=h?f[n]:n.value;e?r(p)&&M(p,i):r(p)?p.includes(i)||p.push(i):h?(f[n]=[i],oo(a,n,f[n])):n.value=[i]}else if(h){if(e&&f[n]!==i)return;f[n]=l,oo(a,n,s)}else if(d){if(e&&n.value!==i)return;n.value=s}else 0}}}function oo(t,e,n){var a=t._setupState;a&&V(a,e)&&(Qt(a[e])?a[e].value=n:a[e]=n)}var so=new gt("",{},[]),lo=["create","activate","update","remove","destroy"];function co(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&uo(t,e)||s(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function uo(t,e){if("input"!==t.tag)return!0;var n,a=o(n=t.data)&&o(n=n.attrs)&&n.type,r=o(n=e.data)&&o(n=n.attrs)&&n.type;return a===r||Ri(a)&&Ri(r)}function ho(t,e,n){var a,r,i={};for(a=e;a<=n;++a)r=t[a].key,o(r)&&(i[r]=a);return i}function fo(t){var e,n,a={},l=t.modules,u=t.nodeOps;for(e=0;e<lo.length;++e)for(a[lo[e]]=[],n=0;n<l.length;++n)o(l[n][lo[e]])&&a[lo[e]].push(l[n][lo[e]]);function h(t){return new gt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function p(t,e,n,a,r,i,l){if(o(t.elm)&&o(i)&&(t=i[l]=Mt(t)),t.isRootInsert=!r,!v(t,e,n,a)){var c=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),V(t),y(t,h,e),o(c)&&w(t,e),g(n,t.elm,a)):s(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,a)):(t.elm=u.createTextNode(t.text),g(n,t.elm,a))}}function v(t,e,n,a){var r=t.data;if(o(r)){var i=o(t.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(t,!1),o(t.componentInstance))return m(t,e),g(n,t.elm,a),s(i)&&b(t,e,n,a),!0}}function m(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,M(t)?(w(t,e),V(t)):(io(t),e.push(t))}function b(t,e,n,r){var i,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,o(i=s.data)&&o(i=i.transition)){for(i=0;i<a.activate.length;++i)a.activate[i](so,s);e.push(s);break}g(n,t.elm,r)}function g(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function y(t,e,n){if(r(e)){0;for(var a=0;a<e.length;++a)p(e[a],n,t.elm,null,!0,e,a)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function M(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function w(t,n){for(var r=0;r<a.create.length;++r)a.create[r](so,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(so,t),o(e.insert)&&n.push(t))}function V(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=La)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function H(t,e,n,a,r,i){for(;a<=r;++a)p(n[a],i,t,e,!1,n,a)}function A(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n){for(;e<=n;++e){var a=t[e];o(a)&&(o(a.tag)?(C(a),A(a)):f(a.elm))}}function C(t,e){if(o(e)||o(t.data)){var n,r=a.remove.length+1;for(o(e)?e.listeners+=r:e=d(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&C(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function I(t,e,n,a,r){var s,l,c,h,d=0,f=0,v=e.length-1,m=e[0],b=e[v],g=n.length-1,z=n[0],y=n[g],M=!r;while(d<=v&&f<=g)i(m)?m=e[++d]:i(b)?b=e[--v]:co(m,z)?(S(m,z,a,n,f),m=e[++d],z=n[++f]):co(b,y)?(S(b,y,a,n,g),b=e[--v],y=n[--g]):co(m,y)?(S(m,y,a,n,g),M&&u.insertBefore(t,m.elm,u.nextSibling(b.elm)),m=e[++d],y=n[--g]):co(b,z)?(S(b,z,a,n,f),M&&u.insertBefore(t,b.elm,m.elm),b=e[--v],z=n[++f]):(i(s)&&(s=ho(e,d,v)),l=o(z.key)?s[z.key]:B(z,e,d,v),i(l)?p(z,a,t,m.elm,!1,n,f):(c=e[l],co(c,z)?(S(c,z,a,n,f),e[l]=void 0,M&&u.insertBefore(t,c.elm,m.elm)):p(z,a,t,m.elm,!1,n,f)),z=n[++f]);d>v?(h=i(n[g+1])?null:n[g+1].elm,H(t,h,n,f,g,a)):f>g&&O(e,d,v)}function B(t,e,n,a){for(var r=n;r<a;r++){var i=e[r];if(o(i)&&co(t,i))return r}}function S(t,e,n,r,l,c){if(t!==e){o(e.elm)&&o(r)&&(e=r[l]=Mt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(o(f)&&M(e)){for(d=0;d<a.update.length;++d)a.update[d](t,e);o(d=f.hook)&&o(d=d.update)&&d(t,e)}i(e.text)?o(p)&&o(v)?p!==v&&I(h,p,v,n,c):o(v)?(o(t.text)&&u.setTextContent(h,""),H(h,null,v,0,v.length-1,n)):o(p)?O(p,0,p.length-1):o(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(t,e)}}}function L(t,e,n){if(s(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var a=0;a<e.length;++a)e[a].data.hook.insert(e[a])}var k=z("attrs,class,staticClass,staticStyle,key");function P(t,e,n,a){var r,i=e.tag,l=e.data,c=e.children;if(a=a||l&&l.pre,e.elm=t,s(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(l)&&(o(r=l.hook)&&o(r=r.init)&&r(e,!0),o(r=e.componentInstance)))return m(e,n),!0;if(o(i)){if(o(c))if(t.hasChildNodes())if(o(r=l)&&o(r=r.domProps)&&o(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<c.length;d++){if(!h||!P(h,c[d],n,a)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,c,n);if(o(l)){var f=!1;for(var p in l)if(!k(p)){f=!0,w(e,n);break}!f&&l["class"]&&ya(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,r){if(!i(e)){var l=!1,c=[];if(i(t))l=!0,p(e,c);else{var d=o(t.nodeType);if(!d&&co(t,e))S(t,e,c,null,null,r);else{if(d){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),s(n)&&P(t,e,c))return L(e,c,!0),t;t=h(t)}var f=t.elm,v=u.parentNode(f);if(p(e,c,f._leaveCb?null:v,u.nextSibling(f)),o(e.parent)){var m=e.parent,b=M(e);while(m){for(var g=0;g<a.destroy.length;++g)a.destroy[g](m);if(m.elm=e.elm,b){for(var z=0;z<a.create.length;++z)a.create[z](so,m);var y=m.data.hook.insert;if(y.merged)for(var w=1;w<y.fns.length;w++)y.fns[w]()}else io(m);m=m.parent}}o(v)?O([t],0,0):o(t.tag)&&A(t)}}return L(e,c,l),e.elm}o(t)&&A(t)}}var po={create:vo,update:vo,destroy:function(t){vo(t,so)}};function vo(t,e){(t.data.directives||e.data.directives)&&mo(t,e)}function mo(t,e){var n,a,r,i=t===so,o=e===so,s=go(t.data.directives,t.context),l=go(e.data.directives,e.context),c=[],u=[];for(n in l)a=s[n],r=l[n],a?(r.oldValue=a.value,r.oldArg=a.arg,yo(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(yo(r,"bind",e,t),r.def&&r.def.inserted&&c.push(r));if(c.length){var h=function(){for(var n=0;n<c.length;n++)yo(c[n],"inserted",e,t)};i?De(e,"insert",h):h()}if(u.length&&De(e,"postpatch",(function(){for(var n=0;n<u.length;n++)yo(u[n],"componentUpdated",e,t)})),!i)for(n in s)l[n]||yo(s[n],"unbind",t,t,o)}var bo=Object.create(null);function go(t,e){var n,a,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++){if(a=t[n],a.modifiers||(a.modifiers=bo),r[zo(a)]=a,e._setupState&&e._setupState.__sfc){var i=a.def||Sr(e,"_setupState","v-"+a.name);a.def="function"===typeof i?{bind:i,update:i}:i}a.def=a.def||Sr(e.$options,"directives",a.name,!0)}return r}function zo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function yo(t,e,n,a,r){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,a,r)}catch(rl){Dn(rl,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var Mo=[ro,po];function wo(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var a,r,l,c=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(a in(o(h.__ob__)||s(h._v_attr_proxy))&&(h=e.data.attrs=T({},h)),h)r=h[a],l=u[a],l!==r&&Vo(c,a,r,e.data.pre);for(a in(et||at)&&h.value!==u.value&&Vo(c,"value",h.value),u)i(h[a])&&(Oi(a)?c.removeAttributeNS(Ai,Ci(a)):Mi(a)||c.removeAttribute(a))}}function Vo(t,e,n,a){a||t.tagName.indexOf("-")>-1?Ho(t,e,n):Hi(e)?Ii(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Mi(e)?t.setAttribute(e,Vi(e,n)):Oi(e)?Ii(n)?t.removeAttributeNS(Ai,Ci(e)):t.setAttributeNS(Ai,e,n):Ho(t,e,n)}function Ho(t,e,n){if(Ii(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var a=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",a)};t.addEventListener("input",a),t.__ieph=!0}t.setAttribute(e,n)}}var Ao={create:wo,update:wo};function Oo(t,e){var n=e.elm,a=e.data,r=t.data;if(!(i(a.staticClass)&&i(a.class)&&(i(r)||i(r.staticClass)&&i(r.class)))){var s=Bi(e),l=n._transitionClasses;o(l)&&(s=ki(s,Pi(l))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Co,Io={create:Oo,update:Oo},Bo="__r",So="__c";function Lo(t){if(o(t[Bo])){var e=et?"change":"input";t[e]=[].concat(t[Bo],t[e]||[]),delete t[Bo]}o(t[So])&&(t.change=[].concat(t[So],t.change||[]),delete t[So])}function ko(t,e,n){var a=Co;return function r(){var i=e.apply(null,arguments);null!==i&&Fo(t,r,n,a)}}var Po=Un&&!(ot&&Number(ot[1])<=53);function To(t,e,n,a){if(Po){var r=Ka,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}Co.addEventListener(t,e,lt?{capture:n,passive:a}:n)}function Fo(t,e,n,a){(a||Co).removeEventListener(t,e._wrapper||e,n)}function _o(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},a=t.data.on||{};Co=e.elm||t.elm,Lo(n),Ee(n,a,To,Fo,ko,e.context),Co=void 0}}var jo,Eo={create:_o,update:_o,destroy:function(t){return _o(t,so)}};function Do(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,a,r=e.elm,l=t.data.domProps||{},c=e.data.domProps||{};for(n in(o(c.__ob__)||s(c._v_attr_proxy))&&(c=e.data.domProps=T({},c)),l)n in c||(r[n]="");for(n in c){if(a=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),a===l[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){r._value=a;var u=i(a)?"":String(a);xo(r,u)&&(r.value=u)}else if("innerHTML"===n&&Ei(r.tagName)&&i(r.innerHTML)){jo=jo||document.createElement("div"),jo.innerHTML="<svg>".concat(a,"</svg>");var h=jo.firstChild;while(r.firstChild)r.removeChild(r.firstChild);while(h.firstChild)r.appendChild(h.firstChild)}else if(a!==l[n])try{r[n]=a}catch(rl){}}}}function xo(t,e){return!t.composing&&("OPTION"===t.tagName||$o(t,e)||No(t,e))}function $o(t,e){var n=!0;try{n=document.activeElement!==t}catch(rl){}return n&&t.value!==e}function No(t,e){var n=t.value,a=t._vModifiers;if(o(a)){if(a.number)return g(n)!==g(e);if(a.trim)return n.trim()!==e.trim()}return n!==e}var Ro={create:Do,update:Do},Uo=H((function(t){var e={},n=/;(?![^(]*\))/g,a=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(a);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Go(t){var e=Wo(t.style);return t.staticStyle?T(t.staticStyle,e):e}function Wo(t){return Array.isArray(t)?F(t):"string"===typeof t?Uo(t):t}function qo(t,e){var n,a={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=Go(r.data))&&T(a,n)}(n=Go(t.data))&&T(a,n);var i=t;while(i=i.parent)i.data&&(n=Go(i.data))&&T(a,n);return a}var Ko,Jo=/^--/,Zo=/\s*!important$/,Yo=function(t,e,n){if(Jo.test(e))t.style.setProperty(e,n);else if(Zo.test(n))t.style.setProperty(B(e),n.replace(Zo,""),"important");else{var a=Qo(e);if(Array.isArray(n))for(var r=0,i=n.length;r<i;r++)t.style[a]=n[r];else t.style[a]=n}},Xo=["Webkit","Moz","ms"],Qo=H((function(t){if(Ko=Ko||document.createElement("div").style,t=O(t),"filter"!==t&&t in Ko)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Xo.length;n++){var a=Xo[n]+e;if(a in Ko)return a}}));function ts(t,e){var n=e.data,a=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(a.staticStyle)&&i(a.style))){var r,s,l=e.elm,c=a.staticStyle,u=a.normalizedStyle||a.style||{},h=c||u,d=Wo(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?T({},d):d;var f=qo(e,!0);for(s in h)i(f[s])&&Yo(l,s,"");for(s in f)r=f[s],r!==h[s]&&Yo(l,s,null==r?"":r)}}var es={create:ts,update:ts},ns=/\s+/;function as(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ns).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function rs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ns).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),a=" "+e+" ";while(n.indexOf(a)>=0)n=n.replace(a," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function is(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&T(e,os(t.name||"v")),T(e,t),e}return"string"===typeof t?os(t):void 0}}var os=H((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),ss=Q&&!nt,ls="transition",cs="animation",us="transition",hs="transitionend",ds="animation",fs="animationend";ss&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(us="WebkitTransition",hs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ds="WebkitAnimation",fs="webkitAnimationEnd"));var ps=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function vs(t){ps((function(){ps(t)}))}function ms(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),as(t,e))}function bs(t,e){t._transitionClasses&&M(t._transitionClasses,e),rs(t,e)}function gs(t,e,n){var a=ys(t,e),r=a.type,i=a.timeout,o=a.propCount;if(!r)return n();var s=r===ls?hs:fs,l=0,c=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),i+1),t.addEventListener(s,u)}var zs=/\b(transform|all)(,|$)/;function ys(t,e){var n,a=window.getComputedStyle(t),r=(a[us+"Delay"]||"").split(", "),i=(a[us+"Duration"]||"").split(", "),o=Ms(r,i),s=(a[ds+"Delay"]||"").split(", "),l=(a[ds+"Duration"]||"").split(", "),c=Ms(s,l),u=0,h=0;e===ls?o>0&&(n=ls,u=o,h=i.length):e===cs?c>0&&(n=cs,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?ls:cs:null,h=n?n===ls?i.length:l.length:0);var d=n===ls&&zs.test(a[us+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Ms(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return ws(e)+ws(t[n])})))}function ws(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Vs(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var a=is(t.data.transition);if(!i(a)&&!o(n._enterCb)&&1===n.nodeType){var r=a.css,s=a.type,l=a.enterClass,c=a.enterToClass,d=a.enterActiveClass,f=a.appearClass,p=a.appearToClass,v=a.appearActiveClass,m=a.beforeEnter,b=a.enter,z=a.afterEnter,y=a.enterCancelled,M=a.beforeAppear,w=a.appear,V=a.afterAppear,H=a.appearCancelled,A=a.duration,O=La,C=La.$vnode;while(C&&C.parent)O=C.context,C=C.parent;var I=!O._isMounted||!t.isRootInsert;if(!I||w||""===w){var B=I&&f?f:l,S=I&&v?v:d,L=I&&p?p:c,k=I&&M||m,P=I&&u(w)?w:b,T=I&&V||z,F=I&&H||y,_=g(h(A)?A.enter:A);0;var j=!1!==r&&!nt,E=Os(P),D=n._enterCb=$((function(){j&&(bs(n,L),bs(n,S)),D.cancelled?(j&&bs(n,B),F&&F(n)):T&&T(n),n._enterCb=null}));t.data.show||De(t,"insert",(function(){var e=n.parentNode,a=e&&e._pending&&e._pending[t.key];a&&a.tag===t.tag&&a.elm._leaveCb&&a.elm._leaveCb(),P&&P(n,D)})),k&&k(n),j&&(ms(n,B),ms(n,S),vs((function(){bs(n,B),D.cancelled||(ms(n,L),E||(As(_)?setTimeout(D,_):gs(n,s,D)))}))),t.data.show&&(e&&e(),P&&P(n,D)),j||E||D()}}}function Hs(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var a=is(t.data.transition);if(i(a)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var r=a.css,s=a.type,l=a.leaveClass,c=a.leaveToClass,u=a.leaveActiveClass,d=a.beforeLeave,f=a.leave,p=a.afterLeave,v=a.leaveCancelled,m=a.delayLeave,b=a.duration,z=!1!==r&&!nt,y=Os(f),M=g(h(b)?b.leave:b);0;var w=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),z&&(bs(n,c),bs(n,u)),w.cancelled?(z&&bs(n,l),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(V):V()}function V(){w.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),z&&(ms(n,l),ms(n,u),vs((function(){bs(n,l),w.cancelled||(ms(n,c),y||(As(M)?setTimeout(w,M):gs(n,s,w)))}))),f&&f(n,w),z||y||w())}}function As(t){return"number"===typeof t&&!isNaN(t)}function Os(t){if(i(t))return!1;var e=t.fns;return o(e)?Os(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Cs(t,e){!0!==e.data.show&&Vs(e)}var Is=Q?{create:Cs,activate:Cs,remove:function(t,e){!0!==t.data.show?Hs(t,e):e()}}:{},Bs=[Ao,Io,Eo,Ro,es,Is],Ss=Bs.concat(Mo),Ls=fo({nodeOps:ao,modules:Ss});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ds(t,"input")}));var ks={inserted:function(t,e,n,a){"select"===n.tag?(a.elm&&!a.elm._vOptions?De(n,"postpatch",(function(){ks.componentUpdated(t,e,n)})):Ps(t,e,n.context),t._vOptions=[].map.call(t.options,_s)):("textarea"===n.tag||Ri(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",js),t.addEventListener("compositionend",Es),t.addEventListener("change",Es),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Ps(t,e,n.context);var a=t._vOptions,r=t._vOptions=[].map.call(t.options,_s);if(r.some((function(t,e){return!D(t,a[e])}))){var i=t.multiple?e.value.some((function(t){return Fs(t,r)})):e.value!==e.oldValue&&Fs(e.value,r);i&&Ds(t,"change")}}}};function Ps(t,e,n){Ts(t,e,n),(et||at)&&setTimeout((function(){Ts(t,e,n)}),0)}function Ts(t,e,n){var a=e.value,r=t.multiple;if(!r||Array.isArray(a)){for(var i,o,s=0,l=t.options.length;s<l;s++)if(o=t.options[s],r)i=x(a,_s(o))>-1,o.selected!==i&&(o.selected=i);else if(D(_s(o),a))return void(t.selectedIndex!==s&&(t.selectedIndex=s));r||(t.selectedIndex=-1)}}function Fs(t,e){return e.every((function(e){return!D(e,t)}))}function _s(t){return"_value"in t?t._value:t.value}function js(t){t.target.composing=!0}function Es(t){t.target.composing&&(t.target.composing=!1,Ds(t.target,"input"))}function Ds(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function xs(t){return!t.componentInstance||t.data&&t.data.transition?t:xs(t.componentInstance._vnode)}var $s={bind:function(t,e,n){var a=e.value;n=xs(n);var r=n.data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;a&&r?(n.data.show=!0,Vs(n,(function(){t.style.display=i}))):t.style.display=a?i:"none"},update:function(t,e,n){var a=e.value,r=e.oldValue;if(!a!==!r){n=xs(n);var i=n.data&&n.data.transition;i?(n.data.show=!0,a?Vs(n,(function(){t.style.display=t.__vOriginalDisplay})):Hs(n,(function(){t.style.display="none"}))):t.style.display=a?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,a,r){r||(t.style.display=t.__vOriginalDisplay)}},Ns={model:ks,show:$s},Rs={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Us(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Us(Ln(e.children)):t}function Gs(t){var e={},n=t.$options;for(var a in n.propsData)e[a]=t[a];var r=n._parentListeners;for(var a in r)e[O(a)]=r[a];return e}function Ws(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function qs(t){while(t=t.parent)if(t.data.transition)return!0}function Ks(t,e){return e.key===t.key&&e.tag===t.tag}var Js=function(t){return t.tag||un(t)},Zs=function(t){return"show"===t.name},Ys={name:"transition",props:Rs,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Js),n.length)){0;var a=this.mode;0;var r=n[0];if(qs(this.$vnode))return r;var i=Us(r);if(!i)return r;if(this._leaving)return Ws(t,r);var o="__transition-".concat(this._uid,"-");i.key=null==i.key?i.isComment?o+"comment":o+i.tag:c(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var s=(i.data||(i.data={})).transition=Gs(this),l=this._vnode,u=Us(l);if(i.data.directives&&i.data.directives.some(Zs)&&(i.data.show=!0),u&&u.data&&!Ks(i,u)&&!un(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=T({},s);if("out-in"===a)return this._leaving=!0,De(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Ws(t,r);if("in-out"===a){if(un(i))return l;var d,f=function(){d()};De(s,"afterEnter",f),De(s,"enterCancelled",f),De(h,"delayLeave",(function(t){d=t}))}}return r}}},Xs=T({tag:String,moveClass:String},Rs);delete Xs.mode;var Qs={props:Xs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,a){var r=ka(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,a)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),a=this.prevChildren=this.children,r=this.$slots.default||[],i=this.children=[],o=Gs(this),s=0;s<r.length;s++){var l=r[s];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))i.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(a){var c=[],u=[];for(s=0;s<a.length;s++){l=a[s];l.data.transition=o,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):u.push(l)}this.kept=t(e,null,c),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(tl),t.forEach(el),t.forEach(nl),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,a=n.style;ms(n,e),a.transform=a.WebkitTransform=a.transitionDuration="",n.addEventListener(hs,n._moveCb=function t(a){a&&a.target!==n||a&&!/transform$/.test(a.propertyName)||(n.removeEventListener(hs,t),n._moveCb=null,bs(n,e))})}})))},methods:{hasMove:function(t,e){if(!ss)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){rs(n,t)})),as(n,e),n.style.display="none",this.$el.appendChild(n);var a=ys(n);return this.$el.removeChild(n),this._hasMove=a.hasTransform}}};function tl(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function el(t){t.data.newPos=t.elm.getBoundingClientRect()}function nl(t){var e=t.data.pos,n=t.data.newPos,a=e.left-n.left,r=e.top-n.top;if(a||r){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate(".concat(a,"px,").concat(r,"px)"),i.transitionDuration="0s"}}var al={Transition:Ys,TransitionGroup:Qs};ai.config.mustUseProp=yi,ai.config.isReservedTag=Di,ai.config.isReservedAttr=gi,ai.config.getTagNamespace=xi,ai.config.isUnknownElement=Ni,T(ai.options.directives,Ns),T(ai.options.components,al),ai.prototype.__patch__=Q?Ls:_,ai.prototype.$mount=function(t,e){return t=t&&Q?Ui(t):void 0,Fa(this,t,e)},Q&&setTimeout((function(){W.devtools&&ht&&ht.emit("init",ai)}),0)},629:function(t,e,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function a(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:a});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[a].concat(t.init):a,n.call(this,t)}}function a(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,{Se:function(){return F},nv:function(){return _},rn:function(){return P}});var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},i=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}function s(t,e){return t.filter(e)[0]}function l(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=s(e,(function(e){return e.original===t}));if(n)return n.copy;var a=Array.isArray(t)?[]:{};return e.push({original:t,copy:a}),Object.keys(t).forEach((function(n){a[n]=l(t[n],e)})),a}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){c(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var v=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var a in n.modules){if(!e.getChild(a))return void 0;m(t.concat(a),e.getChild(a),n.modules[a])}}v.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},v.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},v.prototype.update=function(t){m([],this.root,t)},v.prototype.register=function(t,e,n){var a=this;void 0===n&&(n=!0);var r=new f(e,n);if(0===t.length)this.root=r;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],r)}e.modules&&c(e.modules,(function(e,r){a.register(t.concat(r),e,n)}))},v.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],a=e.getChild(n);a&&a.runtime&&e.removeChild(n)},v.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var b;var g=function(t){var e=this;void 0===t&&(t={}),!b&&"undefined"!==typeof window&&window.Vue&&k(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var a=t.strict;void 0===a&&(a=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new b,this._makeLocalGettersCache=Object.create(null);var r=this,i=this,s=i.dispatch,l=i.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,n){return l.call(r,t,e,n)},this.strict=a;var c=this._modules.root.state;V(this,c,[],this._modules.root),w(this,c),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:b.config.devtools;u&&o(this)},z={state:{configurable:!0}};function y(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function M(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;V(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var a=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};c(r,(function(e,n){i[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=b.config.silent;b.config.silent=!0,t._vm=new b({data:{$$state:e},computed:i}),b.config.silent=o,t.strict&&B(t),a&&(n&&t._withCommit((function(){a._data.$$state=null})),b.nextTick((function(){return a.$destroy()})))}function V(t,e,n,a,r){var i=!n.length,o=t._modules.getNamespace(n);if(a.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=a),!i&&!r){var s=S(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit((function(){b.set(s,l,a.state)}))}var c=a.context=H(t,o,n);a.forEachMutation((function(e,n){var a=o+n;O(t,a,e,c)})),a.forEachAction((function(e,n){var a=e.root?n:o+n,r=e.handler||e;C(t,a,r,c)})),a.forEachGetter((function(e,n){var a=o+n;I(t,a,e,c)})),a.forEachChild((function(a,i){V(t,e,n.concat(i),a,r)}))}function H(t,e,n){var a=""===e,r={dispatch:a?t.dispatch:function(n,a,r){var i=L(n,a,r),o=i.payload,s=i.options,l=i.type;return s&&s.root||(l=e+l),t.dispatch(l,o)},commit:a?t.commit:function(n,a,r){var i=L(n,a,r),o=i.payload,s=i.options,l=i.type;s&&s.root||(l=e+l),t.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:a?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return S(t.state,n)}}}),r}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},a=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,a)===e){var i=r.slice(a);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function O(t,e,n,a){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,a.state,e)}))}function C(t,e,n,a){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:a.dispatch,commit:a.commit,getters:a.getters,state:a.state,rootGetters:t.getters,rootState:t.state},e);return h(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function I(t,e,n,a){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(a.state,a.getters,t.state,t.getters)})}function B(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function S(t,e){return e.reduce((function(t,e){return t[e]}),t)}function L(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function k(t){b&&t===b||(b=t,a(b))}z.state.get=function(){return this._vm._data.$$state},z.state.set=function(t){0},g.prototype.commit=function(t,e,n){var a=this,r=L(t,e,n),i=r.type,o=r.payload,s=(r.options,{type:i,payload:o}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(s,a.state)})))},g.prototype.dispatch=function(t,e){var n=this,a=L(t,e),r=a.type,i=a.payload,o={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var l=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){l.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},g.prototype.subscribe=function(t,e){return y(t,this._subscribers,e)},g.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return y(n,this._actionSubscribers,e)},g.prototype.watch=function(t,e,n){var a=this;return this._watcherVM.$watch((function(){return t(a.state,a.getters)}),e,n)},g.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},g.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),V(this,this.state,t,this._modules.get(t),n.preserveState),w(this,this.state)},g.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=S(e.state,t.slice(0,-1));b.delete(n,t[t.length-1])})),M(this)},g.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},g.prototype.hotUpdate=function(t){this._modules.update(t),M(this,!0)},g.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(g.prototype,z);var P=x((function(t,e){var n={};return E(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var a=$(this.$store,"mapState",t);if(!a)return;e=a.context.state,n=a.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[a].vuex=!0})),n})),T=x((function(t,e){var n={};return E(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var a=this.$store.commit;if(t){var i=$(this.$store,"mapMutations",t);if(!i)return;a=i.context.commit}return"function"===typeof r?r.apply(this,[a].concat(e)):a.apply(this.$store,[r].concat(e))}})),n})),F=x((function(t,e){var n={};return E(e).forEach((function(e){var a=e.key,r=e.val;r=t+r,n[a]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[r]},n[a].vuex=!0})),n})),_=x((function(t,e){var n={};return E(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var a=this.$store.dispatch;if(t){var i=$(this.$store,"mapActions",t);if(!i)return;a=i.context.dispatch}return"function"===typeof r?r.apply(this,[a].concat(e)):a.apply(this.$store,[r].concat(e))}})),n})),j=function(t){return{mapState:P.bind(null,t),mapGetters:F.bind(null,t),mapMutations:T.bind(null,t),mapActions:_.bind(null,t)}};function E(t){return D(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function D(t){return Array.isArray(t)||u(t)}function x(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var a=t._modulesNamespaceMap[n];return a}function N(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var a=t.transformer;void 0===a&&(a=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var c=t.logActions;void 0===c&&(c=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=l(t.state);"undefined"!==typeof u&&(s&&t.subscribe((function(t,i){var o=l(i);if(n(t,h,o)){var s=G(),c=r(t),d="mutation "+t.type+s;R(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",a(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",a(o)),U(u)}h=o})),c&&t.subscribeAction((function(t,n){if(i(t,n)){var a=G(),r=o(t),s="action "+t.type+a;R(u,s,e),u.log("%c action","color: #03A9F4; font-weight: bold",r),U(u)}})))}}function R(t,e,n){var a=n?t.groupCollapsed:t.group;try{a.call(t,e)}catch(r){t.log(e)}}function U(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function G(){var t=new Date;return" @ "+q(t.getHours(),2)+":"+q(t.getMinutes(),2)+":"+q(t.getSeconds(),2)+"."+q(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function q(t,e){return W("0",e-t.toString().length)+t}var K={Store:g,install:k,version:"3.6.2",mapState:P,mapMutations:T,mapGetters:F,mapActions:_,createNamespacedHelpers:j,createLogger:N};e["ZP"]=K},5816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return vt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return bt},ZF:function(){return mt},KN:function(){return gt}});var a=n(8463),r=n(3333),i=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let s,l;function c(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const a=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(w(t.result)),a()},i=()=>{n(t.error),a()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),v.set(e,t),e}function b(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const a=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),a()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function z(t){g=t(g)}function y(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(V(this),e),w(h.get(this))}:function(...e){return w(t.apply(V(this),e))}:function(e,...n){const a=t.call(V(this),e,...n);return f.set(a,e.sort?e.sort():[e]),w(a)}}function M(t){return"function"===typeof t?y(t):(t instanceof IDBTransaction&&b(t),o(t,c())?new Proxy(t,g):t)}function w(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=M(t);return e!==t&&(p.set(t,e),v.set(e,t)),e}const V=t=>v.get(t);function H(t,e,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),s=w(o);return a&&o.addEventListener("upgradeneeded",(t=>{a(w(o.result),t.oldVersion,t.newVersion,w(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}const A=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],C=new Map;function I(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=O.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!A.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return C.set(e,i),i}z((t=>({...t,get:(e,n,a)=>I(e,n)||t.get(e,n,a),has:(e,n)=>!!I(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(S(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function S(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const L="@firebase/app",k="0.9.7",P=new r.Yd("@firebase/app"),T="@firebase/app-compat",F="@firebase/analytics-compat",_="@firebase/analytics",j="@firebase/app-check-compat",E="@firebase/app-check",D="@firebase/auth",x="@firebase/auth-compat",$="@firebase/database",N="@firebase/database-compat",R="@firebase/functions",U="@firebase/functions-compat",G="@firebase/installations",W="@firebase/installations-compat",q="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",Z="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Q="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",at="firebase",rt="9.19.1",it="[DEFAULT]",ot={[L]:"fire-core",[T]:"fire-core-compat",[_]:"fire-analytics",[F]:"fire-analytics-compat",[E]:"fire-app-check",[j]:"fire-app-check-compat",[D]:"fire-auth",[x]:"fire-auth-compat",[$]:"fire-rtdb",[N]:"fire-rtdb-compat",[R]:"fire-fn",[U]:"fire-fn-compat",[G]:"fire-iid",[W]:"fire-iid-compat",[q]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[Z]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Q]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[at]:"fire-js-all"},st=new Map,lt=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){P.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(lt.has(e))return P.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of st.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new i.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=rt;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw ft.create("no-options");const s=st.get(o);if(s){if((0,i.vZ)(n,s.options)&&(0,i.vZ)(r,s.config))return s;throw ft.create("duplicate-app",{appName:o})}const l=new a.H0(o);for(const a of lt.values())l.addComponent(a);const c=new pt(n,r,l);return st.set(o,c),c}function bt(t=it){const e=st.get(t);if(!e&&t===it)return mt();if(!e)throw ft.create("no-app",{appName:t});return e}function gt(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void P.warn(t.join(" "))}ut(new a.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zt="firebase-heartbeat-database",yt=1,Mt="firebase-heartbeat-store";let wt=null;function Vt(){return wt||(wt=H(zt,yt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),wt}async function Ht(t){try{const e=await Vt();return e.transaction(Mt).objectStore(Mt).get(Ot(t))}catch(e){if(e instanceof i.ZR)P.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});P.warn(t.message)}}}async function At(t,e){try{const n=await Vt(),a=n.transaction(Mt,"readwrite"),r=a.objectStore(Mt);return await r.put(e,Ot(t)),a.done}catch(n){if(n instanceof i.ZR)P.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1024,It=2592e6;class Bt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new kt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=St();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=It})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=St(),{heartbeatsToSend:e,unsentEntries:n}=Lt(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function St(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Ct){const n=[];let a=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pt(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class kt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ht(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){ut(new a.wA("platform-logger",(t=>new B(t)),"PRIVATE")),ut(new a.wA("heartbeat",(t=>new Bt(t)),"PRIVATE")),gt(L,k,t),gt(L,k,"esm2017"),gt("fire-js","")}Tt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return r}});var a=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),a=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:a});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(a)}return a}onInit(t,e){var n;const a=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&t(i,a),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(a){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(a){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===i?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const a=(new Date).toISOString(),r=s[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${a}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return a.ZF}});var a=n(5816),r="firebase",i="9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a.KN)(r,i,"app")},1024:function(t,e,n){"use strict";n.d(e,{_O:function(){return ee},hJ:function(){return ne},Xb:function(){return pe},v0:function(){return Ba},e5:function(){return ve},rh:function(){return yn},w7:function(){return ge}});var a=n(4444),r=n(5816),i=n(3333);function o(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n}Object.create;Object.create;var s=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new a.LL("auth","Firebase",l()),h=new i.Yd("@firebase/auth");function d(t,...e){h.logLevel<=i["in"].ERROR&&h.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw b(t,...e)}function p(t,...e){return b(t,...e)}function v(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),i=new a.LL("auth","Firebase",r);return i.create(e,{appName:t.name})}function m(t,e,n){const a=n;if(!(e instanceof a))throw a.name!==e.constructor.name&&f(t,"argument-error"),v(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(t,...e){if("string"!==typeof t){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw b(e,...n)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function y(t,e){t||z(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function w(t){y(t instanceof Function,"Expected a class definition");let e=M.get(t);return e?(y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const i=n.initialize({options:e});return i}function H(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],a=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function O(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,a.ru)()||"connection"in navigator))||navigator.onLine}function B(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,y(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,a.uI)()||(0,a.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},T=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _(t,e,n,r,i={}){return j(t,i,(async()=>{let i={},o={};r&&("GET"===e?o=r:i={body:JSON.stringify(r)});const s=(0,a.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),k.fetch()(D(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))}))}async function j(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),e);try{const e=new x(t),a=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw $(t,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const e=a.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw $(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw $(t,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,s,o);f(t,s)}}catch(i){if(i instanceof a.ZR)throw i;f(t,"network-request-failed",{message:String(i)})}}async function E(t,e,n,a,r={}){const i=await _(t,e,n,a,r);return"mfaPendingCredential"in i&&f(t,"multi-factor-auth-required",{_serverResponse:i}),i}function D(t,e,n,a){const r=`${e}${n}?${a}`;return t.config.emulator?L(t.config,r):`${t.config.apiScheme}://${r}`}class x{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),T.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const r=p(t,e,a);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(t,e){return _(t,"POST","/v1/accounts:delete",e)}async function R(t,e){return _(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e=!1){const n=(0,a.m9)(t),r=await n.getIdToken(e),i=q(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:r,authTime:U(W(i.auth_time)),issuedAtTime:U(W(i.iat)),expirationTime:U(W(i.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(t){return 1e3*Number(t)}function q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,a.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function K(t){const e=q(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof a.ZR&&Z(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Z({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,a=await t.getIdToken(),r=await J(t,R(n,{idToken:a}));g(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?nt(i.providerUserInfo):[],s=et(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!l&&c,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tt(t){const e=(0,a.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e){const n=await j(t,{},(async()=>{const n=(0,a.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=D(t,r,"/v1/token",`key=${i}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:a,expiresIn:r}=await at(t,e);this.updateTokensAndExpiration(n,a,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:a,expirationTime:r}=e,i=new rt;return n&&(g("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),a&&(g("string"===typeof a,"internal-error",{appName:t}),i.accessToken=a),r&&(g("number"===typeof r,"internal-error",{appName:t}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return z("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:a}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new X(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await J(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return G(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await J(this,N(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,a,r,i,o,s,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(a=e.email)&&void 0!==a?a:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,b=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:z,emailVerified:y,isAnonymous:M,providerData:w,stsTokenManager:V}=e;g(z&&V,t,"internal-error");const H=rt.fromJSON(this.name,V);g("string"===typeof z,t,"internal-error"),it(u,t.name),it(h,t.name),g("boolean"===typeof y,t,"internal-error"),g("boolean"===typeof M,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(v,t.name),it(m,t.name),it(b,t.name);const A=new ot({uid:z,auth:t,email:h,emailVerified:y,displayName:u,isAnonymous:M,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:H,createdAt:m,lastLoginAt:b});return w&&Array.isArray(w)&&(A.providerData=w.map((t=>Object.assign({},t)))),v&&(A._redirectEventId=v),A}static async _fromIdTokenResponse(t,e,n=!1){const a=new rt;a.updateFromServerResponse(e);const r=new ot({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:n});return await Q(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const lt=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:a,name:r}=this.auth;this.fullUserKey=ct(this.userKey,a.apiKey,r),this.fullPersistenceKey=ct("persistence",a.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(w(lt),t,n);const a=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=a[0]||w(lt);const i=ct(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(i);if(e){const n=ot._fromJSON(t,e);c!==r&&(o=n),r=c;break}}catch(l){}const s=a.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],o&&await r._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(i)}catch(l){}}))),new ut(r,t,n)):new ut(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bt(e))return"Blackberry";if(gt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function dt(t=(0,a.z$)()){return/firefox\//i.test(t)}function ft(t=(0,a.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,a.z$)()){return/crios\//i.test(t)}function vt(t=(0,a.z$)()){return/iemobile/i.test(t)}function mt(t=(0,a.z$)()){return/android/i.test(t)}function bt(t=(0,a.z$)()){return/blackberry/i.test(t)}function gt(t=(0,a.z$)()){return/webos/i.test(t)}function zt(t=(0,a.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yt(t=(0,a.z$)()){var e;return zt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Mt(){return(0,a.w1)()&&10===document.documentMode}function wt(t=(0,a.z$)()){return zt(t)||mt(t)||gt(t)||bt(t)||/windows phone/i.test(t)||vt(t)}function Vt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e=[]){let n;switch(t){case"Browser":n=ht((0,a.z$)());break;case"Worker":n=`${ht((0,a.z$)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,a)=>{try{const a=t(e);n(a)}catch(r){a(r)}}));n.onAbort=e,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(a){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new It(this),this.idTokenSubscription=new It(this),this.beforeStateQueue=new At(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(a=this.currentUser)||void 0===a?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let a=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===a||void 0===a?void 0:a._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(a=o.user,r=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(a)}catch(i){a=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=B()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,a.m9)(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new a.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,a){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,a):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ht(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ct(t){return(0,a.m9)(t)}class It{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,a.ne)((t=>this.observer=t))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Bt(t,e,n){const a=Ct(t);g(a._canInitEmulator,a,"emulator-config-failed"),g(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),i=St(e),{host:o,port:s}=Lt(e),l=null===s?"":`:${s}`;a.config.emulator={url:`${i}//${o}${l}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Pt()}function St(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lt(t){const e=St(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(a);if(r){const t=r[1];return{host:t,port:kt(a.substr(t.length+1))}}{const[t,e]=a.split(":");return{host:t,port:kt(e)}}}function kt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return z("not implemented")}_getIdTokenResponse(t){return z("not implemented")}_linkToIdToken(t,e){return z("not implemented")}_getReauthenticationResolver(t){return z("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return _(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(t,e){return E(t,"POST","/v1/accounts:signInWithPassword",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jt(t,e){return E(t,"POST","/v1/accounts:signInWithEmailLink",F(t,e))}async function Et(t,e){return E(t,"POST","/v1/accounts:signInWithEmailLink",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Tt{constructor(t,e,n,a=null){super("password",n),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return _t(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ft(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Et(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return E(t,"POST","/v1/accounts:signInWithIdp",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="http://localhost";class Nt extends Tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Nt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:a}=e,r=o(e,["providerId","signInMethod"]);if(!n||!a)return null;const i=new Nt(n,a);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(t){const e=this.buildRequest();return xt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,xt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,xt(t,e)}buildRequest(){const t={requestUri:$t,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,a.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e){return _(t,"POST","/v1/accounts:sendVerificationCode",F(t,e))}async function Ut(t,e){return E(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,e))}async function Gt(t,e){const n=await E(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,e));if(n.temporaryProof)throw $(t,"account-exists-with-different-credential",n);return n}const Wt={["USER_NOT_FOUND"]:"user-not-found"};async function qt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return E(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,n),Wt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Tt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Kt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Kt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ut(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Gt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return qt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:a}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:a}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}=t;return n||e||a||r?new Kt({verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zt(t){const e=(0,a.zd)((0,a.pd)(t))["link"],n=e?(0,a.zd)((0,a.pd)(e))["deep_link_id"]:null,r=(0,a.zd)((0,a.pd)(t))["deep_link_id"],i=r?(0,a.zd)((0,a.pd)(r))["link"]:null;return i||r||n||e||t}class Yt{constructor(t){var e,n,r,i,o,s;const l=(0,a.zd)((0,a.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Jt(null!==(r=l["mode"])&&void 0!==r?r:null);g(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=Zt(t);try{return new Yt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Yt.parseLink(e);return g(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}Xt.PROVIDER_ID="password",Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Qt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends te{constructor(){super("facebook.com")}static credential(t){return Nt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ee.credential(t.oauthAccessToken)}catch(e){return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Nt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ne.credential(e,n)}catch(a){return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com",ne.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae extends te{constructor(){super("github.com")}static credential(t){return Nt._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ae.credentialFromTaggedObject(t)}static credentialFromError(t){return ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ae.credential(t.oauthAccessToken)}catch(e){return null}}}ae.GITHUB_SIGN_IN_METHOD="github.com",ae.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends te{constructor(){super("twitter.com")}static credential(t,e){return Nt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return re.credential(e,n)}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e){return E(t,"POST","/v1/accounts:signUp",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.TWITTER_SIGN_IN_METHOD="twitter.com",re.PROVIDER_ID="twitter.com";class oe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,a=!1){const r=await ot._fromIdTokenResponse(t,n,a),i=se(n),o=new oe({user:r,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const a=se(n);return new oe({user:t,providerId:a,_tokenResponse:n,operationType:e})}}function se(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le extends a.ZR{constructor(t,e,n,a){var r;super(e.code,e.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,le.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,a){return new le(t,e,n,a)}}function ce(t,e,n,a){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw le._fromErrorAndOperation(t,n,e,a);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e,n=!1){const a=await J(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oe._forOperation(t,"link",a)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function he(t,e,n=!1){const{auth:a}=t,r="reauthenticate";try{const i=await J(t,ce(a,r,e,t),n);g(i.idToken,a,"internal-error");const o=q(i.idToken);g(o,a,"internal-error");const{sub:s}=o;return g(t.uid===s,a,"user-mismatch"),oe._forOperation(t,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(a,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e,n=!1){const a="signIn",r=await ce(t,a,e),i=await oe._fromIdTokenResponse(t,a,r);return n||await t._updateCurrentUser(i.user),i}async function fe(t,e){return de(Ct(t),e)}async function pe(t,e,n){const a=Ct(t),r=await ie(a,{returnSecureToken:!0,email:e,password:n}),i=await oe._fromIdTokenResponse(a,"signIn",r);return await a._updateCurrentUser(i.user),i}function ve(t,e,n){return fe((0,a.m9)(t),Xt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e,n,r){return(0,a.m9)(t).onIdTokenChanged(e,n,r)}function be(t,e,n){return(0,a.m9)(t).beforeAuthStateChanged(e,n)}function ge(t){return(0,a.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(t,e){return _(t,"POST","/v2/accounts/mfaEnrollment:start",F(t,e))}function ye(t,e){return _(t,"POST","/v2/accounts/mfaEnrollment:finalize",F(t,e))}function Me(t,e){return _(t,"POST","/v2/accounts/mfaEnrollment:start",F(t,e))}function we(t,e){return _(t,"POST","/v2/accounts/mfaEnrollment:finalize",F(t,e))}new WeakMap;const Ve="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ve,"1"),this.storage.removeItem(Ve),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){const t=(0,a.z$)();return ft(t)||zt(t)}const Oe=1e3,Ce=10;class Ie extends He{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ae()&&Vt(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),a=this.localCache[e];n!==a&&t(e,a,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const a=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Mt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,Ce):a()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Oe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ie.type="LOCAL";const Be=Ie;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends He{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Se.type="SESSION";const Le=Se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Pe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:a,data:r}=e.data,i=this.handlersMap[a];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const o=Array.from(i).map((async t=>t(e.origin,r))),s=await ke(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.receivers=[];class Fe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const a="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let r,i;return new Promise(((o,s)=>{const l=Te("",20);a.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:a,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[a.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function je(t){_e().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return"undefined"!==typeof _e()["WorkerGlobalScope"]&&"function"===typeof _e()["importScripts"]}async function De(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function xe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function $e(){return Ee()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="firebaseLocalStorageDb",Re=1,Ue="firebaseLocalStorage",Ge="fbase_key";class We{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function qe(t,e){return t.transaction([Ue],e?"readwrite":"readonly").objectStore(Ue)}function Ke(){const t=indexedDB.deleteDatabase(Ne);return new We(t).toPromise()}function Je(){const t=indexedDB.open(Ne,Re);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ue,{keyPath:Ge})}catch(a){n(a)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ue)?e(n):(n.close(),await Ke(),e(await Je()))}))}))}async function Ze(t,e,n){const a=qe(t,!0).put({[Ge]:e,value:n});return new We(a).toPromise()}async function Ye(t,e){const n=qe(t,!1).get(e),a=await new We(n).toPromise();return void 0===a?null:a.value}function Xe(t,e){const n=qe(t,!0).delete(e);return new We(n).toPromise()}const Qe=800,tn=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Je()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ee()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pe._getInstance($e()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await De(),!this.activeServiceWorker)return;this.sender=new Fe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&xe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Je();return await Ze(t,Ve,"1"),await Xe(t,Ve),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ze(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ye(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Xe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=qe(t,!1).getAll();return new We(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:a,value:r}of t)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(r)&&(this.notifyListeners(a,r),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const nn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){return _(t,"POST","/v2/accounts/mfaSignIn:start",F(t,e))}function rn(t,e){return _(t,"POST","/v2/accounts/mfaSignIn:finalize",F(t,e))}function on(t,e){return _(t,"POST","/v2/accounts/mfaSignIn:finalize",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function ln(t){return new Promise(((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},a.type="text/javascript",a.charset="UTF-8",sn().appendChild(a)}))}function cn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
cn("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="recaptcha";async function hn(t,e,n){var a;const r=await n.verify();try{let i;if(g("string"===typeof r,t,"argument-error"),g(n.type===un,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){g("enroll"===e.type,t,"internal-error");const n=await ze(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(a=i.multiFactorHint)||void 0===a?void 0:a.uid)||i.multiFactorUid;g(n,t,"missing-multi-factor-info");const o=await an(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Rt(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(t){this.providerId=dn.PROVIDER_ID,this.auth=Ct(t)}verifyPhoneNumber(t,e){return hn(this.auth,t,(0,a.m9)(e))}static credential(t,e){return Kt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return dn.credentialFromTaggedObject(e)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Kt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(t,e){return e?w(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.PROVIDER_ID="phone",dn.PHONE_SIGN_IN_METHOD="phone";class pn extends Tt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return xt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return xt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function vn(t){return de(t.auth,new pn(t),t.bypassAuthState)}function mn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),he(n,new pn(t),t.bypassAuthState)}async function bn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ue(n,new pn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,n,a,r=!1){this.auth=t,this.resolver=n,this.user=a,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:a,tenantId:r,error:i,type:o}=t;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vn;case"linkViaPopup":case"linkViaRedirect":return bn;case"reauthViaPopup":case"reauthViaRedirect":return mn;default:f(this.auth,"internal-error")}}resolve(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new S(2e3,1e4);async function yn(t,e,n){const a=Ct(t);m(t,e,Qt);const r=fn(a,n),i=new Mn(a,"signInViaPopup",e,r);return i.executeNotNull()}class Mn extends gn{constructor(t,e,n,a,r){super(t,e,a,r),this.provider=n,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const t=Te();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,zn.get())};t()}}Mn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="pendingRedirect",Vn=new Map;class Hn extends gn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Vn.get(this.auth._key());if(!t){try{const e=await An(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Vn.set(this.auth._key(),t)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function An(t,e){const n=In(e),a=Cn(t);if(!await a._isAvailable())return!1;const r="true"===await a._get(n);return await a._remove(n),r}function On(t,e){Vn.set(t._key(),e)}function Cn(t){return w(t._redirectPersistence)}function In(t){return ct(wn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t,e,n=!1){const a=Ct(t),r=fn(a,e),i=new Hn(a,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class Ln{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Tn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Pn(t)){const a=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(t))}saveEventToCache(t){this.cachedEventUids.add(kn(t)),this.lastProcessedEventTime=Date.now()}}function kn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Pn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Tn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e={}){return _(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jn=/^https?/;async function En(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fn(t);for(const a of e)try{if(Dn(a))return}catch(n){}f(t,"unauthorized-domain")}function Dn(t){const e=A(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===a?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===a}if(!jn.test(n))return!1;if(_n.test(t))return a===t;const r=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new S(3e4,6e4);function $n(){const t=_e().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Nn(t){return new Promise(((e,n)=>{var a,r,i;function o(){$n(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$n(),n(p(t,"network-request-failed"))},timeout:xn.get()})}if(null===(r=null===(a=_e().gapi)||void 0===a?void 0:a.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=_e().gapi)||void 0===i?void 0:i.load)){const e=cn("iframefcb");return _e()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},ln(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Rn=null,t}))}let Rn=null;function Un(t){return Rn=Rn||Nn(t),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new S(5e3,15e3),Wn="__/auth/iframe",qn="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?L(e,qn):`https://${t.config.authDomain}/${Wn}`,i={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=Jn.get(t.config.apiHost);o&&(i.eid=o);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,a.xO)(i).slice(1)}`}async function Yn(t){const e=await Un(t),n=_e().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Zn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(e=>new Promise((async(n,a)=>{await e.restyle({setHideOnLeave:!1});const r=p(t,"network-request-failed"),i=_e().setTimeout((()=>{a(r)}),Gn.get());function o(){_e().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{a(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qn=500,ta=600,ea="_blank",na="http://localhost";class aa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ra(t,e,n,r=Qn,i=ta){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Xn),{width:r.toString(),height:i.toString(),top:o,left:s}),u=(0,a.z$)().toLowerCase();n&&(l=pt(u)?ea:n),dt(u)&&(e=e||na,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(yt(u)&&"_self"!==l)return ia(e||"",l),new aa(null);const d=window.open(e||"",l,h);g(d,t,"popup-blocked");try{d.focus()}catch(f){}return new aa(d)}function ia(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="__/auth/handler",sa="emulator/auth/handler";function la(t,e,n,i,o,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:r.Jn,eventId:o};if(e instanceof Qt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,a.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))l[t]=e}if(e instanceof te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const a of Object.keys(c))void 0===c[a]&&delete c[a];return`${ca(t)}?${(0,a.xO)(c).slice(1)}`}function ca({config:t}){return t.emulator?L(t,sa):`https://${t.authDomain}/${oa}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="webStorageSupport";class ha{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Le,this._completeRedirectFn=Bn,this._overrideRedirectResult=On}async _openPopup(t,e,n,a){var r;y(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=la(t,e,n,A(),a);return ra(t,i,Te())}async _openRedirect(t,e,n,a){return await this._originValidation(t),je(la(t,e,n,A(),a)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Yn(t),n=new Ln(t);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const a=n.onEvent(e.authEvent);return{status:a?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ua,{type:ua},(n=>{var a;const r=null===(a=null===n||void 0===n?void 0:n[0])||void 0===a?void 0:a[ua];void 0!==r&&e(!!r),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=En(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||ft()||zt()}}const da=ha;class fa{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return z("unexpected MultiFactorSessionType")}}}class pa extends fa{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new pa(t)}_finalizeEnroll(t,e,n){return ye(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return rn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class va{constructor(){}static assertion(t){return pa._fromCredential(t)}}va.FACTOR_ID="phone";class ma{static assertionForEnrollment(t,e){return ba._fromSecret(t,e)}static assertionForSignIn(t,e){return ba._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;g("undefined"!==typeof e.auth,"internal-error");const n=await Me(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return ga._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}ma.FACTOR_ID="totp";class ba extends fa{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new ba(e,void 0,t)}static _fromEnrollmentId(t,e){return new ba(e,t)}async _finalizeEnroll(t,e,n){return g("undefined"!==typeof this.secret,t,"argument-error"),we(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){g(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return on(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ga{constructor(t,e,n,a,r,i,o){this.sessionInfo=i,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new ga(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let a=!1;return(za(t)||za(e))&&(a=!0),a&&(za(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),za(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function za(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var ya="@firebase/auth",Ma="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ha(t){(0,r.Xd)(new s.wA("auth",((e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=a.options;return((e,a)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ht(t)},s=new Ot(e,a,r);return H(s,n),s})(a,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const a=t.getProvider("auth-internal");a.initialize()}))),(0,r.Xd)(new s.wA("auth-internal",(t=>{const e=Ct(t.getProvider("auth").getImmediate());return(t=>new wa(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ya,Ma,Va(t)),(0,r.KN)(ya,Ma,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=300,Oa=(0,a.Pz)("authIdTokenMaxAge")||Aa;let Ca=null;const Ia=t=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>Oa)return;const r=null===n||void 0===n?void 0:n.token;Ca!==r&&(Ca=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ba(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=V(t,{popupRedirectResolver:da,persistence:[nn,Be,Le]}),i=(0,a.Pz)("authTokenSyncURL");if(i){const t=Ia(i);be(n,t,(()=>t(n.currentUser))),me(n,(e=>t(e)))}const o=(0,a.q4)("auth");return o&&Bt(n,`http://${o}`),n}Ha("Browser")}}]);
//# sourceMappingURL=chunk-vendors.571bf510.js.map