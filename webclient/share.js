/*
 ShareJS v0.3.0
 http://sharejs.org

 Copyright 2011 ShareJS Authors

 BSD licensed:
 https://github.com/josephg/ShareJS/raw/master/LICENSE
*/
function g(j){throw j;}var m=void 0,r=null;
(function(){function j(b,a){return function(){return b.apply(a,arguments)}}var p,v,k,l,A,E,n,t,h,F,G,B,C,w,x,e,D,y,u,I=Array.prototype.slice;h={version:"0.3.0"};C=typeof!0!=="undefined"?function(b){return setTimeout(b,0)}:C=process.nextTick;k=function(){function b(){}b.prototype.f=function(a,c){var b;this.c||(this.c={});(b=this.c)[a]||(b[a]=[]);this.c[a].push(c);return this};b.prototype.n=function(a,c){var b,f;this.c||(this.c={});f=(b=this.c)[a]||(b[a]=[]);for(b=0;b<f.length;)f[b]===c&&(f[b]=m),b++;
C(j(function(){var c;return this.c[a]=function(){var b,d,f,i;f=this.c[a];i=[];for(b=0,d=f.length;b<d;b++)(c=f[b])&&i.push(c);return i}.call(this)},this));return this};b.prototype.a=function(){var a,c,b,f,s;c=arguments[0];a=2<=arguments.length?I.call(arguments,1):[];if(!((b=this.c)!=r&&b[c]))return this;s=this.c[c];for(b=0,f=s.length;b<f;b++)(c=s[b])&&c.apply(this,a);return this};return b}();k.s=function(b){b=b.prototype||b;b.f=b.on=k.prototype.f;b.n=b.removeListener=k.prototype.n;b.a=k.prototype.a};
if(typeof module!=="undefined"&&module!==r&&module.q)module.q=k;h._bt=A=function(b,a,c,d){var f,s;f=function(b,c,d,f){a(d,b,c,"left");a(f,c,b,"right")};b.S=b.transformX=s=function(a,b){var e,i,j,h,o,z,q,H,l,k;c(a);c(b);h=[];for(z=0,H=b.length;z<H;z++){i=b[z];j=[];for(e=0;e<a.length;)if(o=[],f(a[e],i,j,o),e++,o.length===1)i=o[0];else{if(o.length===0){q=a.slice(e);for(o=0,i=q.length;o<i;o++)e=q[o],d(j,e)}else{k=s(a.slice(e),o);i=k[0];o=k[1];for(q=0,l=i.length;q<l;q++)e=i[q],d(j,e);for(i=0,q=o.length;i<
q;i++)e=o[i],d(h,e)}i=r;break}i!=r&&d(h,i);a=j}return[a,h]};return b.transform=b.transform=function(b,c,d){var f,e;d==="left"||d==="right"||g(Error("type must be 'left' or 'right'"));if(c.length===0)return b;return b.length===1&&c.length===1?a([],b[0],c[0],d):d==="left"?(e=s(b,c),f=e[0],f):(f=s(c,b),e=f[1],e)}};if(typeof!0==="undefined")h.B=A;e={name:"text"};e.create=e.create=function(){return""};x=function(b,a,c){return b.slice(0,a)+c+b.slice(a)};E=function(b){typeof b.p!=="number"&&g(Error("component missing position field"));
typeof b.i==="string"^typeof b.d==="string"||g(Error("component needs an i or d field"));b.p>=0||g(Error("position cannot be negative"))};n=function(b){var a,c,d;for(c=0,d=b.length;c<d;c++)a=b[c],E(a);return!0};e.apply=function(b,a){var c,d,f,e;n(a);for(f=0,e=a.length;f<e;f++)c=a[f],c.i!=r?b=x(b,c.p,c.i):(d=b.slice(c.p,c.p+c.d.length),c.d!==d&&g(Error("Delete component '"+c.d+"' does not match deleted text '"+d+"'")),b=b.slice(0,c.p)+b.slice(c.p+c.d.length));return b};e.M=l=function(b,a){var c,d,
f;if(!(a.i===""||a.d===""))return b.length===0?b.push(a):(c=b[b.length-1],c.i!=r&&a.i!=r&&c.p<=(d=a.p)&&d<=c.p+c.i.length?b[b.length-1]={i:x(c.i,a.p-c.p,a.i),p:c.p}:c.d!=r&&a.d!=r&&a.p<=(f=c.p)&&f<=a.p+a.d.length?b[b.length-1]={d:x(a.d,c.p-a.p,c.d),p:a.p}:b.push(a))};e.compose=e.C=function(b,a){var c,d,f,e;n(b);n(a);d=b.slice();for(f=0,e=a.length;f<e;f++)c=a[f],l(d,c);return d};e.compress=e.O=function(b){return e.C([],b)};e.normalize=function(b){var a,c,d,f;c=[];if(b.i!=r||b.p!=r)b=[b];for(d=0,f=
b.length;d<f;d++)a=b[d],a.p==r&&(a.p=0),l(c,a);return c};y=function(b,a,c){return a.i!=r?a.p<b||a.p===b&&c?b+a.i.length:b:b<=a.p?b:b<=a.p+a.d.length?a.p:b-a.d.length};e.transformCursor=function(b,a,c){var d,f,e;for(f=0,e=a.length;f<e;f++)d=a[f],b=y(b,d,c);return b};e._tc=D=function(b,a,c,d){var f,e;n([a]);n([c]);if(a.i!=r)l(b,{i:a.i,p:y(a.p,c,d==="right")});else if(c.i!=r)d=a.d,a.p<c.p&&(l(b,{d:d.slice(0,c.p-a.p),p:a.p}),d=d.slice(c.p-a.p)),d!==""&&l(b,{d:d,p:a.p+c.i.length});else if(a.p>=c.p+c.d.length)l(b,
{d:a.d,p:a.p-c.d.length});else if(a.p+a.d.length<=c.p)l(b,a);else if(d={d:"",p:a.p},a.p<c.p&&(d.d=a.d.slice(0,c.p-a.p)),a.p+a.d.length>c.p+c.d.length&&(d.d+=a.d.slice(c.p+c.d.length-a.p)),e=Math.max(a.p,c.p),f=Math.min(a.p+a.d.length,c.p+c.d.length),a=a.d.slice(e-a.p,f-a.p),f=c.d.slice(e-c.p,f-c.p),a!==f&&g(Error("Delete ops delete different text in the same region of the document")),d.d!=="")d.p=y(d.p,c),l(b,d);return b};G=function(b){return b.i!=r?{d:b.i,p:b.p}:{i:b.d,p:b.p}};e.P=e.invert=function(b){var a,
c,d,f;d=b.slice().reverse();f=[];for(a=0,c=d.length;a<c;a++)b=d[a],f.push(G(b));return f};typeof!0!=="undefined"?(h.types||(h.types={}),A(e,D,n,l),h.types.text=e):(module.q=e,require("./helpers").B(e,D,n,l));typeof!0==="undefined"&&(e=require("./text"));e.b={t:{text:!0},G:function(){return this.g.length},H:function(){return this.g},I:function(b,a,c){a==r&&(a=0);b=[{p:a,i:b}];this.w(b,c);return b},D:function(b,a,c){b=[{p:a,d:this.g.slice(a,a+b)}];this.w(b,c);return b},A:function(){return this.f("remoteop",
function(b){var a,c,d,f;f=[];for(c=0,d=b.length;c<d;c++)a=b[c],f.push(a.i!==m?this.a("insert",a.i,a.p):this.a("delete",a.d,a.p));return f})}};e.api=e.b;e.b.provides=e.b.t;e.b.getLength=e.b.G;e.b.getText=e.b.H;e.b.insert=e.b.I;e.b.del=e.b.D;typeof!0!=="undefined"?(u||(u=h.types),window.io||g(Error("Must load socket.io before this library")),B=window.io):(u=require("../types"),B=require("../../thirdparty/Socket.io-node-client").Q,k=require("./microevent"));v=function(b,a,c,d,f){var e,h,l,k,i,n,p;this.name=
a;this.version=c;this.type=d;this.type.compose==r&&g(Error("Handling types without compose() defined is not currently implemented"));this.o=function(a){this.snapshot=this.g=a};this.o(f);h=r;e=[];i=r;k=[];n={};p=j(function(){if(h===r&&i!==r)return h=i,e=k,i=r,k=[],b.send({doc:this.name,op:h,v:this.version},j(function(a){var b,c,d;if(a.v===r){for(c=0,d=e.length;c<d;c++)b=e[c],b(r);h=r;g(Error(a.error))}a.v!==this.version&&g(Error("Invalid version from server"));n[this.version]=h;this.version++;for(a=
0,c=e.length;a<c;a++)b=e[a],b(h,r);h=r;return p()},this))},this);this.z=function(a){var b,c,d;if(!(a.v<this.version))return a.doc!==this.name&&g(Error("Expected docName "+this.name+" but got "+a.doc)),a.v!==this.version&&g(Error("Expected version "+this.version+" but got "+a.v)),a=a.op,n[this.version]=a,c=this.type.transformX||j(function(a,b){var c,d;c=this.type.transform(a,b,"left");d=this.type.transform(b,a,"right");return[c,d]},this),h!==r&&(b=c(h,a),h=b[0],a=b[1]),i!==r&&(d=c(i,a),i=d[0],a=d[1]),
b=this.g,this.o(this.type.apply(b,a)),this.version++,this.a("remoteop",a,b),this.a("change",a,b)};this.submitOp=this.w=function(a,b,c){var d;if(b==r)b=this.version;if(typeof b==="function")c=b,b=this.version;for(this.type.normalize!=r&&(a=this.type.normalize(a));b<this.version;)(d=n[b])||g(Error("Op version too old")),a=this.type.transform(a,d,"left"),b++;this.o(this.type.apply(this.g,a));i=i!==r?this.type.compose(i,a):a;c&&k.push(c);this.a("change",a);return setTimeout(p,0)};this.close=this.close=
function(a){return b.send({doc:this.name,open:!1},j(function(){a&&a();this.a("closed")},this))};if(this.type.api){c=this.type.api;for(l in c)a=c[l],this[l]=a;this.A()}else this.t=this.provides={};return this};k.s(v);p=function(){function b(a,b,d){this.m=j(this.m,this);this.j=j(this.j,this);this.k=j(this.k,this);this.h=new B.Socket(a,{port:b,R:d?path+"/socket.io":"socket.io"});this.h.on("connect",this.j);this.h.on("disconnect",this.k);this.h.on("message",this.m);this.h.connect();this.e={};this.l=0}
b.prototype.k=function(){return this.a("disconnect")};b.prototype.j=function(){return this.a("connect")};b.prototype.send=function(a,b){var d,f;d=a.doc;d===this.K?delete a.doc:this.K=d;this.h.send(a);if(b)return f=j(function(a){var f;f=j(function(e){if(e.doc===d)return this.n(a,f),b(e)},this);return this.f(a,f)},this),f(a.open===!0?"open":a.open===!1?"close":a.create?"create":a.snapshot===r?"snapshot":a.op?"op response":m)};b.prototype.m=function(a){var b,d;b=a.doc;b!==m?this.J=b:a.doc=b=this.J;this.a("message",
a);d=a.open===!0||a.open===!1&&a.error?"open":a.open===!1?"close":a.snapshot!==m?"snapshot":a.create?"create":a.op?"op":a.v!==m?"op response":m;this.a(d,a);if(d==="op"&&(b=this.e[b]))return b.z(a)};b.prototype.r=function(a){var b,d;d=a.doc;this.e[d]&&g(Error("Document "+d+" already followed"));b=a.type;typeof b==="string"&&(b=u[b]);b=new v(this,d,a.v,b,a.snapshot);b.created=!!a.create;this.e[d]=b;this.l++;b.f("closed",j(function(){delete this.e[d];return this.l--},this));return b};b.prototype.openExisting=
function(a,b){return this.e[a]!=r?this.e[a]:this.send({doc:a,open:!0,snapshot:r},j(function(a){return a.error?b(r,Error(a.error)):b(this.r(a))},this))};b.prototype.open=function(a,b,d){typeof b==="function"&&(d=b,b="text");d||(d=function(){});typeof b==="string"&&(b=u[b]);if(a!=r&&this.e[a]!=r)a=this.e[a],a.type===b?d(a):d(a,"Type mismatch");else return this.send({doc:a,open:!0,create:!0,snapshot:r,type:b.name},j(function(a){return a.error?d(r,a.error):(a.snapshot===m&&(a.snapshot=b.create()),a.type=
b,d(this.r(a)))},this))};b.prototype.create=function(a,b){return w(r,a,b)};b.prototype.disconnect=function(){if(this.u!=r)return this.a("disconnected"),this.u.F(),this.u=r};return b}();k.s(p);t={};F=function(b,a,c){var d;if(typeof!0!=="undefined"){if(b==r)b=window.location.hostname;if(a==r)a=window.location.port}d=b;a!=r&&(d+=":"+a);t[d]||(b=new p(b,a,c),b.f("disconnected",function(){return delete t[d]}),t[d]=b);return t[d]};w=function(b,a,c,d){var e;typeof c==="function"&&(d=c,c=r);c==r&&(c={});
e=F(c.host,c.port,c.N);return e.open(b,a,function(a,b){return a===r?d(r,b):(a.f("closed",function(){return setTimeout(function(){if(e.l===0)return e.F()},0)}),d(a))})};typeof!0!=="undefined"?(h.Connection=p,h.Document=v,h.open=w,window.sharejs=h):(h.L=p,h.open=w)}).call(this);