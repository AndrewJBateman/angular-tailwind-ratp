(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cLdK:function(t,e,n){"use strict";n.r(e),n.d(e,"ContactModule",function(){return f});var r=n("ofXK"),b=n("tyNb"),i=n("HDdC"),o=n("fXoL"),a=n("z6cu"),c=n("IzEk"),s=n("JIr8"),p=n("tk/3");let u=(()=>{class t{constructor(t){this.http=t}getUser(t){return this.http.get("https://api.github.com/users/"+t).pipe(Object(c.a)(1),Object(s.a)(t=>Object(a.a)("There was a problem fetching data from Github API, error: ",t)))}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(p.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,e){if(1&t&&(o.Lb(0,"div",5),o.Lb(1,"div",6),o.Lb(2,"div",7),o.Lb(3,"div",8),o.Jb(4,"img",9),o.Kb(),o.Lb(5,"div",10),o.Lb(6,"h3",11),o.Lb(7,"span",12),o.ic(8,"App par"),o.Kb(),o.ic(9),o.Kb(),o.Lb(10,"div",13),o.Lb(11,"p",14),o.Lb(12,"span",15),o.ic(13),o.Vb(14,"slice"),o.Kb(),o.ic(15),o.Vb(16,"slice"),o.Kb(),o.Kb(),o.Lb(17,"table",16),o.Lb(18,"tbody"),o.Lb(19,"tr"),o.Lb(20,"td",17),o.Lb(21,"span",18),o.ic(22,"Github Repos:"),o.Kb(),o.Kb(),o.Lb(23,"td",19),o.ic(24),o.Kb(),o.Kb(),o.Lb(25,"tr"),o.Lb(26,"td",17),o.Lb(27,"span",18),o.ic(28,"Emplacement:"),o.Kb(),o.Kb(),o.Lb(29,"td",19),o.ic(30,"France, Espagne"),o.Kb(),o.Kb(),o.Lb(31,"tr"),o.Lb(32,"td",17),o.Lb(33,"span",18),o.ic(34,"Mis \xe0 Jour"),o.Kb(),o.Kb(),o.Lb(35,"td",19),o.ic(36),o.Vb(37,"date"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Lb(38,"div",20),o.Lb(39,"a",21),o.ic(40,"Voir mon profil Github"),o.Kb(),o.Lb(41,"a",22),o.ic(42,"Envoyer un message"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&t){const t=e.ngIf;o.yb(9),o.kc(" ",t.name," "),o.yb(4),o.kc("",o.Yb(14,5,t.bio,0,42)," "),o.yb(2),o.kc(" ",o.Xb(16,9,t.bio,42)," "),o.yb(9),o.kc(" ",t.public_repos," "),o.yb(12),o.kc(" ",o.Wb(37,12,t.updated_at)," ")}}const l=[{path:"",component:(()=>{class t{constructor(t){this.githubService=t,this.user$=new i.a}ngOnInit(){this.user$=this.githubService.getUser("andrewjbateman")}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(u))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-contact"]],decls:7,vars:3,consts:[["name","description","content","Shows contact details of author"],["rel","prefetch","as","document","href","https://github.com/AndrewJBateman","Set-Cookie:","","CookieName","CookieValue;","SameSite","Lax;"],["rel","prefetch","as","document","href","https://andrewbateman.org/contact","Set-Cookie:","","CookieName","CookieValue;","SameSite","Lax;"],[1,"min-h-screen","min-w-screen","ratp-green"],["class","flex justify-center w-full h-screen pt-10 mx-auto",4,"ngIf"],[1,"flex","justify-center","w-full","h-screen","pt-10","mx-auto"],[1,"max-w-xs"],[1,"shadow-xl","info-card"],[1,"px-2","pt-5","photo-wrapper"],["width","40px","height","40px","src","../../../assets/contact.svg","alt","Image of author at pc",1,"w-40","h-40","mx-auto","rounded-full"],[1,"p-2"],[1,"pb-1","text-xl","font-medium","leading-8","text-center","text-blue-900"],[1,"text-xs","italic","text-gray-600"],[1,"text-center","table-text-left"],[1,"px-2","pb-1","text-xs"],[1,"font-semibold"],[1,"self-center","mx-auto","my-2","text-xs"],[1,"px-2"],[1,"font-bold","text-gray-900"],[1,"px-2","text-xs","text-gray-600"],[1,"my-3","text-center"],["href","https://github.com/AndrewJBateman","target","_blank","rel","noopener noreferrer",1,"mr-5","text-xs","italic","font-medium","text-indigo-600","hover:underline","hover:text-indigo-800"],["href","https://andrewbateman.org/contact","target","_blank","rel","noopener noreferrer",1,"text-xs","italic","font-medium","text-indigo-600","hover:underline","hover:text-indigo-800"]],template:function(t,e){1&t&&(o.Lb(0,"head"),o.Jb(1,"meta",0),o.Jb(2,"link",1),o.Jb(3,"link",2),o.Kb(),o.Lb(4,"div",3),o.gc(5,d,43,14,"div",4),o.Vb(6,"async"),o.Kb()),2&t&&(o.yb(5),o.Zb("ngIf",o.Wb(6,1,e.user$)))},directives:[r.k],pipes:[r.b,r.n,r.e],encapsulation:2}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({imports:[[b.c.forChild(l)],b.c]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({imports:[[r.c,h]]}),t})()}}]);