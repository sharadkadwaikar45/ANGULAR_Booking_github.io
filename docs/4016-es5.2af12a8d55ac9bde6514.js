!function(){"use strict";function e(){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,r){var i=t(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function t(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4016],{52796:function(t,r,o){o.d(r,{HI:function(){return m},Xx:function(){return S},_0:function(){return O},nZ:function(){return A},Hs:function(){return C},rO:function(){return N},cu:function(){return x},XJ:function(){return R},Ud:function(){return T},C2:function(){return b}});var u,l=o(38345),f=o(79765),h=o(26215),p=o(95639),v=o(25917),_=o(46782),y=o(37716),g=o(39490),k=o(70946),b=function(e){a(r,e);var t=c(r);function r(e,n,o){var s;return i(this,r),(s=t.call(this)).getLevel=e,s.isExpandable=n,s.options=o,s.options&&(s.trackBy=s.options.trackBy),s}return s(r,[{key:"getDescendants",value:function(e){for(var t=[],n=this.dataNodes.indexOf(e)+1;n<this.dataNodes.length&&this.getLevel(e)<this.getLevel(this.dataNodes[n]);n++)t.push(this.dataNodes[n]);return t}},{key:"expandAll",value:function(){var e,t=this;(e=this.expansionModel).select.apply(e,n(this.dataNodes.map(function(e){return t._trackByValue(e)})))}}]),r}(function(){function e(){i(this,e),this.expansionModel=new l.Ov(!0)}return s(e,[{key:"toggle",value:function(e){this.expansionModel.toggle(this._trackByValue(e))}},{key:"expand",value:function(e){this.expansionModel.select(this._trackByValue(e))}},{key:"collapse",value:function(e){this.expansionModel.deselect(this._trackByValue(e))}},{key:"isExpanded",value:function(e){return this.expansionModel.isSelected(this._trackByValue(e))}},{key:"toggleDescendants",value:function(e){this.expansionModel.isSelected(this._trackByValue(e))?this.collapseDescendants(e):this.expandDescendants(e)}},{key:"collapseAll",value:function(){this.expansionModel.clear()}},{key:"expandDescendants",value:function(e){var t,r=this,i=[e];i.push.apply(i,n(this.getDescendants(e))),(t=this.expansionModel).select.apply(t,n(i.map(function(e){return r._trackByValue(e)})))}},{key:"collapseDescendants",value:function(e){var t,r=this,i=[e];i.push.apply(i,n(this.getDescendants(e))),(t=this.expansionModel).deselect.apply(t,n(i.map(function(e){return r._trackByValue(e)})))}},{key:"_trackByValue",value:function(e){return this.trackBy?this.trackBy(e):e}}]),e}()),m=new y.OlP("CDK_TREE_NODE_OUTLET_NODE"),x=((u=s(function e(t,n){i(this,e),this.viewContainer=t,this._node=n})).\u0275fac=function(e){return new(e||u)(y.Y36(y.s_b),y.Y36(m,8))},u.\u0275dir=y.lG2({type:u,selectors:[["","cdkTreeNodeOutlet",""]]}),u),w=s(function e(t){i(this,e),this.$implicit=t}),N=function(){var e=s(function e(t){i(this,e),this.template=t});return e.\u0275fac=function(t){return new(t||e)(y.Y36(y.Rgc))},e.\u0275dir=y.lG2({type:e,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),e}(),O=function(){var e=function(){function e(t,n){i(this,e),this._differs=t,this._changeDetectorRef=n,this._onDestroy=new f.xQ,this._levels=new Map,this.viewChange=new h.X({start:0,end:Number.MAX_VALUE})}return s(e,[{key:"dataSource",get:function(){return this._dataSource},set:function(e){this._dataSource!==e&&this._switchDataSource(e)}},{key:"ngOnInit",value:function(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}},{key:"ngOnDestroy",value:function(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}},{key:"ngAfterContentChecked",value:function(){var e=this._nodeDefs.filter(function(e){return!e.when});this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}},{key:"_switchDataSource",value:function(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}},{key:"_observeRenderChanges",value:function(){var e,t=this;(0,l.Z9)(this._dataSource)?e=this._dataSource.connect(this):(0,p.b)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,v.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,_.R)(this._onDestroy)).subscribe(function(e){return t.renderNodeChanges(e)}))}},{key:"renderNodeChanges",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._dataDiffer,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._nodeOutlet.viewContainer,i=arguments.length>3?arguments[3]:void 0,o=n.diff(e);!o||(o.forEachOperation(function(n,o,s){if(null==n.previousIndex)t.insertNode(e[s],s,r,i);else if(null==s)r.remove(o),t._levels.delete(n.item);else{var a=r.get(o);r.move(a,s)}}),this._changeDetectorRef.detectChanges())}},{key:"_getNodeDef",value:function(e,t){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(function(n){return n.when&&n.when(t,e)})||this._defaultNodeDef}},{key:"insertNode",value:function(e,t,n,r){var i=this._getNodeDef(e,t),o=new w(e);o.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==r&&this._levels.has(r)?this._levels.get(r)+1:0,this._levels.set(e,o.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(i.template,o,t),C.mostRecentTreeNode&&(C.mostRecentTreeNode.data=e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(y.Y36(y.ZZ4),y.Y36(y.sBO))},e.\u0275cmp=y.Xpm({type:e,selectors:[["cdk-tree"]],contentQueries:function(e,t,n){var r;(1&e&&y.Suo(n,N,5),2&e)&&(y.iGM(r=y.CRH())&&(t._nodeDefs=r))},viewQuery:function(e,t){var n;(1&e&&y.Gf(x,7),2&e)&&(y.iGM(n=y.CRH())&&(t._nodeOutlet=n.first))},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,t){1&e&&y.GkF(0,0)},directives:[x],encapsulation:2}),e}(),C=function(){var e=function(){function e(t,n){i(this,e),this._elementRef=t,this._tree=n,this._destroyed=new f.xQ,this._dataChanges=new f.xQ,e.mostRecentTreeNode=this,this._elementRef.nativeElement.classList.add("cdk-tree-node"),this.role="treeitem"}return s(e,[{key:"role",get:function(){return"treeitem"},set:function(e){this._elementRef.nativeElement.setAttribute("role",e)}},{key:"data",get:function(){return this._data},set:function(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}},{key:"isExpanded",get:function(){return this._tree.treeControl.isExpanded(this._data)}},{key:"_setExpanded",value:function(e){this._isAriaExpanded=e,this._elementRef.nativeElement.setAttribute("aria-expanded","".concat(e))}},{key:"level",get:function(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}},{key:"ngOnInit",value:function(){this._parentNodeAriaLevel=function(e){for(var t=e.parentElement;t&&!D(t);)t=t.parentElement;return t?t.classList.contains("cdk-nested-tree-node")?(0,g.su)(t.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level","".concat(this.level+1))}},{key:"ngDoCheck",value:function(){this.isExpanded!=this._isAriaExpanded&&this._setExpanded(this.isExpanded)}},{key:"ngOnDestroy",value:function(){e.mostRecentTreeNode===this&&(e.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"focus",value:function(){this._elementRef.nativeElement.focus()}},{key:"_setRoleFromData",value:function(){this.role="treeitem"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(y.Y36(y.SBq),y.Y36(O))},e.\u0275dir=y.lG2({type:e,selectors:[["cdk-tree-node"]],inputs:{role:"role"},exportAs:["cdkTreeNode"]}),e.mostRecentTreeNode=null,e}();function D(e){var t=e.classList;return!(!(null==t?void 0:t.contains("cdk-nested-tree-node"))&&!(null==t?void 0:t.contains("cdk-tree")))}var S=function(){var t=function(t){a(r,t);var n=c(r);function r(e,t,o){var s;return i(this,r),(s=n.call(this,e,t))._differs=o,e.nativeElement.classList.add("cdk-nested-tree-node"),s}return s(r,[{key:"ngAfterContentInit",value:function(){var e=this;this._dataDiffer=this._differs.find([]).create(this._tree.trackBy);var t=this._tree.treeControl.getChildren(this.data);Array.isArray(t)?this.updateChildrenNodes(t):(0,p.b)(t)&&t.pipe((0,_.R)(this._destroyed)).subscribe(function(t){return e.updateChildrenNodes(t)}),this.nodeOutlet.changes.pipe((0,_.R)(this._destroyed)).subscribe(function(){return e.updateChildrenNodes()})}},{key:"ngOnInit",value:function(){e(d(r.prototype),"ngOnInit",this).call(this)}},{key:"ngDoCheck",value:function(){e(d(r.prototype),"ngDoCheck",this).call(this)}},{key:"ngOnDestroy",value:function(){this._clear(),e(d(r.prototype),"ngOnDestroy",this).call(this)}},{key:"updateChildrenNodes",value:function(e){var t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}},{key:"_clear",value:function(){var e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}},{key:"_getNodeOutlet",value:function(){var e=this,t=this.nodeOutlet;return t&&t.find(function(t){return!t._node||t._node===e})}}]),r}(C);return t.\u0275fac=function(e){return new(e||t)(y.Y36(y.SBq),y.Y36(O),y.Y36(y.ZZ4))},t.\u0275dir=y.lG2({type:t,selectors:[["cdk-nested-tree-node"]],contentQueries:function(e,t,n){var r;(1&e&&y.Suo(n,x,5),2&e)&&(y.iGM(r=y.CRH())&&(t.nodeOutlet=r))},inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["cdkNestedTreeNode"],features:[y._Bn([{provide:C,useExisting:t},{provide:m,useExisting:t}]),y.qOj]}),t}(),E=/([A-Za-z%]+)$/,R=function(){var e=function(){function e(t,n,r,o){var s=this;i(this,e),this._treeNode=t,this._tree=n,this._element=r,this._dir=o,this._destroyed=new f.xQ,this.indentUnits="px",this._indent=40,this._setPadding(),o&&o.change.pipe((0,_.R)(this._destroyed)).subscribe(function(){return s._setPadding(!0)}),t._dataChanges.subscribe(function(){return s._setPadding()})}return s(e,[{key:"level",get:function(){return this._level},set:function(e){this._setLevelInput(e)}},{key:"indent",get:function(){return this._indent},set:function(e){this._setIndentInput(e)}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"_paddingIndent",value:function(){var e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,t=null==this._level?e:this._level;return"number"==typeof t?"".concat(t*this._indent).concat(this.indentUnits):null}},{key:"_setPadding",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._paddingIndent();if(t!==this._currentPadding||e){var n=this._element.nativeElement,r=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",i="paddingLeft"===r?"paddingRight":"paddingLeft";n.style[r]=t||"",n.style[i]="",this._currentPadding=t}}},{key:"_setLevelInput",value:function(e){this._level=(0,g.su)(e,null),this._setPadding()}},{key:"_setIndentInput",value:function(e){var t=e,n="px";if("string"==typeof e){var r=e.split(E);t=r[0],n=r[1]||n}this.indentUnits=n,this._indent=(0,g.su)(t),this._setPadding()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(y.Y36(C),y.Y36(O),y.Y36(y.SBq),y.Y36(k.Is,8))},e.\u0275dir=y.lG2({type:e,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:["cdkTreeNodePadding","level"],indent:["cdkTreeNodePaddingIndent","indent"]}}),e}(),T=function(){var e=function(){function e(t,n){i(this,e),this._tree=t,this._treeNode=n,this._recursive=!1}return s(e,[{key:"recursive",get:function(){return this._recursive},set:function(e){this._recursive=(0,g.Ig)(e)}},{key:"_toggle",value:function(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(y.Y36(O),y.Y36(C))},e.\u0275dir=y.lG2({type:e,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,t){1&e&&y.NdJ("click",function(e){return t._toggle(e)})},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),e}(),A=function(){var e=s(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y.oAB({type:e}),e.\u0275inj=y.cJS({}),e}()},1933:function(t,n,r){r.d(n,{gi:function(){return N},kc:function(){return S},JZ:function(){return D},dp:function(){return C},uo:function(){return b},fQ:function(){return m},ah:function(){return x},eu:function(){return O}});var o,u=r(52796),l=r(72458),f=r(39490),h=r(38345),p=r(26215),v=r(66682),_=r(15257),y=r(88002),g=r(37716),k=(0,l.sb)((0,l.Id)(u.Hs)),b=((o=function(t){a(r,t);var n=c(r);function r(e,t,o){var s;return i(this,r),(s=n.call(this,e,t)).tabIndex=Number(o)||0,e.nativeElement.classList.add("mat-tree-node"),s}return s(r,[{key:"ngOnInit",value:function(){e(d(r.prototype),"ngOnInit",this).call(this)}},{key:"ngDoCheck",value:function(){e(d(r.prototype),"ngDoCheck",this).call(this)}},{key:"ngOnDestroy",value:function(){e(d(r.prototype),"ngOnDestroy",this).call(this)}}]),r}(k)).\u0275fac=function(e){return new(e||o)(g.Y36(g.SBq),g.Y36(u._0),g.$8M("tabindex"))},o.\u0275dir=g.lG2({type:o,selectors:[["mat-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["matTreeNode"],features:[g._Bn([{provide:u.Hs,useExisting:o}]),g.qOj]}),o),m=function(){var e,t=function(e){a(n,e);var t=c(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n)}(u.rO);return t.\u0275fac=function(n){return(e||(e=g.n5z(t)))(n||t)},t.\u0275dir=g.lG2({type:t,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[g._Bn([{provide:u.rO,useExisting:t}]),g.qOj]}),t}(),x=function(){var e,t=function(e){a(n,e);var t=c(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"level",get:function(){return this._level},set:function(e){this._setLevelInput(e)}},{key:"indent",get:function(){return this._indent},set:function(e){this._setIndentInput(e)}}]),n}(u.XJ);return t.\u0275fac=function(n){return(e||(e=g.n5z(t)))(n||t)},t.\u0275dir=g.lG2({type:t,selectors:[["","matTreeNodePadding",""]],inputs:{level:["matTreeNodePadding","level"],indent:["matTreeNodePaddingIndent","indent"]},features:[g._Bn([{provide:u.XJ,useExisting:t}]),g.qOj]}),t}(),w=function(){var e=s(function e(t,n){i(this,e),this.viewContainer=t,this._node=n});return e.\u0275fac=function(t){return new(t||e)(g.Y36(g.s_b),g.Y36(u.HI,8))},e.\u0275dir=g.lG2({type:e,selectors:[["","matTreeNodeOutlet",""]],features:[g._Bn([{provide:u.cu,useExisting:e}])]}),e}(),N=function(){var e,t=function(e){a(n,e);var t=c(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n)}(u._0);return t.\u0275fac=function(n){return(e||(e=g.n5z(t)))(n||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["mat-tree"]],viewQuery:function(e,t){var n;(1&e&&g.Gf(w,7),2&e)&&(g.iGM(n=g.CRH())&&(t._nodeOutlet=n.first))},hostAttrs:["role","tree",1,"mat-tree","cdk-tree"],exportAs:["matTree"],features:[g._Bn([{provide:u._0,useExisting:t}]),g.qOj],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(e,t){1&e&&g.GkF(0,0)},directives:[w],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],encapsulation:2}),t}(),O=function(){var e,t=function(e){a(n,e);var t=c(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"recursive",get:function(){return this._recursive},set:function(e){this._recursive=(0,f.Ig)(e)}}]),n}(u.Ud);return t.\u0275fac=function(n){return(e||(e=g.n5z(t)))(n||t)},t.\u0275dir=g.lG2({type:t,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[g._Bn([{provide:u.Ud,useExisting:t}]),g.qOj]}),t}(),C=function(){var e=s(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[u.nZ,l.BQ],l.BQ]}),e}(),D=function(){function e(t,n,r,o){i(this,e),this.transformFunction=t,this.getLevel=n,this.isExpandable=r,this.getChildren=o}return s(e,[{key:"_flattenNode",value:function(e,t,n,r){var i=this,o=this.transformFunction(e,t);if(n.push(o),this.isExpandable(o)){var s=this.getChildren(e);s&&(Array.isArray(s)?this._flattenChildren(s,t,n,r):s.pipe((0,_.q)(1)).subscribe(function(e){i._flattenChildren(e,t,n,r)}))}return n}},{key:"_flattenChildren",value:function(e,t,n,r){var i=this;e.forEach(function(o,s){var a=r.slice();a.push(s!=e.length-1),i._flattenNode(o,t+1,n,a)})}},{key:"flattenNodes",value:function(e){var t=this,n=[];return e.forEach(function(e){return t._flattenNode(e,0,n,[])}),n}},{key:"expandFlattenedNodes",value:function(e,t){var n=this,r=[],i=[];return i[0]=!0,e.forEach(function(e){for(var o=!0,s=0;s<=n.getLevel(e);s++)o=o&&i[s];o&&r.push(e),n.isExpandable(e)&&(i[n.getLevel(e)+1]=t.isExpanded(e))}),r}}]),e}(),S=function(e){a(n,e);var t=c(n);function n(e,r,o){var s;return i(this,n),(s=t.call(this))._treeControl=e,s._treeFlattener=r,s._flattenedData=new p.X([]),s._expandedData=new p.X([]),s._data=new p.X([]),o&&(s.data=o),s}return s(n,[{key:"data",get:function(){return this._data.value},set:function(e){this._data.next(e),this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)),this._treeControl.dataNodes=this._flattenedData.value}},{key:"connect",value:function(e){var t=this;return(0,v.T)(e.viewChange,this._treeControl.expansionModel.changed,this._flattenedData).pipe((0,y.U)(function(){return t._expandedData.next(t._treeFlattener.expandFlattenedNodes(t._flattenedData.value,t._treeControl)),t._expandedData.value}))}},{key:"disconnect",value:function(){}}]),n}(h.o2)},51227:function(e,t,n){n.d(t,{C:function(){return d}});var r,o=n(63423),a=n(79765),u=n(45435),c=n(46782),l=n(37716),d=((r=function(){function e(t,n){i(this,e),this._elementRef=t,this._router=n,this._unsubscribeAll=new a.xQ}return s(e,[{key:"ngOnInit",value:function(){var e=this;this._router.events.pipe((0,u.h)(function(e){return e instanceof o.m2}),(0,c.R)(this._unsubscribeAll)).subscribe(function(){e._elementRef.nativeElement.scrollTop=0})}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}]),e}()).\u0275fac=function(e){return new(e||r)(l.Y36(l.SBq),l.Y36(o.F0))},r.\u0275dir=l.lG2({type:r,selectors:[["","fuseScrollReset",""]],exportAs:["fuseScrollReset"]}),r)},94384:function(e,t,n){n.d(t,{O:function(){return a}});var r,o=n(37716),a=((r=s(function e(){i(this,e)})).\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({}),r)}}])}();