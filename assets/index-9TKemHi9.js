const __vite__fileDeps=["./AboutView-gsC7unWr.js","./AboutView-C6Dx7pxG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ah(i,e){const t=new Set(i.split(","));return n=>t.has(n)}const bt={},ao=[],ei=()=>{},Lv=()=>!1,Rc=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),lh=i=>i.startsWith("onUpdate:"),Zt=Object.assign,ch=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Dv=Object.prototype.hasOwnProperty,ct=(i,e)=>Dv.call(i,e),qe=Array.isArray,lo=i=>Cc(i)==="[object Map]",l_=i=>Cc(i)==="[object Set]",Ke=i=>typeof i=="function",Gt=i=>typeof i=="string",Ls=i=>typeof i=="symbol",Rt=i=>i!==null&&typeof i=="object",c_=i=>(Rt(i)||Ke(i))&&Ke(i.then)&&Ke(i.catch),u_=Object.prototype.toString,Cc=i=>u_.call(i),Iv=i=>Cc(i).slice(8,-1),f_=i=>Cc(i)==="[object Object]",uh=i=>Gt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,la=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pc=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Uv=/-(\w)/g,Bi=Pc(i=>i.replace(Uv,(e,t)=>t?t.toUpperCase():"")),Nv=/\B([A-Z])/g,Uo=Pc(i=>i.replace(Nv,"-$1").toLowerCase()),Lc=Pc(i=>i.charAt(0).toUpperCase()+i.slice(1)),tu=Pc(i=>i?`on${Lc(i)}`:""),Nr=(i,e)=>!Object.is(i,e),nu=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},h_=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Ov=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let sd;const d_=()=>sd||(sd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fh(i){if(qe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Gt(n)?kv(n):fh(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Gt(i)||Rt(i))return i}const Fv=/;(?![^(]*\))/g,Bv=/:([^]+)/,zv=/\/\*[^]*?\*\//g;function kv(i){const e={};return i.replace(zv,"").split(Fv).forEach(t=>{if(t){const n=t.split(Bv);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function hh(i){let e="";if(Gt(i))e=i;else if(qe(i))for(let t=0;t<i.length;t++){const n=hh(i[t]);n&&(e+=n+" ")}else if(Rt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Hv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vv=ah(Hv);function p_(i){return!!i||i===""}const m_=i=>Gt(i)?i:i==null?"":qe(i)||Rt(i)&&(i.toString===u_||!Ke(i.toString))?JSON.stringify(i,__,2):String(i),__=(i,e)=>e&&e.__v_isRef?__(i,e.value):lo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[iu(n,s)+" =>"]=r,t),{})}:l_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>iu(t))}:Ls(e)?iu(e):Rt(e)&&!qe(e)&&!f_(e)?String(e):e,iu=(i,e="")=>{var t;return Ls(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ui;class Gv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ui,!e&&ui&&(this.index=(ui.scopes||(ui.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=ui;try{return ui=this,e()}finally{ui=t}}}on(){ui=this}off(){ui=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Wv(i,e=ui){e&&e.active&&e.effects.push(i)}function Xv(){return ui}let _s;class dh{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wv(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Vr();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(qv(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Gr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=wr,t=_s;try{return wr=!0,_s=this,this._runnings++,od(this),this.fn()}finally{ad(this),this._runnings--,_s=t,wr=e}}stop(){this.active&&(od(this),ad(this),this.onStop&&this.onStop(),this.active=!1)}}function qv(i){return i.value}function od(i){i._trackId++,i._depsLength=0}function ad(i){if(i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)g_(i.deps[e],i);i.deps.length=i._depsLength}}function g_(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let wr=!0,df=0;const v_=[];function Vr(){v_.push(wr),wr=!1}function Gr(){const i=v_.pop();wr=i===void 0?!0:i}function ph(){df++}function mh(){for(df--;!df&&pf.length;)pf.shift()()}function x_(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&g_(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const pf=[];function S_(i,e,t){ph();for(const n of i.keys()){let r;n._dirtyLevel<e&&(r??(r=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(r??(r=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&pf.push(n.scheduler)))}mh()}const M_=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},mf=new WeakMap,gs=Symbol(""),_f=Symbol("");function Un(i,e,t){if(wr&&_s){let n=mf.get(i);n||mf.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=M_(()=>n.delete(t))),x_(_s,r)}}function er(i,e,t,n,r,s){const o=mf.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&qe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!Ls(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":qe(i)?uh(t)&&a.push(o.get("length")):(a.push(o.get(gs)),lo(i)&&a.push(o.get(_f)));break;case"delete":qe(i)||(a.push(o.get(gs)),lo(i)&&a.push(o.get(_f)));break;case"set":lo(i)&&a.push(o.get(gs));break}ph();for(const l of a)l&&S_(l,4);mh()}const Yv=ah("__proto__,__v_isRef,__isVue"),y_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Ls)),ld=$v();function $v(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=dt(this);for(let s=0,o=this.length;s<o;s++)Un(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(dt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Vr(),ph();const n=dt(this)[e].apply(this,t);return mh(),Gr(),n}}),i}function jv(i){Ls(i)||(i=String(i));const e=dt(this);return Un(e,"has",i),e.hasOwnProperty(i)}class E_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?lx:w_:s?A_:b_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=qe(e);if(!r){if(o&&ct(ld,t))return Reflect.get(ld,t,n);if(t==="hasOwnProperty")return jv}const a=Reflect.get(e,t,n);return(Ls(t)?y_.has(t):Yv(t))||(r||Un(e,"get",t),s)?a:Nn(a)?o&&uh(t)?a:a.value:Rt(a)?r?C_(a):Ic(a):a}}class T_ extends E_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=Ra(s);if(!rc(n)&&!Ra(n)&&(s=dt(s),n=dt(n)),!qe(e)&&Nn(s)&&!Nn(n))return l?!1:(s.value=n,!0)}const o=qe(e)&&uh(t)?Number(t)<e.length:ct(e,t),a=Reflect.set(e,t,n,r);return e===dt(r)&&(o?Nr(n,s)&&er(e,"set",t,n):er(e,"add",t,n)),a}deleteProperty(e,t){const n=ct(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&er(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Ls(t)||!y_.has(t))&&Un(e,"has",t),n}ownKeys(e){return Un(e,"iterate",qe(e)?"length":gs),Reflect.ownKeys(e)}}class Kv extends E_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zv=new T_,Jv=new Kv,Qv=new T_(!0);const _h=i=>i,Dc=i=>Reflect.getPrototypeOf(i);function Ja(i,e,t=!1,n=!1){i=i.__v_raw;const r=dt(i),s=dt(e);t||(Nr(e,s)&&Un(r,"get",e),Un(r,"get",s));const{has:o}=Dc(r),a=n?_h:t?xh:Ca;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Qa(i,e=!1){const t=this.__v_raw,n=dt(t),r=dt(i);return e||(Nr(i,r)&&Un(n,"has",i),Un(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function el(i,e=!1){return i=i.__v_raw,!e&&Un(dt(i),"iterate",gs),Reflect.get(i,"size",i)}function cd(i){i=dt(i);const e=dt(this);return Dc(e).has.call(e,i)||(e.add(i),er(e,"add",i,i)),this}function ud(i,e){e=dt(e);const t=dt(this),{has:n,get:r}=Dc(t);let s=n.call(t,i);s||(i=dt(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Nr(e,o)&&er(t,"set",i,e):er(t,"add",i,e),this}function fd(i){const e=dt(this),{has:t,get:n}=Dc(e);let r=t.call(e,i);r||(i=dt(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&er(e,"delete",i,void 0),s}function hd(){const i=dt(this),e=i.size!==0,t=i.clear();return e&&er(i,"clear",void 0,void 0),t}function tl(i,e){return function(n,r){const s=this,o=s.__v_raw,a=dt(o),l=e?_h:i?xh:Ca;return!i&&Un(a,"iterate",gs),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function nl(i,e,t){return function(...n){const r=this.__v_raw,s=dt(r),o=lo(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?_h:e?xh:Ca;return!e&&Un(s,"iterate",l?_f:gs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ar(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function ex(){const i={get(s){return Ja(this,s)},get size(){return el(this)},has:Qa,add:cd,set:ud,delete:fd,clear:hd,forEach:tl(!1,!1)},e={get(s){return Ja(this,s,!1,!0)},get size(){return el(this)},has:Qa,add:cd,set:ud,delete:fd,clear:hd,forEach:tl(!1,!0)},t={get(s){return Ja(this,s,!0)},get size(){return el(this,!0)},has(s){return Qa.call(this,s,!0)},add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear"),forEach:tl(!0,!1)},n={get(s){return Ja(this,s,!0,!0)},get size(){return el(this,!0)},has(s){return Qa.call(this,s,!0)},add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=nl(s,!1,!1),t[s]=nl(s,!0,!1),e[s]=nl(s,!1,!0),n[s]=nl(s,!0,!0)}),[i,t,e,n]}const[tx,nx,ix,rx]=ex();function gh(i,e){const t=e?i?rx:ix:i?nx:tx;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(ct(t,r)&&r in n?t:n,r,s)}const sx={get:gh(!1,!1)},ox={get:gh(!1,!0)},ax={get:gh(!0,!1)};const b_=new WeakMap,A_=new WeakMap,w_=new WeakMap,lx=new WeakMap;function cx(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ux(i){return i.__v_skip||!Object.isExtensible(i)?0:cx(Iv(i))}function Ic(i){return Ra(i)?i:vh(i,!1,Zv,sx,b_)}function R_(i){return vh(i,!1,Qv,ox,A_)}function C_(i){return vh(i,!0,Jv,ax,w_)}function vh(i,e,t,n,r){if(!Rt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=ux(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function ca(i){return Ra(i)?ca(i.__v_raw):!!(i&&i.__v_isReactive)}function Ra(i){return!!(i&&i.__v_isReadonly)}function rc(i){return!!(i&&i.__v_isShallow)}function P_(i){return i?!!i.__v_raw:!1}function dt(i){const e=i&&i.__v_raw;return e?dt(e):i}function fx(i){return Object.isExtensible(i)&&h_(i,"__v_skip",!0),i}const Ca=i=>Rt(i)?Ic(i):i,xh=i=>Rt(i)?C_(i):i;class L_{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new dh(()=>e(this._value),()=>Vl(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=dt(this);return(!e._cacheable||e.effect.dirty)&&Nr(e._value,e._value=e.effect.run())&&Vl(e,4),D_(e),e.effect._dirtyLevel>=2&&Vl(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function hx(i,e,t=!1){let n,r;const s=Ke(i);return s?(n=i,r=ei):(n=i.get,r=i.set),new L_(n,r,s||!r,t)}function D_(i){var e;wr&&_s&&(i=dt(i),x_(_s,(e=i.dep)!=null?e:i.dep=M_(()=>i.dep=void 0,i instanceof L_?i:void 0)))}function Vl(i,e=4,t){i=dt(i);const n=i.dep;n&&S_(n,e)}function Nn(i){return!!(i&&i.__v_isRef===!0)}function dx(i){return I_(i,!1)}function px(i){return I_(i,!0)}function I_(i,e){return Nn(i)?i:new mx(i,e)}class mx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:dt(e),this._value=t?e:Ca(e)}get value(){return D_(this),this._value}set value(e){const t=this.__v_isShallow||rc(e)||Ra(e);e=t?e:dt(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ca(e),Vl(this,4))}}function Rr(i){return Nn(i)?i.value:i}const _x={get:(i,e,t)=>Rr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Nn(r)&&!Nn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function U_(i){return ca(i)?i:new Proxy(i,_x)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cr(i,e,t,n){try{return n?i(...n):i()}catch(r){Uc(r,e,t)}}function vi(i,e,t,n){if(Ke(i)){const r=Cr(i,e,t,n);return r&&c_(r)&&r.catch(s=>{Uc(s,e,t)}),r}if(qe(i)){const r=[];for(let s=0;s<i.length;s++)r.push(vi(i[s],e,t,n));return r}}function Uc(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Vr(),Cr(l,null,10,[i,o,a]),Gr();return}}gx(i,t,r,n)}function gx(i,e,t,n=!0){console.error(i)}let Pa=!1,gf=!1;const an=[];let Ri=0;const co=[];let _r=null,cs=0;const N_=Promise.resolve();let Sh=null;function O_(i){const e=Sh||N_;return i?e.then(this?i.bind(this):i):e}function vx(i){let e=Ri+1,t=an.length;for(;e<t;){const n=e+t>>>1,r=an[n],s=La(r);s<i||s===i&&r.pre?e=n+1:t=n}return e}function Mh(i){(!an.length||!an.includes(i,Pa&&i.allowRecurse?Ri+1:Ri))&&(i.id==null?an.push(i):an.splice(vx(i.id),0,i),F_())}function F_(){!Pa&&!gf&&(gf=!0,Sh=N_.then(z_))}function xx(i){const e=an.indexOf(i);e>Ri&&an.splice(e,1)}function Sx(i){qe(i)?co.push(...i):(!_r||!_r.includes(i,i.allowRecurse?cs+1:cs))&&co.push(i),F_()}function dd(i,e,t=Pa?Ri+1:0){for(;t<an.length;t++){const n=an[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;an.splice(t,1),t--,n()}}}function B_(i){if(co.length){const e=[...new Set(co)].sort((t,n)=>La(t)-La(n));if(co.length=0,_r){_r.push(...e);return}for(_r=e,cs=0;cs<_r.length;cs++)_r[cs]();_r=null,cs=0}}const La=i=>i.id==null?1/0:i.id,Mx=(i,e)=>{const t=La(i)-La(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function z_(i){gf=!1,Pa=!0,an.sort(Mx);try{for(Ri=0;Ri<an.length;Ri++){const e=an[Ri];e&&e.active!==!1&&Cr(e,null,14)}}finally{Ri=0,an.length=0,B_(),Pa=!1,Sh=null,(an.length||co.length)&&z_()}}function yx(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||bt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||bt;f&&(r=t.map(d=>Gt(d)?d.trim():d)),h&&(r=t.map(Ov))}let a,l=n[a=tu(e)]||n[a=tu(Bi(e))];!l&&s&&(l=n[a=tu(Uo(e))]),l&&vi(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,vi(c,i,6,r)}}function k_(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ke(i)){const l=c=>{const u=k_(c,e,!0);u&&(a=!0,Zt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Rt(i)&&n.set(i,null),null):(qe(s)?s.forEach(l=>o[l]=null):Zt(o,s),Rt(i)&&n.set(i,o),o)}function Nc(i,e){return!i||!Rc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(i,e[0].toLowerCase()+e.slice(1))||ct(i,Uo(e))||ct(i,e))}let mi=null,Oc=null;function sc(i){const e=mi;return mi=i,Oc=i&&i.type.__scopeId||null,e}function Ex(i){Oc=i}function Tx(){Oc=null}function H_(i,e=mi,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Td(-1);const s=sc(e);let o;try{o=i(...r)}finally{sc(s),n._d&&Td(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ru(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=i,m=sc(i);let p,M;try{if(t.shapeFlag&4){const y=r||n,D=y;p=Ai(c.call(D,y,u,h,d,f,g)),M=a}else{const y=e;p=Ai(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),M=e.props?a:bx(a)}}catch(y){ha.length=0,Uc(y,i,1),p=Xn(Da)}let S=p;if(M&&_!==!1){const y=Object.keys(M),{shapeFlag:D}=S;y.length&&D&7&&(s&&y.some(lh)&&(M=Ax(M,s)),S=Mo(S,M,!1,!0))}return t.dirs&&(S=Mo(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,sc(m),p}const bx=i=>{let e;for(const t in i)(t==="class"||t==="style"||Rc(t))&&((e||(e={}))[t]=i[t]);return e},Ax=(i,e)=>{const t={};for(const n in i)(!lh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function wx(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?pd(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Nc(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?pd(n,o,c):!0:!!o;return!1}function pd(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Nc(t,s))return!0}return!1}function Rx({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Cx="components";function Px(i,e){return Dx(Cx,i,!0,e)||i}const Lx=Symbol.for("v-ndc");function Dx(i,e,t=!0,n=!1){const r=mi||ln;if(r){const s=r.type;{const a=bS(s,!1);if(a&&(a===e||a===Bi(e)||a===Lc(Bi(e))))return s}const o=md(r[i]||s[i],e)||md(r.appContext[i],e);return!o&&n?s:o}}function md(i,e){return i&&(i[e]||i[Bi(e)]||i[Lc(Bi(e))])}const Ix=i=>i.__isSuspense;function Ux(i,e){e&&e.pendingBranch?qe(i)?e.effects.push(...i):e.effects.push(i):Sx(i)}const Nx=Symbol.for("v-scx"),Ox=()=>Ui(Nx),il={};function Gl(i,e,t){return V_(i,e,t)}function V_(i,e,{immediate:t,deep:n,flush:r,once:s,onTrack:o,onTrigger:a}=bt){if(e&&s){const T=e;e=(...A)=>{T(...A),D()}}const l=ln,c=T=>n===!0?T:no(T,n===!1?1:void 0);let u,h=!1,f=!1;if(Nn(i)?(u=()=>i.value,h=rc(i)):ca(i)?(u=()=>c(i),h=!0):qe(i)?(f=!0,h=i.some(T=>ca(T)||rc(T)),u=()=>i.map(T=>{if(Nn(T))return T.value;if(ca(T))return c(T);if(Ke(T))return Cr(T,l,2)})):Ke(i)?e?u=()=>Cr(i,l,2):u=()=>(d&&d(),vi(i,l,3,[g])):u=ei,e&&n){const T=u;u=()=>no(T())}let d,g=T=>{d=S.onStop=()=>{Cr(T,l,4),d=S.onStop=void 0}},_;if(zc)if(g=ei,e?t&&vi(e,l,3,[u(),f?[]:void 0,g]):u(),r==="sync"){const T=Ox();_=T.__watcherHandles||(T.__watcherHandles=[])}else return ei;let m=f?new Array(i.length).fill(il):il;const p=()=>{if(!(!S.active||!S.dirty))if(e){const T=S.run();(n||h||(f?T.some((A,O)=>Nr(A,m[O])):Nr(T,m)))&&(d&&d(),vi(e,l,3,[T,m===il?void 0:f&&m[0]===il?[]:m,g]),m=T)}else S.run()};p.allowRecurse=!!e;let M;r==="sync"?M=p:r==="post"?M=()=>bn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),M=()=>Mh(p));const S=new dh(u,ei,M),y=Xv(),D=()=>{S.stop(),y&&ch(y.effects,S)};return e?t?p():m=S.run():r==="post"?bn(S.run.bind(S),l&&l.suspense):S.run(),_&&_.push(D),D}function Fx(i,e,t){const n=this.proxy,r=Gt(i)?i.includes(".")?G_(n,i):()=>n[i]:i.bind(n,n);let s;Ke(e)?s=e:(s=e.handler,t=e);const o=qa(this),a=V_(r,s.bind(n),t);return o(),a}function G_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function no(i,e=1/0,t){if(e<=0||!Rt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Nn(i))no(i.value,e,t);else if(qe(i))for(let n=0;n<i.length;n++)no(i[n],e,t);else if(l_(i)||lo(i))i.forEach(n=>{no(n,e,t)});else if(f_(i))for(const n in i)no(i[n],e,t);return i}function Yr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Vr(),vi(l,t,8,[i.el,a,i,e]),Gr())}}/*! #__NO_SIDE_EFFECTS__ */function W_(i,e){return Ke(i)?Zt({name:i.name},e,{setup:i}):i}const Wl=i=>!!i.type.__asyncLoader,X_=i=>i.type.__isKeepAlive;function Bx(i,e){q_(i,"a",e)}function zx(i,e){q_(i,"da",e)}function q_(i,e,t=ln){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Fc(e,n,t),t){let r=t.parent;for(;r&&r.parent;)X_(r.parent.vnode)&&kx(n,e,t,r),r=r.parent}}function kx(i,e,t,n){const r=Fc(e,i,n,!0);yh(()=>{ch(n[e],r)},t)}function Fc(i,e,t=ln,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Vr();const a=qa(t),l=vi(e,t,i,o);return a(),Gr(),l});return n?r.unshift(s):r.push(s),s}}const rr=i=>(e,t=ln)=>(!zc||i==="sp")&&Fc(i,(...n)=>e(...n),t),Hx=rr("bm"),Y_=rr("m"),Vx=rr("bu"),Gx=rr("u"),Wx=rr("bum"),yh=rr("um"),Xx=rr("sp"),qx=rr("rtg"),Yx=rr("rtc");function $x(i,e=ln){Fc("ec",i,e)}function $_(i,e,t,n){let r;const s=t;if(qe(i)||Gt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s)}else if(Rt(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s)}}else r=[];return r}const vf=i=>i?ug(i)?Ah(i)||i.proxy:vf(i.parent):null,ua=Zt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>vf(i.parent),$root:i=>vf(i.root),$emit:i=>i.emit,$options:i=>Eh(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Mh(i.update)}),$nextTick:i=>i.n||(i.n=O_.bind(i.proxy)),$watch:i=>Fx.bind(i)}),su=(i,e)=>i!==bt&&!i.__isScriptSetup&&ct(i,e),jx={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(su(n,e))return o[e]=1,n[e];if(r!==bt&&ct(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&ct(c,e))return o[e]=3,s[e];if(t!==bt&&ct(t,e))return o[e]=4,t[e];xf&&(o[e]=0)}}const u=ua[e];let h,f;if(u)return e==="$attrs"&&Un(i.attrs,"get",""),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==bt&&ct(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ct(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return su(r,e)?(r[e]=t,!0):n!==bt&&ct(n,e)?(n[e]=t,!0):ct(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==bt&&ct(i,o)||su(e,o)||(a=s[0])&&ct(a,o)||ct(n,o)||ct(ua,o)||ct(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ct(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function _d(i){return qe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let xf=!0;function Kx(i){const e=Eh(i),t=i.proxy,n=i.ctx;xf=!1,e.beforeCreate&&gd(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:S,unmounted:y,render:D,renderTracked:T,renderTriggered:A,errorCaptured:O,serverPrefetch:E,expose:v,inheritAttrs:H,components:V,directives:N,filters:j}=e;if(c&&Zx(c,n,null),o)for(const ee in o){const k=o[ee];Ke(k)&&(n[ee]=k.bind(t))}if(r){const ee=r.call(t,t);Rt(ee)&&(i.data=Ic(ee))}if(xf=!0,s)for(const ee in s){const k=s[ee],fe=Ke(k)?k.bind(t,t):Ke(k.get)?k.get.bind(t,t):ei,L=!Ke(k)&&Ke(k.set)?k.set.bind(t):ei,me=di({get:fe,set:L});Object.defineProperty(n,ee,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ce=>me.value=Ce})}if(a)for(const ee in a)j_(a[ee],n,t,ee);if(l){const ee=Ke(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(k=>{Xl(k,ee[k])})}u&&gd(u,i,"c");function ne(ee,k){qe(k)?k.forEach(fe=>ee(fe.bind(t))):k&&ee(k.bind(t))}if(ne(Hx,h),ne(Y_,f),ne(Vx,d),ne(Gx,g),ne(Bx,_),ne(zx,m),ne($x,O),ne(Yx,T),ne(qx,A),ne(Wx,M),ne(yh,y),ne(Xx,E),qe(v))if(v.length){const ee=i.exposed||(i.exposed={});v.forEach(k=>{Object.defineProperty(ee,k,{get:()=>t[k],set:fe=>t[k]=fe})})}else i.exposed||(i.exposed={});D&&i.render===ei&&(i.render=D),H!=null&&(i.inheritAttrs=H),V&&(i.components=V),N&&(i.directives=N)}function Zx(i,e,t=ei){qe(i)&&(i=Sf(i));for(const n in i){const r=i[n];let s;Rt(r)?"default"in r?s=Ui(r.from||n,r.default,!0):s=Ui(r.from||n):s=Ui(r),Nn(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function gd(i,e,t){vi(qe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function j_(i,e,t,n){const r=n.includes(".")?G_(t,n):()=>t[n];if(Gt(i)){const s=e[i];Ke(s)&&Gl(r,s)}else if(Ke(i))Gl(r,i.bind(t));else if(Rt(i))if(qe(i))i.forEach(s=>j_(s,e,t,n));else{const s=Ke(i.handler)?i.handler.bind(t):e[i.handler];Ke(s)&&Gl(r,s,i)}}function Eh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>oc(l,c,o,!0)),oc(l,e,o)),Rt(e)&&s.set(e,l),l}function oc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&oc(i,s,t,!0),r&&r.forEach(o=>oc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Jx[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Jx={data:vd,props:xd,emits:xd,methods:Qo,computed:Qo,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Qo,directives:Qo,watch:eS,provide:vd,inject:Qx};function vd(i,e){return e?i?function(){return Zt(Ke(i)?i.call(this,this):i,Ke(e)?e.call(this,this):e)}:e:i}function Qx(i,e){return Qo(Sf(i),Sf(e))}function Sf(i){if(qe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function pn(i,e){return i?[...new Set([].concat(i,e))]:e}function Qo(i,e){return i?Zt(Object.create(null),i,e):e}function xd(i,e){return i?qe(i)&&qe(e)?[...new Set([...i,...e])]:Zt(Object.create(null),_d(i),_d(e??{})):e}function eS(i,e){if(!i)return e;if(!e)return i;const t=Zt(Object.create(null),i);for(const n in e)t[n]=pn(i[n],e[n]);return t}function K_(){return{app:null,config:{isNativeTag:Lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tS=0;function nS(i,e){return function(n,r=null){Ke(n)||(n=Zt({},n)),r!=null&&!Rt(r)&&(r=null);const s=K_(),o=new WeakSet;let a=!1;const l=s.app={_uid:tS++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:wS,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ke(c.install)?(o.add(c),c.install(l,...u)):Ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Xn(n,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ah(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=fa;fa=l;try{return c()}finally{fa=u}}};return l}}let fa=null;function Xl(i,e){if(ln){let t=ln.provides;const n=ln.parent&&ln.parent.provides;n===t&&(t=ln.provides=Object.create(n)),t[i]=e}}function Ui(i,e,t=!1){const n=ln||mi;if(n||fa){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:fa._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ke(e)?e.call(n&&n.proxy):e}}const Z_={},J_=()=>Object.create(Z_),Q_=i=>Object.getPrototypeOf(i)===Z_;function iS(i,e,t,n=!1){const r={},s=J_();i.propsDefaults=Object.create(null),eg(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:R_(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function rS(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=dt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Nc(i.emitsOptions,f))continue;const d=e[f];if(l)if(ct(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Bi(f);r[g]=Mf(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{eg(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!ct(e,h)&&((u=Uo(h))===h||!ct(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Mf(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!ct(e,h))&&(delete s[h],c=!0)}c&&er(i.attrs,"set","")}function eg(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(la(l))continue;const c=e[l];let u;r&&ct(r,u=Bi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Nc(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=dt(t),c=a||bt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Mf(r,l,h,c[h],i,!ct(c,h))}}return o}function Mf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=ct(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=qa(r);n=c[t]=l.call(null,e),u()}}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Uo(t))&&(n=!0))}return n}function tg(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ke(i)){const u=h=>{l=!0;const[f,d]=tg(h,e,!0);Zt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Rt(i)&&n.set(i,ao),ao;if(qe(s))for(let u=0;u<s.length;u++){const h=Bi(s[u]);Sd(h)&&(o[h]=bt)}else if(s)for(const u in s){const h=Bi(u);if(Sd(h)){const f=s[u],d=o[h]=qe(f)||Ke(f)?{type:f}:Zt({},f);if(d){const g=Ed(Boolean,d.type),_=Ed(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||ct(d,"default"))&&a.push(h)}}}const c=[o,a];return Rt(i)&&n.set(i,c),c}function Sd(i){return i[0]!=="$"&&!la(i)}function Md(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function yd(i,e){return Md(i)===Md(e)}function Ed(i,e){return qe(e)?e.findIndex(t=>yd(t,i)):Ke(e)&&yd(e,i)?0:-1}const ng=i=>i[0]==="_"||i==="$stable",Th=i=>qe(i)?i.map(Ai):[Ai(i)],sS=(i,e,t)=>{if(e._n)return e;const n=H_((...r)=>Th(e(...r)),t);return n._c=!1,n},ig=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ng(r))continue;const s=i[r];if(Ke(s))e[r]=sS(r,s,n);else if(s!=null){const o=Th(s);e[r]=()=>o}}},rg=(i,e)=>{const t=Th(e);i.slots.default=()=>t},oS=(i,e)=>{const t=i.slots=J_();if(i.vnode.shapeFlag&32){const n=e._;n?(Zt(t,e),h_(t,"_",n,!0)):ig(e,t)}else e&&rg(i,e)},aS=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=bt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Zt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,ig(e,r)),o=e}else e&&(rg(i,e),o={default:1});if(s)for(const a in r)!ng(a)&&o[a]==null&&delete r[a]};function yf(i,e,t,n,r=!1){if(qe(i)){i.forEach((f,d)=>yf(f,e&&(qe(e)?e[d]:e),t,n,r));return}if(Wl(n)&&!r)return;const s=n.shapeFlag&4?Ah(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Gt(c)?(u[c]=null,ct(h,c)&&(h[c]=null)):Nn(c)&&(c.value=null)),Ke(l))Cr(l,a,12,[o,u]);else{const f=Gt(l),d=Nn(l);if(f||d){const g=()=>{if(i.f){const _=f?ct(h,l)?h[l]:u[l]:l.value;r?qe(_)&&ch(_,s):qe(_)?_.includes(s)||_.push(s):f?(u[l]=[s],ct(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,ct(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,bn(g,t)):g()}}}const bn=Ux;function lS(i){return cS(i)}function cS(i,e){const t=d_();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ei,insertStaticContent:g}=i,_=(w,C,z,q=null,P=null,ce=null,R=void 0,x=null,I=!!C.dynamicChildren)=>{if(w===C)return;w&&!Ho(w,C)&&(q=B(w),Ce(w,P,ce,!0),w=null),C.patchFlag===-2&&(I=!1,C.dynamicChildren=null);const{type:F,ref:X,shapeFlag:J}=C;switch(F){case Bc:m(w,C,z,q);break;case Da:p(w,C,z,q);break;case au:w==null&&M(C,z,q,R);break;case fi:V(w,C,z,q,P,ce,R,x,I);break;default:J&1?D(w,C,z,q,P,ce,R,x,I):J&6?N(w,C,z,q,P,ce,R,x,I):(J&64||J&128)&&F.process(w,C,z,q,P,ce,R,x,I,U)}X!=null&&P&&yf(X,w&&w.ref,ce,C||w,!C)},m=(w,C,z,q)=>{if(w==null)n(C.el=a(C.children),z,q);else{const P=C.el=w.el;C.children!==w.children&&c(P,C.children)}},p=(w,C,z,q)=>{w==null?n(C.el=l(C.children||""),z,q):C.el=w.el},M=(w,C,z,q)=>{[w.el,w.anchor]=g(w.children,C,z,q,w.el,w.anchor)},S=({el:w,anchor:C},z,q)=>{let P;for(;w&&w!==C;)P=f(w),n(w,z,q),w=P;n(C,z,q)},y=({el:w,anchor:C})=>{let z;for(;w&&w!==C;)z=f(w),r(w),w=z;r(C)},D=(w,C,z,q,P,ce,R,x,I)=>{C.type==="svg"?R="svg":C.type==="math"&&(R="mathml"),w==null?T(C,z,q,P,ce,R,x,I):E(w,C,P,ce,R,x,I)},T=(w,C,z,q,P,ce,R,x)=>{let I,F;const{props:X,shapeFlag:J,transition:oe,dirs:ae}=w;if(I=w.el=o(w.type,ce,X&&X.is,X),J&8?u(I,w.children):J&16&&O(w.children,I,null,q,P,ou(w,ce),R,x),ae&&Yr(w,null,q,"created"),A(I,w,w.scopeId,R,q),X){for(const Se in X)Se!=="value"&&!la(Se)&&s(I,Se,null,X[Se],ce,w.children,q,P,pe);"value"in X&&s(I,"value",null,X.value,ce),(F=X.onVnodeBeforeMount)&&yi(F,q,w)}ae&&Yr(w,null,q,"beforeMount");const re=uS(P,oe);re&&oe.beforeEnter(I),n(I,C,z),((F=X&&X.onVnodeMounted)||re||ae)&&bn(()=>{F&&yi(F,q,w),re&&oe.enter(I),ae&&Yr(w,null,q,"mounted")},P)},A=(w,C,z,q,P)=>{if(z&&d(w,z),q)for(let ce=0;ce<q.length;ce++)d(w,q[ce]);if(P){let ce=P.subTree;if(C===ce){const R=P.vnode;A(w,R,R.scopeId,R.slotScopeIds,P.parent)}}},O=(w,C,z,q,P,ce,R,x,I=0)=>{for(let F=I;F<w.length;F++){const X=w[F]=x?gr(w[F]):Ai(w[F]);_(null,X,C,z,q,P,ce,R,x)}},E=(w,C,z,q,P,ce,R)=>{const x=C.el=w.el;let{patchFlag:I,dynamicChildren:F,dirs:X}=C;I|=w.patchFlag&16;const J=w.props||bt,oe=C.props||bt;let ae;if(z&&$r(z,!1),(ae=oe.onVnodeBeforeUpdate)&&yi(ae,z,C,w),X&&Yr(C,w,z,"beforeUpdate"),z&&$r(z,!0),F?v(w.dynamicChildren,F,x,z,q,ou(C,P),ce):R||k(w,C,x,null,z,q,ou(C,P),ce,!1),I>0){if(I&16)H(x,C,J,oe,z,q,P);else if(I&2&&J.class!==oe.class&&s(x,"class",null,oe.class,P),I&4&&s(x,"style",J.style,oe.style,P),I&8){const re=C.dynamicProps;for(let Se=0;Se<re.length;Se++){const he=re[Se],xe=J[he],ze=oe[he];(ze!==xe||he==="value")&&s(x,he,xe,ze,P,w.children,z,q,pe)}}I&1&&w.children!==C.children&&u(x,C.children)}else!R&&F==null&&H(x,C,J,oe,z,q,P);((ae=oe.onVnodeUpdated)||X)&&bn(()=>{ae&&yi(ae,z,C,w),X&&Yr(C,w,z,"updated")},q)},v=(w,C,z,q,P,ce,R)=>{for(let x=0;x<C.length;x++){const I=w[x],F=C[x],X=I.el&&(I.type===fi||!Ho(I,F)||I.shapeFlag&70)?h(I.el):z;_(I,F,X,null,q,P,ce,R,!0)}},H=(w,C,z,q,P,ce,R)=>{if(z!==q){if(z!==bt)for(const x in z)!la(x)&&!(x in q)&&s(w,x,z[x],null,R,C.children,P,ce,pe);for(const x in q){if(la(x))continue;const I=q[x],F=z[x];I!==F&&x!=="value"&&s(w,x,F,I,R,C.children,P,ce,pe)}"value"in q&&s(w,"value",z.value,q.value,R)}},V=(w,C,z,q,P,ce,R,x,I)=>{const F=C.el=w?w.el:a(""),X=C.anchor=w?w.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ae}=C;ae&&(x=x?x.concat(ae):ae),w==null?(n(F,z,q),n(X,z,q),O(C.children||[],z,X,P,ce,R,x,I)):J>0&&J&64&&oe&&w.dynamicChildren?(v(w.dynamicChildren,oe,z,P,ce,R,x),(C.key!=null||P&&C===P.subTree)&&sg(w,C,!0)):k(w,C,z,X,P,ce,R,x,I)},N=(w,C,z,q,P,ce,R,x,I)=>{C.slotScopeIds=x,w==null?C.shapeFlag&512?P.ctx.activate(C,z,q,R,I):j(C,z,q,P,ce,R,I):te(w,C,I)},j=(w,C,z,q,P,ce,R)=>{const x=w.component=SS(w,q,P);if(X_(w)&&(x.ctx.renderer=U),MS(x),x.asyncDep){if(P&&P.registerDep(x,ne),!w.el){const I=x.subTree=Xn(Da);p(null,I,C,z)}}else ne(x,w,C,z,P,ce,R)},te=(w,C,z)=>{const q=C.component=w.component;if(wx(w,C,z))if(q.asyncDep&&!q.asyncResolved){ee(q,C,z);return}else q.next=C,xx(q.update),q.effect.dirty=!0,q.update();else C.el=w.el,q.vnode=C},ne=(w,C,z,q,P,ce,R)=>{const x=()=>{if(w.isMounted){let{next:X,bu:J,u:oe,parent:ae,vnode:re}=w;{const ye=og(w);if(ye){X&&(X.el=re.el,ee(w,X,R)),ye.asyncDep.then(()=>{w.isUnmounted||x()});return}}let Se=X,he;$r(w,!1),X?(X.el=re.el,ee(w,X,R)):X=re,J&&nu(J),(he=X.props&&X.props.onVnodeBeforeUpdate)&&yi(he,ae,X,re),$r(w,!0);const xe=ru(w),ze=w.subTree;w.subTree=xe,_(ze,xe,h(ze.el),B(ze),w,P,ce),X.el=xe.el,Se===null&&Rx(w,xe.el),oe&&bn(oe,P),(he=X.props&&X.props.onVnodeUpdated)&&bn(()=>yi(he,ae,X,re),P)}else{let X;const{el:J,props:oe}=C,{bm:ae,m:re,parent:Se}=w,he=Wl(C);if($r(w,!1),ae&&nu(ae),!he&&(X=oe&&oe.onVnodeBeforeMount)&&yi(X,Se,C),$r(w,!0),J&&ge){const xe=()=>{w.subTree=ru(w),ge(J,w.subTree,w,P,null)};he?C.type.__asyncLoader().then(()=>!w.isUnmounted&&xe()):xe()}else{const xe=w.subTree=ru(w);_(null,xe,z,q,w,P,ce),C.el=xe.el}if(re&&bn(re,P),!he&&(X=oe&&oe.onVnodeMounted)){const xe=C;bn(()=>yi(X,Se,xe),P)}(C.shapeFlag&256||Se&&Wl(Se.vnode)&&Se.vnode.shapeFlag&256)&&w.a&&bn(w.a,P),w.isMounted=!0,C=z=q=null}},I=w.effect=new dh(x,ei,()=>Mh(F),w.scope),F=w.update=()=>{I.dirty&&I.run()};F.id=w.uid,$r(w,!0),F()},ee=(w,C,z)=>{C.component=w;const q=w.vnode.props;w.vnode=C,w.next=null,rS(w,C.props,q,z),aS(w,C.children,z),Vr(),dd(w),Gr()},k=(w,C,z,q,P,ce,R,x,I=!1)=>{const F=w&&w.children,X=w?w.shapeFlag:0,J=C.children,{patchFlag:oe,shapeFlag:ae}=C;if(oe>0){if(oe&128){L(F,J,z,q,P,ce,R,x,I);return}else if(oe&256){fe(F,J,z,q,P,ce,R,x,I);return}}ae&8?(X&16&&pe(F,P,ce),J!==F&&u(z,J)):X&16?ae&16?L(F,J,z,q,P,ce,R,x,I):pe(F,P,ce,!0):(X&8&&u(z,""),ae&16&&O(J,z,q,P,ce,R,x,I))},fe=(w,C,z,q,P,ce,R,x,I)=>{w=w||ao,C=C||ao;const F=w.length,X=C.length,J=Math.min(F,X);let oe;for(oe=0;oe<J;oe++){const ae=C[oe]=I?gr(C[oe]):Ai(C[oe]);_(w[oe],ae,z,null,P,ce,R,x,I)}F>X?pe(w,P,ce,!0,!1,J):O(C,z,q,P,ce,R,x,I,J)},L=(w,C,z,q,P,ce,R,x,I)=>{let F=0;const X=C.length;let J=w.length-1,oe=X-1;for(;F<=J&&F<=oe;){const ae=w[F],re=C[F]=I?gr(C[F]):Ai(C[F]);if(Ho(ae,re))_(ae,re,z,null,P,ce,R,x,I);else break;F++}for(;F<=J&&F<=oe;){const ae=w[J],re=C[oe]=I?gr(C[oe]):Ai(C[oe]);if(Ho(ae,re))_(ae,re,z,null,P,ce,R,x,I);else break;J--,oe--}if(F>J){if(F<=oe){const ae=oe+1,re=ae<X?C[ae].el:q;for(;F<=oe;)_(null,C[F]=I?gr(C[F]):Ai(C[F]),z,re,P,ce,R,x,I),F++}}else if(F>oe)for(;F<=J;)Ce(w[F],P,ce,!0),F++;else{const ae=F,re=F,Se=new Map;for(F=re;F<=oe;F++){const $e=C[F]=I?gr(C[F]):Ai(C[F]);$e.key!=null&&Se.set($e.key,F)}let he,xe=0;const ze=oe-re+1;let ye=!1,Re=0;const Fe=new Array(ze);for(F=0;F<ze;F++)Fe[F]=0;for(F=ae;F<=J;F++){const $e=w[F];if(xe>=ze){Ce($e,P,ce,!0);continue}let De;if($e.key!=null)De=Se.get($e.key);else for(he=re;he<=oe;he++)if(Fe[he-re]===0&&Ho($e,C[he])){De=he;break}De===void 0?Ce($e,P,ce,!0):(Fe[De-re]=F+1,De>=Re?Re=De:ye=!0,_($e,C[De],z,null,P,ce,R,x,I),xe++)}const We=ye?fS(Fe):ao;for(he=We.length-1,F=ze-1;F>=0;F--){const $e=re+F,De=C[$e],G=$e+1<X?C[$e+1].el:q;Fe[F]===0?_(null,De,z,G,P,ce,R,x,I):ye&&(he<0||F!==We[he]?me(De,z,G,2):he--)}}},me=(w,C,z,q,P=null)=>{const{el:ce,type:R,transition:x,children:I,shapeFlag:F}=w;if(F&6){me(w.component.subTree,C,z,q);return}if(F&128){w.suspense.move(C,z,q);return}if(F&64){R.move(w,C,z,U);return}if(R===fi){n(ce,C,z);for(let J=0;J<I.length;J++)me(I[J],C,z,q);n(w.anchor,C,z);return}if(R===au){S(w,C,z);return}if(q!==2&&F&1&&x)if(q===0)x.beforeEnter(ce),n(ce,C,z),bn(()=>x.enter(ce),P);else{const{leave:J,delayLeave:oe,afterLeave:ae}=x,re=()=>n(ce,C,z),Se=()=>{J(ce,()=>{re(),ae&&ae()})};oe?oe(ce,re,Se):Se()}else n(ce,C,z)},Ce=(w,C,z,q=!1,P=!1)=>{const{type:ce,props:R,ref:x,children:I,dynamicChildren:F,shapeFlag:X,patchFlag:J,dirs:oe}=w;if(x!=null&&yf(x,null,z,w,!0),X&256){C.ctx.deactivate(w);return}const ae=X&1&&oe,re=!Wl(w);let Se;if(re&&(Se=R&&R.onVnodeBeforeUnmount)&&yi(Se,C,w),X&6)de(w.component,z,q);else{if(X&128){w.suspense.unmount(z,q);return}ae&&Yr(w,null,C,"beforeUnmount"),X&64?w.type.remove(w,C,z,P,U,q):F&&(ce!==fi||J>0&&J&64)?pe(F,C,z,!1,!0):(ce===fi&&J&384||!P&&X&16)&&pe(I,C,z),q&&Ge(w)}(re&&(Se=R&&R.onVnodeUnmounted)||ae)&&bn(()=>{Se&&yi(Se,C,w),ae&&Yr(w,null,C,"unmounted")},z)},Ge=w=>{const{type:C,el:z,anchor:q,transition:P}=w;if(C===fi){Q(z,q);return}if(C===au){y(w);return}const ce=()=>{r(z),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(w.shapeFlag&1&&P&&!P.persisted){const{leave:R,delayLeave:x}=P,I=()=>R(z,ce);x?x(w.el,ce,I):I()}else ce()},Q=(w,C)=>{let z;for(;w!==C;)z=f(w),r(w),w=z;r(C)},de=(w,C,z)=>{const{bum:q,scope:P,update:ce,subTree:R,um:x}=w;q&&nu(q),P.stop(),ce&&(ce.active=!1,Ce(R,w,C,z)),x&&bn(x,C),bn(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},pe=(w,C,z,q=!1,P=!1,ce=0)=>{for(let R=ce;R<w.length;R++)Ce(w[R],C,z,q,P)},B=w=>w.shapeFlag&6?B(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el);let ue=!1;const se=(w,C,z)=>{w==null?C._vnode&&Ce(C._vnode,null,null,!0):_(C._vnode||null,w,C,null,null,null,z),ue||(ue=!0,dd(),B_(),ue=!1),C._vnode=w},U={p:_,um:Ce,m:me,r:Ge,mt:j,mc:O,pc:k,pbc:v,n:B,o:i};let we,ge;return{render:se,hydrate:we,createApp:nS(se,we)}}function ou({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $r({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function uS(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function sg(i,e,t=!1){const n=i.children,r=e.children;if(qe(n)&&qe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=gr(r[s]),a.el=o.el),t||sg(o,a)),a.type===Bc&&(a.el=o.el)}}function fS(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function og(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:og(e)}const hS=i=>i.__isTeleport,fi=Symbol.for("v-fgt"),Bc=Symbol.for("v-txt"),Da=Symbol.for("v-cmt"),au=Symbol.for("v-stc"),ha=[];let _i=null;function uo(i=!1){ha.push(_i=i?null:[])}function dS(){ha.pop(),_i=ha[ha.length-1]||null}let Ia=1;function Td(i){Ia+=i}function ag(i){return i.dynamicChildren=Ia>0?_i||ao:null,dS(),Ia>0&&_i&&_i.push(i),i}function da(i,e,t,n,r,s){return ag(No(i,e,t,n,r,s,!0))}function pS(i,e,t,n,r){return ag(Xn(i,e,t,n,r,!0))}function Ef(i){return i?i.__v_isVNode===!0:!1}function Ho(i,e){return i.type===e.type&&i.key===e.key}const lg=({key:i})=>i??null,ql=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Gt(i)||Nn(i)||Ke(i)?{i:mi,r:i,k:e,f:!!t}:i:null);function No(i,e=null,t=null,n=0,r=null,s=i===fi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&lg(e),ref:e&&ql(e),scopeId:Oc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mi};return a?(bh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Gt(t)?8:16),Ia>0&&!o&&_i&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_i.push(l),l}const Xn=mS;function mS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Lx)&&(i=Da),Ef(i)){const a=Mo(i,e,!0);return t&&bh(a,t),Ia>0&&!s&&_i&&(a.shapeFlag&6?_i[_i.indexOf(i)]=a:_i.push(a)),a.patchFlag|=-2,a}if(AS(i)&&(i=i.__vccOpts),e){e=_S(e);let{class:a,style:l}=e;a&&!Gt(a)&&(e.class=hh(a)),Rt(l)&&(P_(l)&&!qe(l)&&(l=Zt({},l)),e.style=fh(l))}const o=Gt(i)?1:Ix(i)?128:hS(i)?64:Rt(i)?4:Ke(i)?2:0;return No(i,e,t,n,r,o,s,!0)}function _S(i){return i?P_(i)||Q_(i)?Zt({},i):i:null}function Mo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?gS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&lg(c),ref:e&&e.ref?t&&s?qe(s)?s.concat(ql(e)):[s,ql(e)]:ql(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==fi?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Mo(i.ssContent),ssFallback:i.ssFallback&&Mo(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&(u.transition=l.clone(u)),u}function cg(i=" ",e=0){return Xn(Bc,null,i,e)}function Ai(i){return i==null||typeof i=="boolean"?Xn(Da):qe(i)?Xn(fi,null,i.slice()):typeof i=="object"?gr(i):Xn(Bc,null,String(i))}function gr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Mo(i)}function bh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),bh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Q_(e)?e._ctx=mi:r===3&&mi&&(mi.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:mi},t=32):(e=String(e),n&64?(t=16,e=[cg(e)]):t=8);i.children=e,i.shapeFlag|=t}function gS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=hh([e.class,n.class]));else if(r==="style")e.style=fh([e.style,n.style]);else if(Rc(r)){const s=e[r],o=n[r];o&&s!==o&&!(qe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function yi(i,e,t,n=null){vi(i,e,7,[t,n])}const vS=K_();let xS=0;function SS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||vS,s={uid:xS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tg(n,r),emitsOptions:k_(n,r),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:n.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yx.bind(null,s),i.ce&&i.ce(s),s}let ln=null,ac,Tf;{const i=d_(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ac=e("__VUE_INSTANCE_SETTERS__",t=>ln=t),Tf=e("__VUE_SSR_SETTERS__",t=>zc=t)}const qa=i=>{const e=ln;return ac(i),i.scope.on(),()=>{i.scope.off(),ac(e)}},bd=()=>{ln&&ln.scope.off(),ac(null)};function ug(i){return i.vnode.shapeFlag&4}let zc=!1;function MS(i,e=!1){e&&Tf(e);const{props:t,children:n}=i.vnode,r=ug(i);iS(i,t,r,e),oS(i,n);const s=r?yS(i,e):void 0;return e&&Tf(!1),s}function yS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,jx);const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?TS(i):null,s=qa(i);Vr();const o=Cr(n,i,0,[i.props,r]);if(Gr(),s(),c_(o)){if(o.then(bd,bd),e)return o.then(a=>{Ad(i,a,e)}).catch(a=>{Uc(a,i,0)});i.asyncDep=o}else Ad(i,o,e)}else fg(i,e)}function Ad(i,e,t){Ke(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Rt(e)&&(i.setupState=U_(e)),fg(i,t)}let wd;function fg(i,e,t){const n=i.type;if(!i.render){if(!e&&wd&&!n.render){const r=n.template||Eh(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Zt(Zt({isCustomElement:s,delimiters:a},o),l);n.render=wd(r,c)}}i.render=n.render||ei}{const r=qa(i);Vr();try{Kx(i)}finally{Gr(),r()}}}const ES={get(i,e){return Un(i,"get",""),i[e]}};function TS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,ES),slots:i.slots,emit:i.emit,expose:e}}function Ah(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(U_(fx(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ua)return ua[t](i)},has(e,t){return t in e||t in ua}}))}function bS(i,e=!0){return Ke(i)?i.displayName||i.name:i.name||e&&i.__name}function AS(i){return Ke(i)&&"__vccOpts"in i}const di=(i,e)=>hx(i,e,zc);function hg(i,e,t){const n=arguments.length;return n===2?Rt(e)&&!qe(e)?Ef(e)?Xn(i,null,[e]):Xn(i,e):Xn(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Ef(t)&&(t=[t]),Xn(i,e,t))}const wS="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const RS="http://www.w3.org/2000/svg",CS="http://www.w3.org/1998/Math/MathML",vr=typeof document<"u"?document:null,Rd=vr&&vr.createElement("template"),PS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?vr.createElementNS(RS,i):e==="mathml"?vr.createElementNS(CS,i):vr.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>vr.createTextNode(i),createComment:i=>vr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>vr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Rd.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=Rd.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},LS=Symbol("_vtc");function DS(i,e,t){const n=i[LS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Cd=Symbol("_vod"),IS=Symbol("_vsh"),US=Symbol(""),NS=/(^|;)\s*display\s*:/;function OS(i,e,t){const n=i.style,r=Gt(t);let s=!1;if(t&&!r){if(e)if(Gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Yl(n,a,"")}else for(const o in e)t[o]==null&&Yl(n,o,"");for(const o in t)o==="display"&&(s=!0),Yl(n,o,t[o])}else if(r){if(e!==t){const o=n[US];o&&(t+=";"+o),n.cssText=t,s=NS.test(t)}}else e&&i.removeAttribute("style");Cd in i&&(i[Cd]=s?n.display:"",i[IS]&&(n.display="none"))}const Pd=/\s*!important$/;function Yl(i,e,t){if(qe(t))t.forEach(n=>Yl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=FS(i,e);Pd.test(t)?i.setProperty(Uo(n),t.replace(Pd,""),"important"):i[n]=t}}const Ld=["Webkit","Moz","ms"],lu={};function FS(i,e){const t=lu[e];if(t)return t;let n=Bi(e);if(n!=="filter"&&n in i)return lu[e]=n;n=Lc(n);for(let r=0;r<Ld.length;r++){const s=Ld[r]+n;if(s in i)return lu[e]=s}return e}const Dd="http://www.w3.org/1999/xlink";function BS(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Dd,e.slice(6,e.length)):i.setAttributeNS(Dd,e,t);else{const s=Vv(e);t==null||s&&!p_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function zS(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,u=t??"";(c!==u||!("_value"in i))&&(i.value=u),t==null&&i.removeAttribute(e),i._value=t;return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=p_(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function kS(i,e,t,n){i.addEventListener(e,t,n)}function HS(i,e,t,n){i.removeEventListener(e,t,n)}const Id=Symbol("_vei");function VS(i,e,t,n,r=null){const s=i[Id]||(i[Id]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=GS(e);if(n){const c=s[e]=qS(n,r);kS(i,a,c,l)}else o&&(HS(i,a,o,l),s[e]=void 0)}}const Ud=/(?:Once|Passive|Capture)$/;function GS(i){let e;if(Ud.test(i)){e={};let n;for(;n=i.match(Ud);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Uo(i.slice(2)),e]}let cu=0;const WS=Promise.resolve(),XS=()=>cu||(WS.then(()=>cu=0),cu=Date.now());function qS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;vi(YS(n,t.value),e,5,[n])};return t.value=i,t.attached=XS(),t}function YS(i,e){if(qe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Nd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,$S=(i,e,t,n,r,s,o,a,l)=>{const c=r==="svg";e==="class"?DS(i,n,c):e==="style"?OS(i,t,n):Rc(e)?lh(e)||VS(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jS(i,e,n,c))?zS(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),BS(i,e,n,c))};function jS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Nd(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nd(e)&&Gt(t)?!1:e in i}const KS=Zt({patchProp:$S},PS);let Od;function ZS(){return Od||(Od=lS(KS))}const JS=(...i)=>{const e=ZS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=eM(n);if(!r)return;const s=e._component;!Ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,QS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function QS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function eM(i){return Gt(i)?document.querySelector(i):i}const dg=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},tM={};function nM(i,e){const t=Px("RouterView");return uo(),pS(t)}const iM=dg(tM,[["render",nM]]),rM="modulepreload",sM=function(i,e){return new URL(i,e).href},Fd={},oM=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(t.map(l=>{if(l=sM(l,n),l in Fd)return;Fd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!n)for(let d=s.length-1;d>=0;d--){const g=s[d];if(g.href===l&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":rM,c||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="164",aM=0,Bd=1,lM=2,pg=1,cM=2,Yi=3,Or=0,Rn=1,Ki=2,Pr=0,fo=1,zd=2,kd=3,Hd=4,uM=5,us=100,fM=101,hM=102,dM=103,pM=104,mM=200,_M=201,gM=202,vM=203,bf=204,Af=205,xM=206,SM=207,MM=208,yM=209,EM=210,TM=211,bM=212,AM=213,wM=214,RM=0,CM=1,PM=2,lc=3,LM=4,DM=5,IM=6,UM=7,Rh=0,NM=1,OM=2,Lr=0,FM=1,BM=2,zM=3,kM=4,HM=5,VM=6,GM=7,mg=300,yo=301,Eo=302,wf=303,Rf=304,kc=306,Cf=1e3,hs=1001,Pf=1002,ti=1003,WM=1004,rl=1005,pi=1006,uu=1007,ds=1008,Fr=1009,XM=1010,qM=1011,_g=1012,gg=1013,To=1014,Mr=1015,Hc=1016,vg=1017,xg=1018,Ya=1020,YM=35902,$M=1021,jM=1022,Li=1023,KM=1024,ZM=1025,ho=1026,Ua=1027,JM=1028,Sg=1029,QM=1030,Mg=1031,yg=1033,fu=33776,hu=33777,du=33778,pu=33779,Vd=35840,Gd=35841,Wd=35842,Xd=35843,qd=36196,Yd=37492,$d=37496,jd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,sp=37818,op=37819,ap=37820,lp=37821,mu=36492,cp=36494,up=36495,ey=36283,fp=36284,hp=36285,dp=36286,ty=3200,ny=3201,Eg=0,iy=1,Sr="",Ei="srgb",Wr="srgb-linear",Ch="display-p3",Vc="display-p3-linear",cc="linear",Mt="srgb",uc="rec709",fc="p3",Is=7680,pp=519,ry=512,sy=513,oy=514,Tg=515,ay=516,ly=517,cy=518,uy=519,mp=35044,_p="300 es",Ji=2e3,hc=2001;class Oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,Lf=180/Math.PI;function $a(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function wn(i,e,t){return Math.max(e,Math.min(t,i))}function fy(i,e){return(i%e+e)%e}function gu(i,e,t){return(1-t)*i+t*e}function Vo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],S=r[4],y=r[7],D=r[2],T=r[5],A=r[8];return s[0]=o*_+a*M+l*D,s[3]=o*m+a*S+l*T,s[6]=o*p+a*y+l*A,s[1]=c*_+u*M+h*D,s[4]=c*m+u*S+h*T,s[7]=c*p+u*y+h*A,s[2]=f*_+d*M+g*D,s[5]=f*m+d*S+g*T,s[8]=f*p+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vu.makeScale(e,t)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,t){return this.premultiply(vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new Je;function bg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hy(){const i=dc("canvas");return i.style.display="block",i}const gp={};function dy(i){i in gp||(gp[i]=!0,console.warn(i))}const vp=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xp=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sl={[Wr]:{transfer:cc,primaries:uc,toReference:i=>i,fromReference:i=>i},[Ei]:{transfer:Mt,primaries:uc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vc]:{transfer:cc,primaries:fc,toReference:i=>i.applyMatrix3(xp),fromReference:i=>i.applyMatrix3(vp)},[Ch]:{transfer:Mt,primaries:fc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xp),fromReference:i=>i.applyMatrix3(vp).convertLinearToSRGB()}},py=new Set([Wr,Vc]),_t={enabled:!0,_workingColorSpace:Wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!py.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=sl[e].toReference,r=sl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return sl[i].primaries},getTransfer:function(i){return i===Sr?cc:sl[i].transfer}};function po(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class my{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=dc("canvas")),Us.width=e.width,Us.height=e.height;const n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=po(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(po(t[n]/255)*255):t[n]=po(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _y=0;class Ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Su(r[o].image)):s.push(Su(r[o]))}else s=Su(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?my.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gy=0;class Cn extends Oo{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=hs,r=hs,s=pi,o=ds,a=Li,l=Fr,c=Cn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=$a(),this.name="",this.source=new Ag(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=mg;Cn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(d+1)/2,D=(p+1)/2,T=(u+f)/4,A=(h+_)/4,O=(g+m)/4;return S>y&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=A/n):y>D?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=O/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=A/s,r=O/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vy extends Oo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ag(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends vy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wg extends Cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xy extends Cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),T=Math.atan2(D,p*M);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}const y=a*M;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,n=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new $,Sp=new ja;class Ka{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ol.copy(n.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),al.subVectors(this.max,Go),Ns.subVectors(e.a,Go),Os.subVectors(e.b,Go),Fs.subVectors(e.c,Go),lr.subVectors(Os,Ns),cr.subVectors(Fs,Os),jr.subVectors(Ns,Fs);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-jr.z,jr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,jr.z,0,-jr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-jr.y,jr.x,0];return!yu(t,Ns,Os,Fs,al)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,Ns,Os,Fs,al))?!1:(ll.crossVectors(lr,cr),t=[ll.x,ll.y,ll.z],yu(t,Ns,Os,Fs,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new $,new $,new $,new $,new $,new $,new $,new $],oi=new $,ol=new Ka,Ns=new $,Os=new $,Fs=new $,lr=new $,cr=new $,jr=new $,Go=new $,al=new $,ll=new $,Kr=new $;function yu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Kr.fromArray(i,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sy=new Ka,Wo=new $,Eu=new $;class Gc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Wo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Eu)),this.expandByPoint(Wo.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new $,Tu=new $,cl=new $,ur=new $,bu=new $,ul=new $,Au=new $;class Rg{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tu.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(Tu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cl),a=ur.dot(this.direction),l=-ur.dot(cl),c=ur.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tu).addScaledVector(cl,f),d}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const n=Vi.dot(this.direction),r=Vi.dot(Vi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,r,s){bu.subVectors(t,e),ul.subVectors(n,e),Au.crossVectors(bu,ul);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(ur,ul));if(l<0)return null;const c=a*this.direction.dot(bu.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(My,e,yy)}lookAt(e,t,n){const r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(n,Fn),fr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(n,Fn)),fr.normalize(),fl.crossVectors(Fn,fr),r[0]=fr.x,r[4]=fl.x,r[8]=Fn.x,r[1]=fr.y,r[5]=fl.y,r[9]=Fn.y,r[2]=fr.z,r[6]=fl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],D=n[15],T=r[0],A=r[4],O=r[8],E=r[12],v=r[1],H=r[5],V=r[9],N=r[13],j=r[2],te=r[6],ne=r[10],ee=r[14],k=r[3],fe=r[7],L=r[11],me=r[15];return s[0]=o*T+a*v+l*j+c*k,s[4]=o*A+a*H+l*te+c*fe,s[8]=o*O+a*V+l*ne+c*L,s[12]=o*E+a*N+l*ee+c*me,s[1]=u*T+h*v+f*j+d*k,s[5]=u*A+h*H+f*te+d*fe,s[9]=u*O+h*V+f*ne+d*L,s[13]=u*E+h*N+f*ee+d*me,s[2]=g*T+_*v+m*j+p*k,s[6]=g*A+_*H+m*te+p*fe,s[10]=g*O+_*V+m*ne+p*L,s[14]=g*E+_*N+m*ee+p*me,s[3]=M*T+S*v+y*j+D*k,s[7]=M*A+S*H+y*te+D*fe,s[11]=M*O+S*V+y*ne+D*L,s[15]=M*E+S*N+y*ee+D*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,S=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,D=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=t*M+n*S+r*y+s*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=M*A,e[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*A,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*A,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*A,e[4]=S*A,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*A,e[8]=y*A,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=D*A,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,S=l*u,y=l*h,D=n.x,T=n.y,A=n.z;return r[0]=(1-(_+p))*D,r[1]=(d+y)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(f+p))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(g+S)*A,r[9]=(m-M)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bs.set(r[0],r[1],r[2]).length();const o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const c=1/s,u=1/o,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ji){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,g;if(a===Ji)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===hc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ji){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let g,_;if(a===Ji)g=(o+s)*h,_=-2*h;else if(a===hc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bs=new $,ai=new It,My=new $(0,0,0),yy=new $(1,1,1),fr=new $,fl=new $,Fn=new $,Mp=new It,yp=new ja;class zi{constructor(e=0,t=0,n=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ey=0;const Ep=new $,zs=new ja,Gi=new It,hl=new $,Xo=new $,Ty=new $,by=new ja,Tp=new $(1,0,0),bp=new $(0,1,0),Ap=new $(0,0,1),wp={type:"added"},Ay={type:"removed"},ks={type:"childadded",child:null},wu={type:"childremoved",child:null};class En extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new $,t=new zi,n=new ja,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Je}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,t){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Xo,hl,this.up):Gi.lookAt(hl,Xo,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Gi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ay),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Ty),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,by,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}En.DEFAULT_UP=new $(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new $,Wi=new $,Ru=new $,Xi=new $,Hs=new $,Vs=new $,Rp=new $,Cu=new $,Pu=new $,Lu=new $;class Ci{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){li.subVectors(r,t),Wi.subVectors(n,t),Ru.subVectors(e,t);const o=li.dot(li),a=li.dot(Wi),l=li.dot(Ru),c=Wi.dot(Wi),u=Wi.dot(Ru),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Wi.subVectors(e,t),li.cross(Wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),li.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Hs.subVectors(r,n),Vs.subVectors(s,n),Cu.subVectors(e,n);const l=Hs.dot(Cu),c=Vs.dot(Cu);if(l<=0&&c<=0)return t.copy(n);Pu.subVectors(e,r);const u=Hs.dot(Pu),h=Vs.dot(Pu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Hs,o);Lu.subVectors(e,s);const d=Hs.dot(Lu),g=Vs.dot(Lu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Vs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Rp.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Rp,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Du(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=fy(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Ei){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ei){const n=Pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return _t.fromWorkingColorSpace(rn.copy(this),e),Math.round(wn(rn.r*255,0,255))*65536+Math.round(wn(rn.g*255,0,255))*256+Math.round(wn(rn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ei){_t.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,r=rn.b;return e!==Ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(dl);const n=gu(hr.h,dl.h,t),r=gu(hr.s,dl.s,t),s=gu(hr.l,dl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ut;ut.NAMES=Pg;let wy=0;class Fo extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=fo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Af,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(n.blending=this.blending),this.side!==Or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bf&&(n.blendSrc=this.blendSrc),this.blendDst!==Af&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lg extends Fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new $,pl=new at;class Ni{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class Dg extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ig extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xi extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ry=0;const Kn=new It,Iu=new En,Gs=new $,Bn=new Ka,qo=new Ka,Yt=new $;class sr extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Ig:Dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Bn.min,qo.min),Bn.expandByPoint(Yt),Yt.addVectors(Bn.max,qo.max),Bn.expandByPoint(Yt)):(Bn.expandByPoint(qo.min),Bn.expandByPoint(qo.max))}Bn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),Yt.add(Gs)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new $,l[O]=new $;const c=new $,u=new $,h=new $,f=new at,d=new at,g=new at,_=new $,m=new $;function p(O,E,v){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,O),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const H=1/(d.x*g.y-g.x*d.y);isFinite(H)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(H),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(H),a[O].add(_),a[E].add(_),a[v].add(_),l[O].add(m),l[E].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,E=M.length;O<E;++O){const v=M[O],H=v.start,V=v.count;for(let N=H,j=H+V;N<j;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new $,y=new $,D=new $,T=new $;function A(O){D.fromBufferAttribute(r,O),T.copy(D);const E=a[O];S.copy(E),S.sub(D.multiplyScalar(D.dot(E))).normalize(),y.crossVectors(T,E);const H=y.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,H)}for(let O=0,E=M.length;O<E;++O){const v=M[O],H=v.start,V=v.count;for(let N=H,j=H+V;N<j;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ni(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new It,Zr=new Rg,ml=new Gc,Pp=new $,Ws=new $,Xs=new $,qs=new $,Uu=new $,_l=new $,gl=new at,vl=new at,xl=new at,Lp=new $,Dp=new $,Ip=new $,Sl=new $,Ml=new $;class gi extends En{constructor(e=new sr,t=new Lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Uu.fromBufferAttribute(h,e),o?_l.addScaledVector(Uu,u):_l.addScaledVector(Uu.sub(t),u))}t.add(_l)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(ml.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(ml,Pp)===null||Zr.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Cp.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Cp),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,D=S;y<D;y+=3){const T=a.getX(y),A=a.getX(y+1),O=a.getX(y+2);r=yl(this,p,e,n,c,u,h,T,A,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=yl(this,o,e,n,c,u,h,M,S,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,D=S;y<D;y+=3){const T=y,A=y+1,O=y+2;r=yl(this,p,e,n,c,u,h,T,A,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,y=m+2;r=yl(this,o,e,n,c,u,h,M,S,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Cy(i,e,t,n,r,s,o,a){let l;if(e.side===Rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ml);return c<t.near||c>t.far?null:{distance:c,point:Ml.clone(),object:i}}function yl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(c,qs);const u=Cy(i,e,t,n,Ws,Xs,qs,Sl);if(u){r&&(gl.fromBufferAttribute(r,a),vl.fromBufferAttribute(r,l),xl.fromBufferAttribute(r,c),u.uv=Ci.getInterpolation(Sl,Ws,Xs,qs,gl,vl,xl,new at)),s&&(gl.fromBufferAttribute(s,a),vl.fromBufferAttribute(s,l),xl.fromBufferAttribute(s,c),u.uv1=Ci.getInterpolation(Sl,Ws,Xs,qs,gl,vl,xl,new at)),o&&(Lp.fromBufferAttribute(o,a),Dp.fromBufferAttribute(o,l),Ip.fromBufferAttribute(o,c),u.normal=Ci.getInterpolation(Sl,Ws,Xs,qs,Lp,Dp,Ip,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Ci.getNormal(Ws,Xs,qs,h.normal),u.face=h}return u}class Bo extends sr{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(c,3)),this.setAttribute("normal",new xi(u,3)),this.setAttribute("uv",new xi(h,2));function g(_,m,p,M,S,y,D,T,A,O,E){const v=y/A,H=D/O,V=y/2,N=D/2,j=T/2,te=A+1,ne=O+1;let ee=0,k=0;const fe=new $;for(let L=0;L<ne;L++){const me=L*H-N;for(let Ce=0;Ce<te;Ce++){const Ge=Ce*v-V;fe[_]=Ge*M,fe[m]=me*S,fe[p]=j,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[p]=T>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(Ce/A),h.push(1-L/O),ee+=1}}for(let L=0;L<O;L++)for(let me=0;me<A;me++){const Ce=f+me+te*L,Ge=f+me+te*(L+1),Q=f+(me+1)+te*(L+1),de=f+(me+1)+te*L;l.push(Ce,Ge,de),l.push(Ge,Q,de),k+=6}a.addGroup(d,k,E),d+=k,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=bo(i[t]);for(const r in n)e[r]=n[r]}return e}function Py(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ug(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Ly={clone:bo,merge:_n};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ng extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new $,Up=new at,Np=new at;class Vn extends Ng{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Np),t.subVectors(Np,Up)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_u*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,$s=1;class Uy extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(Ys,$s,e,t);r.layers=this.layers,this.add(r);const s=new Vn(Ys,$s,e,t);s.layers=this.layers,this.add(s);const o=new Vn(Ys,$s,e,t);o.layers=this.layers,this.add(o);const a=new Vn(Ys,$s,e,t);a.layers=this.layers,this.add(a);const l=new Vn(Ys,$s,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Ys,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Og extends Cn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yo,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ny extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Og(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bo(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Pr});s.uniforms.tEquirect.value=t;const o=new gi(r,s),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=pi),new Uy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Nu=new $,Oy=new $,Fy=new Je;class is{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Nu.subVectors(n,t).cross(Oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fy.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Gc,El=new $;class Ph{constructor(e=new is,t=new is,n=new is,r=new is,s=new is,o=new is){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],S=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,m-d,y-p).normalize(),n[1].setComponents(l+s,f+c,m+d,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+M).normalize(),n[3].setComponents(l-o,f-u,m-g,y-M).normalize(),n[4].setComponents(l-a,f-h,m-_,y-S).normalize(),t===Ji)n[5].setComponents(l+a,f+h,m+_,y+S).normalize();else if(t===hc)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function By(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&f.length===0&&i.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wc extends sr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let S=0;S<c;S++){const y=S*h-s;g.push(y,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,y=M+c*(p+1),D=M+1+c*(p+1),T=M+1+c*p;d.push(S,y,T),d.push(y,D,T)}this.setIndex(d),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
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
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yy=`#ifdef USE_BATCHING
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
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,Qy=`#ifdef USE_BUMPMAP
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
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lE=`#define PI 3.141592653589793
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
} // validated`,cE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uE=`vec3 transformedNormal = objectNormal;
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
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",_E=`
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
}`,gE=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AE=`#ifdef USE_GRADIENTMAP
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
}`,wE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
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
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
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
#endif`,FE=`struct PhysicalMaterial {
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
}`,BE=`
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$E=`#if defined( USE_POINTS_UV )
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
#endif`,jE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
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
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,tT=`#ifdef USE_MORPHTARGETS
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
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
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
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ET=`float getShadowMask() {
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
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,AT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,RT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
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
}`,XT=`#if DEPTH_PACKING == 3200
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
}`,qT=`#define DISTANCE
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
}`,YT=`#define DISTANCE
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`uniform float scale;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,QT=`uniform vec3 diffuse;
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
}`,eb=`#define LAMBERT
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define MATCAP
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
}`,ib=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,sb=`#define NORMAL
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
}`,ob=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,lb=`#define STANDARD
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
}`,cb=`#define STANDARD
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
}`,ub=`#define TOON
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
}`,fb=`#define TOON
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
}`,hb=`uniform float size;
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 color;
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
}`,_b=`uniform float rotation;
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
}`,gb=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:zy,alphahash_pars_fragment:ky,alphamap_fragment:Hy,alphamap_pars_fragment:Vy,alphatest_fragment:Gy,alphatest_pars_fragment:Wy,aomap_fragment:Xy,aomap_pars_fragment:qy,batching_pars_vertex:Yy,batching_vertex:$y,begin_vertex:jy,beginnormal_vertex:Ky,bsdfs:Zy,iridescence_fragment:Jy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:rE,color_pars_fragment:sE,color_pars_vertex:oE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:cE,defaultnormal_vertex:uE,displacementmap_pars_vertex:fE,displacementmap_vertex:hE,emissivemap_fragment:dE,emissivemap_pars_fragment:pE,colorspace_fragment:mE,colorspace_pars_fragment:_E,envmap_fragment:gE,envmap_common_pars_fragment:vE,envmap_pars_fragment:xE,envmap_pars_vertex:SE,envmap_physical_pars_fragment:LE,envmap_vertex:ME,fog_vertex:yE,fog_pars_vertex:EE,fog_fragment:TE,fog_pars_fragment:bE,gradientmap_pars_fragment:AE,lightmap_pars_fragment:wE,lights_lambert_fragment:RE,lights_lambert_pars_fragment:CE,lights_pars_begin:PE,lights_toon_fragment:DE,lights_toon_pars_fragment:IE,lights_phong_fragment:UE,lights_phong_pars_fragment:NE,lights_physical_fragment:OE,lights_physical_pars_fragment:FE,lights_fragment_begin:BE,lights_fragment_maps:zE,lights_fragment_end:kE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:VE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:WE,map_fragment:XE,map_pars_fragment:qE,map_particle_fragment:YE,map_particle_pars_fragment:$E,metalnessmap_fragment:jE,metalnessmap_pars_fragment:KE,morphinstance_vertex:ZE,morphcolor_vertex:JE,morphnormal_vertex:QE,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:fT,opaque_fragment:hT,packing:dT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:_T,dithering_pars_fragment:gT,roughnessmap_fragment:vT,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:ST,shadowmap_pars_vertex:MT,shadowmap_vertex:yT,shadowmask_pars_fragment:ET,skinbase_vertex:TT,skinning_pars_vertex:bT,skinning_vertex:AT,skinnormal_vertex:wT,specularmap_fragment:RT,specularmap_pars_fragment:CT,tonemapping_fragment:PT,tonemapping_pars_fragment:LT,transmission_fragment:DT,transmission_pars_fragment:IT,uv_pars_fragment:UT,uv_pars_vertex:NT,uv_vertex:OT,worldpos_vertex:FT,background_vert:BT,background_frag:zT,backgroundCube_vert:kT,backgroundCube_frag:HT,cube_vert:VT,cube_frag:GT,depth_vert:WT,depth_frag:XT,distanceRGBA_vert:qT,distanceRGBA_frag:YT,equirect_vert:$T,equirect_frag:jT,linedashed_vert:KT,linedashed_frag:ZT,meshbasic_vert:JT,meshbasic_frag:QT,meshlambert_vert:eb,meshlambert_frag:tb,meshmatcap_vert:nb,meshmatcap_frag:ib,meshnormal_vert:rb,meshnormal_frag:sb,meshphong_vert:ob,meshphong_frag:ab,meshphysical_vert:lb,meshphysical_frag:cb,meshtoon_vert:ub,meshtoon_frag:fb,points_vert:hb,points_frag:db,shadow_vert:pb,shadow_frag:mb,sprite_vert:_b,sprite_frag:gb},be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},wi={basic:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:_n([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:_n([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:_n([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:_n([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:_n([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:_n([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:_n([be.common,be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:_n([be.lights,be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};wi.physical={uniforms:_n([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Tl={r:0,b:0,g:0},Qr=new zi,vb=new It;function xb(i,e,t,n,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function _(M){let S=!1;const y=g(M);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function m(M,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===kc)?(u===void 0&&(u=new gi(new Bo(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:bo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qr.copy(S.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vb.makeRotationFromEuler(Qr)),u.material.toneMapped=_t.getTransfer(y.colorSpace)!==Mt,(h!==y||f!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gi(new Wc(2,2),new Br({name:"BackgroundMaterial",uniforms:bo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(Tl,Ug(i)),n.buffers.color.setClear(Tl.r,Tl.g,Tl.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function Sb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(v,H,V,N,j){let te=!1;const ne=h(N,V,H);s!==ne&&(s=ne,c(s.object)),te=d(v,N,V,j),te&&g(v,N,V,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(v,H,V,N),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,H,V){const N=V.wireframe===!0;let j=n[v.id];j===void 0&&(j={},n[v.id]=j);let te=j[H.id];te===void 0&&(te={},j[H.id]=te);let ne=te[N];return ne===void 0&&(ne=f(l()),te[N]=ne),ne}function f(v){const H=[],V=[],N=[];for(let j=0;j<t;j++)H[j]=0,V[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:N,object:v,attributes:{},index:null}}function d(v,H,V,N){const j=s.attributes,te=H.attributes;let ne=0;const ee=V.getAttributes();for(const k in ee)if(ee[k].location>=0){const L=j[k];let me=te[k];if(me===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),L===void 0||L.attribute!==me||me&&L.data!==me.data)return!0;ne++}return s.attributesNum!==ne||s.index!==N}function g(v,H,V,N){const j={},te=H.attributes;let ne=0;const ee=V.getAttributes();for(const k in ee)if(ee[k].location>=0){let L=te[k];L===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const me={};me.attribute=L,L&&L.data&&(me.data=L.data),j[k]=me,ne++}s.attributes=j,s.attributesNum=ne,s.index=N}function _(){const v=s.newAttributes;for(let H=0,V=v.length;H<V;H++)v[H]=0}function m(v){p(v,0)}function p(v,H){const V=s.newAttributes,N=s.enabledAttributes,j=s.attributeDivisors;V[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),j[v]!==H&&(i.vertexAttribDivisor(v,H),j[v]=H)}function M(){const v=s.newAttributes,H=s.enabledAttributes;for(let V=0,N=H.length;V<N;V++)H[V]!==v[V]&&(i.disableVertexAttribArray(V),H[V]=0)}function S(v,H,V,N,j,te,ne){ne===!0?i.vertexAttribIPointer(v,H,V,j,te):i.vertexAttribPointer(v,H,V,N,j,te)}function y(v,H,V,N){_();const j=N.attributes,te=V.getAttributes(),ne=H.defaultAttributeValues;for(const ee in te){const k=te[ee];if(k.location>=0){let fe=j[ee];if(fe===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){const L=fe.normalized,me=fe.itemSize,Ce=e.get(fe);if(Ce===void 0)continue;const Ge=Ce.buffer,Q=Ce.type,de=Ce.bytesPerElement,pe=Q===i.INT||Q===i.UNSIGNED_INT||fe.gpuType===gg;if(fe.isInterleavedBufferAttribute){const B=fe.data,ue=B.stride,se=fe.offset;if(B.isInstancedInterleavedBuffer){for(let U=0;U<k.locationSize;U++)p(k.location+U,B.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let U=0;U<k.locationSize;U++)m(k.location+U);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let U=0;U<k.locationSize;U++)S(k.location+U,me/k.locationSize,Q,L,ue*de,(se+me/k.locationSize*U)*de,pe)}else{if(fe.isInstancedBufferAttribute){for(let B=0;B<k.locationSize;B++)p(k.location+B,fe.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<k.locationSize;B++)m(k.location+B);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let B=0;B<k.locationSize;B++)S(k.location+B,me/k.locationSize,Q,L,me*de,me/k.locationSize*B*de,pe)}}else if(ne!==void 0){const L=ne[ee];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(k.location,L);break;case 3:i.vertexAttrib3fv(k.location,L);break;case 4:i.vertexAttrib4fv(k.location,L);break;default:i.vertexAttrib1fv(k.location,L)}}}}M()}function D(){O();for(const v in n){const H=n[v];for(const V in H){const N=H[V];for(const j in N)u(N[j].object),delete N[j];delete H[V]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const H=n[v.id];for(const V in H){const N=H[V];for(const j in N)u(N[j].object),delete N[j];delete H[V]}delete n[v.id]}function A(v){for(const H in n){const V=n[H];if(V[v.id]===void 0)continue;const N=V[v.id];for(const j in N)u(N[j].object),delete N[j];delete V[v.id]}}function O(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Mb(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yb(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Li&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Hc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fr&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mr&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:y,maxSamples:D}}function Eb(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new is,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,S=M*4;let y=p.clippingState||null;l.value=y,y=u(g,f,S,d);for(let D=0;D!==S;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==_;++S,y+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tb(i){let e=new WeakMap;function t(o,a){return a===wf?o.mapping=yo:a===Rf&&(o.mapping=Eo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wf||a===Rf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ny(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bb extends Ng{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const io=4,Op=[.125,.215,.35,.446,.526,.582],fs=20,Ou=new bb,Fp=new ut;let Fu=null,Bu=0,zu=0,ku=!1;const rs=(1+Math.sqrt(5))/2,js=1/rs,Bp=[new $(-rs,js,0),new $(rs,js,0),new $(-js,0,rs),new $(js,0,rs),new $(0,rs,-js),new $(0,rs,js),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Bu,zu),this._renderer.xr.enabled=ku,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Hc,format:Li,colorSpace:Wr,depthBuffer:!1},r=kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ab(s)),this._blurMaterial=wb(s,e,t)}return r}_compileMaterial(e){const t=new gi(this._lodPlanes[0],e);this._renderer.compile(t,Ou)}_sceneToCubeUV(e,t,n,r){const a=new Vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fp),u.toneMapping=Lr,u.autoClear=!1;const d=new Lg({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new gi(new Bo,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Fp),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;bl(r,M*S,p>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yo||e.mapping===Eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ou)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bp[(r-s-1)%Bp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gi(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):fs;m>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const p=[];let M=0;for(let A=0;A<fs;++A){const O=A/_,E=Math.exp(-O*O/2);p.push(E),A===0?M+=E:A<m&&(M+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[r],D=3*y*(r>S-io?r-S+io:0),T=4*(this._cubeSize-y);bl(t,D,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Ou)}}function Ab(i){const e=[],t=[],n=[];let r=i;const s=i-io+1+Op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-io?l=Op[o-i+io-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,O=T>2?0:-1,E=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];M.set(E,_*g*T),S.set(f,m*g*T);const v=[T,T,T,T,T,T];y.set(v,p*g*T)}const D=new sr;D.setAttribute("position",new Ni(M,_)),D.setAttribute("uv",new Ni(S,m)),D.setAttribute("faceIndex",new Ni(y,p)),e.push(D),r>io&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kp(i,e,t){const n=new bs(i,e,t);return n.texture.mapping=kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wb(i,e,t){const n=new Float32Array(fs),r=new $(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Hp(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Vp(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function Rb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wf||l===Rf,u=l===yo||l===Eo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new zp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new zp(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Pb(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,y=M.length;S<y;S+=3){const D=M[S+0],T=M[S+1],A=M[S+2];f.push(D,T,T,A,A,D)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const D=S+0,T=S+1,A=S+2;f.push(D,T,T,A,A,D)}}else return;const m=new(bg(f)?Ig:Dg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Lb(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(f[m]/o,d[m]);else{_.multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M];for(let M=0;M<_.length;M++)t.update(p,n,_[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Db(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ib(i,e,t){const n=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*D*4*h),A=new wg(T,y,D,h);A.type=Mr,A.needsUpdate=!0;const O=S*4;for(let v=0;v<h;v++){const H=m[v],V=p[v],N=M[v],j=y*D*4*v;for(let te=0;te<H.count;te++){const ne=te*O;d===!0&&(r.fromBufferAttribute(H,te),T[j+ne+0]=r.x,T[j+ne+1]=r.y,T[j+ne+2]=r.z,T[j+ne+3]=0),g===!0&&(r.fromBufferAttribute(V,te),T[j+ne+4]=r.x,T[j+ne+5]=r.y,T[j+ne+6]=r.z,T[j+ne+7]=0),_===!0&&(r.fromBufferAttribute(N,te),T[j+ne+8]=r.x,T[j+ne+9]=r.y,T[j+ne+10]=r.z,T[j+ne+11]=N.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new at(y,D)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ub(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Bg extends Cn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ho,u!==ho&&u!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ho&&(n=To),n===void 0&&u===Ua&&(n=Ya),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zg=new Cn,kg=new Bg(1,1);kg.compareFunction=Tg;const Hg=new wg,Vg=new xy,Gg=new Og,Gp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function zo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Gp[r];if(s===void 0&&(s=new Float32Array(r),Gp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function zb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Yp.set(n),i.uniformMatrix2fv(this.addr,!1,Yp),Xt(t,n)}}function kb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;qp.set(n),i.uniformMatrix3fv(this.addr,!1,qp),Xt(t,n)}}function Hb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Xp.set(n),i.uniformMatrix4fv(this.addr,!1,Xp),Xt(t,n)}}function Vb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Wb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function qb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function $b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function jb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Kb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?kg:zg;t.setTexture2D(e||s,r)}function Zb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vg,r)}function Jb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gg,r)}function Qb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hg,r)}function eA(i){switch(i){case 5126:return Nb;case 35664:return Ob;case 35665:return Fb;case 35666:return Bb;case 35674:return zb;case 35675:return kb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return Yb;case 36295:return $b;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}function tA(i,e){i.uniform1fv(this.addr,e)}function nA(i,e){const t=zo(e,this.size,2);i.uniform2fv(this.addr,t)}function iA(i,e){const t=zo(e,this.size,3);i.uniform3fv(this.addr,t)}function rA(i,e){const t=zo(e,this.size,4);i.uniform4fv(this.addr,t)}function sA(i,e){const t=zo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oA(i,e){const t=zo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function aA(i,e){const t=zo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lA(i,e){i.uniform1iv(this.addr,e)}function cA(i,e){i.uniform2iv(this.addr,e)}function uA(i,e){i.uniform3iv(this.addr,e)}function fA(i,e){i.uniform4iv(this.addr,e)}function hA(i,e){i.uniform1uiv(this.addr,e)}function dA(i,e){i.uniform2uiv(this.addr,e)}function pA(i,e){i.uniform3uiv(this.addr,e)}function mA(i,e){i.uniform4uiv(this.addr,e)}function _A(i,e,t){const n=this.cache,r=e.length,s=Xc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zg,s[o])}function gA(i,e,t){const n=this.cache,r=e.length,s=Xc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vg,s[o])}function vA(i,e,t){const n=this.cache,r=e.length,s=Xc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gg,s[o])}function xA(i,e,t){const n=this.cache,r=e.length,s=Xc(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hg,s[o])}function SA(i){switch(i){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return aA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}class MA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eA(t.type)}}class yA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SA(t.type)}}class EA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function $p(i,e){i.seq.push(e),i.map[e.id]=e}function TA(i,e,t){const n=i.name,r=n.length;for(Hu.lastIndex=0;;){const s=Hu.exec(n),o=Hu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$p(t,c===void 0?new MA(a,i,e):new yA(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new EA(a),$p(t,h)),t=h}}}class $l{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);TA(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function jp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bA=37297;let AA=0;function wA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function RA(i){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i);let n;switch(e===t?n="":e===fc&&t===uc?n="LinearDisplayP3ToLinearSRGB":e===uc&&t===fc&&(n="LinearSRGBToLinearDisplayP3"),i){case Wr:case Vc:return[n,"LinearTransferOETF"];case Ei:case Ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wA(i.getShaderSource(e),o)}else return r}function CA(i,e){const t=RA(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function PA(i,e){let t;switch(e){case FM:t="Linear";break;case BM:t="Reinhard";break;case zM:t="OptimizedCineon";break;case kM:t="ACESFilmic";break;case VM:t="AgX";break;case GM:t="Neutral";break;case HM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function DA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ea(i){return i!==""}function Zp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(i){return i.replace(UA,OA)}const NA=new Map;function OA(i,e){let t=Ze[e];if(t===void 0){const n=NA.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Df(t)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(i){return i.replace(FA,BA)}function BA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function kA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yo:case Eo:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function VA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case NM:e="ENVMAP_BLENDING_MIX";break;case OM:e="ENVMAP_BLENDING_ADD";break}return e}function GA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WA(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zA(t),c=kA(t),u=HA(t),h=VA(t),f=GA(t),d=LA(t),g=DA(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Lr?PA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,CA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Df(o),o=Zp(o,t),o=Jp(o,t),a=Df(a),a=Zp(a,t),a=Jp(a,t),o=Qp(o),a=Qp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,y=M+p+a,D=jp(r,r.VERTEX_SHADER,S),T=jp(r,r.FRAGMENT_SHADER,y);r.attachShader(_,D),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(H){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(T).trim();let te=!0,ne=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,D,T);else{const ee=Kp(r,D,"vertex"),k=Kp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+V+`
`+ee+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(N===""||j==="")&&(ne=!1);ne&&(H.diagnostics={runnable:te,programLog:V,vertexShader:{log:N,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(D),r.deleteShader(T),O=new $l(r,_),E=IA(r,_)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,bA)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let XA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YA(e),t.set(e,n)),n}}class YA{constructor(e){this.id=XA++,this.code=e,this.usedTimes=0}}function $A(i,e,t,n,r,s,o){const a=new Cg,l=new qA,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,H,V,N){const j=V.fog,te=N.geometry,ne=E.isMeshStandardMaterial?V.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),k=ee&&ee.mapping===kc?ee.image.height:null,fe=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const L=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,me=L!==void 0?L.length:0;let Ce=0;te.morphAttributes.position!==void 0&&(Ce=1),te.morphAttributes.normal!==void 0&&(Ce=2),te.morphAttributes.color!==void 0&&(Ce=3);let Ge,Q,de,pe;if(fe){const it=wi[fe];Ge=it.vertexShader,Q=it.fragmentShader}else Ge=E.vertexShader,Q=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const B=i.getRenderTarget(),ue=N.isInstancedMesh===!0,se=N.isBatchedMesh===!0,U=!!E.map,we=!!E.matcap,ge=!!ee,w=!!E.aoMap,C=!!E.lightMap,z=!!E.bumpMap,q=!!E.normalMap,P=!!E.displacementMap,ce=!!E.emissiveMap,R=!!E.metalnessMap,x=!!E.roughnessMap,I=E.anisotropy>0,F=E.clearcoat>0,X=E.dispersion>0,J=E.iridescence>0,oe=E.sheen>0,ae=E.transmission>0,re=I&&!!E.anisotropyMap,Se=F&&!!E.clearcoatMap,he=F&&!!E.clearcoatNormalMap,xe=F&&!!E.clearcoatRoughnessMap,ze=J&&!!E.iridescenceMap,ye=J&&!!E.iridescenceThicknessMap,Re=oe&&!!E.sheenColorMap,Fe=oe&&!!E.sheenRoughnessMap,We=!!E.specularMap,$e=!!E.specularColorMap,De=!!E.specularIntensityMap,G=ae&&!!E.transmissionMap,ie=ae&&!!E.thicknessMap,le=!!E.gradientMap,ve=!!E.alphaMap,Me=E.alphaTest>0,Ye=!!E.alphaHash,lt=!!E.extensions;let pt=Lr;E.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(pt=i.toneMapping);const vt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Q,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:se,instancing:ue,instancingColor:ue&&N.instanceColor!==null,instancingMorph:ue&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Wr,alphaToCoverage:!!E.alphaToCoverage,map:U,matcap:we,envMap:ge,envMapMode:ge&&ee.mapping,envMapCubeUVHeight:k,aoMap:w,lightMap:C,bumpMap:z,normalMap:q,displacementMap:f&&P,emissiveMap:ce,normalMapObjectSpace:q&&E.normalMapType===iy,normalMapTangentSpace:q&&E.normalMapType===Eg,metalnessMap:R,roughnessMap:x,anisotropy:I,anisotropyMap:re,clearcoat:F,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:xe,dispersion:X,iridescence:J,iridescenceMap:ze,iridescenceThicknessMap:ye,sheen:oe,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:We,specularColorMap:$e,specularIntensityMap:De,transmission:ae,transmissionMap:G,thicknessMap:ie,gradientMap:le,opaque:E.transparent===!1&&E.blending===fo&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Me,alphaHash:Ye,combine:E.combine,mapUv:U&&_(E.map.channel),aoMapUv:w&&_(E.aoMap.channel),lightMapUv:C&&_(E.lightMap.channel),bumpMapUv:z&&_(E.bumpMap.channel),normalMapUv:q&&_(E.normalMap.channel),displacementMapUv:P&&_(E.displacementMap.channel),emissiveMapUv:ce&&_(E.emissiveMap.channel),metalnessMapUv:R&&_(E.metalnessMap.channel),roughnessMapUv:x&&_(E.roughnessMap.channel),anisotropyMapUv:re&&_(E.anisotropyMap.channel),clearcoatMapUv:Se&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(E.sheenRoughnessMap.channel),specularMapUv:We&&_(E.specularMap.channel),specularColorMapUv:$e&&_(E.specularColorMap.channel),specularIntensityMapUv:De&&_(E.specularIntensityMap.channel),transmissionMapUv:G&&_(E.transmissionMap.channel),thicknessMapUv:ie&&_(E.thicknessMap.channel),alphaMapUv:ve&&_(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(q||I),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!te.attributes.uv&&(U||ve),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:U&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ki,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:lt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)v.push(H),v.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(M(v,E),S(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function M(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function S(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),E.push(a.mask)}function y(E){const v=g[E.type];let H;if(v){const V=wi[v];H=Ly.clone(V.uniforms)}else H=E.uniforms;return H}function D(E,v){let H;for(let V=0,N=u.length;V<N;V++){const j=u[V];if(j.cacheKey===v){H=j,++H.usedTimes;break}}return H===void 0&&(H=new WA(i,v,E,s),u.push(H)),H}function T(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:O}}function jA(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function KA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||KA),n.length>1&&n.sort(f||tm),r.length>1&&r.sort(f||tm)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ZA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new nm,i.set(n,[o])):r>=s.length?(o=new nm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function JA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new ut};break;case"SpotLight":t={position:new $,direction:new $,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function QA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ew=0;function tw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nw(i){const e=new JA,t=QA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new It,o=new It;function a(c,u){let h=0,f=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,S=0,y=0,D=0,T=0,A=0,O=0;c.sort(tw);const E=u===!0?Math.PI:1;for(let H=0,V=c.length;H<V;H++){const N=c[H],j=N.color,te=N.intensity,ne=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=j.r*te*E,f+=j.g*te*E,d+=j.b*te*E;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],te);O++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const fe=N.shadow,L=t.get(N);L.shadowBias=fe.bias,L.shadowNormalBias=fe.normalBias,L.shadowRadius=fe.radius,L.shadowMapSize=fe.mapSize,n.directionalShadow[g]=L,n.directionalShadowMap[g]=ee,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=k,g++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(j).multiplyScalar(te*E),k.distance=ne,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[m]=k;const fe=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,fe.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[m]=fe.matrix,N.castShadow){const L=t.get(N);L.shadowBias=fe.bias,L.shadowNormalBias=fe.normalBias,L.shadowRadius=fe.radius,L.shadowMapSize=fe.mapSize,n.spotShadow[m]=L,n.spotShadowMap[m]=ee,D++}m++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(j).multiplyScalar(te),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=k,p++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*E),k.distance=N.distance,k.decay=N.decay,N.castShadow){const fe=N.shadow,L=t.get(N);L.shadowBias=fe.bias,L.shadowNormalBias=fe.normalBias,L.shadowRadius=fe.radius,L.shadowMapSize=fe.mapSize,L.shadowCameraNear=fe.camera.near,L.shadowCameraFar=fe.camera.far,n.pointShadow[_]=L,n.pointShadowMap[_]=ee,n.pointShadowMatrix[_]=N.shadow.matrix,y++}n.point[_]=k,_++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(te*E),k.groundColor.copy(N.groundColor).multiplyScalar(te*E),n.hemi[M]=k,M++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==M||v.numDirectionalShadows!==S||v.numPointShadows!==y||v.numSpotShadows!==D||v.numSpotMaps!==T||v.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=D+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=O,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=M,v.numDirectionalShadows=S,v.numPointShadows=y,v.numSpotShadows=D,v.numSpotMaps=T,v.numLightProbes=O,n.version=ew++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function im(i){const e=new nw(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iw(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new im(i),e.set(r,[a])):s>=o.length?(a=new im(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class rw extends Fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sw extends Fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aw=`uniform sampler2D shadow_pass;
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
}`;function lw(i,e,t){let n=new Ph;const r=new at,s=new at,o=new At,a=new rw({depthPacking:ny}),l=new sw,c={},u=t.maxTextureSize,h={[Or]:Rn,[Rn]:Or,[Ki]:Ki},f=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ow,fragmentShader:aw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let p=this.type;this.render=function(T,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),v=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Pr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const N=p!==Yi&&this.type===Yi,j=p===Yi&&this.type!==Yi;for(let te=0,ne=T.length;te<ne;te++){const ee=T[te],k=ee.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const fe=k.getFrameExtents();if(r.multiply(fe),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,k.mapSize.y=s.y)),k.map===null||N===!0||j===!0){const me=this.type!==Yi?{minFilter:ti,magFilter:ti}:{};k.map!==null&&k.map.dispose(),k.map=new bs(r.x,r.y,me),k.map.texture.name=ee.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const L=k.getViewportCount();for(let me=0;me<L;me++){const Ce=k.getViewport(me);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),V.viewport(o),k.updateMatrices(ee,me),n=k.getFrustum(),y(A,O,k.camera,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Yi&&M(k,O),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,H)};function M(T,A){const O=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bs(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,O,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,O,d,_,null)}function S(T,A,O,E){let v=null;const H=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)v=H;else if(v=O.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=v.uuid,N=A.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let te=j[N];te===void 0&&(te=v.clone(),j[N]=te,A.addEventListener("dispose",D)),v=te}if(v.visible=A.visible,v.wireframe=A.wireframe,E===Yi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=i.properties.get(v);V.light=O}return v}function y(T,A,O,E,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Yi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const N=e.update(T),j=T.material;if(Array.isArray(j)){const te=N.groups;for(let ne=0,ee=te.length;ne<ee;ne++){const k=te[ne],fe=j[k.materialIndex];if(fe&&fe.visible){const L=S(T,fe,E,v);T.onBeforeShadow(i,T,A,O,N,L,k),i.renderBufferDirect(O,null,N,L,T,k),T.onAfterShadow(i,T,A,O,N,L,k)}}}else if(j.visible){const te=S(T,j,E,v);T.onBeforeShadow(i,T,A,O,N,te,null),i.renderBufferDirect(O,null,N,te,T,null),T.onAfterShadow(i,T,A,O,N,te,null)}}const V=T.children;for(let N=0,j=V.length;N<j;N++)y(V[N],A,O,E,v)}function D(T){T.target.removeEventListener("dispose",D);for(const O in c){const E=c[O],v=T.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function cw(i){function e(){let G=!1;const ie=new At;let le=null;const ve=new At(0,0,0,0);return{setMask:function(Me){le!==Me&&!G&&(i.colorMask(Me,Me,Me,Me),le=Me)},setLocked:function(Me){G=Me},setClear:function(Me,Ye,lt,pt,vt){vt===!0&&(Me*=pt,Ye*=pt,lt*=pt),ie.set(Me,Ye,lt,pt),ve.equals(ie)===!1&&(i.clearColor(Me,Ye,lt,pt),ve.copy(ie))},reset:function(){G=!1,le=null,ve.set(-1,0,0,0)}}}function t(){let G=!1,ie=null,le=null,ve=null;return{setTest:function(Me){Me?pe(i.DEPTH_TEST):B(i.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!G&&(i.depthMask(Me),ie=Me)},setFunc:function(Me){if(le!==Me){switch(Me){case RM:i.depthFunc(i.NEVER);break;case CM:i.depthFunc(i.ALWAYS);break;case PM:i.depthFunc(i.LESS);break;case lc:i.depthFunc(i.LEQUAL);break;case LM:i.depthFunc(i.EQUAL);break;case DM:i.depthFunc(i.GEQUAL);break;case IM:i.depthFunc(i.GREATER);break;case UM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Me}},setLocked:function(Me){G=Me},setClear:function(Me){ve!==Me&&(i.clearDepth(Me),ve=Me)},reset:function(){G=!1,ie=null,le=null,ve=null}}}function n(){let G=!1,ie=null,le=null,ve=null,Me=null,Ye=null,lt=null,pt=null,vt=null;return{setTest:function(it){G||(it?pe(i.STENCIL_TEST):B(i.STENCIL_TEST))},setMask:function(it){ie!==it&&!G&&(i.stencilMask(it),ie=it)},setFunc:function(it,Be,Pe){(le!==it||ve!==Be||Me!==Pe)&&(i.stencilFunc(it,Be,Pe),le=it,ve=Be,Me=Pe)},setOp:function(it,Be,Pe){(Ye!==it||lt!==Be||pt!==Pe)&&(i.stencilOp(it,Be,Pe),Ye=it,lt=Be,pt=Pe)},setLocked:function(it){G=it},setClear:function(it){vt!==it&&(i.clearStencil(it),vt=it)},reset:function(){G=!1,ie=null,le=null,ve=null,Me=null,Ye=null,lt=null,pt=null,vt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,M=null,S=null,y=null,D=null,T=new ut(0,0,0),A=0,O=!1,E=null,v=null,H=null,V=null,N=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ee)[1]),te=ne>=1):ee.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),te=ne>=2);let k=null,fe={};const L=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ce=new At().fromArray(L),Ge=new At().fromArray(me);function Q(G,ie,le,ve){const Me=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(G,Ye),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<le;lt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ie+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ye}const de={};de[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),s.setFunc(lc),z(!1),q(Bd),pe(i.CULL_FACE),w(Pr);function pe(G){c[G]!==!0&&(i.enable(G),c[G]=!0)}function B(G){c[G]!==!1&&(i.disable(G),c[G]=!1)}function ue(G,ie){return u[G]!==ie?(i.bindFramebuffer(G,ie),u[G]=ie,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function se(G,ie){let le=f,ve=!1;if(G){le=h.get(ie),le===void 0&&(le=[],h.set(ie,le));const Me=G.textures;if(le.length!==Me.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,lt=Me.length;Ye<lt;Ye++)le[Ye]=i.COLOR_ATTACHMENT0+Ye;le.length=Me.length,ve=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ve=!0);ve&&i.drawBuffers(le)}function U(G){return d!==G?(i.useProgram(G),d=G,!0):!1}const we={[us]:i.FUNC_ADD,[fM]:i.FUNC_SUBTRACT,[hM]:i.FUNC_REVERSE_SUBTRACT};we[dM]=i.MIN,we[pM]=i.MAX;const ge={[mM]:i.ZERO,[_M]:i.ONE,[gM]:i.SRC_COLOR,[bf]:i.SRC_ALPHA,[EM]:i.SRC_ALPHA_SATURATE,[MM]:i.DST_COLOR,[xM]:i.DST_ALPHA,[vM]:i.ONE_MINUS_SRC_COLOR,[Af]:i.ONE_MINUS_SRC_ALPHA,[yM]:i.ONE_MINUS_DST_COLOR,[SM]:i.ONE_MINUS_DST_ALPHA,[TM]:i.CONSTANT_COLOR,[bM]:i.ONE_MINUS_CONSTANT_COLOR,[AM]:i.CONSTANT_ALPHA,[wM]:i.ONE_MINUS_CONSTANT_ALPHA};function w(G,ie,le,ve,Me,Ye,lt,pt,vt,it){if(G===Pr){g===!0&&(B(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),G!==uM){if(G!==_||it!==O){if((m!==us||S!==us)&&(i.blendEquation(i.FUNC_ADD),m=us,S=us),it)switch(G){case fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,M=null,y=null,D=null,T.set(0,0,0),A=0,_=G,O=it}return}Me=Me||ie,Ye=Ye||le,lt=lt||ve,(ie!==m||Me!==S)&&(i.blendEquationSeparate(we[ie],we[Me]),m=ie,S=Me),(le!==p||ve!==M||Ye!==y||lt!==D)&&(i.blendFuncSeparate(ge[le],ge[ve],ge[Ye],ge[lt]),p=le,M=ve,y=Ye,D=lt),(pt.equals(T)===!1||vt!==A)&&(i.blendColor(pt.r,pt.g,pt.b,vt),T.copy(pt),A=vt),_=G,O=!1}function C(G,ie){G.side===Ki?B(i.CULL_FACE):pe(i.CULL_FACE);let le=G.side===Rn;ie&&(le=!le),z(le),G.blending===fo&&G.transparent===!1?w(Pr):w(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const ve=G.stencilWrite;o.setTest(ve),ve&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):B(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(G){E!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),E=G)}function q(G){G!==aM?(pe(i.CULL_FACE),G!==v&&(G===Bd?i.cullFace(i.BACK):G===lM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B(i.CULL_FACE),v=G}function P(G){G!==H&&(te&&i.lineWidth(G),H=G)}function ce(G,ie,le){G?(pe(i.POLYGON_OFFSET_FILL),(V!==ie||N!==le)&&(i.polygonOffset(ie,le),V=ie,N=le)):B(i.POLYGON_OFFSET_FILL)}function R(G){G?pe(i.SCISSOR_TEST):B(i.SCISSOR_TEST)}function x(G){G===void 0&&(G=i.TEXTURE0+j-1),k!==G&&(i.activeTexture(G),k=G)}function I(G,ie,le){le===void 0&&(k===null?le=i.TEXTURE0+j-1:le=k);let ve=fe[le];ve===void 0&&(ve={type:void 0,texture:void 0},fe[le]=ve),(ve.type!==G||ve.texture!==ie)&&(k!==le&&(i.activeTexture(le),k=le),i.bindTexture(G,ie||de[G]),ve.type=G,ve.texture=ie)}function F(){const G=fe[k];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(G){Ce.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function Fe(G){Ge.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function We(G,ie){let le=l.get(ie);le===void 0&&(le=new WeakMap,l.set(ie,le));let ve=le.get(G);ve===void 0&&(ve=i.getUniformBlockIndex(ie,G.name),le.set(G,ve))}function $e(G,ie){const ve=l.get(ie).get(G);a.get(ie)!==ve&&(i.uniformBlockBinding(ie,ve,G.__bindingPointIndex),a.set(ie,ve))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,fe={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,M=null,S=null,y=null,D=null,T=new ut(0,0,0),A=0,O=!1,E=null,v=null,H=null,V=null,N=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:B,bindFramebuffer:ue,drawBuffers:se,useProgram:U,setBlending:w,setMaterial:C,setFlipSided:z,setCullFace:q,setLineWidth:P,setPolygonOffset:ce,setScissorTest:R,activeTexture:x,bindTexture:I,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:ze,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:$e,texStorage2D:he,texStorage3D:xe,texSubImage2D:oe,texSubImage3D:ae,compressedTexSubImage2D:re,compressedTexSubImage3D:Se,scissor:Re,viewport:Fe,reset:De}}function uw(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return d?new OffscreenCanvas(R,x):dc("canvas")}function _(R,x,I){let F=1;const X=ce(R);if((X.width>I||X.height>I)&&(F=I/Math.max(X.width,X.height)),F<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(F*X.width),oe=Math.floor(F*X.height);h===void 0&&(h=g(J,oe));const ae=x?g(J,oe):h;return ae.width=J,ae.height=oe,ae.getContext("2d").drawImage(R,0,0,J,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+J+"x"+oe+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==ti&&R.minFilter!==pi}function p(R){i.generateMipmap(R)}function M(R,x,I,F,X=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=x;if(x===i.RED&&(I===i.FLOAT&&(J=i.R32F),I===i.HALF_FLOAT&&(J=i.R16F),I===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.R8UI),I===i.UNSIGNED_SHORT&&(J=i.R16UI),I===i.UNSIGNED_INT&&(J=i.R32UI),I===i.BYTE&&(J=i.R8I),I===i.SHORT&&(J=i.R16I),I===i.INT&&(J=i.R32I)),x===i.RG&&(I===i.FLOAT&&(J=i.RG32F),I===i.HALF_FLOAT&&(J=i.RG16F),I===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.RG8UI),I===i.UNSIGNED_SHORT&&(J=i.RG16UI),I===i.UNSIGNED_INT&&(J=i.RG32UI),I===i.BYTE&&(J=i.RG8I),I===i.SHORT&&(J=i.RG16I),I===i.INT&&(J=i.RG32I)),x===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const oe=X?cc:_t.getTransfer(F);I===i.FLOAT&&(J=i.RGBA32F),I===i.HALF_FLOAT&&(J=i.RGBA16F),I===i.UNSIGNED_BYTE&&(J=oe===Mt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ti&&R.minFilter!==pi?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function y(R){const x=R.target;x.removeEventListener("dispose",y),T(x),x.isVideoTexture&&u.delete(x)}function D(R){const x=R.target;x.removeEventListener("dispose",D),O(x)}function T(R){const x=n.get(R);if(x.__webglInit===void 0)return;const I=R.source,F=f.get(I);if(F){const X=F[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&A(R),Object.keys(F).length===0&&f.delete(I)}n.remove(R)}function A(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const I=R.source,F=f.get(I);delete F[x.__cacheKey],o.memory.textures--}function O(R){const x=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let X=0;X<x.__webglFramebuffer[F].length;X++)i.deleteFramebuffer(x.__webglFramebuffer[F][X]);else i.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)i.deleteFramebuffer(x.__webglFramebuffer[F]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=R.textures;for(let F=0,X=I.length;F<X;F++){const J=n.get(I[F]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(I[F])}n.remove(R)}let E=0;function v(){E=0}function H(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function V(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function N(R,x){const I=n.get(R);if(R.isVideoTexture&&q(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){const F=R.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(I,R,x);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function j(R,x){const I=n.get(R);if(R.version>0&&I.__version!==R.version){Ce(I,R,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function te(R,x){const I=n.get(R);if(R.version>0&&I.__version!==R.version){Ce(I,R,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function ne(R,x){const I=n.get(R);if(R.version>0&&I.__version!==R.version){Ge(I,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const ee={[Cf]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Pf]:i.MIRRORED_REPEAT},k={[ti]:i.NEAREST,[WM]:i.NEAREST_MIPMAP_NEAREST,[rl]:i.NEAREST_MIPMAP_LINEAR,[pi]:i.LINEAR,[uu]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},fe={[ry]:i.NEVER,[uy]:i.ALWAYS,[sy]:i.LESS,[Tg]:i.LEQUAL,[oy]:i.EQUAL,[cy]:i.GEQUAL,[ay]:i.GREATER,[ly]:i.NOTEQUAL};function L(R,x){if(x.type===Mr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pi||x.magFilter===uu||x.magFilter===rl||x.magFilter===ds||x.minFilter===pi||x.minFilter===uu||x.minFilter===rl||x.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ee[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,k[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,k[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ti||x.minFilter!==rl&&x.minFilter!==ds||x.type===Mr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function me(R,x){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",y));const F=x.source;let X=f.get(F);X===void 0&&(X={},f.set(F,X));const J=V(x);if(J!==R.__cacheKey){X[J]===void 0&&(X[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),X[J].usedTimes++;const oe=X[R.__cacheKey];oe!==void 0&&(X[R.__cacheKey].usedTimes--,oe.usedTimes===0&&A(x)),R.__cacheKey=J,R.__webglTexture=X[J].texture}return I}function Ce(R,x,I){let F=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=i.TEXTURE_3D);const X=me(R,x),J=x.source;t.bindTexture(F,R.__webglTexture,i.TEXTURE0+I);const oe=n.get(J);if(J.version!==oe.__version||X===!0){t.activeTexture(i.TEXTURE0+I);const ae=_t.getPrimaries(_t.workingColorSpace),re=x.colorSpace===Sr?null:_t.getPrimaries(x.colorSpace),Se=x.colorSpace===Sr||ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let he=_(x.image,!1,r.maxTextureSize);he=P(x,he);const xe=s.convert(x.format,x.colorSpace),ze=s.convert(x.type);let ye=M(x.internalFormat,xe,ze,x.colorSpace,x.isVideoTexture);L(F,x);let Re;const Fe=x.mipmaps,We=x.isVideoTexture!==!0,$e=oe.__version===void 0||X===!0,De=J.dataReady,G=S(x,he);if(x.isDepthTexture)ye=i.DEPTH_COMPONENT16,x.type===Mr?ye=i.DEPTH_COMPONENT32F:x.type===To?ye=i.DEPTH_COMPONENT24:x.type===Ya&&(ye=i.DEPTH24_STENCIL8),$e&&(We?t.texStorage2D(i.TEXTURE_2D,1,ye,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ye,he.width,he.height,0,xe,ze,null));else if(x.isDataTexture)if(Fe.length>0){We&&$e&&t.texStorage2D(i.TEXTURE_2D,G,ye,Fe[0].width,Fe[0].height);for(let ie=0,le=Fe.length;ie<le;ie++)Re=Fe[ie],We?De&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Re.width,Re.height,xe,ze,Re.data):t.texImage2D(i.TEXTURE_2D,ie,ye,Re.width,Re.height,0,xe,ze,Re.data);x.generateMipmaps=!1}else We?($e&&t.texStorage2D(i.TEXTURE_2D,G,ye,he.width,he.height),De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,xe,ze,he.data)):t.texImage2D(i.TEXTURE_2D,0,ye,he.width,he.height,0,xe,ze,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,ye,Fe[0].width,Fe[0].height,he.depth);for(let ie=0,le=Fe.length;ie<le;ie++)Re=Fe[ie],x.format!==Li?xe!==null?We?De&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Re.width,Re.height,he.depth,xe,Re.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,ye,Re.width,Re.height,he.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Re.width,Re.height,he.depth,xe,ze,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,ye,Re.width,Re.height,he.depth,0,xe,ze,Re.data)}else{We&&$e&&t.texStorage2D(i.TEXTURE_2D,G,ye,Fe[0].width,Fe[0].height);for(let ie=0,le=Fe.length;ie<le;ie++)Re=Fe[ie],x.format!==Li?xe!==null?We?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Re.width,Re.height,xe,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,ye,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?De&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Re.width,Re.height,xe,ze,Re.data):t.texImage2D(i.TEXTURE_2D,ie,ye,Re.width,Re.height,0,xe,ze,Re.data)}else if(x.isDataArrayTexture)We?($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,ye,he.width,he.height,he.depth),De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,ze,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,he.width,he.height,he.depth,0,xe,ze,he.data);else if(x.isData3DTexture)We?($e&&t.texStorage3D(i.TEXTURE_3D,G,ye,he.width,he.height,he.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,ze,he.data)):t.texImage3D(i.TEXTURE_3D,0,ye,he.width,he.height,he.depth,0,xe,ze,he.data);else if(x.isFramebufferTexture){if($e)if(We)t.texStorage2D(i.TEXTURE_2D,G,ye,he.width,he.height);else{let ie=he.width,le=he.height;for(let ve=0;ve<G;ve++)t.texImage2D(i.TEXTURE_2D,ve,ye,ie,le,0,xe,ze,null),ie>>=1,le>>=1}}else if(Fe.length>0){if(We&&$e){const ie=ce(Fe[0]);t.texStorage2D(i.TEXTURE_2D,G,ye,ie.width,ie.height)}for(let ie=0,le=Fe.length;ie<le;ie++)Re=Fe[ie],We?De&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,xe,ze,Re):t.texImage2D(i.TEXTURE_2D,ie,ye,xe,ze,Re);x.generateMipmaps=!1}else if(We){if($e){const ie=ce(he);t.texStorage2D(i.TEXTURE_2D,G,ye,ie.width,ie.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,ze,he)}else t.texImage2D(i.TEXTURE_2D,0,ye,xe,ze,he);m(x)&&p(F),oe.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ge(R,x,I){if(x.image.length!==6)return;const F=me(R,x),X=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+I);const J=n.get(X);if(X.version!==J.__version||F===!0){t.activeTexture(i.TEXTURE0+I);const oe=_t.getPrimaries(_t.workingColorSpace),ae=x.colorSpace===Sr?null:_t.getPrimaries(x.colorSpace),re=x.colorSpace===Sr||oe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Se&&!he?xe[le]=_(x.image[le],!0,r.maxCubemapSize):xe[le]=he?x.image[le].image:x.image[le],xe[le]=P(x,xe[le]);const ze=xe[0],ye=s.convert(x.format,x.colorSpace),Re=s.convert(x.type),Fe=M(x.internalFormat,ye,Re,x.colorSpace),We=x.isVideoTexture!==!0,$e=J.__version===void 0||F===!0,De=X.dataReady;let G=S(x,ze);L(i.TEXTURE_CUBE_MAP,x);let ie;if(Se){We&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Fe,ze.width,ze.height);for(let le=0;le<6;le++){ie=xe[le].mipmaps;for(let ve=0;ve<ie.length;ve++){const Me=ie[ve];x.format!==Li?ye!==null?We?De&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,0,0,Me.width,Me.height,ye,Re,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,Fe,Me.width,Me.height,0,ye,Re,Me.data)}}}else{if(ie=x.mipmaps,We&&$e){ie.length>0&&G++;const le=ce(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Fe,le.width,le.height)}for(let le=0;le<6;le++)if(he){We?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,ye,Re,xe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,xe[le].width,xe[le].height,0,ye,Re,xe[le].data);for(let ve=0;ve<ie.length;ve++){const Ye=ie[ve].image[le].image;We?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,0,0,Ye.width,Ye.height,ye,Re,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,Fe,Ye.width,Ye.height,0,ye,Re,Ye.data)}}else{We?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye,Re,xe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ye,Re,xe[le]);for(let ve=0;ve<ie.length;ve++){const Me=ie[ve];We?De&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,0,0,ye,Re,Me.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,Fe,ye,Re,Me.image[le])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),J.__version=X.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Q(R,x,I,F,X,J){const oe=s.convert(I.format,I.colorSpace),ae=s.convert(I.type),re=M(I.internalFormat,oe,ae,I.colorSpace);if(!n.get(x).__hasExternalTextures){const he=Math.max(1,x.width>>J),xe=Math.max(1,x.height>>J);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,J,re,he,xe,x.depth,0,oe,ae,null):t.texImage2D(X,J,re,he,xe,0,oe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),z(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,X,n.get(I).__webglTexture,0,C(x)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,X,n.get(I).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(R,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer&&!x.stencilBuffer){let F=i.DEPTH_COMPONENT24;if(I||z(x)){const X=x.depthTexture;X&&X.isDepthTexture&&(X.type===Mr?F=i.DEPTH_COMPONENT32F:X.type===To&&(F=i.DEPTH_COMPONENT24));const J=C(x);z(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,F,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,F,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,F,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(x.depthBuffer&&x.stencilBuffer){const F=C(x);I&&z(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,i.DEPTH24_STENCIL8,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const F=x.textures;for(let X=0;X<F.length;X++){const J=F[X],oe=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),re=M(J.internalFormat,oe,ae,J.colorSpace),Se=C(x);I&&z(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,re,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const F=n.get(x.depthTexture).__webglTexture,X=C(x);if(x.depthTexture.format===ho)z(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(x.depthTexture.format===Ua)z(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function B(R){const x=n.get(R),I=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");pe(x.__webglFramebuffer,R)}else if(I){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]=i.createRenderbuffer(),de(x.__webglDepthbuffer[F],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),de(x.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(R,x,I){const F=n.get(R);x!==void 0&&Q(F.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&B(R)}function se(R){const x=R.texture,I=n.get(R),F=n.get(x);R.addEventListener("dispose",D);const X=R.textures,J=R.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=x.version,o.memory.textures++),J){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let re=0;re<x.mipmaps.length;re++)I.__webglFramebuffer[ae][re]=i.createFramebuffer()}else I.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)I.__webglFramebuffer[ae]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ae=0,re=X.length;ae<re;ae++){const Se=n.get(X[ae]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&z(R)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ae=0;ae<X.length;ae++){const re=X[ae];I.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ae]);const Se=s.convert(re.format,re.colorSpace),he=s.convert(re.type),xe=M(re.internalFormat,Se,he,re.colorSpace,R.isXRRenderTarget===!0),ze=C(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,I.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),de(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),L(i.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Q(I.__webglFramebuffer[ae][re],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,re);else Q(I.__webglFramebuffer[ae],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ae=0,re=X.length;ae<re;ae++){const Se=X[ae],he=n.get(Se);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),L(i.TEXTURE_2D,Se),Q(I.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(Se)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,F.__webglTexture),L(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Q(I.__webglFramebuffer[re],R,x,i.COLOR_ATTACHMENT0,ae,re);else Q(I.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,ae,0);m(x)&&p(ae),t.unbindTexture()}R.depthBuffer&&B(R)}function U(R){const x=R.textures;for(let I=0,F=x.length;I<F;I++){const X=x[I];if(m(X)){const J=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(X).__webglTexture;t.bindTexture(J,oe),p(J),t.unbindTexture()}}}const we=[],ge=[];function w(R){if(R.samples>0){if(z(R)===!1){const x=R.textures,I=R.width,F=R.height;let X=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(R),ae=x.length>1;if(ae)for(let re=0;re<x.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let re=0;re<x.length;re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Se=n.get(x[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,I,F,0,0,I,F,X,i.NEAREST),l===!0&&(we.length=0,ge.length=0,we.push(i.COLOR_ATTACHMENT0+re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(J),ge.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let re=0;re<x.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Se=n.get(x[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function C(R){return Math.min(r.maxSamples,R.samples)}function z(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function q(R){const x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function P(R,x){const I=R.colorSpace,F=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Wr&&I!==Sr&&(_t.getTransfer(I)===Mt?(F!==Li||X!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=v,this.setTexture2D=N,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=ue,this.setupRenderTarget=se,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=z}function fw(i,e){function t(n,r=Sr){let s;const o=_t.getTransfer(r);if(n===Fr)return i.UNSIGNED_BYTE;if(n===vg)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xg)return i.UNSIGNED_SHORT_5_5_5_1;if(n===YM)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===XM)return i.BYTE;if(n===qM)return i.SHORT;if(n===_g)return i.UNSIGNED_SHORT;if(n===gg)return i.INT;if(n===To)return i.UNSIGNED_INT;if(n===Mr)return i.FLOAT;if(n===Hc)return i.HALF_FLOAT;if(n===$M)return i.ALPHA;if(n===jM)return i.RGB;if(n===Li)return i.RGBA;if(n===KM)return i.LUMINANCE;if(n===ZM)return i.LUMINANCE_ALPHA;if(n===ho)return i.DEPTH_COMPONENT;if(n===Ua)return i.DEPTH_STENCIL;if(n===JM)return i.RED;if(n===Sg)return i.RED_INTEGER;if(n===QM)return i.RG;if(n===Mg)return i.RG_INTEGER;if(n===yg)return i.RGBA_INTEGER;if(n===fu||n===hu||n===du||n===pu)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===du)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vd||n===Gd||n===Wd||n===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qd||n===Yd||n===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qd||n===Yd)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$d)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jd||n===Kd||n===Zd||n===Jd||n===Qd||n===ep||n===tp||n===np||n===ip||n===rp||n===sp||n===op||n===ap||n===lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qd)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ep)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tp)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===np)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ip)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rp)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sp)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===op)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ap)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lp)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mu||n===cp||n===up)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===mu)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===up)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ey||n===fp||n===hp||n===dp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ya?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hw extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Al extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dw={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Al;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mw=`
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

}`;class _w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Cn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Br({vertexShader:pw,fragmentShader:mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Wc(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class gw extends Oo{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new _w,m=t.getContextAttributes();let p=null,M=null;const S=[],y=[],D=new at;let T=null;const A=new Vn;A.layers.enable(1),A.viewport=new At;const O=new Vn;O.layers.enable(2),O.viewport=new At;const E=[A,O],v=new hw;v.layers.enable(1),v.layers.enable(2);let H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=S[Q];return de===void 0&&(de=new Vu,S[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=S[Q];return de===void 0&&(de=new Vu,S[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=S[Q];return de===void 0&&(de=new Vu,S[Q]=de),de.getHandSpace()};function N(Q){const de=y.indexOf(Q.inputSource);if(de===-1)return;const pe=S[de];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,c||o),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",te);for(let Q=0;Q<S.length;Q++){const de=y[Q];de!==null&&(y[Q]=null,S[Q].disconnect(de))}H=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",j),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new bs(d.framebufferWidth,d.framebufferHeight,{format:Li,type:Fr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,pe=null,B=null;m.depth&&(B=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Ua:ho,pe=m.stencil?Ya:To);const ue={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new bs(f.textureWidth,f.textureHeight,{format:Li,type:Fr,depthTexture:new Bg(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(Q){for(let de=0;de<Q.removed.length;de++){const pe=Q.removed[de],B=y.indexOf(pe);B>=0&&(y[B]=null,S[B].disconnect(pe))}for(let de=0;de<Q.added.length;de++){const pe=Q.added[de];let B=y.indexOf(pe);if(B===-1){for(let se=0;se<S.length;se++)if(se>=y.length){y.push(pe),B=se;break}else if(y[se]===null){y[se]=pe,B=se;break}if(B===-1)break}const ue=S[B];ue&&ue.connect(pe)}}const ne=new $,ee=new $;function k(Q,de,pe){ne.setFromMatrixPosition(de.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const B=ne.distanceTo(ee),ue=de.projectionMatrix.elements,se=pe.projectionMatrix.elements,U=ue[14]/(ue[10]-1),we=ue[14]/(ue[10]+1),ge=(ue[9]+1)/ue[5],w=(ue[9]-1)/ue[5],C=(ue[8]-1)/ue[0],z=(se[8]+1)/se[0],q=U*C,P=U*z,ce=B/(-C+z),R=ce*-C;de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(R),Q.translateZ(ce),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const x=U+ce,I=we+ce,F=q-R,X=P+(B-R),J=ge*we/I*x,oe=w*we/I*x;Q.projectionMatrix.makePerspective(F,X,J,oe,x,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function fe(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;_.texture!==null&&(Q.near=_.depthNear,Q.far=_.depthFar),v.near=O.near=A.near=Q.near,v.far=O.far=A.far=Q.far,(H!==v.near||V!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),H=v.near,V=v.far,A.near=H,A.far=V,O.near=H,O.far=V,A.updateProjectionMatrix(),O.updateProjectionMatrix(),Q.updateProjectionMatrix());const de=Q.parent,pe=v.cameras;fe(v,de);for(let B=0;B<pe.length;B++)fe(pe[B],de);pe.length===2?k(v,A,O):v.projectionMatrix.copy(A.projectionMatrix),L(Q,v,de)};function L(Q,de,pe){pe===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null};let me=null;function Ce(Q,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let B=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,B=!0);for(let se=0;se<pe.length;se++){const U=pe[se];let we=null;if(d!==null)we=d.getViewport(U);else{const w=h.getViewSubImage(f,U);we=w.viewport,se===0&&(e.setRenderTargetTextures(M,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(M))}let ge=E[se];ge===void 0&&(ge=new Vn,ge.layers.enable(se),ge.viewport=new At,E[se]=ge),ge.matrix.fromArray(U.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(U.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(we.x,we.y,we.width,we.height),se===0&&(v.matrix.copy(ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),B===!0&&v.cameras.push(ge)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const se=h.getDepthInformation(pe[0]);se&&se.isValid&&se.texture&&_.init(e,se,r.renderState)}}for(let pe=0;pe<S.length;pe++){const B=y[pe],ue=S[pe];B!==null&&ue!==void 0&&ue.update(B,de,c||o)}_.render(e,v),me&&me(Q,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const Ge=new Fg;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const es=new zi,vw=new It;function xw(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ug(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,y=M.envMapRotation;if(S&&(m.envMap.value=S,es.copy(y),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(vw.makeRotationFromEuler(es)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*D,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sw(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(M,D);const T=e.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function u(M){const S=h();M.__bindingPointIndex=S;const y=i.createBuffer(),D=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=r[M.id],y=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=y.length;T<A;T++){const O=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,v=O.length;E<v;E++){const H=O[E];if(d(H,T,E,D)===!0){const V=H.__offset,N=Array.isArray(H.value)?H.value:[H.value];let j=0;for(let te=0;te<N.length;te++){const ne=N[te],ee=_(ne);typeof ne=="number"||typeof ne=="boolean"?(H.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,V+j,H.__data)):ne.isMatrix3?(H.__data[0]=ne.elements[0],H.__data[1]=ne.elements[1],H.__data[2]=ne.elements[2],H.__data[3]=0,H.__data[4]=ne.elements[3],H.__data[5]=ne.elements[4],H.__data[6]=ne.elements[5],H.__data[7]=0,H.__data[8]=ne.elements[6],H.__data[9]=ne.elements[7],H.__data[10]=ne.elements[8],H.__data[11]=0):(ne.toArray(H.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,y,D){const T=M.value,A=S+"_"+y;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{const O=D[A];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return D[A]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(M){const S=M.uniforms;let y=0;const D=16;for(let A=0,O=S.length;A<O;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,H=E.length;v<H;v++){const V=E[v],N=Array.isArray(V.value)?V.value:[V.value];for(let j=0,te=N.length;j<te;j++){const ne=N[j],ee=_(ne),k=y%D;k!==0&&D-k<ee.boundary&&(y+=D-k),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=ee.storage}}}const T=y%D;return T>0&&(y+=D-T),M.__size=y,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Mw{constructor(e={}){const{canvas:t=hy(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this._useLegacyLights=!1,this.toneMapping=Lr,this.toneMappingExposure=1;const S=this;let y=!1,D=0,T=0,A=null,O=-1,E=null;const v=new At,H=new At;let V=null;const N=new ut(0);let j=0,te=t.width,ne=t.height,ee=1,k=null,fe=null;const L=new At(0,0,te,ne),me=new At(0,0,te,ne);let Ce=!1;const Ge=new Ph;let Q=!1,de=!1;const pe=new It,B=new $,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return A===null?ee:1}let U=n;function we(b,W){return t.getContext(b,W)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const W="webgl2";if(U=we(W,b),U===null)throw we(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ge,w,C,z,q,P,ce,R,x,I,F,X,J,oe,ae,re,Se,he,xe,ze,ye,Re,Fe,We;function $e(){ge=new Cb(U),ge.init(),Re=new fw(U,ge),w=new yb(U,ge,e,Re),C=new cw(U),z=new Db(U),q=new jA,P=new uw(U,ge,C,q,w,Re,z),ce=new Tb(S),R=new Rb(S),x=new By(U),Fe=new Sb(U,x),I=new Pb(U,x,z,Fe),F=new Ub(U,I,x,z),xe=new Ib(U,w,P),re=new Eb(q),X=new $A(S,ce,R,ge,w,Fe,re),J=new xw(S,q),oe=new ZA,ae=new iw(ge),he=new xb(S,ce,R,C,F,f,l),Se=new lw(S,F,w),We=new Sw(U,z,w,C),ze=new Mb(U,ge,z),ye=new Lb(U,ge,z),z.programs=X.programs,S.capabilities=w,S.extensions=ge,S.properties=q,S.renderLists=oe,S.shadowMap=Se,S.state=C,S.info=z}$e();const De=new gw(S,U);this.xr=De,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(te,ne,!1))},this.getSize=function(b){return b.set(te,ne)},this.setSize=function(b,W,Y=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,ne=W,t.width=Math.floor(b*ee),t.height=Math.floor(W*ee),Y===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(te*ee,ne*ee).floor()},this.setDrawingBufferSize=function(b,W,Y){te=b,ne=W,ee=Y,t.width=Math.floor(b*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,W,Y,K){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,W,Y,K),C.viewport(v.copy(L).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(me)},this.setScissor=function(b,W,Y,K){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,W,Y,K),C.scissor(H.copy(me).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(b){C.setScissorTest(Ce=b)},this.setOpaqueSort=function(b){k=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(b=!0,W=!0,Y=!0){let K=0;if(b){let Z=!1;if(A!==null){const _e=A.texture.format;Z=_e===yg||_e===Mg||_e===Sg}if(Z){const _e=A.texture.type,Te=_e===Fr||_e===To||_e===_g||_e===Ya||_e===vg||_e===xg,Ae=he.getClearColor(),Oe=he.getClearAlpha(),He=Ae.r,Ue=Ae.g,Ie=Ae.b;Te?(d[0]=He,d[1]=Ue,d[2]=Ie,d[3]=Oe,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=He,g[1]=Ue,g[2]=Ie,g[3]=Oe,U.clearBufferiv(U.COLOR,0,g))}else K|=U.COLOR_BUFFER_BIT}W&&(K|=U.DEPTH_BUFFER_BIT),Y&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",le,!1),oe.dispose(),ae.dispose(),q.dispose(),ce.dispose(),R.dispose(),F.dispose(),Fe.dispose(),We.dispose(),X.dispose(),De.dispose(),De.removeEventListener("sessionstart",it),De.removeEventListener("sessionend",Be),Pe.stop()};function G(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=z.autoReset,W=Se.enabled,Y=Se.autoUpdate,K=Se.needsUpdate,Z=Se.type;$e(),z.autoReset=b,Se.enabled=W,Se.autoUpdate=Y,Se.needsUpdate=K,Se.type=Z}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){const W=b.target;W.removeEventListener("dispose",ve),Me(W)}function Me(b){Ye(b),q.remove(b)}function Ye(b){const W=q.get(b).programs;W!==void 0&&(W.forEach(function(Y){X.releaseProgram(Y)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,Y,K,Z,_e){W===null&&(W=ue);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Ae=qt(b,W,Y,K,Z);C.setMaterial(K,Te);let Oe=Y.index,He=1;if(K.wireframe===!0){if(Oe=I.getWireframeAttribute(Y),Oe===void 0)return;He=2}const Ue=Y.drawRange,Ie=Y.attributes.position;let ft=Ue.start*He,Ft=(Ue.start+Ue.count)*He;_e!==null&&(ft=Math.max(ft,_e.start*He),Ft=Math.min(Ft,(_e.start+_e.count)*He)),Oe!==null?(ft=Math.max(ft,0),Ft=Math.min(Ft,Oe.count)):Ie!=null&&(ft=Math.max(ft,0),Ft=Math.min(Ft,Ie.count));const en=Ft-ft;if(en<0||en===1/0)return;Fe.setup(Z,K,Ae,Y,Oe);let hn,je=ze;if(Oe!==null&&(hn=x.get(Oe),je=ye,je.setIndex(hn)),Z.isMesh)K.wireframe===!0?(C.setLineWidth(K.wireframeLinewidth*se()),je.setMode(U.LINES)):je.setMode(U.TRIANGLES);else if(Z.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),C.setLineWidth(ke*se()),Z.isLineSegments?je.setMode(U.LINES):Z.isLineLoop?je.setMode(U.LINE_LOOP):je.setMode(U.LINE_STRIP)}else Z.isPoints?je.setMode(U.POINTS):Z.isSprite&&je.setMode(U.TRIANGLES);if(Z.isBatchedMesh)Z._multiDrawInstances!==null?je.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances):je.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)je.renderInstances(ft,en,Z.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mi=Math.min(Y.instanceCount,ke);je.renderInstances(ft,en,Mi)}else je.render(ft,en)};function lt(b,W,Y){b.transparent===!0&&b.side===Ki&&b.forceSinglePass===!1?(b.side=Rn,b.needsUpdate=!0,Ct(b,W,Y),b.side=Or,b.needsUpdate=!0,Ct(b,W,Y),b.side=Ki):Ct(b,W,Y)}this.compile=function(b,W,Y=null){Y===null&&(Y=b),m=ae.get(Y),m.init(W),M.push(m),Y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),b!==Y&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(S._useLegacyLights);const K=new Set;return b.traverse(function(Z){const _e=Z.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Ae=_e[Te];lt(Ae,Y,Z),K.add(Ae)}else lt(_e,Y,Z),K.add(_e)}),M.pop(),m=null,K},this.compileAsync=function(b,W,Y=null){const K=this.compile(b,W,Y);return new Promise(Z=>{function _e(){if(K.forEach(function(Te){q.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){Z(b);return}setTimeout(_e,10)}ge.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let pt=null;function vt(b){pt&&pt(b)}function it(){Pe.stop()}function Be(){Pe.start()}const Pe=new Fg;Pe.setAnimationLoop(vt),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(b){pt=b,De.setAnimationLoop(b),b===null?Pe.stop():Pe.start()},De.addEventListener("sessionstart",it),De.addEventListener("sessionend",Be),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(W),W=De.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,W,A),m=ae.get(b,M.length),m.init(W),M.push(m),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ge.setFromProjectionMatrix(pe),de=this.localClippingEnabled,Q=re.init(this.clippingPlanes,de),_=oe.get(b,p.length),_.init(),p.push(_),ot(b,W,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(k,fe);const Y=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1;Y&&he.addToRenderList(_,b),this.info.render.frame++,Q===!0&&re.beginShadows();const K=m.state.shadowsArray;Se.render(K,b,W),Q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,_e=_.transmissive;if(m.setupLights(S._useLegacyLights),W.isArrayCamera){const Te=W.cameras;if(_e.length>0)for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const He=Te[Ae];Xe(Z,_e,b,He)}Y&&he.render(b);for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const He=Te[Ae];Ee(_,b,He,He.viewport)}}else _e.length>0&&Xe(Z,_e,b,W),Y&&he.render(b),Ee(_,b,W);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(S,b,W),Fe.resetDefaultState(),O=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],Q===!0&&re.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ot(b,W,Y,K){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ge.intersectsSprite(b)){K&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Te=F.update(b),Ae=b.material;Ae.visible&&_.push(b,Te,Ae,Y,B.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ge.intersectsObject(b))){const Te=F.update(b),Ae=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),B.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),B.copy(Te.boundingSphere.center)),B.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(Ae)){const Oe=Te.groups;for(let He=0,Ue=Oe.length;He<Ue;He++){const Ie=Oe[He],ft=Ae[Ie.materialIndex];ft&&ft.visible&&_.push(b,Te,ft,Y,B.z,Ie)}}else Ae.visible&&_.push(b,Te,Ae,Y,B.z,null)}}const _e=b.children;for(let Te=0,Ae=_e.length;Te<Ae;Te++)ot(_e[Te],W,Y,K)}function Ee(b,W,Y,K){const Z=b.opaque,_e=b.transmissive,Te=b.transparent;m.setupLightsView(Y),Q===!0&&re.setGlobalState(S.clippingPlanes,Y),K&&C.viewport(v.copy(K)),Z.length>0&&Ne(Z,W,Y),_e.length>0&&Ne(_e,W,Y),Te.length>0&&Ne(Te,W,Y),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Xe(b,W,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new bs(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Hc:Fr,minFilter:ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _e=m.state.transmissionRenderTarget[K.id],Te=K.viewport||v;_e.setSize(Te.z,Te.w);const Ae=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(N),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear();const Oe=S.toneMapping;S.toneMapping=Lr;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),Q===!0&&re.setGlobalState(S.clippingPlanes,K),Ne(b,Y,K),P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ie=0,ft=W.length;Ie<ft;Ie++){const Ft=W[Ie],en=Ft.object,hn=Ft.geometry,je=Ft.material,ke=Ft.group;if(je.side===Ki&&en.layers.test(K.layers)){const Mi=je.side;je.side=Rn,je.needsUpdate=!0,Ve(en,Y,K,hn,je,ke),je.side=Mi,je.needsUpdate=!0,Ue=!0}}Ue===!0&&(P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e))}S.setRenderTarget(Ae),S.setClearColor(N,j),He!==void 0&&(K.viewport=He),S.toneMapping=Oe}function Ne(b,W,Y){const K=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,_e=b.length;Z<_e;Z++){const Te=b[Z],Ae=Te.object,Oe=Te.geometry,He=K===null?Te.material:K,Ue=Te.group;Ae.layers.test(Y.layers)&&Ve(Ae,W,Y,Oe,He,Ue)}}function Ve(b,W,Y,K,Z,_e){b.onBeforeRender(S,W,Y,K,Z,_e),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(S,W,Y,K,b,_e),Z.transparent===!0&&Z.side===Ki&&Z.forceSinglePass===!1?(Z.side=Rn,Z.needsUpdate=!0,S.renderBufferDirect(Y,W,K,Z,b,_e),Z.side=Or,Z.needsUpdate=!0,S.renderBufferDirect(Y,W,K,Z,b,_e),Z.side=Ki):S.renderBufferDirect(Y,W,K,Z,b,_e),b.onAfterRender(S,W,Y,K,Z,_e)}function Ct(b,W,Y){W.isScene!==!0&&(W=ue);const K=q.get(b),Z=m.state.lights,_e=m.state.shadowsArray,Te=Z.state.version,Ae=X.getParameters(b,Z.state,_e,W,Y),Oe=X.getProgramCacheKey(Ae);let He=K.programs;K.environment=b.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(b.isMeshStandardMaterial?R:ce).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,He===void 0&&(b.addEventListener("dispose",ve),He=new Map,K.programs=He);let Ue=He.get(Oe);if(Ue!==void 0){if(K.currentProgram===Ue&&K.lightsStateVersion===Te)return Et(b,Ae),Ue}else Ae.uniforms=X.getUniforms(b),b.onBuild(Y,Ae,S),b.onBeforeCompile(Ae,S),Ue=X.acquireProgram(Ae,Oe),He.set(Oe,Ue),K.uniforms=Ae.uniforms;const Ie=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=re.uniform),Et(b,Ae),K.needsLights=xt(b),K.lightsStateVersion=Te,K.needsLights&&(Ie.ambientLightColor.value=Z.state.ambient,Ie.lightProbe.value=Z.state.probe,Ie.directionalLights.value=Z.state.directional,Ie.directionalLightShadows.value=Z.state.directionalShadow,Ie.spotLights.value=Z.state.spot,Ie.spotLightShadows.value=Z.state.spotShadow,Ie.rectAreaLights.value=Z.state.rectArea,Ie.ltc_1.value=Z.state.rectAreaLTC1,Ie.ltc_2.value=Z.state.rectAreaLTC2,Ie.pointLights.value=Z.state.point,Ie.pointLightShadows.value=Z.state.pointShadow,Ie.hemisphereLights.value=Z.state.hemi,Ie.directionalShadowMap.value=Z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ie.spotShadowMap.value=Z.state.spotShadowMap,Ie.spotLightMatrix.value=Z.state.spotLightMatrix,Ie.spotLightMap.value=Z.state.spotLightMap,Ie.pointShadowMap.value=Z.state.pointShadowMap,Ie.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.currentProgram=Ue,K.uniformsList=null,Ue}function Qe(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=$l.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Et(b,W){const Y=q.get(b);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function qt(b,W,Y,K,Z){W.isScene!==!0&&(W=ue),P.resetTextureUnits();const _e=W.fog,Te=K.isMeshStandardMaterial?W.environment:null,Ae=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wr,Oe=(K.isMeshStandardMaterial?R:ce).get(K.envMap||Te),He=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ue=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Ft=!!Y.morphAttributes.color;let en=Lr;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(en=S.toneMapping);const hn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,je=hn!==void 0?hn.length:0,ke=q.get(K),Mi=m.state.lights;if(Q===!0&&(de===!0||b!==E)){const jn=b===E&&K.id===O;re.setState(K,b,jn)}let ht=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Mi.state.version||ke.outputColorSpace!==Ae||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==Oe||K.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==re.numPlanes||ke.numIntersection!==re.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ue||ke.morphTargets!==Ie||ke.morphNormals!==ft||ke.morphColors!==Ft||ke.toneMapping!==en||ke.morphTargetsCount!==je)&&(ht=!0):(ht=!0,ke.__version=K.version);let qr=ke.currentProgram;ht===!0&&(qr=Ct(K,W,Z));let id=!1,ko=!1,Jc=!1;const tn=qr.getUniforms(),or=ke.uniforms;if(C.useProgram(qr.program)&&(id=!0,ko=!0,Jc=!0),K.id!==O&&(O=K.id,ko=!0),id||E!==b){tn.setValue(U,"projectionMatrix",b.projectionMatrix),tn.setValue(U,"viewMatrix",b.matrixWorldInverse);const jn=tn.map.cameraPosition;jn!==void 0&&jn.setValue(U,B.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&tn.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&tn.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ko=!0,Jc=!0)}if(Z.isSkinnedMesh){tn.setOptional(U,Z,"bindMatrix"),tn.setOptional(U,Z,"bindMatrixInverse");const jn=Z.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),tn.setValue(U,"boneTexture",jn.boneTexture,P))}Z.isBatchedMesh&&(tn.setOptional(U,Z,"batchingTexture"),tn.setValue(U,"batchingTexture",Z._matricesTexture,P));const Qc=Y.morphAttributes;if((Qc.position!==void 0||Qc.normal!==void 0||Qc.color!==void 0)&&xe.update(Z,Y,qr),(ko||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,tn.setValue(U,"receiveShadow",Z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(or.envMap.value=Oe,or.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(or.envMapIntensity.value=W.environmentIntensity),ko&&(tn.setValue(U,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&Tt(or,Jc),_e&&K.fog===!0&&J.refreshFogUniforms(or,_e),J.refreshMaterialUniforms(or,K,ee,ne,m.state.transmissionRenderTarget[b.id]),$l.upload(U,Qe(ke),or,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($l.upload(U,Qe(ke),or,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&tn.setValue(U,"center",Z.center),tn.setValue(U,"modelViewMatrix",Z.modelViewMatrix),tn.setValue(U,"normalMatrix",Z.normalMatrix),tn.setValue(U,"modelMatrix",Z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const jn=K.uniformsGroups;for(let eu=0,Pv=jn.length;eu<Pv;eu++){const rd=jn[eu];We.update(rd,qr),We.bind(rd,qr)}}return qr}function Tt(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function xt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,W,Y){q.get(b.texture).__webglTexture=W,q.get(b.depthTexture).__webglTexture=Y;const K=q.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const Y=q.get(b);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,Y=0){A=b,D=W,T=Y;let K=!0,Z=null,_e=!1,Te=!1;if(b){const Oe=q.get(b);Oe.__useDefaultFramebuffer!==void 0?(C.bindFramebuffer(U.FRAMEBUFFER,null),K=!1):Oe.__webglFramebuffer===void 0?P.setupRenderTarget(b):Oe.__hasExternalTextures&&P.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ue=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[W])?Z=Ue[W][Y]:Z=Ue[W],_e=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?Z=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?Z=Ue[Y]:Z=Ue,v.copy(b.viewport),H.copy(b.scissor),V=b.scissorTest}else v.copy(L).multiplyScalar(ee).floor(),H.copy(me).multiplyScalar(ee).floor(),V=Ce;if(C.bindFramebuffer(U.FRAMEBUFFER,Z)&&K&&C.drawBuffers(b,Z),C.viewport(v),C.scissor(H),C.setScissorTest(V),_e){const Oe=q.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,Y)}else if(Te){const Oe=q.get(b.texture),He=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,He)}O=-1},this.readRenderTargetPixels=function(b,W,Y,K,Z,_e,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){C.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Oe=b.texture,He=Oe.format,Ue=Oe.type;if(!w.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-K&&Y>=0&&Y<=b.height-Z&&U.readPixels(W,Y,K,Z,Re.convert(He),Re.convert(Ue),_e)}finally{const Oe=A!==null?q.get(A).__webglFramebuffer:null;C.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(b,W,Y=0){const K=Math.pow(2,-Y),Z=Math.floor(W.image.width*K),_e=Math.floor(W.image.height*K);P.setTexture2D(W,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,b.x,b.y,Z,_e),C.unbindTexture()},this.copyTextureToTexture=function(b,W,Y,K=0){const Z=W.image.width,_e=W.image.height,Te=Re.convert(Y.format),Ae=Re.convert(Y.type);P.setTexture2D(Y,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,K,b.x,b.y,Z,_e,Te,Ae,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,K,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Te,W.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,K,b.x,b.y,Te,Ae,W.image),K===0&&Y.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),C.unbindTexture()},this.copyTextureToTexture3D=function(b,W,Y,K,Z=0){const _e=b.max.x-b.min.x,Te=b.max.y-b.min.y,Ae=b.max.z-b.min.z,Oe=Re.convert(K.format),He=Re.convert(K.type);let Ue;if(K.isData3DTexture)P.setTexture3D(K,0),Ue=U.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)P.setTexture2DArray(K,0),Ue=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,K.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,K.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ft=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),hn=U.getParameter(U.UNPACK_SKIP_IMAGES),je=Y.isCompressedTexture?Y.mipmaps[Z]:Y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?U.texSubImage3D(Ue,Z,W.x,W.y,W.z,_e,Te,Ae,Oe,He,je.data):K.isCompressedArrayTexture?U.compressedTexSubImage3D(Ue,Z,W.x,W.y,W.z,_e,Te,Ae,Oe,je.data):U.texSubImage3D(Ue,Z,W.x,W.y,W.z,_e,Te,Ae,Oe,He,je),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,hn),Z===0&&K.generateMipmaps&&U.generateMipmap(Ue),C.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),C.unbindTexture()},this.resetState=function(){D=0,T=0,A=null,C.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ch?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Vc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yw extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wg extends Fo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new $,mc=new $,rm=new It,Yo=new Rg,wl=new Gc,Gu=new $,sm=new $;class Ew extends En{constructor(e=new sr,t=new Wg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)pc.fromBufferAttribute(t,r-1),mc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new xi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;rm.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(rm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),S=Rl(this,e,Yo,l,p,M);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Rl(this,e,Yo,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Rl(this,e,Yo,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Rl(this,e,Yo,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rl(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(pc.fromBufferAttribute(o,r),mc.fromBufferAttribute(o,s),t.distanceSqToSegment(pc,mc,Gu,sm)>n)return;Gu.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gu);if(!(l<e.near||l>e.far))return{distance:l,point:sm.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const om=new $,am=new $;class Tw extends Ew{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)om.fromBufferAttribute(t,r),am.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+om.distanceTo(am);e.setAttribute("lineDistance",new xi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lm extends Fo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eg,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xg extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wu=new It,cm=new $,um=new $;class bw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(cm),um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(um),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fm=new It,$o=new $,Xu=new $;class Aw extends bw{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$o.setFromMatrixPosition(e.matrixWorld),n.position.copy($o),Xu.copy(n.position),Xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xu),n.updateMatrixWorld(),r.makeTranslation(-$o.x,-$o.y,-$o.z),fm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fm)}}class ww extends Xg{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Aw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rw extends Xg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cw extends Tw{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new sr;r.setAttribute("position",new xi(t,3)),r.setAttribute("color",new xi(n,3));const s=new Wg({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ut,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function $i(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function qg(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},Dh,un,wt,ni=1e8,St=1/ni,If=Math.PI*2,Pw=If/4,Lw=0,Yg=Math.sqrt,Dw=Math.cos,Iw=Math.sin,Jt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},Ih=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},Uh=function(){return typeof window<"u"},Cl=function(e){return Ut(e)||Jt(e)},$g=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Uf=/(?:-?\.?\d|\.)+/gi,jg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kg=/[+-]=-?[.\d]+/,Zg=/[^,'"\[\]\s]+/gi,Uw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Ti,Nf,Nh,$n={},_c={},Jg,Qg=function(e){return(_c=As(e,$n))&&On},Oh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},e0=function(e,t){return e&&($n[e]=t)&&_c&&(_c[e]=t)||$n},Oa=function(){return 0},Nw={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},Ow={suppressEvents:!0},Fh={},Dr=[],Of={},t0,Hn={},Yu={},hm=30,Kl=[],Bh="",zh=function(e){var t=e[0],n,r;if(ki(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Kl.length;r--&&!Kl[r].targetTest(t););n=Kl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new b0(e[r],n)))||e.splice(r,1);return e},vs=function(e){return e._gsap||zh(ii(e))[0]._gsap},n0=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():Ih(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},mo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Fw=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gc=function(){var e=Dr.length,t=Dr.slice(0),n,r;for(Of={},Dr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},i0=function(e,t,n,r){Dr.length&&!un&&gc(),e.render(t,n,un&&t<0&&(e._initted||e._startAt)),Dr.length&&!un&&gc()},r0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zg).length<2?t:Jt(e)?e.trim():e},s0=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bw=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},As=function(e,t){for(var n in t)e[n]=t[n];return e},dm=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ki(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},vc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},pa=function(e){var t=e.parent||Lt,n=e.keyframes?Bw(fn(e.keyframes)):si;if(Pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zw=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},o0=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},qc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},kw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ff=function(e,t,n,r){return e._startAt&&(un?e._startAt.revert(jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Hw=function i(e){return!e||e._ts&&i(e.parent)},pm=function(e){return e._repeat?wo(e._tTime,e=e.duration()+e._rDelay)*e:0},wo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yc=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},$c=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yc(e),n._dirty||xs(n,e)),e},a0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xc(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Pi=function(e,t,n,r){return t.parent&&zr(t),t._start=Kt((nr(n)?n:n||e!==Lt?Zn(e,n,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),o0(e,t,"_first","_last",e._sort?"_start":0),Bf(t)||(e._recent=t),r||a0(e,t),e._ts<0&&$c(e,e._tTime),e},l0=function(e,t){return($n.ScrollTrigger||Oh("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},c0=function(e,t,n,r,s){if(Hh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&t0!==Gn.frame)return Dr.push(e),e._lazy=[s,r],1},Vw=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Bf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gw=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Vw(e)&&!(!e._initted&&Bf(e))||(e._ts<0||e._dp._ts<0)&&!Bf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Za(0,e._tDur,t),u=wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||un||r||e._zTime===St||!t&&e._zTime){if(!e._initted&&c0(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ff(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zr(e,1),!n&&!un&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ww=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ro=function(e,t,n,r){var s=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$c(e,e._tTime=e._tDur*a),e.parent&&Yc(e),n||xs(e.parent,e),e},mm=function(e){return e instanceof Sn?xs(e):Ro(e,e._dur)},Xw={_start:0,endTime:Oa,totalDuration:Oa},Zn=function i(e,t,n){var r=e.labels,s=e._recent||Xw,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(fn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ma=function(e,t,n){var r=nr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;o.immediateRender=Pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!Jt(e)||!(t=Uw.exec(e))?"":t[1]},qw=function(e,t,n){return Xr(n,function(r){return Za(e,t,r)})},zf=[].slice,u0=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==Ti},Yw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Jt(r)&&!t||u0(r,1)?(s=n).push.apply(s,ii(r)):n.push(r)})||n},ii=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Jt(e)&&!n&&(Nf||!Co())?zf.call((t||Nh).querySelectorAll(e),0):fn(e)?Yw(e,n):u0(e)?zf.call(e,0):e?[e]:[]},kf=function(e){return e=ii(e)[0]||Na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?Na("Invalid scope")||Nh.createElement("div"):e)}},f0=function(e){return e.sort(function(){return .5-Math.random()})},h0=function(e){if(Ut(e))return e;var t=ki(e)?e:{each:e},n=Ss(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Jt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,M,S,y,D,T,A,O,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,ni])[1],!E){for(A=-ni;A<(A=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],p=l?Math.min(E,_)*u-.5:r%E,M=E===ni?0:l?_*h/E-.5:r/E|0,A=0,O=ni,T=0;T<_;T++)S=T%E-p,y=M-(T/E|0),m[T]=D=c?Math.abs(c==="y"?y:S):Yg(S*S+y*y),D>A&&(A=D),D<O&&(O=D);r==="random"&&f0(m),m.max=A-O,m.min=O,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=cn(t.amount||t.each)||0,n=n&&_<0?y0(n):n}return _=(m[f]-m.min)/m.max||0,Kt(m.b+(n?n(_):_)*m.v)+m.u}},Hf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Kt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(nr(n)?0:cn(n))}},d0=function(e,t){var n=fn(e),r,s;return!n&&ki(e)&&(r=n=e.radius||ni,e.values?(e=ii(e.values),(s=!nr(e[0]))&&(r*=r)):e=Hf(e.increment)),Xr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||nr(o)?u:u+cn(o)}:Hf(e))},p0=function(e,t,n,r){return Xr(fn(e)?!t:n===!0?!!(n=0):!r,function(){return fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},$w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},jw=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},Kw=function(e,t,n){return _0(e,t,0,1,n)},m0=function(e,t,n){return Xr(n,function(r){return e[~~t(r)]})},Zw=function i(e,t,n){var r=t-e;return fn(e)?m0(e,i(0,e.length),t):Xr(n,function(s){return(r+(s-e)%r)%r+e})},Jw=function i(e,t,n){var r=t-e,s=r*2;return fn(e)?m0(e,i(0,e.length-1),t):Xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fa=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Zg:Uf),n+=e.substr(t,r-t)+p0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},_0=function(e,t,n,r,s){var o=t-e,a=r-n;return Xr(s,function(l){return n+((l-e)/o*a||0)})},Qw=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Jt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(fn(e)&&!fn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else r||(e=As(fn(e)?[]:{},e));if(!u){for(l in t)kh.call(a,e,l,"get",t[l]);s=function(g){return Wh(g,a)||(o?e.p:e)}}}return Xr(n,s)},_m=function(e,t,n){var r=e.labels,s=ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var r=e.vars,s=r[t],o=wt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Dr.length&&gc(),a&&(wt=a),u=l?s.apply(c,l):s.call(c),wt=o,u},ta=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&qn(e,"onInterrupt"),e},so,g0=[],v0=function(e){if(e)if(e=!e.name&&e.default||e,Uh()||e.headless){var t=e.name,n=Ut(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oa,render:Wh,add:kh,kill:m1,modifier:p1,rawVars:0},o={targetTest:0,get:0,getSetter:Gh,aliases:{},register:0};if(Co(),e!==r){if(Hn[t])return;si(r,si(vc(e,s),o)),As(r.prototype,As(s,vc(e,o))),Hn[r.prop=t]=r,e.targetTest&&(Kl.push(r),Fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}e0(t,r),e.register&&e.register(On,r,Dn)}else g0.push(e)},gt=255,na={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},$u=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},x0=function(e,t,n){var r=e?nr(e)?[e>>16,e>>8&gt,e&gt]:0:na.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])r=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&gt,r&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Uf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=$u(l+1/3,s,o),r[1]=$u(l,s,o),r[2]=$u(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(jg),n&&r.length<4&&(r[3]=1),r}else r=e.match(Uf)||na.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/gt,o=r[1]/gt,a=r[2]/gt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},S0=function(e){var t=[],n=[],r=-1;return e.split(Ir).forEach(function(s){var o=s.match(ro)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},gm=function(e,t,n){var r="",s=(e+r).match(Ir),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=x0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=S0(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ir,"1").split(ro),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ir),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Ir=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),e1=/hsl[a]?\(/,M0=function(e){var t=e.join(" "),n;if(Ir.lastIndex=0,Ir.test(t))return n=e1.test(t),e[1]=gm(e[1],n),e[0]=gm(e[0],n,S0(e[1])),!0},Ba,Gn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=i()-r,M=m===!0,S,y,D,T;if((p>e||p<0)&&(n+=p-t),r+=p,D=r-n,S=D-o,(S>0||M)&&(T=++h.frame,f=D-h.time*1e3,h.time=D=D/1e3,o+=S+(S>=s?4:s-S),y=1),M||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](D,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Jg&&(!Nf&&Uh()&&(Ti=Nf=window,Nh=Ti.document||{},$n.gsap=On,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(On.version),Qg(_c||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),g0.forEach(v0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ba=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Oa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var S=p?function(y,D,T,A){m(y,D,T,A),h.remove(S)}:m;return h.remove(m),a[M?"unshift":"push"](S),Co(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Co=function(){return!Ba&&Gn.wake()},st={},t1=/^[\d.\-M][\d.\-,\s]/,n1=/["']/g,i1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(n1,"").trim():+c,r=l.substr(a+1).trim();return t},r1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},s1=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i1(t[1])]:r1(e).split(",").map(r0)):st._CE&&t1.test(e)?st._CE("",e):n},y0=function(e){return function(t){return 1-e(1-t)}},E0=function i(e,t){for(var n=e._first,r;n;)n instanceof Sn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ss=function(e,t){return e&&(Ut(e)?e:st[e]||s1(e))||t},Ds=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Ln(e,function(a){st[a]=$n[a]=s,st[o=a.toLowerCase()]=n;for(var l in s)st[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[a+"."+l]=s[l]}),s},T0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ju=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/If*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Iw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:T0(a);return s=If/s,l.config=function(c,u){return i(e,c,u)},l},Ku=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:T0(n);return r.config=function(s){return i(e,s)},r};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ds(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;Ds("Elastic",ju("in"),ju("out"),ju());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ds("Circ",function(i){return-(Yg(1-i*i)-1)});Ds("Sine",function(i){return i===1?1:-Dw(i*Pw)+1});Ds("Back",Ku("in"),Ku("out"),Ku());st.SteppedEase=st.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((r*Za(0,o,a)|0)+s)*n}}};Ao.ease=st["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Bh+=i+","+i+"Params,"});var b0=function(e,t){this.id=Lw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:n0,this.set=t?t.getSetter:Gh},za=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ro(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Ba||Gn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Co(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,n),!s._dp||s.parent||a0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===St||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),i0(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?wo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?xc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Za(-Math.abs(this._delay),this._tDur,s),r!==!1),Yc(this),kw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Pi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ow);var r=un;return un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,mm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Zn(this,n),Pn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Pn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-St)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Ut(n)?n:s0,a=function(){var c=r.then;r.then=null,Ut(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ta(this)},i}();si(za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Sn=function(i){qg(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Lt&&Pi(n.parent||Lt,$i(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&l0($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ma(0,arguments,this),this},t.from=function(r,s,o){return ma(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ma(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(r,s,Zn(this,o),1),this},t.call=function(r,s,o){return Pi(this,kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new kt(r,o,Zn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,pa(o).immediateRender=Pn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,pa(a).immediateRender=Pn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Kt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,m,p,M,S,y,D,T,A;if(this!==Lt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Kt(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),D=wo(this._tTime,m),!a&&this._tTime&&D!==_&&this._tTime-D*m-this._dur<=0&&(D=_),T&&_&1&&(f=c-f,A=1),_!==D&&!this._lock){var O=T&&D&1,E=O===(T&&_&1);if(_<D&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Kt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;E0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Ww(this,Kt(a),Kt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(qn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-St);break}}d=g}else{d=this._last;for(var v=r<0?r:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||un&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=v?-St:St);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-St)._zTime=f>=a?1:-1,this._ts))return this._start=y,Yc(this),this.render(r,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(nr(s)||(s=Zn(this,s,r)),!(r instanceof za)){if(fn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Jt(r))return this.addLabel(r,s);if(Ut(r))r=kt.delayedCall(0,r);else return this}return this!==r?Pi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof kt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Jt(r)?this.removeLabel(r):Ut(r)?this.killTweensOf(r):(qc(this,r),r===this._recent&&(this._recent=this._last),xs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Zn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=kt.delayedCall(0,s||Oa,o);return a.data="isPause",this._hasPause=1,Pi(this,a,Zn(this,r))},t.removePause=function(r){var s=this._first;for(r=Zn(this,r);s;)s._start===r&&s.data==="isPause"&&zr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ii(r),l=this._first,c=nr(s),u;l;)l instanceof kt?Fw(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Zn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=kt.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ro(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,si({startAt:{time:Zn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),_m(this,Zn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),_m(this,Zn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return xs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ro(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Lt._ts&&(i0(Lt,xc(r,Lt)),t0=Gn.frame),Gn.frame>=hm){hm+=Yn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Yn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e}(za);si(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var o1=function(e,t,n,r,s,o,a){var l=new Dn(this._pt,e,t,0,1,L0,null,s),c=0,u=0,h,f,d,g,_,m,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Fa(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),f=n.match(qu)||[];h=qu.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?mo(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=qu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Kg.test(r)||p)&&(l.e=0),this._pt=l,l},kh=function(e,t,n,r,s,o,a,l,c,u){Ut(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ut(h)?c?f1:C0:Vh,g;if(Jt(r)&&(~r.indexOf("random(")&&(r=Fa(r)),r.charAt(1)==="="&&(g=mo(f,r)+(cn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Vf)return!isNaN(f*r)&&r!==""?(g=new Dn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?d1:P0,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Oh(t,r),o1.call(this,e,t,f,r,d,l||Yn.stringFilter,c))},a1=function(e,t,n,r,s){if(Ut(e)&&(e=_a(e,s,t,n,r)),!ki(e)||e.style&&e.nodeType||fn(e)||$g(e))return Jt(e)?_a(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=_a(e[a],s,t,n,r);return o},A0=function(e,t,n,r,s,o){var a,l,c,u;if(Hn[e]&&(a=new Hn[e]).init(s,a.rawVars?t[e]:a1(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Dn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==so))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},yr,Vf,Hh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!Dh,y=e.timeline,D,T,A,O,E,v,H,V,N,j,te,ne,ee;if(y&&(!f||!s)&&(s="none"),e._ease=Ss(s,Ao.ease),e._yEase=h?y0(Ss(h===!0?s:h,Ao.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(V=m[0]?vs(m[0]).harness:0,ne=V&&r[V.prop],D=vc(r,Fh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?jl:Nw),_._lazy=0),o){if(zr(e._startAt=kt.set(m,si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!a&&!d)&&e._startAt.revert(jl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),A=si({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Pn(l),immediateRender:a,stagger:0,parent:p},D),ne&&(A[V.prop]=ne),zr(e._startAt=kt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(jl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Pn(l)||l&&!g,T=0;T<m.length;T++){if(E=m[T],H=E._gsap||zh(m)[T]._gsap,e._ptLookup[T]=j={},Of[H.id]&&Dr.length&&gc(),te=M===m?T:M.indexOf(E),V&&(N=new V).init(E,ne||D,e,te,M)!==!1&&(e._pt=O=new Dn(e._pt,E,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(k){j[k]=O}),N.priority&&(v=1)),!V||ne)for(A in D)Hn[A]&&(N=A0(A,D,e,te,E,M))?N.priority&&(v=1):j[A]=O=kh.call(e,E,A,"get",D[A],te,M,0,r.stringFilter);e._op&&e._op[T]&&e.kill(E,e._op[T]),S&&e._pt&&(yr=e,Lt.killTweensOf(E,j,e.globalTime(t)),ee=!e.parent,yr=0),e._pt&&l&&(Of[H.id]=1)}v&&D0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,f&&t<=0&&y.render(ni,!0,!0)},l1=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vf=1,e.vars[t]="+=0",Hh(e,a),Vf=0,l?Na(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Nt(n)+cn(h.e)),h.b&&(h.b=u.s+cn(h.b))},c1=function(e,t){var n=e[0]?vs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=As({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},u1=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(fn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},_a=function(e,t,n,r,s){return Ut(e)?e.call(t,n,r,s):Jt(e)&&~e.indexOf("random(")?Fa(e):e},w0=Bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",R0={};Ln(w0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return R0[i]=1});var kt=function(i){qg(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:pa(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Lt,S=(fn(n)||$g(n)?nr(n[0]):"length"in r)?[n]:ii(n),y,D,T,A,O,E,v,H;if(a._targets=S.length?zh(S):Na("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Cl(c)||Cl(u)){if(r=a.vars,y=a.timeline=new Sn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:S}),y.kill(),y.parent=y._dp=$i(a),y._start=0,f||Cl(c)||Cl(u)){if(A=S.length,v=f&&h0(f),ki(f))for(O in f)~w0.indexOf(O)&&(H||(H={}),H[O]=f[O]);for(D=0;D<A;D++)T=vc(r,R0),T.stagger=0,p&&(T.yoyoEase=p),H&&As(T,H),E=S[D],T.duration=+_a(c,$i(a),D,E,S),T.delay=(+_a(u,$i(a),D,E,S)||0)-a._delay,!f&&A===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),y.to(E,T,v?v(D,E,S):0),y._ease=st.none;y.duration()?c=u=0:a.timeline=0}else if(g){pa(si(y.vars.defaults,{ease:"none"})),y._ease=Ss(g.ease||r.ease||"none");var V=0,N,j,te;if(fn(g))g.forEach(function(ne){return y.to(S,ne,">")}),y.duration();else{T={};for(O in g)O==="ease"||O==="easeEach"||u1(O,g[O],T,g.easeEach);for(O in T)for(N=T[O].sort(function(ne,ee){return ne.t-ee.t}),V=0,D=0;D<N.length;D++)j=N[D],te={ease:j.e,duration:(j.t-(D?N[D-1].t:0))/100*c},te[O]=j.v,y.to(S,te,V),V+=te.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Dh&&(yr=$i(a),Lt.killTweensOf(S),yr=0),Pi(M,$i(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Kt(M._time)&&Pn(h)&&Hw($i(a))&&M.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-u)||0)),m&&l0($i(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-St&&!u?l:r<St?0:r,f,d,g,_,m,p,M,S,y;if(!c)Gw(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Kt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Kt(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=wo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(S&&this._yEase&&E0(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(c0(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!g&&(qn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ff(this,r,s,o),qn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ff(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(qn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ba||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hh(this,c),u=this._ease(c/this._dur),l1(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):($c(this,0),this.parent||o0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,yr&&yr.vars.overwrite!==!0)._first||ta(this),this.parent&&o!==this.timeline.totalDuration()&&Ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ii(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&zw(a,l))return s==="all"&&(this._pt=0),ta(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},Ln(s,function(M){return _[M]=1}),s=_),s=c1(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&qc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ta(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ma(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ma(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Lt.killTweensOf(r,s,o)},e}(za);si(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(i){kt[i]=function(){var e=new Sn,t=zf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Vh=function(e,t,n){return e[t]=n},C0=function(e,t,n){return e[t](n)},f1=function(e,t,n,r){return e[t](r.fp,n)},h1=function(e,t,n){return e.setAttribute(t,n)},Gh=function(e,t){return Ut(e[t])?C0:Ih(e[t])&&e.setAttribute?h1:Vh},P0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},L0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Wh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},p1=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},m1=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?qc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},_1=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},D0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Dn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||P0,this.d=l||this,this.set=c||Vh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=_1,this.m=n,this.mt=s,this.tween=r},i}();Ln(Bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Fh[i]=1});$n.TweenMax=$n.TweenLite=kt;$n.TimelineLite=$n.TimelineMax=Sn;Lt=new Sn({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=M0;var Ms=[],Zl={},g1=[],vm=0,v1=0,Zu=function(e){return(Zl[e]||g1).map(function(t){return t()})},Gf=function(){var e=Date.now(),t=[];e-vm>2&&(Zu("matchMediaInit"),Ms.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ti.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Zu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),vm=e,Zu("matchMedia"))},I0=function(){function i(t,n){this.selector=n&&kf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v1++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ut(n)&&(s=r,r=n,n=Ut);var o=this,a=function(){var c=wt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=kf(s)),wt=o,h=r.apply(o,arguments),Ut(h)&&o._r.push(h),wt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=wt;wt=null,n(this),wt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof kt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ms.length;o--;)Ms[o].id===this.id&&Ms.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),x1=function(){function i(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ki(n)||(n={matches:n});var o=new I0(0,s||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(Ms.indexOf(o)<0&&Ms.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Gf):l.addEventListener("change",Gf)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Sc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return v0(r)})},timeline:function(e){return new Sn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Jt(e)&&(e=ii(e)[0]);var s=vs(e||{}).get,o=n?s0:r0;return n==="native"&&(n=""),e&&(t?o((Hn[t]&&Hn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Hn[a]&&Hn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var r=e.map(function(u){return On.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Hn[t],a=vs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;so._pt=0,h.init(e,n?u+n:u,so,0,[e]),h.render(1,h),so._pt&&Wh(1,so)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=On.to(e,As((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Ao.ease)),dm(Ao,e||{})},config:function(e){return dm(Yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Hn[a]&&!$n[a]&&Na(t+" effect requires "+a+" plugin.")}),Yu[t]=function(a,l,c){return n(ii(a),si(l||{},s),c)},o&&(Sn.prototype[t]=function(a,l,c){return this.add(Yu[t](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):st},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sn(e),r,s;for(n.smoothChildTiming=Pn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,r=Lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof kt&&r.vars.onComplete===r._targets[0]))&&Pi(n,r,r._start-r._delay),r=s;return Pi(Lt,n,0),n},context:function(e,t){return e?new I0(e,t):wt},matchMedia:function(e){return new x1(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Gf()},addEventListener:function(e,t){var n=Zl[e]||(Zl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Zw,wrapYoyo:Jw,distribute:h0,random:p0,snap:d0,normalize:Kw,getUnit:cn,clamp:qw,splitColor:x0,toArray:ii,selector:kf,mapRange:_0,pipe:$w,unitize:jw,interpolate:Qw,shuffle:f0},install:Qg,effects:Yu,ticker:Gn,updateRoot:Sn.updateRoot,plugins:Hn,globalTimeline:Lt,core:{PropTween:Dn,globals:e0,Tween:kt,Timeline:Sn,Animation:za,getCache:vs,_removeLinkedListItem:qc,reverting:function(){return un},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return Dh=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Sc[i]=kt[i]});Gn.add(Sn.updateRoot);so=Sc.to({},{duration:0});var S1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M1=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=S1(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Ju=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}M1(a,s)}}}},On=Sc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ju("roundProps",Hf),Ju("modifiers"),Ju("snap",d0))||Sc;kt.version=Sn.version=On.version="3.12.5";Jg=1;Uh()&&Co();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xm,Er,_o,Xh,ps,Sm,qh,y1=function(){return typeof window<"u"},ir={},ss=180/Math.PI,go=Math.PI/180,Ks=Math.atan2,Mm=1e8,Yh=/([A-Z])/g,E1=/(left|right|width|margin|padding|x)/i,T1=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},A1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},w1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},U0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},N0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},R1=function(e,t,n){return e.style[t]=n},C1=function(e,t,n){return e.style.setProperty(t,n)},P1=function(e,t,n){return e._gsap[t]=n},L1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},D1=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},I1=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",In=Dt+"Origin",U1=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ji(r,a)}):this.tfm[e]=o.x?o[e]:ji(r,e),e===In&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(In,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},O0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},N1=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Yh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qh(),(!s||!s.isStart)&&!n[Dt]&&(O0(n),r.zOrigin&&n[In]&&(n[In]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},F0=function(e,t){var n={target:e,props:[],revert:N1,save:U1};return e._gsap||On.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},B0,Xf=function(e,t){var n=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return n&&n.style?n:Er.createElement(e)},Oi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Yh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Po(t)||t,1)||""},ym="O,Moz,ms,Ms,Webkit".split(","),Po=function(e,t,n){var r=t||ps,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ym[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ym[o]:"")+e},qf=function(){y1()&&window.document&&(xm=window,Er=xm.document,_o=Er.documentElement,ps=Xf("div")||{style:{}},Xf("div"),Dt=Po(Dt),In=Dt+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",B0=!!Po("perspective"),qh=On.core.reverting,Xh=1)},Qu=function i(e){var t=Xf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(_o.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),_o.removeChild(t),this.style.cssText=s,o},Em=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},z0=function(e){var t;try{t=e.getBBox()}catch{t=Qu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Qu||(t=Qu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Em(e,["x","cx","x1"])||0,y:+Em(e,["y","cy","y1"])||0,width:0,height:0}:t},k0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&z0(e))},ws=function(e,t){if(t){var n=e.style,r;t in ir&&t!==In&&(t=Dt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Yh,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,r,s,o){var a=new Dn(e._pt,t,n,0,1,o?N0:U0);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Tm={deg:1,rad:1,turn:1},O1={grid:1,flex:1},kr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ps.style,l=E1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Tm[r]||Tm[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&k0(e),(d||o==="%")&&(ir[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Nt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Er||!_.appendChild)&&(_=Er.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Gn.time&&!m.uncache)return Nt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,g=e[u],M?e.style[t]=M:ws(e,t)}else(d||o==="%")&&!O1[Oi(_,"display")]&&(a.position=Oi(e,"position")),_===e&&(a.position="static"),_.appendChild(ps),g=ps[u],_.removeChild(ps),a.position="absolute";return l&&d&&(m=vs(_),m.time=Gn.time,m.width=_[u]),Nt(f?g*s/h:g&&s?h/g*s:0)},ji=function(e,t,n,r){var s;return Xh||qf(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=Ha(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yc(Oi(e,In))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Mc[t]&&Mc[t](e,t,n)||Oi(e,t)||n0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,n)+n:s},F1=function(e,t,n,r){if(!n||n==="none"){var s=Po(t,e,1),o=s&&Oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Oi(e,"borderTopColor"))}var a=new Dn(this._pt,e.style,t,0,1,L0),l=0,c=0,u,h,f,d,g,_,m,p,M,S,y,D;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Oi(e,t)||r,_?e.style[t]=_:ws(e,t)),u=[n,r],M0(u),n=u[0],r=u[1],f=n.match(ro)||[],D=r.match(ro)||[],D.length){for(;h=ro.exec(r);)m=h[0],M=r.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=mo(d,m)+y),p=parseFloat(m),S=m.substr((p+"").length),l=ro.lastIndex-S.length,S||(S=S||Yn.units[t]||y,l===r.length&&(r+=S,a.e+=S)),y!==S&&(d=kr(e,t,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?N0:U0;return Kg.test(r)&&(a.e=0),this._pt=a,a},bm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},B1=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=bm[n]||n,t[1]=bm[r]||r,t.join(" ")},z1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ir[a]&&(l=1,a=a==="transformOrigin"?In:Dt),ws(n,a);l&&(ws(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),Ha(n,1),o.uncache=1,O0(r)))}},Mc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Dn(e._pt,t,n,0,0,z1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ka=[1,0,0,1,0,0],H0={},V0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Am=function(e){var t=Oi(e,Dt);return V0(t)?ka:t.substr(7).match(jg).map(Nt)},$h=function(e,t){var n=e._gsap||vs(e),r=e.style,s=Am(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ka:s):(s===ka&&!e.offsetParent&&e!==_o&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,_o.appendChild(e)),s=Am(e),l?r.display=l:ws(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):_o.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yf=function(e,t,n,r,s,o){var a=e._gsap,l=s||$h(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=t.split(" "),y=parseFloat(S[0])||0,D=parseFloat(S[1])||0,T,A,O,E;n?l!==ka&&(A=d*m-g*_)&&(O=y*(m/A)+D*(-_/A)+(_*M-m*p)/A,E=y*(-g/A)+D*(d/A)-(d*M-g*p)/A,y=O,D=E):(T=z0(e),y=T.x+(~S[0].indexOf("%")?y/100*T.width:y),D=T.y+(~(S[1]||S[0]).indexOf("%")?D/100*T.height:D)),r||r!==!1&&a.smooth?(p=y-c,M=D-u,a.xOffset=h+(p*d+M*_)-p,a.yOffset=f+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=D,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[In]="0px 0px",o&&(Tr(o,a,"xOrigin",c,y),Tr(o,a,"yOrigin",u,D),Tr(o,a,"xOffset",h,a.xOffset),Tr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+D)},Ha=function(e,t){var n=e._gsap||new b0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Oi(e,In)||"0",u,h,f,d,g,_,m,p,M,S,y,D,T,A,O,E,v,H,V,N,j,te,ne,ee,k,fe,L,me,Ce,Ge,Q,de;return u=h=f=_=m=p=M=S=y=0,d=g=1,n.svg=!!(e.getCTM&&k0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),r.scale=r.rotate=r.translate="none"),A=$h(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),Yf(e,ee||c,!!ee||n.originIsAbsolute,n.smooth!==!1,A)),D=n.xOrigin||0,T=n.yOrigin||0,A!==ka&&(H=A[0],V=A[1],N=A[2],j=A[3],u=te=A[4],h=ne=A[5],A.length===6?(d=Math.sqrt(H*H+V*V),g=Math.sqrt(j*j+N*N),_=H||V?Ks(V,H)*ss:0,M=N||j?Ks(N,j)*ss+_:0,M&&(g*=Math.abs(Math.cos(M*go))),n.svg&&(u-=D-(D*H+T*N),h-=T-(D*V+T*j))):(de=A[6],Ge=A[7],L=A[8],me=A[9],Ce=A[10],Q=A[11],u=A[12],h=A[13],f=A[14],O=Ks(de,Ce),m=O*ss,O&&(E=Math.cos(-O),v=Math.sin(-O),ee=te*E+L*v,k=ne*E+me*v,fe=de*E+Ce*v,L=te*-v+L*E,me=ne*-v+me*E,Ce=de*-v+Ce*E,Q=Ge*-v+Q*E,te=ee,ne=k,de=fe),O=Ks(-N,Ce),p=O*ss,O&&(E=Math.cos(-O),v=Math.sin(-O),ee=H*E-L*v,k=V*E-me*v,fe=N*E-Ce*v,Q=j*v+Q*E,H=ee,V=k,N=fe),O=Ks(V,H),_=O*ss,O&&(E=Math.cos(O),v=Math.sin(O),ee=H*E+V*v,k=te*E+ne*v,V=V*E-H*v,ne=ne*E-te*v,H=ee,te=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Nt(Math.sqrt(H*H+V*V+N*N)),g=Nt(Math.sqrt(ne*ne+de*de)),O=Ks(te,ne),M=Math.abs(O)>2e-4?O*ss:0,y=Q?1/(Q<0?-Q:Q):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!V0(Oi(e,Dt)),ee&&e.setAttribute("transform",ee))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Nt(d),n.scaleY=Nt(g),n.rotation=Nt(_)+a,n.rotationX=Nt(m)+a,n.rotationY=Nt(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[In]=yc(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?H1:B0?G0:k1,n.uncache=0,n},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ef=function(e,t,n){var r=cn(t);return Nt(parseFloat(t)+parseFloat(kr(e,"x",n+"px",r)))+r},k1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,G0(e,t)},ts="0deg",jo="0px",ns=") ",G0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,y="",D=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==ts||u!==ts)){var T=parseFloat(u)*go,A=Math.sin(T),O=Math.cos(T),E;T=parseFloat(h)*go,E=Math.cos(T),o=ef(M,o,A*E*-S),a=ef(M,a,-Math.sin(T)*-S),l=ef(M,l,O*E*-S+S)}m!==jo&&(y+="perspective("+m+ns),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(D||o!==jo||a!==jo||l!==jo)&&(y+=l!==jo||D?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ns),c!==ts&&(y+="rotate("+c+ns),u!==ts&&(y+="rotateY("+u+ns),h!==ts&&(y+="rotateX("+h+ns),(f!==ts||d!==ts)&&(y+="skew("+f+", "+d+ns),(g!==1||_!==1)&&(y+="scale("+g+", "+_+ns),M.style[Dt]=y||"translate(0, 0)"},H1=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),y=parseFloat(a),D,T,A,O,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=go,c*=go,D=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,O=Math.cos(l-c)*f,c&&(u*=go,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,O*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),D*=E,T*=E)),D=Nt(D),T=Nt(T),A=Nt(A),O=Nt(O)):(D=h,O=f,T=A=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=kr(d,"x",o,"px"),y=kr(d,"y",a,"px")),(g||_||m||p)&&(S=Nt(S+g-(g*D+_*A)+m),y=Nt(y+_-(g*T+_*O)+p)),(r||s)&&(E=d.getBBox(),S=Nt(S+r/100*E.width),y=Nt(y+s/100*E.height)),E="matrix("+D+","+T+","+A+","+O+","+S+","+y+")",d.setAttribute("transform",E),M&&(d.style[Dt]=E)},V1=function(e,t,n,r,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ss:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Mm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Mm)%o-~~(c/o)*o)),e._pt=f=new Dn(e._pt,t,n,r,c,b1),f.e=u,f.u="deg",e._props.push(n),f},wm=function(e,t){for(var n in t)e[n]=t[n];return e},G1=function(e,t,n){var r=wm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Ha(n,1),ws(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Ha(n,1),o[Dt]=c);for(l in ir)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=cn(c),g=cn(u),h=d!==g?kr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Dn(e._pt,a,l,h,f-h,Wf),e._pt.u=g||0,e._props.push(l));wm(a,r)};Ln("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Mc[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ji(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var W0={name:"css",register:qf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,M,S,y,D,T,A,O;Xh||qf(),this.styles=this.styles||F0(e),O=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Hn[_]&&A0(_,t,n,r,e,s)))){if(d=typeof u,g=Mc[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Fa(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(c)||(m=cn(c),p=cn(u)),p?m!==p&&(c=kr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),O.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Jt(c)&&~c.indexOf("random(")&&(c=Fa(c)),cn(c+"")||c==="auto"||(c+=Yn.units[_]||cn(ji(e,_))||""),(c+"").charAt(1)==="="&&(c=ji(e,_))):c=ji(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Di&&(_==="autoAlpha"&&(f===1&&ji(e,"visibility")==="hidden"&&h&&(f=0),O.push("visibility",0,a.visibility),Tr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in ir,S){if(this.styles.save(_),y||(D=e._gsap,D.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),T=t.smoothOrigin!==!1&&D.smooth,y=this._pt=new Dn(this._pt,a,Dt,0,1,D.renderTransform,D,0,-1),y.dep=1),_==="scale")this._pt=new Dn(this._pt,D,"scaleY",D.scaleY,(M?mo(D.scaleY,M+h):h)-D.scaleY||0,Wf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(In,0,a[In]),u=B1(u),D.svg?Yf(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==D.zOrigin&&Tr(this,D,"zOrigin",D.zOrigin,p),Tr(this,a,_,yc(c),yc(u)));continue}else if(_==="svgOrigin"){Yf(e,u,1,T,0,this);continue}else if(_ in H0){V1(this,D,_,f,M?mo(f,M+u):u);continue}else if(_==="smoothOrigin"){Tr(this,D,"smooth",D.smooth,u);continue}else if(_==="force3D"){D[_]=u;continue}else if(_==="transform"){G1(this,u,e);continue}}else _ in a||(_=Po(_)||_);if(S||(h||h===0)&&(f||f===0)&&!T1.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=cn(u)||(_ in Yn.units?Yn.units[_]:m),m!==p&&(f=kr(e,_,c,p)),this._pt=new Dn(this._pt,S?D:a,_,f,(M?mo(f,M+h):h)-f,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?w1:Wf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=A1);else if(_ in a)F1.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Oh(_,u);continue}S||(_ in a?O.push(_,0,a[_]):O.push(_,1,c||e[_])),o.push(_)}}A&&D0(this)},render:function(e,t){if(t.tween._time||!qh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ji,aliases:Di,getSetter:function(e,t,n){var r=Di[t];return r&&r.indexOf(",")<0&&(t=r),t in ir&&t!==In&&(e._gsap.x||ji(e,"x"))?n&&Sm===n?t==="scale"?L1:P1:(Sm=n||{})&&(t==="scale"?D1:I1):e.style&&!Ih(e.style[t])?R1:~t.indexOf("-")?C1:Gh(e,t)},core:{_removeProperty:ws,_getMatrix:$h}};On.utils.checkPrefix=Po;On.core.getStyleSaver=F0;(function(i,e,t,n){var r=Ln(i+","+e+","+t,function(s){ir[s]=1});Ln(e,function(s){Yn.units[s]="deg",H0[s]=1}),Di[r[13]]=i+","+e,Ln(n,function(s){var o=s.split(":");Di[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Yn.units[i]="px"});On.registerPlugin(W0);var os=On.registerPlugin(W0)||On;os.core.Tween;function W1(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function X1(i,e,t){return e&&W1(i.prototype,e),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qt,Jl,Wn,br,Ar,vo,X0,as,ga,q0,Qi,ci,Y0,$0=function(){return Qt||typeof window<"u"&&(Qt=window.gsap)&&Qt.registerPlugin&&Qt},j0=1,oo=[],nt=[],Fi=[],va=Date.now,$f=function(e,t){return t},q1=function(){var e=ga.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,nt),r.push.apply(r,Fi),nt=n,Fi=r,$f=function(o,a){return t[o](a)}},Ur=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},xa=function(e){return!!~q0.indexOf(e)},mn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},dn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Pl="scrollLeft",Ll="scrollTop",jf=function(){return Qi&&Qi.isPressed||nt.cache++},Ec=function(e,t){var n=function r(s){if(s||s===0){j0&&(Wn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=r.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),r.cacheID=nt.cache,o&&$f("ss",s)}else(t||nt.cache!==r.cacheID||$f("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Mn={s:Pl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ec(function(i){return arguments.length?Wn.scrollTo(i,Vt.sc()):Wn.pageXOffset||br[Pl]||Ar[Pl]||vo[Pl]||0})},Vt={s:Ll,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:Ec(function(i){return arguments.length?Wn.scrollTo(Mn.sc(),i):Wn.pageYOffset||br[Ll]||Ar[Ll]||vo[Ll]||0})},An=function(e,t){return(t&&t._ctx&&t._ctx.selector||Qt.utils.toArray)(e)[0]||(typeof e=="string"&&Qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hr=function(e,t){var n=t.s,r=t.sc;xa(e)&&(e=br.scrollingElement||Ar);var s=nt.indexOf(e),o=r===Vt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||mn(e,"scroll",jf);var a=nt[s+o],l=a||(nt[s+o]=Ec(Ur(e,n),!0)||(xa(e)?r:Ec(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Qt.getProperty(e,"scrollBehavior")==="smooth"),l},Kf=function(e,t,n){var r=e,s=e,o=va(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=va();_||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(g){var _=a,m=s,p=va();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Ko=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},K0=function(){ga=Qt.core.globals().ScrollTrigger,ga&&ga.core&&q1()},Z0=function(e){return Qt=e||$0(),!Jl&&Qt&&typeof document<"u"&&document.body&&(Wn=window,br=document,Ar=br.documentElement,vo=br.body,q0=[Wn,br,Ar,vo],Qt.utils.clamp,Y0=Qt.core.context||function(){},as="onpointerenter"in vo?"pointer":"mouse",X0=Ot.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ci=Ot.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return j0=0},500),K0(),Jl=1),Jl};Mn.op=Vt;nt.cache=0;var Ot=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Jl||Z0(Qt)||console.warn("Please gsap.registerPlugin(Observer)"),ga||K0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,y=n.onRelease,D=n.onRight,T=n.onLeft,A=n.onUp,O=n.onDown,E=n.onChangeX,v=n.onChangeY,H=n.onChange,V=n.onToggleX,N=n.onToggleY,j=n.onHover,te=n.onHoverEnd,ne=n.onMove,ee=n.ignoreCheck,k=n.isNormalizer,fe=n.onGestureStart,L=n.onGestureEnd,me=n.onWheel,Ce=n.onEnable,Ge=n.onDisable,Q=n.onClick,de=n.scrollSpeed,pe=n.capture,B=n.allowClicks,ue=n.lockAxis,se=n.onLockAxis;this.target=a=An(a)||Ar,this.vars=n,d&&(d=Qt.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,de=de||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(vo).lineHeight)||22);var U,we,ge,w,C,z,q,P=this,ce=0,R=0,x=n.passive||!u,I=Hr(a,Mn),F=Hr(a,Vt),X=I(),J=F(),oe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ci[0]==="pointerdown",ae=xa(a),re=a.ownerDocument||br,Se=[0,0,0],he=[0,0,0],xe=0,ze=function(){return xe=va()},ye=function(Pe,ot){return(P.event=Pe)&&d&&~d.indexOf(Pe.target)||ot&&oe&&Pe.pointerType!=="touch"||ee&&ee(Pe,ot)},Re=function(){P._vx.reset(),P._vy.reset(),we.pause(),h&&h(P)},Fe=function(){var Pe=P.deltaX=Rm(Se),ot=P.deltaY=Rm(he),Ee=Math.abs(Pe)>=r,Xe=Math.abs(ot)>=r;H&&(Ee||Xe)&&H(P,Pe,ot,Se,he),Ee&&(D&&P.deltaX>0&&D(P),T&&P.deltaX<0&&T(P),E&&E(P),V&&P.deltaX<0!=ce<0&&V(P),ce=P.deltaX,Se[0]=Se[1]=Se[2]=0),Xe&&(O&&P.deltaY>0&&O(P),A&&P.deltaY<0&&A(P),v&&v(P),N&&P.deltaY<0!=R<0&&N(P),R=P.deltaY,he[0]=he[1]=he[2]=0),(w||ge)&&(ne&&ne(P),ge&&(M(P),ge=!1),w=!1),z&&!(z=!1)&&se&&se(P),C&&(me(P),C=!1),U=0},We=function(Pe,ot,Ee){Se[Ee]+=Pe,he[Ee]+=ot,P._vx.update(Pe),P._vy.update(ot),c?U||(U=requestAnimationFrame(Fe)):Fe()},$e=function(Pe,ot){ue&&!q&&(P.axis=q=Math.abs(Pe)>Math.abs(ot)?"x":"y",z=!0),q!=="y"&&(Se[2]+=Pe,P._vx.update(Pe,!0)),q!=="x"&&(he[2]+=ot,P._vy.update(ot,!0)),c?U||(U=requestAnimationFrame(Fe)):Fe()},De=function(Pe){if(!ye(Pe,1)){Pe=Ko(Pe,u);var ot=Pe.clientX,Ee=Pe.clientY,Xe=ot-P.x,Ne=Ee-P.y,Ve=P.isDragging;P.x=ot,P.y=Ee,(Ve||Math.abs(P.startX-ot)>=s||Math.abs(P.startY-Ee)>=s)&&(M&&(ge=!0),Ve||(P.isDragging=!0),$e(Xe,Ne),Ve||m&&m(P))}},G=P.onPress=function(Be){ye(Be,1)||Be&&Be.button||(P.axis=q=null,we.pause(),P.isPressed=!0,Be=Ko(Be),ce=R=0,P.startX=P.x=Be.clientX,P.startY=P.y=Be.clientY,P._vx.reset(),P._vy.reset(),mn(k?a:re,ci[1],De,x,!0),P.deltaX=P.deltaY=0,S&&S(P))},ie=P.onRelease=function(Be){if(!ye(Be,1)){dn(k?a:re,ci[1],De,!0);var Pe=!isNaN(P.y-P.startY),ot=P.isDragging,Ee=ot&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Xe=Ko(Be);!Ee&&Pe&&(P._vx.reset(),P._vy.reset(),u&&B&&Qt.delayedCall(.08,function(){if(va()-xe>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(re.createEvent){var Ne=re.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,Wn,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(Ne)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,h&&ot&&!k&&we.restart(!0),p&&ot&&p(P),y&&y(P,Ee)}},le=function(Pe){return Pe.touches&&Pe.touches.length>1&&(P.isGesturing=!0)&&fe(Pe,P.isDragging)},ve=function(){return(P.isGesturing=!1)||L(P)},Me=function(Pe){if(!ye(Pe)){var ot=I(),Ee=F();We((ot-X)*de,(Ee-J)*de,1),X=ot,J=Ee,h&&we.restart(!0)}},Ye=function(Pe){if(!ye(Pe)){Pe=Ko(Pe,u),me&&(C=!0);var ot=(Pe.deltaMode===1?l:Pe.deltaMode===2?Wn.innerHeight:1)*g;We(Pe.deltaX*ot,Pe.deltaY*ot,0),h&&!k&&we.restart(!0)}},lt=function(Pe){if(!ye(Pe)){var ot=Pe.clientX,Ee=Pe.clientY,Xe=ot-P.x,Ne=Ee-P.y;P.x=ot,P.y=Ee,w=!0,h&&we.restart(!0),(Xe||Ne)&&$e(Xe,Ne)}},pt=function(Pe){P.event=Pe,j(P)},vt=function(Pe){P.event=Pe,te(P)},it=function(Pe){return ye(Pe)||Ko(Pe,u)&&Q(P)};we=P._dc=Qt.delayedCall(f||.25,Re).pause(),P.deltaX=P.deltaY=0,P._vx=Kf(0,50,!0),P._vy=Kf(0,50,!0),P.scrollX=I,P.scrollY=F,P.isDragging=P.isGesturing=P.isPressed=!1,Y0(this),P.enable=function(Be){return P.isEnabled||(mn(ae?re:a,"scroll",jf),o.indexOf("scroll")>=0&&mn(ae?re:a,"scroll",Me,x,pe),o.indexOf("wheel")>=0&&mn(a,"wheel",Ye,x,pe),(o.indexOf("touch")>=0&&X0||o.indexOf("pointer")>=0)&&(mn(a,ci[0],G,x,pe),mn(re,ci[2],ie),mn(re,ci[3],ie),B&&mn(a,"click",ze,!0,!0),Q&&mn(a,"click",it),fe&&mn(re,"gesturestart",le),L&&mn(re,"gestureend",ve),j&&mn(a,as+"enter",pt),te&&mn(a,as+"leave",vt),ne&&mn(a,as+"move",lt)),P.isEnabled=!0,Be&&Be.type&&G(Be),Ce&&Ce(P)),P},P.disable=function(){P.isEnabled&&(oo.filter(function(Be){return Be!==P&&xa(Be.target)}).length||dn(ae?re:a,"scroll",jf),P.isPressed&&(P._vx.reset(),P._vy.reset(),dn(k?a:re,ci[1],De,!0)),dn(ae?re:a,"scroll",Me,pe),dn(a,"wheel",Ye,pe),dn(a,ci[0],G,pe),dn(re,ci[2],ie),dn(re,ci[3],ie),dn(a,"click",ze,!0),dn(a,"click",it),dn(re,"gesturestart",le),dn(re,"gestureend",ve),dn(a,as+"enter",pt),dn(a,as+"leave",vt),dn(a,as+"move",lt),P.isEnabled=P.isPressed=P.isDragging=!1,Ge&&Ge(P))},P.kill=P.revert=function(){P.disable();var Be=oo.indexOf(P);Be>=0&&oo.splice(Be,1),Qi===P&&(Qi=0)},oo.push(P),k&&xa(a)&&(Qi=P),P.enable(_)},X1(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Ot.version="3.12.5";Ot.create=function(i){return new Ot(i)};Ot.register=Z0;Ot.getAll=function(){return oo.slice()};Ot.getById=function(i){return oo.filter(function(e){return e.vars.id===i})[0]};$0()&&Qt.registerPlugin(Ot);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le,Qs,rt,Pt,hi,yt,J0,Tc,Va,Sa,ia,Dl,sn,jc,Zf,vn,Cm,Pm,eo,Q0,tf,ev,gn,Jf,tv,nv,mr,Qf,jh,xo,Kh,bc,eh,nf,Il=1,on=Date.now,rf=on(),ri=0,ra=0,Lm=function(e,t,n){var r=kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Dm=function(e,t){return t&&(!kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Y1=function i(){return ra&&requestAnimationFrame(i)},Im=function(){return jc=1},Um=function(){return jc=0},bi=function(e){return e},sa=function(e){return Math.round(e*1e5)/1e5||0},iv=function(){return typeof window<"u"},rv=function(){return Le||iv()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Rs=function(e){return!!~J0.indexOf(e)},sv=function(e){return(e==="Height"?Kh:rt["inner"+e])||hi["client"+e]||yt["client"+e]},ov=function(e){return Ur(e,"getBoundingClientRect")||(Rs(e)?function(){return ic.width=rt.innerWidth,ic.height=Kh,ic}:function(){return Zi(e)})},$1=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Ur(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?sv(s):e["client"+s])||0}},j1=function(e,t){return!t||~Fi.indexOf(e)?ov(e):function(){return ic}},Ii=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Ur(e,n))?o()-ov(e)()[s]:Rs(e)?(hi[n]||yt[n])-sv(r):e[n]-e["offset"+r])},Ul=function(e,t){for(var n=0;n<eo.length;n+=3)(!t||~t.indexOf(eo[n+1]))&&e(eo[n],eo[n+1],eo[n+2])},kn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},oa=function(e){return typeof e=="number"},ls=function(e){return typeof e=="object"},Zo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},sf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zs=Math.abs,av="left",lv="top",Zh="right",Jh="bottom",ys="width",Es="height",Ma="Right",ya="Left",Ea="Top",Ta="Bottom",zt="padding",Jn="margin",Lo="Width",Qh="Height",Ht="px",Qn=function(e){return rt.getComputedStyle(e)},K1=function(e){var t=Qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Nm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&Qn(e)[Zf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Ac=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},cv=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Z1=function(e){return function(t){return Le.utils.snap(cv(e),t)}},ed=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},J1=function(e){return function(t,n){return ed(cv(e))(t,n.direction)}},Nl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},jt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},$t=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ol=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Om={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},wc={top:0,left:0,center:.5,bottom:1,right:1},Ql=function(e,t){if(kn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in wc?wc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bl=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Pt.createElement("div"),_=Rs(n)||Ur(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n,M=e.indexOf("start")!==-1,S=M?c:u,y="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===Vt?Zh:Jh)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],ec(g,0,r,M),g},ec=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Lo]=1,s["border"+a+Lo]=0,s[n.p]=t+"px",Le.set(e,s)},et=[],th={},Ga,Fm=function(){return on()-ri>34&&(Ga||(Ga=requestAnimationFrame(tr)))},Js=function(){(!gn||!gn.isPressed||gn.startX>yt.clientWidth)&&(nt.cache++,gn?Ga||(Ga=requestAnimationFrame(tr)):tr(),ri||Ps("scrollStart"),ri=on())},of=function(){nv=rt.innerWidth,tv=rt.innerHeight},aa=function(){nt.cache++,!sn&&!ev&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Jf||nv!==rt.innerWidth||Math.abs(rt.innerHeight-tv)>rt.innerHeight*.25)&&Tc.restart(!0)},Cs={},Q1=[],uv=function i(){return $t(tt,"scrollEnd",i)||ms(!0)},Ps=function(e){return Cs[e]&&Cs[e].map(function(t){return t()})||Q1},zn=[],fv=function(e){for(var t=0;t<zn.length;t+=5)(!e||zn[t+4]&&zn[t+4].query===e)&&(zn[t].style.cssText=zn[t+1],zn[t].getBBox&&zn[t].setAttribute("transform",zn[t+2]||""),zn[t+3].uncache=1)},td=function(e,t){var n;for(vn=0;vn<et.length;vn++)n=et[vn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));bc=!0,t&&fv(t),t||Ps("revert")},hv=function(e,t){nt.cache++,(t||!xn)&&nt.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),kn(e)&&(rt.history.scrollRestoration=jh=e)},xn,Ts=0,Bm,eR=function(){if(Bm!==Ts){var e=Bm=Ts;requestAnimationFrame(function(){return e===Ts&&ms(!0)})}},dv=function(){yt.appendChild(xo),Kh=!gn&&xo.offsetHeight||rt.innerHeight,yt.removeChild(xo)},zm=function(e){return Va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ms=function(e,t){if(ri&&!e&&!bc){jt(tt,"scrollEnd",uv);return}dv(),xn=tt.isRefreshing=!0,nt.forEach(function(r){return yn(r)&&++r.cacheID&&(r.rec=r())});var n=Ps("refreshInit");Q0&&tt.sort(),t||td(),nt.forEach(function(r){yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),bc=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),eh=1,zm(!0),et.forEach(function(r){var s=Ii(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),zm(!1),eh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),hv(jh,1),Tc.pause(),Ts++,xn=2,tr(2),et.forEach(function(r){return yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),xn=tt.isRefreshing=!1,Ps("refresh")},nh=0,tc=1,ba,tr=function(e){if(e===2||!xn&&!bc){tt.isUpdating=!0,ba&&ba.update(0);var t=et.length,n=on(),r=n-rf>=50,s=t&&et[0].scroll();if(tc=nh>s?-1:1,xn||(nh=s),r&&(ri&&!jc&&n-ri>200&&(ri=0,Ps("scrollEnd")),ia=rf,rf=n),tc<0){for(vn=t;vn-- >0;)et[vn]&&et[vn].update(0,r);tc=1}else for(vn=0;vn<t;vn++)et[vn]&&et[vn].update(0,r);tt.isUpdating=!1}Ga=0},ih=[av,lv,Jh,Zh,Jn+Ta,Jn+Ma,Jn+Ea,Jn+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nc=ih.concat([ys,Es,"boxSizing","max"+Lo,"max"+Qh,"position",Jn,zt,zt+Ea,zt+Ma,zt+Ta,zt+ya]),tR=function(e,t,n){So(n);var r=e._gsap;if(r.spacerIsNative)So(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},af=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=ih.length,o=t.style,a=e.style,l;s--;)l=ih[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Jh]=a[Zh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ys]=Ac(e,Mn)+Ht,o[Es]=Ac(e,Vt)+Ht,o[zt]=a[Jn]=a[lv]=a[av]="0",So(r),a[ys]=a["max"+Lo]=n[ys],a[Es]=a["max"+Qh]=n[Es],a[zt]=n[zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},nR=/([A-Z])/g,So=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(nR,"-$1").toLowerCase())}},zl=function(e){for(var t=nc.length,n=e.style,r=[],s=0;s<t;s++)r.push(nc[s],n[nc[s]]);return r.t=e,r},iR=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ic={left:0,top:0},km=function(e,t,n,r,s,o,a,l,c,u,h,f,d,g){yn(e)&&(e=e(l)),kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ql("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),oa(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&ec(a,n,r,!0);else{yn(t)&&(t=t(l));var S=(e||"0").split(" "),y,D,T,A;M=An(t,l)||yt,y=Zi(M)||{},(!y||!y.left&&!y.top)&&Qn(M).display==="none"&&(A=M.style.display,M.style.display="block",y=Zi(M),A?M.style.display=A:M.style.removeProperty("display")),D=Ql(S[0],y[r.d]),T=Ql(S[1]||"0",n),e=y[r.p]-c[r.p]-u+D+s-T,a&&ec(a,T,r,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var O=e+n,E=o._isStart;m="scroll"+r.d2,ec(o,O,r,E&&O>20||!E&&(h?Math.max(yt[m],hi[m]):o.parentNode[m])<=O+1),h&&(c=Zi(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+Ht))}return d&&M&&(m=Zi(M),d.seek(f),p=Zi(M),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},rR=/(webkit|moz|length|cssText|inset)/i,Hm=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Qn(e);for(o in a)!+o&&!rR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},pv=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},kl=function(e,t,n){var r={};r[t.p]="+="+n,Le.set(e,r)},Vm=function(e,t){var n=Hr(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=pv(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&tr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Le.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},jt(e,"wheel",n.wheelHandler),tt.isTouch&&jt(e,"touchmove",n.wheelHandler),s},tt=function(){function i(t,n){Qs||i.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ra){this.update=this.refresh=this.kill=bi;return}n=Nm(kn(n)||oa(n)||n.nodeType?{trigger:n}:n,Fl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,y=s.snap,D=s.pinReparent,T=s.pinSpacer,A=s.containerAnimation,O=s.fastScrollEnd,E=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:Vt,H=!h&&h!==0,V=An(n.scroller||rt),N=Le.core.getCache(V),j=Rs(V),te=("pinType"in n?n.pinType:Ur(V,"pinType")||j&&"fixed")==="fixed",ne=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],ee=H&&n.toggleActions.split(" "),k="markers"in n?n.markers:Fl.markers,fe=j?0:parseFloat(Qn(V)["border"+v.p2+Lo])||0,L=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ce=$1(V,j,v),Ge=j1(V,j),Q=0,de=0,pe=0,B=Hr(V,v),ue,se,U,we,ge,w,C,z,q,P,ce,R,x,I,F,X,J,oe,ae,re,Se,he,xe,ze,ye,Re,Fe,We,$e,De,G,ie,le,ve,Me,Ye,lt,pt,vt;if(L._startClamp=L._endClamp=!1,L._dir=v,m*=45,L.scroller=V,L.scroll=A?A.time.bind(A):B,we=B(),L.vars=n,r=r||n.animation,"refreshPriority"in n&&(Q0=1,n.refreshPriority===-9999&&(ba=L)),N.tweenScroll=N.tweenScroll||{top:Vm(V,Vt),left:Vm(V,Mn)},L.tweenTo=ue=N.tweenScroll[v.p],L.scrubDuration=function(Ee){le=oa(Ee)&&Ee,le?ie?ie.duration(Ee):ie=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(L)}}):(ie&&ie.progress(1).kill(),ie=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(h),De=0,l||(l=r.vars.id)),y&&((!ls(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in yt.style&&Le.set(j?[yt,hi]:V,{scrollBehavior:"auto"}),nt.forEach(function(Ee){return yn(Ee)&&Ee.target===(j?Pt.scrollingElement||hi:V)&&(Ee.smooth=!1)}),U=yn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Z1(r):y.snapTo==="labelsDirectional"?J1(r):y.directional!==!1?function(Ee,Xe){return ed(y.snapTo)(Ee,on()-de<500?0:Xe.direction)}:Le.utils.snap(y.snapTo),ve=y.duration||{min:.1,max:2},ve=ls(ve)?Sa(ve.min,ve.max):Sa(ve,ve),Me=Le.delayedCall(y.delay||le/2||.1,function(){var Ee=B(),Xe=on()-de<500,Ne=ue.tween;if((Xe||Math.abs(L.getVelocity())<10)&&!Ne&&!jc&&Q!==Ee){var Ve=(Ee-w)/I,Ct=r&&!H?r.totalProgress():Ve,Qe=Xe?0:(Ct-G)/(on()-ia)*1e3||0,Et=Le.utils.clamp(-Ve,1-Ve,Zs(Qe/2)*Qe/.185),qt=Ve+(y.inertia===!1?0:Et),Tt,xt,b=y,W=b.onStart,Y=b.onInterrupt,K=b.onComplete;if(Tt=U(qt,L),oa(Tt)||(Tt=qt),xt=Math.round(w+Tt*I),Ee<=C&&Ee>=w&&xt!==Ee){if(Ne&&!Ne._initted&&Ne.data<=Zs(xt-Ee))return;y.inertia===!1&&(Et=Tt-Ve),ue(xt,{duration:ve(Zs(Math.max(Zs(qt-Ct),Zs(Tt-Ct))*.185/Qe/.05||0)),ease:y.ease||"power3",data:Zs(xt-Ee),onInterrupt:function(){return Me.restart(!0)&&Y&&Y(L)},onComplete:function(){L.update(),Q=B(),r&&(ie?ie.resetTo("totalProgress",Tt,r._tTime/r._tDur):r.progress(Tt)),De=G=r&&!H?r.totalProgress():L.progress,M&&M(L),K&&K(L)}},Ee,Et*I,xt-Ee-Et*I),W&&W(L,ue.tween)}}else L.isActive&&Q!==Ee&&Me.restart(!0)}).pause()),l&&(th[l]=L),f=L.trigger=An(f||d!==!0&&d),vt=f&&f._gsap&&f._gsap.stRevert,vt&&(vt=vt(L)),d=d===!0?f:An(d),kn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Jn||(g=!g&&d.parentNode&&d.parentNode.style&&Qn(d.parentNode).display==="flex"?!1:zt),L.pin=d,se=Le.core.getCache(d),se.spacer?F=se.pinState:(T&&(T=An(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),se.spacerIsNative=!!T,T&&(se.spacerState=zl(T))),se.spacer=oe=T||Pt.createElement("div"),oe.classList.add("pin-spacer"),l&&oe.classList.add("pin-spacer-"+l),se.pinState=F=zl(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),L.spacer=oe=se.spacer,$e=Qn(d),ze=$e[g+v.os2],re=Le.getProperty(d),Se=Le.quickSetter(d,v.a,Ht),af(d,oe,$e),J=zl(d)),k){R=ls(k)?Nm(k,Om):Om,P=Bl("scroller-start",l,V,v,R,0),ce=Bl("scroller-end",l,V,v,R,0,P),ae=P["offset"+v.op.d2];var it=An(Ur(V,"content")||V);z=this.markerStart=Bl("start",l,it,v,R,ae,0,A),q=this.markerEnd=Bl("end",l,it,v,R,ae,0,A),A&&(pt=Le.quickSetter([z,q],v.a,Ht)),!te&&!(Fi.length&&Ur(V,"fixedMarkers")===!0)&&(K1(j?yt:V),Le.set([P,ce],{force3D:!0}),Re=Le.quickSetter(P,v.a,Ht),We=Le.quickSetter(ce,v.a,Ht))}if(A){var Be=A.vars.onUpdate,Pe=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),Be&&Be.apply(A,Pe||[])})}if(L.previous=function(){return et[et.indexOf(L)-1]},L.next=function(){return et[et.indexOf(L)+1]},L.revert=function(Ee,Xe){if(!Xe)return L.kill(!0);var Ne=Ee!==!1||!L.enabled,Ve=sn;Ne!==L.isReverted&&(Ne&&(Ye=Math.max(B(),L.scroll.rec||0),pe=L.progress,lt=r&&r.progress()),z&&[z,q,P,ce].forEach(function(Ct){return Ct.style.display=Ne?"none":"block"}),Ne&&(sn=L,L.update(Ne)),d&&(!D||!L.isActive)&&(Ne?tR(d,oe,F):af(d,oe,Qn(d),ye)),Ne||L.update(Ne),sn=Ve,L.isReverted=Ne)},L.refresh=function(Ee,Xe,Ne,Ve){if(!((sn||!L.enabled)&&!Xe)){if(d&&Ee&&ri){jt(i,"scrollEnd",uv);return}!xn&&me&&me(L),sn=L,ue.tween&&!Ne&&(ue.tween.kill(),ue.tween=0),ie&&ie.pause(),_&&r&&r.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ct=Ce(),Qe=Ge(),Et=A?A.duration():Ii(V,v),qt=I<=.01,Tt=0,xt=Ve||0,b=ls(Ne)?Ne.end:n.end,W=n.endTrigger||f,Y=ls(Ne)?Ne.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),K=L.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,L),Z=f&&Math.max(0,et.indexOf(L))||0,_e=Z,Te,Ae,Oe,He,Ue,Ie,ft,Ft,en,hn,je,ke,Mi;for(k&&ls(Ne)&&(ke=Le.getProperty(P,v.p),Mi=Le.getProperty(ce,v.p));_e--;)Ie=et[_e],Ie.end||Ie.refresh(0,1)||(sn=L),ft=Ie.pin,ft&&(ft===f||ft===d||ft===K)&&!Ie.isReverted&&(hn||(hn=[]),hn.unshift(Ie),Ie.revert(!0,!0)),Ie!==et[_e]&&(Z--,_e--);for(yn(Y)&&(Y=Y(L)),Y=Lm(Y,"start",L),w=km(Y,f,Ct,v,B(),z,P,L,Qe,fe,te,Et,A,L._startClamp&&"_startClamp")||(d?-.001:0),yn(b)&&(b=b(L)),kn(b)&&!b.indexOf("+=")&&(~b.indexOf(" ")?b=(kn(Y)?Y.split(" ")[0]:"")+b:(Tt=Ql(b.substr(2),Ct),b=kn(Y)?Y:(A?Le.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,w):w)+Tt,W=f)),b=Lm(b,"end",L),C=Math.max(w,km(b||(W?"100% 0":Et),W,Ct,v,B()+Tt,q,ce,L,Qe,fe,te,Et,A,L._endClamp&&"_endClamp"))||-.001,Tt=0,_e=Z;_e--;)Ie=et[_e],ft=Ie.pin,ft&&Ie.start-Ie._pinPush<=w&&!A&&Ie.end>0&&(Te=Ie.end-(L._startClamp?Math.max(0,Ie.start):Ie.start),(ft===f&&Ie.start-Ie._pinPush<w||ft===K)&&isNaN(Y)&&(Tt+=Te*(1-Ie.progress)),ft===d&&(xt+=Te));if(w+=Tt,C+=Tt,L._startClamp&&(L._startClamp+=Tt),L._endClamp&&!xn&&(L._endClamp=C||-.001,C=Math.min(C,Ii(V,v))),I=C-w||(w-=.01)&&.001,qt&&(pe=Le.utils.clamp(0,1,Le.utils.normalize(w,C,Ye))),L._pinPush=xt,z&&Tt&&(Te={},Te[v.a]="+="+Tt,K&&(Te[v.p]="-="+B()),Le.set([z,q],Te)),d&&!(eh&&L.end>=Ii(V,v)))Te=Qn(d),He=v===Vt,Oe=B(),he=parseFloat(re(v.a))+xt,!Et&&C>1&&(je=(j?Pt.scrollingElement||hi:V).style,je={style:je,value:je["overflow"+v.a.toUpperCase()]},j&&Qn(yt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(je.style["overflow"+v.a.toUpperCase()]="scroll")),af(d,oe,Te),J=zl(d),Ae=Zi(d,!0),Ft=te&&Hr(V,He?Mn:Vt)(),g?(ye=[g+v.os2,I+xt+Ht],ye.t=oe,_e=g===zt?Ac(d,v)+I+xt:0,_e&&(ye.push(v.d,_e+Ht),oe.style.flexBasis!=="auto"&&(oe.style.flexBasis=_e+Ht)),So(ye),K&&et.forEach(function(ht){ht.pin===K&&ht.vars.pinSpacing!==!1&&(ht._subPinOffset=!0)}),te&&B(Ye)):(_e=Ac(d,v),_e&&oe.style.flexBasis!=="auto"&&(oe.style.flexBasis=_e+Ht)),te&&(Ue={top:Ae.top+(He?Oe-w:Ft)+Ht,left:Ae.left+(He?Ft:Oe-w)+Ht,boxSizing:"border-box",position:"fixed"},Ue[ys]=Ue["max"+Lo]=Math.ceil(Ae.width)+Ht,Ue[Es]=Ue["max"+Qh]=Math.ceil(Ae.height)+Ht,Ue[Jn]=Ue[Jn+Ea]=Ue[Jn+Ma]=Ue[Jn+Ta]=Ue[Jn+ya]="0",Ue[zt]=Te[zt],Ue[zt+Ea]=Te[zt+Ea],Ue[zt+Ma]=Te[zt+Ma],Ue[zt+Ta]=Te[zt+Ta],Ue[zt+ya]=Te[zt+ya],X=iR(F,Ue,D),xn&&B(0)),r?(en=r._initted,tf(1),r.render(r.duration(),!0,!0),xe=re(v.a)-he+I+xt,Fe=Math.abs(I-xe)>1,te&&Fe&&X.splice(X.length-2,2),r.render(0,!0,!0),en||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),tf(0)):xe=I,je&&(je.value?je.style["overflow"+v.a.toUpperCase()]=je.value:je.style.removeProperty("overflow-"+v.a));else if(f&&B()&&!A)for(Ae=f.parentNode;Ae&&Ae!==yt;)Ae._pinOffset&&(w-=Ae._pinOffset,C-=Ae._pinOffset),Ae=Ae.parentNode;hn&&hn.forEach(function(ht){return ht.revert(!1,!0)}),L.start=w,L.end=C,we=ge=xn?Ye:B(),!A&&!xn&&(we<Ye&&B(Ye),L.scroll.rec=0),L.revert(!1,!0),de=on(),Me&&(Q=-1,Me.restart(!0)),sn=0,r&&H&&(r._initted||lt)&&r.progress()!==lt&&r.progress(lt||0,!0).render(r.time(),!0,!0),(qt||pe!==L.progress||A||_)&&(r&&!H&&r.totalProgress(A&&w<-.001&&!pe?Le.utils.normalize(w,C,0):pe,!0),L.progress=qt||(we-w)/I===pe?0:pe),d&&g&&(oe._pinOffset=Math.round(L.progress*xe)),ie&&ie.invalidate(),isNaN(ke)||(ke-=Le.getProperty(P,v.p),Mi-=Le.getProperty(ce,v.p),kl(P,v,ke),kl(z,v,ke-(Ve||0)),kl(ce,v,Mi),kl(q,v,Mi-(Ve||0))),qt&&!xn&&L.update(),u&&!xn&&!x&&(x=!0,u(L),x=!1)}},L.getVelocity=function(){return(B()-ge)/(on()-ia)*1e3||0},L.endAnimation=function(){Zo(L.callbackAnimation),r&&(ie?ie.progress(1):r.paused()?H||Zo(r,L.direction<0,1):Zo(r,r.reversed()))},L.labelToScroll=function(Ee){return r&&r.labels&&(w||L.refresh()||w)+r.labels[Ee]/r.duration()*I||0},L.getTrailing=function(Ee){var Xe=et.indexOf(L),Ne=L.direction>0?et.slice(0,Xe).reverse():et.slice(Xe+1);return(kn(Ee)?Ne.filter(function(Ve){return Ve.vars.preventOverlaps===Ee}):Ne).filter(function(Ve){return L.direction>0?Ve.end<=w:Ve.start>=C})},L.update=function(Ee,Xe,Ne){if(!(A&&!Ne&&!Ee)){var Ve=xn===!0?Ye:L.scroll(),Ct=Ee?0:(Ve-w)/I,Qe=Ct<0?0:Ct>1?1:Ct||0,Et=L.progress,qt,Tt,xt,b,W,Y,K,Z;if(Xe&&(ge=we,we=A?B():Ve,y&&(G=De,De=r&&!H?r.totalProgress():Qe)),m&&d&&!sn&&!Il&&ri&&(!Qe&&w<Ve+(Ve-ge)/(on()-ia)*m?Qe=1e-4:Qe===1&&C>Ve+(Ve-ge)/(on()-ia)*m&&(Qe=.9999)),Qe!==Et&&L.enabled){if(qt=L.isActive=!!Qe&&Qe<1,Tt=!!Et&&Et<1,Y=qt!==Tt,W=Y||!!Qe!=!!Et,L.direction=Qe>Et?1:-1,L.progress=Qe,W&&!sn&&(xt=Qe&&!Et?0:Qe===1?1:Et===1?2:3,H&&(b=!Y&&ee[xt+1]!=="none"&&ee[xt+1]||ee[xt],Z=r&&(b==="complete"||b==="reset"||b in r))),E&&(Y||Z)&&(Z||h||!r)&&(yn(E)?E(L):L.getTrailing(E).forEach(function(Oe){return Oe.endAnimation()})),H||(ie&&!sn&&!Il?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",Qe,r._tTime/r._tDur):(ie.vars.totalProgress=Qe,ie.invalidate().restart())):r&&r.totalProgress(Qe,!!(sn&&(de||Ee)))),d){if(Ee&&g&&(oe.style[g+v.os2]=ze),!te)Se(sa(he+xe*Qe));else if(W){if(K=!Ee&&Qe>Et&&C+1>Ve&&Ve+1>=Ii(V,v),D)if(!Ee&&(qt||K)){var _e=Zi(d,!0),Te=Ve-w;Hm(d,yt,_e.top+(v===Vt?Te:0)+Ht,_e.left+(v===Vt?0:Te)+Ht)}else Hm(d,oe);So(qt||K?X:J),Fe&&Qe<1&&qt||Se(he+(Qe===1&&!K?xe:0))}}y&&!ue.tween&&!sn&&!Il&&Me.restart(!0),a&&(Y||S&&Qe&&(Qe<1||!nf))&&Va(a.targets).forEach(function(Oe){return Oe.classList[qt||S?"add":"remove"](a.className)}),o&&!H&&!Ee&&o(L),W&&!sn?(H&&(Z&&(b==="complete"?r.pause().totalProgress(1):b==="reset"?r.restart(!0).pause():b==="restart"?r.restart(!0):r[b]()),o&&o(L)),(Y||!nf)&&(c&&Y&&sf(L,c),ne[xt]&&sf(L,ne[xt]),S&&(Qe===1?L.kill(!1,1):ne[xt]=0),Y||(xt=Qe===1?1:3,ne[xt]&&sf(L,ne[xt]))),O&&!qt&&Math.abs(L.getVelocity())>(oa(O)?O:2500)&&(Zo(L.callbackAnimation),ie?ie.progress(1):Zo(r,b==="reverse"?1:!Qe,1))):H&&o&&!sn&&o(L)}if(We){var Ae=A?Ve/A.duration()*(A._caScrollDist||0):Ve;Re(Ae+(P._isFlipped?1:0)),We(Ae)}pt&&pt(-Ve/A.duration()*(A._caScrollDist||0))}},L.enable=function(Ee,Xe){L.enabled||(L.enabled=!0,jt(V,"resize",aa),j||jt(V,"scroll",Js),me&&jt(i,"refreshInit",me),Ee!==!1&&(L.progress=pe=0,we=ge=Q=B()),Xe!==!1&&L.refresh())},L.getTween=function(Ee){return Ee&&ue?ue.tween:ie},L.setPositions=function(Ee,Xe,Ne,Ve){if(A){var Ct=A.scrollTrigger,Qe=A.duration(),Et=Ct.end-Ct.start;Ee=Ct.start+Et*Ee/Qe,Xe=Ct.start+Et*Xe/Qe}L.refresh(!1,!1,{start:Dm(Ee,Ne&&!!L._startClamp),end:Dm(Xe,Ne&&!!L._endClamp)},Ve),L.update()},L.adjustPinSpacing=function(Ee){if(ye&&Ee){var Xe=ye.indexOf(v.d)+1;ye[Xe]=parseFloat(ye[Xe])+Ee+Ht,ye[1]=parseFloat(ye[1])+Ee+Ht,So(ye)}},L.disable=function(Ee,Xe){if(L.enabled&&(Ee!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Xe||ie&&ie.pause(),Ye=0,se&&(se.uncache=1),me&&$t(i,"refreshInit",me),Me&&(Me.pause(),ue.tween&&ue.tween.kill()&&(ue.tween=0)),!j)){for(var Ne=et.length;Ne--;)if(et[Ne].scroller===V&&et[Ne]!==L)return;$t(V,"resize",aa),j||$t(V,"scroll",Js)}},L.kill=function(Ee,Xe){L.disable(Ee,Xe),ie&&!Xe&&ie.kill(),l&&delete th[l];var Ne=et.indexOf(L);Ne>=0&&et.splice(Ne,1),Ne===vn&&tc>0&&vn--,Ne=0,et.forEach(function(Ve){return Ve.scroller===L.scroller&&(Ne=1)}),Ne||xn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,Ee&&r.revert({kill:!1}),Xe||r.kill()),z&&[z,q,P,ce].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),ba===L&&(ba=0),d&&(se&&(se.uncache=1),Ne=0,et.forEach(function(Ve){return Ve.pin===d&&Ne++}),Ne||(se.spacer=0)),n.onKill&&n.onKill(L)},et.push(L),L.enable(!1,!1),vt&&vt(L),r&&r.add&&!I){var ot=L.update;L.update=function(){L.update=ot,w||C||L.refresh()},Le.delayedCall(.01,L.update),I=.01,w=C=0}else L.refresh();d&&eR()},i.register=function(n){return Qs||(Le=n||rv(),iv()&&window.document&&i.enable(),Qs=ra),Qs},i.defaults=function(n){if(n)for(var r in n)Fl[r]=n[r];return Fl},i.disable=function(n,r){ra=0,et.forEach(function(o){return o[r?"kill":"disable"](n)}),$t(rt,"wheel",Js),$t(Pt,"scroll",Js),clearInterval(Dl),$t(Pt,"touchcancel",bi),$t(yt,"touchstart",bi),Nl($t,Pt,"pointerdown,touchstart,mousedown",Im),Nl($t,Pt,"pointerup,touchend,mouseup",Um),Tc.kill(),Ul($t);for(var s=0;s<nt.length;s+=3)Ol($t,nt[s],nt[s+1]),Ol($t,nt[s],nt[s+2])},i.enable=function(){if(rt=window,Pt=document,hi=Pt.documentElement,yt=Pt.body,Le&&(Va=Le.utils.toArray,Sa=Le.utils.clamp,Qf=Le.core.context||bi,tf=Le.core.suppressOverwrites||bi,jh=rt.history.scrollRestoration||"auto",nh=rt.pageYOffset,Le.core.globals("ScrollTrigger",i),yt)){ra=1,xo=document.createElement("div"),xo.style.height="100vh",xo.style.position="absolute",dv(),Y1(),Ot.register(Le),i.isTouch=Ot.isTouch,mr=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jf=Ot.isTouch===1,jt(rt,"wheel",Js),J0=[rt,Pt,hi,yt],Le.matchMedia?(i.matchMedia=function(l){var c=Le.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Le.addEventListener("matchMediaInit",function(){return td()}),Le.addEventListener("matchMediaRevert",function(){return fv()}),Le.addEventListener("matchMedia",function(){ms(0,1),Ps("matchMedia")}),Le.matchMedia("(orientation: portrait)",function(){return of(),of})):console.warn("Requires GSAP 3.11.0 or later"),of(),jt(Pt,"scroll",Js);var n=yt.style,r=n.borderTopStyle,s=Le.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Zi(yt),Vt.m=Math.round(o.top+Vt.sc())||0,Mn.m=Math.round(o.left+Mn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Dl=setInterval(Fm,250),Le.delayedCall(.5,function(){return Il=0}),jt(Pt,"touchcancel",bi),jt(yt,"touchstart",bi),Nl(jt,Pt,"pointerdown,touchstart,mousedown",Im),Nl(jt,Pt,"pointerup,touchend,mouseup",Um),Zf=Le.utils.checkPrefix("transform"),nc.push(Zf),Qs=on(),Tc=Le.delayedCall(.2,ms).pause(),eo=[Pt,"visibilitychange",function(){var l=rt.innerWidth,c=rt.innerHeight;Pt.hidden?(Cm=l,Pm=c):(Cm!==l||Pm!==c)&&aa()},Pt,"DOMContentLoaded",ms,rt,"load",ms,rt,"resize",aa],Ul(jt),et.forEach(function(l){return l.enable(0,1)}),a=0;a<nt.length;a+=3)Ol($t,nt[a],nt[a+1]),Ol($t,nt[a],nt[a+2])}},i.config=function(n){"limitCallbacks"in n&&(nf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Dl)||(Dl=r)&&setInterval(Fm,r),"ignoreMobileResize"in n&&(Jf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ul($t)||Ul(jt,n.autoRefreshEvents||"none"),ev=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=An(n),o=nt.indexOf(s),a=Rs(s);~o&&nt.splice(o,a?6:2),r&&(a?Fi.unshift(rt,r,yt,r,hi,r):Fi.unshift(s,r))},i.clearMatchMedia=function(n){et.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(kn(n)?An(n):n).getBoundingClientRect(),a=o[s?ys:Es]*r||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},i.positionInViewport=function(n,r,s){kn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?ys:Es],l=r==null?a/2:r in wc?wc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},i.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Cs.killAll||[];Cs={},r.forEach(function(s){return s()})}},i}();tt.version="3.12.5";tt.saveStyles=function(i){return i?Va(i).forEach(function(e){if(e&&e.style){var t=zn.indexOf(e);t>=0&&zn.splice(t,5),zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Qf())}}):zn};tt.revert=function(i,e){return td(!i,e)};tt.create=function(i,e){return new tt(i,e)};tt.refresh=function(i){return i?aa():(Qs||tt.register())&&ms(!0)};tt.update=function(i){return++nt.cache&&tr(i===!0?2:0)};tt.clearScrollMemory=hv;tt.maxScroll=function(i,e){return Ii(i,e?Mn:Vt)};tt.getScrollFunc=function(i,e){return Hr(An(i),e?Mn:Vt)};tt.getById=function(i){return th[i]};tt.getAll=function(){return et.filter(function(i){return i.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!ri};tt.snapDirectional=ed;tt.addEventListener=function(i,e){var t=Cs[i]||(Cs[i]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(i,e){var t=Cs[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Le.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),jt(tt,"refresh",function(){return s=e.batchMax()})),Va(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var Gm=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},lf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===hi&&i(yt,t)},Hl={auto:1,scroll:1},sR=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hl[(l=Qn(s)).overflowY]||Hl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Rs(s)&&(Hl[(l=Qn(s)).overflowY]||Hl[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},mv=function(e,t,n,r){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&sR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&jt(Pt,Ot.eventTypes[0],Xm,!1,!0)},onDisable:function(){return $t(Pt,Ot.eventTypes[0],Xm,!0)}})},oR=/(input|label|select|textarea)/i,Wm,Xm=function(e){var t=oR.test(e.target.tagName);(t||Wm)&&(e._gsapAllow=!0,Wm=t)},aR=function(e){ls(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=An(e.target)||hi,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=mr&&(e.content&&An(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Hr(c,Vt),g=Hr(c,Mn),_=1,m=(Ot.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,M=yn(r)?function(){return r(a)}:function(){return r||2.8},S,y,D=mv(c,e.type,!0,s),T=function(){return y=!1},A=bi,O=bi,E=function(){l=Ii(c,Vt),O=Sa(mr?1:0,l),n&&(A=Sa(0,Ii(c,Mn))),S=Ts},v=function(){f._gsap.y=sa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},H=function(){if(y){requestAnimationFrame(T);var k=sa(a.deltaY/2),fe=O(d.v-k);if(f&&fe!==d.v+d.offset){d.offset=fe-d.v;var L=sa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=nt.cache,tr()}return!0}d.offset&&v(),y=!0},V,N,j,te,ne=function(){E(),V.isActive()&&V.vars.scrollY>l&&(d()>l?V.progress(1)&&d(l):V.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(ee){return mr&&ee.type==="touchmove"&&H()||_>1.05&&ee.type!=="touchstart"||a.isGesturing||ee.touches&&ee.touches.length>1},e.onPress=function(){y=!1;var ee=_;_=sa((rt.visualViewport&&rt.visualViewport.scale||1)/m),V.pause(),ee!==_&&lf(c,_>1.01?!0:n?!1:"x"),N=g(),j=d(),E(),S=Ts},e.onRelease=e.onGestureStart=function(ee,k){if(d.offset&&v(),!k)te.restart(!0);else{nt.cache++;var fe=M(),L,me;n&&(L=g(),me=L+fe*.05*-ee.velocityX/.227,fe*=Gm(g,L,me,Ii(c,Mn)),V.vars.scrollX=A(me)),L=d(),me=L+fe*.05*-ee.velocityY/.227,fe*=Gm(d,L,me,Ii(c,Vt)),V.vars.scrollY=O(me),V.invalidate().duration(fe).play(.01),(mr&&V.vars.scrollY>=l||L>=l-1)&&Le.to({},{onUpdate:ne,duration:fe})}o&&o(ee)},e.onWheel=function(){V._ts&&V.pause(),on()-p>1e3&&(S=0,p=on())},e.onChange=function(ee,k,fe,L,me){if(Ts!==S&&E(),k&&n&&g(A(L[2]===k?N+(ee.startX-ee.x):g()+k-L[1])),fe){d.offset&&v();var Ce=me[2]===fe,Ge=Ce?j+ee.startY-ee.y:d()+fe-me[1],Q=O(Ge);Ce&&Ge!==Q&&(j+=Q-Ge),d(Q)}(fe||k)&&tr()},e.onEnable=function(){lf(c,n?!1:"x"),tt.addEventListener("refresh",ne),jt(rt,"resize",ne),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),D.enable()},e.onDisable=function(){lf(c,!0),$t(rt,"resize",ne),tt.removeEventListener("refresh",ne),D.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=mr,mr&&!d()&&d(1),mr&&Le.ticker.add(bi),te=a._dc,V=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pv(d,d(),function(){return V.pause()})},onUpdate:tr,onComplete:te.vars.onComplete}),a};tt.sort=function(i){return et.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};tt.observe=function(i){return new Ot(i)};tt.normalizeScroll=function(i){if(typeof i>"u")return gn;if(i===!0&&gn)return gn.enable();if(i===!1){gn&&gn.kill(),gn=i;return}var e=i instanceof Ot?i:aR(i);return gn&&gn.target===e.target&&gn.kill(),Rs(e.target)&&(gn=e),e};tt.core={_getVelocityProp:Kf,_inputObserver:mv,_scrollers:nt,_proxies:Fi,bridge:{ss:function(){ri||Ps("scrollStart"),ri=on()},ref:function(){return sn}}};rv()&&Le.registerPlugin(tt);const lR=i=>(Ex("data-v-58bc858e"),i=i(),Tx(),i),cR={class:"app-content"},uR=lR(()=>No("div",{class:"canvas"},null,-1)),fR={},hR=Object.assign(fR,{__name:"gsap-模型动画",setup(i){yh(()=>{tt.killAll()}),Y_(()=>{var n=new yw;const r=new Cw(2e3);n.add(r);var s=new Bo(100,100,100),o=new lm({color:"white"});o.transparent=!0,o.opacity=.7;var a=new gi(s,o),l=new lm({color:"blue"}),c=new gi(s,l);n.add(a,c);var u=new ww("white");u.position.set(300,500,300),n.add(u),new Rw("red");var h=window.innerWidth,f=window.innerHeight,d=h/f,g=2e3,_=new Vn(90,d,.1,g);_.position.set(300,300,1e3),_.lookAt(n.position);var m=new Mw({antialias:!0});m.setSize(h,f),m.setClearColor("white",0),document.querySelector(".canvas").appendChild(m.domElement),m.render(n,_),t({mesh:a}),e({mesh:c});function p(){m.render(n,_),requestAnimationFrame(p)}p()});const e=({mesh:n})=>{const r=document.querySelectorAll("h1")[29],s=document.querySelectorAll("h1")[39];os.to(r,{x:100,duration:1,color:"red",scrollTrigger:{trigger:r,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}}),os.to(n.position,{z:300,duration:1,scrollTrigger:{trigger:r,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}}),os.to(s,{x:100,duration:1,color:"red",scrollTrigger:{trigger:s,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}}),os.to(n.position,{y:300,duration:1,scrollTrigger:{trigger:s,start:"center center",end:"center top",markers:!0,toggleActions:"restart none none reverse"}})},t=({mesh:n})=>{os.registerPlugin(tt);const r=os.timeline();r.to(n.rotation,{x:Math.PI*2,duration:1}).to(n.position,{x:200,duration:1},"-=1").to(n.rotation,{y:Math.PI*2,duration:1}).to(n.position,{y:200,duration:1},"-=1"),tt.create({trigger:".app-content",animation:r,start:"top top",scrub:!0,markers:!0,onUpdate:s=>{console.log(s.progress)}})};return(n,r)=>(uo(),da("div",cR,[uR,(uo(),da(fi,null,$_(70,s=>No("h1",{key:s},m_(s)+".three + gsap",1)),64))]))}}),dR=dg(hR,[["__scopeId","data-v-58bc858e"]]),pR=Object.freeze(Object.defineProperty({__proto__:null,default:dR},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const to=typeof document<"u";function mR(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const mt=Object.assign;function cf(i,e){const t={};for(const n in e){const r=e[n];t[n]=Si(r)?r.map(i):i(r)}return t}const Aa=()=>{},Si=Array.isArray,_v=/#/g,_R=/&/g,gR=/\//g,vR=/=/g,xR=/\?/g,gv=/\+/g,SR=/%5B/g,MR=/%5D/g,vv=/%5E/g,yR=/%60/g,xv=/%7B/g,ER=/%7C/g,Sv=/%7D/g,TR=/%20/g;function nd(i){return encodeURI(""+i).replace(ER,"|").replace(SR,"[").replace(MR,"]")}function bR(i){return nd(i).replace(xv,"{").replace(Sv,"}").replace(vv,"^")}function rh(i){return nd(i).replace(gv,"%2B").replace(TR,"+").replace(_v,"%23").replace(_R,"%26").replace(yR,"`").replace(xv,"{").replace(Sv,"}").replace(vv,"^")}function AR(i){return rh(i).replace(vR,"%3D")}function wR(i){return nd(i).replace(_v,"%23").replace(xR,"%3F")}function RR(i){return i==null?"":wR(i).replace(gR,"%2F")}function Wa(i){try{return decodeURIComponent(""+i)}catch{}return""+i}const CR=/\/$/,PR=i=>i.replace(CR,"");function uf(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=UR(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:Wa(o)}}function LR(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qm(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function DR(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Do(e.matched[n],t.matched[r])&&Mv(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Do(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Mv(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!IR(i[t],e[t]))return!1;return!0}function IR(i,e){return Si(i)?Ym(i,e):Si(e)?Ym(e,i):i===e}function Ym(i,e){return Si(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function UR(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o).join("/")}var Xa;(function(i){i.pop="pop",i.push="push"})(Xa||(Xa={}));var wa;(function(i){i.back="back",i.forward="forward",i.unknown=""})(wa||(wa={}));function NR(i){if(!i)if(to){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),PR(i)}const OR=/^[^#]+#/;function FR(i,e){return i.replace(OR,"#")+e}function BR(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Kc=()=>({left:window.scrollX,top:window.scrollY});function zR(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=BR(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $m(i,e){return(history.state?history.state.position-e:-1)+i}const sh=new Map;function kR(i,e){sh.set(i,e)}function HR(i){const e=sh.get(i);return sh.delete(i),e}let VR=()=>location.protocol+"//"+location.host;function yv(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),qm(l,"")}return qm(t,i)+n+r}function GR(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const d=yv(i,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else n(d);r.forEach(p=>{p(t.value,g,{delta:m,type:Xa.pop,direction:m?m>0?wa.forward:wa.back:wa.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(mt({},f.state,{scroll:Kc()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function jm(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?Kc():null}}function WR(i){const{history:e,location:t}=window,n={value:yv(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:VR()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=mt({},e.state,jm(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=mt({},r.value,e.state,{forward:l,scroll:Kc()});s(u.current,u,!0);const h=mt({},jm(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function XR(i){i=NR(i);const e=WR(i),t=GR(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=mt({location:"",base:i,go:n,createHref:FR.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function qR(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),XR(i)}function YR(i){return typeof i=="string"||i&&typeof i=="object"}function Ev(i){return typeof i=="string"||typeof i=="symbol"}const pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tv=Symbol("");var Km;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Km||(Km={}));function Io(i,e){return mt(new Error,{type:i,[Tv]:!0},e)}function qi(i,e){return i instanceof Error&&Tv in i&&(e==null||!!(i.type&e))}const Zm="[^/]+?",$R={sensitive:!1,strict:!1,start:!0,end:!0},jR=/[.+*?^${}()[\]/\\]/g;function KR(i,e){const t=mt({},$R,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(jR,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;s.push({name:g,repeatable:_,optional:m});const M=p||Zm;if(M!==Zm){d+=10;try{new RegExp(`(${M})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+y.message)}}let S=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,d+=20,m&&(d+=-8),_&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Si(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Si(p)?p.join("/"):p;if(!M)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function ZR(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function JR(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=ZR(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Jm(n))return 1;if(Jm(r))return-1}return r.length-n.length}function Jm(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const QR={type:0,value:""},eC=/[a-zA-Z0-9_]/;function tC(i){if(!i)return[[]];if(i==="/")return[[QR]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:eC.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function nC(i,e,t){const n=KR(tC(i.path),t),r=mt(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function iC(i,e){const t=[],n=new Map;e=t_({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const d=!f,g=rC(u);g.aliasOf=f&&f.record;const _=t_(e,u),m=[g];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of S)m.push(mt({},g,{components:f?f.record.components:g.components,path:y,aliasOf:f?f.record:g}))}let p,M;for(const S of m){const{path:y}=S;if(h&&y[0]!=="/"){const D=h.record.path,T=D[D.length-1]==="/"?"":"/";S.path=h.record.path+(y&&T+y)}if(p=nC(S,h,_),f?f.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),d&&u.name&&!e_(p)&&o(u.name)),g.children){const D=g.children;for(let T=0;T<D.length;T++)s(D[T],p,f&&f.children[T])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:Aa}function o(u){if(Ev(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&JR(u,t[h])>=0&&(u.record.path!==t[h].record.path||!bv(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!e_(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Io(1,{location:u});_=f.record.name,d=mt(Qm(h.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Qm(u.params,f.keys.map(M=>M.name))),g=f.stringify(d)}else if(u.path!=null)g=u.path,f=t.find(M=>M.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?n.get(h.name):t.find(M=>M.re.test(h.path)),!f)throw Io(1,{location:u,currentLocation:h});_=f.record.name,d=mt({},h.params,u.params),g=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:oC(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Qm(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function rC(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:sC(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function sC(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function e_(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function oC(i){return i.reduce((e,t)=>mt(e,t.meta),{})}function t_(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function bv(i,e){return e.children.some(t=>t===i||bv(i,t))}function aC(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(gv," "),o=s.indexOf("="),a=Wa(o<0?s:s.slice(0,o)),l=o<0?null:Wa(s.slice(o+1));if(a in e){let c=e[a];Si(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function n_(i){let e="";for(let t in i){const n=i[t];if(t=AR(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Si(n)?n.map(s=>s&&rh(s)):[n&&rh(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function lC(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Si(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const cC=Symbol(""),i_=Symbol(""),Zc=Symbol(""),Av=Symbol(""),oh=Symbol("");function Jo(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function xr(i,e,t,n,r,s=o=>o()){const o=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Io(4,{from:t,to:e})):f instanceof Error?l(f):YR(f)?l(Io(2,{from:e,to:f})):(o&&n.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>i.call(n&&n.instances[r],e,t,c));let h=Promise.resolve(u);i.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function ff(i,e,t,n,r=s=>s()){const s=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(uC(l)){const u=(l.__vccOpts||l)[e];u&&s.push(xr(u,t,n,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=mR(u)?u.default:u;o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&xr(d,t,n,o,a,r)()}))}}return s}function uC(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function r_(i){const e=Ui(Zc),t=Ui(Av),n=di(()=>{const l=Rr(i.to);return e.resolve(l)}),r=di(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Do.bind(null,u));if(f>-1)return f;const d=s_(l[c-2]);return c>1&&s_(u)===d&&h[h.length-1].path!==d?h.findIndex(Do.bind(null,l[c-2])):f}),s=di(()=>r.value>-1&&dC(t.params,n.value.params)),o=di(()=>r.value>-1&&r.value===t.matched.length-1&&Mv(t.params,n.value.params));function a(l={}){return hC(l)?e[Rr(i.replace)?"replace":"push"](Rr(i.to)).catch(Aa):Promise.resolve()}return{route:n,href:di(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const fC=W_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:r_,setup(i,{slots:e}){const t=Ic(r_(i)),{options:n}=Ui(Zc),r=di(()=>({[o_(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[o_(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:hg("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),wv=fC;function hC(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function dC(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Si(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function s_(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const o_=(i,e,t)=>i??e??t,pC=W_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Ui(oh),r=di(()=>i.route||n.value),s=Ui(i_,0),o=di(()=>{let c=Rr(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=di(()=>r.value.matched[o.value]);Xl(i_,di(()=>o.value+1)),Xl(cC,a),Xl(oh,r);const l=dx();return Gl(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Do(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return a_(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=hg(f,mt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return a_(t.default,{Component:m,route:c})||m}}});function a_(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const mC=pC;function _C(i){const e=iC(i.routes,i),t=i.parseQuery||aC,n=i.stringifyQuery||n_,r=i.history,s=Jo(),o=Jo(),a=Jo(),l=px(pr);let c=pr;to&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cf.bind(null,B=>""+B),h=cf.bind(null,RR),f=cf.bind(null,Wa);function d(B,ue){let se,U;return Ev(B)?(se=e.getRecordMatcher(B),U=ue):U=B,e.addRoute(U,se)}function g(B){const ue=e.getRecordMatcher(B);ue&&e.removeRoute(ue)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ue){if(ue=mt({},ue||l.value),typeof B=="string"){const C=uf(t,B,ue.path),z=e.resolve({path:C.path},ue),q=r.createHref(C.fullPath);return mt(C,z,{params:f(z.params),hash:Wa(C.hash),redirectedFrom:void 0,href:q})}let se;if(B.path!=null)se=mt({},B,{path:uf(t,B.path,ue.path).path});else{const C=mt({},B.params);for(const z in C)C[z]==null&&delete C[z];se=mt({},B,{params:h(C)}),ue.params=h(ue.params)}const U=e.resolve(se,ue),we=B.hash||"";U.params=u(f(U.params));const ge=LR(n,mt({},B,{hash:bR(we),path:U.path})),w=r.createHref(ge);return mt({fullPath:ge,hash:we,query:n===n_?lC(B.query):B.query||{}},U,{redirectedFrom:void 0,href:w})}function M(B){return typeof B=="string"?uf(t,B,l.value.path):mt({},B)}function S(B,ue){if(c!==B)return Io(8,{from:ue,to:B})}function y(B){return A(B)}function D(B){return y(mt(M(B),{replace:!0}))}function T(B){const ue=B.matched[B.matched.length-1];if(ue&&ue.redirect){const{redirect:se}=ue;let U=typeof se=="function"?se(B):se;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),mt({query:B.query,hash:B.hash,params:U.path!=null?{}:B.params},U)}}function A(B,ue){const se=c=p(B),U=l.value,we=B.state,ge=B.force,w=B.replace===!0,C=T(se);if(C)return A(mt(M(C),{state:typeof C=="object"?mt({},we,C.state):we,force:ge,replace:w}),ue||se);const z=se;z.redirectedFrom=ue;let q;return!ge&&DR(n,U,se)&&(q=Io(16,{to:z,from:U}),me(U,U,!0,!1)),(q?Promise.resolve(q):v(z,U)).catch(P=>qi(P)?qi(P,2)?P:L(P):k(P,z,U)).then(P=>{if(P){if(qi(P,2))return A(mt({replace:w},M(P.to),{state:typeof P.to=="object"?mt({},we,P.to.state):we,force:ge}),ue||z)}else P=V(z,U,!0,w,we);return H(z,U,P),P})}function O(B,ue){const se=S(B,ue);return se?Promise.reject(se):Promise.resolve()}function E(B){const ue=Q.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(B):B()}function v(B,ue){let se;const[U,we,ge]=gC(B,ue);se=ff(U.reverse(),"beforeRouteLeave",B,ue);for(const C of U)C.leaveGuards.forEach(z=>{se.push(xr(z,B,ue))});const w=O.bind(null,B,ue);return se.push(w),pe(se).then(()=>{se=[];for(const C of s.list())se.push(xr(C,B,ue));return se.push(w),pe(se)}).then(()=>{se=ff(we,"beforeRouteUpdate",B,ue);for(const C of we)C.updateGuards.forEach(z=>{se.push(xr(z,B,ue))});return se.push(w),pe(se)}).then(()=>{se=[];for(const C of ge)if(C.beforeEnter)if(Si(C.beforeEnter))for(const z of C.beforeEnter)se.push(xr(z,B,ue));else se.push(xr(C.beforeEnter,B,ue));return se.push(w),pe(se)}).then(()=>(B.matched.forEach(C=>C.enterCallbacks={}),se=ff(ge,"beforeRouteEnter",B,ue,E),se.push(w),pe(se))).then(()=>{se=[];for(const C of o.list())se.push(xr(C,B,ue));return se.push(w),pe(se)}).catch(C=>qi(C,8)?C:Promise.reject(C))}function H(B,ue,se){a.list().forEach(U=>E(()=>U(B,ue,se)))}function V(B,ue,se,U,we){const ge=S(B,ue);if(ge)return ge;const w=ue===pr,C=to?history.state:{};se&&(U||w?r.replace(B.fullPath,mt({scroll:w&&C&&C.scroll},we)):r.push(B.fullPath,we)),l.value=B,me(B,ue,se,w),L()}let N;function j(){N||(N=r.listen((B,ue,se)=>{if(!de.listening)return;const U=p(B),we=T(U);if(we){A(mt(we,{replace:!0}),U).catch(Aa);return}c=U;const ge=l.value;to&&kR($m(ge.fullPath,se.delta),Kc()),v(U,ge).catch(w=>qi(w,12)?w:qi(w,2)?(A(w.to,U).then(C=>{qi(C,20)&&!se.delta&&se.type===Xa.pop&&r.go(-1,!1)}).catch(Aa),Promise.reject()):(se.delta&&r.go(-se.delta,!1),k(w,U,ge))).then(w=>{w=w||V(U,ge,!1),w&&(se.delta&&!qi(w,8)?r.go(-se.delta,!1):se.type===Xa.pop&&qi(w,20)&&r.go(-1,!1)),H(U,ge,w)}).catch(Aa)}))}let te=Jo(),ne=Jo(),ee;function k(B,ue,se){L(B);const U=ne.list();return U.length?U.forEach(we=>we(B,ue,se)):console.error(B),Promise.reject(B)}function fe(){return ee&&l.value!==pr?Promise.resolve():new Promise((B,ue)=>{te.add([B,ue])})}function L(B){return ee||(ee=!B,j(),te.list().forEach(([ue,se])=>B?se(B):ue()),te.reset()),B}function me(B,ue,se,U){const{scrollBehavior:we}=i;if(!to||!we)return Promise.resolve();const ge=!se&&HR($m(B.fullPath,0))||(U||!se)&&history.state&&history.state.scroll||null;return O_().then(()=>we(B,ue,ge)).then(w=>w&&zR(w)).catch(w=>k(w,B,ue))}const Ce=B=>r.go(B);let Ge;const Q=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:i,push:y,replace:D,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:fe,install(B){const ue=this;B.component("RouterLink",wv),B.component("RouterView",mC),B.config.globalProperties.$router=ue,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Rr(l)}),to&&!Ge&&l.value===pr&&(Ge=!0,y(r.location).catch(we=>{}));const se={};for(const we in pr)Object.defineProperty(se,we,{get:()=>l.value[we],enumerable:!0});B.provide(Zc,ue),B.provide(Av,R_(se)),B.provide(oh,l);const U=B.unmount;Q.add(B),B.unmount=function(){Q.delete(B),Q.size<1&&(c=pr,N&&N(),N=null,l.value=pr,Ge=!1,ee=!1),U()}}};function pe(B){return B.reduce((ue,se)=>ue.then(()=>E(se)),Promise.resolve())}return de}function gC(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>Do(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Do(c,l))||r.push(l))}return[t,n,r]}function vC(){return Ui(Zc)}const xC=No("h2",null,"目录：",-1),SC={__name:"HomeView",setup(i){const e=vC().options.routes;return console.log(e),(t,n)=>(uo(),da("main",null,[xC,No("ul",null,[(uo(!0),da(fi,null,$_(Rr(e),(r,s)=>(uo(),da("li",{key:s},[Xn(Rr(wv),{to:r.path},{default:H_(()=>[cg(m_(r.name),1)]),_:2},1032,["to"])]))),128))])]))}},hf=Object.assign({"../views/works/gsap-模型动画.vue":pR}),Rv=[];for(const i in hf)if(Object.hasOwnProperty.call(hf,i)){const e=hf[i].default,t=i.replace(/.vue*$/g,"").split("../views/works")[1],n=t.split("/").reverse()[0],r={path:encodeURI(t),name:n,component:e,meta:{title:n}};Rv.push(r)}const MC=_C({history:qR("./"),routes:[{path:"/",name:"home",component:SC},{path:"/about",name:"about",component:()=>oM(()=>import("./AboutView-gsC7unWr.js"),__vite__mapDeps([0,1]),import.meta.url)},...Rv]}),Cv=JS(iM);Cv.use(MC);Cv.mount("#app");export{dg as _,No as a,da as c,uo as o};
