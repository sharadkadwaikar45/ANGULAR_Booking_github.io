!function(){"use strict";function e(t,r){return(e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(t,r)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var o,a=n(e);if(t){var i=n(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return r(this,o)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?a:String(a)),n)}var o,a}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4885],{4885:function(r,n,o){o.d(n,{Ou:function(){return k},Cq:function(){return y}});var s=o(37716),f=o(38583),m=o(72458),d=o(39490),c=o(80521),p=o(46237);function u(e,t){if(1&e&&(s.O4$(),s._UZ(0,"circle",3)),2&e){var r=s.oxw();s.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+r._spinnerAnimationLabel)("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),s.uIk("r",r._getCircleRadius())}}function l(e,t){if(1&e&&(s.O4$(),s._UZ(0,"circle",3)),2&e){var r=s.oxw();s.Udp("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),s.uIk("r",r._getCircleRadius())}}var h=(0,m.pj)(function(){return a(function e(t){i(this,e),this._elementRef=t})}(),"primary"),g=new s.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),k=function(r){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&e(t,r)}(o,r);var n=t(o);function o(e,t,r,a,s){var f;i(this,o),(f=n.call(this,e))._document=r,f._diameter=100,f._value=0,f._fallbackAnimation=!1,f.mode="determinate";var m=o._diameters;return f._spinnerAnimationLabel=f._getSpinnerAnimationLabel(),m.has(r.head)||m.set(r.head,new Set([100])),f._fallbackAnimation=t.EDGE||t.TRIDENT,f._noopAnimations="NoopAnimations"===a&&!!s&&!s._forceAnimations,s&&(s.diameter&&(f.diameter=s.diameter),s.strokeWidth&&(f.strokeWidth=s.strokeWidth)),f}return a(o,[{key:"diameter",get:function(){return this._diameter},set:function(e){this._diameter=(0,d.su)(e),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(e){this._strokeWidth=(0,d.su)(e)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(e){this._value=Math.max(0,Math.min(100,(0,d.su)(e)))}},{key:"ngOnInit",value:function(){var e=this._elementRef.nativeElement;this._styleRoot=(0,c.kV)(e)||this._document.head,this._attachStyleNode(),e.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_getCircleRadius",value:function(){return(this.diameter-10)/2}},{key:"_getViewBox",value:function(){var e=2*this._getCircleRadius()+this.strokeWidth;return"0 0 ".concat(e," ").concat(e)}},{key:"_getStrokeCircumference",value:function(){return 2*Math.PI*this._getCircleRadius()}},{key:"_getStrokeDashOffset",value:function(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}},{key:"_getCircleStrokeWidth",value:function(){return this.strokeWidth/this.diameter*100}},{key:"_attachStyleNode",value:function(){var e=this._styleRoot,t=this._diameter,r=o._diameters,n=r.get(e);if(!n||!n.has(t)){var a=this._document.createElement("style");a.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),a.textContent=this._getAnimationText(),e.appendChild(a),n||(n=new Set,r.set(e,n)),n.add(t)}}},{key:"_getAnimationText",value:function(){var e=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*e).replace(/END_VALUE/g,""+.2*e).replace(/DIAMETER/g,"".concat(this._spinnerAnimationLabel))}},{key:"_getSpinnerAnimationLabel",value:function(){return this.diameter.toString().replace(".","_")}}]),o}(h);k.\u0275fac=function(e){return new(e||k)(s.Y36(s.SBq),s.Y36(c.t4),s.Y36(f.K0,8),s.Y36(p.Qb,8),s.Y36(g))},k.\u0275cmp=s.Xpm({type:k,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(s.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),s.Udp("width",t.diameter,"px")("height",t.diameter,"px"),s.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[s.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(s.O4$(),s.TgZ(0,"svg",0),s.YNc(1,u,1,9,"circle",1),s.YNc(2,l,1,7,"circle",2),s.qZA()),2&e&&(s.Udp("width",t.diameter,"px")("height",t.diameter,"px"),s.Q6J("ngSwitch","indeterminate"===t.mode),s.uIk("viewBox",t._getViewBox()),s.xp6(1),s.Q6J("ngSwitchCase",!0),s.xp6(1),s.Q6J("ngSwitchCase",!1))},directives:[f.RF,f.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),k._diameters=new WeakMap;var _,y=((_=a(function e(){i(this,e)})).\u0275fac=function(e){return new(e||_)},_.\u0275mod=s.oAB({type:_}),_.\u0275inj=s.cJS({imports:[[m.BQ,f.ez],m.BQ]}),_)}}])}();