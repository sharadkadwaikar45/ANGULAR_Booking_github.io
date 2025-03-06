!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(n=i.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?o:String(o)),i)}var n,o}function r(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[2448],{42448:function(t,i,n){n.r(i),n.d(i,{AuthSignUpModule:function(){return C}});var o=n(63423),a=n(51095),s=n(7539),l=n(98295),m=n(76627),u=n(49983),g=n(4885),c=n(15935),f=n(10588),d=n(44466),p=n(3679),Z=n(28288),h=n(37716),v=n(88951),y=n(38583),x=n(98214),w=["signUpNgForm"];function U(e,t){if(1&e&&(h.TgZ(0,"fuse-alert",42),h._uU(1),h.qZA()),2&e){var r=h.oxw();h.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),h.xp6(1),h.hij(" ",r.alert.message," ")}}function q(e,t){1&e&&(h.TgZ(0,"mat-error"),h._uU(1," Full name is required "),h.qZA())}function A(e,t){1&e&&(h.TgZ(0,"mat-error"),h._uU(1," Email address is required "),h.qZA())}function b(e,t){1&e&&(h.TgZ(0,"mat-error"),h._uU(1," Please enter a valid email address "),h.qZA())}function T(e,t){1&e&&h._UZ(0,"mat-icon",43),2&e&&h.Q6J("svgIcon","heroicons_solid:eye")}function _(e,t){1&e&&h._UZ(0,"mat-icon",43),2&e&&h.Q6J("svgIcon","heroicons_solid:eye-off")}function k(e,t){1&e&&(h.TgZ(0,"span"),h._uU(1," Create your free account "),h.qZA())}function I(e,t){1&e&&h._UZ(0,"mat-progress-spinner",44),2&e&&h.Q6J("diameter",24)("mode","indeterminate")}var J,N=function(){return["/pages/authentication/sign-in"]},F=function(){return["./"]},Q=[{path:"",component:(J=function(){function t(r,i,n){e(this,t),this._authService=r,this._formBuilder=i,this._router=n,this.alert={type:"success",message:""},this.showAlert=!1}return r(t,[{key:"ngOnInit",value:function(){this.signUpForm=this._formBuilder.group({name:["",p.kI.required],email:["",[p.kI.required,p.kI.email]],password:["",p.kI.required],company:[""],agreements:["",p.kI.requiredTrue]})}},{key:"signUp",value:function(){var e=this;this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(function(t){e._router.navigateByUrl("/confirmation-required")},function(t){e.signUpForm.enable(),e.signUpNgForm.resetForm(),e.alert={type:"error",message:"Something went wrong, please try again."},e.showAlert=!0}))}}]),t}(),J.\u0275fac=function(e){return new(e||J)(h.Y36(v.e),h.Y36(p.qu),h.Y36(o.F0))},J.\u0275cmp=h.Xpm({type:J,selectors:[["auth-sign-up"]],viewQuery:function(e,t){var r;1&e&&h.Gf(w,5),2&e&&h.iGM(r=h.CRH())&&(t.signUpNgForm=r.first)},decls:78,vars:23,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/systemlogo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","company-confirm","matInput","",3,"formControlName"],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(e,t){if(1&e){var r=h.EpF();h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.TgZ(2,"div",2),h.TgZ(3,"div",3),h._UZ(4,"img",4),h.qZA(),h.TgZ(5,"div",5),h._uU(6,"Sign up"),h.qZA(),h.TgZ(7,"div",6),h.TgZ(8,"div"),h._uU(9,"Already have an account?"),h.qZA(),h.TgZ(10,"a",7),h._uU(11,"Sign in "),h.qZA(),h.qZA(),h.YNc(12,U,2,5,"fuse-alert",8),h.TgZ(13,"form",9),h.TgZ(14,"mat-form-field",10),h.TgZ(15,"mat-label"),h._uU(16,"Full name"),h.qZA(),h._UZ(17,"input",11),h.YNc(18,q,2,0,"mat-error",12),h.qZA(),h.TgZ(19,"mat-form-field",10),h.TgZ(20,"mat-label"),h._uU(21,"Email address"),h.qZA(),h._UZ(22,"input",13),h.YNc(23,A,2,0,"mat-error",12),h.YNc(24,b,2,0,"mat-error",12),h.qZA(),h.TgZ(25,"mat-form-field",10),h.TgZ(26,"mat-label"),h._uU(27,"Password"),h.qZA(),h._UZ(28,"input",14,15),h.TgZ(30,"button",16),h.NdJ("click",function(){h.CHM(r);var e=h.MAs(29);return e.type="password"===e.type?"text":"password"}),h.YNc(31,T,1,1,"mat-icon",17),h.YNc(32,_,1,1,"mat-icon",17),h.qZA(),h.TgZ(33,"mat-error"),h._uU(34," Password is required "),h.qZA(),h.qZA(),h.TgZ(35,"mat-form-field",10),h.TgZ(36,"mat-label"),h._uU(37,"Company"),h.qZA(),h._UZ(38,"input",18),h.qZA(),h.TgZ(39,"div",19),h.TgZ(40,"mat-checkbox",20),h.TgZ(41,"span"),h._uU(42,"I agree to the"),h.qZA(),h.TgZ(43,"a",7),h._uU(44,"Terms of Service "),h.qZA(),h.TgZ(45,"span"),h._uU(46,"and"),h.qZA(),h.TgZ(47,"a",7),h._uU(48,"Privacy Policy "),h.qZA(),h.qZA(),h.qZA(),h.TgZ(49,"button",21),h.NdJ("click",function(){return t.signUp()}),h.YNc(50,k,2,0,"span",12),h.YNc(51,I,1,2,"mat-progress-spinner",22),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(52,"div",23),h.O4$(),h.TgZ(53,"svg",24),h.TgZ(54,"g",25),h._UZ(55,"circle",26),h._UZ(56,"circle",27),h.qZA(),h.qZA(),h.TgZ(57,"svg",28),h.TgZ(58,"defs"),h.TgZ(59,"pattern",29),h._UZ(60,"rect",30),h.qZA(),h.qZA(),h._UZ(61,"rect",31),h.qZA(),h.kcU(),h.TgZ(62,"div",32),h.TgZ(63,"div",33),h.TgZ(64,"div"),h._uU(65,"Welcome to"),h.qZA(),h.TgZ(66,"div"),h._uU(67,"our community"),h.qZA(),h.qZA(),h.TgZ(68,"div",34),h._uU(69," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),h.qZA(),h.TgZ(70,"div",35),h.TgZ(71,"div",36),h._UZ(72,"img",37),h._UZ(73,"img",38),h._UZ(74,"img",39),h._UZ(75,"img",40),h.qZA(),h.TgZ(76,"div",41),h._uU(77,"More than 17k people joined us, it's your turn"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()}if(2&e){var i=h.MAs(29);h.xp6(10),h.Q6J("routerLink",h.DdM(20,N)),h.xp6(2),h.Q6J("ngIf",t.showAlert),h.xp6(1),h.Q6J("formGroup",t.signUpForm),h.xp6(4),h.Q6J("formControlName","name"),h.xp6(1),h.Q6J("ngIf",t.signUpForm.get("name").hasError("required")),h.xp6(4),h.Q6J("formControlName","email"),h.xp6(1),h.Q6J("ngIf",t.signUpForm.get("email").hasError("required")),h.xp6(1),h.Q6J("ngIf",t.signUpForm.get("email").hasError("email")),h.xp6(4),h.Q6J("formControlName","password"),h.xp6(3),h.Q6J("ngIf","password"===i.type),h.xp6(1),h.Q6J("ngIf","text"===i.type),h.xp6(6),h.Q6J("formControlName","company"),h.xp6(2),h.Q6J("color","primary")("formControlName","agreements"),h.xp6(3),h.Q6J("routerLink",h.DdM(21,F)),h.xp6(4),h.Q6J("routerLink",h.DdM(22,F)),h.xp6(2),h.Q6J("color","primary")("disabled",t.signUpForm.disabled),h.xp6(1),h.Q6J("ngIf",!t.signUpForm.disabled),h.xp6(1),h.Q6J("ngIf",t.signUpForm.disabled)}},directives:[o.yS,y.O5,p._Y,p.JL,p.sg,l.KE,l.hX,u.Nt,p.Fj,p.JJ,p.u,a.lW,l.R9,l.TO,s.oG,x.W,m.Hw,g.Ou],encapsulation:2,data:{animation:Z.L}}),J)}],C=function(){var t=r(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[o.Bz.forChild(Q),a.ot,s.p9,l.lN,m.Ps,u.c,g.Cq,c.J,f.fC,d.m]]}),t}()}}])}();