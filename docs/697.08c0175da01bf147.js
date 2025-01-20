"use strict";(self.webpackChunktechforb_challenge_fe=self.webpackChunktechforb_challenge_fe||[]).push([[697],{697:(B,u,a)=>{a.r(u),a.d(u,{RegisterUserComponent:()=>y});var e=a(4438),i=a(9417),f=a(9631),_=a(9213),h=a(8834),c=a(6432),t=a(9327),b=a(177),p=a(5559),P=a(9885);const C=(r,s)=>({"x-large-screen":r,"medium-screen":s}),g=r=>({"medium-screen":r}),v=()=>["/login"];function k(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"Ingrese un nombre de usuario"),e.k0s()())}function E(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"Ingrese un email"),e.k0s()())}function F(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"El formato del email ingresado no es correcto"),e.k0s()())}function O(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"Ingrese una contrase\xf1a"),e.k0s()())}function L(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"La contrase\xf1a debe tener 9 o m\xe1s caracteres"),e.k0s()())}function R(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"Ingrese una contrase\xf1a"),e.k0s()())}function w(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"La contrase\xf1a debe tener 9 o m\xe1s caracteres"),e.k0s()())}function j(r,s){1&r&&(e.j41(0,"mat-error")(1,"strong"),e.EFF(2,"Las contrase\xf1as no coinciden"),e.k0s()())}let y=(()=>{class r{constructor(o,m,n,d){this.formBuilder=o,this.breakpointObserver=m,this.userService=n,this.router=d,this.isLargeScreen=!1,this.breakpointLevel=(0,e.vPA)(1),this.breakpointLevelMap={[t.Rp.XLarge]:5,[t.Rp.Large]:4,[t.Rp.Medium]:3,[t.Rp.Small]:2,[t.Rp.Handset]:1},this.hidePasswordSignal=(0,e.vPA)(!1),this.hideConfirmationPasswordSignal=(0,e.vPA)(!1)}ngOnInit(){this.registerForm=this.formBuilder.group({username:["",[i.k0.required]],email:["",[i.k0.required,i.k0.email]],password:["",[i.k0.required,i.k0.minLength(9)]],confirmationPassword:["",[i.k0.required,i.k0.minLength(9)]]},{validators:this.passwordMatchValidator("password","confirmationPassword")}),this.breakpointObserver.observe([t.Rp.XLarge,t.Rp.Large,t.Rp.Medium,t.Rp.Small,t.Rp.Handset]).subscribe(o=>{o.breakpoints[t.Rp.XLarge]?(this.breakpointLevel.set(this.breakpointLevelMap[t.Rp.XLarge]),console.log("X-LARGE")):o.breakpoints[t.Rp.Large]?(this.breakpointLevel.set(this.breakpointLevelMap[t.Rp.Large]),console.log("LARGE")):o.breakpoints[t.Rp.Medium]?(this.breakpointLevel.set(this.breakpointLevelMap[t.Rp.Medium]),console.log("MEDIUM")):o.breakpoints[t.Rp.Small]?(this.breakpointLevel.set(this.breakpointLevelMap[t.Rp.Small]),console.log("SMALL")):o.breakpoints[t.Rp.Handset]&&(this.breakpointLevel.set(this.breakpointLevelMap[t.Rp.Handset]),console.log("HANDSET"))})}passwordMatchValidator(o,m){return n=>{const d=n.get(o),l=n.get(m);if(l.errors&&!l.errors?.confirmedValidator)return null;if(d.value!==l.value){const M={confirmedValidator:"Passwords do not match."};return l.setErrors(M),M}return l.setErrors(null),null}}hidePassword(o){this.hidePasswordSignal.set(!this.hidePasswordSignal()),o.stopPropagation()}hideConfirmationPassword(o){this.hideConfirmationPasswordSignal.set(!this.hideConfirmationPasswordSignal()),o.stopPropagation()}submit(){this.userService.register(this.username?.value,this.email?.value,this.password?.value).subscribe({error:o=>{alert("El servidor est\xe1 experimentando inconvenientes. Por favor, intente de nuevo m\xe1s tarde")},complete:()=>this.router.navigate(["/login"])})}get Breakpoints(){return t.Rp}get username(){return this.registerForm.get("username")}get email(){return this.registerForm.get("email")}get password(){return this.registerForm.get("password")}get confirmationPassword(){return this.registerForm.get("confirmationPassword")}static{this.\u0275fac=function(m){return new(m||r)(e.rXU(i.ok),e.rXU(t.QP),e.rXU(P.D),e.rXU(p.Ix))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["tc-register-user"]],standalone:!0,features:[e.aNF],decls:84,vars:45,consts:[[1,"component-container"],[1,"registration-info",3,"ngClass"],[1,"info"],[1,"items"],["width","20","height","16","viewBox","0 0 20 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.0001 16V7H13.0001V0H20.0001L18.0001 5H20.0001L15.0001 16ZM13 9V16H1.99997C0.899975 16 -2.51321e-05 15.1 -2.51321e-05 14V11C-2.51321e-05 9.9 0.899975 9 1.99997 9H13ZM4.24984 11.75H2.74984V13.25H4.24984V11.75ZM10.9998 1.76572e-06V7H1.99976C0.899756 7 -0.000244141 6.1 -0.000244141 5V2C-0.000244141 0.900002 0.899756 1.76572e-06 1.99976 1.76572e-06H10.9998ZM4.24984 2.75003H2.74984V4.25003H4.24984V2.75003Z","fill","#FFB84B"],[1,"text-holder"],["width","20","height","20","viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M9.99 3.05176e-05C4.47 3.05176e-05 0 4.48003 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48003 15.52 3.05176e-05 9.99 3.05176e-05ZM14.2303 16.0001L10.0003 13.4501L5.7703 16.0001L6.8903 11.1901L3.1603 7.96005L8.0803 7.54005L10.0003 3.00005L11.9203 7.53005L16.8403 7.95005L13.1103 11.1801L14.2303 16.0001Z","fill","#FFB84B"],[1,"registration-form-container",3,"ngClass"],[1,"spacer",3,"ngClass"],[3,"ngClass"],[1,"registration-form",3,"ngSubmit","ngClass","formGroup"],["appearance","outline"],["matInput","","name","username","id","username","formControlName","username"],["matInput","","name","email","id","email","formControlName","email"],["matInput","","name","password","id","password","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","name","confirmationPassword","id","confirmationPassword","formControlName","confirmationPassword",3,"type"],[1,"button-container"],[1,"password-indications",3,"ngClass"],["type","submit",1,"btn","submit-button",3,"ngClass","disabled"],[1,"terms-service",3,"ngClass"],["href","https://techforb.com/es/techforb-ar","target","_blank","rel","noopener"],[1,"login-cta"],[3,"routerLink"]],template:function(m,n){1&m&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),e.EFF(4,"Registrarse"),e.k0s(),e.j41(5,"p"),e.EFF(6,"\xa1Bienvenido! Estamos encantados de que quieras unirte a nuestra plataforma. Reg\xedstrate y comienza a disfrutar de todas las ventajas que ofrecemos. No pierdas la oportunidad de ser parte de nuestra comunidad."),e.k0s()(),e.j41(7,"ul",3)(8,"li"),e.qSk(),e.j41(9,"svg",4),e.nrm(10,"path",5),e.k0s(),e.joV(),e.j41(11,"div",6)(12,"h3"),e.EFF(13,"Monitoreo integral"),e.k0s(),e.j41(14,"p"),e.EFF(15,"Administra, monitorea mutiples plantas de forma centralizada"),e.k0s()()(),e.j41(16,"li"),e.qSk(),e.j41(17,"svg",7),e.nrm(18,"path",8),e.k0s(),e.joV(),e.j41(19,"div",6)(20,"h3"),e.EFF(21,"Notificaciones en tiempo real"),e.k0s(),e.j41(22,"p"),e.EFF(23,"Recibi notificaciones en tiempo real sobre las mediciones"),e.k0s()()()()(),e.j41(24,"div",9),e.nrm(25,"div",10),e.j41(26,"h1",11),e.EFF(27,"Portal de monitoreo"),e.k0s(),e.j41(28,"h3"),e.EFF(29,"Registrarse"),e.k0s(),e.j41(30,"form",12),e.bIt("ngSubmit",function(){return n.submit()}),e.j41(31,"mat-form-field",13)(32,"mat-label"),e.EFF(33,"Usuario"),e.k0s(),e.nrm(34,"input",14),e.DNE(35,k,3,0,"mat-error"),e.k0s(),e.j41(36,"mat-form-field",13)(37,"mat-label"),e.EFF(38,"Email"),e.k0s(),e.nrm(39,"input",15),e.DNE(40,E,3,0,"mat-error")(41,F,3,0,"mat-error"),e.k0s(),e.j41(42,"mat-form-field",13)(43,"mat-label"),e.EFF(44,"Contrase\xf1a"),e.k0s(),e.nrm(45,"input",16),e.j41(46,"button",17),e.bIt("click",function(l){return n.hidePassword(l)}),e.j41(47,"mat-icon"),e.EFF(48),e.k0s()(),e.DNE(49,O,3,0,"mat-error")(50,L,3,0,"mat-error"),e.k0s(),e.j41(51,"mat-form-field",13)(52,"mat-label"),e.EFF(53,"Repetir contrase\xf1a"),e.k0s(),e.nrm(54,"input",18),e.j41(55,"button",17),e.bIt("click",function(l){return n.hideConfirmationPassword(l)}),e.j41(56,"mat-icon"),e.EFF(57),e.k0s()(),e.DNE(58,R,3,0,"mat-error")(59,w,3,0,"mat-error")(60,j,3,0,"mat-error"),e.k0s(),e.j41(61,"div",19)(62,"small",20),e.EFF(63,"- Al menos 8 caracteres"),e.nrm(64,"br"),e.EFF(65,"- Al menos 1 n\xfamero"),e.nrm(66,"br"),e.EFF(67,"- Al menos 1 caracter especial"),e.k0s(),e.j41(68,"button",21),e.EFF(69,"Registrarse"),e.k0s()(),e.j41(70,"small",22),e.EFF(71," Protegido por reCAPTCHA y sujeto a la "),e.j41(72,"a",23),e.EFF(73,"Pol\xedtica de Privacidad"),e.k0s(),e.EFF(74," y "),e.j41(75,"a",23),e.EFF(76,"Condiciones"),e.k0s(),e.EFF(77,". "),e.k0s(),e.j41(78,"div",24)(79,"p"),e.EFF(80,"\xbfYa tienes una cuenta? "),e.j41(81,"a",25),e.EFF(82,"Iniciar sesi\xf3n"),e.k0s()()()(),e.nrm(83,"div",10),e.k0s()()),2&m&&(e.R7$(),e.Y8G("ngClass",e.l_i(24,C,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.XLarge],n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])),e.R7$(23),e.Y8G("ngClass",e.l_i(27,C,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.XLarge],n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])),e.R7$(),e.Y8G("ngClass",e.eq3(30,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])),e.R7$(),e.Y8G("ngClass",e.eq3(32,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])),e.R7$(4),e.Y8G("ngClass",e.eq3(34,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium]))("formGroup",n.registerForm),e.R7$(5),e.vxM(null!=n.username&&n.username.hasError("required")?35:-1),e.R7$(5),e.vxM(null!=n.email&&n.email.hasError("required")?40:null!=n.email&&n.email.hasError("email")?41:-1),e.R7$(5),e.Y8G("type",n.hidePasswordSignal()?"password":"text"),e.R7$(),e.BMQ("aria-label","Hide password")("aria-pressed",n.hidePasswordSignal()),e.R7$(2),e.JRh(n.hidePasswordSignal()?"visibility_off":"visibility"),e.R7$(),e.vxM(null!=n.password&&n.password.hasError("required")?49:null!=n.password&&n.password.hasError("minlength")?50:-1),e.R7$(5),e.Y8G("type",n.hideConfirmationPasswordSignal()?"password":"text"),e.R7$(),e.BMQ("aria-label","Hide confirmation password")("aria-pressed",n.hideConfirmationPasswordSignal()),e.R7$(2),e.JRh(n.hideConfirmationPasswordSignal()?"visibility_off":"visibility"),e.R7$(),e.vxM(null!=n.confirmationPassword&&n.confirmationPassword.hasError("required")?58:null!=n.confirmationPassword&&n.confirmationPassword.hasError("minlength")?59:null!=n.confirmationPassword&&n.confirmationPassword.hasError("confirmedValidator")?60:-1),e.R7$(4),e.Y8G("ngClass",e.eq3(36,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])),e.R7$(6),e.Y8G("ngClass",e.eq3(38,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium]))("disabled",n.registerForm.invalid),e.R7$(2),e.Y8G("ngClass",e.eq3(40,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])),e.R7$(11),e.Y8G("routerLink",e.lJ4(42,v)),e.R7$(2),e.Y8G("ngClass",e.eq3(43,g,n.breakpointLevel()>=n.breakpointLevelMap[n.Breakpoints.Medium])))},dependencies:[i.X1,i.qT,i.me,i.BC,i.cb,i.j4,i.JD,f.fS,f.fg,c.rl,c.nJ,c.TL,c.yw,_.m_,_.An,h.Hl,h.iY,c.RG,b.MD,b.YU,p.iI,p.Wk],styles:['@font-face{font-family:Poppins;src:url(Poppins-Regular.4b4ebe20759bdbf2.ttf),}.component-container[_ngcontent-%COMP%]{height:100%;justify-content:stretch;font-weight:lighter;overflow:hidden;position:relative;display:flex}.component-container[_ngcontent-%COMP%]:before{content:"";position:absolute;min-width:50%;min-height:100%;max-height:100vh;z-index:-100;aspect-ratio:856 / 900;background-image:url(small-gradient-teal-background-scaled.2a29afdf69553744.png),url(iconography-background-image.86ac157c2be4f2f1.png),url(gradient-teal-background.50bbaf8a124f99b9.png);background-size:100%;background-position:left center;background-repeat:no-repeat}.registration-info[_ngcontent-%COMP%]{flex:1 1 45%;color:#fff;flex-direction:column;justify-content:center;padding:0 4rem;display:none}.registration-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .registration-form-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700;margin:0;font-size:3rem}.registration-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .registration-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1rem}.items[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{gap:1rem;display:flex}.items[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;line-height:1.2}.items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.registration-form-container[_ngcontent-%COMP%]{flex:1 1 55%;flex-direction:column;background-color:var(--form-bg-color);overflow-y:auto;padding:0 4rem;justify-content:center;border-radius:0;align-items:center;display:flex}.registration-form-container[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 0;min-height:5rem;display:none}.registration-form-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:none}.registration-form-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--small-text-color)}.registration-form-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--anchor-text-color);text-decoration:none}.registration-form-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--anchor-text-color-hover);text-decoration:none}.button-container[_ngcontent-%COMP%]{margin:1rem 0}.button-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:none}.submit-button[_ngcontent-%COMP%]{color:#fff;background-color:var(--button-bg-color);padding:1rem 2.5rem;border-radius:16px;flex:1 0}.submit-button[_ngcontent-%COMP%]:hover{background-color:var(--button-bg-color-hover);box-shadow:0 0 1px 2px var(--button-bg-color)}.submit-button[_ngcontent-%COMP%]:active{background-color:var(--button-bg-color-active);box-shadow:none}.registration-form[_ngcontent-%COMP%]{flex-direction:column;margin-top:2rem;display:flex;width:100%}.button-container[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;display:flex}.terms-service[_ngcontent-%COMP%]{display:none}.login-cta[_ngcontent-%COMP%]{margin-top:2rem;align-self:center}.registration-info.x-large-screen[_ngcontent-%COMP%], .registration-form-container.x-large-screen[_ngcontent-%COMP%]{padding:0 7rem}.registration-info.medium-screen[_ngcontent-%COMP%]{display:flex}.registration-form-container.medium-screen[_ngcontent-%COMP%]{align-items:normal;justify-content:flex-start;border-radius:30px 0 0 30px}.registration-form-container.medium-screen[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:block}.button-container[_ngcontent-%COMP%]   small.medium-screen[_ngcontent-%COMP%]{display:inline}.button-container[_ngcontent-%COMP%]   .submit-button.medium-screen[_ngcontent-%COMP%]{flex:initial}.registration-form.medium-screen[_ngcontent-%COMP%]{width:auto}.registration-form.medium-screen[_ngcontent-%COMP%]   .terms-service[_ngcontent-%COMP%]{display:inline}.registration-form.medium-screen[_ngcontent-%COMP%]   .login-cta[_ngcontent-%COMP%]{align-self:auto}.registration-form-container[_ngcontent-%COMP%]   .spacer.medium-screen[_ngcontent-%COMP%]{display:block}']})}}return r})()}}]);