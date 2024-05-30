const __vite__fileDeps=["assets/AboutView-OboHPzbB.js","assets/AboutView-C6Dx7pxG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nd(i,e){const t=new Set(i.split(","));return n=>t.has(n)}const Pt={},Do=[],ui=()=>{},Sy=()=>!1,_u=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),id=i=>i.startsWith("onUpdate:"),nn=Object.assign,rd=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ey=Object.prototype.hasOwnProperty,ht=(i,e)=>Ey.call(i,e),Ze=Array.isArray,No=i=>vu(i)==="[object Map]",V_=i=>vu(i)==="[object Set]",Qe=i=>typeof i=="function",qt=i=>typeof i=="string",Js=i=>typeof i=="symbol",It=i=>i!==null&&typeof i=="object",G_=i=>(It(i)||Qe(i))&&Qe(i.then)&&Qe(i.catch),W_=Object.prototype.toString,vu=i=>W_.call(i),Ty=i=>vu(i).slice(8,-1),X_=i=>vu(i)==="[object Object]",sd=i=>qt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Va=nd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xu=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},by=/-(\w)/g,Ki=xu(i=>i.replace(by,(e,t)=>t?t.toUpperCase():"")),Ay=/\B([A-Z])/g,fa=xu(i=>i.replace(Ay,"-$1").toLowerCase()),yu=xu(i=>i.charAt(0).toUpperCase()+i.slice(1)),Gu=xu(i=>i?`on${yu(i)}`:""),ns=(i,e)=>!Object.is(i,e),Wu=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Y_=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},wy=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let mp;const q_=()=>mp||(mp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function od(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=qt(n)?Ly(n):od(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(qt(i)||It(i))return i}const Ry=/;(?![^(]*\))/g,Cy=/:([^]+)/,Py=/\/\*[^]*?\*\//g;function Ly(i){const e={};return i.replace(Py,"").split(Ry).forEach(t=>{if(t){const n=t.split(Cy);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ad(i){let e="";if(qt(i))e=i;else if(Ze(i))for(let t=0;t<i.length;t++){const n=ad(i[t]);n&&(e+=n+" ")}else if(It(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Iy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dy=nd(Iy);function j_(i){return!!i||i===""}const K_=i=>qt(i)?i:i==null?"":Ze(i)||It(i)&&(i.toString===W_||!Qe(i.toString))?JSON.stringify(i,$_,2):String(i),$_=(i,e)=>e&&e.__v_isRef?$_(i,e.value):No(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Xu(n,s)+" =>"]=r,t),{})}:V_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Xu(t))}:Js(e)?Xu(e):It(e)&&!Ze(e)&&!X_(e)?String(e):e,Xu=(i,e="")=>{var t;return Js(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xi;class Ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xi,!e&&xi&&(this.index=(xi.scopes||(xi.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=xi;try{return xi=this,e()}finally{xi=t}}}on(){xi=this}off(){xi=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Oy(i,e=xi){e&&e.active&&e.effects.push(i)}function Uy(){return xi}let Os;class ld{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Oy(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ls();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Fy(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=jr,t=Os;try{return jr=!0,Os=this,this._runnings++,gp(this),this.fn()}finally{_p(this),this._runnings--,Os=t,jr=e}}stop(){this.active&&(gp(this),_p(this),this.onStop&&this.onStop(),this.active=!1)}}function Fy(i){return i.value}function gp(i){i._trackId++,i._depsLength=0}function _p(i){if(i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)Z_(i.deps[e],i);i.deps.length=i._depsLength}}function Z_(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let jr=!0,sh=0;const J_=[];function ls(){J_.push(jr),jr=!1}function cs(){const i=J_.pop();jr=i===void 0?!0:i}function cd(){sh++}function ud(){for(sh--;!sh&&oh.length;)oh.shift()()}function Q_(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&Z_(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const oh=[];function e0(i,e,t){cd();for(const n of i.keys()){let r;n._dirtyLevel<e&&(r??(r=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(r??(r=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&oh.push(n.scheduler)))}ud()}const t0=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},ah=new WeakMap,Us=Symbol(""),lh=Symbol("");function Gn(i,e,t){if(jr&&Os){let n=ah.get(i);n||ah.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=t0(()=>n.delete(t))),Q_(Os,r)}}function gr(i,e,t,n,r,s){const o=ah.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ze(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!Js(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ze(i)?sd(t)&&a.push(o.get("length")):(a.push(o.get(Us)),No(i)&&a.push(o.get(lh)));break;case"delete":Ze(i)||(a.push(o.get(Us)),No(i)&&a.push(o.get(lh)));break;case"set":No(i)&&a.push(o.get(Us));break}cd();for(const l of a)l&&e0(l,4);ud()}const By=nd("__proto__,__v_isRef,__isVue"),n0=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Js)),vp=ky();function ky(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=_t(this);for(let s=0,o=this.length;s<o;s++)Gn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(_t)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ls(),cd();const n=_t(this)[e].apply(this,t);return ud(),cs(),n}}),i}function zy(i){Js(i)||(i=String(i));const e=_t(this);return Gn(e,"has",i),e.hasOwnProperty(i)}class i0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Qy:a0:s?o0:s0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ze(e);if(!r){if(o&&ht(vp,t))return Reflect.get(vp,t,n);if(t==="hasOwnProperty")return zy}const a=Reflect.get(e,t,n);return(Js(t)?n0.has(t):By(t))||(r||Gn(e,"get",t),s)?a:Wn(a)?o&&sd(t)?a:a.value:It(a)?r?c0(a):Su(a):a}}class r0 extends i0{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=ul(s);if(!qc(n)&&!ul(n)&&(s=_t(s),n=_t(n)),!Ze(e)&&Wn(s)&&!Wn(n))return l?!1:(s.value=n,!0)}const o=Ze(e)&&sd(t)?Number(t)<e.length:ht(e,t),a=Reflect.set(e,t,n,r);return e===_t(r)&&(o?ns(n,s)&&gr(e,"set",t,n):gr(e,"add",t,n)),a}deleteProperty(e,t){const n=ht(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&gr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Js(t)||!n0.has(t))&&Gn(e,"has",t),n}ownKeys(e){return Gn(e,"iterate",Ze(e)?"length":Us),Reflect.ownKeys(e)}}class Hy extends i0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Vy=new r0,Gy=new Hy,Wy=new r0(!0);const fd=i=>i,Mu=i=>Reflect.getPrototypeOf(i);function Ul(i,e,t=!1,n=!1){i=i.__v_raw;const r=_t(i),s=_t(e);t||(ns(e,s)&&Gn(r,"get",e),Gn(r,"get",s));const{has:o}=Mu(r),a=n?fd:t?pd:fl;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Fl(i,e=!1){const t=this.__v_raw,n=_t(t),r=_t(i);return e||(ns(i,r)&&Gn(n,"has",i),Gn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Bl(i,e=!1){return i=i.__v_raw,!e&&Gn(_t(i),"iterate",Us),Reflect.get(i,"size",i)}function xp(i){i=_t(i);const e=_t(this);return Mu(e).has.call(e,i)||(e.add(i),gr(e,"add",i,i)),this}function yp(i,e){e=_t(e);const t=_t(this),{has:n,get:r}=Mu(t);let s=n.call(t,i);s||(i=_t(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?ns(e,o)&&gr(t,"set",i,e):gr(t,"add",i,e),this}function Mp(i){const e=_t(this),{has:t,get:n}=Mu(e);let r=t.call(e,i);r||(i=_t(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&gr(e,"delete",i,void 0),s}function Sp(){const i=_t(this),e=i.size!==0,t=i.clear();return e&&gr(i,"clear",void 0,void 0),t}function kl(i,e){return function(n,r){const s=this,o=s.__v_raw,a=_t(o),l=e?fd:i?pd:fl;return!i&&Gn(a,"iterate",Us),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function zl(i,e,t){return function(...n){const r=this.__v_raw,s=_t(r),o=No(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?fd:e?pd:fl;return!e&&Gn(s,"iterate",l?lh:Us),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Tr(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Xy(){const i={get(s){return Ul(this,s)},get size(){return Bl(this)},has:Fl,add:xp,set:yp,delete:Mp,clear:Sp,forEach:kl(!1,!1)},e={get(s){return Ul(this,s,!1,!0)},get size(){return Bl(this)},has:Fl,add:xp,set:yp,delete:Mp,clear:Sp,forEach:kl(!1,!0)},t={get(s){return Ul(this,s,!0)},get size(){return Bl(this,!0)},has(s){return Fl.call(this,s,!0)},add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear"),forEach:kl(!0,!1)},n={get(s){return Ul(this,s,!0,!0)},get size(){return Bl(this,!0)},has(s){return Fl.call(this,s,!0)},add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear"),forEach:kl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=zl(s,!1,!1),t[s]=zl(s,!0,!1),e[s]=zl(s,!1,!0),n[s]=zl(s,!0,!0)}),[i,t,e,n]}const[Yy,qy,jy,Ky]=Xy();function hd(i,e){const t=e?i?Ky:jy:i?qy:Yy;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(ht(t,r)&&r in n?t:n,r,s)}const $y={get:hd(!1,!1)},Zy={get:hd(!1,!0)},Jy={get:hd(!0,!1)};const s0=new WeakMap,o0=new WeakMap,a0=new WeakMap,Qy=new WeakMap;function eM(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tM(i){return i.__v_skip||!Object.isExtensible(i)?0:eM(Ty(i))}function Su(i){return ul(i)?i:dd(i,!1,Vy,$y,s0)}function l0(i){return dd(i,!1,Wy,Zy,o0)}function c0(i){return dd(i,!0,Gy,Jy,a0)}function dd(i,e,t,n,r){if(!It(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=tM(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Ga(i){return ul(i)?Ga(i.__v_raw):!!(i&&i.__v_isReactive)}function ul(i){return!!(i&&i.__v_isReadonly)}function qc(i){return!!(i&&i.__v_isShallow)}function u0(i){return i?!!i.__v_raw:!1}function _t(i){const e=i&&i.__v_raw;return e?_t(e):i}function nM(i){return Object.isExtensible(i)&&Y_(i,"__v_skip",!0),i}const fl=i=>It(i)?Su(i):i,pd=i=>It(i)?c0(i):i;class f0{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ld(()=>e(this._value),()=>Pc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=_t(this);return(!e._cacheable||e.effect.dirty)&&ns(e._value,e._value=e.effect.run())&&Pc(e,4),h0(e),e.effect._dirtyLevel>=2&&Pc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function iM(i,e,t=!1){let n,r;const s=Qe(i);return s?(n=i,r=ui):(n=i.get,r=i.set),new f0(n,r,s||!r,t)}function h0(i){var e;jr&&Os&&(i=_t(i),Q_(Os,(e=i.dep)!=null?e:i.dep=t0(()=>i.dep=void 0,i instanceof f0?i:void 0)))}function Pc(i,e=4,t){i=_t(i);const n=i.dep;n&&e0(n,e)}function Wn(i){return!!(i&&i.__v_isRef===!0)}function rM(i){return d0(i,!1)}function sM(i){return d0(i,!0)}function d0(i,e){return Wn(i)?i:new oM(i,e)}class oM{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:_t(e),this._value=t?e:fl(e)}get value(){return h0(this),this._value}set value(e){const t=this.__v_isShallow||qc(e)||ul(e);e=t?e:_t(e),ns(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fl(e),Pc(this,4))}}function Kr(i){return Wn(i)?i.value:i}const aM={get:(i,e,t)=>Kr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Wn(r)&&!Wn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function p0(i){return Ga(i)?i:new Proxy(i,aM)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $r(i,e,t,n){try{return n?i(...n):i()}catch(r){Eu(r,e,t)}}function wi(i,e,t,n){if(Qe(i)){const r=$r(i,e,t,n);return r&&G_(r)&&r.catch(s=>{Eu(s,e,t)}),r}if(Ze(i)){const r=[];for(let s=0;s<i.length;s++)r.push(wi(i[s],e,t,n));return r}}function Eu(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ls(),$r(l,null,10,[i,o,a]),cs();return}}lM(i,t,r,n)}function lM(i,e,t,n=!0){console.error(i)}let hl=!1,ch=!1;const mn=[];let zi=0;const Oo=[];let Nr=null,Rs=0;const m0=Promise.resolve();let md=null;function g0(i){const e=md||m0;return i?e.then(this?i.bind(this):i):e}function cM(i){let e=zi+1,t=mn.length;for(;e<t;){const n=e+t>>>1,r=mn[n],s=dl(r);s<i||s===i&&r.pre?e=n+1:t=n}return e}function gd(i){(!mn.length||!mn.includes(i,hl&&i.allowRecurse?zi+1:zi))&&(i.id==null?mn.push(i):mn.splice(cM(i.id),0,i),_0())}function _0(){!hl&&!ch&&(ch=!0,md=m0.then(x0))}function uM(i){const e=mn.indexOf(i);e>zi&&mn.splice(e,1)}function fM(i){Ze(i)?Oo.push(...i):(!Nr||!Nr.includes(i,i.allowRecurse?Rs+1:Rs))&&Oo.push(i),_0()}function Ep(i,e,t=hl?zi+1:0){for(;t<mn.length;t++){const n=mn[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;mn.splice(t,1),t--,n()}}}function v0(i){if(Oo.length){const e=[...new Set(Oo)].sort((t,n)=>dl(t)-dl(n));if(Oo.length=0,Nr){Nr.push(...e);return}for(Nr=e,Rs=0;Rs<Nr.length;Rs++)Nr[Rs]();Nr=null,Rs=0}}const dl=i=>i.id==null?1/0:i.id,hM=(i,e)=>{const t=dl(i)-dl(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function x0(i){ch=!1,hl=!0,mn.sort(hM);try{for(zi=0;zi<mn.length;zi++){const e=mn[zi];e&&e.active!==!1&&$r(e,null,14)}}finally{zi=0,mn.length=0,v0(),hl=!1,md=null,(mn.length||Oo.length)&&x0()}}function dM(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Pt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||Pt;h&&(r=t.map(d=>qt(d)?d.trim():d)),f&&(r=t.map(wy))}let a,l=n[a=Gu(e)]||n[a=Gu(Ki(e))];!l&&s&&(l=n[a=Gu(fa(e))]),l&&wi(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,wi(c,i,6,r)}}function y0(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Qe(i)){const l=c=>{const u=y0(c,e,!0);u&&(a=!0,nn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(It(i)&&n.set(i,null),null):(Ze(s)?s.forEach(l=>o[l]=null):nn(o,s),It(i)&&n.set(i,o),o)}function Tu(i,e){return!i||!_u(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(i,e[0].toLowerCase()+e.slice(1))||ht(i,fa(e))||ht(i,e))}let Ti=null,bu=null;function jc(i){const e=Ti;return Ti=i,bu=i&&i.type.__scopeId||null,e}function pM(i){bu=i}function mM(){bu=null}function M0(i,e=Ti,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Np(-1);const s=jc(e);let o;try{o=i(...r)}finally{jc(s),n._d&&Np(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Yu(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=i,p=jc(i);let m,x;try{if(t.shapeFlag&4){const S=r||n,L=S;m=Bi(c.call(L,S,u,f,d,h,_)),x=a}else{const S=e;m=Bi(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),x=e.props?a:gM(a)}}catch(S){Ya.length=0,Eu(S,i,1),m=ei(pl)}let v=m;if(x&&g!==!1){const S=Object.keys(x),{shapeFlag:L}=v;S.length&&L&7&&(s&&S.some(id)&&(x=_M(x,s)),v=qo(v,x,!1,!0))}return t.dirs&&(v=qo(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,jc(p),m}const gM=i=>{let e;for(const t in i)(t==="class"||t==="style"||_u(t))&&((e||(e={}))[t]=i[t]);return e},_M=(i,e)=>{const t={};for(const n in i)(!id(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function vM(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Tp(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Tu(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Tp(n,o,c):!0:!!o;return!1}function Tp(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Tu(t,s))return!0}return!1}function xM({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const yM="components";function MM(i,e){return EM(yM,i,!0,e)||i}const SM=Symbol.for("v-ndc");function EM(i,e,t=!0,n=!1){const r=Ti||gn;if(r){const s=r.type;{const a=gS(s,!1);if(a&&(a===e||a===Ki(e)||a===yu(Ki(e))))return s}const o=bp(r[i]||s[i],e)||bp(r.appContext[i],e);return!o&&n?s:o}}function bp(i,e){return i&&(i[e]||i[Ki(e)]||i[yu(Ki(e))])}const TM=i=>i.__isSuspense;function bM(i,e){e&&e.pendingBranch?Ze(i)?e.effects.push(...i):e.effects.push(i):fM(i)}const AM=Symbol.for("v-scx"),wM=()=>_r(AM),Hl={};function Lc(i,e,t){return S0(i,e,t)}function S0(i,e,{immediate:t,deep:n,flush:r,once:s,onTrack:o,onTrigger:a}=Pt){if(e&&s){const b=e;e=(...A)=>{b(...A),L()}}const l=gn,c=b=>n===!0?b:Ro(b,n===!1?1:void 0);let u,f=!1,h=!1;if(Wn(i)?(u=()=>i.value,f=qc(i)):Ga(i)?(u=()=>c(i),f=!0):Ze(i)?(h=!0,f=i.some(b=>Ga(b)||qc(b)),u=()=>i.map(b=>{if(Wn(b))return b.value;if(Ga(b))return c(b);if(Qe(b))return $r(b,l,2)})):Qe(i)?e?u=()=>$r(i,l,2):u=()=>(d&&d(),wi(i,l,3,[_])):u=ui,e&&n){const b=u;u=()=>Ro(b())}let d,_=b=>{d=v.onStop=()=>{$r(b,l,4),d=v.onStop=void 0}},g;if(Ru)if(_=ui,e?t&&wi(e,l,3,[u(),h?[]:void 0,_]):u(),r==="sync"){const b=wM();g=b.__watcherHandles||(b.__watcherHandles=[])}else return ui;let p=h?new Array(i.length).fill(Hl):Hl;const m=()=>{if(!(!v.active||!v.dirty))if(e){const b=v.run();(n||f||(h?b.some((A,O)=>ns(A,p[O])):ns(b,p)))&&(d&&d(),wi(e,l,3,[b,p===Hl?void 0:h&&p[0]===Hl?[]:p,_]),p=b)}else v.run()};m.allowRecurse=!!e;let x;r==="sync"?x=m:r==="post"?x=()=>Un(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),x=()=>gd(m));const v=new ld(u,ui,x),S=Uy(),L=()=>{v.stop(),S&&rd(S.effects,v)};return e?t?m():p=v.run():r==="post"?Un(v.run.bind(v),l&&l.suspense):v.run(),g&&g.push(L),L}function RM(i,e,t){const n=this.proxy,r=qt(i)?i.includes(".")?E0(n,i):()=>n[i]:i.bind(n,n);let s;Qe(e)?s=e:(s=e.handler,t=e);const o=Ll(this),a=S0(r,s.bind(n),t);return o(),a}function E0(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ro(i,e=1/0,t){if(e<=0||!It(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Wn(i))Ro(i.value,e,t);else if(Ze(i))for(let n=0;n<i.length;n++)Ro(i[n],e,t);else if(V_(i)||No(i))i.forEach(n=>{Ro(n,e,t)});else if(X_(i))for(const n in i)Ro(i[n],e,t);return i}function hs(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(ls(),wi(l,t,8,[i.el,a,i,e]),cs())}}/*! #__NO_SIDE_EFFECTS__ */function T0(i,e){return Qe(i)?nn({name:i.name},e,{setup:i}):i}const Ic=i=>!!i.type.__asyncLoader,b0=i=>i.type.__isKeepAlive;function CM(i,e){A0(i,"a",e)}function PM(i,e){A0(i,"da",e)}function A0(i,e,t=gn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Au(e,n,t),t){let r=t.parent;for(;r&&r.parent;)b0(r.parent.vnode)&&LM(n,e,t,r),r=r.parent}}function LM(i,e,t,n){const r=Au(e,i,n,!0);vd(()=>{rd(n[e],r)},t)}function Au(i,e,t=gn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ls();const a=Ll(t),l=wi(e,t,i,o);return a(),cs(),l});return n?r.unshift(s):r.push(s),s}}const Sr=i=>(e,t=gn)=>(!Ru||i==="sp")&&Au(i,(...n)=>e(...n),t),IM=Sr("bm"),_d=Sr("m"),DM=Sr("bu"),NM=Sr("u"),OM=Sr("bum"),vd=Sr("um"),UM=Sr("sp"),FM=Sr("rtg"),BM=Sr("rtc");function kM(i,e=gn){Au("ec",i,e)}function w0(i,e,t,n){let r;const s=t;if(Ze(i)||qt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s)}else if(It(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s)}}else r=[];return r}const uh=i=>i?G0(i)?Sd(i)||i.proxy:uh(i.parent):null,Wa=nn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>uh(i.parent),$root:i=>uh(i.root),$emit:i=>i.emit,$options:i=>xd(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,gd(i.update)}),$nextTick:i=>i.n||(i.n=g0.bind(i.proxy)),$watch:i=>RM.bind(i)}),qu=(i,e)=>i!==Pt&&!i.__isScriptSetup&&ht(i,e),zM={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(qu(n,e))return o[e]=1,n[e];if(r!==Pt&&ht(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&ht(c,e))return o[e]=3,s[e];if(t!==Pt&&ht(t,e))return o[e]=4,t[e];fh&&(o[e]=0)}}const u=Wa[e];let f,h;if(u)return e==="$attrs"&&Gn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Pt&&ht(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ht(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return qu(r,e)?(r[e]=t,!0):n!==Pt&&ht(n,e)?(n[e]=t,!0):ht(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Pt&&ht(i,o)||qu(e,o)||(a=s[0])&&ht(a,o)||ht(n,o)||ht(Wa,o)||ht(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ht(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Ap(i){return Ze(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let fh=!0;function HM(i){const e=xd(i),t=i.proxy,n=i.ctx;fh=!1,e.beforeCreate&&wp(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:v,unmounted:S,render:L,renderTracked:b,renderTriggered:A,errorCaptured:O,serverPrefetch:T,expose:y,inheritAttrs:G,components:H,directives:F,filters:K}=e;if(c&&VM(c,n,null),o)for(const ne in o){const W=o[ne];Qe(W)&&(n[ne]=W.bind(t))}if(r){const ne=r.call(t,t);It(ne)&&(i.data=Su(ne))}if(fh=!0,s)for(const ne in s){const W=s[ne],ue=Qe(W)?W.bind(t,t):Qe(W.get)?W.get.bind(t,t):ui,D=!Qe(W)&&Qe(W.set)?W.set.bind(t):ui,me=Si({get:ue,set:D});Object.defineProperty(n,ne,{enumerable:!0,configurable:!0,get:()=>me.value,set:Pe=>me.value=Pe})}if(a)for(const ne in a)R0(a[ne],n,t,ne);if(l){const ne=Qe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(W=>{Dc(W,ne[W])})}u&&wp(u,i,"c");function te(ne,W){Ze(W)?W.forEach(ue=>ne(ue.bind(t))):W&&ne(W.bind(t))}if(te(IM,f),te(_d,h),te(DM,d),te(NM,_),te(CM,g),te(PM,p),te(kM,O),te(BM,b),te(FM,A),te(OM,x),te(vd,S),te(UM,T),Ze(y))if(y.length){const ne=i.exposed||(i.exposed={});y.forEach(W=>{Object.defineProperty(ne,W,{get:()=>t[W],set:ue=>t[W]=ue})})}else i.exposed||(i.exposed={});L&&i.render===ui&&(i.render=L),G!=null&&(i.inheritAttrs=G),H&&(i.components=H),F&&(i.directives=F)}function VM(i,e,t=ui){Ze(i)&&(i=hh(i));for(const n in i){const r=i[n];let s;It(r)?"default"in r?s=_r(r.from||n,r.default,!0):s=_r(r.from||n):s=_r(r),Wn(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function wp(i,e,t){wi(Ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function R0(i,e,t,n){const r=n.includes(".")?E0(t,n):()=>t[n];if(qt(i)){const s=e[i];Qe(s)&&Lc(r,s)}else if(Qe(i))Lc(r,i.bind(t));else if(It(i))if(Ze(i))i.forEach(s=>R0(s,e,t,n));else{const s=Qe(i.handler)?i.handler.bind(t):e[i.handler];Qe(s)&&Lc(r,s,i)}}function xd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Kc(l,c,o,!0)),Kc(l,e,o)),It(e)&&s.set(e,l),l}function Kc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Kc(i,s,t,!0),r&&r.forEach(o=>Kc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=GM[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const GM={data:Rp,props:Cp,emits:Cp,methods:Ia,computed:Ia,beforeCreate:En,created:En,beforeMount:En,mounted:En,beforeUpdate:En,updated:En,beforeDestroy:En,beforeUnmount:En,destroyed:En,unmounted:En,activated:En,deactivated:En,errorCaptured:En,serverPrefetch:En,components:Ia,directives:Ia,watch:XM,provide:Rp,inject:WM};function Rp(i,e){return e?i?function(){return nn(Qe(i)?i.call(this,this):i,Qe(e)?e.call(this,this):e)}:e:i}function WM(i,e){return Ia(hh(i),hh(e))}function hh(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function En(i,e){return i?[...new Set([].concat(i,e))]:e}function Ia(i,e){return i?nn(Object.create(null),i,e):e}function Cp(i,e){return i?Ze(i)&&Ze(e)?[...new Set([...i,...e])]:nn(Object.create(null),Ap(i),Ap(e??{})):e}function XM(i,e){if(!i)return e;if(!e)return i;const t=nn(Object.create(null),i);for(const n in e)t[n]=En(i[n],e[n]);return t}function C0(){return{app:null,config:{isNativeTag:Sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let YM=0;function qM(i,e){return function(n,r=null){Qe(n)||(n=nn({},n)),r!=null&&!It(r)&&(r=null);const s=C0(),o=new WeakSet;let a=!1;const l=s.app={_uid:YM++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:vS,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Qe(c.install)?(o.add(c),c.install(l,...u)):Qe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ei(n,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Sd(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Xa;Xa=l;try{return c()}finally{Xa=u}}};return l}}let Xa=null;function Dc(i,e){if(gn){let t=gn.provides;const n=gn.parent&&gn.parent.provides;n===t&&(t=gn.provides=Object.create(n)),t[i]=e}}function _r(i,e,t=!1){const n=gn||Ti;if(n||Xa){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Xa._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Qe(e)?e.call(n&&n.proxy):e}}const P0={},L0=()=>Object.create(P0),I0=i=>Object.getPrototypeOf(i)===P0;function jM(i,e,t,n=!1){const r={},s=L0();i.propsDefaults=Object.create(null),D0(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:l0(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function KM(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=_t(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Tu(i.emitsOptions,h))continue;const d=e[h];if(l)if(ht(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=Ki(h);r[_]=dh(l,a,_,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{D0(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ht(e,f)&&((u=fa(f))===f||!ht(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=dh(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ht(e,f))&&(delete s[f],c=!0)}c&&gr(i.attrs,"set","")}function D0(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Va(l))continue;const c=e[l];let u;r&&ht(r,u=Ki(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Tu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=_t(t),c=a||Pt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=dh(r,l,f,c[f],i,!ht(c,f))}}return o}function dh(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=ht(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Ll(r);n=c[t]=l.call(null,e),u()}}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===fa(t))&&(n=!0))}return n}function N0(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Qe(i)){const u=f=>{l=!0;const[h,d]=N0(f,e,!0);nn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return It(i)&&n.set(i,Do),Do;if(Ze(s))for(let u=0;u<s.length;u++){const f=Ki(s[u]);Pp(f)&&(o[f]=Pt)}else if(s)for(const u in s){const f=Ki(u);if(Pp(f)){const h=s[u],d=o[f]=Ze(h)||Qe(h)?{type:h}:nn({},h);if(d){const _=Dp(Boolean,d.type),g=Dp(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||ht(d,"default"))&&a.push(f)}}}const c=[o,a];return It(i)&&n.set(i,c),c}function Pp(i){return i[0]!=="$"&&!Va(i)}function Lp(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function Ip(i,e){return Lp(i)===Lp(e)}function Dp(i,e){return Ze(e)?e.findIndex(t=>Ip(t,i)):Qe(e)&&Ip(e,i)?0:-1}const O0=i=>i[0]==="_"||i==="$stable",yd=i=>Ze(i)?i.map(Bi):[Bi(i)],$M=(i,e,t)=>{if(e._n)return e;const n=M0((...r)=>yd(e(...r)),t);return n._c=!1,n},U0=(i,e,t)=>{const n=i._ctx;for(const r in i){if(O0(r))continue;const s=i[r];if(Qe(s))e[r]=$M(r,s,n);else if(s!=null){const o=yd(s);e[r]=()=>o}}},F0=(i,e)=>{const t=yd(e);i.slots.default=()=>t},ZM=(i,e)=>{const t=i.slots=L0();if(i.vnode.shapeFlag&32){const n=e._;n?(nn(t,e),Y_(t,"_",n,!0)):U0(e,t)}else e&&F0(i,e)},JM=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Pt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(nn(r,e),!t&&a===1&&delete r._):(s=!e.$stable,U0(e,r)),o=e}else e&&(F0(i,e),o={default:1});if(s)for(const a in r)!O0(a)&&o[a]==null&&delete r[a]};function ph(i,e,t,n,r=!1){if(Ze(i)){i.forEach((h,d)=>ph(h,e&&(Ze(e)?e[d]:e),t,n,r));return}if(Ic(n)&&!r)return;const s=n.shapeFlag&4?Sd(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Pt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(qt(c)?(u[c]=null,ht(f,c)&&(f[c]=null)):Wn(c)&&(c.value=null)),Qe(l))$r(l,a,12,[o,u]);else{const h=qt(l),d=Wn(l);if(h||d){const _=()=>{if(i.f){const g=h?ht(f,l)?f[l]:u[l]:l.value;r?Ze(g)&&rd(g,s):Ze(g)?g.includes(s)||g.push(s):h?(u[l]=[s],ht(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,ht(f,l)&&(f[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(_.id=-1,Un(_,t)):_()}}}const Un=bM;function QM(i){return eS(i)}function eS(i,e){const t=q_();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ui,insertStaticContent:_}=i,g=(R,P,V,j=null,I=null,ce=null,C=void 0,M=null,N=!!P.dynamicChildren)=>{if(R===P)return;R&&!va(R,P)&&(j=k(R),Pe(R,I,ce,!0),R=null),P.patchFlag===-2&&(N=!1,P.dynamicChildren=null);const{type:B,ref:q,shapeFlag:ee}=P;switch(B){case wu:p(R,P,V,j);break;case pl:m(R,P,V,j);break;case Ku:R==null&&x(P,V,j,C);break;case yi:H(R,P,V,j,I,ce,C,M,N);break;default:ee&1?L(R,P,V,j,I,ce,C,M,N):ee&6?F(R,P,V,j,I,ce,C,M,N):(ee&64||ee&128)&&B.process(R,P,V,j,I,ce,C,M,N,U)}q!=null&&I&&ph(q,R&&R.ref,ce,P||R,!P)},p=(R,P,V,j)=>{if(R==null)n(P.el=a(P.children),V,j);else{const I=P.el=R.el;P.children!==R.children&&c(I,P.children)}},m=(R,P,V,j)=>{R==null?n(P.el=l(P.children||""),V,j):P.el=R.el},x=(R,P,V,j)=>{[R.el,R.anchor]=_(R.children,P,V,j,R.el,R.anchor)},v=({el:R,anchor:P},V,j)=>{let I;for(;R&&R!==P;)I=h(R),n(R,V,j),R=I;n(P,V,j)},S=({el:R,anchor:P})=>{let V;for(;R&&R!==P;)V=h(R),r(R),R=V;r(P)},L=(R,P,V,j,I,ce,C,M,N)=>{P.type==="svg"?C="svg":P.type==="math"&&(C="mathml"),R==null?b(P,V,j,I,ce,C,M,N):T(R,P,I,ce,C,M,N)},b=(R,P,V,j,I,ce,C,M)=>{let N,B;const{props:q,shapeFlag:ee,transition:ae,dirs:le}=R;if(N=R.el=o(R.type,ce,q&&q.is,q),ee&8?u(N,R.children):ee&16&&O(R.children,N,null,j,I,ju(R,ce),C,M),le&&hs(R,null,j,"created"),A(N,R,R.scopeId,C,j),q){for(const Me in q)Me!=="value"&&!Va(Me)&&s(N,Me,null,q[Me],ce,R.children,j,I,ge);"value"in q&&s(N,"value",null,q.value,ce),(B=q.onVnodeBeforeMount)&&Oi(B,j,R)}le&&hs(R,null,j,"beforeMount");const se=tS(I,ae);se&&ae.beforeEnter(N),n(N,P,V),((B=q&&q.onVnodeMounted)||se||le)&&Un(()=>{B&&Oi(B,j,R),se&&ae.enter(N),le&&hs(R,null,j,"mounted")},I)},A=(R,P,V,j,I)=>{if(V&&d(R,V),j)for(let ce=0;ce<j.length;ce++)d(R,j[ce]);if(I){let ce=I.subTree;if(P===ce){const C=I.vnode;A(R,C,C.scopeId,C.slotScopeIds,I.parent)}}},O=(R,P,V,j,I,ce,C,M,N=0)=>{for(let B=N;B<R.length;B++){const q=R[B]=M?Or(R[B]):Bi(R[B]);g(null,q,P,V,j,I,ce,C,M)}},T=(R,P,V,j,I,ce,C)=>{const M=P.el=R.el;let{patchFlag:N,dynamicChildren:B,dirs:q}=P;N|=R.patchFlag&16;const ee=R.props||Pt,ae=P.props||Pt;let le;if(V&&ds(V,!1),(le=ae.onVnodeBeforeUpdate)&&Oi(le,V,P,R),q&&hs(P,R,V,"beforeUpdate"),V&&ds(V,!0),B?y(R.dynamicChildren,B,M,V,j,ju(P,I),ce):C||W(R,P,M,null,V,j,ju(P,I),ce,!1),N>0){if(N&16)G(M,P,ee,ae,V,j,I);else if(N&2&&ee.class!==ae.class&&s(M,"class",null,ae.class,I),N&4&&s(M,"style",ee.style,ae.style,I),N&8){const se=P.dynamicProps;for(let Me=0;Me<se.length;Me++){const he=se[Me],Se=ee[he],ke=ae[he];(ke!==Se||he==="value")&&s(M,he,Se,ke,I,R.children,V,j,ge)}}N&1&&R.children!==P.children&&u(M,P.children)}else!C&&B==null&&G(M,P,ee,ae,V,j,I);((le=ae.onVnodeUpdated)||q)&&Un(()=>{le&&Oi(le,V,P,R),q&&hs(P,R,V,"updated")},j)},y=(R,P,V,j,I,ce,C)=>{for(let M=0;M<P.length;M++){const N=R[M],B=P[M],q=N.el&&(N.type===yi||!va(N,B)||N.shapeFlag&70)?f(N.el):V;g(N,B,q,null,j,I,ce,C,!0)}},G=(R,P,V,j,I,ce,C)=>{if(V!==j){if(V!==Pt)for(const M in V)!Va(M)&&!(M in j)&&s(R,M,V[M],null,C,P.children,I,ce,ge);for(const M in j){if(Va(M))continue;const N=j[M],B=V[M];N!==B&&M!=="value"&&s(R,M,B,N,C,P.children,I,ce,ge)}"value"in j&&s(R,"value",V.value,j.value,C)}},H=(R,P,V,j,I,ce,C,M,N)=>{const B=P.el=R?R.el:a(""),q=P.anchor=R?R.anchor:a("");let{patchFlag:ee,dynamicChildren:ae,slotScopeIds:le}=P;le&&(M=M?M.concat(le):le),R==null?(n(B,V,j),n(q,V,j),O(P.children||[],V,q,I,ce,C,M,N)):ee>0&&ee&64&&ae&&R.dynamicChildren?(y(R.dynamicChildren,ae,V,I,ce,C,M),(P.key!=null||I&&P===I.subTree)&&B0(R,P,!0)):W(R,P,V,q,I,ce,C,M,N)},F=(R,P,V,j,I,ce,C,M,N)=>{P.slotScopeIds=M,R==null?P.shapeFlag&512?I.ctx.activate(P,V,j,C,N):K(P,V,j,I,ce,C,N):re(R,P,N)},K=(R,P,V,j,I,ce,C)=>{const M=R.component=fS(R,j,I);if(b0(R)&&(M.ctx.renderer=U),hS(M),M.asyncDep){if(I&&I.registerDep(M,te),!R.el){const N=M.subTree=ei(pl);m(null,N,P,V)}}else te(M,R,P,V,I,ce,C)},re=(R,P,V)=>{const j=P.component=R.component;if(vM(R,P,V))if(j.asyncDep&&!j.asyncResolved){ne(j,P,V);return}else j.next=P,uM(j.update),j.effect.dirty=!0,j.update();else P.el=R.el,j.vnode=P},te=(R,P,V,j,I,ce,C)=>{const M=()=>{if(R.isMounted){let{next:q,bu:ee,u:ae,parent:le,vnode:se}=R;{const Ee=k0(R);if(Ee){q&&(q.el=se.el,ne(R,q,C)),Ee.asyncDep.then(()=>{R.isUnmounted||M()});return}}let Me=q,he;ds(R,!1),q?(q.el=se.el,ne(R,q,C)):q=se,ee&&Wu(ee),(he=q.props&&q.props.onVnodeBeforeUpdate)&&Oi(he,le,q,se),ds(R,!0);const Se=Yu(R),ke=R.subTree;R.subTree=Se,g(ke,Se,f(ke.el),k(ke),R,I,ce),q.el=Se.el,Me===null&&xM(R,Se.el),ae&&Un(ae,I),(he=q.props&&q.props.onVnodeUpdated)&&Un(()=>Oi(he,le,q,se),I)}else{let q;const{el:ee,props:ae}=P,{bm:le,m:se,parent:Me}=R,he=Ic(P);if(ds(R,!1),le&&Wu(le),!he&&(q=ae&&ae.onVnodeBeforeMount)&&Oi(q,Me,P),ds(R,!0),ee&&xe){const Se=()=>{R.subTree=Yu(R),xe(ee,R.subTree,R,I,null)};he?P.type.__asyncLoader().then(()=>!R.isUnmounted&&Se()):Se()}else{const Se=R.subTree=Yu(R);g(null,Se,V,j,R,I,ce),P.el=Se.el}if(se&&Un(se,I),!he&&(q=ae&&ae.onVnodeMounted)){const Se=P;Un(()=>Oi(q,Me,Se),I)}(P.shapeFlag&256||Me&&Ic(Me.vnode)&&Me.vnode.shapeFlag&256)&&R.a&&Un(R.a,I),R.isMounted=!0,P=V=j=null}},N=R.effect=new ld(M,ui,()=>gd(B),R.scope),B=R.update=()=>{N.dirty&&N.run()};B.id=R.uid,ds(R,!0),B()},ne=(R,P,V)=>{P.component=R;const j=R.vnode.props;R.vnode=P,R.next=null,KM(R,P.props,j,V),JM(R,P.children,V),ls(),Ep(R),cs()},W=(R,P,V,j,I,ce,C,M,N=!1)=>{const B=R&&R.children,q=R?R.shapeFlag:0,ee=P.children,{patchFlag:ae,shapeFlag:le}=P;if(ae>0){if(ae&128){D(B,ee,V,j,I,ce,C,M,N);return}else if(ae&256){ue(B,ee,V,j,I,ce,C,M,N);return}}le&8?(q&16&&ge(B,I,ce),ee!==B&&u(V,ee)):q&16?le&16?D(B,ee,V,j,I,ce,C,M,N):ge(B,I,ce,!0):(q&8&&u(V,""),le&16&&O(ee,V,j,I,ce,C,M,N))},ue=(R,P,V,j,I,ce,C,M,N)=>{R=R||Do,P=P||Do;const B=R.length,q=P.length,ee=Math.min(B,q);let ae;for(ae=0;ae<ee;ae++){const le=P[ae]=N?Or(P[ae]):Bi(P[ae]);g(R[ae],le,V,null,I,ce,C,M,N)}B>q?ge(R,I,ce,!0,!1,ee):O(P,V,j,I,ce,C,M,N,ee)},D=(R,P,V,j,I,ce,C,M,N)=>{let B=0;const q=P.length;let ee=R.length-1,ae=q-1;for(;B<=ee&&B<=ae;){const le=R[B],se=P[B]=N?Or(P[B]):Bi(P[B]);if(va(le,se))g(le,se,V,null,I,ce,C,M,N);else break;B++}for(;B<=ee&&B<=ae;){const le=R[ee],se=P[ae]=N?Or(P[ae]):Bi(P[ae]);if(va(le,se))g(le,se,V,null,I,ce,C,M,N);else break;ee--,ae--}if(B>ee){if(B<=ae){const le=ae+1,se=le<q?P[le].el:j;for(;B<=ae;)g(null,P[B]=N?Or(P[B]):Bi(P[B]),V,se,I,ce,C,M,N),B++}}else if(B>ae)for(;B<=ee;)Pe(R[B],I,ce,!0),B++;else{const le=B,se=B,Me=new Map;for(B=se;B<=ae;B++){const Ve=P[B]=N?Or(P[B]):Bi(P[B]);Ve.key!=null&&Me.set(Ve.key,B)}let he,Se=0;const ke=ae-se+1;let Ee=!1,Re=0;const Fe=new Array(ke);for(B=0;B<ke;B++)Fe[B]=0;for(B=le;B<=ee;B++){const Ve=R[B];if(Se>=ke){Pe(Ve,I,ce,!0);continue}let Ne;if(Ve.key!=null)Ne=Me.get(Ve.key);else for(he=se;he<=ae;he++)if(Fe[he-se]===0&&va(Ve,P[he])){Ne=he;break}Ne===void 0?Pe(Ve,I,ce,!0):(Fe[Ne-se]=B+1,Ne>=Re?Re=Ne:Ee=!0,g(Ve,P[Ne],V,null,I,ce,C,M,N),Se++)}const Ye=Ee?nS(Fe):Do;for(he=Ye.length-1,B=ke-1;B>=0;B--){const Ve=se+B,Ne=P[Ve],E=Ve+1<q?P[Ve+1].el:j;Fe[B]===0?g(null,Ne,V,E,I,ce,C,M,N):Ee&&(he<0||B!==Ye[he]?me(Ne,V,E,2):he--)}}},me=(R,P,V,j,I=null)=>{const{el:ce,type:C,transition:M,children:N,shapeFlag:B}=R;if(B&6){me(R.component.subTree,P,V,j);return}if(B&128){R.suspense.move(P,V,j);return}if(B&64){C.move(R,P,V,U);return}if(C===yi){n(ce,P,V);for(let ee=0;ee<N.length;ee++)me(N[ee],P,V,j);n(R.anchor,P,V);return}if(C===Ku){v(R,P,V);return}if(j!==2&&B&1&&M)if(j===0)M.beforeEnter(ce),n(ce,P,V),Un(()=>M.enter(ce),I);else{const{leave:ee,delayLeave:ae,afterLeave:le}=M,se=()=>n(ce,P,V),Me=()=>{ee(ce,()=>{se(),le&&le()})};ae?ae(ce,se,Me):Me()}else n(ce,P,V)},Pe=(R,P,V,j=!1,I=!1)=>{const{type:ce,props:C,ref:M,children:N,dynamicChildren:B,shapeFlag:q,patchFlag:ee,dirs:ae}=R;if(M!=null&&ph(M,null,V,R,!0),q&256){P.ctx.deactivate(R);return}const le=q&1&&ae,se=!Ic(R);let Me;if(se&&(Me=C&&C.onVnodeBeforeUnmount)&&Oi(Me,P,R),q&6)pe(R.component,V,j);else{if(q&128){R.suspense.unmount(V,j);return}le&&hs(R,null,P,"beforeUnmount"),q&64?R.type.remove(R,P,V,I,U,j):B&&(ce!==yi||ee>0&&ee&64)?ge(B,P,V,!1,!0):(ce===yi&&ee&384||!I&&q&16)&&ge(N,P,V),j&&Xe(R)}(se&&(Me=C&&C.onVnodeUnmounted)||le)&&Un(()=>{Me&&Oi(Me,P,R),le&&hs(R,null,P,"unmounted")},V)},Xe=R=>{const{type:P,el:V,anchor:j,transition:I}=R;if(P===yi){ie(V,j);return}if(P===Ku){S(R);return}const ce=()=>{r(V),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(R.shapeFlag&1&&I&&!I.persisted){const{leave:C,delayLeave:M}=I,N=()=>C(V,ce);M?M(R.el,ce,N):N()}else ce()},ie=(R,P)=>{let V;for(;R!==P;)V=h(R),r(R),R=V;r(P)},pe=(R,P,V)=>{const{bum:j,scope:I,update:ce,subTree:C,um:M}=R;j&&Wu(j),I.stop(),ce&&(ce.active=!1,Pe(C,R,P,V)),M&&Un(M,P),Un(()=>{R.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ge=(R,P,V,j=!1,I=!1,ce=0)=>{for(let C=ce;C<R.length;C++)Pe(R[C],P,V,j,I)},k=R=>R.shapeFlag&6?k(R.component.subTree):R.shapeFlag&128?R.suspense.next():h(R.anchor||R.el);let fe=!1;const oe=(R,P,V)=>{R==null?P._vnode&&Pe(P._vnode,null,null,!0):g(P._vnode||null,R,P,null,null,null,V),fe||(fe=!0,Ep(),v0(),fe=!1),P._vnode=R},U={p:g,um:Pe,m:me,r:Xe,mt:K,mc:O,pc:W,pbc:y,n:k,o:i};let we,xe;return{render:oe,hydrate:we,createApp:qM(oe,we)}}function ju({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ds({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function tS(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function B0(i,e,t=!1){const n=i.children,r=e.children;if(Ze(n)&&Ze(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Or(r[s]),a.el=o.el),t||B0(o,a)),a.type===wu&&(a.el=o.el)}}function nS(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function k0(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:k0(e)}const iS=i=>i.__isTeleport,yi=Symbol.for("v-fgt"),wu=Symbol.for("v-txt"),pl=Symbol.for("v-cmt"),Ku=Symbol.for("v-stc"),Ya=[];let bi=null;function Fs(i=!1){Ya.push(bi=i?null:[])}function rS(){Ya.pop(),bi=Ya[Ya.length-1]||null}let ml=1;function Np(i){ml+=i}function z0(i){return i.dynamicChildren=ml>0?bi||Do:null,rS(),ml>0&&bi&&bi.push(i),i}function Uo(i,e,t,n,r,s){return z0(Pl(i,e,t,n,r,s,!0))}function sS(i,e,t,n,r){return z0(ei(i,e,t,n,r,!0))}function mh(i){return i?i.__v_isVNode===!0:!1}function va(i,e){return i.type===e.type&&i.key===e.key}const H0=({key:i})=>i??null,Nc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?qt(i)||Wn(i)||Qe(i)?{i:Ti,r:i,k:e,f:!!t}:i:null);function Pl(i,e=null,t=null,n=0,r=null,s=i===yi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&H0(e),ref:e&&Nc(e),scopeId:bu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ti};return a?(Md(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=qt(t)?8:16),ml>0&&!o&&bi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bi.push(l),l}const ei=oS;function oS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===SM)&&(i=pl),mh(i)){const a=qo(i,e,!0);return t&&Md(a,t),ml>0&&!s&&bi&&(a.shapeFlag&6?bi[bi.indexOf(i)]=a:bi.push(a)),a.patchFlag|=-2,a}if(_S(i)&&(i=i.__vccOpts),e){e=aS(e);let{class:a,style:l}=e;a&&!qt(a)&&(e.class=ad(a)),It(l)&&(u0(l)&&!Ze(l)&&(l=nn({},l)),e.style=od(l))}const o=qt(i)?1:TM(i)?128:iS(i)?64:It(i)?4:Qe(i)?2:0;return Pl(i,e,t,n,r,o,s,!0)}function aS(i){return i?u0(i)||I0(i)?nn({},i):i:null}function qo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?lS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&H0(c),ref:e&&e.ref?t&&s?Ze(s)?s.concat(Nc(e)):[s,Nc(e)]:Nc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==yi?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&qo(i.ssContent),ssFallback:i.ssFallback&&qo(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&(u.transition=l.clone(u)),u}function V0(i=" ",e=0){return ei(wu,null,i,e)}function Bi(i){return i==null||typeof i=="boolean"?ei(pl):Ze(i)?ei(yi,null,i.slice()):typeof i=="object"?Or(i):ei(wu,null,String(i))}function Or(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:qo(i)}function Md(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Md(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!I0(e)?e._ctx=Ti:r===3&&Ti&&(Ti.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Ti},t=32):(e=String(e),n&64?(t=16,e=[V0(e)]):t=8);i.children=e,i.shapeFlag|=t}function lS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=ad([e.class,n.class]));else if(r==="style")e.style=od([e.style,n.style]);else if(_u(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Oi(i,e,t,n=null){wi(i,e,7,[t,n])}const cS=C0();let uS=0;function fS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||cS,s={uid:uS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:N0(n,r),emitsOptions:y0(n,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:n.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dM.bind(null,s),i.ce&&i.ce(s),s}let gn=null,$c,gh;{const i=q_(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};$c=e("__VUE_INSTANCE_SETTERS__",t=>gn=t),gh=e("__VUE_SSR_SETTERS__",t=>Ru=t)}const Ll=i=>{const e=gn;return $c(i),i.scope.on(),()=>{i.scope.off(),$c(e)}},Op=()=>{gn&&gn.scope.off(),$c(null)};function G0(i){return i.vnode.shapeFlag&4}let Ru=!1;function hS(i,e=!1){e&&gh(e);const{props:t,children:n}=i.vnode,r=G0(i);jM(i,t,r,e),ZM(i,n);const s=r?dS(i,e):void 0;return e&&gh(!1),s}function dS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,zM);const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?mS(i):null,s=Ll(i);ls();const o=$r(n,i,0,[i.props,r]);if(cs(),s(),G_(o)){if(o.then(Op,Op),e)return o.then(a=>{Up(i,a,e)}).catch(a=>{Eu(a,i,0)});i.asyncDep=o}else Up(i,o,e)}else W0(i,e)}function Up(i,e,t){Qe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:It(e)&&(i.setupState=p0(e)),W0(i,t)}let Fp;function W0(i,e,t){const n=i.type;if(!i.render){if(!e&&Fp&&!n.render){const r=n.template||xd(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=nn(nn({isCustomElement:s,delimiters:a},o),l);n.render=Fp(r,c)}}i.render=n.render||ui}{const r=Ll(i);ls();try{HM(i)}finally{cs(),r()}}}const pS={get(i,e){return Gn(i,"get",""),i[e]}};function mS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,pS),slots:i.slots,emit:i.emit,expose:e}}function Sd(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(p0(nM(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wa)return Wa[t](i)},has(e,t){return t in e||t in Wa}}))}function gS(i,e=!0){return Qe(i)?i.displayName||i.name:i.name||e&&i.__name}function _S(i){return Qe(i)&&"__vccOpts"in i}const Si=(i,e)=>iM(i,e,Ru);function X0(i,e,t){const n=arguments.length;return n===2?It(e)&&!Ze(e)?mh(e)?ei(i,null,[e]):ei(i,e):ei(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&mh(t)&&(t=[t]),ei(i,e,t))}const vS="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xS="http://www.w3.org/2000/svg",yS="http://www.w3.org/1998/Math/MathML",Ur=typeof document<"u"?document:null,Bp=Ur&&Ur.createElement("template"),MS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Ur.createElementNS(xS,i):e==="mathml"?Ur.createElementNS(yS,i):Ur.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ur.createTextNode(i),createComment:i=>Ur.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ur.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Bp.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=Bp.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},SS=Symbol("_vtc");function ES(i,e,t){const n=i[SS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const kp=Symbol("_vod"),TS=Symbol("_vsh"),bS=Symbol(""),AS=/(^|;)\s*display\s*:/;function wS(i,e,t){const n=i.style,r=qt(t);let s=!1;if(t&&!r){if(e)if(qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Oc(n,a,"")}else for(const o in e)t[o]==null&&Oc(n,o,"");for(const o in t)o==="display"&&(s=!0),Oc(n,o,t[o])}else if(r){if(e!==t){const o=n[bS];o&&(t+=";"+o),n.cssText=t,s=AS.test(t)}}else e&&i.removeAttribute("style");kp in i&&(i[kp]=s?n.display:"",i[TS]&&(n.display="none"))}const zp=/\s*!important$/;function Oc(i,e,t){if(Ze(t))t.forEach(n=>Oc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=RS(i,e);zp.test(t)?i.setProperty(fa(n),t.replace(zp,""),"important"):i[n]=t}}const Hp=["Webkit","Moz","ms"],$u={};function RS(i,e){const t=$u[e];if(t)return t;let n=Ki(e);if(n!=="filter"&&n in i)return $u[e]=n;n=yu(n);for(let r=0;r<Hp.length;r++){const s=Hp[r]+n;if(s in i)return $u[e]=s}return e}const Vp="http://www.w3.org/1999/xlink";function CS(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Vp,e.slice(6,e.length)):i.setAttributeNS(Vp,e,t);else{const s=Dy(e);t==null||s&&!j_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function PS(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,u=t??"";(c!==u||!("_value"in i))&&(i.value=u),t==null&&i.removeAttribute(e),i._value=t;return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=j_(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function LS(i,e,t,n){i.addEventListener(e,t,n)}function IS(i,e,t,n){i.removeEventListener(e,t,n)}const Gp=Symbol("_vei");function DS(i,e,t,n,r=null){const s=i[Gp]||(i[Gp]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=NS(e);if(n){const c=s[e]=FS(n,r);LS(i,a,c,l)}else o&&(IS(i,a,o,l),s[e]=void 0)}}const Wp=/(?:Once|Passive|Capture)$/;function NS(i){let e;if(Wp.test(i)){e={};let n;for(;n=i.match(Wp);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fa(i.slice(2)),e]}let Zu=0;const OS=Promise.resolve(),US=()=>Zu||(OS.then(()=>Zu=0),Zu=Date.now());function FS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;wi(BS(n,t.value),e,5,[n])};return t.value=i,t.attached=US(),t}function BS(i,e){if(Ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Xp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,kS=(i,e,t,n,r,s,o,a,l)=>{const c=r==="svg";e==="class"?ES(i,n,c):e==="style"?wS(i,t,n):_u(e)?id(e)||DS(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zS(i,e,n,c))?PS(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),CS(i,e,n,c))};function zS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Xp(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xp(e)&&qt(t)?!1:e in i}const HS=nn({patchProp:kS},MS);let Yp;function VS(){return Yp||(Yp=QM(HS))}const GS=(...i)=>{const e=VS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=XS(n);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,WS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function WS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function XS(i){return qt(i)?document.querySelector(i):i}const Ed=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},YS={};function qS(i,e){const t=MM("RouterView");return Fs(),sS(t)}const jS=Ed(YS,[["render",qS]]),KS="modulepreload",$S=function(i){return"/three-toy/"+i},qp={},ZS=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(t.map(a=>{if(a=$S(a),a in qp)return;qp[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":KS,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="164",to={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JS=0,jp=1,QS=2,Y0=1,eE=2,cr=3,xr=0,Bn=1,Hi=2,Zr=0,Fo=1,Kp=2,$p=3,Zp=4,tE=5,Cs=100,nE=101,iE=102,rE=103,sE=104,oE=200,aE=201,lE=202,cE=203,_h=204,vh=205,uE=206,fE=207,hE=208,dE=209,pE=210,mE=211,gE=212,_E=213,vE=214,xE=0,yE=1,ME=2,Zc=3,SE=4,EE=5,TE=6,bE=7,bd=0,AE=1,wE=2,Jr=0,RE=1,CE=2,PE=3,LE=4,IE=5,DE=6,NE=7,Jp="attached",OE="detached",q0=300,jo=301,Ko=302,xh=303,yh=304,Cu=306,$o=1e3,Hr=1001,Jc=1002,Dn=1003,j0=1004,Da=1005,Zn=1006,Uc=1007,dr=1008,is=1009,UE=1010,FE=1011,K0=1012,$0=1013,Zo=1014,Wi=1015,Pu=1016,Z0=1017,J0=1018,Il=1020,BE=35902,kE=1021,zE=1022,Ai=1023,HE=1024,VE=1025,Bo=1026,gl=1027,Q0=1028,ev=1029,GE=1030,tv=1031,nv=1033,Ju=33776,Qu=33777,ef=33778,tf=33779,Qp=35840,em=35841,tm=35842,nm=35843,im=36196,rm=37492,sm=37496,om=37808,am=37809,lm=37810,cm=37811,um=37812,fm=37813,hm=37814,dm=37815,pm=37816,mm=37817,gm=37818,_m=37819,vm=37820,xm=37821,nf=36492,ym=36494,Mm=36495,WE=36283,Sm=36284,Em=36285,Tm=36286,_l=2300,Jo=2301,rf=2302,bm=2400,Am=2401,wm=2402,XE=2500,YE=0,iv=1,Mh=2,qE=3200,jE=3201,Ad=0,KE=1,zr="",Cn="srgb",an="srgb-linear",wd="display-p3",Lu="display-p3-linear",Qc="linear",At="srgb",eu="rec709",tu="p3",io=7680,Rm=519,$E=512,ZE=513,JE=514,rv=515,QE=516,eT=517,tT=518,nT=519,Sh=35044,Cm="300 es",pr=2e3,nu=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const qa=Math.PI/180,Qo=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function Rd(i,e){return(i%e+e)%e}function iT(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function rT(i,e,t){return i!==e?(t-i)/(e-i):0}function ja(i,e,t){return(1-t)*i+t*e}function sT(i,e,t,n){return ja(i,e,1-Math.exp(-t*n))}function oT(i,e=1){return e-Math.abs(Rd(i,e*2)-e)}function aT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cT(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uT(i,e){return i+Math.random()*(e-i)}function fT(i){return i*(.5-Math.random())}function hT(i){i!==void 0&&(Pm=i);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dT(i){return i*qa}function pT(i){return i*Qo}function mT(i){return(i&i-1)===0&&i!==0}function gT(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _T(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vT(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sv={DEG2RAD:qa,RAD2DEG:Qo,generateUUID:Ri,clamp:sn,euclideanModulo:Rd,mapLinear:iT,inverseLerp:rT,lerp:ja,damp:sT,pingpong:oT,smoothstep:aT,smootherstep:lT,randInt:cT,randFloat:uT,randFloatSpread:fT,seededRandom:hT,degToRad:dT,radToDeg:pT,isPowerOfTwo:mT,ceilPowerOfTwo:gT,floorPowerOfTwo:_T,setQuaternionFromProperEuler:vT,normalize:xt,denormalize:Ei};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=r[0],p=r[3],m=r[6],x=r[1],v=r[4],S=r[7],L=r[2],b=r[5],A=r[8];return s[0]=o*g+a*x+l*L,s[3]=o*p+a*v+l*b,s[6]=o*m+a*S+l*A,s[1]=c*g+u*x+f*L,s[4]=c*p+u*v+f*b,s[7]=c*m+u*S+f*A,s[2]=h*g+d*x+_*L,s[5]=h*p+d*v+_*b,s[8]=h*m+d*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+n*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sf.makeScale(e,t)),this}rotate(e){return this.premultiply(sf.makeRotation(-e)),this}translate(e,t){return this.premultiply(sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sf=new nt;function ov(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xT(){const i=vl("canvas");return i.style.display="block",i}const Lm={};function av(i){i in Lm||(Lm[i]=!0,console.warn(i))}const Im=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dm=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vl={[an]:{transfer:Qc,primaries:eu,toReference:i=>i,fromReference:i=>i},[Cn]:{transfer:At,primaries:eu,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lu]:{transfer:Qc,primaries:tu,toReference:i=>i.applyMatrix3(Dm),fromReference:i=>i.applyMatrix3(Im)},[wd]:{transfer:At,primaries:tu,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dm),fromReference:i=>i.applyMatrix3(Im).convertLinearToSRGB()}},yT=new Set([an,Lu]),gt={enabled:!0,_workingColorSpace:an,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Vl[e].toReference,r=Vl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Vl[i].primaries},getTransfer:function(i){return i===zr?Qc:Vl[i].transfer}};function ko(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function of(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ro;class MT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=vl("canvas")),ro.width=e.width,ro.height=e.height;const n=ro.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ko(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ko(t[n]/255)*255):t[n]=ko(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ST=0;class lv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(af(r[o].image)):s.push(af(r[o]))}else s=af(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function af(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?MT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ET=0;class tn extends Qs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Hr,r=Hr,s=Zn,o=dr,a=Ai,l=is,c=tn.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Ri(),this.name="",this.source=new lv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=q0;tn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,L=(m+1)/2,b=(u+h)/4,A=(f+g)/4,O=(_+p)/4;return v>S&&v>L?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=A/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=O/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=O/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(f-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TT extends Qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends TT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cv extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bT extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-a;const m=l*h+c*d+u*_+f*g,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const L=Math.sqrt(v),b=Math.atan2(L,m*x);p=Math.sin(p*b)/L,a=Math.sin(a*b)/L}const S=a*x;if(l=l*p+h*S,c=c*p+d*S,u=u*p+_*S,f=f*p+g*S,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new X,Nm=new $i;class Ji{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Wl.subVectors(this.max,xa),so.subVectors(e.a,xa),oo.subVectors(e.b,xa),ao.subVectors(e.c,xa),br.subVectors(oo,so),Ar.subVectors(ao,oo),ps.subVectors(so,ao);let t=[0,-br.z,br.y,0,-Ar.z,Ar.y,0,-ps.z,ps.y,br.z,0,-br.x,Ar.z,0,-Ar.x,ps.z,0,-ps.x,-br.y,br.x,0,-Ar.y,Ar.x,0,-ps.y,ps.x,0];return!cf(t,so,oo,ao,Wl)||(t=[1,0,0,0,1,0,0,0,1],!cf(t,so,oo,ao,Wl))?!1:(Xl.crossVectors(br,Ar),t=[Xl.x,Xl.y,Xl.z],cf(t,so,oo,ao,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,Gl=new Ji,so=new X,oo=new X,ao=new X,br=new X,Ar=new X,ps=new X,xa=new X,Wl=new X,Xl=new X,ms=new X;function cf(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ms.fromArray(i,s);const a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const AT=new Ji,ya=new X,uf=new X;class Qi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):AT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ya,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(uf)),this.expandByPoint(ya.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new X,ff=new X,Yl=new X,wr=new X,hf=new X,ql=new X,df=new X;class Dl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ff.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(ff);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yl),a=wr.dot(this.direction),l=-wr.dot(Yl),c=wr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ff).addScaledVector(Yl,h),d}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),r=ir.dot(ir)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,r,s){hf.subVectors(t,e),ql.subVectors(n,e),df.crossVectors(hf,ql);let o=this.direction.dot(df),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wr.subVectors(this.origin,e);const l=a*this.direction.dot(ql.crossVectors(wr,ql));if(l<0)return null;const c=a*this.direction.dot(hf.cross(wr));if(c<0||l+c>o)return null;const u=-a*wr.dot(df);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,_,g,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,_,g,p)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/lo.setFromMatrixColumn(e,0).length(),s=1/lo.setFromMatrixColumn(e,1).length(),o=1/lo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,RT)}lookAt(e,t,n){const r=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Rr.crossVectors(n,Yn),Rr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Rr.crossVectors(n,Yn)),Rr.normalize(),jl.crossVectors(Yn,Rr),r[0]=Rr.x,r[4]=jl.x,r[8]=Yn.x,r[1]=Rr.y,r[5]=jl.y,r[9]=Yn.y,r[2]=Rr.z,r[6]=jl.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],x=n[3],v=n[7],S=n[11],L=n[15],b=r[0],A=r[4],O=r[8],T=r[12],y=r[1],G=r[5],H=r[9],F=r[13],K=r[2],re=r[6],te=r[10],ne=r[14],W=r[3],ue=r[7],D=r[11],me=r[15];return s[0]=o*b+a*y+l*K+c*W,s[4]=o*A+a*G+l*re+c*ue,s[8]=o*O+a*H+l*te+c*D,s[12]=o*T+a*F+l*ne+c*me,s[1]=u*b+f*y+h*K+d*W,s[5]=u*A+f*G+h*re+d*ue,s[9]=u*O+f*H+h*te+d*D,s[13]=u*T+f*F+h*ne+d*me,s[2]=_*b+g*y+p*K+m*W,s[6]=_*A+g*G+p*re+m*ue,s[10]=_*O+g*H+p*te+m*D,s[14]=_*T+g*F+p*ne+m*me,s[3]=x*b+v*y+S*K+L*W,s[7]=x*A+v*G+S*re+L*ue,s[11]=x*O+v*H+S*te+L*D,s[15]=x*T+v*F+S*ne+L*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],x=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,v=_*h*c-u*p*c-_*l*d+o*p*d+u*l*m-o*h*m,S=u*g*c-_*f*c+_*a*d-o*g*d-u*a*m+o*f*m,L=_*f*l-u*g*l-_*a*h+o*g*h+u*a*p-o*f*p,b=t*x+n*v+r*S+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=x*A,e[1]=(g*h*s-f*p*s-g*r*d+n*p*d+f*r*m-n*h*m)*A,e[2]=(a*p*s-g*l*s+g*r*c-n*p*c-a*r*m+n*l*m)*A,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*A,e[4]=v*A,e[5]=(u*p*s-_*h*s+_*r*d-t*p*d-u*r*m+t*h*m)*A,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*m-t*l*m)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*A,e[8]=S*A,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*m-t*f*m)*A,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*A,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*A,e[12]=L*A,e[13]=(u*g*r-_*f*r+_*n*h-t*g*h-u*n*p+t*f*p)*A,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*p-t*a*p)*A,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,p=o*f,m=a*f,x=l*c,v=l*u,S=l*f,L=n.x,b=n.y,A=n.z;return r[0]=(1-(g+m))*L,r[1]=(d+S)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(d-S)*b,r[5]=(1-(h+m))*b,r[6]=(p+x)*b,r[7]=0,r[8]=(_+v)*A,r[9]=(p-x)*A,r[10]=(1-(h+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=lo.set(r[0],r[1],r[2]).length();const o=lo.set(r[4],r[5],r[6]).length(),a=lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const c=1/s,u=1/o,f=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,t.setFromRotationMatrix(gi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=pr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,_;if(a===pr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nu)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=pr){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let _,g;if(a===pr)_=(o+s)*f,g=-2*f;else if(a===nu)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lo=new X,gi=new it,wT=new X(0,0,0),RT=new X(1,1,1),Rr=new X,jl=new X,Yn=new X,Om=new it,Um=new $i;class Li{constructor(e=0,t=0,n=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CT=0;const Fm=new X,co=new $i,rr=new it,Kl=new X,Ma=new X,PT=new X,LT=new $i,Bm=new X(1,0,0),km=new X(0,1,0),zm=new X(0,0,1),Hm={type:"added"},IT={type:"removed"},uo={type:"childadded",child:null},pf={type:"childremoved",child:null};class Ft extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new X,t=new Li,n=new $i,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new nt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kl.copy(e):Kl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ma,Kl,this.up):rr.lookAt(Kl,Ma,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),co.setFromRotationMatrix(rr),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IT),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,PT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,LT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new X(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new X,sr=new X,mf=new X,or=new X,fo=new X,ho=new X,Vm=new X,gf=new X,_f=new X,vf=new X;class Vi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_i.subVectors(e,t),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){_i.subVectors(r,t),sr.subVectors(n,t),mf.subVectors(e,t);const o=_i.dot(_i),a=_i.dot(sr),l=_i.dot(mf),c=sr.dot(sr),u=sr.dot(mf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,or.x),l.addScaledVector(o,or.y),l.addScaledVector(a,or.z),l)}static isFrontFacing(e,t,n,r){return _i.subVectors(n,t),sr.subVectors(e,t),_i.cross(sr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),_i.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Vi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fo.subVectors(r,n),ho.subVectors(s,n),gf.subVectors(e,n);const l=fo.dot(gf),c=ho.dot(gf);if(l<=0&&c<=0)return t.copy(n);_f.subVectors(e,r);const u=fo.dot(_f),f=ho.dot(_f);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fo,o);vf.subVectors(e,s);const d=fo.dot(vf),_=ho.dot(vf);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ho,a);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Vm.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Vm,a);const m=1/(p+g+h);return o=g*m,a=h*m,t.copy(n).addScaledVector(fo,o).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function xf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=Rd(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xf(o,s,e+1/3),this.g=xf(o,s,e),this.b=xf(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=fv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}copyLinearToSRGB(e){return this.r=of(e.r),this.g=of(e.g),this.b=of(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return gt.fromWorkingColorSpace(fn.copy(this),e),Math.round(sn(fn.r*255,0,255))*65536+Math.round(sn(fn.g*255,0,255))*256+Math.round(sn(fn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,r=fn.g,s=fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Cn){gt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,r=fn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL($l);const n=ja(Cr.h,$l.h,t),r=ja(Cr.s,$l.s,t),s=ja(Cr.l,$l.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new $e;$e.NAMES=fv;let DT=0;class Ci extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Fo,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_h&&(n.blendSrc=this.blendSrc),this.blendDst!==vh&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(n.stencilFail=this.stencilFail),this.stencilZFail!==io&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ls extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new X,Zl=new We;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return av("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sh&&(e.usage=this.usage),e}}class hv extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dv extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pi extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let NT=0;const si=new it,yf=new Ft,po=new X,qn=new Ji,Sa=new Ji,Zt=new X;class Di extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?dv:hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(qn.min,Sa.min),qn.expandByPoint(Zt),Zt.addVectors(qn.max,Sa.max),qn.expandByPoint(Zt)):(qn.expandByPoint(Sa.min),qn.expandByPoint(Sa.max))}qn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(po.fromBufferAttribute(e,c),Zt.add(po)),r=Math.max(r,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new X,l[O]=new X;const c=new X,u=new X,f=new X,h=new We,d=new We,_=new We,g=new X,p=new X;function m(O,T,y){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,y),h.fromBufferAttribute(s,O),d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const G=1/(d.x*_.y-_.x*d.y);isFinite(G)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(G),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(G),a[O].add(g),a[T].add(g),a[y].add(g),l[O].add(p),l[T].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let O=0,T=x.length;O<T;++O){const y=x[O],G=y.start,H=y.count;for(let F=G,K=G+H;F<K;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new X,S=new X,L=new X,b=new X;function A(O){L.fromBufferAttribute(r,O),b.copy(L);const T=a[O];v.copy(T),v.sub(L.multiplyScalar(L.dot(T))).normalize(),S.crossVectors(b,T);const G=S.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,G)}for(let O=0,T=x.length;O<T;++O){const y=x[O],G=y.start,H=y.count;for(let F=G,K=G+H;F<K;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new On(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new it,gs=new Dl,Jl=new Qi,Wm=new X,mo=new X,go=new X,_o=new X,Mf=new X,Ql=new X,ec=new We,tc=new We,nc=new We,Xm=new X,Ym=new X,qm=new X,ic=new X,rc=new X;class Nn extends Ft{constructor(e=new Di,t=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Mf.fromBufferAttribute(f,e),o?Ql.addScaledVector(Mf,u):Ql.addScaledVector(Mf.sub(t),u))}t.add(Ql)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(s),gs.copy(e.ray).recast(e.near),!(Jl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Jl,Wm)===null||gs.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),gs.copy(e.ray).applyMatrix4(Gm),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,L=v;S<L;S+=3){const b=a.getX(S),A=a.getX(S+1),O=a.getX(S+2);r=sc(this,m,e,n,c,u,f,b,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=sc(this,o,e,n,c,u,f,x,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,L=v;S<L;S+=3){const b=S,A=S+1,O=S+2;r=sc(this,m,e,n,c,u,f,b,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=p,v=p+1,S=p+2;r=sc(this,o,e,n,c,u,f,x,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function OT(i,e,t,n,r,s,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;rc.copy(a),rc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(rc);return c<t.near||c>t.far?null:{distance:c,point:rc.clone(),object:i}}function sc(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,mo),i.getVertexPosition(l,go),i.getVertexPosition(c,_o);const u=OT(i,e,t,n,mo,go,_o,ic);if(u){r&&(ec.fromBufferAttribute(r,a),tc.fromBufferAttribute(r,l),nc.fromBufferAttribute(r,c),u.uv=Vi.getInterpolation(ic,mo,go,_o,ec,tc,nc,new We)),s&&(ec.fromBufferAttribute(s,a),tc.fromBufferAttribute(s,l),nc.fromBufferAttribute(s,c),u.uv1=Vi.getInterpolation(ic,mo,go,_o,ec,tc,nc,new We)),o&&(Xm.fromBufferAttribute(o,a),Ym.fromBufferAttribute(o,l),qm.fromBufferAttribute(o,c),u.normal=Vi.getInterpolation(ic,mo,go,_o,Xm,Ym,qm,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Vi.getNormal(mo,go,_o,f.normal),u.face=f}return u}class ha extends Di{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(u,3)),this.setAttribute("uv",new Pi(f,2));function _(g,p,m,x,v,S,L,b,A,O,T){const y=S/A,G=L/O,H=S/2,F=L/2,K=b/2,re=A+1,te=O+1;let ne=0,W=0;const ue=new X;for(let D=0;D<te;D++){const me=D*G-F;for(let Pe=0;Pe<re;Pe++){const Xe=Pe*y-H;ue[g]=Xe*x,ue[p]=me*v,ue[m]=K,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[p]=0,ue[m]=b>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Pe/A),f.push(1-D/O),ne+=1}}for(let D=0;D<O;D++)for(let me=0;me<A;me++){const Pe=h+me+re*D,Xe=h+me+re*(D+1),ie=h+(me+1)+re*(D+1),pe=h+(me+1)+re*D;l.push(Pe,Xe,pe),l.push(Xe,ie,pe),W+=6}a.addGroup(d,W,T),d+=W,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bn(i){const e={};for(let t=0;t<i.length;t++){const n=ea(i[t]);for(const r in n)e[r]=n[r]}return e}function UT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const FT={clone:ea,merge:bn};var BT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BT,this.fragmentShader=kT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=UT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mv extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new X,jm=new We,Km=new We;class pn extends mv{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,jm,Km),t.subVectors(Km,jm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vo=-90,xo=1;class zT extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(vo,xo,e,t);r.layers=this.layers,this.add(r);const s=new pn(vo,xo,e,t);s.layers=this.layers,this.add(s);const o=new pn(vo,xo,e,t);o.layers=this.layers,this.add(o);const a=new pn(vo,xo,e,t);a.layers=this.layers,this.add(a);const l=new pn(vo,xo,e,t);l.layers=this.layers,this.add(l);const c=new pn(vo,xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gv extends tn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HT extends Xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),s=new rs({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Zr});s.uniforms.tEquirect.value=t;const o=new Nn(r,s),a=t.minFilter;return t.minFilter===dr&&(t.minFilter=Zn),new zT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Sf=new X,VT=new X,GT=new nt;class Fr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Sf.subVectors(n,t).cross(VT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||GT.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Qi,oc=new X;class Cd{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pr){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],p=r[11],m=r[12],x=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,h-c,p-d,S-m).normalize(),n[1].setComponents(l+s,h+c,p+d,S+m).normalize(),n[2].setComponents(l+o,h+u,p+_,S+x).normalize(),n[3].setComponents(l-o,h-u,p-_,S-x).normalize(),n[4].setComponents(l-a,h-f,p-g,S-v).normalize(),t===pr)n[5].setComponents(l+a,h+f,p+g,S+v).normalize();else if(t===nu)n[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(oc.x=r.normal.x>0?e.max.x:e.min.x,oc.y=r.normal.y>0?e.max.y:e.min.y,oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _v(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function WT(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let d=0,_=h.length;d<_;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Iu extends Di{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const x=m*h-o;for(let v=0;v<c;v++){const S=v*f-s;_.push(S,-x,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,S=x+c*(m+1),L=x+1+c*(m+1),b=x+1+c*m;d.push(v,S,b),d.push(S,L,b)}this.setIndex(d),this.setAttribute("position",new Pi(_,3)),this.setAttribute("normal",new Pi(g,3)),this.setAttribute("uv",new Pi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.widthSegments,e.heightSegments)}}var XT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YT=`#ifdef USE_ALPHAHASH
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
#endif`,qT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,JT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pb=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ib=`#ifdef USE_GRADIENTMAP
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
}`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,Gb=`struct PhysicalMaterial {
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
}`,Wb=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eA=`#if defined( USE_POINTS_UV )
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
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,oA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dA=`#ifdef USE_NORMALMAP
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
#endif`,pA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,yA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,IA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DA=`#ifdef USE_SKINNING
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
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
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
#endif`,kA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`#include <common>
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
}`,ZA=`#if DEPTH_PACKING == 3200
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
	#endif
}`,JA=`#define DISTANCE
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
}`,QA=`#define DISTANCE
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
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`uniform float scale;
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 diffuse;
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
}`,ow=`#define LAMBERT
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
}`,aw=`#define LAMBERT
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
}`,lw=`#define MATCAP
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
}`,cw=`#define MATCAP
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
}`,uw=`#define NORMAL
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
}`,fw=`#define NORMAL
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
}`,hw=`#define PHONG
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
}`,dw=`#define PHONG
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
}`,pw=`#define STANDARD
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
}`,mw=`#define STANDARD
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
}`,gw=`#define TOON
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
}`,_w=`#define TOON
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
}`,vw=`uniform float size;
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
}`,xw=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Mw=`uniform vec3 color;
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
}`,Sw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ew=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:XT,alphahash_pars_fragment:YT,alphamap_fragment:qT,alphamap_pars_fragment:jT,alphatest_fragment:KT,alphatest_pars_fragment:$T,aomap_fragment:ZT,aomap_pars_fragment:JT,batching_pars_vertex:QT,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:rb,bumpmap_pars_fragment:sb,clipping_planes_fragment:ob,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:hb,color_vertex:db,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:_b,displacementmap_vertex:vb,emissivemap_fragment:xb,emissivemap_pars_fragment:yb,colorspace_fragment:Mb,colorspace_pars_fragment:Sb,envmap_fragment:Eb,envmap_common_pars_fragment:Tb,envmap_pars_fragment:bb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Fb,envmap_vertex:wb,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:Pb,fog_pars_fragment:Lb,gradientmap_pars_fragment:Ib,lightmap_pars_fragment:Db,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Ub,lights_toon_fragment:Bb,lights_toon_pars_fragment:kb,lights_phong_fragment:zb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Wb,lights_fragment_maps:Xb,lights_fragment_end:Yb,logdepthbuf_fragment:qb,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Kb,logdepthbuf_vertex:$b,map_fragment:Zb,map_pars_fragment:Jb,map_particle_fragment:Qb,map_particle_pars_fragment:eA,metalnessmap_fragment:tA,metalnessmap_pars_fragment:nA,morphinstance_vertex:iA,morphcolor_vertex:rA,morphnormal_vertex:sA,morphtarget_pars_vertex:oA,morphtarget_vertex:aA,normal_fragment_begin:lA,normal_fragment_maps:cA,normal_pars_fragment:uA,normal_pars_vertex:fA,normal_vertex:hA,normalmap_pars_fragment:dA,clearcoat_normal_fragment_begin:pA,clearcoat_normal_fragment_maps:mA,clearcoat_pars_fragment:gA,iridescence_pars_fragment:_A,opaque_fragment:vA,packing:xA,premultiplied_alpha_fragment:yA,project_vertex:MA,dithering_fragment:SA,dithering_pars_fragment:EA,roughnessmap_fragment:TA,roughnessmap_pars_fragment:bA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:wA,shadowmap_vertex:RA,shadowmask_pars_fragment:CA,skinbase_vertex:PA,skinning_pars_vertex:LA,skinning_vertex:IA,skinnormal_vertex:DA,specularmap_fragment:NA,specularmap_pars_fragment:OA,tonemapping_fragment:UA,tonemapping_pars_fragment:FA,transmission_fragment:BA,transmission_pars_fragment:kA,uv_pars_fragment:zA,uv_pars_vertex:HA,uv_vertex:VA,worldpos_vertex:GA,background_vert:WA,background_frag:XA,backgroundCube_vert:YA,backgroundCube_frag:qA,cube_vert:jA,cube_frag:KA,depth_vert:$A,depth_frag:ZA,distanceRGBA_vert:JA,distanceRGBA_frag:QA,equirect_vert:ew,equirect_frag:tw,linedashed_vert:nw,linedashed_frag:iw,meshbasic_vert:rw,meshbasic_frag:sw,meshlambert_vert:ow,meshlambert_frag:aw,meshmatcap_vert:lw,meshmatcap_frag:cw,meshnormal_vert:uw,meshnormal_frag:fw,meshphong_vert:hw,meshphong_frag:dw,meshphysical_vert:pw,meshphysical_frag:mw,meshtoon_vert:gw,meshtoon_frag:_w,points_vert:vw,points_frag:xw,shadow_vert:yw,shadow_frag:Mw,sprite_vert:Sw,sprite_frag:Ew},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ki={basic:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:bn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:bn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:bn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:bn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:bn([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:bn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:bn([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:bn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:bn([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:bn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:bn([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ki.physical={uniforms:bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ac={r:0,b:0,g:0},vs=new Li,Tw=new it;function bw(i,e,t,n,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function g(x){let v=!1;const S=_(x);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(x,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===Cu)?(u===void 0&&(u=new Nn(new ha(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:ea(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(vs)),u.material.toneMapped=gt.getTransfer(S.colorSpace)!==At,(f!==S||h!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nn(new Iu(2,2),new rs({name:"BackgroundMaterial",uniforms:ea(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=gt.getTransfer(S.colorSpace)!==At,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(ac,pv(i)),n.buffers.color.setClear(ac.r,ac.g,ac.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:g,addToRenderList:p}}function Aw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(y,G,H,F,K){let re=!1;const te=f(F,H,G);s!==te&&(s=te,c(s.object)),re=d(y,F,H,K),re&&_(y,F,H,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(y,G,H,F),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,G,H){const F=H.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let re=K[G.id];re===void 0&&(re={},K[G.id]=re);let te=re[F];return te===void 0&&(te=h(l()),re[F]=te),te}function h(y){const G=[],H=[],F=[];for(let K=0;K<t;K++)G[K]=0,H[K]=0,F[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,G,H,F){const K=s.attributes,re=G.attributes;let te=0;const ne=H.getAttributes();for(const W in ne)if(ne[W].location>=0){const D=K[W];let me=re[W];if(me===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),D===void 0||D.attribute!==me||me&&D.data!==me.data)return!0;te++}return s.attributesNum!==te||s.index!==F}function _(y,G,H,F){const K={},re=G.attributes;let te=0;const ne=H.getAttributes();for(const W in ne)if(ne[W].location>=0){let D=re[W];D===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));const me={};me.attribute=D,D&&D.data&&(me.data=D.data),K[W]=me,te++}s.attributes=K,s.attributesNum=te,s.index=F}function g(){const y=s.newAttributes;for(let G=0,H=y.length;G<H;G++)y[G]=0}function p(y){m(y,0)}function m(y,G){const H=s.newAttributes,F=s.enabledAttributes,K=s.attributeDivisors;H[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),K[y]!==G&&(i.vertexAttribDivisor(y,G),K[y]=G)}function x(){const y=s.newAttributes,G=s.enabledAttributes;for(let H=0,F=G.length;H<F;H++)G[H]!==y[H]&&(i.disableVertexAttribArray(H),G[H]=0)}function v(y,G,H,F,K,re,te){te===!0?i.vertexAttribIPointer(y,G,H,K,re):i.vertexAttribPointer(y,G,H,F,K,re)}function S(y,G,H,F){g();const K=F.attributes,re=H.getAttributes(),te=G.defaultAttributeValues;for(const ne in re){const W=re[ne];if(W.location>=0){let ue=K[ne];if(ue===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){const D=ue.normalized,me=ue.itemSize,Pe=e.get(ue);if(Pe===void 0)continue;const Xe=Pe.buffer,ie=Pe.type,pe=Pe.bytesPerElement,ge=ie===i.INT||ie===i.UNSIGNED_INT||ue.gpuType===$0;if(ue.isInterleavedBufferAttribute){const k=ue.data,fe=k.stride,oe=ue.offset;if(k.isInstancedInterleavedBuffer){for(let U=0;U<W.locationSize;U++)m(W.location+U,k.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let U=0;U<W.locationSize;U++)p(W.location+U);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let U=0;U<W.locationSize;U++)v(W.location+U,me/W.locationSize,ie,D,fe*pe,(oe+me/W.locationSize*U)*pe,ge)}else{if(ue.isInstancedBufferAttribute){for(let k=0;k<W.locationSize;k++)m(W.location+k,ue.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let k=0;k<W.locationSize;k++)p(W.location+k);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let k=0;k<W.locationSize;k++)v(W.location+k,me/W.locationSize,ie,D,me*pe,me/W.locationSize*k*pe,ge)}}else if(te!==void 0){const D=te[ne];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(W.location,D);break;case 3:i.vertexAttrib3fv(W.location,D);break;case 4:i.vertexAttrib4fv(W.location,D);break;default:i.vertexAttrib1fv(W.location,D)}}}}x()}function L(){O();for(const y in n){const G=n[y];for(const H in G){const F=G[H];for(const K in F)u(F[K].object),delete F[K];delete G[H]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const G=n[y.id];for(const H in G){const F=G[H];for(const K in F)u(F[K].object),delete F[K];delete G[H]}delete n[y.id]}function A(y){for(const G in n){const H=n[G];if(H[y.id]===void 0)continue;const F=H[y.id];for(const K in F)u(F[K].object),delete F[K];delete H[y.id]}}function O(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function ww(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(c[d],u[d]);else{h.multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)t.update(_,n,h[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rw(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Ai&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===Pu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==is&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wi&&!A)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:L}}function Cw(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Fr,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,v=x*4;let S=m.clippingState||null;l.value=S,S=u(_,h,v,d);for(let L=0;L!==v;++L)S[L]=t[L];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==g;++v,S+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Pw(i){let e=new WeakMap;function t(o,a){return a===xh?o.mapping=jo:a===yh&&(o.mapping=Ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xh||a===yh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new HT(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pd extends mv{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=4,$m=[.125,.215,.35,.446,.526,.582],Ps=20,Ef=new Pd,Zm=new $e;let Tf=null,bf=0,Af=0,wf=!1;const Es=(1+Math.sqrt(5))/2,yo=1/Es,Jm=[new X(-Es,yo,0),new X(Es,yo,0),new X(-yo,0,Es),new X(yo,0,Es),new X(0,Es,-yo),new X(0,Es,yo),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,bf,Af),this._renderer.xr.enabled=wf,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Pu,format:Ai,colorSpace:an,depthBuffer:!1},r=eg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lw(s)),this._blurMaterial=Iw(s,e,t)}return r}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Ef)}_sceneToCubeUV(e,t,n,r){const a=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zm),u.toneMapping=Jr,u.autoClear=!1;const d=new Ls({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),_=new Nn(new ha,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Zm),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;lc(r,x*v,m>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===jo||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;lc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ef)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jm[(r-s-1)%Jm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ps;p>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);const m=[];let x=0;for(let A=0;A<Ps;++A){const O=A/g,T=Math.exp(-O*O/2);m.push(T),A===0?x+=T:A<p&&(x+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const S=this._sizeLods[r],L=3*S*(r>v-Co?r-v+Co:0),b=4*(this._cubeSize-S);lc(t,L,b,3*S,2*S),l.setRenderTarget(t),l.render(f,Ef)}}function Lw(i){const e=[],t=[],n=[];let r=i;const s=i-Co+1+$m.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Co?l=$m[o-i+Co-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*d),v=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,O=b>2?0:-1,T=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];x.set(T,g*_*b),v.set(h,p*_*b);const y=[b,b,b,b,b,b];S.set(y,m*_*b)}const L=new Di;L.setAttribute("position",new On(x,g)),L.setAttribute("uv",new On(v,p)),L.setAttribute("faceIndex",new On(S,m)),e.push(L),r>Co&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eg(i,e,t){const n=new Xs(i,e,t);return n.texture.mapping=Cu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Iw(i,e,t){const n=new Float32Array(Ps),r=new X(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function tg(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function ng(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function Dw(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xh||l===yh,u=l===jo||l===Ko;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Qm(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Qm(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nw(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ow(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let v=0,S=x.length;v<S;v+=3){const L=x[v+0],b=x[v+1],A=x[v+2];h.push(L,b,b,A,A,L)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const L=v+0,b=v+1,A=v+2;h.push(L,b,b,A,A,L)}}else return;const p=new(ov(h)?dv:hv)(h,1);p.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Uw(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,h*o,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(h[p]/o,d[p]);else{g.multiDrawElementsWEBGL(n,d,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}}function f(h,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x];for(let x=0;x<g.length;x++)t.update(m,n,g[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Fw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bw(i,e,t){const n=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let S=a.attributes.position.count*v,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*L*4*f),A=new cv(b,S,L,f);A.type=Wi,A.needsUpdate=!0;const O=v*4;for(let y=0;y<f;y++){const G=p[y],H=m[y],F=x[y],K=S*L*4*y;for(let re=0;re<G.count;re++){const te=re*O;d===!0&&(r.fromBufferAttribute(G,re),b[K+te+0]=r.x,b[K+te+1]=r.y,b[K+te+2]=r.z,b[K+te+3]=0),_===!0&&(r.fromBufferAttribute(H,re),b[K+te+4]=r.x,b[K+te+5]=r.y,b[K+te+6]=r.z,b[K+te+7]=0),g===!0&&(r.fromBufferAttribute(F,re),b[K+te+8]=r.x,b[K+te+9]=r.y,b[K+te+10]=r.z,b[K+te+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new We(S,L)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function kw(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class vv extends tn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Bo,u!==Bo&&u!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bo&&(n=Zo),n===void 0&&u===gl&&(n=Il),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xv=new tn,yv=new vv(1,1);yv.compareFunction=rv;const Mv=new cv,Sv=new bT,Ev=new gv,ig=[],rg=[],sg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function da(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ig[r];if(s===void 0&&(s=new Float32Array(r),ig[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Du(i,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Vw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Gw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Ww(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;ag.set(n),i.uniformMatrix2fv(this.addr,!1,ag),Kt(t,n)}}function Xw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;og.set(n),i.uniformMatrix3fv(this.addr,!1,og),Kt(t,n)}}function Yw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;sg.set(n),i.uniformMatrix4fv(this.addr,!1,sg),Kt(t,n)}}function qw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Kw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function $w(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Zw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Qw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function eR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function tR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?yv:xv;t.setTexture2D(e||s,r)}function nR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Sv,r)}function iR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ev,r)}function rR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mv,r)}function sR(i){switch(i){case 5126:return zw;case 35664:return Hw;case 35665:return Vw;case 35666:return Gw;case 35674:return Ww;case 35675:return Xw;case 35676:return Yw;case 5124:case 35670:return qw;case 35667:case 35671:return jw;case 35668:case 35672:return Kw;case 35669:case 35673:return $w;case 5125:return Zw;case 36294:return Jw;case 36295:return Qw;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return rR}}function oR(i,e){i.uniform1fv(this.addr,e)}function aR(i,e){const t=da(e,this.size,2);i.uniform2fv(this.addr,t)}function lR(i,e){const t=da(e,this.size,3);i.uniform3fv(this.addr,t)}function cR(i,e){const t=da(e,this.size,4);i.uniform4fv(this.addr,t)}function uR(i,e){const t=da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fR(i,e){const t=da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hR(i,e){const t=da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dR(i,e){i.uniform1iv(this.addr,e)}function pR(i,e){i.uniform2iv(this.addr,e)}function mR(i,e){i.uniform3iv(this.addr,e)}function gR(i,e){i.uniform4iv(this.addr,e)}function _R(i,e){i.uniform1uiv(this.addr,e)}function vR(i,e){i.uniform2uiv(this.addr,e)}function xR(i,e){i.uniform3uiv(this.addr,e)}function yR(i,e){i.uniform4uiv(this.addr,e)}function MR(i,e,t){const n=this.cache,r=e.length,s=Du(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xv,s[o])}function SR(i,e,t){const n=this.cache,r=e.length,s=Du(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sv,s[o])}function ER(i,e,t){const n=this.cache,r=e.length,s=Du(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ev,s[o])}function TR(i,e,t){const n=this.cache,r=e.length,s=Du(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mv,s[o])}function bR(i){switch(i){case 5126:return oR;case 35664:return aR;case 35665:return lR;case 35666:return cR;case 35674:return uR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return TR}}class AR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sR(t.type)}}class wR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bR(t.type)}}class RR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function lg(i,e){i.seq.push(e),i.map[e.id]=e}function CR(i,e,t){const n=i.name,r=n.length;for(Rf.lastIndex=0;;){const s=Rf.exec(n),o=Rf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lg(t,c===void 0?new AR(a,i,e):new wR(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new RR(a),lg(t,f)),t=f}}}class Fc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);CR(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function cg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const PR=37297;let LR=0;function IR(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function DR(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===tu&&t===eu?n="LinearDisplayP3ToLinearSRGB":e===eu&&t===tu&&(n="LinearSRGBToLinearDisplayP3"),i){case an:case Lu:return[n,"LinearTransferOETF"];case Cn:case wd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ug(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+IR(i.getShaderSource(e),o)}else return r}function NR(i,e){const t=DR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function OR(i,e){let t;switch(e){case RE:t="Linear";break;case CE:t="Reinhard";break;case PE:t="OptimizedCineon";break;case LE:t="ACESFilmic";break;case DE:t="AgX";break;case NE:t="Neutral";break;case IE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function UR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function FR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Na(i){return i!==""}function fg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(kR,HR)}const zR=new Map;function HR(i,e){let t=tt[e];if(t===void 0){const n=zR.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eh(t)}const VR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(i){return i.replace(VR,GR)}function GR(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eE?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function XR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function qR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case AE:e="ENVMAP_BLENDING_MIX";break;case wE:e="ENVMAP_BLENDING_ADD";break}return e}function jR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function KR(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=WR(t),c=XR(t),u=YR(t),f=qR(t),h=jR(t),d=UR(t),_=FR(s),g=r.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),m.length>0&&(m+=`
`)):(p=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),m=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jr?"#define TONE_MAPPING":"",t.toneMapping!==Jr?tt.tonemapping_pars_fragment:"",t.toneMapping!==Jr?OR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,NR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=Eh(o),o=fg(o,t),o=hg(o,t),a=Eh(a),a=fg(a,t),a=hg(a,t),o=dg(o),a=dg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+o,S=x+m+a,L=cg(r,r.VERTEX_SHADER,v),b=cg(r,r.FRAGMENT_SHADER,S);r.attachShader(g,L),r.attachShader(g,b),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(G){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(L).trim(),K=r.getShaderInfoLog(b).trim();let re=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,b);else{const ne=ug(r,L,"vertex"),W=ug(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+H+`
`+ne+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||K==="")&&(te=!1);te&&(G.diagnostics={runnable:re,programLog:H,vertexShader:{log:F,prefix:p},fragmentShader:{log:K,prefix:m}})}r.deleteShader(L),r.deleteShader(b),O=new Fc(r,g),T=BR(r,g)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,PR)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=b,this}let $R=0;class ZR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new JR(e),t.set(e,n)),n}}class JR{constructor(e){this.id=$R++,this.code=e,this.usedTimes=0}}function QR(i,e,t,n,r,s,o){const a=new uv,l=new ZR,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,G,H,F){const K=H.fog,re=F.geometry,te=T.isMeshStandardMaterial?H.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),W=ne&&ne.mapping===Cu?ne.image.height:null,ue=_[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const D=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,me=D!==void 0?D.length:0;let Pe=0;re.morphAttributes.position!==void 0&&(Pe=1),re.morphAttributes.normal!==void 0&&(Pe=2),re.morphAttributes.color!==void 0&&(Pe=3);let Xe,ie,pe,ge;if(ue){const rt=ki[ue];Xe=rt.vertexShader,ie=rt.fragmentShader}else Xe=T.vertexShader,ie=T.fragmentShader,l.update(T),pe=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const k=i.getRenderTarget(),fe=F.isInstancedMesh===!0,oe=F.isBatchedMesh===!0,U=!!T.map,we=!!T.matcap,xe=!!ne,R=!!T.aoMap,P=!!T.lightMap,V=!!T.bumpMap,j=!!T.normalMap,I=!!T.displacementMap,ce=!!T.emissiveMap,C=!!T.metalnessMap,M=!!T.roughnessMap,N=T.anisotropy>0,B=T.clearcoat>0,q=T.dispersion>0,ee=T.iridescence>0,ae=T.sheen>0,le=T.transmission>0,se=N&&!!T.anisotropyMap,Me=B&&!!T.clearcoatMap,he=B&&!!T.clearcoatNormalMap,Se=B&&!!T.clearcoatRoughnessMap,ke=ee&&!!T.iridescenceMap,Ee=ee&&!!T.iridescenceThicknessMap,Re=ae&&!!T.sheenColorMap,Fe=ae&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Ve=!!T.specularColorMap,Ne=!!T.specularIntensityMap,E=le&&!!T.transmissionMap,z=le&&!!T.thicknessMap,J=!!T.gradientMap,de=!!T.alphaMap,_e=T.alphaTest>0,ze=!!T.alphaHash,Ke=!!T.extensions;let pt=Jr;T.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Mt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Xe,fragmentShader:ie,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:oe,instancing:fe,instancingColor:fe&&F.instanceColor!==null,instancingMorph:fe&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:an,alphaToCoverage:!!T.alphaToCoverage,map:U,matcap:we,envMap:xe,envMapMode:xe&&ne.mapping,envMapCubeUVHeight:W,aoMap:R,lightMap:P,bumpMap:V,normalMap:j,displacementMap:h&&I,emissiveMap:ce,normalMapObjectSpace:j&&T.normalMapType===KE,normalMapTangentSpace:j&&T.normalMapType===Ad,metalnessMap:C,roughnessMap:M,anisotropy:N,anisotropyMap:se,clearcoat:B,clearcoatMap:Me,clearcoatNormalMap:he,clearcoatRoughnessMap:Se,dispersion:q,iridescence:ee,iridescenceMap:ke,iridescenceThicknessMap:Ee,sheen:ae,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:Ye,specularColorMap:Ve,specularIntensityMap:Ne,transmission:le,transmissionMap:E,thicknessMap:z,gradientMap:J,opaque:T.transparent===!1&&T.blending===Fo&&T.alphaToCoverage===!1,alphaMap:de,alphaTest:_e,alphaHash:ze,combine:T.combine,mapUv:U&&g(T.map.channel),aoMapUv:R&&g(T.aoMap.channel),lightMapUv:P&&g(T.lightMap.channel),bumpMapUv:V&&g(T.bumpMap.channel),normalMapUv:j&&g(T.normalMap.channel),displacementMapUv:I&&g(T.displacementMap.channel),emissiveMapUv:ce&&g(T.emissiveMap.channel),metalnessMapUv:C&&g(T.metalnessMap.channel),roughnessMapUv:M&&g(T.roughnessMap.channel),anisotropyMapUv:se&&g(T.anisotropyMap.channel),clearcoatMapUv:Me&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(T.sheenRoughnessMap.channel),specularMapUv:Ye&&g(T.specularMap.channel),specularColorMapUv:Ve&&g(T.specularColorMap.channel),specularIntensityMapUv:Ne&&g(T.specularIntensityMap.channel),transmissionMapUv:E&&g(T.transmissionMap.channel),thicknessMapUv:z&&g(T.thicknessMap.channel),alphaMapUv:de&&g(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(j||N),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!re.attributes.uv&&(U||de),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:U&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===At,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hi,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)y.push(G),y.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(x(y,T),v(y,T),y.push(i.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function x(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),T.push(a.mask)}function S(T){const y=_[T.type];let G;if(y){const H=ki[y];G=FT.clone(H.uniforms)}else G=T.uniforms;return G}function L(T,y){let G;for(let H=0,F=u.length;H<F;H++){const K=u[H];if(K.cacheKey===y){G=K,++G.usedTimes;break}}return G===void 0&&(G=new KR(i,y,T,s),u.push(G)),G}function b(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:L,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:O}}function e1(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function t1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gg(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,_,g,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function a(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||t1),n.length>1&&n.sort(h||mg),r.length>1&&r.sort(h||mg)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function n1(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new gg,i.set(n,[o])):r>=s.length?(o=new gg,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function i1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new $e};break;case"SpotLight":t={position:new X,direction:new X,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function r1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let s1=0;function o1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a1(i){const e=new i1,t=r1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new it,o=new it;function a(c,u){let f=0,h=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let _=0,g=0,p=0,m=0,x=0,v=0,S=0,L=0,b=0,A=0,O=0;c.sort(o1);const T=u===!0?Math.PI:1;for(let G=0,H=c.length;G<H;G++){const F=c[G],K=F.color,re=F.intensity,te=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=K.r*re*T,h+=K.g*re*T,d+=K.b*re*T;else if(F.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(F.sh.coefficients[W],re);O++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const ue=F.shadow,D=t.get(F);D.shadowBias=ue.bias,D.shadowNormalBias=ue.normalBias,D.shadowRadius=ue.radius,D.shadowMapSize=ue.mapSize,n.directionalShadow[_]=D,n.directionalShadowMap[_]=ne,n.directionalShadowMatrix[_]=F.shadow.matrix,v++}n.directional[_]=W,_++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(K).multiplyScalar(re*T),W.distance=te,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,n.spot[p]=W;const ue=F.shadow;if(F.map&&(n.spotLightMap[b]=F.map,b++,ue.updateMatrices(F),F.castShadow&&A++),n.spotLightMatrix[p]=ue.matrix,F.castShadow){const D=t.get(F);D.shadowBias=ue.bias,D.shadowNormalBias=ue.normalBias,D.shadowRadius=ue.radius,D.shadowMapSize=ue.mapSize,n.spotShadow[p]=D,n.spotShadowMap[p]=ne,L++}p++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(K).multiplyScalar(re),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=W,m++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*T),W.distance=F.distance,W.decay=F.decay,F.castShadow){const ue=F.shadow,D=t.get(F);D.shadowBias=ue.bias,D.shadowNormalBias=ue.normalBias,D.shadowRadius=ue.radius,D.shadowMapSize=ue.mapSize,D.shadowCameraNear=ue.camera.near,D.shadowCameraFar=ue.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=W,g++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(re*T),W.groundColor.copy(F.groundColor).multiplyScalar(re*T),n.hemi[x]=W,x++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==_||y.pointLength!==g||y.spotLength!==p||y.rectAreaLength!==m||y.hemiLength!==x||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==L||y.numSpotMaps!==b||y.numLightProbes!==O)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=L+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=O,y.directionalLength=_,y.pointLength=g,y.spotLength=p,y.rectAreaLength=m,y.hemiLength=x,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=L,y.numSpotMaps=b,y.numLightProbes=O,n.version=s1++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function _g(i){const e=new a1(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function l1(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _g(i),e.set(r,[a])):s>=o.length?(a=new _g(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class c1 extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u1 extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function d1(i,e,t){let n=new Cd;const r=new We,s=new We,o=new Et,a=new c1({depthPacking:jE}),l=new u1,c={},u=t.maxTextureSize,f={[xr]:Bn,[Bn]:xr,[Hi]:Hi},h=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:f1,fragmentShader:h1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Nn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let m=this.type;this.render=function(b,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const T=i.getRenderTarget(),y=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Zr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=m!==cr&&this.type===cr,K=m===cr&&this.type!==cr;for(let re=0,te=b.length;re<te;re++){const ne=b[re],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ue=W.getFrameExtents();if(r.multiply(ue),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null||F===!0||K===!0){const me=this.type!==cr?{minFilter:Dn,magFilter:Dn}:{};W.map!==null&&W.map.dispose(),W.map=new Xs(r.x,r.y,me),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const D=W.getViewportCount();for(let me=0;me<D;me++){const Pe=W.getViewport(me);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),H.viewport(o),W.updateMatrices(ne,me),n=W.getFrustum(),S(A,O,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===cr&&x(W,O),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,y,G)};function x(b,A){const O=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xs(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,O,h,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,O,d,g,null)}function v(b,A,O,T){let y=null;const G=O.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(G!==void 0)y=G;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=y.uuid,F=A.uuid;let K=c[H];K===void 0&&(K={},c[H]=K);let re=K[F];re===void 0&&(re=y.clone(),K[F]=re,A.addEventListener("dispose",L)),y=re}if(y.visible=A.visible,y.wireframe=A.wireframe,T===cr?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=O}return y}function S(b,A,O,T,y){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===cr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld);const F=e.update(b),K=b.material;if(Array.isArray(K)){const re=F.groups;for(let te=0,ne=re.length;te<ne;te++){const W=re[te],ue=K[W.materialIndex];if(ue&&ue.visible){const D=v(b,ue,T,y);b.onBeforeShadow(i,b,A,O,F,D,W),i.renderBufferDirect(O,null,F,D,b,W),b.onAfterShadow(i,b,A,O,F,D,W)}}}else if(K.visible){const re=v(b,K,T,y);b.onBeforeShadow(i,b,A,O,F,re,null),i.renderBufferDirect(O,null,F,re,b,null),b.onAfterShadow(i,b,A,O,F,re,null)}}const H=b.children;for(let F=0,K=H.length;F<K;F++)S(H[F],A,O,T,y)}function L(b){b.target.removeEventListener("dispose",L);for(const O in c){const T=c[O],y=b.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function p1(i){function e(){let E=!1;const z=new Et;let J=null;const de=new Et(0,0,0,0);return{setMask:function(_e){J!==_e&&!E&&(i.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){E=_e},setClear:function(_e,ze,Ke,pt,Mt){Mt===!0&&(_e*=pt,ze*=pt,Ke*=pt),z.set(_e,ze,Ke,pt),de.equals(z)===!1&&(i.clearColor(_e,ze,Ke,pt),de.copy(z))},reset:function(){E=!1,J=null,de.set(-1,0,0,0)}}}function t(){let E=!1,z=null,J=null,de=null;return{setTest:function(_e){_e?ge(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(_e){z!==_e&&!E&&(i.depthMask(_e),z=_e)},setFunc:function(_e){if(J!==_e){switch(_e){case xE:i.depthFunc(i.NEVER);break;case yE:i.depthFunc(i.ALWAYS);break;case ME:i.depthFunc(i.LESS);break;case Zc:i.depthFunc(i.LEQUAL);break;case SE:i.depthFunc(i.EQUAL);break;case EE:i.depthFunc(i.GEQUAL);break;case TE:i.depthFunc(i.GREATER);break;case bE:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=_e}},setLocked:function(_e){E=_e},setClear:function(_e){de!==_e&&(i.clearDepth(_e),de=_e)},reset:function(){E=!1,z=null,J=null,de=null}}}function n(){let E=!1,z=null,J=null,de=null,_e=null,ze=null,Ke=null,pt=null,Mt=null;return{setTest:function(rt){E||(rt?ge(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(rt){z!==rt&&!E&&(i.stencilMask(rt),z=rt)},setFunc:function(rt,Ie,be){(J!==rt||de!==Ie||_e!==be)&&(i.stencilFunc(rt,Ie,be),J=rt,de=Ie,_e=be)},setOp:function(rt,Ie,be){(ze!==rt||Ke!==Ie||pt!==be)&&(i.stencilOp(rt,Ie,be),ze=rt,Ke=Ie,pt=be)},setLocked:function(rt){E=rt},setClear:function(rt){Mt!==rt&&(i.clearStencil(rt),Mt=rt)},reset:function(){E=!1,z=null,J=null,de=null,_e=null,ze=null,Ke=null,pt=null,Mt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,x=null,v=null,S=null,L=null,b=new $e(0,0,0),A=0,O=!1,T=null,y=null,G=null,H=null,F=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,te=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),re=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),re=te>=2);let W=null,ue={};const D=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Pe=new Et().fromArray(D),Xe=new Et().fromArray(me);function ie(E,z,J,de){const _e=new Uint8Array(4),ze=i.createTexture();i.bindTexture(E,ze),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<J;Ke++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(z+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ze}const pe={};pe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),s.setFunc(Zc),V(!1),j(jp),ge(i.CULL_FACE),R(Zr);function ge(E){c[E]!==!0&&(i.enable(E),c[E]=!0)}function k(E){c[E]!==!1&&(i.disable(E),c[E]=!1)}function fe(E,z){return u[E]!==z?(i.bindFramebuffer(E,z),u[E]=z,E===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),E===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function oe(E,z){let J=h,de=!1;if(E){J=f.get(z),J===void 0&&(J=[],f.set(z,J));const _e=E.textures;if(J.length!==_e.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,Ke=_e.length;ze<Ke;ze++)J[ze]=i.COLOR_ATTACHMENT0+ze;J.length=_e.length,de=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,de=!0);de&&i.drawBuffers(J)}function U(E){return d!==E?(i.useProgram(E),d=E,!0):!1}const we={[Cs]:i.FUNC_ADD,[nE]:i.FUNC_SUBTRACT,[iE]:i.FUNC_REVERSE_SUBTRACT};we[rE]=i.MIN,we[sE]=i.MAX;const xe={[oE]:i.ZERO,[aE]:i.ONE,[lE]:i.SRC_COLOR,[_h]:i.SRC_ALPHA,[pE]:i.SRC_ALPHA_SATURATE,[hE]:i.DST_COLOR,[uE]:i.DST_ALPHA,[cE]:i.ONE_MINUS_SRC_COLOR,[vh]:i.ONE_MINUS_SRC_ALPHA,[dE]:i.ONE_MINUS_DST_COLOR,[fE]:i.ONE_MINUS_DST_ALPHA,[mE]:i.CONSTANT_COLOR,[gE]:i.ONE_MINUS_CONSTANT_COLOR,[_E]:i.CONSTANT_ALPHA,[vE]:i.ONE_MINUS_CONSTANT_ALPHA};function R(E,z,J,de,_e,ze,Ke,pt,Mt,rt){if(E===Zr){_===!0&&(k(i.BLEND),_=!1);return}if(_===!1&&(ge(i.BLEND),_=!0),E!==tE){if(E!==g||rt!==O){if((p!==Cs||v!==Cs)&&(i.blendEquation(i.FUNC_ADD),p=Cs,v=Cs),rt)switch(E){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kp:i.blendFunc(i.ONE,i.ONE);break;case $p:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $p:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}m=null,x=null,S=null,L=null,b.set(0,0,0),A=0,g=E,O=rt}return}_e=_e||z,ze=ze||J,Ke=Ke||de,(z!==p||_e!==v)&&(i.blendEquationSeparate(we[z],we[_e]),p=z,v=_e),(J!==m||de!==x||ze!==S||Ke!==L)&&(i.blendFuncSeparate(xe[J],xe[de],xe[ze],xe[Ke]),m=J,x=de,S=ze,L=Ke),(pt.equals(b)===!1||Mt!==A)&&(i.blendColor(pt.r,pt.g,pt.b,Mt),b.copy(pt),A=Mt),g=E,O=!1}function P(E,z){E.side===Hi?k(i.CULL_FACE):ge(i.CULL_FACE);let J=E.side===Bn;z&&(J=!J),V(J),E.blending===Fo&&E.transparent===!1?R(Zr):R(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),r.setMask(E.colorWrite);const de=E.stencilWrite;o.setTest(de),de&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ce(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(E){T!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),T=E)}function j(E){E!==JS?(ge(i.CULL_FACE),E!==y&&(E===jp?i.cullFace(i.BACK):E===QS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),y=E}function I(E){E!==G&&(re&&i.lineWidth(E),G=E)}function ce(E,z,J){E?(ge(i.POLYGON_OFFSET_FILL),(H!==z||F!==J)&&(i.polygonOffset(z,J),H=z,F=J)):k(i.POLYGON_OFFSET_FILL)}function C(E){E?ge(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function M(E){E===void 0&&(E=i.TEXTURE0+K-1),W!==E&&(i.activeTexture(E),W=E)}function N(E,z,J){J===void 0&&(W===null?J=i.TEXTURE0+K-1:J=W);let de=ue[J];de===void 0&&(de={type:void 0,texture:void 0},ue[J]=de),(de.type!==E||de.texture!==z)&&(W!==J&&(i.activeTexture(J),W=J),i.bindTexture(E,z||pe[E]),de.type=E,de.texture=z)}function B(){const E=ue[W];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ke(){try{i.texImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Re(E){Pe.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),Pe.copy(E))}function Fe(E){Xe.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),Xe.copy(E))}function Ye(E,z){let J=l.get(z);J===void 0&&(J=new WeakMap,l.set(z,J));let de=J.get(E);de===void 0&&(de=i.getUniformBlockIndex(z,E.name),J.set(E,de))}function Ve(E,z){const de=l.get(z).get(E);a.get(z)!==de&&(i.uniformBlockBinding(z,de,E.__bindingPointIndex),a.set(z,de))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ue={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,x=null,v=null,S=null,L=null,b=new $e(0,0,0),A=0,O=!1,T=null,y=null,G=null,H=null,F=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:k,bindFramebuffer:fe,drawBuffers:oe,useProgram:U,setBlending:R,setMaterial:P,setFlipSided:V,setCullFace:j,setLineWidth:I,setPolygonOffset:ce,setScissorTest:C,activeTexture:M,bindTexture:N,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:ee,texImage2D:ke,texImage3D:Ee,updateUBOMapping:Ye,uniformBlockBinding:Ve,texStorage2D:he,texStorage3D:Se,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:se,compressedTexSubImage3D:Me,scissor:Re,viewport:Fe,reset:Ne}}function m1(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return d?new OffscreenCanvas(C,M):vl("canvas")}function g(C,M,N){let B=1;const q=ce(C);if((q.width>N||q.height>N)&&(B=N/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(B*q.width),ae=Math.floor(B*q.height);f===void 0&&(f=_(ee,ae));const le=M?_(ee,ae):f;return le.width=ee,le.height=ae,le.getContext("2d").drawImage(C,0,0,ee,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ee+"x"+ae+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Dn&&C.minFilter!==Zn}function m(C){i.generateMipmap(C)}function x(C,M,N,B,q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=M;if(M===i.RED&&(N===i.FLOAT&&(ee=i.R32F),N===i.HALF_FLOAT&&(ee=i.R16F),N===i.UNSIGNED_BYTE&&(ee=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.R8UI),N===i.UNSIGNED_SHORT&&(ee=i.R16UI),N===i.UNSIGNED_INT&&(ee=i.R32UI),N===i.BYTE&&(ee=i.R8I),N===i.SHORT&&(ee=i.R16I),N===i.INT&&(ee=i.R32I)),M===i.RG&&(N===i.FLOAT&&(ee=i.RG32F),N===i.HALF_FLOAT&&(ee=i.RG16F),N===i.UNSIGNED_BYTE&&(ee=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RG8UI),N===i.UNSIGNED_SHORT&&(ee=i.RG16UI),N===i.UNSIGNED_INT&&(ee=i.RG32UI),N===i.BYTE&&(ee=i.RG8I),N===i.SHORT&&(ee=i.RG16I),N===i.INT&&(ee=i.RG32I)),M===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),M===i.RGBA){const ae=q?Qc:gt.getTransfer(B);N===i.FLOAT&&(ee=i.RGBA32F),N===i.HALF_FLOAT&&(ee=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ee=ae===At?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dn&&C.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function S(C){const M=C.target;M.removeEventListener("dispose",S),b(M),M.isVideoTexture&&u.delete(M)}function L(C){const M=C.target;M.removeEventListener("dispose",L),O(M)}function b(C){const M=n.get(C);if(M.__webglInit===void 0)return;const N=C.source,B=h.get(N);if(B){const q=B[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&A(C),Object.keys(B).length===0&&h.delete(N)}n.remove(C)}function A(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const N=C.source,B=h.get(N);delete B[M.__cacheKey],o.memory.textures--}function O(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(M.__webglFramebuffer[B]))for(let q=0;q<M.__webglFramebuffer[B].length;q++)i.deleteFramebuffer(M.__webglFramebuffer[B][q]);else i.deleteFramebuffer(M.__webglFramebuffer[B]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[B])}else{if(Array.isArray(M.__webglFramebuffer))for(let B=0;B<M.__webglFramebuffer.length;B++)i.deleteFramebuffer(M.__webglFramebuffer[B]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let B=0;B<M.__webglColorRenderbuffer.length;B++)M.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[B]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=C.textures;for(let B=0,q=N.length;B<q;B++){const ee=n.get(N[B]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(N[B])}n.remove(C)}let T=0;function y(){T=0}function G(){const C=T;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),T+=1,C}function H(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function F(C,M){const N=n.get(C);if(C.isVideoTexture&&j(C),C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){const B=C.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(N,C,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function K(C,M){const N=n.get(C);if(C.version>0&&N.__version!==C.version){Pe(N,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function re(C,M){const N=n.get(C);if(C.version>0&&N.__version!==C.version){Pe(N,C,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function te(C,M){const N=n.get(C);if(C.version>0&&N.__version!==C.version){Xe(N,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}const ne={[$o]:i.REPEAT,[Hr]:i.CLAMP_TO_EDGE,[Jc]:i.MIRRORED_REPEAT},W={[Dn]:i.NEAREST,[j0]:i.NEAREST_MIPMAP_NEAREST,[Da]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Uc]:i.LINEAR_MIPMAP_NEAREST,[dr]:i.LINEAR_MIPMAP_LINEAR},ue={[$E]:i.NEVER,[nT]:i.ALWAYS,[ZE]:i.LESS,[rv]:i.LEQUAL,[JE]:i.EQUAL,[tT]:i.GEQUAL,[QE]:i.GREATER,[eT]:i.NOTEQUAL};function D(C,M){if(M.type===Wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zn||M.magFilter===Uc||M.magFilter===Da||M.magFilter===dr||M.minFilter===Zn||M.minFilter===Uc||M.minFilter===Da||M.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ne[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ne[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ne[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,W[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,W[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==Da&&M.minFilter!==dr||M.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function me(C,M){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",S));const B=M.source;let q=h.get(B);q===void 0&&(q={},h.set(B,q));const ee=H(M);if(ee!==C.__cacheKey){q[ee]===void 0&&(q[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[ee].usedTimes++;const ae=q[C.__cacheKey];ae!==void 0&&(q[C.__cacheKey].usedTimes--,ae.usedTimes===0&&A(M)),C.__cacheKey=ee,C.__webglTexture=q[ee].texture}return N}function Pe(C,M,N){let B=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(B=i.TEXTURE_3D);const q=me(C,M),ee=M.source;t.bindTexture(B,C.__webglTexture,i.TEXTURE0+N);const ae=n.get(ee);if(ee.version!==ae.__version||q===!0){t.activeTexture(i.TEXTURE0+N);const le=gt.getPrimaries(gt.workingColorSpace),se=M.colorSpace===zr?null:gt.getPrimaries(M.colorSpace),Me=M.colorSpace===zr||le===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let he=g(M.image,!1,r.maxTextureSize);he=I(M,he);const Se=s.convert(M.format,M.colorSpace),ke=s.convert(M.type);let Ee=x(M.internalFormat,Se,ke,M.colorSpace,M.isVideoTexture);D(B,M);let Re;const Fe=M.mipmaps,Ye=M.isVideoTexture!==!0,Ve=ae.__version===void 0||q===!0,Ne=ee.dataReady,E=v(M,he);if(M.isDepthTexture)Ee=i.DEPTH_COMPONENT16,M.type===Wi?Ee=i.DEPTH_COMPONENT32F:M.type===Zo?Ee=i.DEPTH_COMPONENT24:M.type===Il&&(Ee=i.DEPTH24_STENCIL8),Ve&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ee,he.width,he.height,0,Se,ke,null));else if(M.isDataTexture)if(Fe.length>0){Ye&&Ve&&t.texStorage2D(i.TEXTURE_2D,E,Ee,Fe[0].width,Fe[0].height);for(let z=0,J=Fe.length;z<J;z++)Re=Fe[z],Ye?Ne&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Re.width,Re.height,Se,ke,Re.data):t.texImage2D(i.TEXTURE_2D,z,Ee,Re.width,Re.height,0,Se,ke,Re.data);M.generateMipmaps=!1}else Ye?(Ve&&t.texStorage2D(i.TEXTURE_2D,E,Ee,he.width,he.height),Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Se,ke,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,he.width,he.height,0,Se,ke,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,E,Ee,Fe[0].width,Fe[0].height,he.depth);for(let z=0,J=Fe.length;z<J;z++)Re=Fe[z],M.format!==Ai?Se!==null?Ye?Ne&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Re.width,Re.height,he.depth,Se,Re.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ee,Re.width,Re.height,he.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Re.width,Re.height,he.depth,Se,ke,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,Ee,Re.width,Re.height,he.depth,0,Se,ke,Re.data)}else{Ye&&Ve&&t.texStorage2D(i.TEXTURE_2D,E,Ee,Fe[0].width,Fe[0].height);for(let z=0,J=Fe.length;z<J;z++)Re=Fe[z],M.format!==Ai?Se!==null?Ye?Ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,Re.width,Re.height,Se,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,z,Ee,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ne&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Re.width,Re.height,Se,ke,Re.data):t.texImage2D(i.TEXTURE_2D,z,Ee,Re.width,Re.height,0,Se,ke,Re.data)}else if(M.isDataArrayTexture)Ye?(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,E,Ee,he.width,he.height,he.depth),Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,ke,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,he.width,he.height,he.depth,0,Se,ke,he.data);else if(M.isData3DTexture)Ye?(Ve&&t.texStorage3D(i.TEXTURE_3D,E,Ee,he.width,he.height,he.depth),Ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,ke,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,he.width,he.height,he.depth,0,Se,ke,he.data);else if(M.isFramebufferTexture){if(Ve)if(Ye)t.texStorage2D(i.TEXTURE_2D,E,Ee,he.width,he.height);else{let z=he.width,J=he.height;for(let de=0;de<E;de++)t.texImage2D(i.TEXTURE_2D,de,Ee,z,J,0,Se,ke,null),z>>=1,J>>=1}}else if(Fe.length>0){if(Ye&&Ve){const z=ce(Fe[0]);t.texStorage2D(i.TEXTURE_2D,E,Ee,z.width,z.height)}for(let z=0,J=Fe.length;z<J;z++)Re=Fe[z],Ye?Ne&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Se,ke,Re):t.texImage2D(i.TEXTURE_2D,z,Ee,Se,ke,Re);M.generateMipmaps=!1}else if(Ye){if(Ve){const z=ce(he);t.texStorage2D(i.TEXTURE_2D,E,Ee,z.width,z.height)}Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ke,he)}else t.texImage2D(i.TEXTURE_2D,0,Ee,Se,ke,he);p(M)&&m(B),ae.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Xe(C,M,N){if(M.image.length!==6)return;const B=me(C,M),q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+N);const ee=n.get(q);if(q.version!==ee.__version||B===!0){t.activeTexture(i.TEXTURE0+N);const ae=gt.getPrimaries(gt.workingColorSpace),le=M.colorSpace===zr?null:gt.getPrimaries(M.colorSpace),se=M.colorSpace===zr||ae===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Me=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Me&&!he?Se[J]=g(M.image[J],!0,r.maxCubemapSize):Se[J]=he?M.image[J].image:M.image[J],Se[J]=I(M,Se[J]);const ke=Se[0],Ee=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),Fe=x(M.internalFormat,Ee,Re,M.colorSpace),Ye=M.isVideoTexture!==!0,Ve=ee.__version===void 0||B===!0,Ne=q.dataReady;let E=v(M,ke);D(i.TEXTURE_CUBE_MAP,M);let z;if(Me){Ye&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,E,Fe,ke.width,ke.height);for(let J=0;J<6;J++){z=Se[J].mipmaps;for(let de=0;de<z.length;de++){const _e=z[de];M.format!==Ai?Ee!==null?Ye?Ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,_e.width,_e.height,Ee,Re,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Fe,_e.width,_e.height,0,Ee,Re,_e.data)}}}else{if(z=M.mipmaps,Ye&&Ve){z.length>0&&E++;const J=ce(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,E,Fe,J.width,J.height)}for(let J=0;J<6;J++)if(he){Ye?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Ee,Re,Se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,Se[J].width,Se[J].height,0,Ee,Re,Se[J].data);for(let de=0;de<z.length;de++){const ze=z[de].image[J].image;Ye?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,ze.width,ze.height,Ee,Re,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Fe,ze.width,ze.height,0,Ee,Re,ze.data)}}else{Ye?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,Re,Se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,Ee,Re,Se[J]);for(let de=0;de<z.length;de++){const _e=z[de];Ye?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ee,Re,_e.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Fe,Ee,Re,_e.image[J])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),ee.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ie(C,M,N,B,q,ee){const ae=s.convert(N.format,N.colorSpace),le=s.convert(N.type),se=x(N.internalFormat,ae,le,N.colorSpace);if(!n.get(M).__hasExternalTextures){const he=Math.max(1,M.width>>ee),Se=Math.max(1,M.height>>ee);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ee,se,he,Se,M.depth,0,ae,le,null):t.texImage2D(q,ee,se,he,Se,0,ae,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,q,n.get(N).__webglTexture,0,P(M)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,q,n.get(N).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let B=i.DEPTH_COMPONENT24;if(N||V(M)){const q=M.depthTexture;q&&q.isDepthTexture&&(q.type===Wi?B=i.DEPTH_COMPONENT32F:q.type===Zo&&(B=i.DEPTH_COMPONENT24));const ee=P(M);V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,B,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,B,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,B,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const B=P(M);N&&V(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,M.width,M.height):V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const B=M.textures;for(let q=0;q<B.length;q++){const ee=B[q],ae=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),se=x(ee.internalFormat,ae,le,ee.colorSpace),Me=P(M);N&&V(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,se,M.width,M.height):V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const B=n.get(M.depthTexture).__webglTexture,q=P(M);if(M.depthTexture.format===Bo)V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(M.depthTexture.format===gl)V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function k(C){const M=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ge(M.__webglFramebuffer,C)}else if(N){M.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[B]),M.__webglDepthbuffer[B]=i.createRenderbuffer(),pe(M.__webglDepthbuffer[B],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(C,M,N){const B=n.get(C);M!==void 0&&ie(B.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&k(C)}function oe(C){const M=C.texture,N=n.get(C),B=n.get(M);C.addEventListener("dispose",L);const q=C.textures,ee=C.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=M.version,o.memory.textures++),ee){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let se=0;se<M.mipmaps.length;se++)N.__webglFramebuffer[le][se]=i.createFramebuffer()}else N.__webglFramebuffer[le]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)N.__webglFramebuffer[le]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let le=0,se=q.length;le<se;le++){const Me=n.get(q[le]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&V(C)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<q.length;le++){const se=q[le];N.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Me=s.convert(se.format,se.colorSpace),he=s.convert(se.type),Se=x(se.internalFormat,Me,he,se.colorSpace,C.isXRRenderTarget===!0),ke=P(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,N.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),D(i.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)ie(N.__webglFramebuffer[le][se],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,se);else ie(N.__webglFramebuffer[le],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let le=0,se=q.length;le<se;le++){const Me=q[le],he=n.get(Me);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),D(i.TEXTURE_2D,Me),ie(N.__webglFramebuffer,C,Me,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),p(Me)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,B.__webglTexture),D(le,M),M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)ie(N.__webglFramebuffer[se],C,M,i.COLOR_ATTACHMENT0,le,se);else ie(N.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,le,0);p(M)&&m(le),t.unbindTexture()}C.depthBuffer&&k(C)}function U(C){const M=C.textures;for(let N=0,B=M.length;N<B;N++){const q=M[N];if(p(q)){const ee=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(q).__webglTexture;t.bindTexture(ee,ae),m(ee),t.unbindTexture()}}}const we=[],xe=[];function R(C){if(C.samples>0){if(V(C)===!1){const M=C.textures,N=C.width,B=C.height;let q=i.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(C),le=M.length>1;if(le)for(let se=0;se<M.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let se=0;se<M.length;se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const Me=n.get(M[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,N,B,0,0,N,B,q,i.NEAREST),l===!0&&(we.length=0,xe.length=0,we.push(i.COLOR_ATTACHMENT0+se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(we.push(ee),xe.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let se=0;se<M.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const Me=n.get(M[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function P(C){return Math.min(r.maxSamples,C.samples)}function V(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function I(C,M){const N=C.colorSpace,B=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==an&&N!==zr&&(gt.getTransfer(N)===At?(B!==Ai||q!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=y,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=re,this.setTextureCube=te,this.rebindTextures=fe,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=V}function g1(i,e){function t(n,r=zr){let s;const o=gt.getTransfer(r);if(n===is)return i.UNSIGNED_BYTE;if(n===Z0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===J0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===BE)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===UE)return i.BYTE;if(n===FE)return i.SHORT;if(n===K0)return i.UNSIGNED_SHORT;if(n===$0)return i.INT;if(n===Zo)return i.UNSIGNED_INT;if(n===Wi)return i.FLOAT;if(n===Pu)return i.HALF_FLOAT;if(n===kE)return i.ALPHA;if(n===zE)return i.RGB;if(n===Ai)return i.RGBA;if(n===HE)return i.LUMINANCE;if(n===VE)return i.LUMINANCE_ALPHA;if(n===Bo)return i.DEPTH_COMPONENT;if(n===gl)return i.DEPTH_STENCIL;if(n===Q0)return i.RED;if(n===ev)return i.RED_INTEGER;if(n===GE)return i.RG;if(n===tv)return i.RG_INTEGER;if(n===nv)return i.RGBA_INTEGER;if(n===Ju||n===Qu||n===ef||n===tf)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ju)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ef)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ju)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ef)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qp||n===em||n===tm||n===nm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===em)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===im||n===rm||n===sm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===im||n===rm)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===om||n===am||n===lm||n===cm||n===um||n===fm||n===hm||n===dm||n===pm||n===mm||n===gm||n===_m||n===vm||n===xm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===om)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===am)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===um)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_m)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xm)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nf||n===ym||n===Mm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nf)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ym)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===WE||n===Sm||n===Em||n===Tm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Em)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Il?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _1 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v1={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
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

}`;class M1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new rs({vertexShader:x1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new Iu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class S1 extends Qs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new M1,p=t.getContextAttributes();let m=null,x=null;const v=[],S=[],L=new We;let b=null;const A=new pn;A.layers.enable(1),A.viewport=new Et;const O=new pn;O.layers.enable(2),O.viewport=new Et;const T=[A,O],y=new _1;y.layers.enable(1),y.layers.enable(2);let G=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=v[ie];return pe===void 0&&(pe=new Cf,v[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=v[ie];return pe===void 0&&(pe=new Cf,v[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=v[ie];return pe===void 0&&(pe=new Cf,v[ie]=pe),pe.getHandSpace()};function F(ie){const pe=S.indexOf(ie.inputSource);if(pe===-1)return;const ge=v[pe];ge!==void 0&&(ge.update(ie.inputSource,ie.frame,c||o),ge.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",re);for(let ie=0;ie<v.length;ie++){const pe=S[ie];pe!==null&&(S[ie]=null,v[ie].disconnect(pe))}G=null,H=null,g.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,x=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",K),r.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const pe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Xs(d.framebufferWidth,d.framebufferHeight,{format:Ai,type:is,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let pe=null,ge=null,k=null;p.depth&&(k=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=p.stencil?gl:Bo,ge=p.stencil?Il:Zo);const fe={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Xs(h.textureWidth,h.textureHeight,{format:Ai,type:is,depthTexture:new vv(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function re(ie){for(let pe=0;pe<ie.removed.length;pe++){const ge=ie.removed[pe],k=S.indexOf(ge);k>=0&&(S[k]=null,v[k].disconnect(ge))}for(let pe=0;pe<ie.added.length;pe++){const ge=ie.added[pe];let k=S.indexOf(ge);if(k===-1){for(let oe=0;oe<v.length;oe++)if(oe>=S.length){S.push(ge),k=oe;break}else if(S[oe]===null){S[oe]=ge,k=oe;break}if(k===-1)break}const fe=v[k];fe&&fe.connect(ge)}}const te=new X,ne=new X;function W(ie,pe,ge){te.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);const k=te.distanceTo(ne),fe=pe.projectionMatrix.elements,oe=ge.projectionMatrix.elements,U=fe[14]/(fe[10]-1),we=fe[14]/(fe[10]+1),xe=(fe[9]+1)/fe[5],R=(fe[9]-1)/fe[5],P=(fe[8]-1)/fe[0],V=(oe[8]+1)/oe[0],j=U*P,I=U*V,ce=k/(-P+V),C=ce*-P;pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(C),ie.translateZ(ce),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const M=U+ce,N=we+ce,B=j-C,q=I+(k-C),ee=xe*we/N*M,ae=R*we/N*M;ie.projectionMatrix.makePerspective(B,q,ee,ae,M,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function ue(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;g.texture!==null&&(ie.near=g.depthNear,ie.far=g.depthFar),y.near=O.near=A.near=ie.near,y.far=O.far=A.far=ie.far,(G!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),G=y.near,H=y.far,A.near=G,A.far=H,O.near=G,O.far=H,A.updateProjectionMatrix(),O.updateProjectionMatrix(),ie.updateProjectionMatrix());const pe=ie.parent,ge=y.cameras;ue(y,pe);for(let k=0;k<ge.length;k++)ue(ge[k],pe);ge.length===2?W(y,A,O):y.projectionMatrix.copy(A.projectionMatrix),D(ie,y,pe)};function D(ie,pe,ge){ge===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(ge.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null};let me=null;function Pe(ie,pe){if(u=pe.getViewerPose(c||o),_=pe,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let k=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,k=!0);for(let oe=0;oe<ge.length;oe++){const U=ge[oe];let we=null;if(d!==null)we=d.getViewport(U);else{const R=f.getViewSubImage(h,U);we=R.viewport,oe===0&&(e.setRenderTargetTextures(x,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(x))}let xe=T[oe];xe===void 0&&(xe=new pn,xe.layers.enable(oe),xe.viewport=new Et,T[oe]=xe),xe.matrix.fromArray(U.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(U.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(we.x,we.y,we.width,we.height),oe===0&&(y.matrix.copy(xe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),k===!0&&y.cameras.push(xe)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const oe=f.getDepthInformation(ge[0]);oe&&oe.isValid&&oe.texture&&g.init(e,oe,r.renderState)}}for(let ge=0;ge<v.length;ge++){const k=S[ge],fe=v[ge];k!==null&&fe!==void 0&&fe.update(k,pe,c||o)}g.render(e,y),me&&me(ie,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}const Xe=new _v;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}}const xs=new Li,E1=new it;function T1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,pv(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,S=x.envMapRotation;if(v&&(p.envMap.value=v,xs.copy(S),xs.x*=-1,xs.y*=-1,xs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),p.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(xs)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const L=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*L,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function b1(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(_(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",p));const L=v.program;n.updateUBOMapping(x,L);const b=e.render.frame;s[x.id]!==b&&(h(x),s[x.id]=b)}function u(x){const v=f();x.__bindingPointIndex=v;const S=i.createBuffer(),L=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],S=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,A=S.length;b<A;b++){const O=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,y=O.length;T<y;T++){const G=O[T];if(d(G,b,T,L)===!0){const H=G.__offset,F=Array.isArray(G.value)?G.value:[G.value];let K=0;for(let re=0;re<F.length;re++){const te=F[re],ne=g(te);typeof te=="number"||typeof te=="boolean"?(G.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,H+K,G.__data)):te.isMatrix3?(G.__data[0]=te.elements[0],G.__data[1]=te.elements[1],G.__data[2]=te.elements[2],G.__data[3]=0,G.__data[4]=te.elements[3],G.__data[5]=te.elements[4],G.__data[6]=te.elements[5],G.__data[7]=0,G.__data[8]=te.elements[6],G.__data[9]=te.elements[7],G.__data[10]=te.elements[8],G.__data[11]=0):(te.toArray(G.__data,K),K+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,S,L){const b=x.value,A=v+"_"+S;if(L[A]===void 0)return typeof b=="number"||typeof b=="boolean"?L[A]=b:L[A]=b.clone(),!0;{const O=L[A];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return L[A]=b,!0}else if(O.equals(b)===!1)return O.copy(b),!0}return!1}function _(x){const v=x.uniforms;let S=0;const L=16;for(let A=0,O=v.length;A<O;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,G=T.length;y<G;y++){const H=T[y],F=Array.isArray(H.value)?H.value:[H.value];for(let K=0,re=F.length;K<re;K++){const te=F[K],ne=g(te),W=S%L;W!==0&&L-W<ne.boundary&&(S+=L-W),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ne.storage}}}const b=S%L;return b>0&&(S+=L-b),x.__size=S,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Tv{constructor(e={}){const{canvas:t=xT(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this._useLegacyLights=!1,this.toneMapping=Jr,this.toneMappingExposure=1;const v=this;let S=!1,L=0,b=0,A=null,O=-1,T=null;const y=new Et,G=new Et;let H=null;const F=new $e(0);let K=0,re=t.width,te=t.height,ne=1,W=null,ue=null;const D=new Et(0,0,re,te),me=new Et(0,0,re,te);let Pe=!1;const Xe=new Cd;let ie=!1,pe=!1;const ge=new it,k=new X,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return A===null?ne:1}let U=n;function we(w,Y){return t.getContext(w,Y)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Td}`),t.addEventListener("webglcontextlost",E,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",J,!1),U===null){const Y="webgl2";if(U=we(Y,w),U===null)throw we(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xe,R,P,V,j,I,ce,C,M,N,B,q,ee,ae,le,se,Me,he,Se,ke,Ee,Re,Fe,Ye;function Ve(){xe=new Nw(U),xe.init(),Re=new g1(U,xe),R=new Rw(U,xe,e,Re),P=new p1(U),V=new Fw(U),j=new e1,I=new m1(U,xe,P,j,R,Re,V),ce=new Pw(v),C=new Dw(v),M=new WT(U),Fe=new Aw(U,M),N=new Ow(U,M,V,Fe),B=new kw(U,N,M,V),Se=new Bw(U,R,I),se=new Cw(j),q=new QR(v,ce,C,xe,R,Fe,se),ee=new T1(v,j),ae=new n1,le=new l1(xe),he=new bw(v,ce,C,P,B,h,l),Me=new d1(v,B,R),Ye=new b1(U,V,R,P),ke=new ww(U,xe,V),Ee=new Uw(U,xe,V),V.programs=q.programs,v.capabilities=R,v.extensions=xe,v.properties=j,v.renderLists=ae,v.shadowMap=Me,v.state=P,v.info=V}Ve();const Ne=new S1(v,U);this.xr=Ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(re,te,!1))},this.getSize=function(w){return w.set(re,te)},this.setSize=function(w,Y,$=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,te=Y,t.width=Math.floor(w*ne),t.height=Math.floor(Y*ne),$===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(re*ne,te*ne).floor()},this.setDrawingBufferSize=function(w,Y,$){re=w,te=Y,ne=$,t.width=Math.floor(w*$),t.height=Math.floor(Y*$),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,Y,$,Z){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,Y,$,Z),P.viewport(y.copy(D).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,Y,$,Z){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,Y,$,Z),P.scissor(G.copy(me).multiplyScalar(ne).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){P.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(w=!0,Y=!0,$=!0){let Z=0;if(w){let Q=!1;if(A!==null){const ve=A.texture.format;Q=ve===nv||ve===tv||ve===ev}if(Q){const ve=A.texture.type,Te=ve===is||ve===Zo||ve===K0||ve===Il||ve===Z0||ve===J0,Ce=he.getClearColor(),Be=he.getClearAlpha(),je=Ce.r,Ue=Ce.g,Oe=Ce.b;Te?(d[0]=je,d[1]=Ue,d[2]=Oe,d[3]=Be,U.clearBufferuiv(U.COLOR,0,d)):(_[0]=je,_[1]=Ue,_[2]=Oe,_[3]=Be,U.clearBufferiv(U.COLOR,0,_))}else Z|=U.COLOR_BUFFER_BIT}Y&&(Z|=U.DEPTH_BUFFER_BIT),$&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",E,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ae.dispose(),le.dispose(),j.dispose(),ce.dispose(),C.dispose(),B.dispose(),Fe.dispose(),Ye.dispose(),q.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",rt),Ne.removeEventListener("sessionend",Ie),be.stop()};function E(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=V.autoReset,Y=Me.enabled,$=Me.autoUpdate,Z=Me.needsUpdate,Q=Me.type;Ve(),V.autoReset=w,Me.enabled=Y,Me.autoUpdate=$,Me.needsUpdate=Z,Me.type=Q}function J(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){const Y=w.target;Y.removeEventListener("dispose",de),_e(Y)}function _e(w){ze(w),j.remove(w)}function ze(w){const Y=j.get(w).programs;Y!==void 0&&(Y.forEach(function($){q.releaseProgram($)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,$,Z,Q,ve){Y===null&&(Y=fe);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=$t(w,Y,$,Z,Q);P.setMaterial(Z,Te);let Be=$.index,je=1;if(Z.wireframe===!0){if(Be=N.getWireframeAttribute($),Be===void 0)return;je=2}const Ue=$.drawRange,Oe=$.attributes.position;let dt=Ue.start*je,Ht=(Ue.start+Ue.count)*je;ve!==null&&(dt=Math.max(dt,ve.start*je),Ht=Math.min(Ht,(ve.start+ve.count)*je)),Be!==null?(dt=Math.max(dt,0),Ht=Math.min(Ht,Be.count)):Oe!=null&&(dt=Math.max(dt,0),Ht=Math.min(Ht,Oe.count));const ln=Ht-dt;if(ln<0||ln===1/0)return;Fe.setup(Q,Z,Ce,$,Be);let yn,Je=ke;if(Be!==null&&(yn=M.get(Be),Je=Ee,Je.setIndex(yn)),Q.isMesh)Z.wireframe===!0?(P.setLineWidth(Z.wireframeLinewidth*oe()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(Q.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),P.setLineWidth(qe*oe()),Q.isLineSegments?Je.setMode(U.LINES):Q.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else Q.isPoints?Je.setMode(U.POINTS):Q.isSprite&&Je.setMode(U.TRIANGLES);if(Q.isBatchedMesh)Q._multiDrawInstances!==null?Je.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances):Je.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Je.renderInstances(dt,ln,Q.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ni=Math.min($.instanceCount,qe);Je.renderInstances(dt,ln,Ni)}else Je.render(dt,ln)};function Ke(w,Y,$){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,Dt(w,Y,$),w.side=xr,w.needsUpdate=!0,Dt(w,Y,$),w.side=Hi):Dt(w,Y,$)}this.compile=function(w,Y,$=null){$===null&&($=w),p=le.get($),p.init(Y),x.push(p),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),w!==$&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(v._useLegacyLights);const Z=new Set;return w.traverse(function(Q){const ve=Q.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Ce=ve[Te];Ke(Ce,$,Q),Z.add(Ce)}else Ke(ve,$,Q),Z.add(ve)}),x.pop(),p=null,Z},this.compileAsync=function(w,Y,$=null){const Z=this.compile(w,Y,$);return new Promise(Q=>{function ve(){if(Z.forEach(function(Te){j.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){Q(w);return}setTimeout(ve,10)}xe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let pt=null;function Mt(w){pt&&pt(w)}function rt(){be.stop()}function Ie(){be.start()}const be=new _v;be.setAnimationLoop(Mt),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(w){pt=w,Ne.setAnimationLoop(w),w===null?be.stop():be.start()},Ne.addEventListener("sessionstart",rt),Ne.addEventListener("sessionend",Ie),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Y),Y=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,Y,A),p=le.get(w,x.length),p.init(Y),x.push(p),ge.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xe.setFromProjectionMatrix(ge),pe=this.localClippingEnabled,ie=se.init(this.clippingPlanes,pe),g=ae.get(w,m.length),g.init(),m.push(g),et(w,Y,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,ue);const $=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1;$&&he.addToRenderList(g,w),this.info.render.frame++,ie===!0&&se.beginShadows();const Z=p.state.shadowsArray;Me.render(Z,w,Y),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,ve=g.transmissive;if(p.setupLights(v._useLegacyLights),Y.isArrayCamera){const Te=Y.cameras;if(ve.length>0)for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const je=Te[Ce];He(Q,ve,w,je)}$&&he.render(w);for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const je=Te[Ce];ye(g,w,je,je.viewport)}}else ve.length>0&&He(Q,ve,w,Y),$&&he.render(w),ye(g,w,Y);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,Y),Fe.resetDefaultState(),O=-1,T=null,x.pop(),x.length>0?(p=x[x.length-1],ie===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function et(w,Y,$,Z){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){Z&&k.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const Te=B.update(w),Ce=w.material;Ce.visible&&g.push(w,Te,Ce,$,k.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const Te=B.update(w),Ce=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),k.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),k.copy(Te.boundingSphere.center)),k.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){const Be=Te.groups;for(let je=0,Ue=Be.length;je<Ue;je++){const Oe=Be[je],dt=Ce[Oe.materialIndex];dt&&dt.visible&&g.push(w,Te,dt,$,k.z,Oe)}}else Ce.visible&&g.push(w,Te,Ce,$,k.z,null)}}const ve=w.children;for(let Te=0,Ce=ve.length;Te<Ce;Te++)et(ve[Te],Y,$,Z)}function ye(w,Y,$,Z){const Q=w.opaque,ve=w.transmissive,Te=w.transparent;p.setupLightsView($),ie===!0&&se.setGlobalState(v.clippingPlanes,$),Z&&P.viewport(y.copy(Z)),Q.length>0&&De(Q,Y,$),ve.length>0&&De(ve,Y,$),Te.length>0&&De(Te,Y,$),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function He(w,Y,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Xs(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Pu:is,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=p.state.transmissionRenderTarget[Z.id],Te=Z.viewport||y;ve.setSize(Te.z,Te.w);const Ce=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(F),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=Jr;const je=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ie===!0&&se.setGlobalState(v.clippingPlanes,Z),De(w,$,Z),I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Oe=0,dt=Y.length;Oe<dt;Oe++){const Ht=Y[Oe],ln=Ht.object,yn=Ht.geometry,Je=Ht.material,qe=Ht.group;if(Je.side===Hi&&ln.layers.test(Z.layers)){const Ni=Je.side;Je.side=Bn,Je.needsUpdate=!0,Ge(ln,$,Z,yn,Je,qe),Je.side=Ni,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve))}v.setRenderTarget(Ce),v.setClearColor(F,K),je!==void 0&&(Z.viewport=je),v.toneMapping=Be}function De(w,Y,$){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,ve=w.length;Q<ve;Q++){const Te=w[Q],Ce=Te.object,Be=Te.geometry,je=Z===null?Te.material:Z,Ue=Te.group;Ce.layers.test($.layers)&&Ge(Ce,Y,$,Be,je,Ue)}}function Ge(w,Y,$,Z,Q,ve){w.onBeforeRender(v,Y,$,Z,Q,ve),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(v,Y,$,Z,w,ve),Q.transparent===!0&&Q.side===Hi&&Q.forceSinglePass===!1?(Q.side=Bn,Q.needsUpdate=!0,v.renderBufferDirect($,Y,Z,Q,w,ve),Q.side=xr,Q.needsUpdate=!0,v.renderBufferDirect($,Y,Z,Q,w,ve),Q.side=Hi):v.renderBufferDirect($,Y,Z,Q,w,ve),w.onAfterRender(v,Y,$,Z,Q,ve)}function Dt(w,Y,$){Y.isScene!==!0&&(Y=fe);const Z=j.get(w),Q=p.state.lights,ve=p.state.shadowsArray,Te=Q.state.version,Ce=q.getParameters(w,Q.state,ve,Y,$),Be=q.getProgramCacheKey(Ce);let je=Z.programs;Z.environment=w.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(w.isMeshStandardMaterial?C:ce).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",de),je=new Map,Z.programs=je);let Ue=je.get(Be);if(Ue!==void 0){if(Z.currentProgram===Ue&&Z.lightsStateVersion===Te)return Rt(w,Ce),Ue}else Ce.uniforms=q.getUniforms(w),w.onBuild($,Ce,v),w.onBeforeCompile(Ce,v),Ue=q.acquireProgram(Ce,Be),je.set(Be,Ue),Z.uniforms=Ce.uniforms;const Oe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=se.uniform),Rt(w,Ce),Z.needsLights=Tt(w),Z.lightsStateVersion=Te,Z.needsLights&&(Oe.ambientLightColor.value=Q.state.ambient,Oe.lightProbe.value=Q.state.probe,Oe.directionalLights.value=Q.state.directional,Oe.directionalLightShadows.value=Q.state.directionalShadow,Oe.spotLights.value=Q.state.spot,Oe.spotLightShadows.value=Q.state.spotShadow,Oe.rectAreaLights.value=Q.state.rectArea,Oe.ltc_1.value=Q.state.rectAreaLTC1,Oe.ltc_2.value=Q.state.rectAreaLTC2,Oe.pointLights.value=Q.state.point,Oe.pointLightShadows.value=Q.state.pointShadow,Oe.hemisphereLights.value=Q.state.hemi,Oe.directionalShadowMap.value=Q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Oe.spotShadowMap.value=Q.state.spotShadowMap,Oe.spotLightMatrix.value=Q.state.spotLightMatrix,Oe.spotLightMap.value=Q.state.spotLightMap,Oe.pointShadowMap.value=Q.state.pointShadowMap,Oe.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.currentProgram=Ue,Z.uniformsList=null,Ue}function st(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Rt(w,Y){const $=j.get(w);$.outputColorSpace=Y.outputColorSpace,$.batching=Y.batching,$.instancing=Y.instancing,$.instancingColor=Y.instancingColor,$.instancingMorph=Y.instancingMorph,$.skinning=Y.skinning,$.morphTargets=Y.morphTargets,$.morphNormals=Y.morphNormals,$.morphColors=Y.morphColors,$.morphTargetsCount=Y.morphTargetsCount,$.numClippingPlanes=Y.numClippingPlanes,$.numIntersection=Y.numClipIntersection,$.vertexAlphas=Y.vertexAlphas,$.vertexTangents=Y.vertexTangents,$.toneMapping=Y.toneMapping}function $t(w,Y,$,Z,Q){Y.isScene!==!0&&(Y=fe),I.resetTextureUnits();const ve=Y.fog,Te=Z.isMeshStandardMaterial?Y.environment:null,Ce=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:an,Be=(Z.isMeshStandardMaterial?C:ce).get(Z.envMap||Te),je=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ue=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Ht=!!$.morphAttributes.color;let ln=Jr;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ln=v.toneMapping);const yn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Je=yn!==void 0?yn.length:0,qe=j.get(Z),Ni=p.state.lights;if(ie===!0&&(pe===!0||w!==T)){const ri=w===T&&Z.id===O;se.setState(Z,w,ri)}let mt=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ni.state.version||qe.outputColorSpace!==Ce||Q.isBatchedMesh&&qe.batching===!1||!Q.isBatchedMesh&&qe.batching===!0||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&qe.instancingMorph===!1&&Q.morphTexture!==null||qe.envMap!==Be||Z.fog===!0&&qe.fog!==ve||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==se.numPlanes||qe.numIntersection!==se.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Ue||qe.morphTargets!==Oe||qe.morphNormals!==dt||qe.morphColors!==Ht||qe.toneMapping!==ln||qe.morphTargetsCount!==Je)&&(mt=!0):(mt=!0,qe.__version=Z.version);let fs=qe.currentProgram;mt===!0&&(fs=Dt(Z,Y,Q));let dp=!1,_a=!1,zu=!1;const cn=fs.getUniforms(),Er=qe.uniforms;if(P.useProgram(fs.program)&&(dp=!0,_a=!0,zu=!0),Z.id!==O&&(O=Z.id,_a=!0),dp||T!==w){cn.setValue(U,"projectionMatrix",w.projectionMatrix),cn.setValue(U,"viewMatrix",w.matrixWorldInverse);const ri=cn.map.cameraPosition;ri!==void 0&&ri.setValue(U,k.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&cn.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&cn.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,_a=!0,zu=!0)}if(Q.isSkinnedMesh){cn.setOptional(U,Q,"bindMatrix"),cn.setOptional(U,Q,"bindMatrixInverse");const ri=Q.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),cn.setValue(U,"boneTexture",ri.boneTexture,I))}Q.isBatchedMesh&&(cn.setOptional(U,Q,"batchingTexture"),cn.setValue(U,"batchingTexture",Q._matricesTexture,I));const Hu=$.morphAttributes;if((Hu.position!==void 0||Hu.normal!==void 0||Hu.color!==void 0)&&Se.update(Q,$,fs),(_a||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,cn.setValue(U,"receiveShadow",Q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Er.envMap.value=Be,Er.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&Y.environment!==null&&(Er.envMapIntensity.value=Y.environmentIntensity),_a&&(cn.setValue(U,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Ct(Er,zu),ve&&Z.fog===!0&&ee.refreshFogUniforms(Er,ve),ee.refreshMaterialUniforms(Er,Z,ne,te,p.state.transmissionRenderTarget[w.id]),Fc.upload(U,st(qe),Er,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Fc.upload(U,st(qe),Er,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&cn.setValue(U,"center",Q.center),cn.setValue(U,"modelViewMatrix",Q.modelViewMatrix),cn.setValue(U,"normalMatrix",Q.normalMatrix),cn.setValue(U,"modelMatrix",Q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ri=Z.uniformsGroups;for(let Vu=0,My=ri.length;Vu<My;Vu++){const pp=ri[Vu];Ye.update(pp,fs),Ye.bind(pp,fs)}}return fs}function Ct(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Tt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,Y,$){j.get(w.texture).__webglTexture=Y,j.get(w.depthTexture).__webglTexture=$;const Z=j.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Y){const $=j.get(w);$.__webglFramebuffer=Y,$.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,$=0){A=w,L=Y,b=$;let Z=!0,Q=null,ve=!1,Te=!1;if(w){const Be=j.get(w);Be.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1):Be.__webglFramebuffer===void 0?I.setupRenderTarget(w):Be.__hasExternalTextures&&I.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);const Ue=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[Y])?Q=Ue[Y][$]:Q=Ue[Y],ve=!0):w.samples>0&&I.useMultisampledRTT(w)===!1?Q=j.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?Q=Ue[$]:Q=Ue,y.copy(w.viewport),G.copy(w.scissor),H=w.scissorTest}else y.copy(D).multiplyScalar(ne).floor(),G.copy(me).multiplyScalar(ne).floor(),H=Pe;if(P.bindFramebuffer(U.FRAMEBUFFER,Q)&&Z&&P.drawBuffers(w,Q),P.viewport(y),P.scissor(G),P.setScissorTest(H),ve){const Be=j.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,$)}else if(Te){const Be=j.get(w.texture),je=Y||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.__webglTexture,$||0,je)}O=-1},this.readRenderTargetPixels=function(w,Y,$,Z,Q,ve,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){P.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Be=w.texture,je=Be.format,Ue=Be.type;if(!R.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-Z&&$>=0&&$<=w.height-Q&&U.readPixels(Y,$,Z,Q,Re.convert(je),Re.convert(Ue),ve)}finally{const Be=A!==null?j.get(A).__webglFramebuffer:null;P.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(w,Y,$=0){const Z=Math.pow(2,-$),Q=Math.floor(Y.image.width*Z),ve=Math.floor(Y.image.height*Z);I.setTexture2D(Y,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,w.x,w.y,Q,ve),P.unbindTexture()},this.copyTextureToTexture=function(w,Y,$,Z=0){const Q=Y.image.width,ve=Y.image.height,Te=Re.convert($.format),Ce=Re.convert($.type);I.setTexture2D($,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,$.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,$.unpackAlignment),Y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Z,w.x,w.y,Q,ve,Te,Ce,Y.image.data):Y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Z,w.x,w.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Te,Y.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Z,w.x,w.y,Te,Ce,Y.image),Z===0&&$.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,$,Z,Q=0){const ve=w.max.x-w.min.x,Te=w.max.y-w.min.y,Ce=w.max.z-w.min.z,Be=Re.convert(Z.format),je=Re.convert(Z.type);let Ue;if(Z.isData3DTexture)I.setTexture3D(Z,0),Ue=U.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)I.setTexture2DArray(Z,0),Ue=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);const Oe=U.getParameter(U.UNPACK_ROW_LENGTH),dt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ht=U.getParameter(U.UNPACK_SKIP_PIXELS),ln=U.getParameter(U.UNPACK_SKIP_ROWS),yn=U.getParameter(U.UNPACK_SKIP_IMAGES),Je=$.isCompressedTexture?$.mipmaps[Q]:$.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?U.texSubImage3D(Ue,Q,Y.x,Y.y,Y.z,ve,Te,Ce,Be,je,Je.data):Z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ue,Q,Y.x,Y.y,Y.z,ve,Te,Ce,Be,Je.data):U.texSubImage3D(Ue,Q,Y.x,Y.y,Y.z,ve,Te,Ce,Be,je,Je),U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,ln),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yn),Q===0&&Z.generateMipmaps&&U.generateMipmap(Ue),P.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?I.setTextureCube(w,0):w.isData3DTexture?I.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?I.setTexture2DArray(w,0):I.setTexture2D(w,0),P.unbindTexture()},this.resetState=function(){L=0,b=0,A=null,P.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wd?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Lu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bv extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class A1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return av("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new X;class Id{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Id(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vg=new X,xg=new Et,yg=new Et,w1=new X,Mg=new it,cc=new X,Pf=new Qi,Sg=new it,Lf=new Dl;class R1 extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jp,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cc),this.boundingBox.expandByPoint(cc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cc),this.boundingSphere.expandByPoint(cc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pf.copy(this.boundingSphere),Pf.applyMatrix4(r),e.ray.intersectsSphere(Pf)!==!1&&(Sg.copy(r).invert(),Lf.copy(e.ray).applyMatrix4(Sg),!(this.boundingBox!==null&&Lf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===OE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;xg.fromBufferAttribute(r.attributes.skinIndex,e),yg.fromBufferAttribute(r.attributes.skinWeight,e),vg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=yg.getComponent(s);if(o!==0){const a=xg.getComponent(s);Mg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(w1.copy(vg).applyMatrix4(Mg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Av extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wv extends tn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Dn,u=Dn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eg=new it,C1=new it;class Dd{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:C1;Eg.multiplyMatrices(a,t[s]),Eg.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Dd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wv(t,e,e,Ai,Wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Av),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Th extends On{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mo=new it,Tg=new it,uc=[],bg=new Ji,P1=new it,Ea=new Nn,Ta=new Qi;class L1 extends Nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,P1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),bg.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(bg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),Ta.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Mo),Tg.multiplyMatrices(n,Mo),Ea.matrixWorld=Tg,Ea.raycast(e,uc);for(let o=0,a=uc.length;o<a;o++){const l=uc[o];l.instanceId=s,l.object=this,t.push(l)}uc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Th(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wv(new Float32Array(r*this.count),r,this.count,Q0,Wi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nd extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const iu=new X,ru=new X,Ag=new it,ba=new Dl,fc=new Qi,If=new X,wg=new X;class Od extends Ft{constructor(e=new Di,t=new Nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)iu.fromBufferAttribute(t,r-1),ru.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=iu.distanceTo(ru);e.setAttribute("lineDistance",new Pi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(r),fc.radius+=s,e.ray.intersectsSphere(fc)===!1)return;Ag.copy(r).invert(),ba.copy(e.ray).applyMatrix4(Ag);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),x=u.getX(g+1),v=hc(this,e,ba,l,m,x);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=hc(this,e,ba,l,g,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=hc(this,e,ba,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=hc(this,e,ba,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hc(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(iu.fromBufferAttribute(o,r),ru.fromBufferAttribute(o,s),t.distanceSqToSegment(iu,ru,If,wg)>n)return;If.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(If);if(!(l<e.near||l>e.far))return{distance:l,point:wg.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Rg=new X,Cg=new X;class Rv extends Od{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Rg.fromBufferAttribute(t,r),Cg.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rg.distanceTo(Cg);e.setAttribute("lineDistance",new Pi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I1 extends Od{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cv extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pg=new it,bh=new Dl,dc=new Qi,pc=new X;class D1 extends Ft{constructor(e=new Di,t=new Cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),dc.radius+=s,e.ray.intersectsSphere(dc)===!1)return;Pg.copy(r).invert(),bh.copy(e.ray).applyMatrix4(Pg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const p=c.getX(_);pc.fromBufferAttribute(f,p),Lg(pc,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)pc.fromBufferAttribute(f,_),Lg(pc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lg(i,e,t,n,r,s,o){const a=bh.distanceSqToPoint(i);if(a<t){const l=new X;bh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ud extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends Ud{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ig extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function mc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function N1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function O1(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Dg(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Pv(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Nl{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class U1 extends Nl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bm,endingEnd:bm}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Am:s=e,a=2*t-n;break;case wm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Am:o=e,l=2*n-t;break;case wm:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-t)/(r-t),g=_*_,p=g*_,m=-h*p+2*h*g-h*_,x=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,S=d*p-d*g;for(let L=0;L!==a;++L)s[L]=m*o[u+L]+x*o[c+L]+v*o[l+L]+S*o[f+L];return s}}class F1 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class B1 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class tr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mc(t,this.TimeBufferType),this.values=mc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mc(e.times,Array),values:mc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new B1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new F1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new U1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _l:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case rf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return rf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&N1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===rf,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let _=0;_!==n;++_){const g=t[f+_];if(g!==t[h+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=Jo;class pa extends tr{}pa.prototype.ValueTypeName="bool";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=_l;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class Lv extends tr{}Lv.prototype.ValueTypeName="color";class ta extends tr{}ta.prototype.ValueTypeName="number";class k1 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)$i.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ys extends tr{InterpolantFactoryMethodLinear(e){return new k1(this.times,this.values,this.getValueSize(),e)}}Ys.prototype.ValueTypeName="quaternion";Ys.prototype.DefaultInterpolation=Jo;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class ma extends tr{}ma.prototype.ValueTypeName="string";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=_l;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends tr{}na.prototype.ValueTypeName="vector";class z1{constructor(e="",t=-1,n=[],r=XE){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(V1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(tr.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=O1(l);l=Dg(l,1,u),c=Dg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ta(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,_,g){if(d.length!==0){const p=[],m=[];Pv(d,p,m,_),p.length!==0&&g.push(new f(h,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)d[h[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let x=0;x!==h[_].morphTargets.length;++x){const v=h[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}r.push(new ta(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(na,d+".position",h,"pos",r),n(Ys,d+".quaternion",h,"rot",r),n(na,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function H1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ta;case"vector":case"vector2":case"vector3":case"vector4":return na;case"color":return Lv;case"quaternion":return Ys;case"bool":case"boolean":return pa;case"string":return ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function V1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=H1(i.type);if(i.times===void 0){const t=[],n=[];Pv(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Vr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class G1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const W1=new G1;class ga{constructor(e){this.manager=e!==void 0?e:W1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ga.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class X1 extends Error{constructor(e,t){super(e),this.response=t}}class Iv extends ga{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:r});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ar[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){x();function x(){f.read().then(({done:v,value:S})=>{if(v)m.close();else{g+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,A=u.length;b<A;b++){const O=u[b];O.onProgress&&O.onProgress(L)}m.enqueue(S),x()}})}}});return new Response(p)}else throw new X1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Vr.add(e,c);const u=ar[e];delete ar[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ar[e];if(u===void 0)throw this.manager.itemError(e),c;delete ar[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Y1 extends ga{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=vl("img");function l(){u(),Vr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class q1 extends ga{constructor(e){super(e)}load(e,t,n,r){const s=new tn,o=new Y1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Nu extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Df=new it,Ng=new X,Og=new X;class Fd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ng),Og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Og),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j1 extends Fd{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class K1 extends Nu{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new j1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ug=new it,Aa=new X,Nf=new X;class $1 extends Fd{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Aa),Nf.copy(n.position),Nf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nf),n.updateMatrixWorld(),r.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Ug.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ug)}}class Dv extends Nu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Z1 extends Fd{constructor(){super(new Pd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nv extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ov extends Nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ka{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class J1 extends ga{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Vr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vr.add(e,l),s.manager.itemStart(e)}}const Bd="\\[\\]\\.:\\/",Q1=new RegExp("["+Bd+"]","g"),kd="[^"+Bd+"]",eC="[^"+Bd.replace("\\.","")+"]",tC=/((?:WC+[\/:])*)/.source.replace("WC",kd),nC=/(WCOD+)?/.source.replace("WCOD",eC),iC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kd),rC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kd),sC=new RegExp("^"+tC+nC+iC+rC+"$"),oC=["material","materials","bones","map"];class aC{constructor(e,t,n){const r=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q1,"")}static parseTrackName(e){const t=sC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);oC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=aC;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fg{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lC extends Rv{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Di;r.setAttribute("position",new Pi(t,3)),r.setAttribute("color",new Pi(n,3));const s=new Nd({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new $e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);function ur(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Uv(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},zd,vn,Lt,fi=1e8,bt=1/fi,Ah=Math.PI*2,cC=Ah/4,uC=0,Fv=Math.sqrt,fC=Math.cos,hC=Math.sin,rn=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},yr=function(e){return typeof e=="number"},Hd=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},kn=function(e){return e!==!1},Vd=function(){return typeof window<"u"},gc=function(e){return Bt(e)||rn(e)},Bv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,wh=/(?:-?\.?\d|\.)+/gi,kv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Po=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zv=/[+-]=-?[.\d]+/,Hv=/[^,'"\[\]\s]+/gi,dC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Ui,Rh,Gd,ii={},su={},Vv,Gv=function(e){return(su=qs(e,ii))&&Xn},Wd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xl=function(e,t){return!t&&console.warn(e)},Wv=function(e,t){return e&&(ii[e]=t)&&su&&(su[e]=t)||ii},yl=function(){return 0},pC={suppressEvents:!0,isStart:!0,kill:!1},Bc={suppressEvents:!0,kill:!1},mC={suppressEvents:!0},Xd={},Qr=[],Ch={},Xv,$n={},Uf={},Bg=30,kc=[],Yd="",qd=function(e){var t=e[0],n,r;if(Zi(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=kc.length;r--&&!kc[r].targetTest(t););n=kc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new mx(e[r],n)))||e.splice(r,1);return e},Bs=function(e){return e._gsap||qd(hi(e))[0]._gsap},Yv=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():Hd(n)&&e.getAttribute&&e.getAttribute(t)||n},zn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},zo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},gC=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ou=function(){var e=Qr.length,t=Qr.slice(0),n,r;for(Ch={},Qr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},qv=function(e,t,n,r){Qr.length&&!vn&&ou(),e.render(t,n,vn&&t<0&&(e._initted||e._startAt)),Qr.length&&!vn&&ou()},jv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hv).length<2?t:rn(e)?e.trim():e},Kv=function(e){return e},pi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_C=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},qs=function(e,t){for(var n in t)e[n]=t[n];return e},kg=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},au=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},$a=function(e){var t=e.parent||Ot,n=e.keyframes?_C(xn(e.keyframes)):pi;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vC=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},$v=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ou=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ks=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ph=function(e,t,n,r){return e._startAt&&(vn?e._startAt.revert(Bc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},yC=function i(e){return!e||e._ts&&i(e.parent)},zg=function(e){return e._repeat?ra(e._tTime,e=e.duration()+e._rDelay)*e:0},ra=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},lu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uu=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Fu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=en(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uu(e),n._dirty||ks(n,e)),e},Zv=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=lu(e.rawTime(),t),(!t._dur||Ol(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),ks(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Gi=function(e,t,n,r){return t.parent&&ss(t),t._start=en((yr(n)?n:n||e!==Ot?oi(e,n,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$v(e,t,"_first","_last",e._sort?"_start":0),Lh(t)||(e._recent=t),r||Zv(e,t),e._ts<0&&Fu(e,e._tTime),e},Jv=function(e,t){return(ii.ScrollTrigger||Wd("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},Qv=function(e,t,n,r,s){if(Kd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xv!==Jn.frame)return Qr.push(e),e._lazy=[s,r],1},MC=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Lh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},SC=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&MC(e)&&!(!e._initted&&Lh(e))||(e._ts<0||e._dp._ts<0)&&!Lh(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ol(0,e._tDur,t),u=ra(l,a),e._yoyo&&u&1&&(o=1-o),u!==ra(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||vn||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Qv(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ph(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ss(e,1),!n&&!vn&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},EC=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},sa=function(e,t,n,r){var s=e._repeat,o=en(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:en(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Fu(e,e._tTime=e._tDur*a),e.parent&&Uu(e),n||ks(e.parent,e),e},Hg=function(e){return e instanceof Pn?ks(e):sa(e,e._dur)},TC={_start:0,endTime:yl,totalDuration:yl},oi=function i(e,t,n){var r=e.labels,s=e._recent||TC,o=e.duration()>=fi?s.endTime(!1):e._dur,a,l,c;return rn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Za=function(e,t,n){var r=yr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},us=function(e,t){return e||e===0?t(e):t},Ol=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!rn(e)||!(t=dC.exec(e))?"":t[1]},bC=function(e,t,n){return us(n,function(r){return Ol(e,t,r)})},Ih=[].slice,ex=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Ui},AC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return rn(r)&&!t||ex(r,1)?(s=n).push.apply(s,hi(r)):n.push(r)})||n},hi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):rn(e)&&!n&&(Rh||!oa())?Ih.call((t||Gd).querySelectorAll(e),0):xn(e)?AC(e,n):ex(e)?Ih.call(e,0):e?[e]:[]},Dh=function(e){return e=hi(e)[0]||xl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?xl("Invalid scope")||Gd.createElement("div"):e)}},tx=function(e){return e.sort(function(){return .5-Math.random()})},nx=function(e){if(Bt(e))return e;var t=Zi(e)?e:{each:e},n=zs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return rn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,_){var g=(_||t).length,p=o[g],m,x,v,S,L,b,A,O,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,fi])[1],!T){for(A=-fi;A<(A=_[T++].getBoundingClientRect().left)&&T<g;);T<g&&T--}for(p=o[g]=[],m=l?Math.min(T,g)*u-.5:r%T,x=T===fi?0:l?g*f/T-.5:r/T|0,A=0,O=fi,b=0;b<g;b++)v=b%T-m,S=x-(b/T|0),p[b]=L=c?Math.abs(c==="y"?S:v):Fv(v*v+S*S),L>A&&(A=L),L<O&&(O=L);r==="random"&&tx(p),p.max=A-O,p.min=O,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(T>g?g-1:c?c==="y"?g/T:T:Math.max(T,g/T))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=_n(t.amount||t.each)||0,n=n&&g<0?hx(n):n}return g=(p[h]-p.min)/p.max||0,en(p.b+(n?n(g):g)*p.v)+p.u}},Nh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=en(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(yr(n)?0:_n(n))}},ix=function(e,t){var n=xn(e),r,s;return!n&&Zi(e)&&(r=n=e.radius||fi,e.values?(e=hi(e.values),(s=!yr(e[0]))&&(r*=r)):e=Nh(e.increment)),us(t,n?Bt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||yr(o)?u:u+_n(o)}:Nh(e))},rx=function(e,t,n,r){return us(xn(e)?!t:n===!0?!!(n=0):!r,function(){return xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},wC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},RC=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},CC=function(e,t,n){return ox(e,t,0,1,n)},sx=function(e,t,n){return us(n,function(r){return e[~~t(r)]})},PC=function i(e,t,n){var r=t-e;return xn(e)?sx(e,i(0,e.length),t):us(n,function(s){return(r+(s-e)%r)%r+e})},LC=function i(e,t,n){var r=t-e,s=r*2;return xn(e)?sx(e,i(0,e.length-1),t):us(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ml=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Hv:wh),n+=e.substr(t,r-t)+rx(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ox=function(e,t,n,r,s){var o=t-e,a=r-n;return us(s,function(l){return n+((l-e)/o*a||0)})},IC=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=rn(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else r||(e=qs(xn(e)?[]:{},e));if(!u){for(l in t)jd.call(a,e,l,"get",t[l]);s=function(_){return Jd(_,a)||(o?e.p:e)}}}return us(n,s)},Vg=function(e,t,n){var r=e.labels,s=fi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(e,t,n){var r=e.vars,s=r[t],o=Lt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Qr.length&&ou(),a&&(Lt=a),u=l?s.apply(c,l):s.call(c),Lt=o,u},Oa=function(e){return ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&ti(e,"onInterrupt"),e},Lo,ax=[],lx=function(e){if(e)if(e=!e.name&&e.default||e,Vd()||e.headless){var t=e.name,n=Bt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:yl,render:Jd,add:jd,kill:jC,modifier:qC,rawVars:0},o={targetTest:0,get:0,getSetter:Zd,aliases:{},register:0};if(oa(),e!==r){if($n[t])return;pi(r,pi(au(e,s),o)),qs(r.prototype,qs(s,au(e,o))),$n[r.prop=t]=r,e.targetTest&&(kc.push(r),Xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wv(t,r),e.register&&e.register(Xn,r,Hn)}else ax.push(e)},St=255,Ua={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Ff=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},cx=function(e,t,n){var r=e?yr(e)?[e>>16,e>>8&St,e&St]:0:Ua.black,s,o,a,l,c,u,f,h,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ua[e])r=Ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(wh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ff(l+1/3,s,o),r[1]=Ff(l,s,o),r[2]=Ff(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(kv),n&&r.length<4&&(r[3]=1),r}else r=e.match(wh)||Ua.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},ux=function(e){var t=[],n=[],r=-1;return e.split(es).forEach(function(s){var o=s.match(Po)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Gg=function(e,t,n){var r="",s=(e+r).match(es),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=cx(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=ux(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(es,"1").split(Po),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(es),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},es=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ua)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),DC=/hsl[a]?\(/,fx=function(e){var t=e.join(" "),n;if(es.lastIndex=0,es.test(t))return n=DC.test(t),e[1]=Gg(e[1],n),e[0]=Gg(e[0],n,ux(e[1])),!0},Sl,Jn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(p){var m=i()-r,x=p===!0,v,S,L,b;if((m>e||m<0)&&(n+=m-t),r+=m,L=r-n,v=L-o,(v>0||x)&&(b=++f.frame,h=L-f.time*1e3,f.time=L=L/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](L,h,b,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Vv&&(!Rh&&Vd()&&(Ui=Rh=window,Gd=Ui.document||{},ii.gsap=Xn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(Xn.version),Gv(su||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),ax.forEach(lx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Sl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sl=0,c=yl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,x){var v=m?function(S,L,b,A){p(S,L,b,A),f.remove(v)}:p;return f.remove(p),a[x?"unshift":"push"](v),oa(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),oa=function(){return!Sl&&Jn.wake()},ft={},NC=/^[\d.\-M][\d.\-,\s]/,OC=/["']/g,UC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(OC,"").trim():+c,r=l.substr(a+1).trim();return t},FC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},BC=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[UC(t[1])]:FC(e).split(",").map(jv)):ft._CE&&NC.test(e)?ft._CE("",e):n},hx=function(e){return function(t){return 1-e(1-t)}},dx=function i(e,t){for(var n=e._first,r;n;)n instanceof Pn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},zs=function(e,t){return e&&(Bt(e)?e:ft[e]||BC(e))||t},eo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return zn(e,function(a){ft[a]=ii[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},px=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bf=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ah*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*hC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:px(a);return s=Ah/s,l.config=function(c,u){return i(e,c,u)},l},kf=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:px(n);return r.config=function(s){return i(e,s)},r};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;eo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;eo("Elastic",Bf("in"),Bf("out"),Bf());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};eo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);eo("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});eo("Circ",function(i){return-(Fv(1-i*i)-1)});eo("Sine",function(i){return i===1?1:-fC(i*cC)+1});eo("Back",kf("in"),kf("out"),kf());ft.SteppedEase=ft.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((r*Ol(0,o,a)|0)+s)*n}}};ia.ease=ft["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Yd+=i+","+i+"Params,"});var mx=function(e,t){this.id=uC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yv,this.set=t?t.getSetter:Zd},El=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sa(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Sl||Jn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(oa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fu(this,n),!s._dp||s.parent||Zv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qv(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zg(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ra(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?lu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(Ol(-Math.abs(this._delay),this._tDur,s),r!==!1),Uu(this),xC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lu(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mC);var r=vn;return vn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Hg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(oi(this,n),kn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,kn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Bt(n)?n:Kv,a=function(){var c=r.then;r.then=null,Bt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Oa(this)},i}();pi(El.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Pn=function(i){Uv(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Ot&&Gi(n.parent||Ot,ur(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jv(ur(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Za(0,arguments,this),this},t.from=function(r,s,o){return Za(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Za(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,$a(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,oi(this,o),1),this},t.call=function(r,s,o){return Gi(this,Wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(r,o,oi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,$a(o).immediateRender=kn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,$a(a).immediateRender=kn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:en(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,_,g,p,m,x,v,S,L,b,A;if(this!==Ot&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=en(u%p),u===l?(g=this._repeat,h=c):(g=~~(u/p),g&&g===u/p&&(h=c,g--),h>c&&(h=c)),L=ra(this._tTime,p),!a&&this._tTime&&L!==g&&this._tTime-L*p-this._dur<=0&&(L=g),b&&g&1&&(h=c-h,A=1),g!==L&&!this._lock){var O=b&&L&1,T=O===(b&&g&1);if(g<L&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(A?0:en(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;dx(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=EC(this,en(a),en(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!g&&(ti(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-bt);break}}d=_}else{d=this._last;for(var y=r<0?r:h;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||vn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=y?-bt:bt);break}}d=_}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-bt)._zTime=h>=a?1:-1,this._ts))return this._start=S,Uu(this),this.render(r,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ss(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ti(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(yr(s)||(s=oi(this,s,r)),!(r instanceof El)){if(xn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(rn(r))return this.addLabel(r,s);if(Bt(r))r=Wt.delayedCall(0,r);else return this}return this!==r?Gi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return rn(r)?this.removeLabel(r):Bt(r)?this.killTweensOf(r):(Ou(this,r),r===this._recent&&(this._recent=this._last),ks(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=oi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Wt.delayedCall(0,s||yl,o);return a.data="isPause",this._hasPause=1,Gi(this,a,oi(this,r))},t.removePause=function(r){var s=this._first;for(r=oi(this,r);s;)s._start===r&&s.data==="isPause"&&ss(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Gr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=hi(r),l=this._first,c=yr(s),u;l;)l instanceof Wt?gC(l._targets,a)&&(c?(!Gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=oi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Wt.to(o,pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&sa(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,pi({startAt:{time:oi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Vg(this,oi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Vg(this,oi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ks(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ks(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=fi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;sa(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(qv(Ot,lu(r,Ot)),Xv=Jn.frame),Jn.frame>=Bg){Bg+=ni.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ni.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e}(El);pi(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var kC=function(e,t,n,r,s,o,a){var l=new Hn(this._pt,e,t,0,1,Mx,null,s),c=0,u=0,f,h,d,_,g,p,m,x;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Ml(r)),o&&(x=[n,r],o(x,e,t),n=x[0],r=x[1]),h=n.match(Of)||[];f=Of.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?zo(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Of.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(zv.test(r)||m)&&(l.e=0),this._pt=l,l},jd=function(e,t,n,r,s,o,a,l,c,u){Bt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Bt(f)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Bt(f)?c?WC:xx:$d,_;if(rn(r)&&(~r.indexOf("random(")&&(r=Ml(r)),r.charAt(1)==="="&&(_=zo(h,r)+(_n(h)||0),(_||_===0)&&(r=_))),!u||h!==r||Oh)return!isNaN(h*r)&&r!==""?(_=new Hn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?YC:yx,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Wd(t,r),kC.call(this,e,t,h,r,d,l||ni.stringFilter,c))},zC=function(e,t,n,r,s){if(Bt(e)&&(e=Ja(e,s,t,n,r)),!Zi(e)||e.style&&e.nodeType||xn(e)||Bv(e))return rn(e)?Ja(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ja(e[a],s,t,n,r);return o},gx=function(e,t,n,r,s,o){var a,l,c,u;if($n[e]&&(a=new $n[e]).init(s,a.rawVars?t[e]:zC(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Lo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Gr,Oh,Kd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!zd,S=e.timeline,L,b,A,O,T,y,G,H,F,K,re,te,ne;if(S&&(!h||!s)&&(s="none"),e._ease=zs(s,ia.ease),e._yEase=f?hx(zs(f===!0?s:f,ia.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(H=p[0]?Bs(p[0]).harness:0,te=H&&r[H.prop],L=au(r,Xd),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Bc:pC),g._lazy=0),o){if(ss(e._startAt=Wt.set(p,pi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!a&&!d)&&e._startAt.revert(Bc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),A=pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&kn(l),immediateRender:a,stagger:0,parent:m},L),te&&(A[H.prop]=te),ss(e._startAt=Wt.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Bc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&kn(l)||l&&!_,b=0;b<p.length;b++){if(T=p[b],G=T._gsap||qd(p)[b]._gsap,e._ptLookup[b]=K={},Ch[G.id]&&Qr.length&&ou(),re=x===p?b:x.indexOf(T),H&&(F=new H).init(T,te||L,e,re,x)!==!1&&(e._pt=O=new Hn(e._pt,T,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(W){K[W]=O}),F.priority&&(y=1)),!H||te)for(A in L)$n[A]&&(F=gx(A,L,e,re,T,x))?F.priority&&(y=1):K[A]=O=jd.call(e,T,A,"get",L[A],re,x,0,r.stringFilter);e._op&&e._op[b]&&e.kill(T,e._op[b]),v&&e._pt&&(Gr=e,Ot.killTweensOf(T,K,e.globalTime(t)),ne=!e.parent,Gr=0),e._pt&&l&&(Ch[G.id]=1)}y&&Sx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,h&&t<=0&&S.render(fi,!0,!0)},HC=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Oh=1,e.vars[t]="+=0",Kd(e,a),Oh=0,l?xl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=kt(n)+_n(f.e)),f.b&&(f.b=u.s+_n(f.b))},VC=function(e,t){var n=e[0]?Bs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=qs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},GC=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(xn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ja=function(e,t,n,r,s){return Bt(e)?e.call(t,n,r,s):rn(e)&&~e.indexOf("random(")?Ml(e):e},_x=Yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vx={};zn(_x+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return vx[i]=1});var Wt=function(i){Uv(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:$a(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=r.parent||Ot,v=(xn(n)||Bv(n)?yr(n[0]):"length"in r)?[n]:hi(n),S,L,b,A,O,T,y,G;if(a._targets=v.length?qd(v):xl("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||gc(c)||gc(u)){if(r=a.vars,S=a.timeline=new Pn({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),S.kill(),S.parent=S._dp=ur(a),S._start=0,h||gc(c)||gc(u)){if(A=v.length,y=h&&nx(h),Zi(h))for(O in h)~_x.indexOf(O)&&(G||(G={}),G[O]=h[O]);for(L=0;L<A;L++)b=au(r,vx),b.stagger=0,m&&(b.yoyoEase=m),G&&qs(b,G),T=v[L],b.duration=+Ja(c,ur(a),L,T,v),b.delay=(+Ja(u,ur(a),L,T,v)||0)-a._delay,!h&&A===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),S.to(T,b,y?y(L,T,v):0),S._ease=ft.none;S.duration()?c=u=0:a.timeline=0}else if(_){$a(pi(S.vars.defaults,{ease:"none"})),S._ease=zs(_.ease||r.ease||"none");var H=0,F,K,re;if(xn(_))_.forEach(function(te){return S.to(v,te,">")}),S.duration();else{b={};for(O in _)O==="ease"||O==="easeEach"||GC(O,_[O],b,_.easeEach);for(O in b)for(F=b[O].sort(function(te,ne){return te.t-ne.t}),H=0,L=0;L<F.length;L++)K=F[L],re={ease:K.e,duration:(K.t-(L?F[L-1].t:0))/100*c},re[O]=K.v,S.to(v,re,H),H+=re.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!zd&&(Gr=ur(a),Ot.killTweensOf(v),Gr=0),Gi(x,ur(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===en(x._time)&&kn(f)&&yC(ur(a))&&x.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),p&&Jv(ur(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-bt&&!u?l:r<bt?0:r,h,d,_,g,p,m,x,v,S;if(!c)SC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=en(f%g),f===l?(_=this._repeat,h=c):(_=~~(f/g),_&&_===en(f/g)&&(h=c,_--),h>c&&(h=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,h=c-h),p=ra(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=f,this;_!==p&&(v&&this._yEase&&dx(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(en(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Qv(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!a&&!s&&!_&&(ti(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ph(this,r,s,o),ti(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ph(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ss(this,1),!s&&!(u&&!a)&&(f||a||m)&&(ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Sl||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Kd(this,c),u=this._ease(c/this._dur),HC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Fu(this,0),this.parent||$v(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Gr&&Gr.vars.overwrite!==!0)._first||Oa(this),this.parent&&o!==this.timeline.totalDuration()&&sa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?hi(r):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&vC(a,l))return s==="all"&&(this._pt=0),Oa(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(g={},zn(s,function(x){return g[x]=1}),s=g),s=VC(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ou(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Oa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Za(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Za(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(El);pi(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(i){Wt[i]=function(){var e=new Pn,t=Ih.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var $d=function(e,t,n){return e[t]=n},xx=function(e,t,n){return e[t](n)},WC=function(e,t,n,r){return e[t](r.fp,n)},XC=function(e,t,n){return e.setAttribute(t,n)},Zd=function(e,t){return Bt(e[t])?xx:Hd(e[t])&&e.setAttribute?XC:$d},yx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mx=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Jd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qC=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},jC=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ou(this,t,"_pt"):t.dep||(n=1),t=r;return!n},KC=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Sx=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Hn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||yx,this.d=l||this,this.set=c||$d,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=KC,this.m=n,this.mt=s,this.tween=r},i}();zn(Yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Xd[i]=1});ii.TweenMax=ii.TweenLite=Wt;ii.TimelineLite=ii.TimelineMax=Pn;Ot=new Pn({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=fx;var Hs=[],zc={},$C=[],Wg=0,ZC=0,zf=function(e){return(zc[e]||$C).map(function(t){return t()})},Uh=function(){var e=Date.now(),t=[];e-Wg>2&&(zf("matchMediaInit"),Hs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ui.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),zf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Wg=e,zf("matchMedia"))},Ex=function(){function i(t,n){this.selector=n&&Dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZC++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Bt(n)&&(s=r,r=n,n=Bt);var o=this,a=function(){var c=Lt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Dh(s)),Lt=o,f=r.apply(o,arguments),Bt(f)&&o._r.push(f),Lt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Bt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Lt;Lt=null,n(this),Lt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Hs.length;o--;)Hs[o].id===this.id&&Hs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),JC=function(){function i(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Zi(n)||(n={matches:n});var o=new Ex(0,s||this.scope),a=o.conditions={},l,c,u;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(Hs.indexOf(o)<0&&Hs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uh):l.addEventListener("change",Uh)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),cu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return lx(r)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,r){rn(e)&&(e=hi(e)[0]);var s=Bs(e||{}).get,o=n?Kv:jv;return n==="native"&&(n=""),e&&(t?o(($n[t]&&$n[t].get||s)(e,t,n,r)):function(a,l,c){return o(($n[a]&&$n[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var r=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=$n[t],a=Bs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Lo._pt=0,f.init(e,n?u+n:u,Lo,0,[e]),f.render(1,f),Lo._pt&&Jd(1,Lo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Xn.to(e,qs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zs(e.ease,ia.ease)),kg(ia,e||{})},config:function(e){return kg(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!$n[a]&&!ii[a]&&xl(t+" effect requires "+a+" plugin.")}),Uf[t]=function(a,l,c){return n(hi(a),pi(l||{},s),c)},o&&(Pn.prototype[t]=function(a,l,c){return this.add(Uf[t](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=zs(t)},parseEase:function(e,t){return arguments.length?zs(e,t):ft},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),r,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&Gi(n,r,r._start-r._delay),r=s;return Gi(Ot,n,0),n},context:function(e,t){return e?new Ex(e,t):Lt},matchMedia:function(e){return new JC(e)},matchMediaRefresh:function(){return Hs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Uh()},addEventListener:function(e,t){var n=zc[e]||(zc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=zc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:PC,wrapYoyo:LC,distribute:nx,random:rx,snap:ix,normalize:CC,getUnit:_n,clamp:bC,splitColor:cx,toArray:hi,selector:Dh,mapRange:ox,pipe:wC,unitize:RC,interpolate:IC,shuffle:tx},install:Gv,effects:Uf,ticker:Jn,updateRoot:Pn.updateRoot,plugins:$n,globalTimeline:Ot,core:{PropTween:Hn,globals:Wv,Tween:Wt,Timeline:Pn,Animation:El,getCache:Bs,_removeLinkedListItem:Ou,reverting:function(){return vn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return zd=e}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return cu[i]=Wt[i]});Jn.add(Pn.updateRoot);Lo=cu.to({},{duration:0});var QC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},eP=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=QC(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Hf=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(rn(s)&&(l={},zn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}eP(a,s)}}}},Xn=cu.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Hf("roundProps",Nh),Hf("modifiers"),Hf("snap",ix))||cu;Wt.version=Pn.version=Xn.version="3.12.5";Vv=1;Vd()&&oa();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xg,Wr,Ho,Qd,Ds,Yg,ep,tP=function(){return typeof window<"u"},Mr={},Ts=180/Math.PI,Vo=Math.PI/180,So=Math.atan2,qg=1e8,tp=/([A-Z])/g,nP=/(left|right|width|margin|padding|x)/i,iP=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Tx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aP=function(e,t,n){return e.style[t]=n},lP=function(e,t,n){return e.style.setProperty(t,n)},cP=function(e,t,n){return e._gsap[t]=n},uP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fP=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},hP=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ut="transform",Vn=Ut+"Origin",dP=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Mr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(r,a)}):this.tfm[e]=o.x?o[e]:fr(r,e),e===Vn&&(this.tfm.zOrigin=o.zOrigin);else return Xi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Ut)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},Ax=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pP=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ep(),(!s||!s.isStart)&&!n[Ut]&&(Ax(n),r.zOrigin&&n[Vn]&&(n[Vn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wx=function(e,t){var n={target:e,props:[],revert:pP,save:dP};return e._gsap||Xn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},Rx,Bh=function(e,t){var n=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return n&&n.style?n:Wr.createElement(e)},qi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(tp,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,aa(t)||t,1)||""},jg="O,Moz,ms,Ms,Webkit".split(","),aa=function(e,t,n){var r=t||Ds,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(jg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?jg[o]:"")+e},kh=function(){tP()&&window.document&&(Xg=window,Wr=Xg.document,Ho=Wr.documentElement,Ds=Bh("div")||{style:{}},Bh("div"),Ut=aa(Ut),Vn=Ut+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rx=!!aa("perspective"),ep=Xn.core.reverting,Qd=1)},Vf=function i(e){var t=Bh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Ho.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Ho.removeChild(t),this.style.cssText=s,o},Kg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cx=function(e){var t;try{t=e.getBBox()}catch{t=Vf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Vf||(t=Vf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Kg(e,["x","cx","x1"])||0,y:+Kg(e,["y","cy","y1"])||0,width:0,height:0}:t},Px=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cx(e))},js=function(e,t){if(t){var n=e.style,r;t in Mr&&t!==Vn&&(t=Ut),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(tp,"-$1").toLowerCase())):n.removeAttribute(t)}},Xr=function(e,t,n,r,s,o){var a=new Hn(e._pt,t,n,0,1,o?bx:Tx);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},$g={deg:1,rad:1,turn:1},mP={grid:1,flex:1},os=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ds.style,l=nP.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,p,m;if(r===o||!s||$g[r]||$g[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&Px(e),(d||o==="%")&&(Mr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],kt(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Wr||!g.appendChild)&&(g=Wr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Jn.time&&!p.uncache)return kt(s/p.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,_=e[u],x?e.style[t]=x:js(e,t)}else(d||o==="%")&&!mP[qi(g,"display")]&&(a.position=qi(e,"position")),g===e&&(a.position="static"),g.appendChild(Ds),_=Ds[u],g.removeChild(Ds),a.position="absolute";return l&&d&&(p=Bs(g),p.time=Jn.time,p.width=g[u]),kt(h?_*s/f:_&&s?f/_*s:0)},fr=function(e,t,n,r){var s;return Qd||kh(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mr[t]&&t!=="transform"?(s=bl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fu(qi(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=uu[t]&&uu[t](e,t,n)||qi(e,t)||Yv(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?os(e,t,s,n)+n:s},gP=function(e,t,n,r){if(!n||n==="none"){var s=aa(t,e,1),o=s&&qi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=qi(e,"borderTopColor"))}var a=new Hn(this._pt,e.style,t,0,1,Mx),l=0,c=0,u,f,h,d,_,g,p,m,x,v,S,L;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=qi(e,t)||r,g?e.style[t]=g:js(e,t)),u=[n,r],fx(u),n=u[0],r=u[1],h=n.match(Po)||[],L=r.match(Po)||[],L.length){for(;f=Po.exec(r);)p=f[0],x=r.substring(l,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=zo(d,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=Po.lastIndex-v.length,v||(v=v||ni.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(d=os(e,t,g,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?bx:Tx;return zv.test(r)&&(a.e=0),this._pt=a,a},Zg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_P=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Zg[n]||n,t[1]=Zg[r]||r,t.join(" ")},vP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Mr[a]&&(l=1,a=a==="transformOrigin"?Vn:Ut),js(n,a);l&&(js(n,Ut),o&&(o.svg&&n.removeAttribute("transform"),bl(n,1),o.uncache=1,Ax(r)))}},uu={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Hn(e._pt,t,n,0,0,vP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Tl=[1,0,0,1,0,0],Lx={},Ix=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Jg=function(e){var t=qi(e,Ut);return Ix(t)?Tl:t.substr(7).match(kv).map(kt)},np=function(e,t){var n=e._gsap||Bs(e),r=e.style,s=Jg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tl:s):(s===Tl&&!e.offsetParent&&e!==Ho&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ho.appendChild(e)),s=Jg(e),l?r.display=l:js(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ho.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zh=function(e,t,n,r,s,o){var a=e._gsap,l=s||np(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],v=t.split(" "),S=parseFloat(v[0])||0,L=parseFloat(v[1])||0,b,A,O,T;n?l!==Tl&&(A=d*p-_*g)&&(O=S*(p/A)+L*(-g/A)+(g*x-p*m)/A,T=S*(-_/A)+L*(d/A)-(d*x-_*m)/A,S=O,L=T):(b=Cx(e),S=b.x+(~v[0].indexOf("%")?S/100*b.width:S),L=b.y+(~(v[1]||v[0]).indexOf("%")?L/100*b.height:L)),r||r!==!1&&a.smooth?(m=S-c,x=L-u,a.xOffset=f+(m*d+x*g)-m,a.yOffset=h+(m*_+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",o&&(Xr(o,a,"xOrigin",c,S),Xr(o,a,"yOrigin",u,L),Xr(o,a,"xOffset",f,a.xOffset),Xr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},bl=function(e,t){var n=e._gsap||new mx(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qi(e,Vn)||"0",u,f,h,d,_,g,p,m,x,v,S,L,b,A,O,T,y,G,H,F,K,re,te,ne,W,ue,D,me,Pe,Xe,ie,pe;return u=f=h=g=p=m=x=v=S=0,d=_=1,n.svg=!!(e.getCTM&&Px(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),r.scale=r.rotate=r.translate="none"),A=np(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",ne=""):ne=!t&&e.getAttribute("data-svg-origin"),zh(e,ne||c,!!ne||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,b=n.yOrigin||0,A!==Tl&&(G=A[0],H=A[1],F=A[2],K=A[3],u=re=A[4],f=te=A[5],A.length===6?(d=Math.sqrt(G*G+H*H),_=Math.sqrt(K*K+F*F),g=G||H?So(H,G)*Ts:0,x=F||K?So(F,K)*Ts+g:0,x&&(_*=Math.abs(Math.cos(x*Vo))),n.svg&&(u-=L-(L*G+b*F),f-=b-(L*H+b*K))):(pe=A[6],Xe=A[7],D=A[8],me=A[9],Pe=A[10],ie=A[11],u=A[12],f=A[13],h=A[14],O=So(pe,Pe),p=O*Ts,O&&(T=Math.cos(-O),y=Math.sin(-O),ne=re*T+D*y,W=te*T+me*y,ue=pe*T+Pe*y,D=re*-y+D*T,me=te*-y+me*T,Pe=pe*-y+Pe*T,ie=Xe*-y+ie*T,re=ne,te=W,pe=ue),O=So(-F,Pe),m=O*Ts,O&&(T=Math.cos(-O),y=Math.sin(-O),ne=G*T-D*y,W=H*T-me*y,ue=F*T-Pe*y,ie=K*y+ie*T,G=ne,H=W,F=ue),O=So(H,G),g=O*Ts,O&&(T=Math.cos(O),y=Math.sin(O),ne=G*T+H*y,W=re*T+te*y,H=H*T-G*y,te=te*T-re*y,G=ne,re=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=kt(Math.sqrt(G*G+H*H+F*F)),_=kt(Math.sqrt(te*te+pe*pe)),O=So(re,te),x=Math.abs(O)>2e-4?O*Ts:0,S=ie?1/(ie<0?-ie:ie):0),n.svg&&(ne=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ix(qi(e,Ut)),ne&&e.setAttribute("transform",ne))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=kt(d),n.scaleY=kt(_),n.rotation=kt(g)+a,n.rotationX=kt(p)+a,n.rotationY=kt(m)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Vn]=fu(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?yP:Rx?Dx:xP,n.uncache=0,n},fu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gf=function(e,t,n){var r=_n(t);return kt(parseFloat(t)+parseFloat(os(e,"x",n+"px",r)))+r},xP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dx(e,t)},ys="0deg",wa="0px",Ms=") ",Dx=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,v=n.zOrigin,S="",L=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==ys||u!==ys)){var b=parseFloat(u)*Vo,A=Math.sin(b),O=Math.cos(b),T;b=parseFloat(f)*Vo,T=Math.cos(b),o=Gf(x,o,A*T*-v),a=Gf(x,a,-Math.sin(b)*-v),l=Gf(x,l,O*T*-v+v)}p!==wa&&(S+="perspective("+p+Ms),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(L||o!==wa||a!==wa||l!==wa)&&(S+=l!==wa||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ms),c!==ys&&(S+="rotate("+c+Ms),u!==ys&&(S+="rotateY("+u+Ms),f!==ys&&(S+="rotateX("+f+Ms),(h!==ys||d!==ys)&&(S+="skew("+h+", "+d+Ms),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ms),x.style[Ut]=S||"translate(0, 0)"},yP=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,v=parseFloat(o),S=parseFloat(a),L,b,A,O,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vo,c*=Vo,L=Math.cos(l)*f,b=Math.sin(l)*f,A=Math.sin(l-c)*-h,O=Math.cos(l-c)*h,c&&(u*=Vo,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,O*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),L*=T,b*=T)),L=kt(L),b=kt(b),A=kt(A),O=kt(O)):(L=f,O=h,b=A=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=os(d,"x",o,"px"),S=os(d,"y",a,"px")),(_||g||p||m)&&(v=kt(v+_-(_*L+g*A)+p),S=kt(S+g-(_*b+g*O)+m)),(r||s)&&(T=d.getBBox(),v=kt(v+r/100*T.width),S=kt(S+s/100*T.height)),T="matrix("+L+","+b+","+A+","+O+","+v+","+S+")",d.setAttribute("transform",T),x&&(d.style[Ut]=T)},MP=function(e,t,n,r,s){var o=360,a=rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ts:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*qg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*qg)%o-~~(c/o)*o)),e._pt=h=new Hn(e._pt,t,n,r,c,rP),h.e=u,h.u="deg",e._props.push(n),h},Qg=function(e,t){for(var n in t)e[n]=t[n];return e},SP=function(e,t,n){var r=Qg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ut]=t,a=bl(n,1),js(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],o[Ut]=t,a=bl(n,1),o[Ut]=c);for(l in Mr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=_n(c),_=_n(u),f=d!==_?os(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Hn(e._pt,a,l,f,h-f,Fh),e._pt.u=_||0,e._props.push(l));Qg(a,r)};zn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});uu[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return fr(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var Nx={name:"css",register:kh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,x,v,S,L,b,A,O;Qd||kh(),this.styles=this.styles||wx(e),O=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!($n[g]&&gx(g,t,n,r,e,s)))){if(d=typeof u,_=uu[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ml(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",es.lastIndex=0,es.test(c)||(p=_n(c),m=_n(u)),m?p!==m&&(c=os(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),O.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],rn(c)&&~c.indexOf("random(")&&(c=Ml(c)),_n(c+"")||c==="auto"||(c+=ni.units[g]||_n(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),g in Xi&&(g==="autoAlpha"&&(h===1&&fr(e,"visibility")==="hidden"&&f&&(h=0),O.push("visibility",0,a.visibility),Xr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Mr,v){if(this.styles.save(g),S||(L=e._gsap,L.renderTransform&&!t.parseTransform||bl(e,t.parseTransform),b=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new Hn(this._pt,a,Ut,0,1,L.renderTransform,L,0,-1),S.dep=1),g==="scale")this._pt=new Hn(this._pt,L,"scaleY",L.scaleY,(x?zo(L.scaleY,x+f):f)-L.scaleY||0,Fh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){O.push(Vn,0,a[Vn]),u=_P(u),L.svg?zh(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==L.zOrigin&&Xr(this,L,"zOrigin",L.zOrigin,m),Xr(this,a,g,fu(c),fu(u)));continue}else if(g==="svgOrigin"){zh(e,u,1,b,0,this);continue}else if(g in Lx){MP(this,L,g,h,x?zo(h,x+u):u);continue}else if(g==="smoothOrigin"){Xr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){SP(this,u,e);continue}}else g in a||(g=aa(g)||g);if(v||(f||f===0)&&(h||h===0)&&!iP.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=_n(u)||(g in ni.units?ni.units[g]:p),p!==m&&(h=os(e,g,c,m)),this._pt=new Hn(this._pt,v?L:a,g,h,(x?zo(h,x+f):f)-h,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?oP:Fh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=sP);else if(g in a)gP.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){Wd(g,u);continue}v||(g in a?O.push(g,0,a[g]):O.push(g,1,c||e[g])),o.push(g)}}A&&Sx(this)},render:function(e,t){if(t.tween._time||!ep())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:Xi,getSetter:function(e,t,n){var r=Xi[t];return r&&r.indexOf(",")<0&&(t=r),t in Mr&&t!==Vn&&(e._gsap.x||fr(e,"x"))?n&&Yg===n?t==="scale"?uP:cP:(Yg=n||{})&&(t==="scale"?fP:hP):e.style&&!Hd(e.style[t])?aP:~t.indexOf("-")?lP:Zd(e,t)},core:{_removeProperty:js,_getMatrix:np}};Xn.utils.checkPrefix=aa;Xn.core.getStyleSaver=wx;(function(i,e,t,n){var r=zn(i+","+e+","+t,function(s){Mr[s]=1});zn(e,function(s){ni.units[s]="deg",Lx[s]=1}),Xi[r[13]]=i+","+e,zn(n,function(s){var o=s.split(":");Xi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ni.units[i]="px"});Xn.registerPlugin(Nx);var bs=Xn.registerPlugin(Nx)||Xn;bs.core.Tween;function EP(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function TP(i,e,t){return e&&EP(i.prototype,e),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var on,Hc,Qn,Yr,qr,Go,Ox,As,Qa,Ux,mr,vi,Fx,Bx=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},kx=1,Io=[],lt=[],ji=[],el=Date.now,Hh=function(e,t){return t},bP=function(){var e=Qa.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,lt),r.push.apply(r,ji),lt=n,ji=r,Hh=function(o,a){return t[o](a)}},ts=function(e,t){return~ji.indexOf(e)&&ji[ji.indexOf(e)+1][t]},tl=function(e){return!!~Ux.indexOf(e)},Tn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Sn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},_c="scrollLeft",vc="scrollTop",Vh=function(){return mr&&mr.isPressed||lt.cache++},hu=function(e,t){var n=function r(s){if(s||s===0){kx&&(Qn.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=r.v=Math.round(s)||(mr&&mr.iOS?1:0),e(s),r.cacheID=lt.cache,o&&Hh("ss",s)}else(t||lt.cache!==r.cacheID||Hh("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ln={s:_c,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hu(function(i){return arguments.length?Qn.scrollTo(i,Yt.sc()):Qn.pageXOffset||Yr[_c]||qr[_c]||Go[_c]||0})},Yt={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:hu(function(i){return arguments.length?Qn.scrollTo(Ln.sc(),i):Qn.pageYOffset||Yr[vc]||qr[vc]||Go[vc]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||on.utils.toArray)(e)[0]||(typeof e=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},as=function(e,t){var n=t.s,r=t.sc;tl(e)&&(e=Yr.scrollingElement||qr);var s=lt.indexOf(e),o=r===Yt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Tn(e,"scroll",Vh);var a=lt[s+o],l=a||(lt[s+o]=hu(ts(e,n),!0)||(tl(e)?r:hu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=on.getProperty(e,"scrollBehavior")==="smooth"),l},Gh=function(e,t,n){var r=e,s=e,o=el(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=el();g||p-o>l?(s=r,r=_,a=o,o=p):n?r+=_:r=s+(_-s)/(p-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(_){var g=a,p=s,m=el();return(_||_===0)&&_!==r&&u(_),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Ra=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},e_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},zx=function(){Qa=on.core.globals().ScrollTrigger,Qa&&Qa.core&&bP()},Hx=function(e){return on=e||Bx(),!Hc&&on&&typeof document<"u"&&document.body&&(Qn=window,Yr=document,qr=Yr.documentElement,Go=Yr.body,Ux=[Qn,Yr,qr,Go],on.utils.clamp,Fx=on.core.context||function(){},As="onpointerenter"in Go?"pointer":"mouse",Ox=zt.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=zt.eventTypes=("ontouchstart"in qr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in qr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kx=0},500),zx(),Hc=1),Hc};Ln.op=Yt;lt.cache=0;var zt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Hc||Hx(on)||console.warn("Please gsap.registerPlugin(Observer)"),Qa||zx();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,v=n.onPress,S=n.onRelease,L=n.onRight,b=n.onLeft,A=n.onUp,O=n.onDown,T=n.onChangeX,y=n.onChangeY,G=n.onChange,H=n.onToggleX,F=n.onToggleY,K=n.onHover,re=n.onHoverEnd,te=n.onMove,ne=n.ignoreCheck,W=n.isNormalizer,ue=n.onGestureStart,D=n.onGestureEnd,me=n.onWheel,Pe=n.onEnable,Xe=n.onDisable,ie=n.onClick,pe=n.scrollSpeed,ge=n.capture,k=n.allowClicks,fe=n.lockAxis,oe=n.onLockAxis;this.target=a=Fn(a)||qr,this.vars=n,d&&(d=on.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,pe=pe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Qn.getComputedStyle(Go).lineHeight)||22);var U,we,xe,R,P,V,j,I=this,ce=0,C=0,M=n.passive||!u,N=as(a,Ln),B=as(a,Yt),q=N(),ee=B(),ae=~o.indexOf("touch")&&!~o.indexOf("pointer")&&vi[0]==="pointerdown",le=tl(a),se=a.ownerDocument||Yr,Me=[0,0,0],he=[0,0,0],Se=0,ke=function(){return Se=el()},Ee=function(be,et){return(I.event=be)&&d&&~d.indexOf(be.target)||et&&ae&&be.pointerType!=="touch"||ne&&ne(be,et)},Re=function(){I._vx.reset(),I._vy.reset(),we.pause(),f&&f(I)},Fe=function(){var be=I.deltaX=e_(Me),et=I.deltaY=e_(he),ye=Math.abs(be)>=r,He=Math.abs(et)>=r;G&&(ye||He)&&G(I,be,et,Me,he),ye&&(L&&I.deltaX>0&&L(I),b&&I.deltaX<0&&b(I),T&&T(I),H&&I.deltaX<0!=ce<0&&H(I),ce=I.deltaX,Me[0]=Me[1]=Me[2]=0),He&&(O&&I.deltaY>0&&O(I),A&&I.deltaY<0&&A(I),y&&y(I),F&&I.deltaY<0!=C<0&&F(I),C=I.deltaY,he[0]=he[1]=he[2]=0),(R||xe)&&(te&&te(I),xe&&(x(I),xe=!1),R=!1),V&&!(V=!1)&&oe&&oe(I),P&&(me(I),P=!1),U=0},Ye=function(be,et,ye){Me[ye]+=be,he[ye]+=et,I._vx.update(be),I._vy.update(et),c?U||(U=requestAnimationFrame(Fe)):Fe()},Ve=function(be,et){fe&&!j&&(I.axis=j=Math.abs(be)>Math.abs(et)?"x":"y",V=!0),j!=="y"&&(Me[2]+=be,I._vx.update(be,!0)),j!=="x"&&(he[2]+=et,I._vy.update(et,!0)),c?U||(U=requestAnimationFrame(Fe)):Fe()},Ne=function(be){if(!Ee(be,1)){be=Ra(be,u);var et=be.clientX,ye=be.clientY,He=et-I.x,De=ye-I.y,Ge=I.isDragging;I.x=et,I.y=ye,(Ge||Math.abs(I.startX-et)>=s||Math.abs(I.startY-ye)>=s)&&(x&&(xe=!0),Ge||(I.isDragging=!0),Ve(He,De),Ge||p&&p(I))}},E=I.onPress=function(Ie){Ee(Ie,1)||Ie&&Ie.button||(I.axis=j=null,we.pause(),I.isPressed=!0,Ie=Ra(Ie),ce=C=0,I.startX=I.x=Ie.clientX,I.startY=I.y=Ie.clientY,I._vx.reset(),I._vy.reset(),Tn(W?a:se,vi[1],Ne,M,!0),I.deltaX=I.deltaY=0,v&&v(I))},z=I.onRelease=function(Ie){if(!Ee(Ie,1)){Sn(W?a:se,vi[1],Ne,!0);var be=!isNaN(I.y-I.startY),et=I.isDragging,ye=et&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),He=Ra(Ie);!ye&&be&&(I._vx.reset(),I._vy.reset(),u&&k&&on.delayedCall(.08,function(){if(el()-Se>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(se.createEvent){var De=se.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,Qn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(De)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,f&&et&&!W&&we.restart(!0),m&&et&&m(I),S&&S(I,ye)}},J=function(be){return be.touches&&be.touches.length>1&&(I.isGesturing=!0)&&ue(be,I.isDragging)},de=function(){return(I.isGesturing=!1)||D(I)},_e=function(be){if(!Ee(be)){var et=N(),ye=B();Ye((et-q)*pe,(ye-ee)*pe,1),q=et,ee=ye,f&&we.restart(!0)}},ze=function(be){if(!Ee(be)){be=Ra(be,u),me&&(P=!0);var et=(be.deltaMode===1?l:be.deltaMode===2?Qn.innerHeight:1)*_;Ye(be.deltaX*et,be.deltaY*et,0),f&&!W&&we.restart(!0)}},Ke=function(be){if(!Ee(be)){var et=be.clientX,ye=be.clientY,He=et-I.x,De=ye-I.y;I.x=et,I.y=ye,R=!0,f&&we.restart(!0),(He||De)&&Ve(He,De)}},pt=function(be){I.event=be,K(I)},Mt=function(be){I.event=be,re(I)},rt=function(be){return Ee(be)||Ra(be,u)&&ie(I)};we=I._dc=on.delayedCall(h||.25,Re).pause(),I.deltaX=I.deltaY=0,I._vx=Gh(0,50,!0),I._vy=Gh(0,50,!0),I.scrollX=N,I.scrollY=B,I.isDragging=I.isGesturing=I.isPressed=!1,Fx(this),I.enable=function(Ie){return I.isEnabled||(Tn(le?se:a,"scroll",Vh),o.indexOf("scroll")>=0&&Tn(le?se:a,"scroll",_e,M,ge),o.indexOf("wheel")>=0&&Tn(a,"wheel",ze,M,ge),(o.indexOf("touch")>=0&&Ox||o.indexOf("pointer")>=0)&&(Tn(a,vi[0],E,M,ge),Tn(se,vi[2],z),Tn(se,vi[3],z),k&&Tn(a,"click",ke,!0,!0),ie&&Tn(a,"click",rt),ue&&Tn(se,"gesturestart",J),D&&Tn(se,"gestureend",de),K&&Tn(a,As+"enter",pt),re&&Tn(a,As+"leave",Mt),te&&Tn(a,As+"move",Ke)),I.isEnabled=!0,Ie&&Ie.type&&E(Ie),Pe&&Pe(I)),I},I.disable=function(){I.isEnabled&&(Io.filter(function(Ie){return Ie!==I&&tl(Ie.target)}).length||Sn(le?se:a,"scroll",Vh),I.isPressed&&(I._vx.reset(),I._vy.reset(),Sn(W?a:se,vi[1],Ne,!0)),Sn(le?se:a,"scroll",_e,ge),Sn(a,"wheel",ze,ge),Sn(a,vi[0],E,ge),Sn(se,vi[2],z),Sn(se,vi[3],z),Sn(a,"click",ke,!0),Sn(a,"click",rt),Sn(se,"gesturestart",J),Sn(se,"gestureend",de),Sn(a,As+"enter",pt),Sn(a,As+"leave",Mt),Sn(a,As+"move",Ke),I.isEnabled=I.isPressed=I.isDragging=!1,Xe&&Xe(I))},I.kill=I.revert=function(){I.disable();var Ie=Io.indexOf(I);Ie>=0&&Io.splice(Ie,1),mr===I&&(mr=0)},Io.push(I),W&&tl(a)&&(mr=I),I.enable(g)},TP(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();zt.version="3.12.5";zt.create=function(i){return new zt(i)};zt.register=Hx;zt.getAll=function(){return Io.slice()};zt.getById=function(i){return Io.filter(function(e){return e.vars.id===i})[0]};Bx()&&on.registerPlugin(zt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le,bo,ut,Nt,Mi,wt,Vx,du,Al,nl,Fa,xc,hn,Bu,Wh,wn,t_,n_,Ao,Gx,Wf,Wx,An,Xh,Xx,Yx,Dr,Yh,ip,Wo,rp,pu,qh,Xf,yc=1,dn=Date.now,Yf=dn(),di=0,Ba=0,i_=function(e,t,n){var r=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},r_=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},AP=function i(){return Ba&&requestAnimationFrame(i)},s_=function(){return Bu=1},o_=function(){return Bu=0},Fi=function(e){return e},ka=function(e){return Math.round(e*1e5)/1e5||0},qx=function(){return typeof window<"u"},jx=function(){return Le||qx()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Ks=function(e){return!!~Vx.indexOf(e)},Kx=function(e){return(e==="Height"?rp:ut["inner"+e])||Mi["client"+e]||wt["client"+e]},$x=function(e){return ts(e,"getBoundingClientRect")||(Ks(e)?function(){return Yc.width=ut.innerWidth,Yc.height=rp,Yc}:function(){return hr(e)})},wP=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=ts(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Kx(s):e["client"+s])||0}},RP=function(e,t){return!t||~ji.indexOf(e)?$x(e):function(){return Yc}},Yi=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=ts(e,n))?o()-$x(e)()[s]:Ks(e)?(Mi[n]||wt[n])-Kx(r):e[n]-e["offset"+r])},Mc=function(e,t){for(var n=0;n<Ao.length;n+=3)(!t||~t.indexOf(Ao[n+1]))&&e(Ao[n],Ao[n+1],Ao[n+2])},Kn=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},za=function(e){return typeof e=="number"},ws=function(e){return typeof e=="object"},Ca=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Eo=Math.abs,Zx="left",Jx="top",sp="right",op="bottom",Vs="width",Gs="height",il="Right",rl="Left",sl="Top",ol="Bottom",Gt="padding",li="margin",la="Width",ap="Height",Xt="px",ci=function(e){return ut.getComputedStyle(e)},CP=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},a_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hr=function(e,t){var n=t&&ci(e)[Wh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},mu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Qx=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},PP=function(e){return function(t){return Le.utils.snap(Qx(e),t)}},lp=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},LP=function(e){return function(t,n){return lp(Qx(e))(t,n.direction)}},Sc=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Qt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Jt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ec=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},l_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tc={toggleActions:"play",anticipatePin:0},gu={top:0,left:0,center:.5,bottom:1,right:1},Vc=function(e,t){if(Kn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in gu?gu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bc=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Nt.createElement("div"),g=Ks(n)||ts(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?wt:n,x=e.indexOf("start")!==-1,v=x?c:u,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(r===Yt?sp:op)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],Gc(_,0,r,x),_},Gc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+la]=1,s["border"+a+la]=0,s[n.p]=t+"px",Le.set(e,s)},ot=[],jh={},wl,c_=function(){return dn()-di>34&&(wl||(wl=requestAnimationFrame(vr)))},To=function(){(!An||!An.isPressed||An.startX>wt.clientWidth)&&(lt.cache++,An?wl||(wl=requestAnimationFrame(vr)):vr(),di||Zs("scrollStart"),di=dn())},jf=function(){Yx=ut.innerWidth,Xx=ut.innerHeight},Ha=function(){lt.cache++,!hn&&!Wx&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Xh||Yx!==ut.innerWidth||Math.abs(ut.innerHeight-Xx)>ut.innerHeight*.25)&&du.restart(!0)},$s={},IP=[],ey=function i(){return Jt(at,"scrollEnd",i)||Ns(!0)},Zs=function(e){return $s[e]&&$s[e].map(function(t){return t()})||IP},jn=[],ty=function(e){for(var t=0;t<jn.length;t+=5)(!e||jn[t+4]&&jn[t+4].query===e)&&(jn[t].style.cssText=jn[t+1],jn[t].getBBox&&jn[t].setAttribute("transform",jn[t+2]||""),jn[t+3].uncache=1)},cp=function(e,t){var n;for(wn=0;wn<ot.length;wn++)n=ot[wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));pu=!0,t&&ty(t),t||Zs("revert")},ny=function(e,t){lt.cache++,(t||!Rn)&&lt.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(ut.history.scrollRestoration=ip=e)},Rn,Ws=0,u_,DP=function(){if(u_!==Ws){var e=u_=Ws;requestAnimationFrame(function(){return e===Ws&&Ns(!0)})}},iy=function(){wt.appendChild(Wo),rp=!An&&Wo.offsetHeight||ut.innerHeight,wt.removeChild(Wo)},f_=function(e){return Al(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ns=function(e,t){if(di&&!e&&!pu){Qt(at,"scrollEnd",ey);return}iy(),Rn=at.isRefreshing=!0,lt.forEach(function(r){return In(r)&&++r.cacheID&&(r.rec=r())});var n=Zs("refreshInit");Gx&&at.sort(),t||cp(),lt.forEach(function(r){In(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ot.slice(0).forEach(function(r){return r.refresh()}),pu=!1,ot.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),qh=1,f_(!0),ot.forEach(function(r){var s=Yi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),f_(!1),qh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){In(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ny(ip,1),du.pause(),Ws++,Rn=2,vr(2),ot.forEach(function(r){return In(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Rn=at.isRefreshing=!1,Zs("refresh")},Kh=0,Wc=1,al,vr=function(e){if(e===2||!Rn&&!pu){at.isUpdating=!0,al&&al.update(0);var t=ot.length,n=dn(),r=n-Yf>=50,s=t&&ot[0].scroll();if(Wc=Kh>s?-1:1,Rn||(Kh=s),r&&(di&&!Bu&&n-di>200&&(di=0,Zs("scrollEnd")),Fa=Yf,Yf=n),Wc<0){for(wn=t;wn-- >0;)ot[wn]&&ot[wn].update(0,r);Wc=1}else for(wn=0;wn<t;wn++)ot[wn]&&ot[wn].update(0,r);at.isUpdating=!1}wl=0},$h=[Zx,Jx,op,sp,li+ol,li+il,li+sl,li+rl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xc=$h.concat([Vs,Gs,"boxSizing","max"+la,"max"+ap,"position",li,Gt,Gt+sl,Gt+il,Gt+ol,Gt+rl]),NP=function(e,t,n){Xo(n);var r=e._gsap;if(r.spacerIsNative)Xo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Kf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=$h.length,o=t.style,a=e.style,l;s--;)l=$h[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[op]=a[sp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vs]=mu(e,Ln)+Xt,o[Gs]=mu(e,Yt)+Xt,o[Gt]=a[li]=a[Jx]=a[Zx]="0",Xo(r),a[Vs]=a["max"+la]=n[Vs],a[Gs]=a["max"+ap]=n[Gs],a[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},OP=/([A-Z])/g,Xo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(OP,"-$1").toLowerCase())}},Ac=function(e){for(var t=Xc.length,n=e.style,r=[],s=0;s<t;s++)r.push(Xc[s],n[Xc[s]]);return r.t=e,r},UP=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Yc={left:0,top:0},h_=function(e,t,n,r,s,o,a,l,c,u,f,h,d,_){In(e)&&(e=e(l)),Kn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Vc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),za(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Gc(a,n,r,!0);else{In(t)&&(t=t(l));var v=(e||"0").split(" "),S,L,b,A;x=Fn(t,l)||wt,S=hr(x)||{},(!S||!S.left&&!S.top)&&ci(x).display==="none"&&(A=x.style.display,x.style.display="block",S=hr(x),A?x.style.display=A:x.style.removeProperty("display")),L=Vc(v[0],S[r.d]),b=Vc(v[1]||"0",n),e=S[r.p]-c[r.p]-u+L+s-b,a&&Gc(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var O=e+n,T=o._isStart;p="scroll"+r.d2,Gc(o,O,r,T&&O>20||!T&&(f?Math.max(wt[p],Mi[p]):o.parentNode[p])<=O+1),f&&(c=hr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+Xt))}return d&&x&&(p=hr(x),d.seek(h),m=hr(x),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},FP=/(webkit|moz|length|cssText|inset)/i,d_=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=ci(e);for(o in a)!+o&&!FP.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},ry=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},wc=function(e,t,n){var r={};r[t.p]="+="+n,Le.set(e,r)},p_=function(e,t){var n=as(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=ry(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&vr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Le.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",n.wheelHandler),at.isTouch&&Qt(e,"touchmove",n.wheelHandler),s},at=function(){function i(t,n){bo||i.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ba){this.update=this.refresh=this.kill=Fi;return}n=a_(Kn(n)||za(n)||n.nodeType?{trigger:n}:n,Tc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,v=s.once,S=s.snap,L=s.pinReparent,b=s.pinSpacer,A=s.containerAnimation,O=s.fastScrollEnd,T=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:Yt,G=!f&&f!==0,H=Fn(n.scroller||ut),F=Le.core.getCache(H),K=Ks(H),re=("pinType"in n?n.pinType:ts(H,"pinType")||K&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],ne=G&&n.toggleActions.split(" "),W="markers"in n?n.markers:Tc.markers,ue=K?0:parseFloat(ci(H)["border"+y.p2+la])||0,D=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Pe=wP(H,K,y),Xe=RP(H,K),ie=0,pe=0,ge=0,k=as(H,y),fe,oe,U,we,xe,R,P,V,j,I,ce,C,M,N,B,q,ee,ae,le,se,Me,he,Se,ke,Ee,Re,Fe,Ye,Ve,Ne,E,z,J,de,_e,ze,Ke,pt,Mt;if(D._startClamp=D._endClamp=!1,D._dir=y,p*=45,D.scroller=H,D.scroll=A?A.time.bind(A):k,we=k(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(Gx=1,n.refreshPriority===-9999&&(al=D)),F.tweenScroll=F.tweenScroll||{top:p_(H,Yt),left:p_(H,Ln)},D.tweenTo=fe=F.tweenScroll[y.p],D.scrubDuration=function(ye){J=za(ye)&&ye,J?z?z.duration(ye):z=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:J,paused:!0,onComplete:function(){return m&&m(D)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(f),Ne=0,l||(l=r.vars.id)),S&&((!ws(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in wt.style&&Le.set(K?[wt,Mi]:H,{scrollBehavior:"auto"}),lt.forEach(function(ye){return In(ye)&&ye.target===(K?Nt.scrollingElement||Mi:H)&&(ye.smooth=!1)}),U=In(S.snapTo)?S.snapTo:S.snapTo==="labels"?PP(r):S.snapTo==="labelsDirectional"?LP(r):S.directional!==!1?function(ye,He){return lp(S.snapTo)(ye,dn()-pe<500?0:He.direction)}:Le.utils.snap(S.snapTo),de=S.duration||{min:.1,max:2},de=ws(de)?nl(de.min,de.max):nl(de,de),_e=Le.delayedCall(S.delay||J/2||.1,function(){var ye=k(),He=dn()-pe<500,De=fe.tween;if((He||Math.abs(D.getVelocity())<10)&&!De&&!Bu&&ie!==ye){var Ge=(ye-R)/N,Dt=r&&!G?r.totalProgress():Ge,st=He?0:(Dt-E)/(dn()-Fa)*1e3||0,Rt=Le.utils.clamp(-Ge,1-Ge,Eo(st/2)*st/.185),$t=Ge+(S.inertia===!1?0:Rt),Ct,Tt,w=S,Y=w.onStart,$=w.onInterrupt,Z=w.onComplete;if(Ct=U($t,D),za(Ct)||(Ct=$t),Tt=Math.round(R+Ct*N),ye<=P&&ye>=R&&Tt!==ye){if(De&&!De._initted&&De.data<=Eo(Tt-ye))return;S.inertia===!1&&(Rt=Ct-Ge),fe(Tt,{duration:de(Eo(Math.max(Eo($t-Dt),Eo(Ct-Dt))*.185/st/.05||0)),ease:S.ease||"power3",data:Eo(Tt-ye),onInterrupt:function(){return _e.restart(!0)&&$&&$(D)},onComplete:function(){D.update(),ie=k(),r&&(z?z.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),Ne=E=r&&!G?r.totalProgress():D.progress,x&&x(D),Z&&Z(D)}},ye,Rt*N,Tt-ye-Rt*N),Y&&Y(D,fe.tween)}}else D.isActive&&ie!==ye&&_e.restart(!0)}).pause()),l&&(jh[l]=D),h=D.trigger=Fn(h||d!==!0&&d),Mt=h&&h._gsap&&h._gsap.stRevert,Mt&&(Mt=Mt(D)),d=d===!0?h:Fn(d),Kn(a)&&(a={targets:h,className:a}),d&&(_===!1||_===li||(_=!_&&d.parentNode&&d.parentNode.style&&ci(d.parentNode).display==="flex"?!1:Gt),D.pin=d,oe=Le.core.getCache(d),oe.spacer?B=oe.pinState:(b&&(b=Fn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),oe.spacerIsNative=!!b,b&&(oe.spacerState=Ac(b))),oe.spacer=ae=b||Nt.createElement("div"),ae.classList.add("pin-spacer"),l&&ae.classList.add("pin-spacer-"+l),oe.pinState=B=Ac(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),D.spacer=ae=oe.spacer,Ve=ci(d),ke=Ve[_+y.os2],se=Le.getProperty(d),Me=Le.quickSetter(d,y.a,Xt),Kf(d,ae,Ve),ee=Ac(d)),W){C=ws(W)?a_(W,l_):l_,I=bc("scroller-start",l,H,y,C,0),ce=bc("scroller-end",l,H,y,C,0,I),le=I["offset"+y.op.d2];var rt=Fn(ts(H,"content")||H);V=this.markerStart=bc("start",l,rt,y,C,le,0,A),j=this.markerEnd=bc("end",l,rt,y,C,le,0,A),A&&(pt=Le.quickSetter([V,j],y.a,Xt)),!re&&!(ji.length&&ts(H,"fixedMarkers")===!0)&&(CP(K?wt:H),Le.set([I,ce],{force3D:!0}),Re=Le.quickSetter(I,y.a,Xt),Ye=Le.quickSetter(ce,y.a,Xt))}if(A){var Ie=A.vars.onUpdate,be=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Ie&&Ie.apply(A,be||[])})}if(D.previous=function(){return ot[ot.indexOf(D)-1]},D.next=function(){return ot[ot.indexOf(D)+1]},D.revert=function(ye,He){if(!He)return D.kill(!0);var De=ye!==!1||!D.enabled,Ge=hn;De!==D.isReverted&&(De&&(ze=Math.max(k(),D.scroll.rec||0),ge=D.progress,Ke=r&&r.progress()),V&&[V,j,I,ce].forEach(function(Dt){return Dt.style.display=De?"none":"block"}),De&&(hn=D,D.update(De)),d&&(!L||!D.isActive)&&(De?NP(d,ae,B):Kf(d,ae,ci(d),Ee)),De||D.update(De),hn=Ge,D.isReverted=De)},D.refresh=function(ye,He,De,Ge){if(!((hn||!D.enabled)&&!He)){if(d&&ye&&di){Qt(i,"scrollEnd",ey);return}!Rn&&me&&me(D),hn=D,fe.tween&&!De&&(fe.tween.kill(),fe.tween=0),z&&z.pause(),g&&r&&r.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Dt=Pe(),st=Xe(),Rt=A?A.duration():Yi(H,y),$t=N<=.01,Ct=0,Tt=Ge||0,w=ws(De)?De.end:n.end,Y=n.endTrigger||h,$=ws(De)?De.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Z=D.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,D),Q=h&&Math.max(0,ot.indexOf(D))||0,ve=Q,Te,Ce,Be,je,Ue,Oe,dt,Ht,ln,yn,Je,qe,Ni;for(W&&ws(De)&&(qe=Le.getProperty(I,y.p),Ni=Le.getProperty(ce,y.p));ve--;)Oe=ot[ve],Oe.end||Oe.refresh(0,1)||(hn=D),dt=Oe.pin,dt&&(dt===h||dt===d||dt===Z)&&!Oe.isReverted&&(yn||(yn=[]),yn.unshift(Oe),Oe.revert(!0,!0)),Oe!==ot[ve]&&(Q--,ve--);for(In($)&&($=$(D)),$=i_($,"start",D),R=h_($,h,Dt,y,k(),V,I,D,st,ue,re,Rt,A,D._startClamp&&"_startClamp")||(d?-.001:0),In(w)&&(w=w(D)),Kn(w)&&!w.indexOf("+=")&&(~w.indexOf(" ")?w=(Kn($)?$.split(" ")[0]:"")+w:(Ct=Vc(w.substr(2),Dt),w=Kn($)?$:(A?Le.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,R):R)+Ct,Y=h)),w=i_(w,"end",D),P=Math.max(R,h_(w||(Y?"100% 0":Rt),Y,Dt,y,k()+Ct,j,ce,D,st,ue,re,Rt,A,D._endClamp&&"_endClamp"))||-.001,Ct=0,ve=Q;ve--;)Oe=ot[ve],dt=Oe.pin,dt&&Oe.start-Oe._pinPush<=R&&!A&&Oe.end>0&&(Te=Oe.end-(D._startClamp?Math.max(0,Oe.start):Oe.start),(dt===h&&Oe.start-Oe._pinPush<R||dt===Z)&&isNaN($)&&(Ct+=Te*(1-Oe.progress)),dt===d&&(Tt+=Te));if(R+=Ct,P+=Ct,D._startClamp&&(D._startClamp+=Ct),D._endClamp&&!Rn&&(D._endClamp=P||-.001,P=Math.min(P,Yi(H,y))),N=P-R||(R-=.01)&&.001,$t&&(ge=Le.utils.clamp(0,1,Le.utils.normalize(R,P,ze))),D._pinPush=Tt,V&&Ct&&(Te={},Te[y.a]="+="+Ct,Z&&(Te[y.p]="-="+k()),Le.set([V,j],Te)),d&&!(qh&&D.end>=Yi(H,y)))Te=ci(d),je=y===Yt,Be=k(),he=parseFloat(se(y.a))+Tt,!Rt&&P>1&&(Je=(K?Nt.scrollingElement||Mi:H).style,Je={style:Je,value:Je["overflow"+y.a.toUpperCase()]},K&&ci(wt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Je.style["overflow"+y.a.toUpperCase()]="scroll")),Kf(d,ae,Te),ee=Ac(d),Ce=hr(d,!0),Ht=re&&as(H,je?Ln:Yt)(),_?(Ee=[_+y.os2,N+Tt+Xt],Ee.t=ae,ve=_===Gt?mu(d,y)+N+Tt:0,ve&&(Ee.push(y.d,ve+Xt),ae.style.flexBasis!=="auto"&&(ae.style.flexBasis=ve+Xt)),Xo(Ee),Z&&ot.forEach(function(mt){mt.pin===Z&&mt.vars.pinSpacing!==!1&&(mt._subPinOffset=!0)}),re&&k(ze)):(ve=mu(d,y),ve&&ae.style.flexBasis!=="auto"&&(ae.style.flexBasis=ve+Xt)),re&&(Ue={top:Ce.top+(je?Be-R:Ht)+Xt,left:Ce.left+(je?Ht:Be-R)+Xt,boxSizing:"border-box",position:"fixed"},Ue[Vs]=Ue["max"+la]=Math.ceil(Ce.width)+Xt,Ue[Gs]=Ue["max"+ap]=Math.ceil(Ce.height)+Xt,Ue[li]=Ue[li+sl]=Ue[li+il]=Ue[li+ol]=Ue[li+rl]="0",Ue[Gt]=Te[Gt],Ue[Gt+sl]=Te[Gt+sl],Ue[Gt+il]=Te[Gt+il],Ue[Gt+ol]=Te[Gt+ol],Ue[Gt+rl]=Te[Gt+rl],q=UP(B,Ue,L),Rn&&k(0)),r?(ln=r._initted,Wf(1),r.render(r.duration(),!0,!0),Se=se(y.a)-he+N+Tt,Fe=Math.abs(N-Se)>1,re&&Fe&&q.splice(q.length-2,2),r.render(0,!0,!0),ln||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Wf(0)):Se=N,Je&&(Je.value?Je.style["overflow"+y.a.toUpperCase()]=Je.value:Je.style.removeProperty("overflow-"+y.a));else if(h&&k()&&!A)for(Ce=h.parentNode;Ce&&Ce!==wt;)Ce._pinOffset&&(R-=Ce._pinOffset,P-=Ce._pinOffset),Ce=Ce.parentNode;yn&&yn.forEach(function(mt){return mt.revert(!1,!0)}),D.start=R,D.end=P,we=xe=Rn?ze:k(),!A&&!Rn&&(we<ze&&k(ze),D.scroll.rec=0),D.revert(!1,!0),pe=dn(),_e&&(ie=-1,_e.restart(!0)),hn=0,r&&G&&(r._initted||Ke)&&r.progress()!==Ke&&r.progress(Ke||0,!0).render(r.time(),!0,!0),($t||ge!==D.progress||A||g)&&(r&&!G&&r.totalProgress(A&&R<-.001&&!ge?Le.utils.normalize(R,P,0):ge,!0),D.progress=$t||(we-R)/N===ge?0:ge),d&&_&&(ae._pinOffset=Math.round(D.progress*Se)),z&&z.invalidate(),isNaN(qe)||(qe-=Le.getProperty(I,y.p),Ni-=Le.getProperty(ce,y.p),wc(I,y,qe),wc(V,y,qe-(Ge||0)),wc(ce,y,Ni),wc(j,y,Ni-(Ge||0))),$t&&!Rn&&D.update(),u&&!Rn&&!M&&(M=!0,u(D),M=!1)}},D.getVelocity=function(){return(k()-xe)/(dn()-Fa)*1e3||0},D.endAnimation=function(){Ca(D.callbackAnimation),r&&(z?z.progress(1):r.paused()?G||Ca(r,D.direction<0,1):Ca(r,r.reversed()))},D.labelToScroll=function(ye){return r&&r.labels&&(R||D.refresh()||R)+r.labels[ye]/r.duration()*N||0},D.getTrailing=function(ye){var He=ot.indexOf(D),De=D.direction>0?ot.slice(0,He).reverse():ot.slice(He+1);return(Kn(ye)?De.filter(function(Ge){return Ge.vars.preventOverlaps===ye}):De).filter(function(Ge){return D.direction>0?Ge.end<=R:Ge.start>=P})},D.update=function(ye,He,De){if(!(A&&!De&&!ye)){var Ge=Rn===!0?ze:D.scroll(),Dt=ye?0:(Ge-R)/N,st=Dt<0?0:Dt>1?1:Dt||0,Rt=D.progress,$t,Ct,Tt,w,Y,$,Z,Q;if(He&&(xe=we,we=A?k():Ge,S&&(E=Ne,Ne=r&&!G?r.totalProgress():st)),p&&d&&!hn&&!yc&&di&&(!st&&R<Ge+(Ge-xe)/(dn()-Fa)*p?st=1e-4:st===1&&P>Ge+(Ge-xe)/(dn()-Fa)*p&&(st=.9999)),st!==Rt&&D.enabled){if($t=D.isActive=!!st&&st<1,Ct=!!Rt&&Rt<1,$=$t!==Ct,Y=$||!!st!=!!Rt,D.direction=st>Rt?1:-1,D.progress=st,Y&&!hn&&(Tt=st&&!Rt?0:st===1?1:Rt===1?2:3,G&&(w=!$&&ne[Tt+1]!=="none"&&ne[Tt+1]||ne[Tt],Q=r&&(w==="complete"||w==="reset"||w in r))),T&&($||Q)&&(Q||f||!r)&&(In(T)?T(D):D.getTrailing(T).forEach(function(Be){return Be.endAnimation()})),G||(z&&!hn&&!yc?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",st,r._tTime/r._tDur):(z.vars.totalProgress=st,z.invalidate().restart())):r&&r.totalProgress(st,!!(hn&&(pe||ye)))),d){if(ye&&_&&(ae.style[_+y.os2]=ke),!re)Me(ka(he+Se*st));else if(Y){if(Z=!ye&&st>Rt&&P+1>Ge&&Ge+1>=Yi(H,y),L)if(!ye&&($t||Z)){var ve=hr(d,!0),Te=Ge-R;d_(d,wt,ve.top+(y===Yt?Te:0)+Xt,ve.left+(y===Yt?0:Te)+Xt)}else d_(d,ae);Xo($t||Z?q:ee),Fe&&st<1&&$t||Me(he+(st===1&&!Z?Se:0))}}S&&!fe.tween&&!hn&&!yc&&_e.restart(!0),a&&($||v&&st&&(st<1||!Xf))&&Al(a.targets).forEach(function(Be){return Be.classList[$t||v?"add":"remove"](a.className)}),o&&!G&&!ye&&o(D),Y&&!hn?(G&&(Q&&(w==="complete"?r.pause().totalProgress(1):w==="reset"?r.restart(!0).pause():w==="restart"?r.restart(!0):r[w]()),o&&o(D)),($||!Xf)&&(c&&$&&qf(D,c),te[Tt]&&qf(D,te[Tt]),v&&(st===1?D.kill(!1,1):te[Tt]=0),$||(Tt=st===1?1:3,te[Tt]&&qf(D,te[Tt]))),O&&!$t&&Math.abs(D.getVelocity())>(za(O)?O:2500)&&(Ca(D.callbackAnimation),z?z.progress(1):Ca(r,w==="reverse"?1:!st,1))):G&&o&&!hn&&o(D)}if(Ye){var Ce=A?Ge/A.duration()*(A._caScrollDist||0):Ge;Re(Ce+(I._isFlipped?1:0)),Ye(Ce)}pt&&pt(-Ge/A.duration()*(A._caScrollDist||0))}},D.enable=function(ye,He){D.enabled||(D.enabled=!0,Qt(H,"resize",Ha),K||Qt(H,"scroll",To),me&&Qt(i,"refreshInit",me),ye!==!1&&(D.progress=ge=0,we=xe=ie=k()),He!==!1&&D.refresh())},D.getTween=function(ye){return ye&&fe?fe.tween:z},D.setPositions=function(ye,He,De,Ge){if(A){var Dt=A.scrollTrigger,st=A.duration(),Rt=Dt.end-Dt.start;ye=Dt.start+Rt*ye/st,He=Dt.start+Rt*He/st}D.refresh(!1,!1,{start:r_(ye,De&&!!D._startClamp),end:r_(He,De&&!!D._endClamp)},Ge),D.update()},D.adjustPinSpacing=function(ye){if(Ee&&ye){var He=Ee.indexOf(y.d)+1;Ee[He]=parseFloat(Ee[He])+ye+Xt,Ee[1]=parseFloat(Ee[1])+ye+Xt,Xo(Ee)}},D.disable=function(ye,He){if(D.enabled&&(ye!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,He||z&&z.pause(),ze=0,oe&&(oe.uncache=1),me&&Jt(i,"refreshInit",me),_e&&(_e.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!K)){for(var De=ot.length;De--;)if(ot[De].scroller===H&&ot[De]!==D)return;Jt(H,"resize",Ha),K||Jt(H,"scroll",To)}},D.kill=function(ye,He){D.disable(ye,He),z&&!He&&z.kill(),l&&delete jh[l];var De=ot.indexOf(D);De>=0&&ot.splice(De,1),De===wn&&Wc>0&&wn--,De=0,ot.forEach(function(Ge){return Ge.scroller===D.scroller&&(De=1)}),De||Rn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,ye&&r.revert({kill:!1}),He||r.kill()),V&&[V,j,I,ce].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),al===D&&(al=0),d&&(oe&&(oe.uncache=1),De=0,ot.forEach(function(Ge){return Ge.pin===d&&De++}),De||(oe.spacer=0)),n.onKill&&n.onKill(D)},ot.push(D),D.enable(!1,!1),Mt&&Mt(D),r&&r.add&&!N){var et=D.update;D.update=function(){D.update=et,R||P||D.refresh()},Le.delayedCall(.01,D.update),N=.01,R=P=0}else D.refresh();d&&DP()},i.register=function(n){return bo||(Le=n||jx(),qx()&&window.document&&i.enable(),bo=Ba),bo},i.defaults=function(n){if(n)for(var r in n)Tc[r]=n[r];return Tc},i.disable=function(n,r){Ba=0,ot.forEach(function(o){return o[r?"kill":"disable"](n)}),Jt(ut,"wheel",To),Jt(Nt,"scroll",To),clearInterval(xc),Jt(Nt,"touchcancel",Fi),Jt(wt,"touchstart",Fi),Sc(Jt,Nt,"pointerdown,touchstart,mousedown",s_),Sc(Jt,Nt,"pointerup,touchend,mouseup",o_),du.kill(),Mc(Jt);for(var s=0;s<lt.length;s+=3)Ec(Jt,lt[s],lt[s+1]),Ec(Jt,lt[s],lt[s+2])},i.enable=function(){if(ut=window,Nt=document,Mi=Nt.documentElement,wt=Nt.body,Le&&(Al=Le.utils.toArray,nl=Le.utils.clamp,Yh=Le.core.context||Fi,Wf=Le.core.suppressOverwrites||Fi,ip=ut.history.scrollRestoration||"auto",Kh=ut.pageYOffset,Le.core.globals("ScrollTrigger",i),wt)){Ba=1,Wo=document.createElement("div"),Wo.style.height="100vh",Wo.style.position="absolute",iy(),AP(),zt.register(Le),i.isTouch=zt.isTouch,Dr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xh=zt.isTouch===1,Qt(ut,"wheel",To),Vx=[ut,Nt,Mi,wt],Le.matchMedia?(i.matchMedia=function(l){var c=Le.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Le.addEventListener("matchMediaInit",function(){return cp()}),Le.addEventListener("matchMediaRevert",function(){return ty()}),Le.addEventListener("matchMedia",function(){Ns(0,1),Zs("matchMedia")}),Le.matchMedia("(orientation: portrait)",function(){return jf(),jf})):console.warn("Requires GSAP 3.11.0 or later"),jf(),Qt(Nt,"scroll",To);var n=wt.style,r=n.borderTopStyle,s=Le.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=hr(wt),Yt.m=Math.round(o.top+Yt.sc())||0,Ln.m=Math.round(o.left+Ln.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),xc=setInterval(c_,250),Le.delayedCall(.5,function(){return yc=0}),Qt(Nt,"touchcancel",Fi),Qt(wt,"touchstart",Fi),Sc(Qt,Nt,"pointerdown,touchstart,mousedown",s_),Sc(Qt,Nt,"pointerup,touchend,mouseup",o_),Wh=Le.utils.checkPrefix("transform"),Xc.push(Wh),bo=dn(),du=Le.delayedCall(.2,Ns).pause(),Ao=[Nt,"visibilitychange",function(){var l=ut.innerWidth,c=ut.innerHeight;Nt.hidden?(t_=l,n_=c):(t_!==l||n_!==c)&&Ha()},Nt,"DOMContentLoaded",Ns,ut,"load",Ns,ut,"resize",Ha],Mc(Qt),ot.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)Ec(Jt,lt[a],lt[a+1]),Ec(Jt,lt[a],lt[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Xf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(xc)||(xc=r)&&setInterval(c_,r),"ignoreMobileResize"in n&&(Xh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Mc(Jt)||Mc(Qt,n.autoRefreshEvents||"none"),Wx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Fn(n),o=lt.indexOf(s),a=Ks(s);~o&&lt.splice(o,a?6:2),r&&(a?ji.unshift(ut,r,wt,r,Mi,r):ji.unshift(s,r))},i.clearMatchMedia=function(n){ot.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Kn(n)?Fn(n):n).getBoundingClientRect(),a=o[s?Vs:Gs]*r||0;return s?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},i.positionInViewport=function(n,r,s){Kn(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?Vs:Gs],l=r==null?a/2:r in gu?gu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},i.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=$s.killAll||[];$s={},r.forEach(function(s){return s()})}},i}();at.version="3.12.5";at.saveStyles=function(i){return i?Al(i).forEach(function(e){if(e&&e.style){var t=jn.indexOf(e);t>=0&&jn.splice(t,5),jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Yh())}}):jn};at.revert=function(i,e){return cp(!i,e)};at.create=function(i,e){return new at(i,e)};at.refresh=function(i){return i?Ha():(bo||at.register())&&Ns(!0)};at.update=function(i){return++lt.cache&&vr(i===!0?2:0)};at.clearScrollMemory=ny;at.maxScroll=function(i,e){return Yi(i,e?Ln:Yt)};at.getScrollFunc=function(i,e){return as(Fn(i),e?Ln:Yt)};at.getById=function(i){return jh[i]};at.getAll=function(){return ot.filter(function(i){return i.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!di};at.snapDirectional=lp;at.addEventListener=function(i,e){var t=$s[i]||($s[i]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(i,e){var t=$s[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Le.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),Qt(at,"refresh",function(){return s=e.batchMax()})),Al(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var m_=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},$f=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===Mi&&i(wt,t)},Rc={auto:1,scroll:1},BP=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Rc[(l=ci(s)).overflowY]||Rc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ks(s)&&(Rc[(l=ci(s)).overflowY]||Rc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sy=function(e,t,n,r){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&BP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Qt(Nt,zt.eventTypes[0],__,!1,!0)},onDisable:function(){return Jt(Nt,zt.eventTypes[0],__,!0)}})},kP=/(input|label|select|textarea)/i,g_,__=function(e){var t=kP.test(e.target.tagName);(t||g_)&&(e._gsapAllow=!0,g_=t)},zP=function(e){ws(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Fn(e.target)||Mi,u=Le.core.globals().ScrollSmoother,f=u&&u.get(),h=Dr&&(e.content&&Fn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=as(c,Yt),_=as(c,Ln),g=1,p=(zt.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,m=0,x=In(r)?function(){return r(a)}:function(){return r||2.8},v,S,L=sy(c,e.type,!0,s),b=function(){return S=!1},A=Fi,O=Fi,T=function(){l=Yi(c,Yt),O=nl(Dr?1:0,l),n&&(A=nl(0,Yi(c,Ln))),v=Ws},y=function(){h._gsap.y=ka(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},G=function(){if(S){requestAnimationFrame(b);var W=ka(a.deltaY/2),ue=O(d.v-W);if(h&&ue!==d.v+d.offset){d.offset=ue-d.v;var D=ka((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=lt.cache,vr()}return!0}d.offset&&y(),S=!0},H,F,K,re,te=function(){T(),H.isActive()&&H.vars.scrollY>l&&(d()>l?H.progress(1)&&d(l):H.resetTo("scrollY",l))};return h&&Le.set(h,{y:"+=0"}),e.ignoreCheck=function(ne){return Dr&&ne.type==="touchmove"&&G()||g>1.05&&ne.type!=="touchstart"||a.isGesturing||ne.touches&&ne.touches.length>1},e.onPress=function(){S=!1;var ne=g;g=ka((ut.visualViewport&&ut.visualViewport.scale||1)/p),H.pause(),ne!==g&&$f(c,g>1.01?!0:n?!1:"x"),F=_(),K=d(),T(),v=Ws},e.onRelease=e.onGestureStart=function(ne,W){if(d.offset&&y(),!W)re.restart(!0);else{lt.cache++;var ue=x(),D,me;n&&(D=_(),me=D+ue*.05*-ne.velocityX/.227,ue*=m_(_,D,me,Yi(c,Ln)),H.vars.scrollX=A(me)),D=d(),me=D+ue*.05*-ne.velocityY/.227,ue*=m_(d,D,me,Yi(c,Yt)),H.vars.scrollY=O(me),H.invalidate().duration(ue).play(.01),(Dr&&H.vars.scrollY>=l||D>=l-1)&&Le.to({},{onUpdate:te,duration:ue})}o&&o(ne)},e.onWheel=function(){H._ts&&H.pause(),dn()-m>1e3&&(v=0,m=dn())},e.onChange=function(ne,W,ue,D,me){if(Ws!==v&&T(),W&&n&&_(A(D[2]===W?F+(ne.startX-ne.x):_()+W-D[1])),ue){d.offset&&y();var Pe=me[2]===ue,Xe=Pe?K+ne.startY-ne.y:d()+ue-me[1],ie=O(Xe);Pe&&Xe!==ie&&(K+=ie-Xe),d(ie)}(ue||W)&&vr()},e.onEnable=function(){$f(c,n?!1:"x"),at.addEventListener("refresh",te),Qt(ut,"resize",te),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),L.enable()},e.onDisable=function(){$f(c,!0),Jt(ut,"resize",te),at.removeEventListener("refresh",te),L.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=Dr,Dr&&!d()&&d(1),Dr&&Le.ticker.add(Fi),re=a._dc,H=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ry(d,d(),function(){return H.pause()})},onUpdate:vr,onComplete:re.vars.onComplete}),a};at.sort=function(i){return ot.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};at.observe=function(i){return new zt(i)};at.normalizeScroll=function(i){if(typeof i>"u")return An;if(i===!0&&An)return An.enable();if(i===!1){An&&An.kill(),An=i;return}var e=i instanceof zt?i:zP(i);return An&&An.target===e.target&&An.kill(),Ks(e.target)&&(An=e),e};at.core={_getVelocityProp:Gh,_inputObserver:sy,_scrollers:lt,_proxies:ji,bridge:{ss:function(){di||Zs("scrollStart"),di=dn()},ref:function(){return hn}}};jx()&&Le.registerPlugin(at);const HP=i=>(pM("data-v-58bc858e"),i=i(),mM(),i),VP={class:"app-content"},GP=HP(()=>Pl("div",{class:"canvas"},null,-1)),WP={},XP=Object.assign(WP,{__name:"gsap-模型动画",setup(i){vd(()=>{at.killAll()}),_d(()=>{var n=new bv;const r=new lC(2e3);n.add(r);var s=new ha(100,100,100),o=new Ig({color:"white"});o.transparent=!0,o.opacity=.7;var a=new Nn(s,o),l=new Ig({color:"blue"}),c=new Nn(s,l);n.add(a,c);var u=new Dv("white");u.position.set(300,500,300),n.add(u),new Ov("red");var f=window.innerWidth,h=window.innerHeight,d=f/h,_=2e3,g=new pn(90,d,.1,_);g.position.set(300,300,1e3),g.lookAt(n.position);var p=new Tv({antialias:!0});p.setSize(f,h),p.setClearColor("white",0),document.querySelector(".canvas").appendChild(p.domElement),p.render(n,g),t({mesh:a}),e({mesh:c});function m(){p.render(n,g),requestAnimationFrame(m)}m()});const e=({mesh:n})=>{const r=document.querySelectorAll("h1")[29],s=document.querySelectorAll("h1")[39];bs.to(r,{x:100,duration:1,color:"red",scrollTrigger:{trigger:r,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}}),bs.to(n.position,{z:300,duration:1,scrollTrigger:{trigger:r,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}}),bs.to(s,{x:100,duration:1,color:"red",scrollTrigger:{trigger:s,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}}),bs.to(n.position,{y:300,duration:1,scrollTrigger:{trigger:s,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}})},t=({mesh:n})=>{bs.registerPlugin(at);const r=bs.timeline();r.to(n.rotation,{x:Math.PI*2,duration:1}).to(n.position,{x:200,duration:1},"-=1").to(n.rotation,{y:Math.PI*2,duration:1}).to(n.position,{y:200,duration:1},"-=1"),at.create({trigger:".app-content",animation:r,start:"top top",scrub:!0,markers:!0,onUpdate:s=>{console.log(s.progress)}})};return(n,r)=>(Fs(),Uo("div",VP,[GP,(Fs(),Uo(yi,null,w0(70,s=>Pl("h1",{key:s},K_(s)+".three + gsap",1)),64))]))}}),YP=Ed(XP,[["__scopeId","data-v-58bc858e"]]),qP=Object.freeze(Object.defineProperty({__proto__:null,default:YP},Symbol.toStringTag,{value:"Module"}));function v_(i,e){if(e===YE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Mh||e===iv){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Mh)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class jP extends ga{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new QP(t)}),this.register(function(t){return new eL(t)}),this.register(function(t){return new cL(t)}),this.register(function(t){return new uL(t)}),this.register(function(t){return new fL(t)}),this.register(function(t){return new nL(t)}),this.register(function(t){return new iL(t)}),this.register(function(t){return new rL(t)}),this.register(function(t){return new sL(t)}),this.register(function(t){return new JP(t)}),this.register(function(t){return new oL(t)}),this.register(function(t){return new tL(t)}),this.register(function(t){return new lL(t)}),this.register(function(t){return new aL(t)}),this.register(function(t){return new $P(t)}),this.register(function(t){return new hL(t)}),this.register(function(t){return new dL(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ka.extractUrlBase(e);o=Ka.resolveURL(c,this.path)}else o=Ka.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Iv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===oy){try{o[ct.KHR_BINARY_GLTF]=new pL(e)}catch(f){r&&r(f);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wL(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case ct.KHR_MATERIALS_UNLIT:o[f]=new ZP;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[f]=new mL(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[f]=new gL;break;case ct.KHR_MESH_QUANTIZATION:o[f]=new _L;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function KP(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $P{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Nv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dv(u),c.distance=f;break;case"spot":c=new K1(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Br(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ZP{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Ls}extendParams(e,t,n){const r=[];e.color=new $e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Cn))}return Promise.all(r)}}class JP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class QP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(s)}}class eL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class tL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class nL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Cn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class iL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class rL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],an),Promise.all(s)}}class sL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class oL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Cn)),Promise.all(s)}}class aL{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class lL{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class cL{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class uL{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fL{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hL{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class dL{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const _ of f){const g=new it,p=new X,m=new $i,x=new X(1,1,1),v=new L1(_.geometry,_.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,g.compose(p,m,x));for(const S in l)if(S==="_COLOR_0"){const L=l[S];v.instanceColor=new Th(L.array,L.itemSize,L.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);Ft.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const oy="glTF",Pa=12,x_={JSON:1313821514,BIN:5130562};class pL{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==oy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Pa,s=new DataView(e,Pa);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===x_.JSON){const c=new Uint8Array(e,Pa+o,a);this.content=n.decode(c)}else if(l===x_.BIN){const c=Pa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Zh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Zh[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Yo[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}f(d)},a,c,an,h)})})}}class gL{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _L{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class ay extends Nl{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,_=e*c,g=_-c,p=-2*d+3*h,m=d-h,x=1-p,v=m-h+f;for(let S=0;S!==a;S++){const L=o[g+S+a],b=o[g+S+l]*u,A=o[_+S+a],O=o[_+S]*u;s[S]=x*L+v*b+p*A+m*O}return s}}const vL=new $i;class xL extends ay{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return vL.fromArray(s).normalize().toArray(s),s}}const ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y_={9728:Dn,9729:Zn,9984:j0,9985:Uc,9986:Da,9987:dr},M_={33071:Hr,33648:Jc,10497:$o},Zf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yL={CUBICSPLINE:void 0,LINEAR:Jo,STEP:_l},Jf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ML(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ud({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xr})),i.DefaultMaterial}function Ss(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Br(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SL(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function EL(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TL(i){let e;const t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qf(t.attributes):e=i.indices+":"+Qf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Qf(i.targets[n]);return e}function Qf(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Jh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bL(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const AL=new it;class wL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new KP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new q1(this.options.manager):this.textureLoader=new J1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Iv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Ss(s,a,r),Br(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Ka.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Zf[r.type],a=Yo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new On(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Zf[r.type],c=Yo[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let g,p;if(d&&d!==f){const m=Math.floor(h/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let v=t.cache.get(x);v||(g=new c(a,m*d,r.count*d/u),v=new A1(g,d/u),t.cache.add(x,v)),p=new Id(v,l,h%d/u,_)}else a===null?g=new c(r.count*l):g=new c(a,h,r.count*l),p=new On(g,l,_);if(r.sparse!==void 0){const m=Zf.SCALAR,x=Yo[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,L=new x(o[1],v,r.sparse.count*m),b=new c(o[2],S,r.sparse.count*l);a!==null&&(p=new On(p.array.slice(),p.itemSize,p.normalized));for(let A=0,O=L.length;A<O;A++){const T=L[A];if(p.setX(T,b[A*l]),l>=2&&p.setY(T,b[A*l+1]),l>=3&&p.setZ(T,b[A*l+2]),l>=4&&p.setW(T,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=y_[h.magFilter]||Zn,u.minFilter=y_[h.minFilter]||dr,u.wrapS=M_[h.wrapS]||$o,u.wrapT=M_[h.wrapT]||$o,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const p=new tn(g);p.needsUpdate=!0,h(p)}),t.load(Ka.resolveURL(f,s.path),_,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||bL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cv,Ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nd,Ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ud}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const f=r[ct.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],an),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Cn)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Hi);const u=s.alphaMode||Jf.OPAQUE;if(u===Jf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Jf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ls&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new We(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ls&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ls){const f=s.emissiveFactor;a.emissive=new $e().setRGB(f[0],f[1],f[2],an)}return s.emissiveTexture!==void 0&&o!==Ls&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Cn)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Br(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ss(r,f,s),f})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return S_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=TL(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=S_(new Di,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ML(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const x=c[d];if(p.mode===ai.TRIANGLES||p.mode===ai.TRIANGLE_STRIP||p.mode===ai.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new R1(g,x):new Nn(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ai.TRIANGLE_STRIP?m.geometry=v_(m.geometry,iv):p.mode===ai.TRIANGLE_FAN&&(m.geometry=v_(m.geometry,Mh));else if(p.mode===ai.LINES)m=new Rv(g,x);else if(p.mode===ai.LINE_STRIP)m=new Od(g,x);else if(p.mode===ai.LINE_LOOP)m=new I1(g,x);else if(p.mode===ai.POINTS)m=new D1(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&EL(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Br(m,s),p.extensions&&Ss(r,m,p),t.assignFinalMaterial(m),f.push(m)}for(let d=0,_=f.length;d<_;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Ss(r,f[0],s),f[0];const h=new Is;s.extensions&&Ss(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,_=f.length;d<_;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(sv.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Pd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Br(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new it;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dd(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],_=r.samplers[d.sampler],g=d.target,p=g.node,m=r.parameters!==void 0?r.parameters[_.input]:_.input,x=r.parameters!==void 0?r.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],_=f[2],g=f[3],p=f[4],m=[];for(let x=0,v=h.length;x<v;x++){const S=h[x],L=d[x],b=_[x],A=g[x],O=p[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const T=n._createAnimationTracks(S,L,b,A,O);if(T)for(let y=0;y<T.length;y++)m.push(T[y])}return new z1(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,AL)});for(let d=0,_=f.length;d<_;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Av:c.length>1?u=new Is:c.length===1?u=c[0]:u=new Ft,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Br(u,s),s.extensions&&Ss(n,u,s),s.matrix!==void 0){const f=new it;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Is;n.name&&(s.name=r.createUniqueName(n.name)),Br(s,n),n.extensions&&Ss(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof Ci||h instanceof tn)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Lr[s.path]===Lr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Lr[s.path]){case Lr.weights:c=ta;break;case Lr.rotation:c=Ys;break;case Lr.position:case Lr.scale:c=na;break;default:switch(n.itemSize){case 1:c=ta;break;case 2:case 3:default:c=na;break}break}const u=r.interpolation!==void 0?yL[r.interpolation]:Jo,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const _=new c(l[h]+"."+Lr[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Jh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Ys?xL:ay;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RL(i,e,t){const n=e.attributes,r=new Ji;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),a.normalized){const u=Jh(Yo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new X,l=new X;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,_=h.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),h.normalized){const g=Jh(Yo[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Qi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function S_(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Zh[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return gt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Br(i,e),RL(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?SL(i,e.targets,t):i})}const E_={type:"change"},eh={type:"start"},T_={type:"end"},Cc=new Dl,b_=new Fr,CL=Math.cos(70*sv.DEG2RAD);class PL extends Qs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Me),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(E_),n.update(),s=r.NONE},this.update=function(){const E=new X,z=new $i().setFromUnitVectors(e.up,new X(0,1,0)),J=z.clone().invert(),de=new X,_e=new $i,ze=new X,Ke=2*Math.PI;return function(Mt=null){const rt=n.object.position;E.copy(rt).sub(n.target),E.applyQuaternion(z),a.setFromVector3(E),n.autoRotate&&s===r.NONE&&H(y(Mt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=n.minAzimuthAngle,be=n.maxAzimuthAngle;isFinite(Ie)&&isFinite(be)&&(Ie<-Math.PI?Ie+=Ke:Ie>Math.PI&&(Ie-=Ke),be<-Math.PI?be+=Ke:be>Math.PI&&(be-=Ke),Ie<=be?a.theta=Math.max(Ie,Math.min(be,a.theta)):a.theta=a.theta>(Ie+be)/2?Math.max(Ie,a.theta):Math.min(be,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let et=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=D(a.radius);else{const ye=a.radius;a.radius=D(a.radius*c),et=ye!=a.radius}if(E.setFromSpherical(a),E.applyQuaternion(J),rt.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&b){let ye=null;if(n.object.isPerspectiveCamera){const He=E.length();ye=D(He*c);const De=He-ye;n.object.position.addScaledVector(S,De),n.object.updateMatrixWorld(),et=!!De}else if(n.object.isOrthographicCamera){const He=new X(L.x,L.y,0);He.unproject(n.object);const De=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),et=De!==n.object.zoom;const Ge=new X(L.x,L.y,0);Ge.unproject(n.object),n.object.position.sub(Ge).add(He),n.object.updateMatrixWorld(),ye=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ye).add(n.object.position):(Cc.origin.copy(n.object.position),Cc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Cc.direction))<CL?e.lookAt(n.target):(b_.setFromNormalAndCoplanarPoint(n.object.up,n.target),Cc.intersectPlane(b_,n.target))))}else if(n.object.isOrthographicCamera){const ye=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ye!==n.object.zoom&&(n.object.updateProjectionMatrix(),et=!0)}return c=1,b=!1,et||de.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o||ze.distanceToSquared(n.target)>o?(n.dispatchEvent(E_),de.copy(n.object.position),_e.copy(n.object.quaternion),ze.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",N),n.domElement.getRootNode().removeEventListener("keydown",le,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Me),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Fg,l=new Fg;let c=1;const u=new X,f=new We,h=new We,d=new We,_=new We,g=new We,p=new We,m=new We,x=new We,v=new We,S=new X,L=new We;let b=!1;const A=[],O={};let T=!1;function y(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function G(E){const z=Math.abs(E*.01);return Math.pow(.95,n.zoomSpeed*z)}function H(E){l.theta-=E}function F(E){l.phi-=E}const K=function(){const E=new X;return function(J,de){E.setFromMatrixColumn(de,0),E.multiplyScalar(-J),u.add(E)}}(),re=function(){const E=new X;return function(J,de){n.screenSpacePanning===!0?E.setFromMatrixColumn(de,1):(E.setFromMatrixColumn(de,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(J),u.add(E)}}(),te=function(){const E=new X;return function(J,de){const _e=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;E.copy(ze).sub(n.target);let Ke=E.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),K(2*J*Ke/_e.clientHeight,n.object.matrix),re(2*de*Ke/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(J*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),re(de*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ne(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(E,z){if(!n.zoomToCursor)return;b=!0;const J=n.domElement.getBoundingClientRect(),de=E-J.left,_e=z-J.top,ze=J.width,Ke=J.height;L.x=de/ze*2-1,L.y=-(_e/Ke)*2+1,S.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function D(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function me(E){f.set(E.clientX,E.clientY)}function Pe(E){ue(E.clientX,E.clientX),m.set(E.clientX,E.clientY)}function Xe(E){_.set(E.clientX,E.clientY)}function ie(E){h.set(E.clientX,E.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const z=n.domElement;H(2*Math.PI*d.x/z.clientHeight),F(2*Math.PI*d.y/z.clientHeight),f.copy(h),n.update()}function pe(E){x.set(E.clientX,E.clientY),v.subVectors(x,m),v.y>0?ne(G(v.y)):v.y<0&&W(G(v.y)),m.copy(x),n.update()}function ge(E){g.set(E.clientX,E.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),te(p.x,p.y),_.copy(g),n.update()}function k(E){ue(E.clientX,E.clientY),E.deltaY<0?W(G(E.deltaY)):E.deltaY>0&&ne(G(E.deltaY)),n.update()}function fe(E){let z=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(-n.keyPanSpeed,0),z=!0;break}z&&(E.preventDefault(),n.update())}function oe(E){if(A.length===1)f.set(E.pageX,E.pageY);else{const z=Ve(E),J=.5*(E.pageX+z.x),de=.5*(E.pageY+z.y);f.set(J,de)}}function U(E){if(A.length===1)_.set(E.pageX,E.pageY);else{const z=Ve(E),J=.5*(E.pageX+z.x),de=.5*(E.pageY+z.y);_.set(J,de)}}function we(E){const z=Ve(E),J=E.pageX-z.x,de=E.pageY-z.y,_e=Math.sqrt(J*J+de*de);m.set(0,_e)}function xe(E){n.enableZoom&&we(E),n.enablePan&&U(E)}function R(E){n.enableZoom&&we(E),n.enableRotate&&oe(E)}function P(E){if(A.length==1)h.set(E.pageX,E.pageY);else{const J=Ve(E),de=.5*(E.pageX+J.x),_e=.5*(E.pageY+J.y);h.set(de,_e)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const z=n.domElement;H(2*Math.PI*d.x/z.clientHeight),F(2*Math.PI*d.y/z.clientHeight),f.copy(h)}function V(E){if(A.length===1)g.set(E.pageX,E.pageY);else{const z=Ve(E),J=.5*(E.pageX+z.x),de=.5*(E.pageY+z.y);g.set(J,de)}p.subVectors(g,_).multiplyScalar(n.panSpeed),te(p.x,p.y),_.copy(g)}function j(E){const z=Ve(E),J=E.pageX-z.x,de=E.pageY-z.y,_e=Math.sqrt(J*J+de*de);x.set(0,_e),v.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),ne(v.y),m.copy(x);const ze=(E.pageX+z.x)*.5,Ke=(E.pageY+z.y)*.5;ue(ze,Ke)}function I(E){n.enableZoom&&j(E),n.enablePan&&V(E)}function ce(E){n.enableZoom&&j(E),n.enableRotate&&P(E)}function C(E){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",N)),!Fe(E)&&(Ee(E),E.pointerType==="touch"?he(E):B(E)))}function M(E){n.enabled!==!1&&(E.pointerType==="touch"?Se(E):q(E))}function N(E){switch(Re(E),A.length){case 0:n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",N),n.dispatchEvent(T_),s=r.NONE;break;case 1:const z=A[0],J=O[z];he({pointerId:z,pageX:J.x,pageY:J.y});break}}function B(E){let z;switch(E.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case to.DOLLY:if(n.enableZoom===!1)return;Pe(E),s=r.DOLLY;break;case to.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;Xe(E),s=r.PAN}else{if(n.enableRotate===!1)return;me(E),s=r.ROTATE}break;case to.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;me(E),s=r.ROTATE}else{if(n.enablePan===!1)return;Xe(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(eh)}function q(E){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ie(E);break;case r.DOLLY:if(n.enableZoom===!1)return;pe(E);break;case r.PAN:if(n.enablePan===!1)return;ge(E);break}}function ee(E){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(E.preventDefault(),n.dispatchEvent(eh),k(ae(E)),n.dispatchEvent(T_))}function ae(E){const z=E.deltaMode,J={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(z){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return E.ctrlKey&&!T&&(J.deltaY*=10),J}function le(E){E.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",se,{passive:!0,capture:!0}))}function se(E){E.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",se,{passive:!0,capture:!0}))}function Me(E){n.enabled===!1||n.enablePan===!1||fe(E)}function he(E){switch(Ye(E),A.length){case 1:switch(n.touches.ONE){case no.ROTATE:if(n.enableRotate===!1)return;oe(E),s=r.TOUCH_ROTATE;break;case no.PAN:if(n.enablePan===!1)return;U(E),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case no.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(E),s=r.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(E),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(eh)}function Se(E){switch(Ye(E),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;P(E),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;V(E),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(E),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(E),n.update();break;default:s=r.NONE}}function ke(E){n.enabled!==!1&&E.preventDefault()}function Ee(E){A.push(E.pointerId)}function Re(E){delete O[E.pointerId];for(let z=0;z<A.length;z++)if(A[z]==E.pointerId){A.splice(z,1);return}}function Fe(E){for(let z=0;z<A.length;z++)if(A[z]==E.pointerId)return!0;return!1}function Ye(E){let z=O[E.pointerId];z===void 0&&(z=new We,O[E.pointerId]=z),z.set(E.pageX,E.pageY)}function Ve(E){const z=E.pointerId===A[0]?A[1]:A[0];return O[z]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const LL={class:"canvas"},IL={__name:"外部模型导入",setup(i){const e=new bv,t={width:window.innerWidth,height:window.innerHeight};_d(()=>{n()});function n(){new jP().load("/gltf/eric_tripod_table_lamp_white.glb",f=>{const h=f.scene,_=new Ji().setFromObject(h).getCenter(new X);h.position.sub(_),e.add(h)});const s=new Ov(16777215,1);e.add(s);const o=new Nv(16777215,1.8);o.position.set(100,100,100),e.add(o);const a=new pn(75,t.width/t.height,.1,1e3);a.position.z=100,e.add(a);var l=new Tv({antialias:!0});l.setSize(t.width,t.height),l.setClearColor("white"),document.querySelector(".canvas").appendChild(l.domElement),l.render(e,a);const c=new PL(a,l.domElement);c.enableDamping=!0,c.minDistance=10,c.maxDistance=100;function u(){c.update(),l.render(e,a),requestAnimationFrame(u)}u(),window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,a.aspect=t.width/t.height,a.updateProjectionMatrix(),l.setSize(t.width,t.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2))})}return(r,s)=>(Fs(),Uo("div",LL))}},DL=Ed(IL,[["__scopeId","data-v-15caaa2f"]]),NL=Object.freeze(Object.defineProperty({__proto__:null,default:DL},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wo=typeof document<"u";function OL(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const vt=Object.assign;function th(i,e){const t={};for(const n in e){const r=e[n];t[n]=Ii(r)?r.map(i):i(r)}return t}const ll=()=>{},Ii=Array.isArray,ly=/#/g,UL=/&/g,FL=/\//g,BL=/=/g,kL=/\?/g,cy=/\+/g,zL=/%5B/g,HL=/%5D/g,uy=/%5E/g,VL=/%60/g,fy=/%7B/g,GL=/%7C/g,hy=/%7D/g,WL=/%20/g;function up(i){return encodeURI(""+i).replace(GL,"|").replace(zL,"[").replace(HL,"]")}function XL(i){return up(i).replace(fy,"{").replace(hy,"}").replace(uy,"^")}function Qh(i){return up(i).replace(cy,"%2B").replace(WL,"+").replace(ly,"%23").replace(UL,"%26").replace(VL,"`").replace(fy,"{").replace(hy,"}").replace(uy,"^")}function YL(i){return Qh(i).replace(BL,"%3D")}function qL(i){return up(i).replace(ly,"%23").replace(kL,"%3F")}function jL(i){return i==null?"":qL(i).replace(FL,"%2F")}function Rl(i){try{return decodeURIComponent(""+i)}catch{}return""+i}const KL=/\/$/,$L=i=>i.replace(KL,"");function nh(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=eI(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:Rl(o)}}function ZL(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function A_(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function JL(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&ca(e.matched[n],t.matched[r])&&dy(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function ca(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function dy(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!QL(i[t],e[t]))return!1;return!0}function QL(i,e){return Ii(i)?w_(i,e):Ii(e)?w_(e,i):i===e}function w_(i,e){return Ii(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function eI(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o).join("/")}var Cl;(function(i){i.pop="pop",i.push="push"})(Cl||(Cl={}));var cl;(function(i){i.back="back",i.forward="forward",i.unknown=""})(cl||(cl={}));function tI(i){if(!i)if(wo){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),$L(i)}const nI=/^[^#]+#/;function iI(i,e){return i.replace(nI,"#")+e}function rI(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const ku=()=>({left:window.scrollX,top:window.scrollY});function sI(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=rI(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function R_(i,e){return(history.state?history.state.position-e:-1)+i}const ed=new Map;function oI(i,e){ed.set(i,e)}function aI(i){const e=ed.get(i);return ed.delete(i),e}let lI=()=>location.protocol+"//"+location.host;function py(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),A_(l,"")}return A_(t,i)+n+r}function cI(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const d=py(i,location),_=t.value,g=e.value;let p=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}p=g?h.position-g.position:0}else n(d);r.forEach(m=>{m(t.value,_,{delta:p,type:Cl.pop,direction:p?p>0?cl.forward:cl.back:cl.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(vt({},h.state,{scroll:ku()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function C_(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?ku():null}}function uI(i){const{history:e,location:t}=window,n={value:py(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:lI()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=vt({},e.state,C_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=vt({},r.value,e.state,{forward:l,scroll:ku()});s(u.current,u,!0);const f=vt({},C_(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function fI(i){i=tI(i);const e=uI(i),t=cI(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=vt({location:"",base:i,go:n,createHref:iI.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hI(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),fI(i)}function dI(i){return typeof i=="string"||i&&typeof i=="object"}function my(i){return typeof i=="string"||typeof i=="symbol"}const Ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gy=Symbol("");var P_;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(P_||(P_={}));function ua(i,e){return vt(new Error,{type:i,[gy]:!0},e)}function lr(i,e){return i instanceof Error&&gy in i&&(e==null||!!(i.type&e))}const L_="[^/]+?",pI={sensitive:!1,strict:!1,start:!0,end:!0},mI=/[.+*?^${}()[\]/\\]/g;function gI(i,e){const t=vt({},pI,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(mI,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:g,optional:p,regexp:m}=h;s.push({name:_,repeatable:g,optional:p});const x=m||L_;if(x!==L_){d+=10;try{new RegExp(`(${x})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+S.message)}}let v=g?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(v=p&&c.length<2?`(?:/${v})`:"/"+v),p&&(v+="?"),r+=v,d+=20,p&&(d+=-8),g&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:g,optional:p}=d,m=_ in c?c[_]:"";if(Ii(m)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=Ii(m)?m.join("/"):m;if(!x)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function _I(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vI(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=_I(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(I_(n))return 1;if(I_(r))return-1}return r.length-n.length}function I_(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const xI={type:0,value:""},yI=/[a-zA-Z0-9_]/;function MI(i){if(!i)return[[]];if(i==="/")return[[xI]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:yI.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function SI(i,e,t){const n=gI(MI(i.path),t),r=vt(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function EI(i,e){const t=[],n=new Map;e=O_({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,f,h){const d=!h,_=TI(u);_.aliasOf=h&&h.record;const g=O_(e,u),p=[_];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of v)p.push(vt({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_}))}let m,x;for(const v of p){const{path:S}=v;if(f&&S[0]!=="/"){const L=f.record.path,b=L[L.length-1]==="/"?"":"/";v.path=f.record.path+(S&&b+S)}if(m=SI(v,f,g),h?h.alias.push(m):(x=x||m,x!==m&&x.alias.push(m),d&&u.name&&!N_(m)&&o(u.name)),_.children){const L=_.children;for(let b=0;b<L.length;b++)s(L[b],m,h&&h.children[b])}h=h||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&l(m)}return x?()=>{o(x)}:ll}function o(u){if(my(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&vI(u,t[f])>=0&&(u.record.path!==t[f].record.path||!_y(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!N_(u)&&n.set(u.record.name,u)}function c(u,f){let h,d={},_,g;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw ua(1,{location:u});g=h.record.name,d=vt(D_(f.params,h.keys.filter(x=>!x.optional).concat(h.parent?h.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&D_(u.params,h.keys.map(x=>x.name))),_=h.stringify(d)}else if(u.path!=null)_=u.path,h=t.find(x=>x.re.test(_)),h&&(d=h.parse(_),g=h.record.name);else{if(h=f.name?n.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw ua(1,{location:u,currentLocation:f});g=h.record.name,d=vt({},f.params,u.params),_=h.stringify(d)}const p=[];let m=h;for(;m;)p.unshift(m.record),m=m.parent;return{name:g,path:_,params:d,matched:p,meta:AI(p)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function D_(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function TI(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:bI(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function bI(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function N_(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function AI(i){return i.reduce((e,t)=>vt(e,t.meta),{})}function O_(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function _y(i,e){return e.children.some(t=>t===i||_y(i,t))}function wI(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(cy," "),o=s.indexOf("="),a=Rl(o<0?s:s.slice(0,o)),l=o<0?null:Rl(s.slice(o+1));if(a in e){let c=e[a];Ii(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function U_(i){let e="";for(let t in i){const n=i[t];if(t=YL(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ii(n)?n.map(s=>s&&Qh(s)):[n&&Qh(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function RI(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Ii(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const CI=Symbol(""),F_=Symbol(""),fp=Symbol(""),vy=Symbol(""),td=Symbol("");function La(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function kr(i,e,t,n,r,s=o=>o()){const o=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(ua(4,{from:t,to:e})):h instanceof Error?l(h):dI(h)?l(ua(2,{from:e,to:h})):(o&&n.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>i.call(n&&n.instances[r],e,t,c));let f=Promise.resolve(u);i.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function ih(i,e,t,n,r=s=>s()){const s=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(PI(l)){const u=(l.__vccOpts||l)[e];u&&s.push(kr(u,t,n,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=OL(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&kr(d,t,n,o,a,r)()}))}}return s}function PI(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function B_(i){const e=_r(fp),t=_r(vy),n=Si(()=>{const l=Kr(i.to);return e.resolve(l)}),r=Si(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ca.bind(null,u));if(h>-1)return h;const d=k_(l[c-2]);return c>1&&k_(u)===d&&f[f.length-1].path!==d?f.findIndex(ca.bind(null,l[c-2])):h}),s=Si(()=>r.value>-1&&DI(t.params,n.value.params)),o=Si(()=>r.value>-1&&r.value===t.matched.length-1&&dy(t.params,n.value.params));function a(l={}){return II(l)?e[Kr(i.replace)?"replace":"push"](Kr(i.to)).catch(ll):Promise.resolve()}return{route:n,href:Si(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const LI=T0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:B_,setup(i,{slots:e}){const t=Su(B_(i)),{options:n}=_r(fp),r=Si(()=>({[z_(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[z_(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:X0("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),xy=LI;function II(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function DI(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Ii(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function k_(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const z_=(i,e,t)=>i??e??t,NI=T0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=_r(td),r=Si(()=>i.route||n.value),s=_r(F_,0),o=Si(()=>{let c=Kr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Si(()=>r.value.matched[o.value]);Dc(F_,Si(()=>o.value+1)),Dc(CI,a),Dc(td,r);const l=rM();return Lc(()=>[l.value,a.value,i.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ca(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return H_(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=X0(h,vt({},_,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return H_(t.default,{Component:p,route:c})||p}}});function H_(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const OI=NI;function UI(i){const e=EI(i.routes,i),t=i.parseQuery||wI,n=i.stringifyQuery||U_,r=i.history,s=La(),o=La(),a=La(),l=sM(Ir);let c=Ir;wo&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=th.bind(null,k=>""+k),f=th.bind(null,jL),h=th.bind(null,Rl);function d(k,fe){let oe,U;return my(k)?(oe=e.getRecordMatcher(k),U=fe):U=k,e.addRoute(U,oe)}function _(k){const fe=e.getRecordMatcher(k);fe&&e.removeRoute(fe)}function g(){return e.getRoutes().map(k=>k.record)}function p(k){return!!e.getRecordMatcher(k)}function m(k,fe){if(fe=vt({},fe||l.value),typeof k=="string"){const P=nh(t,k,fe.path),V=e.resolve({path:P.path},fe),j=r.createHref(P.fullPath);return vt(P,V,{params:h(V.params),hash:Rl(P.hash),redirectedFrom:void 0,href:j})}let oe;if(k.path!=null)oe=vt({},k,{path:nh(t,k.path,fe.path).path});else{const P=vt({},k.params);for(const V in P)P[V]==null&&delete P[V];oe=vt({},k,{params:f(P)}),fe.params=f(fe.params)}const U=e.resolve(oe,fe),we=k.hash||"";U.params=u(h(U.params));const xe=ZL(n,vt({},k,{hash:XL(we),path:U.path})),R=r.createHref(xe);return vt({fullPath:xe,hash:we,query:n===U_?RI(k.query):k.query||{}},U,{redirectedFrom:void 0,href:R})}function x(k){return typeof k=="string"?nh(t,k,l.value.path):vt({},k)}function v(k,fe){if(c!==k)return ua(8,{from:fe,to:k})}function S(k){return A(k)}function L(k){return S(vt(x(k),{replace:!0}))}function b(k){const fe=k.matched[k.matched.length-1];if(fe&&fe.redirect){const{redirect:oe}=fe;let U=typeof oe=="function"?oe(k):oe;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),vt({query:k.query,hash:k.hash,params:U.path!=null?{}:k.params},U)}}function A(k,fe){const oe=c=m(k),U=l.value,we=k.state,xe=k.force,R=k.replace===!0,P=b(oe);if(P)return A(vt(x(P),{state:typeof P=="object"?vt({},we,P.state):we,force:xe,replace:R}),fe||oe);const V=oe;V.redirectedFrom=fe;let j;return!xe&&JL(n,U,oe)&&(j=ua(16,{to:V,from:U}),me(U,U,!0,!1)),(j?Promise.resolve(j):y(V,U)).catch(I=>lr(I)?lr(I,2)?I:D(I):W(I,V,U)).then(I=>{if(I){if(lr(I,2))return A(vt({replace:R},x(I.to),{state:typeof I.to=="object"?vt({},we,I.to.state):we,force:xe}),fe||V)}else I=H(V,U,!0,R,we);return G(V,U,I),I})}function O(k,fe){const oe=v(k,fe);return oe?Promise.reject(oe):Promise.resolve()}function T(k){const fe=ie.values().next().value;return fe&&typeof fe.runWithContext=="function"?fe.runWithContext(k):k()}function y(k,fe){let oe;const[U,we,xe]=FI(k,fe);oe=ih(U.reverse(),"beforeRouteLeave",k,fe);for(const P of U)P.leaveGuards.forEach(V=>{oe.push(kr(V,k,fe))});const R=O.bind(null,k,fe);return oe.push(R),ge(oe).then(()=>{oe=[];for(const P of s.list())oe.push(kr(P,k,fe));return oe.push(R),ge(oe)}).then(()=>{oe=ih(we,"beforeRouteUpdate",k,fe);for(const P of we)P.updateGuards.forEach(V=>{oe.push(kr(V,k,fe))});return oe.push(R),ge(oe)}).then(()=>{oe=[];for(const P of xe)if(P.beforeEnter)if(Ii(P.beforeEnter))for(const V of P.beforeEnter)oe.push(kr(V,k,fe));else oe.push(kr(P.beforeEnter,k,fe));return oe.push(R),ge(oe)}).then(()=>(k.matched.forEach(P=>P.enterCallbacks={}),oe=ih(xe,"beforeRouteEnter",k,fe,T),oe.push(R),ge(oe))).then(()=>{oe=[];for(const P of o.list())oe.push(kr(P,k,fe));return oe.push(R),ge(oe)}).catch(P=>lr(P,8)?P:Promise.reject(P))}function G(k,fe,oe){a.list().forEach(U=>T(()=>U(k,fe,oe)))}function H(k,fe,oe,U,we){const xe=v(k,fe);if(xe)return xe;const R=fe===Ir,P=wo?history.state:{};oe&&(U||R?r.replace(k.fullPath,vt({scroll:R&&P&&P.scroll},we)):r.push(k.fullPath,we)),l.value=k,me(k,fe,oe,R),D()}let F;function K(){F||(F=r.listen((k,fe,oe)=>{if(!pe.listening)return;const U=m(k),we=b(U);if(we){A(vt(we,{replace:!0}),U).catch(ll);return}c=U;const xe=l.value;wo&&oI(R_(xe.fullPath,oe.delta),ku()),y(U,xe).catch(R=>lr(R,12)?R:lr(R,2)?(A(R.to,U).then(P=>{lr(P,20)&&!oe.delta&&oe.type===Cl.pop&&r.go(-1,!1)}).catch(ll),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),W(R,U,xe))).then(R=>{R=R||H(U,xe,!1),R&&(oe.delta&&!lr(R,8)?r.go(-oe.delta,!1):oe.type===Cl.pop&&lr(R,20)&&r.go(-1,!1)),G(U,xe,R)}).catch(ll)}))}let re=La(),te=La(),ne;function W(k,fe,oe){D(k);const U=te.list();return U.length?U.forEach(we=>we(k,fe,oe)):console.error(k),Promise.reject(k)}function ue(){return ne&&l.value!==Ir?Promise.resolve():new Promise((k,fe)=>{re.add([k,fe])})}function D(k){return ne||(ne=!k,K(),re.list().forEach(([fe,oe])=>k?oe(k):fe()),re.reset()),k}function me(k,fe,oe,U){const{scrollBehavior:we}=i;if(!wo||!we)return Promise.resolve();const xe=!oe&&aI(R_(k.fullPath,0))||(U||!oe)&&history.state&&history.state.scroll||null;return g0().then(()=>we(k,fe,xe)).then(R=>R&&sI(R)).catch(R=>W(R,k,fe))}const Pe=k=>r.go(k);let Xe;const ie=new Set,pe={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,hasRoute:p,getRoutes:g,resolve:m,options:i,push:S,replace:L,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:ue,install(k){const fe=this;k.component("RouterLink",xy),k.component("RouterView",OI),k.config.globalProperties.$router=fe,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(l)}),wo&&!Xe&&l.value===Ir&&(Xe=!0,S(r.location).catch(we=>{}));const oe={};for(const we in Ir)Object.defineProperty(oe,we,{get:()=>l.value[we],enumerable:!0});k.provide(fp,fe),k.provide(vy,l0(oe)),k.provide(td,l);const U=k.unmount;ie.add(k),k.unmount=function(){ie.delete(k),ie.size<1&&(c=Ir,F&&F(),F=null,l.value=Ir,Xe=!1,ne=!1),U()}}};function ge(k){return k.reduce((fe,oe)=>fe.then(()=>T(oe)),Promise.resolve())}return pe}function FI(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>ca(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>ca(c,l))||r.push(l))}return[t,n,r]}const BI={__name:"HomeView",setup(i){const e=window.WORKS_ROUTES;return console.log(e),(t,n)=>(Fs(),Uo("main",null,[Pl("ul",null,[(Fs(!0),Uo(yi,null,w0(Kr(e),(r,s)=>(Fs(),Uo("li",{key:s},[ei(Kr(xy),{to:r.path},{default:M0(()=>[V0(K_(r.name),1)]),_:2},1032,["to"])]))),128))])]))}},rh=Object.assign({"../views/works/gsap-模型动画.vue":qP,"../views/works/外部模型导入.vue":NL}),hp=[];for(const i in rh)if(Object.hasOwnProperty.call(rh,i)){const e=rh[i].default,t=i.replace(/.vue*$/g,"").split("../views/works")[1],n=t.split("/").reverse()[0],r={path:encodeURI(t),name:n,component:e,meta:{title:n}};hp.push(r)}window.WORKS_ROUTES=hp;const kI=UI({history:hI("/three-toy/"),routes:[{path:"/",name:"home",component:BI},{path:"/about",name:"about",component:()=>ZS(()=>import("./AboutView-OboHPzbB.js"),__vite__mapDeps([0,1]))},...hp]}),yy=GS(jS);yy.use(kI);yy.mount("#app");export{Ed as _,Pl as a,Uo as c,Fs as o};
