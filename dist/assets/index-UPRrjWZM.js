(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();var yc={exports:{}},Oo={},Sc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function ov(){if(Dp)return ft;Dp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(U,ie,Pe){this.props=U,this.context=ie,this.refs=R,this.updater=Pe||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(U,ie,Pe){this.props=U,this.context=ie,this.refs=R,this.updater=Pe||S}var L=D.prototype=new g;L.constructor=D,w(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(U,ie,Pe){var Q,he={},xe=null,me=null;if(ie!=null)for(Q in ie.ref!==void 0&&(me=ie.ref),ie.key!==void 0&&(xe=""+ie.key),ie)G.call(ie,Q)&&!N.hasOwnProperty(Q)&&(he[Q]=ie[Q]);var we=arguments.length-2;if(we===1)he.children=Pe;else if(1<we){for(var be=Array(we),$e=0;$e<we;$e++)be[$e]=arguments[$e+2];he.children=be}if(U&&U.defaultProps)for(Q in we=U.defaultProps,we)he[Q]===void 0&&(he[Q]=we[Q]);return{$$typeof:s,type:U,key:xe,ref:me,props:he,_owner:F.current}}function b(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Pe){return ie[Pe]})}var ne=/\/+/g;function Z(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):ie.toString(36)}function ae(U,ie,Pe,Q,he){var xe=typeof U;(xe==="undefined"||xe==="boolean")&&(U=null);var me=!1;if(U===null)me=!0;else switch(xe){case"string":case"number":me=!0;break;case"object":switch(U.$$typeof){case s:case e:me=!0}}if(me)return me=U,he=he(me),U=Q===""?"."+Z(me,0):Q,C(he)?(Pe="",U!=null&&(Pe=U.replace(ne,"$&/")+"/"),ae(he,ie,Pe,"",function($e){return $e})):he!=null&&(A(he)&&(he=b(he,Pe+(!he.key||me&&me.key===he.key?"":(""+he.key).replace(ne,"$&/")+"/")+U)),ie.push(he)),1;if(me=0,Q=Q===""?".":Q+":",C(U))for(var we=0;we<U.length;we++){xe=U[we];var be=Q+Z(xe,we);me+=ae(xe,ie,Pe,be,he)}else if(be=x(U),typeof be=="function")for(U=be.call(U),we=0;!(xe=U.next()).done;)xe=xe.value,be=Q+Z(xe,we++),me+=ae(xe,ie,Pe,be,he);else if(xe==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return me}function ce(U,ie,Pe){if(U==null)return U;var Q=[],he=0;return ae(U,Q,"","",function(xe){return ie.call(Pe,xe,he++)}),Q}function se(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Pe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Pe)},function(Pe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Pe)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},B={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ce,forEach:function(U,ie,Pe){ce(U,function(){ie.apply(this,arguments)},Pe)},count:function(U){var ie=0;return ce(U,function(){ie++}),ie},toArray:function(U){return ce(U,function(ie){return ie})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=y,ft.Fragment=t,ft.Profiler=a,ft.PureComponent=D,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=oe,ft.cloneElement=function(U,ie,Pe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=w({},U.props),he=U.key,xe=U.ref,me=U._owner;if(ie!=null){if(ie.ref!==void 0&&(xe=ie.ref,me=F.current),ie.key!==void 0&&(he=""+ie.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(be in ie)G.call(ie,be)&&!N.hasOwnProperty(be)&&(Q[be]=ie[be]===void 0&&we!==void 0?we[be]:ie[be])}var be=arguments.length-2;if(be===1)Q.children=Pe;else if(1<be){we=Array(be);for(var $e=0;$e<be;$e++)we[$e]=arguments[$e+2];Q.children=we}return{$$typeof:s,type:U.type,key:he,ref:xe,props:Q,_owner:me}},ft.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ft.createElement=V,ft.createFactory=function(U){var ie=V.bind(null,U);return ie.type=U,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:d,render:U}},ft.isValidElement=A,ft.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},ft.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},ft.startTransition=function(U){var ie=B.transition;B.transition={};try{U()}finally{B.transition=ie}},ft.unstable_act=oe,ft.useCallback=function(U,ie){return ue.current.useCallback(U,ie)},ft.useContext=function(U){return ue.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},ft.useEffect=function(U,ie){return ue.current.useEffect(U,ie)},ft.useId=function(){return ue.current.useId()},ft.useImperativeHandle=function(U,ie,Pe){return ue.current.useImperativeHandle(U,ie,Pe)},ft.useInsertionEffect=function(U,ie){return ue.current.useInsertionEffect(U,ie)},ft.useLayoutEffect=function(U,ie){return ue.current.useLayoutEffect(U,ie)},ft.useMemo=function(U,ie){return ue.current.useMemo(U,ie)},ft.useReducer=function(U,ie,Pe){return ue.current.useReducer(U,ie,Pe)},ft.useRef=function(U){return ue.current.useRef(U)},ft.useState=function(U){return ue.current.useState(U)},ft.useSyncExternalStore=function(U,ie,Pe){return ue.current.useSyncExternalStore(U,ie,Pe)},ft.useTransition=function(){return ue.current.useTransition()},ft.version="18.3.1",ft}var Lp;function Wh(){return Lp||(Lp=1,Sc.exports=ov()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function av(){if(Ip)return Oo;Ip=1;var s=Wh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=c,Oo.jsxs=c,Oo}var Up;function lv(){return Up||(Up=1,yc.exports=av()),yc.exports}var Pl=lv(),ol={},Ec={exports:{}},Fn={},Mc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function uv(){return Np||(Np=1,function(s){function e(B,le){var oe=B.length;B.push(le);e:for(;0<oe;){var U=oe-1>>>1,ie=B[U];if(0<a(ie,le))B[U]=le,B[oe]=ie,oe=U;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],oe=B.pop();if(oe!==le){B[0]=oe;e:for(var U=0,ie=B.length,Pe=ie>>>1;U<Pe;){var Q=2*(U+1)-1,he=B[Q],xe=Q+1,me=B[xe];if(0>a(he,oe))xe<ie&&0>a(me,he)?(B[U]=me,B[xe]=oe,U=xe):(B[U]=he,B[Q]=oe,U=Q);else if(xe<ie&&0>a(me,oe))B[U]=me,B[xe]=oe,U=xe;else break e}}return le}function a(B,le){var oe=B.sortIndex-le.sortIndex;return oe!==0?oe:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=B)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function C(B){if(R=!1,L(B),!w)if(t(p)!==null)w=!0,se(G);else{var le=t(m);le!==null&&ue(C,le.startTime-B)}}function G(B,le){w=!1,R&&(R=!1,g(V),V=-1),S=!0;var oe=x;try{for(L(le),v=t(p);v!==null&&(!(v.expirationTime>le)||B&&!k());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var ie=U(v.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(p)&&r(p),L(le)}else r(p);v=t(p)}if(v!==null)var Pe=!0;else{var Q=t(m);Q!==null&&ue(C,Q.startTime-le),Pe=!1}return Pe}finally{v=null,x=oe,S=!1}}var F=!1,N=null,V=-1,b=5,A=-1;function k(){return!(s.unstable_now()-A<b)}function ne(){if(N!==null){var B=s.unstable_now();A=B;var le=!0;try{le=N(!0,B)}finally{le?Z():(F=!1,N=null)}}else F=!1}var Z;if(typeof D=="function")Z=function(){D(ne)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=ne,Z=function(){ce.postMessage(null)}}else Z=function(){y(ne,0)};function se(B){N=B,F||(F=!0,Z())}function ue(B,le){V=y(function(){B(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,se(G))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var oe=x;x=le;try{return B()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=x;x=B;try{return le()}finally{x=oe}},s.unstable_scheduleCallback=function(B,le,oe){var U=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,B={id:_++,callback:le,priorityLevel:B,startTime:oe,expirationTime:ie,sortIndex:-1},oe>U?(B.sortIndex=oe,e(m,B),t(p)===null&&B===t(m)&&(R?(g(V),V=-1):R=!0,ue(C,oe-U))):(B.sortIndex=ie,e(p,B),w||S||(w=!0,se(G))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var le=x;return function(){var oe=x;x=le;try{return B.apply(this,arguments)}finally{x=oe}}}}(wc)),wc}var Fp;function cv(){return Fp||(Fp=1,Mc.exports=uv()),Mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function hv(){if(Op)return Fn;Op=1;var s=Wh(),e=cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(n){return p.call(v,n)?!0:p.call(_,n)?!1:m.test(n)?v[n]=!0:(_[n]=!0,!1)}function S(n,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,l){if(i===null||typeof i>"u"||S(n,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,l,h,f,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,D);y[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,D);y[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,D);y[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,l){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,h,l)&&(o=null),l||h===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,l=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,l?n.setAttributeNS(l,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,U;function ie(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Pe=!1;function Q(n,i){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){l=te}n.call(i.prototype)}else{try{throw Error()}catch(te){l=te}n()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var h=te.stack.split(`
`),f=l.stack.split(`
`),E=h.length-1,I=f.length-1;1<=E&&0<=I&&h[E]!==f[I];)I--;for(;1<=E&&0<=I;E--,I--)if(h[E]!==f[I]){if(E!==1||I!==1)do if(E--,I--,0>I||h[E]!==f[I]){var O=`
`+h[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=I);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function he(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case b:return"Profiler";case V:return"StrictMode";case Z:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,f.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vt(n){n._valueTracker||(n._valueTracker=$e(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return n&&(l=be(n)?n.checked?"true":"false":n.value),n=l,n!==o?(i.setValue(n),!0):!1}function Rt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function $t(n,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function nt(n,i){it(n,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||Rt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ie=Array.isArray;function P(n,i,o,l){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&l&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function M(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ie(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function pe(n,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),l!=null&&(n.defaultValue=""+l)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Te,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,l,h)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Te.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ht(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function Qe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,h=qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?n.setProperty(o,h):n[o]=h}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,re=null,fe=null;function Le(n){if(n=Eo(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Sa(i),Ae(n.stateNode,n.type,i))}}function De(n){re?fe?fe.push(n):fe=[n]:re=n}function st(){if(re){var n=re,i=fe;if(fe=re=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function It(n,i){return n(i)}function jt(){}var xt=!1;function Pn(n,i,o){if(xt)return n(i,o);xt=!0;try{return It(n,i,o)}finally{xt=!1,(re!==null||fe!==null)&&(jt(),st())}}function En(n,i){var o=n.stateNode;if(o===null)return null;var l=Sa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ts=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{ts=!1}function Ei(n,i,o,l,h,f,E,I,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ve){this.onError(ve)}}var Mi=!1,Ar=null,Rr=!1,$i=null,Qo={onError:function(n){Mi=!0,Ar=n}};function ns(n,i,o,l,h,f,E,I,O){Mi=!1,Ar=null,Ei.apply(Qo,arguments)}function ea(n,i,o,l,h,f,E,I,O){if(ns.apply(this,arguments),Mi){if(Mi){var te=Ar;Mi=!1,Ar=null}else throw Error(t(198));Rr||(Rr=!0,$i=te)}}function hi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(hi(n)!==n)throw Error(t(188))}function Gl(n){var i=n.alternate;if(!i){if(i=hi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,l=i;;){var h=o.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){o=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===o)return na(h),n;if(f===l)return na(h),i;f=f.sibling}throw Error(t(188))}if(o.return!==l.return)o=h,l=f;else{for(var E=!1,I=h.child;I;){if(I===o){E=!0,o=h,l=f;break}if(I===l){E=!0,l=h,o=f;break}I=I.sibling}if(!E){for(I=f.child;I;){if(I===o){E=!0,o=f,l=h;break}if(I===l){E=!0,l=f,o=h;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==l)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ia(n){return n=Gl(n),n!==null?ra(n):null}function ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ra(n);if(i!==null)return i;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,X=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,Be=e.unstable_LowPriority,et=e.unstable_IdlePriority,Ke=null,Ve=null;function gt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:_t,Ht=Math.log,Ft=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-(Ht(n)/Ft|0)|0}var je=64,Vt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function fn(n,i){var o=n.pendingLanes;if(o===0)return 0;var l=0,h=n.suspendedLanes,f=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~h;I!==0?l=mt(I):(f&=E,f!==0&&(l=mt(f)))}else E=o&~h,E!==0?l=mt(E):f!==0&&(l=mt(f));if(l===0)return 0;if(i!==0&&i!==l&&!(i&h)&&(h=l&-l,f=i&-i,h>=f||h===16&&(f&4194240)!==0))return i;if(l&4&&(l|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)o=31-at(i),h=1<<o,l|=n[o],i&=~h;return l}function ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(n,i){for(var o=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,f=n.pendingLanes;0<f;){var E=31-at(f),I=1<<E,O=h[E];O===-1?(!(I&o)||I&l)&&(h[E]=ji(I,i)):O<=i&&(n.expiredLanes|=I),f&=~I}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=je;return je<<=1,!(je&4194240)&&(je=64),n}function pn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-at(o),f=1<<h;i[h]=0,l[h]=-1,n[h]=-1,o&=~f}}function nn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var l=31-at(o),h=1<<l;h&i|n[l]&i&&(n[l]|=i),o&=~h}}var yt=0;function di(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ud,Wl,cd,hd,dd,Xl=!1,oa=[],qi=null,Ji=null,Zi=null,so=new Map,oo=new Map,Ki=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,l,h,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Eo(i),i!==null&&Wl(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Pg(n,i,o,l,h){switch(i){case"focusin":return qi=ao(qi,n,i,o,l,h),!0;case"dragenter":return Ji=ao(Ji,n,i,o,l,h),!0;case"mouseover":return Zi=ao(Zi,n,i,o,l,h),!0;case"pointerover":var f=h.pointerId;return so.set(f,ao(so.get(f)||null,n,i,o,l,h)),!0;case"gotpointercapture":return f=h.pointerId,oo.set(f,ao(oo.get(f)||null,n,i,o,l,h)),!0}return!1}function pd(n){var i=Cr(n.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,dd(n.priority,function(){cd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=$l(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var l=new o.constructor(o.type,o);At=l,o.target.dispatchEvent(l),At=null}else return i=Eo(o),i!==null&&Wl(i),n.blockedOn=o,!1;i.shift()}return!0}function md(n,i,o){aa(n)&&o.delete(i)}function Dg(){Xl=!1,qi!==null&&aa(qi)&&(qi=null),Ji!==null&&aa(Ji)&&(Ji=null),Zi!==null&&aa(Zi)&&(Zi=null),so.forEach(md),oo.forEach(md)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dg)))}function uo(n){function i(h){return lo(h,n)}if(0<oa.length){lo(oa[0],n);for(var o=1;o<oa.length;o++){var l=oa[o];l.blockedOn===n&&(l.blockedOn=null)}}for(qi!==null&&lo(qi,n),Ji!==null&&lo(Ji,n),Zi!==null&&lo(Zi,n),so.forEach(i),oo.forEach(i),o=0;o<Ki.length;o++)l=Ki[o],l.blockedOn===n&&(l.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)pd(o),o.blockedOn===null&&Ki.shift()}var is=C.ReactCurrentBatchConfig,la=!0;function Lg(n,i,o,l){var h=yt,f=is.transition;is.transition=null;try{yt=1,Yl(n,i,o,l)}finally{yt=h,is.transition=f}}function Ig(n,i,o,l){var h=yt,f=is.transition;is.transition=null;try{yt=4,Yl(n,i,o,l)}finally{yt=h,is.transition=f}}function Yl(n,i,o,l){if(la){var h=$l(n,i,o,l);if(h===null)cu(n,i,l,ua,o),fd(n,l);else if(Pg(h,n,i,o,l))l.stopPropagation();else if(fd(n,l),i&4&&-1<bg.indexOf(n)){for(;h!==null;){var f=Eo(h);if(f!==null&&ud(f),f=$l(n,i,o,l),f===null&&cu(n,i,l,ua,o),f===h)break;h=f}h!==null&&l.stopPropagation()}else cu(n,i,l,null,o)}}var ua=null;function $l(n,i,o,l){if(ua=null,n=W(l),n=Cr(n),n!==null)if(i=hi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ua=n,null}function gd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Se:return 1;case Re:return 4;case Ue:case Be:return 16;case et:return 536870912;default:return 16}default:return 16}}var Qi=null,jl=null,ca=null;function _d(){if(ca)return ca;var n,i=jl,o=i.length,l,h="value"in Qi?Qi.value:Qi.textContent,f=h.length;for(n=0;n<o&&i[n]===h[n];n++);var E=o-n;for(l=1;l<=E&&i[o-l]===h[f-l];l++);return ca=h.slice(n,1<l?1-l:void 0)}function ha(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function vd(){return!1}function kn(n){function i(o,l,h,f,E){this._reactName=o,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?da:vd,this.isPropagationStopped=vd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=kn(rs),co=oe({},rs,{view:0,detail:0}),Ug=kn(co),Jl,Zl,ho,fa=oe({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(Jl=n.screenX-ho.screenX,Zl=n.screenY-ho.screenY):Zl=Jl=0,ho=n),Jl)},movementY:function(n){return"movementY"in n?n.movementY:Zl}}),xd=kn(fa),Ng=oe({},fa,{dataTransfer:0}),Fg=kn(Ng),Og=oe({},co,{relatedTarget:0}),Kl=kn(Og),kg=oe({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),zg=kn(kg),Bg=oe({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hg=kn(Bg),Vg=oe({},rs,{data:0}),yd=kn(Vg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Xg[n])?!!i[n]:!1}function Ql(){return Yg}var $g=oe({},co,{key:function(n){if(n.key){var i=Gg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Wg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(n){return n.type==="keypress"?ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jg=kn($g),qg=oe({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=kn(qg),Jg=oe({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Zg=kn(Jg),Kg=oe({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=kn(Kg),e_=oe({},fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=kn(e_),n_=[9,13,27,32],eu=d&&"CompositionEvent"in window,fo=null;d&&"documentMode"in document&&(fo=document.documentMode);var i_=d&&"TextEvent"in window&&!fo,Ed=d&&(!eu||fo&&8<fo&&11>=fo),Md=" ",wd=!1;function Td(n,i){switch(n){case"keyup":return n_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function r_(n,i){switch(n){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(wd=!0,Md);case"textInput":return n=i.data,n===Md&&wd?null:n;default:return null}}function s_(n,i){if(ss)return n==="compositionend"||!eu&&Td(n,i)?(n=_d(),ca=jl=Qi=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ed&&i.locale!=="ko"?null:i.data;default:return null}}var o_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!o_[n.type]:i==="textarea"}function Cd(n,i,o,l){De(l),i=va(i,"onChange"),0<i.length&&(o=new ql("onChange","change",null,o,l),n.push({event:o,listeners:i}))}var po=null,mo=null;function a_(n){Yd(n,0)}function pa(n){var i=cs(n);if(lt(i))return n}function l_(n,i){if(n==="change")return i}var bd=!1;if(d){var tu;if(d){var nu="oninput"in document;if(!nu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),nu=typeof Pd.oninput=="function"}tu=nu}else tu=!1;bd=tu&&(!document.documentMode||9<document.documentMode)}function Dd(){po&&(po.detachEvent("onpropertychange",Ld),mo=po=null)}function Ld(n){if(n.propertyName==="value"&&pa(mo)){var i=[];Cd(i,mo,n,W(n)),Pn(a_,i)}}function u_(n,i,o){n==="focusin"?(Dd(),po=i,mo=o,po.attachEvent("onpropertychange",Ld)):n==="focusout"&&Dd()}function c_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pa(mo)}function h_(n,i){if(n==="click")return pa(i)}function d_(n,i){if(n==="input"||n==="change")return pa(i)}function f_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:f_;function go(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var h=o[l];if(!p.call(i,h)||!Qn(n[h],i[h]))return!1}return!0}function Id(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ud(n,i){var o=Id(n);n=0;for(var l;o;){if(o.nodeType===3){if(l=n+o.textContent.length,n<=i&&l>=i)return{node:o,offset:i-n};n=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Id(o)}}function Nd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Fd(){for(var n=window,i=Rt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Rt(n.document)}return i}function iu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function p_(n){var i=Fd(),o=n.focusedElem,l=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Nd(o.ownerDocument.documentElement,o)){if(l!==null&&iu(o)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,f=Math.min(l.start,h);l=l.end===void 0?f:Math.min(l.end,h),!n.extend&&f>l&&(h=l,l=f,f=h),h=Ud(o,f);var E=Ud(o,l);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),f>l?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var m_=d&&"documentMode"in document&&11>=document.documentMode,os=null,ru=null,_o=null,su=!1;function Od(n,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;su||os==null||os!==Rt(l)||(l=os,"selectionStart"in l&&iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&go(_o,l)||(_o=l,l=va(ru,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,o),n.push({event:i,listeners:l}),i.target=os)))}function ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var as={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},ou={},kd={};d&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ga(n){if(ou[n])return ou[n];if(!as[n])return n;var i=as[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in kd)return ou[n]=i[o];return n}var zd=ga("animationend"),Bd=ga("animationiteration"),Hd=ga("animationstart"),Vd=ga("transitionend"),Gd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){Gd.set(n,i),u(i,[n])}for(var au=0;au<Wd.length;au++){var lu=Wd[au],g_=lu.toLowerCase(),__=lu[0].toUpperCase()+lu.slice(1);er(g_,"on"+__)}er(zd,"onAnimationEnd"),er(Bd,"onAnimationIteration"),er(Hd,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Vd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Xd(n,i,o){var l=n.type||"unknown-event";n.currentTarget=o,ea(l,i,void 0,n),n.currentTarget=null}function Yd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var l=n[o],h=l.event;l=l.listeners;e:{var f=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],O=I.instance,te=I.currentTarget;if(I=I.listener,O!==f&&h.isPropagationStopped())break e;Xd(h,I,te),f=O}else for(E=0;E<l.length;E++){if(I=l[E],O=I.instance,te=I.currentTarget,I=I.listener,O!==f&&h.isPropagationStopped())break e;Xd(h,I,te),f=O}}}if(Rr)throw n=$i,Rr=!1,$i=null,n}function Ut(n,i){var o=i[gu];o===void 0&&(o=i[gu]=new Set);var l=n+"__bubble";o.has(l)||($d(i,n,2,!1),o.add(l))}function uu(n,i,o){var l=0;i&&(l|=4),$d(o,n,l,i)}var _a="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[_a]){n[_a]=!0,r.forEach(function(o){o!=="selectionchange"&&(v_.has(o)||uu(o,!1,n),uu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_a]||(i[_a]=!0,uu("selectionchange",!1,i))}}function $d(n,i,o,l){switch(gd(i)){case 1:var h=Lg;break;case 4:h=Ig;break;default:h=Yl}o=h.bind(null,i,o,n),h=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function cu(n,i,o,l,h){var f=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;E=E.return}for(;I!==null;){if(E=Cr(I),E===null)return;if(O=E.tag,O===5||O===6){l=f=E;continue e}I=I.parentNode}}l=l.return}Pn(function(){var te=f,ve=W(o),ye=[];e:{var _e=Gd.get(n);if(_e!==void 0){var Ne=ql,He=n;switch(n){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":Ne=jg;break;case"focusin":He="focus",Ne=Kl;break;case"focusout":He="blur",Ne=Kl;break;case"beforeblur":case"afterblur":Ne=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Zg;break;case zd:case Bd:case Hd:Ne=zg;break;case Vd:Ne=Qg;break;case"scroll":Ne=Ug;break;case"wheel":Ne=t_;break;case"copy":case"cut":case"paste":Ne=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Sd}var Ge=(i&4)!==0,Wt=!Ge&&n==="scroll",j=Ge?_e!==null?_e+"Capture":null:_e;Ge=[];for(var H=te,K;H!==null;){K=H;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,j!==null&&(Me=En(H,j),Me!=null&&Ge.push(yo(H,Me,K)))),Wt)break;H=H.return}0<Ge.length&&(_e=new Ne(_e,He,null,o,ve),ye.push({event:_e,listeners:Ge}))}}if(!(i&7)){e:{if(_e=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",_e&&o!==At&&(He=o.relatedTarget||o.fromElement)&&(Cr(He)||He[Ti]))break e;if((Ne||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ne?(He=o.relatedTarget||o.toElement,Ne=te,He=He?Cr(He):null,He!==null&&(Wt=hi(He),He!==Wt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ne=null,He=te),Ne!==He)){if(Ge=xd,Me="onMouseLeave",j="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Sd,Me="onPointerLeave",j="onPointerEnter",H="pointer"),Wt=Ne==null?_e:cs(Ne),K=He==null?_e:cs(He),_e=new Ge(Me,H+"leave",Ne,o,ve),_e.target=Wt,_e.relatedTarget=K,Me=null,Cr(ve)===te&&(Ge=new Ge(j,H+"enter",He,o,ve),Ge.target=K,Ge.relatedTarget=Wt,Me=Ge),Wt=Me,Ne&&He)t:{for(Ge=Ne,j=He,H=0,K=Ge;K;K=ls(K))H++;for(K=0,Me=j;Me;Me=ls(Me))K++;for(;0<H-K;)Ge=ls(Ge),H--;for(;0<K-H;)j=ls(j),K--;for(;H--;){if(Ge===j||j!==null&&Ge===j.alternate)break t;Ge=ls(Ge),j=ls(j)}Ge=null}else Ge=null;Ne!==null&&jd(ye,_e,Ne,Ge,!1),He!==null&&Wt!==null&&jd(ye,Wt,He,Ge,!0)}}e:{if(_e=te?cs(te):window,Ne=_e.nodeName&&_e.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&_e.type==="file")var Xe=l_;else if(Rd(_e))if(bd)Xe=d_;else{Xe=c_;var Je=u_}else(Ne=_e.nodeName)&&Ne.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Xe=h_);if(Xe&&(Xe=Xe(n,te))){Cd(ye,Xe,o,ve);break e}Je&&Je(n,_e,te),n==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&Tt(_e,"number",_e.value)}switch(Je=te?cs(te):window,n){case"focusin":(Rd(Je)||Je.contentEditable==="true")&&(os=Je,ru=te,_o=null);break;case"focusout":_o=ru=os=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Od(ye,o,ve);break;case"selectionchange":if(m_)break;case"keydown":case"keyup":Od(ye,o,ve)}var Ze;if(eu)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ss?Td(n,o)&&(tt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(Ed&&o.locale!=="ko"&&(ss||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ss&&(Ze=_d()):(Qi=ve,jl="value"in Qi?Qi.value:Qi.textContent,ss=!0)),Je=va(te,tt),0<Je.length&&(tt=new yd(tt,n,null,o,ve),ye.push({event:tt,listeners:Je}),Ze?tt.data=Ze:(Ze=Ad(o),Ze!==null&&(tt.data=Ze)))),(Ze=i_?r_(n,o):s_(n,o))&&(te=va(te,"onBeforeInput"),0<te.length&&(ve=new yd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:te}),ve.data=Ze))}Yd(ye,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function va(n,i){for(var o=i+"Capture",l=[];n!==null;){var h=n,f=h.stateNode;h.tag===5&&f!==null&&(h=f,f=En(n,o),f!=null&&l.unshift(yo(n,f,h)),f=En(n,i),f!=null&&l.push(yo(n,f,h))),n=n.return}return l}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jd(n,i,o,l,h){for(var f=i._reactName,E=[];o!==null&&o!==l;){var I=o,O=I.alternate,te=I.stateNode;if(O!==null&&O===l)break;I.tag===5&&te!==null&&(I=te,h?(O=En(o,f),O!=null&&E.unshift(yo(o,O,I))):h||(O=En(o,f),O!=null&&E.push(yo(o,O,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var x_=/\r\n?/g,y_=/\u0000|\uFFFD/g;function qd(n){return(typeof n=="string"?n:""+n).replace(x_,`
`).replace(y_,"")}function xa(n,i,o){if(i=qd(i),qd(n)!==i&&o)throw Error(t(425))}function ya(){}var hu=null,du=null;function fu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,S_=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,E_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(n){return Jd.resolve(null).then(n).catch(M_)}:pu;function M_(n){setTimeout(function(){throw n})}function mu(n,i){var o=i,l=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(l===0){n.removeChild(h),uo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=h}while(o);uo(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Zd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),fi="__reactFiber$"+us,So="__reactProps$"+us,Ti="__reactContainer$"+us,gu="__reactEvents$"+us,w_="__reactListeners$"+us,T_="__reactHandles$"+us;function Cr(n){var i=n[fi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ti]||o[fi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Zd(n);n!==null;){if(o=n[fi])return o;n=Zd(n)}return i}n=o,o=n.parentNode}return null}function Eo(n){return n=n[fi]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sa(n){return n[So]||null}var _u=[],hs=-1;function nr(n){return{current:n}}function Nt(n){0>hs||(n.current=_u[hs],_u[hs]=null,hs--)}function Lt(n,i){hs++,_u[hs]=n.current,n.current=i}var ir={},mn=nr(ir),Dn=nr(!1),br=ir;function ds(n,i){var o=n.type.contextTypes;if(!o)return ir;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var h={},f;for(f in o)h[f]=i[f];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Ln(n){return n=n.childContextTypes,n!=null}function Ea(){Nt(Dn),Nt(mn)}function Kd(n,i,o){if(mn.current!==ir)throw Error(t(168));Lt(mn,i),Lt(Dn,o)}function Qd(n,i,o){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var h in l)if(!(h in i))throw Error(t(108,me(n)||"Unknown",h));return oe({},o,l)}function Ma(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,br=mn.current,Lt(mn,n),Lt(Dn,Dn.current),!0}function ef(n,i,o){var l=n.stateNode;if(!l)throw Error(t(169));o?(n=Qd(n,i,br),l.__reactInternalMemoizedMergedChildContext=n,Nt(Dn),Nt(mn),Lt(mn,n)):Nt(Dn),Lt(Dn,o)}var Ai=null,wa=!1,vu=!1;function tf(n){Ai===null?Ai=[n]:Ai.push(n)}function A_(n){wa=!0,tf(n)}function rr(){if(!vu&&Ai!==null){vu=!0;var n=0,i=yt;try{var o=Ai;for(yt=1;n<o.length;n++){var l=o[n];do l=l(!0);while(l!==null)}Ai=null,wa=!1}catch(h){throw Ai!==null&&(Ai=Ai.slice(n+1)),sa(Se,rr),h}finally{yt=i,vu=!1}}return null}var fs=[],ps=0,Ta=null,Aa=0,Yn=[],$n=0,Pr=null,Ri=1,Ci="";function Dr(n,i){fs[ps++]=Aa,fs[ps++]=Ta,Ta=n,Aa=i}function nf(n,i,o){Yn[$n++]=Ri,Yn[$n++]=Ci,Yn[$n++]=Pr,Pr=n;var l=Ri;n=Ci;var h=32-at(l)-1;l&=~(1<<h),o+=1;var f=32-at(i)+h;if(30<f){var E=h-h%5;f=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Ri=1<<32-at(i)+h|o<<h|l,Ci=f+n}else Ri=1<<f|o<<h|l,Ci=n}function xu(n){n.return!==null&&(Dr(n,1),nf(n,1,0))}function yu(n){for(;n===Ta;)Ta=fs[--ps],fs[ps]=null,Aa=fs[--ps],fs[ps]=null;for(;n===Pr;)Pr=Yn[--$n],Yn[$n]=null,Ci=Yn[--$n],Yn[$n]=null,Ri=Yn[--$n],Yn[$n]=null}var zn=null,Bn=null,Ot=!1,ei=null;function rf(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function sf(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Ri,overflow:Ci}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,zn=n,Bn=null,!0):!1;default:return!1}}function Su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eu(n){if(Ot){var i=Bn;if(i){var o=i;if(!sf(n,i)){if(Su(n))throw Error(t(418));i=tr(o.nextSibling);var l=zn;i&&sf(n,i)?rf(l,o):(n.flags=n.flags&-4097|2,Ot=!1,zn=n)}}else{if(Su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,zn=n}}}function of(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ra(n){if(n!==zn)return!1;if(!Ot)return of(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!fu(n.type,n.memoizedProps)),i&&(i=Bn)){if(Su(n))throw af(),Error(t(418));for(;i;)rf(n,i),i=tr(i.nextSibling)}if(of(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Bn=tr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?tr(n.stateNode.nextSibling):null;return!0}function af(){for(var n=Bn;n;)n=tr(n.nextSibling)}function ms(){Bn=zn=null,Ot=!1}function Mu(n){ei===null?ei=[n]:ei.push(n)}var R_=C.ReactCurrentBatchConfig;function Mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var l=o.stateNode}if(!l)throw Error(t(147,n));var h=l,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(E){var I=h.refs;E===null?delete I[f]:I[f]=E},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ca(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function lf(n){var i=n._init;return i(n._payload)}function uf(n){function i(j,H){if(n){var K=j.deletions;K===null?(j.deletions=[H],j.flags|=16):K.push(H)}}function o(j,H){if(!n)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function l(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function h(j,H){return j=dr(j,H),j.index=0,j.sibling=null,j}function f(j,H,K){return j.index=K,n?(K=j.alternate,K!==null?(K=K.index,K<H?(j.flags|=2,H):K):(j.flags|=2,H)):(j.flags|=1048576,H)}function E(j){return n&&j.alternate===null&&(j.flags|=2),j}function I(j,H,K,Me){return H===null||H.tag!==6?(H=pc(K,j.mode,Me),H.return=j,H):(H=h(H,K),H.return=j,H)}function O(j,H,K,Me){var Xe=K.type;return Xe===N?ve(j,H,K.props.children,Me,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&lf(Xe)===H.type)?(Me=h(H,K.props),Me.ref=Mo(j,H,K),Me.return=j,Me):(Me=Ka(K.type,K.key,K.props,null,j.mode,Me),Me.ref=Mo(j,H,K),Me.return=j,Me)}function te(j,H,K,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=mc(K,j.mode,Me),H.return=j,H):(H=h(H,K.children||[]),H.return=j,H)}function ve(j,H,K,Me,Xe){return H===null||H.tag!==7?(H=zr(K,j.mode,Me,Xe),H.return=j,H):(H=h(H,K),H.return=j,H)}function ye(j,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=pc(""+H,j.mode,K),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return K=Ka(H.type,H.key,H.props,null,j.mode,K),K.ref=Mo(j,null,H),K.return=j,K;case F:return H=mc(H,j.mode,K),H.return=j,H;case se:var Me=H._init;return ye(j,Me(H._payload),K)}if(Ie(H)||le(H))return H=zr(H,j.mode,K,null),H.return=j,H;Ca(j,H)}return null}function _e(j,H,K,Me){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:I(j,H,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Xe?O(j,H,K,Me):null;case F:return K.key===Xe?te(j,H,K,Me):null;case se:return Xe=K._init,_e(j,H,Xe(K._payload),Me)}if(Ie(K)||le(K))return Xe!==null?null:ve(j,H,K,Me,null);Ca(j,K)}return null}function Ne(j,H,K,Me,Xe){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(K)||null,I(H,j,""+Me,Xe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case G:return j=j.get(Me.key===null?K:Me.key)||null,O(H,j,Me,Xe);case F:return j=j.get(Me.key===null?K:Me.key)||null,te(H,j,Me,Xe);case se:var Je=Me._init;return Ne(j,H,K,Je(Me._payload),Xe)}if(Ie(Me)||le(Me))return j=j.get(K)||null,ve(H,j,Me,Xe,null);Ca(H,Me)}return null}function He(j,H,K,Me){for(var Xe=null,Je=null,Ze=H,tt=H=0,on=null;Ze!==null&&tt<K.length;tt++){Ze.index>tt?(on=Ze,Ze=null):on=Ze.sibling;var Et=_e(j,Ze,K[tt],Me);if(Et===null){Ze===null&&(Ze=on);break}n&&Ze&&Et.alternate===null&&i(j,Ze),H=f(Et,H,tt),Je===null?Xe=Et:Je.sibling=Et,Je=Et,Ze=on}if(tt===K.length)return o(j,Ze),Ot&&Dr(j,tt),Xe;if(Ze===null){for(;tt<K.length;tt++)Ze=ye(j,K[tt],Me),Ze!==null&&(H=f(Ze,H,tt),Je===null?Xe=Ze:Je.sibling=Ze,Je=Ze);return Ot&&Dr(j,tt),Xe}for(Ze=l(j,Ze);tt<K.length;tt++)on=Ne(Ze,j,tt,K[tt],Me),on!==null&&(n&&on.alternate!==null&&Ze.delete(on.key===null?tt:on.key),H=f(on,H,tt),Je===null?Xe=on:Je.sibling=on,Je=on);return n&&Ze.forEach(function(fr){return i(j,fr)}),Ot&&Dr(j,tt),Xe}function Ge(j,H,K,Me){var Xe=le(K);if(typeof Xe!="function")throw Error(t(150));if(K=Xe.call(K),K==null)throw Error(t(151));for(var Je=Xe=null,Ze=H,tt=H=0,on=null,Et=K.next();Ze!==null&&!Et.done;tt++,Et=K.next()){Ze.index>tt?(on=Ze,Ze=null):on=Ze.sibling;var fr=_e(j,Ze,Et.value,Me);if(fr===null){Ze===null&&(Ze=on);break}n&&Ze&&fr.alternate===null&&i(j,Ze),H=f(fr,H,tt),Je===null?Xe=fr:Je.sibling=fr,Je=fr,Ze=on}if(Et.done)return o(j,Ze),Ot&&Dr(j,tt),Xe;if(Ze===null){for(;!Et.done;tt++,Et=K.next())Et=ye(j,Et.value,Me),Et!==null&&(H=f(Et,H,tt),Je===null?Xe=Et:Je.sibling=Et,Je=Et);return Ot&&Dr(j,tt),Xe}for(Ze=l(j,Ze);!Et.done;tt++,Et=K.next())Et=Ne(Ze,j,tt,Et.value,Me),Et!==null&&(n&&Et.alternate!==null&&Ze.delete(Et.key===null?tt:Et.key),H=f(Et,H,tt),Je===null?Xe=Et:Je.sibling=Et,Je=Et);return n&&Ze.forEach(function(sv){return i(j,sv)}),Ot&&Dr(j,tt),Xe}function Wt(j,H,K,Me){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Xe=K.key,Je=H;Je!==null;){if(Je.key===Xe){if(Xe=K.type,Xe===N){if(Je.tag===7){o(j,Je.sibling),H=h(Je,K.props.children),H.return=j,j=H;break e}}else if(Je.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&lf(Xe)===Je.type){o(j,Je.sibling),H=h(Je,K.props),H.ref=Mo(j,Je,K),H.return=j,j=H;break e}o(j,Je);break}else i(j,Je);Je=Je.sibling}K.type===N?(H=zr(K.props.children,j.mode,Me,K.key),H.return=j,j=H):(Me=Ka(K.type,K.key,K.props,null,j.mode,Me),Me.ref=Mo(j,H,K),Me.return=j,j=Me)}return E(j);case F:e:{for(Je=K.key;H!==null;){if(H.key===Je)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(j,H.sibling),H=h(H,K.children||[]),H.return=j,j=H;break e}else{o(j,H);break}else i(j,H);H=H.sibling}H=mc(K,j.mode,Me),H.return=j,j=H}return E(j);case se:return Je=K._init,Wt(j,H,Je(K._payload),Me)}if(Ie(K))return He(j,H,K,Me);if(le(K))return Ge(j,H,K,Me);Ca(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(j,H.sibling),H=h(H,K),H.return=j,j=H):(o(j,H),H=pc(K,j.mode,Me),H.return=j,j=H),E(j)):o(j,H)}return Wt}var gs=uf(!0),cf=uf(!1),ba=nr(null),Pa=null,_s=null,wu=null;function Tu(){wu=_s=Pa=null}function Au(n){var i=ba.current;Nt(ba),n._currentValue=i}function Ru(n,i,o){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===o)break;n=n.return}}function vs(n,i){Pa=n,wu=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(In=!0),n.firstContext=null)}function jn(n){var i=n._currentValue;if(wu!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Pa===null)throw Error(t(308));_s=n,Pa.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Lr=null;function Cu(n){Lr===null?Lr=[n]:Lr.push(n)}function hf(n,i,o,l){var h=i.interleaved;return h===null?(o.next=o,Cu(i)):(o.next=h.next,h.next=o),i.interleaved=o,bi(n,l)}function bi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var sr=!1;function bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,o){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,St&2){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,bi(n,o)}return h=l.interleaved,h===null?(i.next=i,Cu(l)):(i.next=h.next,h.next=i),l.interleaved=i,bi(n,o)}function Da(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,nn(n,o)}}function ff(n,i){var o=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var h=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?h=f=E:f=f.next=E,o=o.next}while(o!==null);f===null?h=f=i:f=f.next=i}else h=f=i;o={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,effects:l.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function La(n,i,o,l){var h=n.updateQueue;sr=!1;var f=h.firstBaseUpdate,E=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var O=I,te=O.next;O.next=null,E===null?f=te:E.next=te,E=O;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=te:I.next=te,ve.lastBaseUpdate=O))}if(f!==null){var ye=h.baseState;E=0,ve=te=O=null,I=f;do{var _e=I.lane,Ne=I.eventTime;if((l&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=n,Ge=I;switch(_e=i,Ne=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ne,ye,_e);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,_e=typeof He=="function"?He.call(Ne,ye,_e):He,_e==null)break e;ye=oe({},ye,_e);break e;case 2:sr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=h.effects,_e===null?h.effects=[I]:_e.push(I))}else Ne={eventTime:Ne,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(te=ve=Ne,O=ye):ve=ve.next=Ne,E|=_e;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);if(ve===null&&(O=ye),h.baseState=O,h.firstBaseUpdate=te,h.lastBaseUpdate=ve,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else f===null&&(h.shared.lanes=0);Nr|=E,n.lanes=E,n.memoizedState=ye}}function pf(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],h=l.callback;if(h!==null){if(l.callback=null,l=o,typeof h!="function")throw Error(t(191,h));h.call(l)}}}var wo={},pi=nr(wo),To=nr(wo),Ao=nr(wo);function Ir(n){if(n===wo)throw Error(t(174));return n}function Pu(n,i){switch(Lt(Ao,i),Lt(To,n),Lt(pi,wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Nt(pi),Lt(pi,i)}function xs(){Nt(pi),Nt(To),Nt(Ao)}function mf(n){Ir(Ao.current);var i=Ir(pi.current),o=We(i,n.type);i!==o&&(Lt(To,n),Lt(pi,o))}function Du(n){To.current===n&&(Nt(pi),Nt(To))}var kt=nr(0);function Ia(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lu=[];function Iu(){for(var n=0;n<Lu.length;n++)Lu[n]._workInProgressVersionPrimary=null;Lu.length=0}var Ua=C.ReactCurrentDispatcher,Uu=C.ReactCurrentBatchConfig,Ur=0,zt=null,qt=null,rn=null,Na=!1,Ro=!1,Co=0,C_=0;function gn(){throw Error(t(321))}function Nu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Qn(n[o],i[o]))return!1;return!0}function Fu(n,i,o,l,h,f){if(Ur=f,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=n===null||n.memoizedState===null?L_:I_,n=o(l,h),Ro){f=0;do{if(Ro=!1,Co=0,25<=f)throw Error(t(301));f+=1,rn=qt=null,i.updateQueue=null,Ua.current=U_,n=o(l,h)}while(Ro)}if(Ua.current=ka,i=qt!==null&&qt.next!==null,Ur=0,rn=qt=zt=null,Na=!1,i)throw Error(t(300));return n}function Ou(){var n=Co!==0;return Co=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?zt.memoizedState=rn=n:rn=rn.next=n,rn}function qn(){if(qt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=qt.next;var i=rn===null?zt.memoizedState:rn.next;if(i!==null)rn=i,qt=n;else{if(n===null)throw Error(t(310));qt=n,n={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},rn===null?zt.memoizedState=rn=n:rn=rn.next=n}return rn}function bo(n,i){return typeof i=="function"?i(n):i}function ku(n){var i=qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=qt,h=l.baseQueue,f=o.pending;if(f!==null){if(h!==null){var E=h.next;h.next=f.next,f.next=E}l.baseQueue=h=f,o.pending=null}if(h!==null){f=h.next,l=l.baseState;var I=E=null,O=null,te=f;do{var ve=te.lane;if((Ur&ve)===ve)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:n(l,te.action);else{var ye={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(I=O=ye,E=l):O=O.next=ye,zt.lanes|=ve,Nr|=ve}te=te.next}while(te!==null&&te!==f);O===null?E=l:O.next=I,Qn(l,i.memoizedState)||(In=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,o.lastRenderedState=l}if(n=o.interleaved,n!==null){h=n;do f=h.lane,zt.lanes|=f,Nr|=f,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function zu(n){var i=qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var l=o.dispatch,h=o.pending,f=i.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do f=n(f,E.action),E=E.next;while(E!==h);Qn(f,i.memoizedState)||(In=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),o.lastRenderedState=f}return[f,l]}function gf(){}function _f(n,i){var o=zt,l=qn(),h=i(),f=!Qn(l.memoizedState,h);if(f&&(l.memoizedState=h,In=!0),l=l.queue,Bu(yf.bind(null,o,l,n),[n]),l.getSnapshot!==i||f||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Po(9,xf.bind(null,o,l,h,i),void 0,null),sn===null)throw Error(t(349));Ur&30||vf(o,i,h)}return h}function vf(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function xf(n,i,o,l){i.value=o,i.getSnapshot=l,Sf(i)&&Ef(n)}function yf(n,i,o){return o(function(){Sf(i)&&Ef(n)})}function Sf(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Qn(n,o)}catch{return!0}}function Ef(n){var i=bi(n,1);i!==null&&ri(i,n,1,-1)}function Mf(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},i.queue=n,n=n.dispatch=D_.bind(null,zt,n),[i.memoizedState,n]}function Po(n,i,o,l){return n={tag:n,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(l=o.next,o.next=n,n.next=l,i.lastEffect=n)),n}function wf(){return qn().memoizedState}function Fa(n,i,o,l){var h=mi();zt.flags|=n,h.memoizedState=Po(1|i,o,void 0,l===void 0?null:l)}function Oa(n,i,o,l){var h=qn();l=l===void 0?null:l;var f=void 0;if(qt!==null){var E=qt.memoizedState;if(f=E.destroy,l!==null&&Nu(l,E.deps)){h.memoizedState=Po(i,o,f,l);return}}zt.flags|=n,h.memoizedState=Po(1|i,o,f,l)}function Tf(n,i){return Fa(8390656,8,n,i)}function Bu(n,i){return Oa(2048,8,n,i)}function Af(n,i){return Oa(4,2,n,i)}function Rf(n,i){return Oa(4,4,n,i)}function Cf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bf(n,i,o){return o=o!=null?o.concat([n]):null,Oa(4,4,Cf.bind(null,i,n),o)}function Hu(){}function Pf(n,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Nu(i,l[1])?l[0]:(o.memoizedState=[n,i],n)}function Df(n,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Nu(i,l[1])?l[0]:(n=n(),o.memoizedState=[n,i],n)}function Lf(n,i,o){return Ur&21?(Qn(o,i)||(o=Dt(),zt.lanes|=o,Nr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=o)}function b_(n,i){var o=yt;yt=o!==0&&4>o?o:4,n(!0);var l=Uu.transition;Uu.transition={};try{n(!1),i()}finally{yt=o,Uu.transition=l}}function If(){return qn().memoizedState}function P_(n,i,o){var l=cr(n);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Uf(n))Nf(i,o);else if(o=hf(n,i,o,l),o!==null){var h=Tn();ri(o,n,l,h),Ff(o,i,l)}}function D_(n,i,o){var l=cr(n),h={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Uf(n))Nf(i,h);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var E=i.lastRenderedState,I=f(E,o);if(h.hasEagerState=!0,h.eagerState=I,Qn(I,E)){var O=i.interleaved;O===null?(h.next=h,Cu(i)):(h.next=O.next,O.next=h),i.interleaved=h;return}}catch{}finally{}o=hf(n,i,h,l),o!==null&&(h=Tn(),ri(o,n,l,h),Ff(o,i,l))}}function Uf(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function Nf(n,i){Ro=Na=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Ff(n,i,o){if(o&4194240){var l=i.lanes;l&=n.pendingLanes,o|=l,i.lanes=o,nn(n,o)}}var ka={readContext:jn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},L_={readContext:jn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:jn,useEffect:Tf,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4194308,4,Cf.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Fa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fa(4,2,n,i)},useMemo:function(n,i){var o=mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var l=mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=P_.bind(null,zt,n),[l.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:Mf,useDebugValue:Hu,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=Mf(!1),i=n[0];return n=b_.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var l=zt,h=mi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),sn===null)throw Error(t(349));Ur&30||vf(l,i,o)}h.memoizedState=o;var f={value:o,getSnapshot:i};return h.queue=f,Tf(yf.bind(null,l,f,n),[n]),l.flags|=2048,Po(9,xf.bind(null,l,f,o,i),void 0,null),o},useId:function(){var n=mi(),i=sn.identifierPrefix;if(Ot){var o=Ci,l=Ri;o=(l&~(1<<32-at(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=C_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},I_={readContext:jn,useCallback:Pf,useContext:jn,useEffect:Bu,useImperativeHandle:bf,useInsertionEffect:Af,useLayoutEffect:Rf,useMemo:Df,useReducer:ku,useRef:wf,useState:function(){return ku(bo)},useDebugValue:Hu,useDeferredValue:function(n){var i=qn();return Lf(i,qt.memoizedState,n)},useTransition:function(){var n=ku(bo)[0],i=qn().memoizedState;return[n,i]},useMutableSource:gf,useSyncExternalStore:_f,useId:If,unstable_isNewReconciler:!1},U_={readContext:jn,useCallback:Pf,useContext:jn,useEffect:Bu,useImperativeHandle:bf,useInsertionEffect:Af,useLayoutEffect:Rf,useMemo:Df,useReducer:zu,useRef:wf,useState:function(){return zu(bo)},useDebugValue:Hu,useDeferredValue:function(n){var i=qn();return qt===null?i.memoizedState=n:Lf(i,qt.memoizedState,n)},useTransition:function(){var n=zu(bo)[0],i=qn().memoizedState;return[n,i]},useMutableSource:gf,useSyncExternalStore:_f,useId:If,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Vu(n,i,o,l){i=n.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var za={isMounted:function(n){return(n=n._reactInternals)?hi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var l=Tn(),h=cr(n),f=Pi(l,h);f.payload=i,o!=null&&(f.callback=o),i=or(n,f,h),i!==null&&(ri(i,n,h,l),Da(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var l=Tn(),h=cr(n),f=Pi(l,h);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=or(n,f,h),i!==null&&(ri(i,n,h,l),Da(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Tn(),l=cr(n),h=Pi(o,l);h.tag=2,i!=null&&(h.callback=i),i=or(n,h,l),i!==null&&(ri(i,n,l,o),Da(i,n,l))}};function Of(n,i,o,l,h,f,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,f,E):i.prototype&&i.prototype.isPureReactComponent?!go(o,l)||!go(h,f):!0}function kf(n,i,o){var l=!1,h=ir,f=i.contextType;return typeof f=="object"&&f!==null?f=jn(f):(h=Ln(i)?br:mn.current,l=i.contextTypes,f=(l=l!=null)?ds(n,h):ir),i=new i(o,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=f),i}function zf(n,i,o,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==n&&za.enqueueReplaceState(i,i.state,null)}function Gu(n,i,o,l){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},bu(n);var f=i.contextType;typeof f=="object"&&f!==null?h.context=jn(f):(f=Ln(i)?br:mn.current,h.context=ds(n,f)),h.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Vu(n,i,f,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&za.enqueueReplaceState(h,h.state,null),La(n,o,h,l),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,i){try{var o="",l=i;do o+=he(l),l=l.return;while(l);var h=o}catch(f){h=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:h,digest:null}}function Wu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Xu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var N_=typeof WeakMap=="function"?WeakMap:Map;function Bf(n,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ya||(Ya=!0,oc=l),Xu(n,i)},o}function Hf(n,i,o){o=Pi(-1,o),o.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var h=i.value;o.payload=function(){return l(h)},o.callback=function(){Xu(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Xu(n,i),typeof l!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Vf(n,i,o){var l=n.pingCache;if(l===null){l=n.pingCache=new N_;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(o)||(h.add(o),n=q_.bind(null,n,i,o),i.then(n,n))}function Gf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Wf(n,i,o,l,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),n)}var F_=C.ReactCurrentOwner,In=!1;function wn(n,i,o,l){i.child=n===null?cf(i,null,o,l):gs(i,n.child,o,l)}function Xf(n,i,o,l,h){o=o.render;var f=i.ref;return vs(i,h),l=Fu(n,i,o,l,f,h),o=Ou(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Di(n,i,h)):(Ot&&o&&xu(i),i.flags|=1,wn(n,i,l,h),i.child)}function Yf(n,i,o,l,h){if(n===null){var f=o.type;return typeof f=="function"&&!fc(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=f,$f(n,i,f,l,h)):(n=Ka(o.type,null,l,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,!(n.lanes&h)){var E=f.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(E,l)&&n.ref===i.ref)return Di(n,i,h)}return i.flags|=1,n=dr(f,l),n.ref=i.ref,n.return=i,i.child=n}function $f(n,i,o,l,h){if(n!==null){var f=n.memoizedProps;if(go(f,l)&&n.ref===i.ref)if(In=!1,i.pendingProps=l=f,(n.lanes&h)!==0)n.flags&131072&&(In=!0);else return i.lanes=n.lanes,Di(n,i,h)}return Yu(n,i,o,l,h)}function jf(n,i,o){var l=i.pendingProps,h=l.children,f=n!==null?n.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Es,Hn),Hn|=o;else{if(!(o&1073741824))return n=f!==null?f.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Es,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:o,Lt(Es,Hn),Hn|=l}else f!==null?(l=f.baseLanes|o,i.memoizedState=null):l=o,Lt(Es,Hn),Hn|=l;return wn(n,i,h,o),i.child}function qf(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Yu(n,i,o,l,h){var f=Ln(o)?br:mn.current;return f=ds(i,f),vs(i,h),o=Fu(n,i,o,l,f,h),l=Ou(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Di(n,i,h)):(Ot&&l&&xu(i),i.flags|=1,wn(n,i,o,h),i.child)}function Jf(n,i,o,l,h){if(Ln(o)){var f=!0;Ma(i)}else f=!1;if(vs(i,h),i.stateNode===null)Ha(n,i),kf(i,o,l),Gu(i,o,l,h),l=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var O=E.context,te=o.contextType;typeof te=="object"&&te!==null?te=jn(te):(te=Ln(o)?br:mn.current,te=ds(i,te));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||O!==te)&&zf(i,E,l,te),sr=!1;var _e=i.memoizedState;E.state=_e,La(i,l,E,h),O=i.memoizedState,I!==l||_e!==O||Dn.current||sr?(typeof ve=="function"&&(Vu(i,o,ve,l),O=i.memoizedState),(I=sr||Of(i,o,I,l,_e,O,te))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=te,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,df(n,i),I=i.memoizedProps,te=i.type===i.elementType?I:ti(i.type,I),E.props=te,ye=i.pendingProps,_e=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=jn(O):(O=Ln(o)?br:mn.current,O=ds(i,O));var Ne=o.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||_e!==O)&&zf(i,E,l,O),sr=!1,_e=i.memoizedState,E.state=_e,La(i,l,E,h);var He=i.memoizedState;I!==ye||_e!==He||Dn.current||sr?(typeof Ne=="function"&&(Vu(i,o,Ne,l),He=i.memoizedState),(te=sr||Of(i,o,te,l,_e,He,O)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=O,l=te):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),l=!1)}return $u(n,i,o,l,f,h)}function $u(n,i,o,l,h,f){qf(n,i);var E=(i.flags&128)!==0;if(!l&&!E)return h&&ef(i,o,!1),Di(n,i,f);l=i.stateNode,F_.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&E?(i.child=gs(i,n.child,null,f),i.child=gs(i,null,I,f)):wn(n,i,I,f),i.memoizedState=l.state,h&&ef(i,o,!0),i.child}function Zf(n){var i=n.stateNode;i.pendingContext?Kd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kd(n,i.context,!1),Pu(n,i.containerInfo)}function Kf(n,i,o,l,h){return ms(),Mu(h),i.flags|=256,wn(n,i,o,l),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qf(n,i,o){var l=i.pendingProps,h=kt.current,f=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Lt(kt,h&1),n===null)return Eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(E=l.children,n=l.fallback,f?(l=i.mode,f=i.child,E={mode:"hidden",children:E},!(l&1)&&f!==null?(f.childLanes=0,f.pendingProps=E):f=Qa(E,l,0,null),n=zr(n,l,o,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=qu(o),i.memoizedState=ju,n):Ju(i,E));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return O_(n,i,E,l,I,h,o);if(f){f=l.fallback,E=i.mode,h=n.child,I=h.sibling;var O={mode:"hidden",children:l.children};return!(E&1)&&i.child!==h?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=dr(h,O),l.subtreeFlags=h.subtreeFlags&14680064),I!==null?f=dr(I,f):(f=zr(f,E,o,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,E=n.child.memoizedState,E=E===null?qu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},f.memoizedState=E,f.childLanes=n.childLanes&~o,i.memoizedState=ju,l}return f=n.child,n=f.sibling,l=dr(f,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=o),l.return=i,l.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=l,i.memoizedState=null,l}function Ju(n,i){return i=Qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ba(n,i,o,l){return l!==null&&Mu(l),gs(i,n.child,null,o),n=Ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function O_(n,i,o,l,h,f,E){if(o)return i.flags&256?(i.flags&=-257,l=Wu(Error(t(422))),Ba(n,i,E,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=l.fallback,h=i.mode,l=Qa({mode:"visible",children:l.children},h,0,null),f=zr(f,h,E,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,i.mode&1&&gs(i,n.child,null,E),i.child.memoizedState=qu(E),i.memoizedState=ju,f);if(!(i.mode&1))return Ba(n,i,E,null);if(h.data==="$!"){if(l=h.nextSibling&&h.nextSibling.dataset,l)var I=l.dgst;return l=I,f=Error(t(419)),l=Wu(f,l,void 0),Ba(n,i,E,l)}if(I=(E&n.childLanes)!==0,In||I){if(l=sn,l!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(l.suspendedLanes|E)?0:h,h!==0&&h!==f.retryLane&&(f.retryLane=h,bi(n,h),ri(l,n,h,-1))}return dc(),l=Wu(Error(t(421))),Ba(n,i,E,l)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=J_.bind(null,n),h._reactRetry=i,null):(n=f.treeContext,Bn=tr(h.nextSibling),zn=i,Ot=!0,ei=null,n!==null&&(Yn[$n++]=Ri,Yn[$n++]=Ci,Yn[$n++]=Pr,Ri=n.id,Ci=n.overflow,Pr=i),i=Ju(i,l.children),i.flags|=4096,i)}function ep(n,i,o){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Ru(n.return,i,o)}function Zu(n,i,o,l,h){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=o,f.tailMode=h)}function tp(n,i,o){var l=i.pendingProps,h=l.revealOrder,f=l.tail;if(wn(n,i,l.children,o),l=kt.current,l&2)l=l&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ep(n,o,i);else if(n.tag===19)ep(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Lt(kt,l),!(i.mode&1))i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&Ia(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),Zu(i,!1,h,o,f);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ia(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Zu(i,!0,o,null,f);break;case"together":Zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Nr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=dr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=dr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function k_(n,i,o){switch(i.tag){case 3:Zf(i),ms();break;case 5:mf(i);break;case 1:Ln(i.type)&&Ma(i);break;case 4:Pu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,h=i.memoizedProps.value;Lt(ba,l._currentValue),l._currentValue=h;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?Qf(n,i,o):(Lt(kt,kt.current&1),n=Di(n,i,o),n!==null?n.sibling:null);Lt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,n.flags&128){if(l)return tp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Lt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,jf(n,i,o)}return Di(n,i,o)}var np,Ku,ip,rp;np=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},ip=function(n,i,o,l){var h=n.memoizedProps;if(h!==l){n=i.stateNode,Ir(pi.current);var f=null;switch(o){case"input":h=z(n,h),l=z(n,l),f=[];break;case"select":h=oe({},h,{value:void 0}),l=oe({},l,{value:void 0}),f=[];break;case"textarea":h=M(n,h),l=M(n,l),f=[];break;default:typeof h.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=ya)}dt(o,l);var E;o=null;for(te in h)if(!l.hasOwnProperty(te)&&h.hasOwnProperty(te)&&h[te]!=null)if(te==="style"){var I=h[te];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?f||(f=[]):(f=f||[]).push(te,null));for(te in l){var O=l[te];if(I=h!=null?h[te]:void 0,l.hasOwnProperty(te)&&O!==I&&(O!=null||I!=null))if(te==="style")if(I){for(E in I)!I.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&I[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(f||(f=[]),f.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(f=f||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(f=f||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ut("scroll",n),f||I===O||(f=[])):(f=f||[]).push(te,O))}o&&(f=f||[]).push("style",o);var te=f;(i.updateQueue=te)&&(i.flags|=4)}},rp=function(n,i,o,l){o!==l&&(i.flags|=4)};function Do(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,l=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags&14680064,l|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=o,i}function z_(n,i,o){var l=i.pendingProps;switch(yu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Ln(i.type)&&Ea(),_n(i),null;case 3:return l=i.stateNode,xs(),Nt(Dn),Nt(mn),Iu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Ra(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ei!==null&&(uc(ei),ei=null))),Ku(n,i),_n(i),null;case 5:Du(i);var h=Ir(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)ip(n,i,o,l,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=Ir(pi.current),Ra(i)){l=i.stateNode,o=i.type;var f=i.memoizedProps;switch(l[fi]=i,l[So]=f,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(h=0;h<vo.length;h++)Ut(vo[h],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":$t(l,f),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Ut("invalid",l);break;case"textarea":J(l,f),Ut("invalid",l)}dt(o,f),h=null;for(var E in f)if(f.hasOwnProperty(E)){var I=f[E];E==="children"?typeof I=="string"?l.textContent!==I&&(f.suppressHydrationWarning!==!0&&xa(l.textContent,I,n),h=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&xa(l.textContent,I,n),h=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ut("scroll",l)}switch(o){case"input":vt(l),Ye(l,f,!0);break;case"textarea":vt(l),ge(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=ya)}l=h,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=E.createElement(o,{is:l.is}):(n=E.createElement(o),o==="select"&&(E=n,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):n=E.createElementNS(n,o),n[fi]=i,n[So]=l,np(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(o,l),o){case"dialog":Ut("cancel",n),Ut("close",n),h=l;break;case"iframe":case"object":case"embed":Ut("load",n),h=l;break;case"video":case"audio":for(h=0;h<vo.length;h++)Ut(vo[h],n);h=l;break;case"source":Ut("error",n),h=l;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),h=l;break;case"details":Ut("toggle",n),h=l;break;case"input":$t(n,l),h=z(n,l),Ut("invalid",n);break;case"option":h=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},h=oe({},l,{value:void 0}),Ut("invalid",n);break;case"textarea":J(n,l),h=M(n,l),Ut("invalid",n);break;default:h=l}dt(o,h),I=h;for(f in I)if(I.hasOwnProperty(f)){var O=I[f];f==="style"?Qe(n,O):f==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):f==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&ht(n,O):typeof O=="number"&&ht(n,""+O):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?O!=null&&f==="onScroll"&&Ut("scroll",n):O!=null&&L(n,f,O,E))}switch(o){case"input":vt(n),Ye(n,l,!1);break;case"textarea":vt(n),ge(n);break;case"option":l.value!=null&&n.setAttribute("value",""+we(l.value));break;case"select":n.multiple=!!l.multiple,f=l.value,f!=null?P(n,!!l.multiple,f,!1):l.defaultValue!=null&&P(n,!!l.multiple,l.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)rp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ir(Ao.current),Ir(pi.current),Ra(i)){if(l=i.stateNode,o=i.memoizedProps,l[fi]=i,(f=l.nodeValue!==o)&&(n=zn,n!==null))switch(n.tag){case 3:xa(l.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(l.nodeValue,o,(n.mode&1)!==0)}f&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return _n(i),null;case 13:if(Nt(kt),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Bn!==null&&i.mode&1&&!(i.flags&128))af(),ms(),i.flags|=98560,f=!1;else if(f=Ra(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[fi]=i}else ms(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;_n(i),f=!1}else ei!==null&&(uc(ei),ei=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(n===null||kt.current&1?Jt===0&&(Jt=3):dc())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return xs(),Ku(n,i),n===null&&xo(i.stateNode.containerInfo),_n(i),null;case 10:return Au(i.type._context),_n(i),null;case 17:return Ln(i.type)&&Ea(),_n(i),null;case 19:if(Nt(kt),f=i.memoizedState,f===null)return _n(i),null;if(l=(i.flags&128)!==0,E=f.rendering,E===null)if(l)Do(f,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(E=Ia(n),E!==null){for(i.flags|=128,Do(f,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)f=o,n=l,f.flags&=14680066,E=f.alternate,E===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=E.childLanes,f.lanes=E.lanes,f.child=E.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=E.memoizedProps,f.memoizedState=E.memoizedState,f.updateQueue=E.updateQueue,f.type=E.type,n=E.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(kt,kt.current&1|2),i.child}n=n.sibling}f.tail!==null&&q()>Ms&&(i.flags|=128,l=!0,Do(f,!1),i.lanes=4194304)}else{if(!l)if(n=Ia(E),n!==null){if(i.flags|=128,l=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(f,!0),f.tail===null&&f.tailMode==="hidden"&&!E.alternate&&!Ot)return _n(i),null}else 2*q()-f.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,l=!0,Do(f,!1),i.lanes=4194304);f.isBackwards?(E.sibling=i.child,i.child=E):(o=f.last,o!==null?o.sibling=E:i.child=E,f.last=E)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=q(),i.sibling=null,o=kt.current,Lt(kt,l?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return hc(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Hn&1073741824&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function B_(n,i){switch(yu(i),i.tag){case 1:return Ln(i.type)&&Ea(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Nt(Dn),Nt(mn),Iu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Du(i),null;case 13:if(Nt(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return xs(),null;case 10:return Au(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Va=!1,vn=!1,H_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ss(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(n,i,l)}else o.current=null}function Qu(n,i,o){try{o()}catch(l){Gt(n,i,l)}}var sp=!1;function V_(n,i){if(hu=la,n=Fd(),iu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var E=0,I=-1,O=-1,te=0,ve=0,ye=n,_e=null;t:for(;;){for(var Ne;ye!==o||h!==0&&ye.nodeType!==3||(I=E+h),ye!==f||l!==0&&ye.nodeType!==3||(O=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)_e=ye,ye=Ne;for(;;){if(ye===n)break t;if(_e===o&&++te===h&&(I=E),_e===f&&++ve===l&&(O=E),(Ne=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Ne}o=I===-1||O===-1?null:{start:I,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(du={focusedElem:n,selectionRange:o},la=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Wt=He.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ti(i.type,Ge),Wt);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Gt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=sp,sp=!1,He}function Lo(n,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var h=l=l.next;do{if((h.tag&n)===n){var f=h.destroy;h.destroy=void 0,f!==void 0&&Qu(i,o,f)}h=h.next}while(h!==l)}}function Ga(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function ec(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function op(n){var i=n.alternate;i!==null&&(n.alternate=null,op(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[fi],delete i[So],delete i[gu],delete i[w_],delete i[T_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ap(n){return n.tag===5||n.tag===3||n.tag===4}function lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function tc(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(l!==4&&(n=n.child,n!==null))for(tc(n,i,o),n=n.sibling;n!==null;)tc(n,i,o),n=n.sibling}function nc(n,i,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(nc(n,i,o),n=n.sibling;n!==null;)nc(n,i,o),n=n.sibling}var cn=null,ni=!1;function ar(n,i,o){for(o=o.child;o!==null;)up(n,i,o),o=o.sibling}function up(n,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ke,o)}catch{}switch(o.tag){case 5:vn||Ss(o,i);case 6:var l=cn,h=ni;cn=null,ar(n,i,o),cn=l,ni=h,cn!==null&&(ni?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ni?(n=cn,o=o.stateNode,n.nodeType===8?mu(n.parentNode,o):n.nodeType===1&&mu(n,o),uo(n)):mu(cn,o.stateNode));break;case 4:l=cn,h=ni,cn=o.stateNode.containerInfo,ni=!0,ar(n,i,o),cn=l,ni=h;break;case 0:case 11:case 14:case 15:if(!vn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){h=l=l.next;do{var f=h,E=f.destroy;f=f.tag,E!==void 0&&(f&2||f&4)&&Qu(o,i,E),h=h.next}while(h!==l)}ar(n,i,o);break;case 1:if(!vn&&(Ss(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(I){Gt(o,i,I)}ar(n,i,o);break;case 21:ar(n,i,o);break;case 22:o.mode&1?(vn=(l=vn)||o.memoizedState!==null,ar(n,i,o),vn=l):ar(n,i,o);break;default:ar(n,i,o)}}function cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new H_),i.forEach(function(l){var h=Z_.bind(null,n,l);o.has(l)||(o.add(l),l.then(h,h))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var h=o[l];try{var f=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ni=!1;break e;case 3:cn=I.stateNode.containerInfo,ni=!0;break e;case 4:cn=I.stateNode.containerInfo,ni=!0;break e}I=I.return}if(cn===null)throw Error(t(160));up(f,E,h),cn=null,ni=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(te){Gt(h,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hp(i,n),i=i.sibling}function hp(n,i){var o=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),gi(n),l&4){try{Lo(3,n,n.return),Ga(3,n)}catch(Ge){Gt(n,n.return,Ge)}try{Lo(5,n,n.return)}catch(Ge){Gt(n,n.return,Ge)}}break;case 1:ii(i,n),gi(n),l&512&&o!==null&&Ss(o,o.return);break;case 5:if(ii(i,n),gi(n),l&512&&o!==null&&Ss(o,o.return),n.flags&32){var h=n.stateNode;try{ht(h,"")}catch(Ge){Gt(n,n.return,Ge)}}if(l&4&&(h=n.stateNode,h!=null)){var f=n.memoizedProps,E=o!==null?o.memoizedProps:f,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&it(h,f),rt(I,E);var te=rt(I,f);for(E=0;E<O.length;E+=2){var ve=O[E],ye=O[E+1];ve==="style"?Qe(h,ye):ve==="dangerouslySetInnerHTML"?Fe(h,ye):ve==="children"?ht(h,ye):L(h,ve,ye,te)}switch(I){case"input":nt(h,f);break;case"textarea":pe(h,f);break;case"select":var _e=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!f.multiple;var Ne=f.value;Ne!=null?P(h,!!f.multiple,Ne,!1):_e!==!!f.multiple&&(f.defaultValue!=null?P(h,!!f.multiple,f.defaultValue,!0):P(h,!!f.multiple,f.multiple?[]:"",!1))}h[So]=f}catch(Ge){Gt(n,n.return,Ge)}}break;case 6:if(ii(i,n),gi(n),l&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,f=n.memoizedProps;try{h.nodeValue=f}catch(Ge){Gt(n,n.return,Ge)}}break;case 3:if(ii(i,n),gi(n),l&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(Ge){Gt(n,n.return,Ge)}break;case 4:ii(i,n),gi(n);break;case 13:ii(i,n),gi(n),h=n.child,h.flags&8192&&(f=h.memoizedState!==null,h.stateNode.isHidden=f,!f||h.alternate!==null&&h.alternate.memoizedState!==null||(sc=q())),l&4&&cp(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(vn=(te=vn)||ve,ii(i,n),vn=te):ii(i,n),gi(n),l&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ve&&n.mode&1)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(_e=Oe,Ne=_e.child,_e.tag){case 0:case 11:case 14:case 15:Lo(4,_e,_e.return);break;case 1:Ss(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){l=_e,o=_e.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Gt(l,o,Ge)}}break;case 5:Ss(_e,_e.return);break;case 22:if(_e.memoizedState!==null){pp(ye);continue}}Ne!==null?(Ne.return=_e,Oe=Ne):pp(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,te?(f=h.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=qe("display",E))}catch(Ge){Gt(n,n.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ge){Gt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ii(i,n),gi(n),l&4&&cp(n);break;case 21:break;default:ii(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(ap(o)){var l=o;break e}o=o.return}throw Error(t(160))}switch(l.tag){case 5:var h=l.stateNode;l.flags&32&&(ht(h,""),l.flags&=-33);var f=lp(n);nc(n,f,h);break;case 3:case 4:var E=l.stateNode.containerInfo,I=lp(n);tc(n,I,E);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function G_(n,i,o){Oe=n,dp(n)}function dp(n,i,o){for(var l=(n.mode&1)!==0;Oe!==null;){var h=Oe,f=h.child;if(h.tag===22&&l){var E=h.memoizedState!==null||Va;if(!E){var I=h.alternate,O=I!==null&&I.memoizedState!==null||vn;I=Va;var te=vn;if(Va=E,(vn=O)&&!te)for(Oe=h;Oe!==null;)E=Oe,O=E.child,E.tag===22&&E.memoizedState!==null?mp(h):O!==null?(O.return=E,Oe=O):mp(h);for(;f!==null;)Oe=f,dp(f),f=f.sibling;Oe=h,Va=I,vn=te}fp(n)}else h.subtreeFlags&8772&&f!==null?(f.return=h,Oe=f):fp(n)}}function fp(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:vn||Ga(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!vn)if(o===null)l.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(h,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&pf(i,f,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}pf(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&uo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&ec(i)}catch(_e){Gt(i,i.return,_e)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function pp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function mp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(O){Gt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var h=i.return;try{l.componentDidMount()}catch(O){Gt(i,h,O)}}var f=i.return;try{ec(i)}catch(O){Gt(i,f,O)}break;case 5:var E=i.return;try{ec(i)}catch(O){Gt(i,E,O)}}}catch(O){Gt(i,i.return,O)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var W_=Math.ceil,Wa=C.ReactCurrentDispatcher,ic=C.ReactCurrentOwner,Jn=C.ReactCurrentBatchConfig,St=0,sn=null,Xt=null,hn=0,Hn=0,Es=nr(0),Jt=0,Io=null,Nr=0,Xa=0,rc=0,Uo=null,Un=null,sc=0,Ms=1/0,Li=null,Ya=!1,oc=null,lr=null,$a=!1,ur=null,ja=0,No=0,ac=null,qa=-1,Ja=0;function Tn(){return St&6?q():qa!==-1?qa:qa=q()}function cr(n){return n.mode&1?St&2&&hn!==0?hn&-hn:R_.transition!==null?(Ja===0&&(Ja=Dt()),Ja):(n=yt,n!==0||(n=window.event,n=n===void 0?16:gd(n.type)),n):1}function ri(n,i,o,l){if(50<No)throw No=0,ac=null,Error(t(185));tn(n,o,l),(!(St&2)||n!==sn)&&(n===sn&&(!(St&2)&&(Xa|=o),Jt===4&&hr(n,hn)),Nn(n,l),o===1&&St===0&&!(i.mode&1)&&(Ms=q()+500,wa&&rr()))}function Nn(n,i){var o=n.callbackNode;Mn(n,i);var l=fn(n,n===sn?hn:0);if(l===0)o!==null&&T(o),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(o!=null&&T(o),i===1)n.tag===0?A_(_p.bind(null,n)):tf(_p.bind(null,n)),E_(function(){!(St&6)&&rr()}),o=null;else{switch(di(l)){case 1:o=Se;break;case 4:o=Re;break;case 16:o=Ue;break;case 536870912:o=et;break;default:o=Ue}o=Tp(o,gp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function gp(n,i){if(qa=-1,Ja=0,St&6)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var l=fn(n,n===sn?hn:0);if(l===0)return null;if(l&30||l&n.expiredLanes||i)i=Za(n,l);else{i=l;var h=St;St|=2;var f=xp();(sn!==n||hn!==i)&&(Li=null,Ms=q()+500,Or(n,i));do try{$_();break}catch(I){vp(n,I)}while(!0);Tu(),Wa.current=f,St=h,Xt!==null?i=0:(sn=null,hn=0,i=Jt)}if(i!==0){if(i===2&&(h=wi(n),h!==0&&(l=h,i=lc(n,h))),i===1)throw o=Io,Or(n,0),hr(n,l),Nn(n,q()),o;if(i===6)hr(n,l);else{if(h=n.current.alternate,!(l&30)&&!X_(h)&&(i=Za(n,l),i===2&&(f=wi(n),f!==0&&(l=f,i=lc(n,f))),i===1))throw o=Io,Or(n,0),hr(n,l),Nn(n,q()),o;switch(n.finishedWork=h,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Un,Li);break;case 3:if(hr(n,l),(l&130023424)===l&&(i=sc+500-q(),10<i)){if(fn(n,0)!==0)break;if(h=n.suspendedLanes,(h&l)!==l){Tn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=pu(kr.bind(null,n,Un,Li),i);break}kr(n,Un,Li);break;case 4:if(hr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,h=-1;0<l;){var E=31-at(l);f=1<<E,E=i[E],E>h&&(h=E),l&=~f}if(l=h,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*W_(l/1960))-l,10<l){n.timeoutHandle=pu(kr.bind(null,n,Un,Li),l);break}kr(n,Un,Li);break;case 5:kr(n,Un,Li);break;default:throw Error(t(329))}}}return Nn(n,q()),n.callbackNode===o?gp.bind(null,n):null}function lc(n,i){var o=Uo;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Za(n,i),n!==2&&(i=Un,Un=o,i!==null&&uc(i)),n}function uc(n){Un===null?Un=n:Un.push.apply(Un,n)}function X_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var h=o[l],f=h.getSnapshot;h=h.value;try{if(!Qn(f(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~rc,i&=~Xa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-at(i),l=1<<o;n[o]=-1,i&=~l}}function _p(n){if(St&6)throw Error(t(327));ws();var i=fn(n,0);if(!(i&1))return Nn(n,q()),null;var o=Za(n,i);if(n.tag!==0&&o===2){var l=wi(n);l!==0&&(i=l,o=lc(n,l))}if(o===1)throw o=Io,Or(n,0),hr(n,i),Nn(n,q()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Un,Li),Nn(n,q()),null}function cc(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(Ms=q()+500,wa&&rr())}}function Fr(n){ur!==null&&ur.tag===0&&!(St&6)&&ws();var i=St;St|=1;var o=Jn.transition,l=yt;try{if(Jn.transition=null,yt=1,n)return n()}finally{yt=l,Jn.transition=o,St=i,!(St&6)&&rr()}}function hc(){Hn=Es.current,Nt(Es)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,S_(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(yu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ea();break;case 3:xs(),Nt(Dn),Nt(mn),Iu();break;case 5:Du(l);break;case 4:xs();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Au(l.type._context);break;case 22:case 23:hc()}o=o.return}if(sn=n,Xt=n=dr(n.current,null),hn=Hn=i,Jt=0,Io=null,rc=Xa=Nr=0,Un=Uo=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],l=o.interleaved,l!==null){o.interleaved=null;var h=l.next,f=o.pending;if(f!==null){var E=f.next;f.next=h,l.next=E}o.pending=l}Lr=null}return n}function vp(n,i){do{var o=Xt;try{if(Tu(),Ua.current=ka,Na){for(var l=zt.memoizedState;l!==null;){var h=l.queue;h!==null&&(h.pending=null),l=l.next}Na=!1}if(Ur=0,rn=qt=zt=null,Ro=!1,Co=0,ic.current=null,o===null||o.return===null){Jt=1,Io=i,Xt=null;break}e:{var f=n,E=o.return,I=o,O=i;if(i=hn,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,ve=I,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=Gf(E);if(Ne!==null){Ne.flags&=-257,Wf(Ne,E,I,f,i),Ne.mode&1&&Vf(f,te,i),i=Ne,O=te;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(O),i.updateQueue=Ge}else He.add(O);break e}else{if(!(i&1)){Vf(f,te,i),dc();break e}O=Error(t(426))}}else if(Ot&&I.mode&1){var Wt=Gf(E);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Wf(Wt,E,I,f,i),Mu(ys(O,I));break e}}f=O=ys(O,I),Jt!==4&&(Jt=2),Uo===null?Uo=[f]:Uo.push(f),f=E;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var j=Bf(f,O,i);ff(f,j);break e;case 1:I=O;var H=f.type,K=f.stateNode;if(!(f.flags&128)&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(lr===null||!lr.has(K)))){f.flags|=65536,i&=-i,f.lanes|=i;var Me=Hf(f,I,i);ff(f,Me);break e}}f=f.return}while(f!==null)}Sp(o)}catch(Xe){i=Xe,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function xp(){var n=Wa.current;return Wa.current=ka,n===null?ka:n}function dc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||!(Nr&268435455)&&!(Xa&268435455)||hr(sn,hn)}function Za(n,i){var o=St;St|=2;var l=xp();(sn!==n||hn!==i)&&(Li=null,Or(n,i));do try{Y_();break}catch(h){vp(n,h)}while(!0);if(Tu(),St=o,Wa.current=l,Xt!==null)throw Error(t(261));return sn=null,hn=0,Jt}function Y_(){for(;Xt!==null;)yp(Xt)}function $_(){for(;Xt!==null&&!X();)yp(Xt)}function yp(n){var i=wp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Sp(n):Xt=i,ic.current=null}function Sp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=B_(o,i),o!==null){o.flags&=32767,Xt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Xt=null;return}}else if(o=z_(o,i,Hn),o!==null){Xt=o;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=n}while(i!==null);Jt===0&&(Jt=5)}function kr(n,i,o){var l=yt,h=Jn.transition;try{Jn.transition=null,yt=1,j_(n,i,o,l)}finally{Jn.transition=h,yt=l}return null}function j_(n,i,o,l){do ws();while(ur!==null);if(St&6)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=o.lanes|o.childLanes;if(un(n,f),n===sn&&(Xt=sn=null,hn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||$a||($a=!0,Tp(Ue,function(){return ws(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=Jn.transition,Jn.transition=null;var E=yt;yt=1;var I=St;St|=4,ic.current=null,V_(n,o),hp(o,n),p_(du),la=!!hu,du=hu=null,n.current=o,G_(o),ee(),St=I,yt=E,Jn.transition=f}else n.current=o;if($a&&($a=!1,ur=n,ja=h),f=n.pendingLanes,f===0&&(lr=null),gt(o.stateNode),Nn(n,q()),i!==null)for(l=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],l(h.value,{componentStack:h.stack,digest:h.digest});if(Ya)throw Ya=!1,n=oc,oc=null,n;return ja&1&&n.tag!==0&&ws(),f=n.pendingLanes,f&1?n===ac?No++:(No=0,ac=n):No=0,rr(),null}function ws(){if(ur!==null){var n=di(ja),i=Jn.transition,o=yt;try{if(Jn.transition=null,yt=16>n?16:n,ur===null)var l=!1;else{if(n=ur,ur=null,ja=0,St&6)throw Error(t(331));var h=St;for(St|=4,Oe=n.current;Oe!==null;){var f=Oe,E=f.child;if(Oe.flags&16){var I=f.deletions;if(I!==null){for(var O=0;O<I.length;O++){var te=I[O];for(Oe=te;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Lo(8,ve,f)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var _e=ve.sibling,Ne=ve.return;if(op(ve),ve===te){Oe=null;break}if(_e!==null){_e.return=Ne,Oe=_e;break}Oe=Ne}}}var He=f.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Wt=Ge.sibling;Ge.sibling=null,Ge=Wt}while(Ge!==null)}}Oe=f}}if(f.subtreeFlags&2064&&E!==null)E.return=f,Oe=E;else e:for(;Oe!==null;){if(f=Oe,f.flags&2048)switch(f.tag){case 0:case 11:case 15:Lo(9,f,f.return)}var j=f.sibling;if(j!==null){j.return=f.return,Oe=j;break e}Oe=f.return}}var H=n.current;for(Oe=H;Oe!==null;){E=Oe;var K=E.child;if(E.subtreeFlags&2064&&K!==null)K.return=E,Oe=K;else e:for(E=H;Oe!==null;){if(I=Oe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Ga(9,I)}}catch(Xe){Gt(I,I.return,Xe)}if(I===E){Oe=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,Oe=Me;break e}Oe=I.return}}if(St=h,rr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ke,n)}catch{}l=!0}return l}finally{yt=o,Jn.transition=i}}return!1}function Ep(n,i,o){i=ys(o,i),i=Bf(n,i,1),n=or(n,i,1),i=Tn(),n!==null&&(tn(n,1,i),Nn(n,i))}function Gt(n,i,o){if(n.tag===3)Ep(n,n,o);else for(;i!==null;){if(i.tag===3){Ep(i,n,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(lr===null||!lr.has(l))){n=ys(o,n),n=Hf(i,n,1),i=or(i,n,1),n=Tn(),i!==null&&(tn(i,1,n),Nn(i,n));break}}i=i.return}}function q_(n,i,o){var l=n.pingCache;l!==null&&l.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&o,sn===n&&(hn&o)===o&&(Jt===4||Jt===3&&(hn&130023424)===hn&&500>q()-sc?Or(n,0):rc|=o),Nn(n,i)}function Mp(n,i){i===0&&(n.mode&1?(i=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):i=1);var o=Tn();n=bi(n,i),n!==null&&(tn(n,i,o),Nn(n,o))}function J_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Mp(n,o)}function Z_(n,i){var o=0;switch(n.tag){case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Mp(n,o)}var wp;wp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return In=!1,k_(n,i,o);In=!!(n.flags&131072)}else In=!1,Ot&&i.flags&1048576&&nf(i,Aa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ha(n,i),n=i.pendingProps;var h=ds(i,mn.current);vs(i,o),h=Fu(null,i,l,n,h,o);var f=Ou();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(l)?(f=!0,Ma(i)):f=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,bu(i),h.updater=za,i.stateNode=h,h._reactInternals=i,Gu(i,l,n,o),i=$u(null,i,l,!0,f,o)):(i.tag=0,Ot&&f&&xu(i),wn(null,i,h,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ha(n,i),n=i.pendingProps,h=l._init,l=h(l._payload),i.type=l,h=i.tag=Q_(l),n=ti(l,n),h){case 0:i=Yu(null,i,l,n,o);break e;case 1:i=Jf(null,i,l,n,o);break e;case 11:i=Xf(null,i,l,n,o);break e;case 14:i=Yf(null,i,l,ti(l.type,n),o);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),Yu(n,i,l,h,o);case 1:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),Jf(n,i,l,h,o);case 3:e:{if(Zf(i),n===null)throw Error(t(387));l=i.pendingProps,f=i.memoizedState,h=f.element,df(n,i),La(i,l,null,o);var E=i.memoizedState;if(l=E.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){h=ys(Error(t(423)),i),i=Kf(n,i,l,o,h);break e}else if(l!==h){h=ys(Error(t(424)),i),i=Kf(n,i,l,o,h);break e}else for(Bn=tr(i.stateNode.containerInfo.firstChild),zn=i,Ot=!0,ei=null,o=cf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),l===h){i=Di(n,i,o);break e}wn(n,i,l,o)}i=i.child}return i;case 5:return mf(i),n===null&&Eu(i),l=i.type,h=i.pendingProps,f=n!==null?n.memoizedProps:null,E=h.children,fu(l,h)?E=null:f!==null&&fu(l,f)&&(i.flags|=32),qf(n,i),wn(n,i,E,o),i.child;case 6:return n===null&&Eu(i),null;case 13:return Qf(n,i,o);case 4:return Pu(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=gs(i,null,l,o):wn(n,i,l,o),i.child;case 11:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),Xf(n,i,l,h,o);case 7:return wn(n,i,i.pendingProps,o),i.child;case 8:return wn(n,i,i.pendingProps.children,o),i.child;case 12:return wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,h=i.pendingProps,f=i.memoizedProps,E=h.value,Lt(ba,l._currentValue),l._currentValue=E,f!==null)if(Qn(f.value,E)){if(f.children===h.children&&!Dn.current){i=Di(n,i,o);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var I=f.dependencies;if(I!==null){E=f.child;for(var O=I.firstContext;O!==null;){if(O.context===l){if(f.tag===1){O=Pi(-1,o&-o),O.tag=2;var te=f.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),te.pending=O}}f.lanes|=o,O=f.alternate,O!==null&&(O.lanes|=o),Ru(f.return,o,i),I.lanes|=o;break}O=O.next}}else if(f.tag===10)E=f.type===i.type?null:f.child;else if(f.tag===18){if(E=f.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Ru(E,o,i),E=f.sibling}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}wn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,l=i.pendingProps.children,vs(i,o),h=jn(h),l=l(h),i.flags|=1,wn(n,i,l,o),i.child;case 14:return l=i.type,h=ti(l,i.pendingProps),h=ti(l.type,h),Yf(n,i,l,h,o);case 15:return $f(n,i,i.type,i.pendingProps,o);case 17:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),Ha(n,i),i.tag=1,Ln(l)?(n=!0,Ma(i)):n=!1,vs(i,o),kf(i,l,h),Gu(i,l,h,o),$u(null,i,l,!0,n,o);case 19:return tp(n,i,o);case 22:return jf(n,i,o)}throw Error(t(156,i.tag))};function Tp(n,i){return sa(n,i)}function K_(n,i,o,l){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,l){return new K_(n,i,o,l)}function fc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Q_(n){if(typeof n=="function")return fc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===ce)return 14}return 2}function dr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ka(n,i,o,l,h,f){var E=2;if(l=n,typeof n=="function")fc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case N:return zr(o.children,h,f,i);case V:E=8,h|=8;break;case b:return n=Zn(12,o,i,h|2),n.elementType=b,n.lanes=f,n;case Z:return n=Zn(13,o,i,h),n.elementType=Z,n.lanes=f,n;case ae:return n=Zn(19,o,i,h),n.elementType=ae,n.lanes=f,n;case ue:return Qa(o,h,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case k:E=9;break e;case ne:E=11;break e;case ce:E=14;break e;case se:E=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(E,o,i,h),i.elementType=n,i.type=l,i.lanes=f,i}function zr(n,i,o,l){return n=Zn(7,n,l,i),n.lanes=o,n}function Qa(n,i,o,l){return n=Zn(22,n,l,i),n.elementType=ue,n.lanes=o,n.stateNode={isHidden:!1},n}function pc(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function mc(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ev(n,i,o,l,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=l,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function gc(n,i,o,l,h,f,E,I,O){return n=new ev(n,i,o,I,O),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Zn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(f),n}function tv(n,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:n,containerInfo:i,implementation:o}}function Ap(n){if(!n)return ir;n=n._reactInternals;e:{if(hi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ln(o))return Qd(n,o,i)}return i}function Rp(n,i,o,l,h,f,E,I,O){return n=gc(o,l,!0,n,h,f,E,I,O),n.context=Ap(null),o=n.current,l=Tn(),h=cr(o),f=Pi(l,h),f.callback=i??null,or(o,f,h),n.current.lanes=h,tn(n,h,l),Nn(n,l),n}function el(n,i,o,l){var h=i.current,f=Tn(),E=cr(h);return o=Ap(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(f,E),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=or(h,i,E),n!==null&&(ri(n,h,E,f),Da(n,h,E)),E}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function _c(n,i){Cp(n,i),(n=n.alternate)&&Cp(n,i)}var bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function vc(n){this._internalRoot=n}nl.prototype.render=vc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=vc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){el(null,n,null,null)}),i[Ti]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=hd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,n),o===0&&pd(n)}};function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function nv(n,i,o,l,h){if(h){if(typeof l=="function"){var f=l;l=function(){var te=tl(E);f.call(te)}}var E=Rp(i,l,n,0,null,!1,!1,"",Pp);return n._reactRootContainer=E,n[Ti]=E.current,xo(n.nodeType===8?n.parentNode:n),Fr(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof l=="function"){var I=l;l=function(){var te=tl(O);I.call(te)}}var O=gc(n,0,!1,null,null,!1,!1,"",Pp);return n._reactRootContainer=O,n[Ti]=O.current,xo(n.nodeType===8?n.parentNode:n),Fr(function(){el(i,O,o,l)}),O}function rl(n,i,o,l,h){var f=o._reactRootContainer;if(f){var E=f;if(typeof h=="function"){var I=h;h=function(){var O=tl(E);I.call(O)}}el(i,E,n,h)}else E=nv(o,i,n,h,l);return tl(E)}ud=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(nn(i,o|1),Nn(i,q()),!(St&6)&&(Ms=q()+500,rr()))}break;case 13:Fr(function(){var l=bi(n,1);if(l!==null){var h=Tn();ri(l,n,1,h)}}),_c(n,1)}},Wl=function(n){if(n.tag===13){var i=bi(n,134217728);if(i!==null){var o=Tn();ri(i,n,134217728,o)}_c(n,134217728)}},cd=function(n){if(n.tag===13){var i=cr(n),o=bi(n,i);if(o!==null){var l=Tn();ri(o,n,i,l)}_c(n,i)}},hd=function(){return yt},dd=function(n,i){var o=yt;try{return yt=n,i()}finally{yt=o}},Ae=function(n,i,o){switch(i){case"input":if(nt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==n&&l.form===n.form){var h=Sa(l);if(!h)throw Error(t(90));lt(l),nt(l,h)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},It=cc,jt=Fr;var iv={usingClientEntryPoint:!1,Events:[Eo,cs,Sa,De,st,cc]},Fo={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Ke=sl.inject(rv),Ve=sl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv,Fn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(i))throw Error(t(200));return tv(n,i,null,o)},Fn.createRoot=function(n,i){if(!xc(n))throw Error(t(299));var o=!1,l="",h=bp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=gc(n,1,!1,null,null,o,!1,l,h),n[Ti]=i.current,xo(n.nodeType===8?n.parentNode:n),new vc(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Fr(n)},Fn.hydrate=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,o)},Fn.hydrateRoot=function(n,i,o){if(!xc(n))throw Error(t(405));var l=o!=null&&o.hydratedSources||null,h=!1,f="",E=bp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Rp(i,null,n,1,o??null,h,!1,f,E),n[Ti]=i.current,xo(n),l)for(n=0;n<l.length;n++)o=l[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new nl(i)},Fn.render=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,o)},Fn.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1},Fn.unstable_batchedUpdates=cc,Fn.unstable_renderSubtreeIntoContainer=function(n,i,o,l){if(!il(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,o,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var kp;function dv(){if(kp)return Ec.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ec.exports=hv(),Ec.exports}var zp;function fv(){if(zp)return ol;zp=1;var s=dv();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var pv=fv(),mv=Wh();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="172",Xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gv=0,Bp=1,_v=2,Wm=1,Xm=2,ki=3,wr=0,Cn=1,zi=2,Er=0,Ys=1,Hp=2,Vp=3,Gp=4,vv=5,$r=100,xv=101,yv=102,Sv=103,Ev=104,Mv=200,wv=201,Tv=202,Av=203,rh=204,sh=205,Rv=206,Cv=207,bv=208,Pv=209,Dv=210,Lv=211,Iv=212,Uv=213,Nv=214,oh=0,ah=1,lh=2,qs=3,uh=4,ch=5,hh=6,dh=7,Ym=0,Fv=1,Ov=2,Mr=0,kv=1,zv=2,Bv=3,Hv=4,Vv=5,Gv=6,Wv=7,$m=300,Js=301,Zs=302,fh=303,ph=304,Bl=306,dn=1e3,qr=1001,mh=1002,ci=1003,Xv=1004,al=1005,vi=1006,Tc=1007,Jr=1008,Gi=1009,jm=1010,qm=1011,Yo=1012,Xh=1013,Zr=1014,Bi=1015,Jo=1016,Yh=1017,$h=1018,Ks=1020,Jm=35902,Zm=1021,Km=1022,ui=1023,Qm=1024,eg=1025,$s=1026,Qs=1027,tg=1028,jh=1029,ng=1030,qh=1031,Jh=1033,Dl=33776,Ll=33777,Il=33778,Ul=33779,gh=35840,_h=35841,vh=35842,xh=35843,yh=36196,Sh=37492,Eh=37496,Mh=37808,wh=37809,Th=37810,Ah=37811,Rh=37812,Ch=37813,bh=37814,Ph=37815,Dh=37816,Lh=37817,Ih=37818,Uh=37819,Nh=37820,Fh=37821,Nl=36492,Oh=36494,kh=36495,ig=36283,zh=36284,Bh=36285,Hh=36286,Yv=3200,$v=3201,rg=0,jv=1,Sr="",ln="srgb",eo="srgb-linear",Ol="linear",Ct="srgb",Ts=7680,Wp=519,qv=512,Jv=513,Zv=514,sg=515,Kv=516,Qv=517,e0=518,t0=519,Xp=35044,Yp="300 es",Hi=2e3,kl=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(t);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $p=1234567;const Wo=Math.PI/180,$o=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function Zh(s,e){return(s%e+e)%e}function n0(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function i0(s,e,t){return s!==e?(t-s)/(e-s):0}function Xo(s,e,t){return(1-t)*s+t*e}function r0(s,e,t,r){return Xo(s,e,1-Math.exp(-t*r))}function s0(s,e=1){return e-Math.abs(Zh(s,e*2)-e)}function o0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function a0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function l0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function u0(s,e){return s+Math.random()*(e-s)}function c0(s){return s*(.5-Math.random())}function h0(s){s!==void 0&&($p=s);let e=$p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d0(s){return s*Wo}function f0(s){return s*$o}function p0(s){return(s&s-1)===0&&s!==0}function m0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function g0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _0(s,e,t,r,a){const u=Math.cos,c=Math.sin,d=u(t/2),p=c(t/2),m=u((e+r)/2),_=c((e+r)/2),v=u((e-r)/2),x=c((e-r)/2),S=u((r-e)/2),w=c((r-e)/2);switch(a){case"XYX":s.set(d*_,p*v,p*x,d*m);break;case"YZY":s.set(p*x,d*_,p*v,d*m);break;case"ZXZ":s.set(p*v,p*x,d*_,d*m);break;case"XZX":s.set(d*_,p*w,p*S,d*m);break;case"YXY":s.set(p*S,d*_,p*w,d*m);break;case"ZYZ":s.set(p*w,p*S,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const v0={DEG2RAD:Wo,RAD2DEG:$o,generateUUID:io,clamp:pt,euclideanModulo:Zh,mapLinear:n0,inverseLerp:i0,lerp:Xo,damp:r0,pingpong:s0,smoothstep:o0,smootherstep:a0,randInt:l0,randFloat:u0,randFloatSpread:c0,seededRandom:h0,degToRad:d0,radToDeg:f0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:_0,normalize:An,denormalize:Bs};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,a,u,c,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,c,d,p,m)}set(e,t,r,a,u,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=u,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],w=r[8],R=a[0],y=a[3],g=a[6],D=a[1],L=a[4],C=a[7],G=a[2],F=a[5],N=a[8];return u[0]=c*R+d*D+p*G,u[3]=c*y+d*L+p*F,u[6]=c*g+d*C+p*N,u[1]=m*R+_*D+v*G,u[4]=m*y+_*L+v*F,u[7]=m*g+_*C+v*N,u[2]=x*R+S*D+w*G,u[5]=x*y+S*L+w*F,u[8]=x*g+S*C+w*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*c*_-t*d*m-r*u*_+r*d*p+a*u*m-a*c*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*c-d*m,x=d*p-_*u,S=m*u-c*p,w=t*v+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*c)*R,e[3]=x*R,e[4]=(_*t-a*p)*R,e[5]=(a*u-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(c*t-r*u)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new ut;function og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function x0(){const s=jo("canvas");return s.style.display="block",s}const jp={};function Hs(s){s in jp||(jp[s]=!0,console.warn(s))}function y0(s,e,t){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:r()}}setTimeout(u,t)})}function S0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function E0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M0(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ct&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(a.r=js(a.r),a.g=js(a.g),a.b=js(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Ol:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,c){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:r,transfer:Ol,toXYZ:qp,fromXYZ:Jp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:r,transfer:Ct,toXYZ:qp,fromXYZ:Jp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),s}const Mt=M0();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class w0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=jo("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=Vi(u[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Vi(t[r]/255)*255):t[r]=Vi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Rc(a[c].image)):u.push(Rc(a[c]))}else u=Rc(a);r.url=u}return t||(e.images[this.uuid]=r),r}}function Rc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?w0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A0=0;class bn extends es{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,r=qr,a=qr,u=vi,c=Jr,d=ui,p=Gi,m=bn.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=io(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=$m;bn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,r=0,a=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],w=p[9],R=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,C=(S+1)/2,G=(g+1)/2,F=(_+x)/4,N=(v+R)/4,V=(w+y)/4;return L>C&&L>G?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=F/r,u=N/r):C>G?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=F/a,u=V/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=N/u,a=V/u),this.set(r,a,u,t),this}let D=Math.sqrt((y-w)*(y-w)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(v-R)/D,this.z=(x-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends es{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ag(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends R0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class lg extends bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,u,c,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[c+0],S=u[c+1],w=u[c+2],R=u[c+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=w,e[t+3]=R;return}if(v!==R||p!==x||m!==S||_!==w){let y=1-d;const g=p*x+m*S+_*w+v*R,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const G=Math.sqrt(L),F=Math.atan2(G,g*D);y=Math.sin(y*F)/G,d=Math.sin(d*F)/G}const C=d*D;if(p=p*y+x*C,m=m*y+S*C,_=_*y+w*C,v=v*y+R*C,y===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=G,m*=G,_*=G,v*=G}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,u,c){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[c],x=u[c+1],S=u[c+2],w=u[c+3];return e[t]=d*w+_*v+p*S-m*x,e[t+1]=p*w+_*x+m*v-d*S,e[t+2]=m*w+_*S+d*x-p*v,e[t+3]=_*w-d*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(c){case"XYZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"YXZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"ZXY":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"ZYX":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"YZX":this._x=x*_*v+m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v-x*S*w;break;case"XZY":this._x=x*_*v-m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],u=t[8],c=t[1],d=t[5],p=t[9],m=t[2],_=t[6],v=t[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(c-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(u+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(c-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,u=e._z,c=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+c*d+a*m-u*p,this._y=a*_+c*p+u*d-r*m,this._z=u*_+c*m+r*p-a*d,this._w=c*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*u+t*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-t)*_)/m,x=Math.sin(t*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*a,this.y=u[1]*t+u[4]*r+u[7]*a,this.z=u[2]*t+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*t+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*t+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*t+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),_=2*(d*t-u*a),v=2*(u*r-c*t);return this.x=t+p*m+c*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a,this.y=u[1]*t+u[5]*r+u[9]*a,this.z=u[2]*t+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,u=e.z,c=t.x,d=t.y,p=t.z;return this.x=a*p-u*d,this.y=u*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new $,Zp=new Qr;class Zo{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(u,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ul.subVectors(this.max,ko),Rs.subVectors(e.a,ko),Cs.subVectors(e.b,ko),bs.subVectors(e.c,ko),pr.subVectors(Cs,Rs),mr.subVectors(bs,Cs),Br.subVectors(Rs,bs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Br.z,Br.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Br.z,0,-Br.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Br.y,Br.x,0];return!bc(t,Rs,Cs,bs,ul)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,Rs,Cs,bs,ul))?!1:(cl.crossVectors(pr,mr),t=[cl.x,cl.y,cl.z],bc(t,Rs,Cs,bs,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new $,new $,new $,new $,new $,new $,new $,new $],si=new $,ll=new Zo,Rs=new $,Cs=new $,bs=new $,pr=new $,mr=new $,Br=new $,ko=new $,ul=new $,cl=new $,Hr=new $;function bc(s,e,t,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Hr.fromArray(s,u);const d=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),p=e.dot(Hr),m=t.dot(Hr),_=r.dot(Hr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const b0=new Zo,zo=new $,Pc=new $;class Kh{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):b0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Pc)),this.expandByPoint(zo.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new $,Dc=new $,hl=new $,gr=new $,Lc=new $,dl=new $,Ic=new $;class ug{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Dc.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Dc);const u=e.distanceTo(t)*.5,c=-this.direction.dot(hl),d=gr.dot(this.direction),p=-gr.dot(hl),m=gr.lengthSq(),_=Math.abs(1-c*c);let v,x,S,w;if(_>0)if(v=c*p-d,x=c*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const R=1/_;v*=R,x*=R,S=v*(v+c*x+2*d)+x*(c*v+x+2*p)+m}else x=u,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-c*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(v=Math.max(0,-(c*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m);else x=c>0?-u:u,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Dc).addScaledVector(hl,x),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,u,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,a,u){Lc.subVectors(t,e),dl.subVectors(r,e),Ic.crossVectors(Lc,dl);let c=this.direction.dot(Ic),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;gr.subVectors(this.origin,e);const p=d*this.direction.dot(dl.crossVectors(gr,dl));if(p<0)return null;const m=d*this.direction.dot(Lc.cross(gr));if(m<0||p+m>c)return null;const _=-d*gr.dot(Ic);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,r,a,u,c,d,p,m,_,v,x,S,w,R,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,u,c,d,p,m,_,v,x,S,w,R,y)}set(e,t,r,a,u,c,d,p,m,_,v,x,S,w,R,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=w,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),u=1/Ps.setFromMatrixColumn(e,1).length(),c=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=c*_,S=c*v,w=d*_,R=d*v;t[0]=p*_,t[4]=-p*v,t[8]=m,t[1]=S+w*m,t[5]=x-R*m,t[9]=-d*p,t[2]=R-x*m,t[6]=w+S*m,t[10]=c*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,w=m*_,R=m*v;t[0]=x+R*d,t[4]=w*d-S,t[8]=c*m,t[1]=c*v,t[5]=c*_,t[9]=-d,t[2]=S*d-w,t[6]=R+x*d,t[10]=c*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,w=m*_,R=m*v;t[0]=x-R*d,t[4]=-c*v,t[8]=w+S*d,t[1]=S+w*d,t[5]=c*_,t[9]=R-x*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const x=c*_,S=c*v,w=d*_,R=d*v;t[0]=p*_,t[4]=w*m-S,t[8]=x*m+R,t[1]=p*v,t[5]=R*m+x,t[9]=S*m-w,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const x=c*p,S=c*m,w=d*p,R=d*m;t[0]=p*_,t[4]=R-x*v,t[8]=w*v+S,t[1]=v,t[5]=c*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*v+w,t[10]=x-R*v}else if(e.order==="XZY"){const x=c*p,S=c*m,w=d*p,R=d*m;t[0]=p*_,t[4]=-v,t[8]=m*_,t[1]=x*v+R,t[5]=c*_,t[9]=S*v-w,t[2]=w*v-S,t[6]=d*_,t[10]=R*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,D0)}lookAt(e,t,r){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),_r.crossVectors(r,Vn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),_r.crossVectors(r,Vn)),_r.normalize(),fl.crossVectors(Vn,_r),a[0]=_r.x,a[4]=fl.x,a[8]=Vn.x,a[1]=_r.y,a[5]=fl.y,a[9]=Vn.y,a[2]=_r.z,a[6]=fl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],w=r[2],R=r[6],y=r[10],g=r[14],D=r[3],L=r[7],C=r[11],G=r[15],F=a[0],N=a[4],V=a[8],b=a[12],A=a[1],k=a[5],ne=a[9],Z=a[13],ae=a[2],ce=a[6],se=a[10],ue=a[14],B=a[3],le=a[7],oe=a[11],U=a[15];return u[0]=c*F+d*A+p*ae+m*B,u[4]=c*N+d*k+p*ce+m*le,u[8]=c*V+d*ne+p*se+m*oe,u[12]=c*b+d*Z+p*ue+m*U,u[1]=_*F+v*A+x*ae+S*B,u[5]=_*N+v*k+x*ce+S*le,u[9]=_*V+v*ne+x*se+S*oe,u[13]=_*b+v*Z+x*ue+S*U,u[2]=w*F+R*A+y*ae+g*B,u[6]=w*N+R*k+y*ce+g*le,u[10]=w*V+R*ne+y*se+g*oe,u[14]=w*b+R*Z+y*ue+g*U,u[3]=D*F+L*A+C*ae+G*B,u[7]=D*N+L*k+C*ce+G*le,u[11]=D*V+L*ne+C*se+G*oe,u[15]=D*b+L*Z+C*ue+G*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],w=e[3],R=e[7],y=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+t*p*S-t*m*x+u*c*x-a*c*S+a*m*_-u*p*_)+y*(+t*m*v-t*d*S-u*c*v+r*c*S+u*d*_-r*m*_)+g*(-a*d*_-t*p*v+t*d*x+a*c*v-r*c*x+r*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],w=e[12],R=e[13],y=e[14],g=e[15],D=v*y*m-R*x*m+R*p*S-d*y*S-v*p*g+d*x*g,L=w*x*m-_*y*m-w*p*S+c*y*S+_*p*g-c*x*g,C=_*R*m-w*v*m+w*d*S-c*R*S-_*d*g+c*v*g,G=w*v*p-_*R*p-w*d*x+c*R*x+_*d*y-c*v*y,F=t*D+r*L+a*C+u*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=D*N,e[1]=(R*x*u-v*y*u-R*a*S+r*y*S+v*a*g-r*x*g)*N,e[2]=(d*y*u-R*p*u+R*a*m-r*y*m-d*a*g+r*p*g)*N,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*S-r*p*S)*N,e[4]=L*N,e[5]=(_*y*u-w*x*u+w*a*S-t*y*S-_*a*g+t*x*g)*N,e[6]=(w*p*u-c*y*u-w*a*m+t*y*m+c*a*g-t*p*g)*N,e[7]=(c*x*u-_*p*u+_*a*m-t*x*m-c*a*S+t*p*S)*N,e[8]=C*N,e[9]=(w*v*u-_*R*u-w*r*S+t*R*S+_*r*g-t*v*g)*N,e[10]=(c*R*u-w*d*u+w*r*m-t*R*m-c*r*g+t*d*g)*N,e[11]=(_*d*u-c*v*u-_*r*m+t*v*m+c*r*S-t*d*S)*N,e[12]=G*N,e[13]=(_*R*a-w*v*a+w*r*x-t*R*x-_*r*y+t*v*y)*N,e[14]=(w*d*a-c*R*a-w*r*p+t*R*p+c*r*y-t*d*y)*N,e[15]=(c*v*a-_*d*a+_*r*p-t*v*p-c*r*x+t*d*x)*N,this}scale(e){const t=this.elements,r=e.x,a=e.y,u=e.z;return t[0]*=r,t[4]*=a,t[8]*=u,t[1]*=r,t[5]*=a,t[9]*=u,t[2]*=r,t[6]*=a,t[10]*=u,t[3]*=r,t[7]*=a,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*c,0,m*p-a*d,_*p+a*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,u=t._x,c=t._y,d=t._z,p=t._w,m=u+u,_=c+c,v=d+d,x=u*m,S=u*_,w=u*v,R=c*_,y=c*v,g=d*v,D=p*m,L=p*_,C=p*v,G=r.x,F=r.y,N=r.z;return a[0]=(1-(R+g))*G,a[1]=(S+C)*G,a[2]=(w-L)*G,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(x+g))*F,a[6]=(y+D)*F,a[7]=0,a[8]=(w+L)*N,a[9]=(y-D)*N,a[10]=(1-(x+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let u=Ps.set(a[0],a[1],a[2]).length();const c=Ps.set(a[4],a[5],a[6]).length(),d=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/u,_=1/c,v=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=v,oi.elements[9]*=v,oi.elements[10]*=v,t.setFromRotationMatrix(oi),r.x=u,r.y=c,r.z=d,this}makePerspective(e,t,r,a,u,c,d=Hi){const p=this.elements,m=2*u/(t-e),_=2*u/(r-a),v=(t+e)/(t-e),x=(r+a)/(r-a);let S,w;if(d===Hi)S=-(c+u)/(c-u),w=-2*c*u/(c-u);else if(d===kl)S=-c/(c-u),w=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,u,c,d=Hi){const p=this.elements,m=1/(t-e),_=1/(r-a),v=1/(c-u),x=(t+e)*m,S=(r+a)*_;let w,R;if(d===Hi)w=(c+u)*v,R=-2*v;else if(d===kl)w=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ps=new $,oi=new Bt,P0=new $(0,0,0),D0=new $(1,1,1),_r=new $,fl=new $,Vn=new $,Kp=new Bt,Qp=new Qr;class Si{constructor(e=0,t=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(pt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-pt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const em=new $,Ds=new Qr,Ni=new Bt,pl=new $,Bo=new $,I0=new $,U0=new Qr,tm=new $(1,0,0),nm=new $(0,1,0),im=new $(0,0,1),rm={type:"added"},N0={type:"removed"},Ls={type:"childadded",child:null},Uc={type:"childremoved",child:null};class Sn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new $,t=new Si,r=new Qr,a=new $(1,1,1);function u(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ut}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,t){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?pl.copy(e):pl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Bo,pl,this.up):Ni.lookAt(pl,Bo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new $(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new $,Fi=new $,Nc=new $,Oi=new $,Is=new $,Us=new $,sm=new $,Fc=new $,Oc=new $,kc=new $,zc=new Pt,Bc=new Pt,Hc=new Pt;class li{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ai.subVectors(e,t),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,t,r,a,u){ai.subVectors(a,t),Fi.subVectors(r,t),Nc.subVectors(e,t);const c=ai.dot(ai),d=ai.dot(Fi),p=ai.dot(Nc),m=Fi.dot(Fi),_=Fi.dot(Nc),v=c*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,w=(c*_-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,r,a,u,c,d,p){return this.getBarycoord(e,t,r,a,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Oi.x),p.addScaledVector(c,Oi.y),p.addScaledVector(d,Oi.z),p)}static getInterpolatedAttribute(e,t,r,a,u,c){return zc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,r),Hc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(zc,u.x),c.addScaledVector(Bc,u.y),c.addScaledVector(Hc,u.z),c}static isFrontFacing(e,t,r,a){return ai.subVectors(r,t),Fi.subVectors(e,t),ai.cross(Fi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,u){return li.getInterpolation(e,this.a,this.b,this.c,t,r,a,u)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,u=this.c;let c,d;Is.subVectors(a,r),Us.subVectors(u,r),Fc.subVectors(e,r);const p=Is.dot(Fc),m=Us.dot(Fc);if(p<=0&&m<=0)return t.copy(r);Oc.subVectors(e,a);const _=Is.dot(Oc),v=Us.dot(Oc);if(_>=0&&v<=_)return t.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return c=p/(p-_),t.copy(r).addScaledVector(Is,c);kc.subVectors(e,u);const S=Is.dot(kc),w=Us.dot(kc);if(w>=0&&S<=w)return t.copy(u);const R=S*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),t.copy(r).addScaledVector(Us,d);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return sm.subVectors(u,a),d=(v-_)/(v-_+(S-w)),t.copy(a).addScaledVector(sm,d);const g=1/(y+R+x);return c=R*g,d=x*g,t.copy(r).addScaledVector(Is,c).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Vc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Mt.workingColorSpace){if(e=Zh(e,1),t=pt(t,0,1),r=pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,c=2*r-u;this.r=Vc(c,u,e+1/3),this.g=Vc(c,u,e),this.b=Vc(c,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,t=ln){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,t);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const r=hg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Mt.fromWorkingColorSpace(yn.copy(this),e),Math.round(pt(yn.r*255,0,255))*65536+Math.round(pt(yn.g*255,0,255))*256+Math.round(pt(yn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(yn.copy(this),t);const r=yn.r,a=yn.g,u=yn.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ln){Mt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,a=yn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(ml);const r=Xo(vr.h,ml.h,t),a=Xo(vr.s,ml.s,t),u=Xo(vr.l,ml.l,t);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*a,this.g=u[1]*t+u[4]*r+u[7]*a,this.b=u[2]*t+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new wt;wt.NAMES=hg;let F0=0;class Ko extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Ys,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rh&&(r.blendSrc=this.blendSrc),this.blendDst!==sh&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(t){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dg extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new $,gl=new ot;class xi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Bs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,u){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class fg extends xi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class pg extends xi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Xn extends xi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let O0=0;const Kn=new Bt,Gc=new Sn,Ns=new $,Gn=new Zo,Ho=new Zo,an=new $;class Xi extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?pg:fg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,r){return Kn.makeTranslation(e,t,r),this.applyMatrix4(Kn),this}scale(e,t,r){return Kn.makeScale(e,t,r),this.applyMatrix4(Kn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const u=e[a];t.setXYZ(a,u.x,u.y,u.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const u=t[r];Gn.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){const d=t[u];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(Gn.min,Ho.min),Gn.expandByPoint(an),an.addVectors(Gn.max,Ho.max),Gn.expandByPoint(an)):(Gn.expandByPoint(Ho.min),Gn.expandByPoint(Ho.max))}Gn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)an.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(an));if(t)for(let u=0,c=t.length;u<c;u++){const d=t[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)an.fromBufferAttribute(d,m),p&&(Ns.fromBufferAttribute(e,m),an.add(Ns)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,u=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new $,p[V]=new $;const m=new $,_=new $,v=new $,x=new ot,S=new ot,w=new ot,R=new $,y=new $;function g(V,b,A){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,b),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,V),S.fromBufferAttribute(u,b),w.fromBufferAttribute(u,A),_.sub(m),v.sub(m),S.sub(x),w.sub(x);const k=1/(S.x*w.y-w.x*S.y);isFinite(k)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(k),d[V].add(R),d[b].add(R),d[A].add(R),p[V].add(y),p[b].add(y),p[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,b=D.length;V<b;++V){const A=D[V],k=A.start,ne=A.count;for(let Z=k,ae=k+ne;Z<ae;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new $,C=new $,G=new $,F=new $;function N(V){G.fromBufferAttribute(a,V),F.copy(G);const b=d[V];L.copy(b),L.sub(G.multiplyScalar(G.dot(b))).normalize(),C.crossVectors(F,b);const k=C.dot(p[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,k)}for(let V=0,b=D.length;V<b;++V){const A=D[V],k=A.start,ne=A.count;for(let Z=k,ae=k+ne;Z<ae;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new $,u=new $,c=new $,d=new $,p=new $,m=new $,_=new $,v=new $;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,w),u.fromBufferAttribute(t,R),c.fromBufferAttribute(t,y),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),u.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let R=0,y=p.length;R<y;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new xi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);t.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(t))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Bt,Vr=new ug,_l=new Kh,am=new $,vl=new $,xl=new $,yl=new $,Wc=new $,Sl=new $,lm=new $,El=new $;class Kt extends Sn{constructor(e=new Xi,t=new dg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){Sl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(Wc.fromBufferAttribute(v,e),c?Sl.addScaledVector(Wc,_):Sl.addScaledVector(Wc.sub(t),_))}t.add(Sl)}return t}raycast(e,t){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(u),Vr.copy(e.ray).recast(e.near),!(_l.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(_l,am)===null||Vr.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(om.copy(u).invert(),Vr.copy(e.ray).applyMatrix4(om),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let a;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,G=L;C<G;C+=3){const F=d.getX(C),N=d.getX(C+1),V=d.getX(C+2);a=Ml(this,g,e,r,m,_,v,F,N,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const D=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);a=Ml(this,c,e,r,m,_,v,D,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,G=L;C<G;C+=3){const F=C,N=C+1,V=C+2;a=Ml(this,g,e,r,m,_,v,F,N,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const D=y,L=y+1,C=y+2;a=Ml(this,c,e,r,m,_,v,D,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function k0(s,e,t,r,a,u,c,d){let p;if(e.side===Cn?p=r.intersectTriangle(c,u,a,!0,d):p=r.intersectTriangle(a,u,c,e.side===wr,d),p===null)return null;El.copy(d),El.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(El);return m<t.near||m>t.far?null:{distance:m,point:El.clone(),object:s}}function Ml(s,e,t,r,a,u,c,d,p,m){s.getVertexPosition(d,vl),s.getVertexPosition(p,xl),s.getVertexPosition(m,yl);const _=k0(s,e,t,r,vl,xl,yl,lm);if(_){const v=new $;li.getBarycoord(lm,vl,xl,yl,v),a&&(_.uv=li.getInterpolatedAttribute(a,d,p,m,v,new ot)),u&&(_.uv1=li.getInterpolatedAttribute(u,d,p,m,v,new ot)),c&&(_.normal=li.getInterpolatedAttribute(c,d,p,m,v,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new $,materialIndex:0};li.getNormal(vl,xl,yl,x.normal),_.face=x,_.barycoord=v}return _}class Tr extends Xi{constructor(e=1,t=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],_=[],v=[];let x=0,S=0;w("z","y","x",-1,-1,r,t,e,c,u,0),w("z","y","x",1,-1,r,t,-e,c,u,1),w("x","z","y",1,1,e,r,t,a,c,2),w("x","z","y",1,-1,e,r,-t,a,c,3),w("x","y","z",1,-1,e,t,r,a,u,4),w("x","y","z",-1,-1,e,t,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Xn(m,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(v,2));function w(R,y,g,D,L,C,G,F,N,V,b){const A=C/N,k=G/V,ne=C/2,Z=G/2,ae=F/2,ce=N+1,se=V+1;let ue=0,B=0;const le=new $;for(let oe=0;oe<se;oe++){const U=oe*k-Z;for(let ie=0;ie<ce;ie++){const Pe=ie*A-ne;le[R]=Pe*D,le[y]=U*L,le[g]=ae,m.push(le.x,le.y,le.z),le[R]=0,le[y]=0,le[g]=F>0?1:-1,_.push(le.x,le.y,le.z),v.push(ie/N),v.push(1-oe/V),ue+=1}}for(let oe=0;oe<V;oe++)for(let U=0;U<N;U++){const ie=x+U+ce*oe,Pe=x+U+ce*(oe+1),Q=x+(U+1)+ce*(oe+1),he=x+(U+1)+ce*oe;p.push(ie,Pe,he),p.push(Pe,Q,he),B+=6}d.addGroup(S,B,b),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Rn(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const a in r)e[a]=r[a]}return e}function z0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const gg={clone:to,merge:Rn};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class _g extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new $,um=new ot,cm=new ot;class Wn extends _g{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,um,cm),t.subVectors(cm,um)}setViewOffset(e,t,r,a,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wo*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/p,t-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class V0 extends Sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const u=new Wn(Fs,Os,e,t);u.layers=this.layers,this.add(u);const c=new Wn(Fs,Os,e,t);c.layers=this.layers,this.add(c);const d=new Wn(Fs,Os,e,t);d.layers=this.layers,this.add(d);const p=new Wn(Fs,Os,e,t);p.layers=this.layers,this.add(p);const m=new Wn(Fs,Os,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,u,c,d,p]=t;for(const m of t)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,u),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,p),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(v,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class vg extends bn{constructor(e,t,r,a,u,c,d,p,m,_){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,r,a,u,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G0 extends Kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new vg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Tr(5,5,5),u=new Wi({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:Er});u.uniforms.tEquirect.value=t;const c=new Kt(a,u),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=vi),new V0(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(u)}}class Qh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=t}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class W0 extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xc=new $,X0=new $,Y0=new ut;class yr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Xc.subVectors(r,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Xc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:t.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Y0.getNormalMatrix(e),a=this.coplanarPoint(Xc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Kh,wl=new $;class ed{constructor(e=new yr,t=new yr,r=new yr,a=new yr,u=new yr,c=new yr){this.planes=[e,t,r,a,u,c]}set(e,t,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],w=a[9],R=a[10],y=a[11],g=a[12],D=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,y-S,C-g).normalize(),r[1].setComponents(p+u,x+m,y+S,C+g).normalize(),r[2].setComponents(p+c,x+_,y+w,C+D).normalize(),r[3].setComponents(p-c,x-_,y-w,C-D).normalize(),r[4].setComponents(p-d,x-v,y-R,C-L).normalize(),t===Hi)r[5].setComponents(p+d,x+v,y+R,C+L).normalize();else if(t===kl)r[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gs extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class xg extends bn{constructor(e,t,r,a,u,c,d,p,m,_=$s){if(_!==$s&&_!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===$s&&(r=Zr),r===void 0&&_===Qs&&(r=Ks),super(null,a,u,c,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class td extends Xi{constructor(e=1,t=1,r=1,a=32,u=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],v=[],x=[],S=[];let w=0;const R=[],y=r/2;let g=0;D(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Xn(v,3)),this.setAttribute("normal",new Xn(x,3)),this.setAttribute("uv",new Xn(S,2));function D(){const C=new $,G=new $;let F=0;const N=(t-e)/r;for(let V=0;V<=u;V++){const b=[],A=V/u,k=A*(t-e)+e;for(let ne=0;ne<=a;ne++){const Z=ne/a,ae=Z*p+d,ce=Math.sin(ae),se=Math.cos(ae);G.x=k*ce,G.y=-A*r+y,G.z=k*se,v.push(G.x,G.y,G.z),C.set(ce,N,se).normalize(),x.push(C.x,C.y,C.z),S.push(Z,1-A),b.push(w++)}R.push(b)}for(let V=0;V<a;V++)for(let b=0;b<u;b++){const A=R[b][V],k=R[b+1][V],ne=R[b+1][V+1],Z=R[b][V+1];(e>0||b!==0)&&(_.push(A,k,Z),F+=3),(t>0||b!==u-1)&&(_.push(k,ne,Z),F+=3)}m.addGroup(g,F,0),g+=F}function L(C){const G=w,F=new ot,N=new $;let V=0;const b=C===!0?e:t,A=C===!0?1:-1;for(let ne=1;ne<=a;ne++)v.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),w++;const k=w;for(let ne=0;ne<=a;ne++){const ae=ne/a*p+d,ce=Math.cos(ae),se=Math.sin(ae);N.x=b*se,N.y=y*A,N.z=b*ce,v.push(N.x,N.y,N.z),x.push(0,A,0),F.x=ce*.5+.5,F.y=se*.5*A+.5,S.push(F.x,F.y),w++}for(let ne=0;ne<a;ne++){const Z=G+ne,ae=k+ne;C===!0?_.push(ae,ae+1,Z):_.push(ae+1,ae,Z),V+=3}m.addGroup(g,V,C===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nd extends td{constructor(e=1,t=1,r=32,a=1,u=!1,c=0,d=Math.PI*2){super(0,e,t,r,a,u,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:c,thetaLength:d}}static fromJSON(e){return new nd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class no extends Xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const u=e/2,c=t/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=t/p,S=[],w=[],R=[],y=[];for(let g=0;g<_;g++){const D=g*x-c;for(let L=0;L<m;L++){const C=L*v-u;w.push(C,-D,0),R.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const L=D+m*g,C=D+m*(g+1),G=D+1+m*(g+1),F=D+1+m*g;S.push(L,C,F),S.push(C,G,F)}this.setIndex(S),this.setAttribute("position",new Xn(w,3)),this.setAttribute("normal",new Xn(R,3)),this.setAttribute("uv",new Xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class id extends Xi{constructor(e=1,t=32,r=16,a=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:u,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let m=0;const _=[],v=new $,x=new $,S=[],w=[],R=[],y=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let C=0;g===0&&c===0?C=.5/t:g===r&&p===Math.PI&&(C=-.5/t);for(let G=0;G<=t;G++){const F=G/t;v.x=-e*Math.cos(a+F*u)*Math.sin(c+L*d),v.y=e*Math.cos(c+L*d),v.z=e*Math.sin(a+F*u)*Math.sin(c+L*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(F+C,1-L),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<t;D++){const L=_[g][D+1],C=_[g][D],G=_[g+1][D],F=_[g+1][D+1];(g!==0||c>0)&&S.push(L,C,F),(g!==r-1||p<Math.PI)&&S.push(C,G,F)}this.setIndex(S),this.setAttribute("position",new Xn(w,3)),this.setAttribute("normal",new Xn(R,3)),this.setAttribute("uv",new Xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ks extends Ko{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $0 extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j0 extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yg{constructor(e,t,r){const a=this;let u=!1,c=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(_){d++,u===!1&&a.onStart!==void 0&&a.onStart(_,c,d),u=!0},this.itemEnd=function(_){c++,a.onProgress!==void 0&&a.onProgress(_,c,d),c===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=m.length;v<x;v+=2){const S=m[v],w=m[v+1];if(S.global&&(S.lastIndex=0),S.test(_))return w}return null}}}const q0=new yg;class rd{constructor(e){this.manager=e!==void 0?e:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,u){r.load(e,a,t,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rd.DEFAULT_MATERIAL_NAME="__DEFAULT";class J0 extends rd{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,c=hm.get(e);if(c!==void 0)return u.manager.itemStart(e),setTimeout(function(){t&&t(c),u.manager.itemEnd(e)},0),c;const d=jo("img");function p(){_(),hm.add(e,this),t&&t(this),u.manager.itemEnd(e)}function m(v){_(),a&&a(v),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class Z0 extends rd{constructor(e){super(e)}load(e,t,r,a){const u=new bn,c=new J0(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){u.image=d,u.needsUpdate=!0,t!==void 0&&t(u)},r,a),u}}class sd extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yc=new Bt,dm=new $,fm=new $;class Sg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ed,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(dm),fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fm),t.updateMatrixWorld(),Yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pm=new Bt,Vo=new $,$c=new $;class K0 extends Sg{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Vo),$c.copy(r.position),$c.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt($c),r.updateMatrixWorld(),a.makeTranslation(-Vo.x,-Vo.y,-Vo.z),pm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm)}}class Tl extends sd{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new K0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eg extends _g{constructor(e=-1,t=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q0 extends Sg{constructor(){super(new Eg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ex extends sd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tx extends sd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nx extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ix extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function gm(s,e,t,r){const a=rx(r);switch(t){case Zm:return s*e;case Qm:return s*e;case eg:return s*e*2;case tg:return s*e/a.components*a.byteLength;case jh:return s*e/a.components*a.byteLength;case ng:return s*e*2/a.components*a.byteLength;case qh:return s*e*2/a.components*a.byteLength;case Km:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case Jh:return s*e*4/a.components*a.byteLength;case Dl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:case xh:return Math.max(s,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(s,8)*Math.max(e,8)/2;case yh:case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Oh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ig:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rx(s){switch(s){case Gi:case jm:return{byteLength:1,components:1};case Yo:case qm:case Jo:return{byteLength:2,components:1};case Yh:case $h:return{byteLength:2,components:4};case Zr:case Xh:case Bi:return{byteLength:4,components:1};case Jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mg(){let s=null,e=!1,t=null,r=null;function a(u,c){t(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function sx(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<v.length;S++){const w=v[x],R=v[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,w=v.length;S<w;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:c}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ry=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:lx,alphamap_pars_fragment:ux,alphatest_fragment:cx,alphatest_pars_fragment:hx,aomap_fragment:dx,aomap_pars_fragment:fx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:_x,bsdfs:vx,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:wx,color_fragment:Tx,color_pars_fragment:Ax,color_pars_vertex:Rx,color_vertex:Cx,common:bx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Ix,emissivemap_fragment:Ux,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:kx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Bx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Kx,envmap_vertex:Vx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:Yx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:jx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Zx,lights_toon_fragment:Qx,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:hy,map_fragment:dy,map_pars_fragment:fy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:vy,morphcolor_vertex:xy,morphnormal_vertex:yy,morphtarget_pars_vertex:Sy,morphtarget_vertex:Ey,normal_fragment_begin:My,normal_fragment_maps:wy,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Ly,opaque_fragment:Iy,packing:Uy,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:ky,roughnessmap_fragment:zy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:Yy,skinning_vertex:$y,skinnormal_vertex:jy,specularmap_fragment:qy,specularmap_pars_fragment:Jy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Ky,transmission_fragment:Qy,transmission_pars_fragment:eS,uv_pars_fragment:tS,uv_pars_vertex:nS,uv_vertex:iS,worldpos_vertex:rS,background_vert:sS,background_frag:oS,backgroundCube_vert:aS,backgroundCube_frag:lS,cube_vert:uS,cube_frag:cS,depth_vert:hS,depth_frag:dS,distanceRGBA_vert:fS,distanceRGBA_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:_S,linedashed_frag:vS,meshbasic_vert:xS,meshbasic_frag:yS,meshlambert_vert:SS,meshlambert_frag:ES,meshmatcap_vert:MS,meshmatcap_frag:wS,meshnormal_vert:TS,meshnormal_frag:AS,meshphong_vert:RS,meshphong_frag:CS,meshphysical_vert:bS,meshphysical_frag:PS,meshtoon_vert:DS,meshtoon_frag:LS,points_vert:IS,points_frag:US,shadow_vert:NS,shadow_frag:FS,sprite_vert:OS,sprite_frag:kS},Ce={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},_i={basic:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Rn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Rn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Rn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Rn([Ce.lights,Ce.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:Rn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Al={r:0,b:0,g:0},Wr=new Si,zS=new Bt;function BS(s,e,t,r,a,u,c){const d=new wt(0);let p=u===!0?0:1,m,_,v=null,x=0,S=null;function w(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function R(L){let C=!1;const G=w(L);G===null?g(d,p):G&&G.isColor&&(g(G,1),C=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,C){const G=w(C);G&&(G.isCubeTexture||G.mapping===Bl)?(_===void 0&&(_=new Kt(new Tr(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:to(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Wr.copy(C.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(Wr)),_.material.toneMapped=Mt.getTransfer(G.colorSpace)!==Ct,(v!==G||x!==G.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Kt(new no(2,2),new Wi({name:"BackgroundMaterial",uniforms:to(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(G.colorSpace)!==Ct,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,C){L.getRGB(Al,mg(s)),r.buffers.color.setClear(Al.r,Al.g,Al.b,C,c)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:R,addToRenderList:y,dispose:D}}function HS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,c=!1;function d(A,k,ne,Z,ae){let ce=!1;const se=v(Z,ne,k);u!==se&&(u=se,m(u.object)),ce=S(A,Z,ne,ae),ce&&w(A,Z,ne,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,C(A,k,ne,Z),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,k,ne){const Z=ne.wireframe===!0;let ae=r[A.id];ae===void 0&&(ae={},r[A.id]=ae);let ce=ae[k.id];ce===void 0&&(ce={},ae[k.id]=ce);let se=ce[Z];return se===void 0&&(se=x(p()),ce[Z]=se),se}function x(A){const k=[],ne=[],Z=[];for(let ae=0;ae<t;ae++)k[ae]=0,ne[ae]=0,Z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:Z,object:A,attributes:{},index:null}}function S(A,k,ne,Z){const ae=u.attributes,ce=k.attributes;let se=0;const ue=ne.getAttributes();for(const B in ue)if(ue[B].location>=0){const oe=ae[B];let U=ce[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),oe===void 0||oe.attribute!==U||U&&oe.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==Z}function w(A,k,ne,Z){const ae={},ce=k.attributes;let se=0;const ue=ne.getAttributes();for(const B in ue)if(ue[B].location>=0){let oe=ce[B];oe===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const U={};U.attribute=oe,oe&&oe.data&&(U.data=oe.data),ae[B]=U,se++}u.attributes=ae,u.attributesNum=se,u.index=Z}function R(){const A=u.newAttributes;for(let k=0,ne=A.length;k<ne;k++)A[k]=0}function y(A){g(A,0)}function g(A,k){const ne=u.newAttributes,Z=u.enabledAttributes,ae=u.attributeDivisors;ne[A]=1,Z[A]===0&&(s.enableVertexAttribArray(A),Z[A]=1),ae[A]!==k&&(s.vertexAttribDivisor(A,k),ae[A]=k)}function D(){const A=u.newAttributes,k=u.enabledAttributes;for(let ne=0,Z=k.length;ne<Z;ne++)k[ne]!==A[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function L(A,k,ne,Z,ae,ce,se){se===!0?s.vertexAttribIPointer(A,k,ne,ae,ce):s.vertexAttribPointer(A,k,ne,Z,ae,ce)}function C(A,k,ne,Z){R();const ae=Z.attributes,ce=ne.getAttributes(),se=k.defaultAttributeValues;for(const ue in ce){const B=ce[ue];if(B.location>=0){let le=ae[ue];if(le===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const oe=le.normalized,U=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Pe=ie.buffer,Q=ie.type,he=ie.bytesPerElement,xe=Q===s.INT||Q===s.UNSIGNED_INT||le.gpuType===Xh;if(le.isInterleavedBufferAttribute){const me=le.data,we=me.stride,be=le.offset;if(me.isInstancedInterleavedBuffer){for(let $e=0;$e<B.locationSize;$e++)g(B.location+$e,me.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<B.locationSize;$e++)y(B.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let $e=0;$e<B.locationSize;$e++)L(B.location+$e,U/B.locationSize,Q,oe,we*he,(be+U/B.locationSize*$e)*he,xe)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<B.locationSize;me++)g(B.location+me,le.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<B.locationSize;me++)y(B.location+me);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let me=0;me<B.locationSize;me++)L(B.location+me,U/B.locationSize,Q,oe,U*he,U/B.locationSize*me*he,xe)}}else if(se!==void 0){const oe=se[ue];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(B.location,oe);break;case 3:s.vertexAttrib3fv(B.location,oe);break;case 4:s.vertexAttrib4fv(B.location,oe);break;default:s.vertexAttrib1fv(B.location,oe)}}}}D()}function G(){V();for(const A in r){const k=r[A];for(const ne in k){const Z=k[ne];for(const ae in Z)_(Z[ae].object),delete Z[ae];delete k[ne]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ne in k){const Z=k[ne];for(const ae in Z)_(Z[ae].object),delete Z[ae];delete k[ne]}delete r[A.id]}function N(A){for(const k in r){const ne=r[k];if(ne[A.id]===void 0)continue;const Z=ne[A.id];for(const ae in Z)_(Z[ae].object),delete Z[ae];delete ne[A.id]}}function V(){b(),c=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:y,disableUnusedAttributes:D}}function VS(s,e,t){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),t.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),t.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let w=0;w<v;w++)S+=_[w];t.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)c(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let R=0;R<v;R++)w+=_[R]*x[R];t.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function GS(s,e,t,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==ui&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const V=N===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Bi&&!V)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=w>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:G,maxSamples:F}}function WS(s){const e=this;let t=null,r=0,a=!1,u=!1;const c=new yr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){t=_(v,x,0)},this.setState=function(v,x,S){const w=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const D=u?0:r,L=D*4;let C=g.clippingState||null;p.value=C,C=_(w,x,L,S);for(let G=0;G!==L;++G)C[G]=t[G];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,w){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=p.value,w!==!0||y===null){const g=S+R*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,C=S;L!==R;++L,C+=4)c.copy(v[L]).applyMatrix4(D,d),c.normal.toArray(y,C),y[C+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function XS(s){let e=new WeakMap;function t(c,d){return d===fh?c.mapping=Js:d===ph&&(c.mapping=Zs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===fh||d===ph)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new G0(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ws=4,_m=[.125,.215,.35,.446,.526,.582],jr=20,jc=new Eg,vm=new wt;let qc=null,Jc=0,Zc=0,Kc=!1;const Yr=(1+Math.sqrt(5))/2,zs=1/Yr,xm=[new $(-Yr,zs,0),new $(Yr,zs,0),new $(-zs,0,Yr),new $(zs,0,Yr),new $(0,Yr,-zs),new $(0,Yr,zs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Jc,Zc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Jo,format:ui,colorSpace:eo,depthBuffer:!1},a=Sm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,t,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YS(u)),this._blurMaterial=$S(u,e,t)}return a}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,r,a){const d=new Wn(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(vm),_.toneMapping=Mr,_.autoClear=!1;const S=new dg({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),w=new Kt(new Tr,S);let R=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,R=!0):(S.color.copy(vm),R=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;Rl(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),R&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Js||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new Kt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Rl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,jc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=xm[(a-u-1)%xm.length];this._blur(e,u-1,u,c,d)}t.autoClear=r}_blur(e,t,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,t,r,a,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Kt(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*jr-1),R=u/w,y=isFinite(u)?1+Math.floor(_*R):jr;y>jr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${jr}`);const g=[];let D=0;for(let N=0;N<jr;++N){const V=N/R,b=Math.exp(-V*V/2);g.push(b),N===0?D+=b:N<y&&(D+=2*b)}for(let N=0;N<g.length;N++)g[N]=g[N]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-r;const C=this._sizeLods[a],G=3*C*(a>L-Ws?a-L+Ws:0),F=4*(this._cubeSize-C);Rl(t,G,F,3*C,2*C),p.setRenderTarget(t),p.render(v,jc)}}function YS(s){const e=[],t=[],r=[];let a=s;const u=s-Ws+1+_m.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);t.push(d);let p=1/d;c>s-Ws?p=_m[c-s+Ws-1]:c===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,R=3,y=2,g=1,D=new Float32Array(R*w*S),L=new Float32Array(y*w*S),C=new Float32Array(g*w*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,V=F>2?0:-1,b=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];D.set(b,R*w*F),L.set(x,y*w*F);const A=[F,F,F,F,F,F];C.set(A,g*w*F)}const G=new Xi;G.setAttribute("position",new xi(D,R)),G.setAttribute("uv",new xi(L,y)),G.setAttribute("faceIndex",new xi(C,g)),e.push(G),a>Ws&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Sm(s,e,t){const r=new Kr(s,e,t);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function $S(s,e,t){const r=new Float32Array(jr),a=new $(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Em(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Mm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===fh||p===ph,_=p===Js||p===Zs;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new ym(s)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new ym(s)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function qS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Hs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function JS(s,e,t,r){const a={},u=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",c),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,w=v.attributes.position;let R=0;if(S!==null){const D=S.array;R=S.version;for(let L=0,C=D.length;L<C;L+=3){const G=D[L+0],F=D[L+1],N=D[L+2];x.push(G,F,F,N,N,G)}}else if(w!==void 0){const D=w.array;R=w.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const G=L+0,F=L+1,N=L+2;x.push(G,F,F,N,N,G)}}else return;const y=new(og(x)?pg:fg)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function ZS(s,e,t){let r;function a(x){r=x}let u,c;function d(x){u=x.type,c=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*c),t.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,x*c,w),t.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];t.update(y,r,1)}function v(x,S,w,R){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,w);let g=0;for(let D=0;D<w;D++)g+=S[D]*R[D];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function KS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(u/3);break;case s.LINES:t.lines+=d*(u/2);break;case s.LINE_STRIP:t.lines+=d*(u-1);break;case s.LINE_LOOP:t.lines+=d*u;break;case s.POINTS:t.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function QS(s,e,t){const r=new WeakMap,a=new Pt;function u(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let G=d.attributes.position.count*C,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const N=new Float32Array(G*F*4*v),V=new lg(N,G,F,v);V.type=Bi,V.needsUpdate=!0;const b=C*4;for(let k=0;k<v;k++){const ne=g[k],Z=D[k],ae=L[k],ce=G*F*4*k;for(let se=0;se<ne.count;se++){const ue=se*b;w===!0&&(a.fromBufferAttribute(ne,se),N[ce+ue+0]=a.x,N[ce+ue+1]=a.y,N[ce+ue+2]=a.z,N[ce+ue+3]=0),R===!0&&(a.fromBufferAttribute(Z,se),N[ce+ue+4]=a.x,N[ce+ue+5]=a.y,N[ce+ue+6]=a.z,N[ce+ue+7]=0),y===!0&&(a.fromBufferAttribute(ae,se),N[ce+ue+8]=a.x,N[ce+ue+9]=a.y,N[ce+ue+10]=a.z,N[ce+ue+11]=ae.itemSize===4?a.w:1)}}x={count:v,texture:V,size:new ot(G,F)},r.set(d,x),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function eE(s,e,t,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:c}}const wg=new bn,wm=new xg(1,1),Tg=new lg,Ag=new C0,Rg=new vg,Tm=[],Am=[],Rm=new Float32Array(16),Cm=new Float32Array(9),bm=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let u=Tm[a];if(u===void 0&&(u=new Float32Array(a),Tm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(u,d)}return u}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Hl(s,e){let t=Am[e];t===void 0&&(t=new Int32Array(e),Am[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function tE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function sE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;bm.set(r),s.uniformMatrix2fv(this.addr,!1,bm),en(t,r)}}function oE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Cm.set(r),s.uniformMatrix3fv(this.addr,!1,Cm),en(t,r)}}function aE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Rm.set(r),s.uniformMatrix4fv(this.addr,!1,Rm),en(t,r)}}function lE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function dE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function gE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(wm.compareFunction=sg,u=wm):u=wg,t.setTexture2D(e||u,a)}function _E(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ag,a)}function vE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Rg,a)}function xE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Tg,a)}function yE(s){switch(s){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return uE;case 35668:case 35672:return cE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return fE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}function SE(s,e){s.uniform1fv(this.addr,e)}function EE(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function ME(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function wE(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function TE(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function AE(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function RE(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function CE(s,e){s.uniform1iv(this.addr,e)}function bE(s,e){s.uniform2iv(this.addr,e)}function PE(s,e){s.uniform3iv(this.addr,e)}function DE(s,e){s.uniform4iv(this.addr,e)}function LE(s,e){s.uniform1uiv(this.addr,e)}function IE(s,e){s.uniform2uiv(this.addr,e)}function UE(s,e){s.uniform3uiv(this.addr,e)}function NE(s,e){s.uniform4uiv(this.addr,e)}function FE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Qt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||wg,u[c])}function OE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Qt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Ag,u[c])}function kE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Qt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Rg,u[c])}function zE(s,e,t){const r=this.cache,a=e.length,u=Hl(t,a);Qt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Tg,u[c])}function BE(s){switch(s){case 5126:return SE;case 35664:return EE;case 35665:return ME;case 35666:return wE;case 35674:return TE;case 35675:return AE;case 35676:return RE;case 5124:case 35670:return CE;case 35667:case 35671:return bE;case 35668:case 35672:return PE;case 35669:case 35673:return DE;case 5125:return LE;case 36294:return IE;case 36295:return UE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return zE}}class HE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yE(t.type)}}class VE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BE(t.type)}}class GE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,t[d.id],r)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function WE(s,e,t){const r=s.name,a=r.length;for(Qc.lastIndex=0;;){const u=Qc.exec(r),c=Qc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){Pm(t,m===void 0?new HE(d,s,e):new VE(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new GE(d),Pm(t,v)),t=v}}}class Fl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(t,a),c=e.getUniformLocation(t,u.name);WE(u,c,this)}}setValue(e,t,r,a){const u=this.map[t];u!==void 0&&u.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let u=0,c=t.length;u!==c;++u){const d=t[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Dm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const XE=37297;let YE=0;function $E(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Lm=new ut;function jE(s){Mt._getMatrix(Lm,Mt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Ol:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Im(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+$E(s.getShaderSource(e),c)}else return a}function qE(s,e){const t=jE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JE(s,e){let t;switch(e){case kv:t="Linear";break;case zv:t="Reinhard";break;case Bv:t="Cineon";break;case Hv:t="ACESFilmic";break;case Gv:t="AgX";break;case Wv:t="Neutral";break;case Vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new $;function ZE(){Mt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function QE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),t[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Go(s){return s!==""}function Um(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(s){return s.replace(tM,iM)}const nM=new Map;function iM(s,e){let t=ct[e];if(t===void 0){const r=nM.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vh(t)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(s){return s.replace(rM,sM)}function sM(s,e,t,r){let a="";for(let u=parseInt(e);u<parseInt(t);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Om(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function aM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case Zs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ym:e="ENVMAP_BLENDING_MULTIPLY";break;case Fv:e="ENVMAP_BLENDING_MIX";break;case Ov:e="ENVMAP_BLENDING_ADD";break}return e}function cM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function hM(s,e,t,r){const a=s.getContext(),u=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=oM(t),m=aM(t),_=lM(t),v=uM(t),x=cM(t),S=KE(t),w=QE(u),R=a.createProgram();let y,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Go).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(y=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Mr?JE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),ZE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),c=Vh(c),c=Um(c,t),c=Nm(c,t),d=Vh(d),d=Um(d,t),d=Nm(d,t),c=Fm(c),d=Fm(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+c,C=D+g+d,G=Dm(a,a.VERTEX_SHADER,L),F=Dm(a,a.FRAGMENT_SHADER,C);a.attachShader(R,G),a.attachShader(R,F),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(k){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(R).trim(),Z=a.getShaderInfoLog(G).trim(),ae=a.getShaderInfoLog(F).trim();let ce=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,G,F);else{const ue=Im(a,G,"vertex"),B=Im(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+ue+`
`+B)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||ae==="")&&(se=!1);se&&(k.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:Z,prefix:y},fragmentShader:{log:ae,prefix:g}})}a.deleteShader(G),a.deleteShader(F),V=new Fl(a,R),b=eM(a,R)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,XE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=F,this}let dM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pM(e),t.set(e,r)),r}}class pM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function mM(s,e,t,r,a,u,c){const d=new cg,p=new fM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,A,k,ne,Z){const ae=ne.fog,ce=Z.geometry,se=b.isMeshStandardMaterial?ne.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),B=ue&&ue.mapping===Bl?ue.image.height:null,le=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=oe!==void 0?oe.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Pe,Q,he,xe;if(le){const xt=_i[le];Pe=xt.vertexShader,Q=xt.fragmentShader}else Pe=b.vertexShader,Q=b.fragmentShader,p.update(b),he=p.getVertexShaderID(b),xe=p.getFragmentShaderID(b);const me=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),be=Z.isInstancedMesh===!0,$e=Z.isBatchedMesh===!0,vt=!!b.map,lt=!!b.matcap,Rt=!!ue,z=!!b.aoMap,$t=!!b.lightMap,it=!!b.bumpMap,nt=!!b.normalMap,Ye=!!b.displacementMap,Tt=!!b.emissiveMap,Ie=!!b.metalnessMap,P=!!b.roughnessMap,M=b.anisotropy>0,J=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,de=b.sheen>0,We=b.transmission>0,Te=M&&!!b.anisotropyMap,Fe=J&&!!b.clearcoatMap,ht=J&&!!b.clearcoatNormalMap,Ee=J&&!!b.clearcoatRoughnessMap,ke=ge&&!!b.iridescenceMap,qe=ge&&!!b.iridescenceThicknessMap,Qe=de&&!!b.sheenColorMap,ze=de&&!!b.sheenRoughnessMap,dt=!!b.specularMap,rt=!!b.specularColorMap,At=!!b.specularIntensityMap,W=We&&!!b.transmissionMap,Ae=We&&!!b.thicknessMap,re=!!b.gradientMap,fe=!!b.alphaMap,Le=b.alphaTest>0,De=!!b.alphaHash,st=!!b.extensions;let It=Mr;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(It=s.toneMapping);const jt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Pe,fragmentShader:Q,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:$e,batchingColor:$e&&Z._colorsTexture!==null,instancing:be,instancingColor:be&&Z.instanceColor!==null,instancingMorph:be&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:eo,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:lt,envMap:Rt,envMapMode:Rt&&ue.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:$t,bumpMap:it,normalMap:nt,displacementMap:x&&Ye,emissiveMap:Tt,normalMapObjectSpace:nt&&b.normalMapType===jv,normalMapTangentSpace:nt&&b.normalMapType===rg,metalnessMap:Ie,roughnessMap:P,anisotropy:M,anisotropyMap:Te,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:rt,specularIntensityMap:At,transmission:We,transmissionMap:W,thicknessMap:Ae,gradientMap:re,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Le,alphaHash:De,combine:b.combine,mapUv:vt&&R(b.map.channel),aoMapUv:z&&R(b.aoMap.channel),lightMapUv:$t&&R(b.lightMap.channel),bumpMapUv:it&&R(b.bumpMap.channel),normalMapUv:nt&&R(b.normalMap.channel),displacementMapUv:Ye&&R(b.displacementMap.channel),emissiveMapUv:Tt&&R(b.emissiveMap.channel),metalnessMapUv:Ie&&R(b.metalnessMap.channel),roughnessMapUv:P&&R(b.roughnessMap.channel),anisotropyMapUv:Te&&R(b.anisotropyMap.channel),clearcoatMapUv:Fe&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(b.sheenRoughnessMap.channel),specularMapUv:dt&&R(b.specularMap.channel),specularColorMapUv:rt&&R(b.specularColorMap.channel),specularIntensityMapUv:At&&R(b.specularIntensityMap.channel),transmissionMapUv:W&&R(b.transmissionMap.channel),thicknessMapUv:Ae&&R(b.thicknessMap.channel),alphaMapUv:fe&&R(b.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(nt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(vt||fe),fog:!!ae,useFog:b.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Ct,decodeVideoTextureEmissive:Tt&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zi,flipSided:b.side===Cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||$e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function g(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)A.push(k),A.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(D(A,b),L(A,b),A.push(s.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function D(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function L(b,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),b.push(d.mask)}function C(b){const A=w[b.type];let k;if(A){const ne=_i[A];k=gg.clone(ne.uniforms)}else k=b.uniforms;return k}function G(b,A){let k;for(let ne=0,Z=_.length;ne<Z;ne++){const ae=_[ne];if(ae.cacheKey===A){k=ae,++k.usedTimes;break}}return k===void 0&&(k=new hM(s,A,b,u),_.push(k)),k}function F(b){if(--b.usedTimes===0){const A=_.indexOf(b);_[A]=_[_.length-1],_.pop(),b.destroy()}}function N(b){p.remove(b)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:G,releaseProgram:F,releaseShaderCache:N,programs:_,dispose:V}}function gM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:u}}function _M(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const t=[],r=[],a=[];function u(){e=0,t.length=0,r.length=0,a.length=0}function c(v,x,S,w,R,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:w,renderOrder:v.renderOrder,z:R,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,x,S,w,R,y){const g=c(v,x,S,w,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):t.push(g)}function p(v,x,S,w,R,y){const g=c(v,x,S,w,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function m(v,x){t.length>1&&t.sort(v||_M),r.length>1&&r.sort(x||km),a.length>1&&a.sort(x||km)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function vM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new zm,s.set(r,[c])):a>=u.length?(c=new zm,u.push(c)):c=u[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function xM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new wt};break;case"SpotLight":t={position:new $,direction:new $,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function yM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let SM=0;function EM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function MM(s){const e=new xM,t=yM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,u=new Bt,c=new Bt;function d(m){let _=0,v=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,w=0,R=0,y=0,g=0,D=0,L=0,C=0,G=0,F=0,N=0;m.sort(EM);for(let b=0,A=m.length;b<A;b++){const k=m[b],ne=k.color,Z=k.intensity,ae=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ne.r*Z,v+=ne.g*Z,x+=ne.b*Z;else if(k.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(k.sh.coefficients[se],Z);N++}else if(k.isDirectionalLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,B=t.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=k.shadow.matrix,D++}r.directional[S]=se,S++}else if(k.isSpotLight){const se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(ne).multiplyScalar(Z),se.distance=ae,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,r.spot[R]=se;const ue=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,ue.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[R]=ue.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=ce,C++}R++}else if(k.isRectAreaLight){const se=e.get(k);se.color.copy(ne).multiplyScalar(Z),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=se,y++}else if(k.isPointLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){const ue=k.shadow,B=t.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=k.shadow.matrix,L++}r.point[w]=se,w++}else if(k.isHemisphereLight){const se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(Z),se.groundColor.copy(k.groundColor).multiplyScalar(Z),r.hemi[g]=se,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==w||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==D||V.numPointShadows!==L||V.numSpotShadows!==C||V.numSpotMaps!==G||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,V.directionalLength=S,V.pointLength=w,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=D,V.numPointShadows=L,V.numSpotShadows=C,V.numSpotMaps=G,V.numLightProbes=N,r.version=SM++)}function p(m,_){let v=0,x=0,S=0,w=0,R=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),u.copy(L.matrixWorld),u.premultiply(y),c.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),w++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:p,state:r}}function Bm(s){const e=new MM(s),t=[],r=[];function a(_){m.camera=_,t.length=0,r.length=0}function u(_){t.push(_)}function c(_){r.push(_)}function d(){e.setup(t)}function p(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function wM(s){let e=new WeakMap;function t(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new Bm(s),e.set(a,[d])):u>=c.length?(d=new Bm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RM(s,e,t){let r=new ed;const a=new ot,u=new ot,c=new Pt,d=new $0({depthPacking:$v}),p=new j0,m={},_=t.maxTextureSize,v={[wr]:Cn,[Cn]:wr,[zi]:zi},x=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:TM,fragmentShader:AM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Xi;w.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Kt(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm;let g=this.type;this.render=function(F,N,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Er),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=g!==ki&&this.type===ki,ae=g===ki&&this.type!==ki;for(let ce=0,se=F.length;ce<se;ce++){const ue=F[ce],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const le=B.getFrameExtents();if(a.multiply(le),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,B.mapSize.y=u.y)),B.map===null||Z===!0||ae===!0){const U=this.type!==ki?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new Kr(a.x,a.y,U),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const oe=B.getViewportCount();for(let U=0;U<oe;U++){const ie=B.getViewport(U);c.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ne.viewport(c),B.updateMatrices(ue,U),r=B.getFrustum(),C(N,V,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===ki&&D(B,V),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(b,A,k)};function D(F,N){const V=e.update(R);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Kr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,V,x,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,V,S,R,null)}function L(F,N,V,b){let A=null;const k=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)A=k;else if(A=V.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ne=A.uuid,Z=N.uuid;let ae=m[ne];ae===void 0&&(ae={},m[ne]=ae);let ce=ae[Z];ce===void 0&&(ce=A.clone(),ae[Z]=ce,N.addEventListener("dispose",G)),A=ce}if(A.visible=N.visible,A.wireframe=N.wireframe,b===ki?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:v[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=s.properties.get(A);ne.light=V}return A}function C(F,N,V,b,A){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===ki)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),ae=F.material;if(Array.isArray(ae)){const ce=Z.groups;for(let se=0,ue=ce.length;se<ue;se++){const B=ce[se],le=ae[B.materialIndex];if(le&&le.visible){const oe=L(F,le,b,A);F.onBeforeShadow(s,F,N,V,Z,oe,B),s.renderBufferDirect(V,null,Z,oe,F,B),F.onAfterShadow(s,F,N,V,Z,oe,B)}}}else if(ae.visible){const ce=L(F,ae,b,A);F.onBeforeShadow(s,F,N,V,Z,ce,null),s.renderBufferDirect(V,null,Z,ce,F,null),F.onAfterShadow(s,F,N,V,Z,ce,null)}}const ne=F.children;for(let Z=0,ae=ne.length;Z<ae;Z++)C(ne[Z],N,V,b,A)}function G(F){F.target.removeEventListener("dispose",G);for(const V in m){const b=m[V],A=F.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const CM={[oh]:ah,[lh]:hh,[uh]:dh,[qs]:ch,[ah]:oh,[hh]:lh,[dh]:uh,[ch]:qs};function bM(s,e){function t(){let W=!1;const Ae=new Pt;let re=null;const fe=new Pt(0,0,0,0);return{setMask:function(Le){re!==Le&&!W&&(s.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){W=Le},setClear:function(Le,De,st,It,jt){jt===!0&&(Le*=It,De*=It,st*=It),Ae.set(Le,De,st,It),fe.equals(Ae)===!1&&(s.clearColor(Le,De,st,It),fe.copy(Ae))},reset:function(){W=!1,re=null,fe.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,re=null,fe=null,Le=null;return{setReversed:function(De){if(Ae!==De){const st=e.get("EXT_clip_control");Ae?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Ae=De},getReversed:function(){return Ae},setTest:function(De){De?me(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(De){re!==De&&!W&&(s.depthMask(De),re=De)},setFunc:function(De){if(Ae&&(De=CM[De]),fe!==De){switch(De){case oh:s.depthFunc(s.NEVER);break;case ah:s.depthFunc(s.ALWAYS);break;case lh:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case uh:s.depthFunc(s.EQUAL);break;case ch:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=De}},setLocked:function(De){W=De},setClear:function(De){Le!==De&&(Ae&&(De=1-De),s.clearDepth(De),Le=De)},reset:function(){W=!1,re=null,fe=null,Le=null,Ae=!1}}}function a(){let W=!1,Ae=null,re=null,fe=null,Le=null,De=null,st=null,It=null,jt=null;return{setTest:function(xt){W||(xt?me(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xt){Ae!==xt&&!W&&(s.stencilMask(xt),Ae=xt)},setFunc:function(xt,Pn,En){(re!==xt||fe!==Pn||Le!==En)&&(s.stencilFunc(xt,Pn,En),re=xt,fe=Pn,Le=En)},setOp:function(xt,Pn,En){(De!==xt||st!==Pn||It!==En)&&(s.stencilOp(xt,Pn,En),De=xt,st=Pn,It=En)},setLocked:function(xt){W=xt},setClear:function(xt){jt!==xt&&(s.clearStencil(xt),jt=xt)},reset:function(){W=!1,Ae=null,re=null,fe=null,Le=null,De=null,st=null,It=null,jt=null}}}const u=new t,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,D=null,L=null,C=null,G=null,F=null,N=new wt(0,0,0),V=0,b=!1,A=null,k=null,ne=null,Z=null,ae=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ue=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=ue>=1):B.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=ue>=2);let le=null,oe={};const U=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Pe=new Pt().fromArray(U),Q=new Pt().fromArray(ie);function he(W,Ae,re,fe){const Le=new Uint8Array(4),De=s.createTexture();s.bindTexture(W,De),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<re;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ae+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return De}const xe={};xe[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(s.DEPTH_TEST),c.setFunc(qs),it(!1),nt(Bp),me(s.CULL_FACE),z(Er);function me(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function we(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function be(W,Ae){return v[W]!==Ae?(s.bindFramebuffer(W,Ae),v[W]=Ae,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e(W,Ae){let re=S,fe=!1;if(W){re=x.get(Ae),re===void 0&&(re=[],x.set(Ae,re));const Le=W.textures;if(re.length!==Le.length||re[0]!==s.COLOR_ATTACHMENT0){for(let De=0,st=Le.length;De<st;De++)re[De]=s.COLOR_ATTACHMENT0+De;re.length=Le.length,fe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,fe=!0);fe&&s.drawBuffers(re)}function vt(W){return w!==W?(s.useProgram(W),w=W,!0):!1}const lt={[$r]:s.FUNC_ADD,[xv]:s.FUNC_SUBTRACT,[yv]:s.FUNC_REVERSE_SUBTRACT};lt[Sv]=s.MIN,lt[Ev]=s.MAX;const Rt={[Mv]:s.ZERO,[wv]:s.ONE,[Tv]:s.SRC_COLOR,[rh]:s.SRC_ALPHA,[Dv]:s.SRC_ALPHA_SATURATE,[bv]:s.DST_COLOR,[Rv]:s.DST_ALPHA,[Av]:s.ONE_MINUS_SRC_COLOR,[sh]:s.ONE_MINUS_SRC_ALPHA,[Pv]:s.ONE_MINUS_DST_COLOR,[Cv]:s.ONE_MINUS_DST_ALPHA,[Lv]:s.CONSTANT_COLOR,[Iv]:s.ONE_MINUS_CONSTANT_COLOR,[Uv]:s.CONSTANT_ALPHA,[Nv]:s.ONE_MINUS_CONSTANT_ALPHA};function z(W,Ae,re,fe,Le,De,st,It,jt,xt){if(W===Er){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(me(s.BLEND),R=!0),W!==vv){if(W!==y||xt!==b){if((g!==$r||C!==$r)&&(s.blendEquation(s.FUNC_ADD),g=$r,C=$r),xt)switch(W){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,L=null,G=null,F=null,N.set(0,0,0),V=0,y=W,b=xt}return}Le=Le||Ae,De=De||re,st=st||fe,(Ae!==g||Le!==C)&&(s.blendEquationSeparate(lt[Ae],lt[Le]),g=Ae,C=Le),(re!==D||fe!==L||De!==G||st!==F)&&(s.blendFuncSeparate(Rt[re],Rt[fe],Rt[De],Rt[st]),D=re,L=fe,G=De,F=st),(It.equals(N)===!1||jt!==V)&&(s.blendColor(It.r,It.g,It.b,jt),N.copy(It),V=jt),y=W,b=!1}function $t(W,Ae){W.side===zi?we(s.CULL_FACE):me(s.CULL_FACE);let re=W.side===Cn;Ae&&(re=!re),it(re),W.blending===Ys&&W.transparent===!1?z(Er):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),u.setMask(W.colorWrite);const fe=W.stencilWrite;d.setTest(fe),fe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Tt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function nt(W){W!==gv?(me(s.CULL_FACE),W!==k&&(W===Bp?s.cullFace(s.BACK):W===_v?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),k=W}function Ye(W){W!==ne&&(se&&s.lineWidth(W),ne=W)}function Tt(W,Ae,re){W?(me(s.POLYGON_OFFSET_FILL),(Z!==Ae||ae!==re)&&(s.polygonOffset(Ae,re),Z=Ae,ae=re)):we(s.POLYGON_OFFSET_FILL)}function Ie(W){W?me(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function P(W){W===void 0&&(W=s.TEXTURE0+ce-1),le!==W&&(s.activeTexture(W),le=W)}function M(W,Ae,re){re===void 0&&(le===null?re=s.TEXTURE0+ce-1:re=le);let fe=oe[re];fe===void 0&&(fe={type:void 0,texture:void 0},oe[re]=fe),(fe.type!==W||fe.texture!==Ae)&&(le!==re&&(s.activeTexture(re),le=re),s.bindTexture(W,Ae||xe[W]),fe.type=W,fe.texture=Ae)}function J(){const W=oe[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(W){Pe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Pe.copy(W))}function ze(W){Q.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function dt(W,Ae){let re=m.get(Ae);re===void 0&&(re=new WeakMap,m.set(Ae,re));let fe=re.get(W);fe===void 0&&(fe=s.getUniformBlockIndex(Ae,W.name),re.set(W,fe))}function rt(W,Ae){const fe=m.get(Ae).get(W);p.get(Ae)!==fe&&(s.uniformBlockBinding(Ae,fe,W.__bindingPointIndex),p.set(Ae,fe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,oe={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,D=null,L=null,C=null,G=null,F=null,N=new wt(0,0,0),V=0,b=!1,A=null,k=null,ne=null,Z=null,ae=null,Pe.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:me,disable:we,bindFramebuffer:be,drawBuffers:$e,useProgram:vt,setBlending:z,setMaterial:$t,setFlipSided:it,setCullFace:nt,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:Ie,activeTexture:P,bindTexture:M,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:qe,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ht,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:Te,compressedTexSubImage3D:Fe,scissor:Qe,viewport:ze,reset:At}}function PM(s,e,t,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ot,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,M){return S?new OffscreenCanvas(P,M):jo("canvas")}function R(P,M,J){let pe=1;const ge=Ie(P);if((ge.width>J||ge.height>J)&&(pe=J/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);v===void 0&&(v=w(de,We));const Te=M?w(de,We):v;return Te.width=de,Te.height=We,Te.getContext("2d").drawImage(P,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+We+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,M,J,pe,ge=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=M;if(M===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),M===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),M===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),M===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),M===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),M===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),M===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),M===s.RGBA){const We=ge?Ol:Mt.getTransfer(pe);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=We===Ct?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(P,M){let J;return P?M===null||M===Zr||M===Ks?J=s.DEPTH24_STENCIL8:M===Bi?J=s.DEPTH32F_STENCIL8:M===Yo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zr||M===Ks?J=s.DEPTH_COMPONENT24:M===Bi?J=s.DEPTH_COMPONENT32F:M===Yo&&(J=s.DEPTH_COMPONENT16),J}function G(P,M){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==vi?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function F(P){const M=P.target;M.removeEventListener("dispose",F),V(M),M.isVideoTexture&&_.delete(M)}function N(P){const M=P.target;M.removeEventListener("dispose",N),A(M)}function V(P){const M=r.get(P);if(M.__webglInit===void 0)return;const J=P.source,pe=x.get(J);if(pe){const ge=pe[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&x.delete(J)}r.remove(P)}function b(P){const M=r.get(P);s.deleteTexture(M.__webglTexture);const J=P.source,pe=x.get(J);delete pe[M.__cacheKey],c.memory.textures--}function A(P){const M=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let ge=0;ge<M.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[pe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=P.textures;for(let pe=0,ge=J.length;pe<ge;pe++){const de=r.get(J[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),c.memory.textures--),r.remove(J[pe])}r.remove(P)}let k=0;function ne(){k=0}function Z(){const P=k;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),k+=1,P}function ae(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ce(P,M){const J=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,P,M);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+M)}function se(P,M){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+M)}function ue(P,M){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,M);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+M)}function B(P,M){const J=r.get(P);if(P.version>0&&J.__version!==P.version){he(J,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+M)}const le={[dn]:s.REPEAT,[qr]:s.CLAMP_TO_EDGE,[mh]:s.MIRRORED_REPEAT},oe={[ci]:s.NEAREST,[Xv]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Tc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},U={[qv]:s.NEVER,[t0]:s.ALWAYS,[Jv]:s.LESS,[sg]:s.LEQUAL,[Zv]:s.EQUAL,[e0]:s.GEQUAL,[Kv]:s.GREATER,[Qv]:s.NOTEQUAL};function ie(P,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===vi||M.magFilter===Tc||M.magFilter===al||M.magFilter===Jr||M.minFilter===vi||M.minFilter===Tc||M.minFilter===al||M.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,oe[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,oe[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ci||M.minFilter!==al&&M.minFilter!==Jr||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Pe(P,M){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F));const pe=M.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const de=ae(M);if(de!==P.__cacheKey){ge[de]===void 0&&(ge[de]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ge[de].usedTimes++;const We=ge[P.__cacheKey];We!==void 0&&(ge[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(M)),P.__cacheKey=de,P.__webglTexture=ge[de].texture}return J}function Q(P,M,J){let pe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Pe(P,M),de=M.source;t.bindTexture(pe,P.__webglTexture,s.TEXTURE0+J);const We=r.get(de);if(de.version!==We.__version||ge===!0){t.activeTexture(s.TEXTURE0+J);const Te=Mt.getPrimaries(Mt.workingColorSpace),Fe=M.colorSpace===Sr?null:Mt.getPrimaries(M.colorSpace),ht=M.colorSpace===Sr||Te===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ee=R(M.image,!1,a.maxTextureSize);Ee=Tt(M,Ee);const ke=u.convert(M.format,M.colorSpace),qe=u.convert(M.type);let Qe=L(M.internalFormat,ke,qe,M.colorSpace,M.isVideoTexture);ie(pe,M);let ze;const dt=M.mipmaps,rt=M.isVideoTexture!==!0,At=We.__version===void 0||ge===!0,W=de.dataReady,Ae=G(M,Ee);if(M.isDepthTexture)Qe=C(M.format===Qs,M.type),At&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Qe,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,Qe,Ee.width,Ee.height,0,ke,qe,null));else if(M.isDataTexture)if(dt.length>0){rt&&At&&t.texStorage2D(s.TEXTURE_2D,Ae,Qe,dt[0].width,dt[0].height);for(let re=0,fe=dt.length;re<fe;re++)ze=dt[re],rt?W&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ze.width,ze.height,ke,qe,ze.data):t.texImage2D(s.TEXTURE_2D,re,Qe,ze.width,ze.height,0,ke,qe,ze.data);M.generateMipmaps=!1}else rt?(At&&t.texStorage2D(s.TEXTURE_2D,Ae,Qe,Ee.width,Ee.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,Qe,Ee.width,Ee.height,0,ke,qe,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Qe,dt[0].width,dt[0].height,Ee.depth);for(let re=0,fe=dt.length;re<fe;re++)if(ze=dt[re],M.format!==ui)if(ke!==null)if(rt){if(W)if(M.layerUpdates.size>0){const Le=gm(ze.width,ze.height,M.format,M.type);for(const De of M.layerUpdates){const st=ze.data.subarray(De*Le/ze.data.BYTES_PER_ELEMENT,(De+1)*Le/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,De,ze.width,ze.height,1,ke,st)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ze.width,ze.height,Ee.depth,ke,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Qe,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ze.width,ze.height,Ee.depth,ke,qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Qe,ze.width,ze.height,Ee.depth,0,ke,qe,ze.data)}else{rt&&At&&t.texStorage2D(s.TEXTURE_2D,Ae,Qe,dt[0].width,dt[0].height);for(let re=0,fe=dt.length;re<fe;re++)ze=dt[re],M.format!==ui?ke!==null?rt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ze.width,ze.height,ke,qe,ze.data):t.texImage2D(s.TEXTURE_2D,re,Qe,ze.width,ze.height,0,ke,qe,ze.data)}else if(M.isDataArrayTexture)if(rt){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Qe,Ee.width,Ee.height,Ee.depth),W)if(M.layerUpdates.size>0){const re=gm(Ee.width,Ee.height,M.format,M.type);for(const fe of M.layerUpdates){const Le=Ee.data.subarray(fe*re/Ee.data.BYTES_PER_ELEMENT,(fe+1)*re/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,ke,qe,Le)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Ee.width,Ee.height,Ee.depth,0,ke,qe,Ee.data);else if(M.isData3DTexture)rt?(At&&t.texStorage3D(s.TEXTURE_3D,Ae,Qe,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,Qe,Ee.width,Ee.height,Ee.depth,0,ke,qe,Ee.data);else if(M.isFramebufferTexture){if(At)if(rt)t.texStorage2D(s.TEXTURE_2D,Ae,Qe,Ee.width,Ee.height);else{let re=Ee.width,fe=Ee.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(s.TEXTURE_2D,Le,Qe,re,fe,0,ke,qe,null),re>>=1,fe>>=1}}else if(dt.length>0){if(rt&&At){const re=Ie(dt[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Qe,re.width,re.height)}for(let re=0,fe=dt.length;re<fe;re++)ze=dt[re],rt?W&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ke,qe,ze):t.texImage2D(s.TEXTURE_2D,re,Qe,ke,qe,ze);M.generateMipmaps=!1}else if(rt){if(At){const re=Ie(Ee);t.texStorage2D(s.TEXTURE_2D,Ae,Qe,re.width,re.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,Qe,ke,qe,Ee);y(M)&&g(pe),We.__version=de.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function he(P,M,J){if(M.image.length!==6)return;const pe=Pe(P,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const de=r.get(ge);if(ge.version!==de.__version||pe===!0){t.activeTexture(s.TEXTURE0+J);const We=Mt.getPrimaries(Mt.workingColorSpace),Te=M.colorSpace===Sr?null:Mt.getPrimaries(M.colorSpace),Fe=M.colorSpace===Sr||We===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ht=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!ht&&!Ee?ke[fe]=R(M.image[fe],!0,a.maxCubemapSize):ke[fe]=Ee?M.image[fe].image:M.image[fe],ke[fe]=Tt(M,ke[fe]);const qe=ke[0],Qe=u.convert(M.format,M.colorSpace),ze=u.convert(M.type),dt=L(M.internalFormat,Qe,ze,M.colorSpace),rt=M.isVideoTexture!==!0,At=de.__version===void 0||pe===!0,W=ge.dataReady;let Ae=G(M,qe);ie(s.TEXTURE_CUBE_MAP,M);let re;if(ht){rt&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,dt,qe.width,qe.height);for(let fe=0;fe<6;fe++){re=ke[fe].mipmaps;for(let Le=0;Le<re.length;Le++){const De=re[Le];M.format!==ui?Qe!==null?rt?W&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,De.width,De.height,Qe,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,dt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,De.width,De.height,Qe,ze,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,dt,De.width,De.height,0,Qe,ze,De.data)}}}else{if(re=M.mipmaps,rt&&At){re.length>0&&Ae++;const fe=Ie(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,dt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){rt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,Qe,ze,ke[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,ke[fe].width,ke[fe].height,0,Qe,ze,ke[fe].data);for(let Le=0;Le<re.length;Le++){const st=re[Le].image[fe].image;rt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,st.width,st.height,Qe,ze,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,dt,st.width,st.height,0,Qe,ze,st.data)}}else{rt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Qe,ze,ke[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,Qe,ze,ke[fe]);for(let Le=0;Le<re.length;Le++){const De=re[Le];rt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Qe,ze,De.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,dt,Qe,ze,De.image[fe])}}}y(M)&&g(s.TEXTURE_CUBE_MAP),de.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function xe(P,M,J,pe,ge,de){const We=u.convert(J.format,J.colorSpace),Te=u.convert(J.type),Fe=L(J.internalFormat,We,Te,J.colorSpace),ht=r.get(M),Ee=r.get(J);if(Ee.__renderTarget=M,!ht.__hasExternalTextures){const ke=Math.max(1,M.width>>de),qe=Math.max(1,M.height>>de);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,de,Fe,ke,qe,M.depth,0,We,Te,null):t.texImage2D(ge,de,Fe,ke,qe,0,We,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Ee.__webglTexture,0,it(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Ee.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(P,M,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const pe=M.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,de=C(M.stencilBuffer,ge),We=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=it(M);nt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,de,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,P)}else{const pe=M.textures;for(let ge=0;ge<pe.length;ge++){const de=pe[ge],We=u.convert(de.format,de.colorSpace),Te=u.convert(de.type),Fe=L(de.internalFormat,We,Te,de.colorSpace),ht=it(M);J&&nt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Fe,M.width,M.height):nt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(M.depthTexture);pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const ge=pe.__webglTexture,de=it(M);if(M.depthTexture.format===$s)nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(M.depthTexture.format===Qs)nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function be(P){const M=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=pe}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,P)}else if(J){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=s.createRenderbuffer(),me(M.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),me(M.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(P,M,J){const pe=r.get(P);M!==void 0&&xe(pe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&be(P)}function vt(P){const M=P.texture,J=r.get(P),pe=r.get(M);P.addEventListener("dispose",N);const ge=P.textures,de=P.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=M.version,c.memory.textures++),de){J.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[Te]=[];for(let Fe=0;Fe<M.mipmaps.length;Fe++)J.__webglFramebuffer[Te][Fe]=s.createFramebuffer()}else J.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)J.__webglFramebuffer[Te]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(We)for(let Te=0,Fe=ge.length;Te<Fe;Te++){const ht=r.get(ge[Te]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&nt(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const Fe=ge[Te];J.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Te]);const ht=u.convert(Fe.format,Fe.colorSpace),Ee=u.convert(Fe.type),ke=L(Fe.internalFormat,ht,Ee,Fe.colorSpace,P.isXRRenderTarget===!0),qe=it(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,ke,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,J.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),me(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let Fe=0;Fe<M.mipmaps.length;Fe++)xe(J.__webglFramebuffer[Te][Fe],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe);else xe(J.__webglFramebuffer[Te],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);y(M)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Te=0,Fe=ge.length;Te<Fe;Te++){const ht=ge[Te],Ee=r.get(ht);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ie(s.TEXTURE_2D,ht),xe(J.__webglFramebuffer,P,ht,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,0),y(ht)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,pe.__webglTexture),ie(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let Fe=0;Fe<M.mipmaps.length;Fe++)xe(J.__webglFramebuffer[Fe],P,M,s.COLOR_ATTACHMENT0,Te,Fe);else xe(J.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,Te,0);y(M)&&g(Te),t.unbindTexture()}P.depthBuffer&&be(P)}function lt(P){const M=P.textures;for(let J=0,pe=M.length;J<pe;J++){const ge=M[J];if(y(ge)){const de=D(P),We=r.get(ge).__webglTexture;t.bindTexture(de,We),g(de),t.unbindTexture()}}}const Rt=[],z=[];function $t(P){if(P.samples>0){if(nt(P)===!1){const M=P.textures,J=P.width,pe=P.height;let ge=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(P),Te=M.length>1;if(Te)for(let Fe=0;Fe<M.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ht=r.get(M[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,J,pe,0,0,J,pe,ge,s.NEAREST),p===!0&&(Rt.length=0,z.length=0,Rt.push(s.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(de),z.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Fe=0;Fe<M.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ht=r.get(M[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function it(P){return Math.min(a.maxSamples,P.samples)}function nt(P){const M=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(P){const M=c.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Tt(P,M){const J=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==eo&&J!==Sr&&(Mt.getTransfer(J)===Ct?(pe!==ui||ge!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),M}function Ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=$e,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=nt}function DM(s,e){function t(r,a=Sr){let u;const c=Mt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Jm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===jm)return s.BYTE;if(r===qm)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Jo)return s.HALF_FLOAT;if(r===Zm)return s.ALPHA;if(r===Km)return s.RGB;if(r===ui)return s.RGBA;if(r===Qm)return s.LUMINANCE;if(r===eg)return s.LUMINANCE_ALPHA;if(r===$s)return s.DEPTH_COMPONENT;if(r===Qs)return s.DEPTH_STENCIL;if(r===tg)return s.RED;if(r===jh)return s.RED_INTEGER;if(r===ng)return s.RG;if(r===qh)return s.RG_INTEGER;if(r===Jh)return s.RGBA_INTEGER;if(r===Dl||r===Ll||r===Il||r===Ul)if(c===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ul)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Il)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ul)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gh||r===_h||r===vh||r===xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh||r===Sh||r===Eh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===yh||r===Sh)return c===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Eh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===bh||r===Ph||r===Dh||r===Lh||r===Ih||r===Uh||r===Nh||r===Fh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Mh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Th)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ch)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return c===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Oh||r===kh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Nl)return c===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ig||r===zh||r===Bh||r===Hh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===zh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const LM={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Gs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new bn,u=e.properties.get(a);u.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:IM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new no(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends es{constructor(e,t){super();const r=this;let a=null,u=1,c=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,w=null;const R=new NM,y=t.getContextAttributes();let g=null,D=null;const L=[],C=[],G=new ot;let F=null;const N=new Wn;N.viewport=new Pt;const V=new Wn;V.viewport=new Pt;const b=[N,V],A=new nx;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=L[Q];return he===void 0&&(he=new eh,L[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=L[Q];return he===void 0&&(he=new eh,L[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=L[Q];return he===void 0&&(he=new eh,L[Q]=he),he.getHandSpace()};function Z(Q){const he=C.indexOf(Q.inputSource);if(he===-1)return;const xe=L[he];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,m||c),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ae(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<L.length;Q++){const he=C[Q];he!==null&&(C[Q]=null,L[Q].disconnect(he))}k=null,ne=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,D=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let xe=null,me=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?Qs:$s,me=y.stencil?Ks:Zr);const be={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(a,t),x=v.createProjectionLayer(be),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Kr(x.textureWidth,x.textureHeight,{format:ui,type:Gi,depthTexture:new xg(x.textureWidth,x.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Kr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),Pe.setContext(a),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ce(Q){for(let he=0;he<Q.removed.length;he++){const xe=Q.removed[he],me=C.indexOf(xe);me>=0&&(C[me]=null,L[me].disconnect(xe))}for(let he=0;he<Q.added.length;he++){const xe=Q.added[he];let me=C.indexOf(xe);if(me===-1){for(let be=0;be<L.length;be++)if(be>=C.length){C.push(xe),me=be;break}else if(C[be]===null){C[be]=xe,me=be;break}if(me===-1)break}const we=L[me];we&&we.connect(xe)}}const se=new $,ue=new $;function B(Q,he,xe){se.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(xe.matrixWorld);const me=se.distanceTo(ue),we=he.projectionMatrix.elements,be=xe.projectionMatrix.elements,$e=we[14]/(we[10]-1),vt=we[14]/(we[10]+1),lt=(we[9]+1)/we[5],Rt=(we[9]-1)/we[5],z=(we[8]-1)/we[0],$t=(be[8]+1)/be[0],it=$e*z,nt=$e*$t,Ye=me/(-z+$t),Tt=Ye*-z;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ie=$e+Ye,P=vt+Ye,M=it-Tt,J=nt+(me-Tt),pe=lt*vt/P*Ie,ge=Rt*vt/P*Ie;Q.projectionMatrix.makePerspective(M,J,pe,ge,Ie,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let he=Q.near,xe=Q.far;R.texture!==null&&(R.depthNear>0&&(he=R.depthNear),R.depthFar>0&&(xe=R.depthFar)),A.near=V.near=N.near=he,A.far=V.far=N.far=xe,(k!==A.near||ne!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ne=A.far),N.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,A.layers.mask=N.layers.mask|V.layers.mask;const me=Q.parent,we=A.cameras;le(A,me);for(let be=0;be<we.length;be++)le(we[be],me);we.length===2?B(A,N,V):A.projectionMatrix.copy(N.projectionMatrix),oe(Q,A,me)};function oe(Q,he,xe){xe===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$o*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function ie(Q,he){if(_=he.getViewerPose(m||c),w=he,_!==null){const xe=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let me=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let be=0;be<xe.length;be++){const $e=xe[be];let vt=null;if(S!==null)vt=S.getViewport($e);else{const Rt=v.getViewSubImage(x,$e);vt=Rt.viewport,be===0&&(e.setRenderTargetTextures(D,Rt.colorTexture,x.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(D))}let lt=b[be];lt===void 0&&(lt=new Wn,lt.layers.enable(be),lt.viewport=new Pt,b[be]=lt),lt.matrix.fromArray($e.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray($e.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(vt.x,vt.y,vt.width,vt.height),be===0&&(A.matrix.copy(lt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(lt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const be=v.getDepthInformation(xe[0]);be&&be.isValid&&be.texture&&R.init(e,be,a.renderState)}}for(let xe=0;xe<L.length;xe++){const me=C[xe],we=L[xe];me!==null&&we!==void 0&&we.update(me,he,m||c)}U&&U(Q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const Pe=new Mg;Pe.setAnimationLoop(ie),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Xr=new Si,OM=new Bt;function kM(s,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,mg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Cn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Cn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,C=D.envMapRotation;L&&(y.envMap.value=L,Xr.copy(C),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Xr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function zM(s,e,t,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const C=L.program;r.uniformBlockBinding(D,C)}function m(D,L){let C=a[D.id];C===void 0&&(w(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",y));const G=L.program;r.updateUBOMapping(D,G);const F=e.render.frame;u[D.id]!==F&&(x(D),u[D.id]=F)}function _(D){const L=v();D.__bindingPointIndex=L;const C=s.createBuffer(),G=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function v(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],C=D.uniforms,G=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,N=C.length;F<N;F++){const V=Array.isArray(C[F])?C[F]:[C[F]];for(let b=0,A=V.length;b<A;b++){const k=V[b];if(S(k,F,b,G)===!0){const ne=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let ae=0;for(let ce=0;ce<Z.length;ce++){const se=Z[ce],ue=R(se);typeof se=="number"||typeof se=="boolean"?(k.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ne+ae,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=0,k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=0,k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=0):(se.toArray(k.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,L,C,G){const F=D.value,N=L+"_"+C;if(G[N]===void 0)return typeof F=="number"||typeof F=="boolean"?G[N]=F:G[N]=F.clone(),!0;{const V=G[N];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return G[N]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function w(D){const L=D.uniforms;let C=0;const G=16;for(let N=0,V=L.length;N<V;N++){const b=Array.isArray(L[N])?L[N]:[L[N]];for(let A=0,k=b.length;A<k;A++){const ne=b[A],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let ae=0,ce=Z.length;ae<ce;ae++){const se=Z[ae],ue=R(se),B=C%G,le=B%ue.boundary,oe=B+le;C+=le,oe!==0&&G-oe<ue.storage&&(C+=G-oe),ne.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=C,C+=ue.storage}}}const F=C%G;return F>0&&(C+=G-F),D.__size=C,D.__cache={},this}function R(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},u={}}return{bind:p,update:m,dispose:g}}class BM{constructor(e={}){const{canvas:t=x0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const w=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let G=!1,F=0,N=0,V=null,b=-1,A=null;const k=new Pt,ne=new Pt;let Z=null;const ae=new wt(0);let ce=0,se=t.width,ue=t.height,B=1,le=null,oe=null;const U=new Pt(0,0,se,ue),ie=new Pt(0,0,se,ue);let Pe=!1;const Q=new ed;let he=!1,xe=!1;this.transmissionResolutionScale=1;const me=new Bt,we=new Bt,be=new $,$e=new Pt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Rt(){return V===null?B:1}let z=r;function $t(T,X){return t.getContext(T,X)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),z===null){const X="webgl2";if(z=$t(X,T),z===null)throw $t(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let it,nt,Ye,Tt,Ie,P,M,J,pe,ge,de,We,Te,Fe,ht,Ee,ke,qe,Qe,ze,dt,rt,At,W;function Ae(){it=new qS(z),it.init(),rt=new DM(z,it),nt=new GS(z,it,e,rt),Ye=new bM(z,it),nt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Tt=new KS(z),Ie=new gM,P=new PM(z,it,Ye,Ie,nt,rt,Tt),M=new XS(C),J=new jS(C),pe=new sx(z),At=new HS(z,pe),ge=new JS(z,pe,Tt,At),de=new eE(z,ge,pe,Tt),Qe=new QS(z,nt,P),Ee=new WS(Ie),We=new mM(C,M,J,it,nt,At,Ee),Te=new kM(C,Ie),Fe=new vM,ht=new wM(it),qe=new BS(C,M,J,Ye,de,S,p),ke=new RM(C,de,nt),W=new zM(z,Tt,nt,Ye),ze=new VS(z,it,Tt),dt=new ZS(z,it,Tt),Tt.programs=We.programs,C.capabilities=nt,C.extensions=it,C.properties=Ie,C.renderLists=Fe,C.shadowMap=ke,C.state=Ye,C.info=Tt}Ae();const re=new FM(C,z);this.xr=re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(se,ue,!1))},this.getSize=function(T){return T.set(se,ue)},this.setSize=function(T,X,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,ue=X,t.width=Math.floor(T*B),t.height=Math.floor(X*B),ee===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(se*B,ue*B).floor()},this.setDrawingBufferSize=function(T,X,ee){se=T,ue=X,B=ee,t.width=Math.floor(T*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,X,ee,q){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,X,ee,q),Ye.viewport(k.copy(U).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,X,ee,q){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,X,ee,q),Ye.scissor(ne.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(T){Ye.setScissorTest(Pe=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,X=!0,ee=!0){let q=0;if(T){let Y=!1;if(V!==null){const Se=V.texture.format;Y=Se===Jh||Se===qh||Se===jh}if(Y){const Se=V.texture.type,Re=Se===Gi||Se===Zr||Se===Yo||Se===Ks||Se===Yh||Se===$h,Ue=qe.getClearColor(),Be=qe.getClearAlpha(),et=Ue.r,Ke=Ue.g,Ve=Ue.b;Re?(w[0]=et,w[1]=Ke,w[2]=Ve,w[3]=Be,z.clearBufferuiv(z.COLOR,0,w)):(R[0]=et,R[1]=Ke,R[2]=Ve,R[3]=Be,z.clearBufferiv(z.COLOR,0,R))}else q|=z.COLOR_BUFFER_BIT}X&&(q|=z.DEPTH_BUFFER_BIT),ee&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),qe.dispose(),Fe.dispose(),ht.dispose(),Ie.dispose(),M.dispose(),J.dispose(),de.dispose(),At.dispose(),W.dispose(),We.dispose(),re.dispose(),re.removeEventListener("sessionstart",ts),re.removeEventListener("sessionend",Yi),Ei.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const T=Tt.autoReset,X=ke.enabled,ee=ke.autoUpdate,q=ke.needsUpdate,Y=ke.type;Ae(),Tt.autoReset=T,ke.enabled=X,ke.autoUpdate=ee,ke.needsUpdate=q,ke.type=Y}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const X=T.target;X.removeEventListener("dispose",st),It(X)}function It(T){jt(T),Ie.remove(T)}function jt(T){const X=Ie.get(T).programs;X!==void 0&&(X.forEach(function(ee){We.releaseProgram(ee)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ee,q,Y,Se){X===null&&(X=vt);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=ta(T,X,ee,q,Y);Ye.setMaterial(q,Re);let Be=ee.index,et=1;if(q.wireframe===!0){if(Be=ge.getWireframeAttribute(ee),Be===void 0)return;et=2}const Ke=ee.drawRange,Ve=ee.attributes.position;let gt=Ke.start*et,at=(Ke.start+Ke.count)*et;Se!==null&&(gt=Math.max(gt,Se.start*et),at=Math.min(at,(Se.start+Se.count)*et)),Be!==null?(gt=Math.max(gt,0),at=Math.min(at,Be.count)):Ve!=null&&(gt=Math.max(gt,0),at=Math.min(at,Ve.count));const Ht=at-gt;if(Ht<0||Ht===1/0)return;At.setup(Y,q,Ue,ee,Be);let Ft,_t=ze;if(Be!==null&&(Ft=pe.get(Be),_t=dt,_t.setIndex(Ft)),Y.isMesh)q.wireframe===!0?(Ye.setLineWidth(q.wireframeLinewidth*Rt()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(Y.isLine){let je=q.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*Rt()),Y.isLineSegments?_t.setMode(z.LINES):Y.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else Y.isPoints?_t.setMode(z.POINTS):Y.isSprite&&_t.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const je=Y._multiDrawStarts,Vt=Y._multiDrawCounts,mt=Y._multiDrawCount,fn=Be?pe.get(Be).bytesPerElement:1,ji=Ie.get(q).currentProgram.getUniforms();for(let Mn=0;Mn<mt;Mn++)ji.setValue(z,"_gl_DrawID",Mn),_t.render(je[Mn]/fn,Vt[Mn])}else if(Y.isInstancedMesh)_t.renderInstances(gt,Ht,Y.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Vt=Math.min(ee.instanceCount,je);_t.renderInstances(gt,Ht,Vt)}else _t.render(gt,Ht)};function xt(T,X,ee){T.transparent===!0&&T.side===zi&&T.forceSinglePass===!1?(T.side=Cn,T.needsUpdate=!0,ns(T,X,ee),T.side=wr,T.needsUpdate=!0,ns(T,X,ee),T.side=zi):ns(T,X,ee)}this.compile=function(T,X,ee=null){ee===null&&(ee=T),g=ht.get(ee),g.init(X),L.push(g),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),T!==ee&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Ue=Se[Re];xt(Ue,ee,Y),q.add(Ue)}else xt(Se,ee,Y),q.add(Se)}),L.pop(),g=null,q},this.compileAsync=function(T,X,ee=null){const q=this.compile(T,X,ee);return new Promise(Y=>{function Se(){if(q.forEach(function(Re){Ie.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){Y(T);return}setTimeout(Se,10)}it.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Pn=null;function En(T){Pn&&Pn(T)}function ts(){Ei.stop()}function Yi(){Ei.start()}const Ei=new Mg;Ei.setAnimationLoop(En),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){Pn=T,re.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},re.addEventListener("sessionstart",ts),re.addEventListener("sessionend",Yi),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,X,V),g=ht.get(T,L.length),g.init(X),L.push(g),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(we),xe=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,xe),y=Fe.get(T,D.length),y.init(),D.push(y),re.enabled===!0&&re.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Mi(Se,X,-1/0,C.sortObjects)}Mi(T,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(le,oe),lt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,lt&&qe.addToRenderList(y,T),this.info.render.frame++,he===!0&&Ee.beginShadows();const ee=g.state.shadowsArray;ke.render(ee,T,X),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,Y=y.transmissive;if(g.setupLights(),X.isArrayCamera){const Se=X.cameras;if(Y.length>0)for(let Re=0,Ue=Se.length;Re<Ue;Re++){const Be=Se[Re];Rr(q,Y,T,Be)}lt&&qe.render(T);for(let Re=0,Ue=Se.length;Re<Ue;Re++){const Be=Se[Re];Ar(y,T,Be,Be.viewport)}}else Y.length>0&&Rr(q,Y,T,X),lt&&qe.render(T),Ar(y,T,X);V!==null&&N===0&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V)),T.isScene===!0&&T.onAfterRender(C,T,X),At.resetDefaultState(),b=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],he===!0&&Ee.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Mi(T,X,ee,q){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){q&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const Re=de.update(T),Ue=T.material;Ue.visible&&y.push(T,Re,Ue,ee,$e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Re=de.update(T),Ue=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),$e.copy(Re.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Ue)){const Be=Re.groups;for(let et=0,Ke=Be.length;et<Ke;et++){const Ve=Be[et],gt=Ue[Ve.materialIndex];gt&&gt.visible&&y.push(T,Re,gt,ee,$e.z,Ve)}}else Ue.visible&&y.push(T,Re,Ue,ee,$e.z,null)}}const Se=T.children;for(let Re=0,Ue=Se.length;Re<Ue;Re++)Mi(Se[Re],X,ee,q)}function Ar(T,X,ee,q){const Y=T.opaque,Se=T.transmissive,Re=T.transparent;g.setupLightsView(ee),he===!0&&Ee.setGlobalState(C.clippingPlanes,ee),q&&Ye.viewport(k.copy(q)),Y.length>0&&$i(Y,X,ee),Se.length>0&&$i(Se,X,ee),Re.length>0&&$i(Re,X,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Rr(T,X,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Kr(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Jo:Gi,minFilter:Jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[q.id],Re=q.viewport||k;Se.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Ue=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(ae),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),lt&&qe.render(ee);const Be=C.toneMapping;C.toneMapping=Mr;const et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),he===!0&&Ee.setGlobalState(C.clippingPlanes,q),$i(T,ee,q),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ve=0,gt=X.length;Ve<gt;Ve++){const at=X[Ve],Ht=at.object,Ft=at.geometry,_t=at.material,je=at.group;if(_t.side===zi&&Ht.layers.test(q.layers)){const Vt=_t.side;_t.side=Cn,_t.needsUpdate=!0,Qo(Ht,ee,q,Ft,_t,je),_t.side=Vt,_t.needsUpdate=!0,Ke=!0}}Ke===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}C.setRenderTarget(Ue),C.setClearColor(ae,ce),et!==void 0&&(q.viewport=et),C.toneMapping=Be}function $i(T,X,ee){const q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Se=T.length;Y<Se;Y++){const Re=T[Y],Ue=Re.object,Be=Re.geometry,et=q===null?Re.material:q,Ke=Re.group;Ue.layers.test(ee.layers)&&Qo(Ue,X,ee,Be,et,Ke)}}function Qo(T,X,ee,q,Y,Se){T.onBeforeRender(C,X,ee,q,Y,Se),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(C,X,ee,q,T,Se),Y.transparent===!0&&Y.side===zi&&Y.forceSinglePass===!1?(Y.side=Cn,Y.needsUpdate=!0,C.renderBufferDirect(ee,X,q,Y,T,Se),Y.side=wr,Y.needsUpdate=!0,C.renderBufferDirect(ee,X,q,Y,T,Se),Y.side=zi):C.renderBufferDirect(ee,X,q,Y,T,Se),T.onAfterRender(C,X,ee,q,Y,Se)}function ns(T,X,ee){X.isScene!==!0&&(X=vt);const q=Ie.get(T),Y=g.state.lights,Se=g.state.shadowsArray,Re=Y.state.version,Ue=We.getParameters(T,Y.state,Se,X,ee),Be=We.getProgramCacheKey(Ue);let et=q.programs;q.environment=T.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(T.isMeshStandardMaterial?J:M).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",st),et=new Map,q.programs=et);let Ke=et.get(Be);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===Re)return hi(T,Ue),Ke}else Ue.uniforms=We.getUniforms(T),T.onBeforeCompile(Ue,C),Ke=We.acquireProgram(Ue,Be),et.set(Be,Ke),q.uniforms=Ue.uniforms;const Ve=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),hi(T,Ue),q.needsLights=Gl(T),q.lightsStateVersion=Re,q.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.currentProgram=Ke,q.uniformsList=null,Ke}function ea(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Fl.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function hi(T,X){const ee=Ie.get(T);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function ta(T,X,ee,q,Y){X.isScene!==!0&&(X=vt),P.resetTextureUnits();const Se=X.fog,Re=q.isMeshStandardMaterial?X.environment:null,Ue=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:eo,Be=(q.isMeshStandardMaterial?J:M).get(q.envMap||Re),et=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!ee.morphAttributes.position,gt=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color;let Ht=Mr;q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ht=C.toneMapping);const Ft=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,je=Ie.get(q),Vt=g.state.lights;if(he===!0&&(xe===!0||T!==A)){const un=T===A&&q.id===b;Ee.setState(q,T,un)}let mt=!1;q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Vt.state.version||je.outputColorSpace!==Ue||Y.isBatchedMesh&&je.batching===!1||!Y.isBatchedMesh&&je.batching===!0||Y.isBatchedMesh&&je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&je.instancing===!1||!Y.isInstancedMesh&&je.instancing===!0||Y.isSkinnedMesh&&je.skinning===!1||!Y.isSkinnedMesh&&je.skinning===!0||Y.isInstancedMesh&&je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&je.instancingMorph===!1&&Y.morphTexture!==null||je.envMap!==Be||q.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ee.numPlanes||je.numIntersection!==Ee.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Ke||je.morphTargets!==Ve||je.morphNormals!==gt||je.morphColors!==at||je.toneMapping!==Ht||je.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,je.__version=q.version);let fn=je.currentProgram;mt===!0&&(fn=ns(q,X,Y));let ji=!1,Mn=!1,wi=!1;const Dt=fn.getUniforms(),pn=je.uniforms;if(Ye.useProgram(fn.program)&&(ji=!0,Mn=!0,wi=!0),q.id!==b&&(b=q.id,Mn=!0),ji||A!==T){Ye.buffers.depth.getReversed()?(me.copy(T.projectionMatrix),S0(me),E0(me),Dt.setValue(z,"projectionMatrix",me)):Dt.setValue(z,"projectionMatrix",T.projectionMatrix),Dt.setValue(z,"viewMatrix",T.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(z,be.setFromMatrixPosition(T.matrixWorld)),nt.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Mn=!0,wi=!0)}if(Y.isSkinnedMesh){Dt.setOptional(z,Y,"bindMatrix"),Dt.setOptional(z,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(z,"boneTexture",un.boneTexture,P))}Y.isBatchedMesh&&(Dt.setOptional(z,Y,"batchingTexture"),Dt.setValue(z,"batchingTexture",Y._matricesTexture,P),Dt.setOptional(z,Y,"batchingIdTexture"),Dt.setValue(z,"batchingIdTexture",Y._indirectTexture,P),Dt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(z,"batchingColorTexture",Y._colorsTexture,P));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Qe.update(Y,ee,fn),(Mn||je.receiveShadow!==Y.receiveShadow)&&(je.receiveShadow=Y.receiveShadow,Dt.setValue(z,"receiveShadow",Y.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(pn.envMap.value=Be,pn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(pn.envMapIntensity.value=X.environmentIntensity),Mn&&(Dt.setValue(z,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&na(pn,wi),Se&&q.fog===!0&&Te.refreshFogUniforms(pn,Se),Te.refreshMaterialUniforms(pn,q,B,ue,g.state.transmissionRenderTarget[T.id]),Fl.upload(z,ea(je),pn,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Fl.upload(z,ea(je),pn,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(z,"center",Y.center),Dt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(z,"normalMatrix",Y.normalMatrix),Dt.setValue(z,"modelMatrix",Y.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let nn=0,yt=un.length;nn<yt;nn++){const di=un[nn];W.update(di,fn),W.bind(di,fn)}}return fn}function na(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Gl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,X,ee){Ie.get(T.texture).__webglTexture=X,Ie.get(T.depthTexture).__webglTexture=ee;const q=Ie.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=ee===void 0,q.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,X){const ee=Ie.get(T);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const ia=z.createFramebuffer();this.setRenderTarget=function(T,X=0,ee=0){V=T,F=X,N=ee;let q=!0,Y=null,Se=!1,Re=!1;if(T){const Be=Ie.get(T);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(z.FRAMEBUFFER,null),q=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Be.__hasExternalTextures)P.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ve=T.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&Ie.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Ke=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?Y=Ke[X][ee]:Y=Ke[X],Se=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?Y=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?Y=Ke[ee]:Y=Ke,k.copy(T.viewport),ne.copy(T.scissor),Z=T.scissorTest}else k.copy(U).multiplyScalar(B).floor(),ne.copy(ie).multiplyScalar(B).floor(),Z=Pe;if(ee!==0&&(Y=ia),Ye.bindFramebuffer(z.FRAMEBUFFER,Y)&&q&&Ye.drawBuffers(T,Y),Ye.viewport(k),Ye.scissor(ne),Ye.setScissorTest(Z),Se){const Be=Ie.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if(Re){const Be=Ie.get(T.texture),et=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,ee,et)}else if(T!==null&&ee!==0){const Be=Ie.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(T,X,ee,q,Y,Se,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){Ye.bindFramebuffer(z.FRAMEBUFFER,Ue);try{const Be=T.texture,et=Be.format,Ke=Be.type;if(!nt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-q&&ee>=0&&ee<=T.height-Y&&z.readPixels(X,ee,q,Y,rt.convert(et),rt.convert(Ke),Se)}finally{const Be=V!==null?Ie.get(V).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,X,ee,q,Y,Se,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){const Be=T.texture,et=Be.format,Ke=Be.type;if(!nt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=T.width-q&&ee>=0&&ee<=T.height-Y){Ye.bindFramebuffer(z.FRAMEBUFFER,Ue);const Ve=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ve),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(X,ee,q,Y,rt.convert(et),rt.convert(Ke),0);const gt=V!==null?Ie.get(V).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,gt);const at=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await y0(z,at,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ve),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(Ve),z.deleteSync(at),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,X=null,ee=0){T.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-ee),Y=Math.floor(T.image.width*q),Se=Math.floor(T.image.height*q),Re=X!==null?X.x:0,Ue=X!==null?X.y:0;P.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Re,Ue,Y,Se),Ye.unbindTexture()};const ra=z.createFramebuffer(),sa=z.createFramebuffer();this.copyTextureToTexture=function(T,X,ee=null,q=null,Y=0,Se=null){T.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],X=arguments[2],Se=arguments[3]||0,ee=null),Se===null&&(Y!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let Re,Ue,Be,et,Ke,Ve,gt,at,Ht;const Ft=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(ee!==null)Re=ee.max.x-ee.min.x,Ue=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,Ke=ee.min.y,Ve=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-Y);Re=Math.floor(Ft.width*tn),Ue=Math.floor(Ft.height*tn),T.isDataArrayTexture?Be=Ft.depth:T.isData3DTexture?Be=Math.floor(Ft.depth*tn):Be=1,et=0,Ke=0,Ve=0}q!==null?(gt=q.x,at=q.y,Ht=q.z):(gt=0,at=0,Ht=0);const _t=rt.convert(X.format),je=rt.convert(X.type);let Vt;X.isData3DTexture?(P.setTexture3D(X,0),Vt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Vt=z.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Vt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const mt=z.getParameter(z.UNPACK_ROW_LENGTH),fn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ji=z.getParameter(z.UNPACK_SKIP_PIXELS),Mn=z.getParameter(z.UNPACK_SKIP_ROWS),wi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,et),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ve);const Dt=T.isDataArrayTexture||T.isData3DTexture,pn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const tn=Ie.get(T),un=Ie.get(X),nn=Ie.get(tn.__renderTarget),yt=Ie.get(un.__renderTarget);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let di=0;di<Be;di++)Dt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(T).__webglTexture,Y,Ve+di),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(X).__webglTexture,Se,Ht+di)),z.blitFramebuffer(et,Ke,Re,Ue,gt,at,Re,Ue,z.DEPTH_BUFFER_BIT,z.NEAREST);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Ie.has(T)){const tn=Ie.get(T),un=Ie.get(X);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,ra),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,sa);for(let nn=0;nn<Be;nn++)Dt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,Y,Ve+nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,Y),pn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,Se,Ht+nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,Se),Y!==0?z.blitFramebuffer(et,Ke,Re,Ue,gt,at,Re,Ue,z.COLOR_BUFFER_BIT,z.NEAREST):pn?z.copyTexSubImage3D(Vt,Se,gt,at,Ht+nn,et,Ke,Re,Ue):z.copyTexSubImage2D(Vt,Se,gt,at,et,Ke,Re,Ue);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pn?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Vt,Se,gt,at,Ht,Re,Ue,Be,_t,je,Ft.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Vt,Se,gt,at,Ht,Re,Ue,Be,_t,Ft.data):z.texSubImage3D(Vt,Se,gt,at,Ht,Re,Ue,Be,_t,je,Ft):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,gt,at,Re,Ue,_t,je,Ft.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,gt,at,Ft.width,Ft.height,_t,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Se,gt,at,Re,Ue,_t,je,Ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,mt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ji),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,wi),Se===0&&X.generateMipmaps&&z.generateMipmap(Vt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,X,ee=null,q=null,Y=0){return T.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,q=arguments[1]||null,T=arguments[2],X=arguments[3],Y=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,ee,q,Y)},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){F=0,N=0,V=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const Hm={type:"change"},ad={type:"start"},Cg={type:"end"},bl=new ug,Vm=new yr,HM=Math.cos(70*v0.DEG2RAD),Zt=new $,On=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},th=1e-6;class VM extends ix{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Qr,this._lastTargetPosition=new $,this._quat=new Qr().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mm,this._sphericalDelta=new mm,this._scale=1,this._panOffset=new $,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new $,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WM.bind(this),this._onPointerDown=GM.bind(this),this._onPointerUp=XM.bind(this),this._onContextMenu=KM.bind(this),this._onMouseWheel=jM.bind(this),this._onKeyDown=qM.bind(this),this._onTouchStart=JM.bind(this),this._onTouchMove=ZM.bind(this),this._onMouseDown=YM.bind(this),this._onMouseMove=$M.bind(this),this._interceptControlDown=QM.bind(this),this._interceptControlUp=ew.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hm),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=On:r>Math.PI&&(r-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=c!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=Zt.length();c=this._clampDistance(d*this._scale);const p=d-c;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new $(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),c=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(bl.origin.copy(this.object.position),bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bl.direction))<HM?this.object.lookAt(this.target):(Vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),bl.intersectPlane(Vm,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>th||this._lastTargetPosition.distanceToSquared(this.target)>th?(this.dispatchEvent(Hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Zt.copy(a).sub(this.target);let u=Zt.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/r.clientHeight,this.object.matrix),this._panUp(2*t*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,u=t-r.top,c=r.width,d=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,u=Math.sqrt(r*r+a*a);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),u=.5*(e.pageY+r.y);this._rotateEnd.set(a,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,u=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function GM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function WM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function XM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cg),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Xs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Xs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(ad)}function $M(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function jM(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(ad),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cg))}function qM(s){this.enabled!==!1&&this._handleKeyDown(s)}function JM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(ad)}function ZM(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function KM(s){this.enabled!==!1&&s.preventDefault()}function QM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ew(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Vl extends Kt{constructor(){const e=Vl.SkyShader,t=new Wi({name:e.name,uniforms:gg.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Cn,depthWrite:!1});super(new Tr(1,1,1),t),this.isSky=!0}}Vl.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new $},up:{value:new $(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class tw{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=nh(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=nw.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=nh()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:nh())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function nh(){return performance.now()}function nw(){document.hidden===!1&&this.reset()}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class yi{constructor(e,t,r,a,u="div"){this.parent=e,this.object=t,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(u),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),yi.nextNameID=yi.nextNameID||0,this.$name.id=`lil-gui-name-${++yi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class iw extends yi{constructor(e,t,r){super(e,t,r,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Gh(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const rw={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Gh,toHexString:Gh},qo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},sw={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const r=qo.fromHexString(s);e[0]=(r>>16&255)/255*t,e[1]=(r>>8&255)/255*t,e[2]=(r&255)/255*t},toHexString([s,e,t],r=1){r=255/r;const a=s*r<<16^e*r<<8^t*r<<0;return qo.toHexString(a)}},ow={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const r=qo.fromHexString(s);e.r=(r>>16&255)/255*t,e.g=(r>>8&255)/255*t,e.b=(r&255)/255*t},toHexString({r:s,g:e,b:t},r=1){r=255/r;const a=s*r<<16^e*r<<8^t*r<<0;return qo.toHexString(a)}},aw=[rw,qo,sw,ow];function lw(s){return aw.find(e=>e.match(s))}class uw extends yi{constructor(e,t,r,a){super(e,t,r,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=lw(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=Gh(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ih extends yi{constructor(e,t,r){super(e,t,r,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class cw extends yi{constructor(e,t,r,a,u,c){super(e,t,r,"number"),this._initInput(),this.min(a),this.max(u);const d=c!==void 0;this.step(d?c:this._getImplicitStep(),d),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))},r=D=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+D),this.$input.value=this.getValue())},a=D=>{D.key==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),r(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),r(this._step*this._arrowKeyMultiplier(D)*-1))},u=D=>{this._inputFocused&&(D.preventDefault(),r(this._step*this._normalizeMouseWheel(D)))};let c=!1,d,p,m,_,v;const x=5,S=D=>{d=D.clientX,p=m=D.clientY,c=!0,_=this.getValue(),v=0,window.addEventListener("mousemove",w),window.addEventListener("mouseup",R)},w=D=>{if(c){const L=D.clientX-d,C=D.clientY-p;Math.abs(C)>x?(D.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>x&&R()}if(!c){const L=D.clientY-m;v-=L*this._step*this._arrowKeyMultiplier(D),_+v>this._max?v=this._max-_:_+v<this._min&&(v=this._min-_),this._snapClampSetValue(_+v)}m=D.clientY},R=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",R)},y=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",u,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,D,L,C,G)=>(g-D)/(L-D)*(G-C)+C,t=g=>{const D=this.$slider.getBoundingClientRect();let L=e(g,D.left,D.right,this._min,this._max);this._snapClampSetValue(L)},r=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",u)},a=g=>{t(g.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)};let c=!1,d,p;const m=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),c=!1},_=g=>{g.touches.length>1||(this._hasScrollBar?(d=g.touches[0].clientX,p=g.touches[0].clientY,c=!0):m(g),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",x))},v=g=>{if(c){const D=g.touches[0].clientX-d,L=g.touches[0].clientY-p;Math.abs(D)>Math.abs(L)?m(g):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x))}else g.preventDefault(),t(g.touches[0].clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)},S=this._callOnFinishChange.bind(this),w=400;let R;const y=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const L=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(R),R=setTimeout(S,w)};this.$slider.addEventListener("mousedown",r),this.$slider.addEventListener("touchstart",_,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:r}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,r=-e.wheelDelta/120,r*=this._stepExplicit?1:10),t+-r}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class hw extends yi{constructor(e,t,r,a){super(e,t,r,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const r=document.createElement("option");r.textContent=t,this.$select.appendChild(r)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class dw extends yi{constructor(e,t,r){super(e,t,r,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var fw=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function pw(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Gm=!1;class ld{constructor({parent:e,autoPlace:t=e===void 0,container:r,width:a,title:u="Controls",closeFolders:c=!1,injectStyles:d=!0,touchStyles:p=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),p&&this.domElement.classList.add("allow-touch-styles"),!Gm&&d&&(pw(fw),Gm=!0),r?r.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,r,a,u){if(Object(r)===r)return new hw(this,e,t,r);const c=e[t];switch(typeof c){case"number":return new cw(this,e,t,r,a,u);case"boolean":return new iw(this,e,t);case"string":return new dw(this,e,t);case"function":return new ih(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,r=1){return new uw(this,e,t,r)}addFolder(e){const t=new ld({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(r=>{r instanceof ih||r._name in e.controllers&&r.load(e.controllers[r._name])}),t&&e.folders&&this.folders.forEach(r=>{r._title in e.folders&&r.load(e.folders[r._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof ih)){if(r._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);t.controllers[r._name]=r.save()}}),e&&this.folders.forEach(r=>{if(r._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);t.folders[r._title]=r.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const r=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(r=>r.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const mw="/assets/alpha-CY6UHDMs.jpg",gw="/assets/rocks_ground_02_col_2k-8wNzMKYg.webp",_w="/assets/rocks_ground_02_arm_2k-j4-pZ7uv.webp",vw="/assets/rocks_ground_02_nor_gl_2k-CYkMj45A.webp",xw="/assets/rocks_ground_02_height_2k-V-6TeI9y.webp",yw="/assets/rock_wall_08_diff_1k-Czdyet0_.webp",Sw="/assets/rock_wall_08_arm_1k-B68m0nwZ.webp",Ew="/assets/rock_wall_08_nor_gl_1k-DcWahaff.webp",Mw="/assets/rock_wall_08_disp_1k-Drb0NFnR.webp",ww="/assets/roof_09_diff_1k-DVKHU5rY.webp",Tw="/assets/roof_09_arm_1k-CwqfE3ms.webp",Aw="/assets/roof_09_nor_gl_1k-B4cINW90.webp",Rw="/assets/leaves_forest_ground_diff_1k-Bt2KqQCc.webp",Cw="/assets/leaves_forest_ground_arm_1k-CIirWEzm.webp",bw="/assets/leaves_forest_ground_nor_gl_1k-CzXVEdvu.webp",Pw="/assets/plastered_stone_wall_diff_1k-Dp5x8Wfb.webp",Dw="/assets/plastered_stone_wall_arm_1k-DX5PY3k4.webp",Lw="/assets/plastered_stone_wall_nor_gl_1k-BZb45bWt.webp",Iw="/assets/door_base_color-Bp5zp8hl.webp",Uw="data:image/webp;base64,UklGRlQIAABXRUJQVlA4IEgIAADw8wCdASoABAAEPm02mUmkIyKhIYgAgA2JaW7hd2EbQFmRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEAn80x0gZgpjpAzBTHSBmCmOkDMFMdIGYKY6QMwUx0gZgpjpAzBTHSBmBq3x0iRIkSJEiRIkSI+1ZacOHDhw4cOHDhw4cOHDg3b33JkyZMmTJkyZMhyVIkSJEiRIkSJEiRIkSJEhfDVSJEiRIkSJEiRIgPRzhw4cOHDhw4cOHDhw4cNerLThw4cOHDhw4cODdvfcmTJkyZMmTJkyZMmTJkOSpEiRIkSJEiRIkSF8NVIkSJEiRIkSJEiRIkSJEB6OcOHDhw4cOHDhw16stOHDhw4cOHDhw4cOHDhwbt77kyZMmTJkyZMmQ5KkSJEiRIkSJEiRIkSJEiQvhqpEiRIkSJEiRIkQHo5w4cOHDhw4cOHDhw4cOGvVlpw4cOHDhw4cOHBu3vuTJkyZMmTJkyZMmTJkyHJUiRIkSJEiRIkSJC+GqkSJEiRIkSJEiRIkSJEiA9HOHDhw4cOHDhw4a9WWnDhw4cOHDhw4cOHDhw4N299yZMmTJkyZMmTIclSJEiRIkSJEiRIkSJEiRIXw1UiRIkSJEiRIkSID0c4cOHDhw4cOHDhw4cOHDXqy04cOHDhw4cOHDg3b33JkyZMmTJkyZMmTJkyZDkqRIkSJEiRIkSJEhfDVSJEiRIkSJEiRIkSJEiRAejnDhw4cOHDhw4cNerLThw4cOHDhw4cOHDhw4cG7e+5MmTJkyZMmTJkOSpEiRIkSJEiRIkSJEiRIkL4aqRIkSJEiRIkSJEB6OcOHDhw4cOHDhw4cOHDhr1ZacOHDhw4cOHDhwbt77kyZMmTJkyZMmTJkyZMhyVIkSJEiRIkSJEiQvhqpEiRIkSJEiRIkSJEiRIgPRzhw4cOHDhw4cOGvVlpw4cOHDhw4cOHDhw4cODdvfcmTJkyZMmTJkyHJUiRIkSJEiRIkSJEiRIkSF8NVIkSJEiRIkSJEiA9HOHDhw4cOHDhw4cOHDhw16stOHDhw4cOHDhw4N299yZMmTJkyZMmTJkyZMmQ5KkSJEiRIkSJEiRIXw1UiRIkSJEiRIkSJEiRIkQHo5w4cOHDhw4cOHDXqy04cOHDhw4cOHDhw4cOHBu3vuTJkyZMmTJkyZDkqRIkSJEiRIkSJEiRIkSJC+GqkSJEiRIkSJEiRAejnDhw4cOHDhw4cOHDhw4a9WWnDhw4cOHDhw4cG7e+5MmTJkyZMmTJkyZMmTIclSJEiRIkSJEiRIkL4aqRIkSJEiRIkSJEiRIkSID0c4cOHDhw4cOHDhr1ZacOHDhw4cOHDhw4cOHDg3b33JkyZMmTJkyZMhyVIkSJEiRIkSJEiRIkSJEhfDVSJEiRIkSJEiRIgPRzhw4cOHDhw4cOHDhw4cNerLThw4cOHDhw4cODdvfcmTJkyZMmTJkyZMmTJkOSpEiRIkSJEiRIkSF8NVIkSJEiRIkSJEiRIkSJEB6OcOHDhw4cOHDhw16stOHDhw4cOHDhw4cOHDhwbt77kyZMmTJkyZMmQ5KkSJEiRIkSJEiRIkSJEiQvhqpEiRIkSJEiRIkQHo5w4cOHDhw4cOHDhw4cOGvVlpw4cOHDhw4cOHBu3vuTJkyZMmTJkyZMmTJkyHJUiRIkSJEiRIkSJC+GqkSJEiRIkSJEiRIkSJEiA9HOHDhw4cOHDhw4a9WWnDhw4cOHDhw4cOHDhw4N299yZMmTJkyZMmTIclSJEiRIkSJEiRIkSJEiRIXw1UiRIkSJEiRIkSID0c4cOHDhw4cOHDhw4cOHDXqy04cOHDhw4cOHDg3b33JkyZMmTJkyZMmTJkyZDkqRIkSJEiRIkSJEhfDVSJEiRIkSJEiRIkSJEiRAejnDhw4cOHDhw4cNerLThw4cOHDhw4cOHDhw4cG7e+5MmTJkyZMmTJkOSpEiRIkSJEiRIkSJEiRIkL4aqRIkSJEiRIkSJEB6OcOHDhw4cOHDhw4cOHDhr1ZacOHDhw4cOHDhwbt77kyZMmTJkyZMmTJkyZMhyVIkSJEiRIkSJEiQvhqpEiRIkSJEiRIkSJEiRIgPRzhw4cOHDhw4cOGvVlpw4cOHDhw4cOHDhw4cODdvfcmTJkyZMmTJkyHJUiRIkSJEiRIkSJEiRIkSF8NVIkSJEiRIkSJEiA9HOHDhw4cOHDhw4cOHDhw16stOHDhw4cOHDhw4N299yZMmTJkyZMmTJkyZMmQ5KkSJEiRIkSJEiRIXw1UiRIkSJEiRIkSJEiRIkQHo5w4cOHDhw4cOHDXqy04cOHDhw4cOHDhw4cOHBu3vuTJkyZMmTJkyZDAgKyzHSBcaV15MdIGYKY6QMwUx0gZgpjpAzBTHSBmCmOkDMFMdIGYEQ0+kC7qvdEiRIkSJEiRIkSJEjYfaAF+r1er1er1er1er1er1eqreNRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSFwAAP7/6wAAAAAAAUnX7/jjzi6ys3OKT3+GjGWQQPGPIGw/Jcvbi3T6z4sABsjDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYeiJRPYzxNxXo4aTqIBVA5yq1gAAAAAAAAAA==",Nw="/assets/door_ambient_occlusion-qJi5MUga.webp",Fw="/assets/door_height-xZhRVH79.webp",Ow="/assets/door_normal-D1_7AjEA.webp",kw="/assets/door_metallic-D7STwslm.webp",zw="/assets/door_roughness-mLD8a-Tp.webp",Bw=()=>(mv.useEffect(()=>{const s=new ld,e=new W0;let t=window.innerWidth/window.innerHeight;const r=new BM({antialias:!0});console.log(zl),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(r.domElement),window.addEventListener("resize",()=>{t=window.innerWidth/window.innerHeight,a.aspect=t,a.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2))}),window.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():r.domElement.requestFullscreen()});const a=new Wn(75,t,.1,1e3);a.position.z=5,a.position.x=4,a.position.y=2;const u=new VM(a,r.domElement);u.enableDamping=!0;const c=new ex("#426C8A",1),d=new tx("#426C8A",.275);c.position.set(3,2,-8),e.add(c),e.add(d);const p=new Tl("#ff7d46",5);p.position.set(0,2.2,2.5);const m=new Tl("#8800ff",6),_=new Tl("#ff0088",6),v=new Tl("#ff0000",6);e.add(m,_,v);const x=new yg;x.onStart=()=>{console.log("onStart")},x.onLoad=()=>{console.log("onLoad")},x.onProgress=()=>{console.log("onProgress")},x.onError=()=>{console.log("onError")};const S=new Z0(x),w=S.load(mw),R=S.load(gw),y=S.load(_w),g=S.load(vw),D=S.load(xw);R.colorSpace=ln,R.repeat.set(8,8),y.repeat.set(8,8),g.repeat.set(8,8),D.repeat.set(8,8),R.wrapS=dn,R.wrapT=dn,y.wrapS=dn,y.wrapT=dn,g.wrapS=dn,g.wrapT=dn,D.wrapS=dn,D.wrapT=dn;const L=S.load(yw),C=S.load(Sw),G=S.load(Ew),F=S.load(Mw);L.colorSpace=ln;const N=S.load(ww),V=S.load(Tw),b=S.load(Aw);N.colorSpace=ln,N.repeat.set(6,1),V.repeat.set(6,1),b.repeat.set(6,1),N.wrapS=dn,V.wrapS=dn,b.wrapS=dn;const A=S.load(Rw),k=S.load(Cw),ne=S.load(bw);A.colorSpace=ln,A.repeat.set(2,1),k.repeat.set(2,1),ne.repeat.set(2,1),A.wrapS=dn,k.wrapS=dn,ne.wrapS=dn;const Z=S.load(Pw),ae=S.load(Dw),ce=S.load(Lw);Z.colorSpace=ln,Z.repeat.set(.3,.4),ae.repeat.set(.3,.4),ce.repeat.set(.3,.4);const se=S.load(Iw),ue=S.load(Uw),B=S.load(Nw),le=S.load(Fw),oe=S.load(Ow),U=S.load(kw),ie=S.load(zw);se.colorSpace=ln,c.shadow.mapSize.width=256,c.shadow.mapSize.height=256,c.shadow.camera.top=8,c.shadow.camera.right=8,c.shadow.camera.bottom=-8,c.shadow.camera.left=-8,c.shadow.camera.near=1,c.shadow.camera.far=20,m.shadow.mapSize.width=256,m.shadow.mapSize.height=256,m.shadow.camera.far=10,_.shadow.mapSize.width=256,_.shadow.mapSize.height=256,_.shadow.camera.far=10,v.shadow.mapSize.width=256,v.shadow.mapSize.height=256,v.shadow.camera.far=10;const Pe=new Kt(new no(20,20,100,100),new ks({color:3881787,alphaMap:w,transparent:!0,map:R,aoMap:y,roughnessMap:y,metalnessMap:y,normalMap:g,displacementMap:D,displacementScale:.3,displacementBias:-.0609999999999999}));Pe.rotation.x=-Math.PI/2,s.add(Pe.material,"displacementScale").min(0).max(1).step(.001).name("floorDisplacementScale"),s.add(Pe.material,"displacementBias").min(-1).max(1).step(.001).name("floorDisplacementBias");const Q=new Kt(new Tr(4,2.5,4,100,100,100),new ks({map:L,aoMap:C,roughnessMap:C,metalnessMap:C,normalMap:G,displacementMap:F,displacementScale:0,displacementBias:0}));Q.position.y+=2.5/2;const he=new Kt(new nd(3.5,1.5,4),new ks({map:N,aoMap:V,roughnessMap:V,metalnessMap:V,normalMap:b}));he.position.y=2.5+.75,he.rotation.y=Math.PI*.25;const xe=new Kt(new no(2.2,2.2,100,100),new ks({map:se,transparent:!0,alphaMap:ue,aoMap:B,displacementMap:le,displacementScale:.15,displacementBias:-.04,normalMap:oe,metalnessMap:U,roughnessMap:ie}));xe.position.y=1,xe.position.z=2+.01;const me=new id(1,16,16),we=new ks({color:13434828,map:A,aoMap:k,roughnessMap:k,metalnessMap:k,normalMap:ne}),be=new Kt(me,we);be.scale.set(.5,.5,.5),be.position.set(.8,.2,2.2),be.rotation.x=-.75;const $e=new Kt(me,we);$e.scale.set(.25,.25,.25),$e.position.set(1.4,.1,2.1),$e.rotation.x=-.75;const vt=new Kt(me,we);vt.scale.set(.4,.4,.4),vt.position.set(-.8,.2,2.2),vt.rotation.x=-.75;const lt=new Kt(me,we);lt.scale.set(.15,.15,.15),lt.position.set(-1,.05,2.6),lt.rotation.x=-.75;const Rt=new Tr(.6,.8,.2),z=new ks({map:Z,aoMap:ae,roughnessMap:ae,metalnessMap:ae,normalMap:ce}),$t=new Gs;for(let Ie=0;Ie<30;Ie++){const P=new Kt(Rt,z),M=Math.random()*Math.PI*2,J=3+Math.random()*4,pe=Math.sin(M)*J,ge=Math.cos(M)*J;P.position.x=pe,P.position.y=Math.random()*.4,P.position.z=ge,P.rotation.x=(Math.random()-.5)*.4,P.rotation.y=(Math.random()-.5)*.4,P.rotation.z=(Math.random()-.5)*.4,$t.add(P)}const it=new Gs;e.add(it),it.add(Pe),it.add(Q),it.add(he),it.add(xe),it.add(be,$e,vt,lt),it.add(p),e.add($t),r.shadowMap.enabled=!0,r.shadowMap.type=Xm,c.castShadow=!0,m.castShadow=!0,_.castShadow=!0,v.castShadow=!0,Q.castShadow=!0,Q.receiveShadow=!0,he.castShadow=!0,Pe.receiveShadow=!0;for(const Ie of $t.children)Ie.castShadow=!0,Ie.receiveShadow=!0;const nt=new Vl;nt.scale.set(100,100,100),e.add(nt),nt.material.uniforms.turbidity.value=5,nt.material.uniforms.rayleigh.value=1,nt.material.uniforms.mieCoefficient.value=.05,nt.material.uniforms.mieDirectionalG.value=.95,nt.material.uniforms.sunPosition.value.set(.3,-.05,-.95),e.fog=new Qh("#02343f",.1);const Ye=new tw;function Tt(){Ye.update();const Ie=Ye.getElapsed(),P=Ie*.5;m.position.x=Math.cos(P)*4,m.position.z=Math.sin(P)*4,m.position.y=Math.sin(P)*Math.sin(P*2.34)*Math.sin(P*3.45);const M=-Ie*1;_.position.x=Math.cos(M)*6,_.position.z=Math.sin(M)*6,_.position.y=Math.sin(M)*Math.sin(M*2.34)*Math.sin(M*3.45);const J=Ie*1.5;v.position.x=Math.cos(J)*8,v.position.z=Math.sin(J)*8,v.position.y=Math.sin(J)*Math.sin(J*2.34)*Math.sin(J*3.45),u.update(),r.render(e,a)}return r.setAnimationLoop(Tt),()=>{r.dispose(),document.body.removeChild(r.domElement),s.destroy()}},[]),null);function Hw(){return Pl.jsx(Pl.Fragment,{children:Pl.jsx(Bw,{})})}pv.createRoot(document.getElementById("root")).render(Pl.jsx(Hw,{}));
