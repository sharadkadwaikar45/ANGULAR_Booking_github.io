"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[4288],{14288:function(t,e,r){r.r(e),r.d(e,{AuthSignInModule:function(){return T}});var s=r(63423),n=r(51095),i=r(7539),o=r(98295),a=r(76627),u=r(49983),m=r(4885),c=r(15935),d=r(10588),l=r(44466),f=r(3679),g=r(28288),p=r(88259),h=r.n(p),Z=r(37716),I=r(88951),w=r(38583);const _=["signInNgForm"];function x(t,e){1&t&&(Z.TgZ(0,"mat-error"),Z._uU(1," Email address is required "),Z.qZA())}function q(t,e){1&t&&(Z.TgZ(0,"mat-error"),Z._uU(1," Please enter a valid email address "),Z.qZA())}function v(t,e){1&t&&Z._UZ(0,"mat-icon",15),2&t&&Z.Q6J("svgIcon","heroicons_solid:eye")}function A(t,e){1&t&&Z._UZ(0,"mat-icon",15),2&t&&Z.Q6J("svgIcon","heroicons_solid:eye-off")}function y(t,e){1&t&&(Z.TgZ(0,"span"),Z._uU(1," Sign in "),Z.qZA())}function N(t,e){1&t&&(Z.TgZ(0,"span",16),Z._UZ(1,"img",17),Z.qZA())}const J=[{path:"",component:(()=>{class t{constructor(t,e,r,s){this._activatedRoute=t,this._authService=e,this._formBuilder=r,this._router=s,this.alert={type:"success",message:""},this.showAlert=!1,this.Loader=!1}ngOnInit(){this.signInForm=this._formBuilder.group({userName:["",[f.kI.required,f.kI.email]],password:["",f.kI.required]}),this.additionalInfo=this._formBuilder.group({remember:["true",f.kI.required]}),this.signIn()}signIn(){if(this.signInForm.invalid)return;this.Loader=!0;const t=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(t),this._authService.signIn(this.signInForm.value).subscribe(t=>{if("Success"==t.response_message){this.Loader=!1;const t=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(t)}else this.Loader=!1,h().fire({text:t.response_message,icon:"error",showCancelButton:!1,confirmButtonColor:"#3290d6 !important",confirmButtonText:"Ok"}).then(t=>{})})}}return t.\u0275fac=function(e){return new(e||t)(Z.Y36(s.gz),Z.Y36(I.e),Z.Y36(f.qu),Z.Y36(s.F0))},t.\u0275cmp=Z.Xpm({type:t,selectors:[["auth-sign-in"]],viewQuery:function(t,e){if(1&t&&Z.Gf(_,5),2&t){let t;Z.iGM(t=Z.CRH())&&(e.signInNgForm=t.first)}},decls:24,vars:9,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-center","flex-auto","min-w-0"],[1,"flex","md:items-center","md:justify-center","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16"],[1,"w-full","max-w-120","sm:w-120","mx-auto","sm:mx-0"],[1,"mt-8","bg-card","shadow-md","rounded-xl","md:p-14","sm:p-10","p-6"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",1,"mr-0",3,"click"],["class","icon-size-5 ",3,"svgIcon",4,"ngIf"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-small","w-full","mt-6",3,"click"],["class","wrapper-loader mx-auto ",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[1,"wrapper-loader","mx-auto"],["src","assets/images/img/green_spinner.gif","alt","",1,"w30","rounded-full",2,"width","30px","margin-left","auto","margin-right","auto"]],template:function(t,e){if(1&t){const t=Z.EpF();Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"div",3),Z.TgZ(4,"form",4),Z.TgZ(5,"mat-form-field",5),Z.TgZ(6,"mat-label"),Z._uU(7,"Email address"),Z.qZA(),Z._UZ(8,"input",6),Z.YNc(9,x,2,0,"mat-error",7),Z.YNc(10,q,2,0,"mat-error",7),Z.qZA(),Z.TgZ(11,"mat-form-field",5),Z.TgZ(12,"mat-label"),Z._uU(13,"Password"),Z.qZA(),Z._UZ(14,"input",8,9),Z.TgZ(16,"button",10),Z.NdJ("click",function(){Z.CHM(t);const e=Z.MAs(15);return e.type="password"===e.type?"text":"password"}),Z.YNc(17,v,1,1,"mat-icon",11),Z.YNc(18,A,1,1,"mat-icon",12),Z.qZA(),Z.TgZ(19,"mat-error"),Z._uU(20," Password is required "),Z.qZA(),Z.qZA(),Z.TgZ(21,"button",13),Z.NdJ("click",function(){return e.signIn()}),Z.YNc(22,y,2,0,"span",7),Z.YNc(23,N,2,0,"span",14),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()}if(2&t){const t=Z.MAs(15);Z.xp6(4),Z.Q6J("formGroup",e.signInForm),Z.xp6(4),Z.Q6J("formControlName","userName"),Z.xp6(1),Z.Q6J("ngIf",e.signInForm.get("userName").hasError("required")),Z.xp6(1),Z.Q6J("ngIf",e.signInForm.get("userName").hasError("email")),Z.xp6(4),Z.Q6J("formControlName","password"),Z.xp6(3),Z.Q6J("ngIf","password"===t.type),Z.xp6(1),Z.Q6J("ngIf","text"===t.type),Z.xp6(4),Z.Q6J("ngIf",!e.Loader),Z.xp6(1),Z.Q6J("ngIf",e.Loader)}},directives:[f._Y,f.JL,f.sg,o.KE,o.hX,u.Nt,f.Fj,f.JJ,f.u,w.O5,n.lW,o.R9,o.TO,a.Hw],encapsulation:2,data:{animation:g.L}}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[s.Bz.forChild(J),n.ot,i.p9,o.lN,a.Ps,u.c,m.Cq,c.J,d.fC,l.m]]}),t})()}}]);