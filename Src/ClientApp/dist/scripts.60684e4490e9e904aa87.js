(function(){var t,e,n,r,s,o,i,a,u,c,l,p,h,f,d,g,m,y,v,w,b,k,S,q,L,x,P,T,R,j,E,O,M,A,N,_,F,C,U,W,X,D,H,I,z,G,B,J,K=[].slice,Q={}.hasOwnProperty,V=function(t,e){function n(){this.constructor=t}for(var r in e)Q.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Y=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},R=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,w=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(t){return setTimeout(t,50)},w=function(t){return clearTimeout(t)}),M=function(t){var e,n;return e=R(),(n=function(){var r;return(r=R()-e)>=33?(e=R(),t(r,(function(){return E(n)}))):setTimeout(n,33-r)})()},O=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?K.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},k=function(){var t,e,n,r,s,o,i;for(e=arguments[0],o=0,i=(r=2<=arguments.length?K.call(arguments,1):[]).length;i>o;o++)if(n=r[o])for(t in n)Q.call(n,t)&&(s=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=s&&"object"==typeof s?k(e[t],s):e[t]=s);return e},m=function(t){var e,n,r,s;for(n=e=0,r=0,s=t.length;s>r;r++)n+=Math.abs(t[r]),e++;return n/e},q=function(t,e){var n,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(o){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",o):void 0}}},i=function(){function t(){}return t.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)s.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return s}},t.prototype.trigger=function(){var t,e,n,r,s,o,i,a;if(n=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],null!=(o=this.bindings)?o[n]:void 0){for(r=0,a=[];r<this.bindings[n].length;)s=(i=this.bindings[n][r]).once,i.handler.apply(null!=(e=i.ctx)?e:this,t),a.push(s?this.bindings[n].splice(r,1):r++);return a}},t}(),c=window.Pace||{},window.Pace=c,k(c,i.prototype),j=c.options=k({},b,window.paceOptions,q()),H=0,z=(B=["ajax","document","eventLag","elements"]).length;z>H;H++)!0===j[F=B[H]]&&(j[F]=b[F]);u=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return V(e,t),e}(Error),e=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(j.target)))throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){u=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,s,o;if(null==document.querySelector(j.target))return!1;for(t=this.getElement(),n="translate3d("+this.progress+"%, 0, 0)",r=0,s=(o=["webkitTransform","msTransform","transform"]).length;s>r;r++)t.children[0].style[o[r]]=n;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?e="99":(e=this.progress<10?"0":"",e+=0|this.progress),t.children[0].setAttribute("data-progress",""+e)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),a=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,s,o;if(null!=this.bindings[t]){for(o=[],n=0,r=(s=this.bindings[t]).length;r>n;n++)o.push(s[n].call(this,e));return o}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),D=window.XMLHttpRequest,X=window.XDomainRequest,W=window.WebSocket,S=function(t,e){var n,r;for(n in r=[],e.prototype)try{r.push(null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?Object.defineProperty(t,n,{get:function(){return e.prototype[n]},configurable:!0,enumerable:!0}):t[n]=e.prototype[n]:void 0)}catch(o){}return r},P=[],c.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],P.unshift("ignore"),n=e.apply(null,t),P.shift(),n},c.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],P.unshift("track"),n=e.apply(null,t),P.shift(),n},_=function(t){var e;if(null==t&&(t="GET"),"track"===P[0])return"force";if(!P.length&&j.ajax){if("socket"===t&&j.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),Y.call(j.ajax.trackMethods,e)>=0)return!0}return!1},l=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,s){return _(r)&&n.trigger("request",{type:r,url:s,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new D(e),t(n),n};try{S(window.XMLHttpRequest,D)}catch(r){}if(null!=X){window.XDomainRequest=function(){var e;return e=new X,t(e),e};try{S(window.XDomainRequest,X)}catch(r){}}if(null!=W&&j.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new W(t,e):new W(t),_("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{S(window.WebSocket,W)}catch(r){}}}return V(e,t),e}(a),I=null,N=function(t){var e,n,r,s;for(n=0,r=(s=j.ajax.ignoreURLs).length;r>n;n++)if("string"==typeof(e=s[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(L=function(){return null==I&&(I=new l),I})().on("request",(function(e){var n,r,s,o;return o=e.type,s=e.request,N(e.url)?void 0:c.running||!1===j.restartOnRequestAfter&&"force"!==_(o)?void 0:(r=arguments,"boolean"==typeof(n=j.restartOnRequestAfter||0)&&(n=0),setTimeout((function(){var e,n,i,a,u;if("socket"===o?s.readyState<2:0<(i=s.readyState)&&4>i){for(c.restart(),u=[],e=0,n=(a=c.sources).length;n>e;e++){if((F=a[e])instanceof t){F.watch.apply(F,r);break}u.push(void 0)}return u}}),n))})),t=function(){function t(){var t=this;this.elements=[],L().on("request",(function(){return t.watch.apply(t,arguments)}))}return t.prototype.watch=function(t){var e,n,r;return r=t.type,e=t.request,N(t.url)?void 0:(n="socket"===r?new f(e):new d(e),this.elements.push(n))},t}(),d=function(t){var e,n,r,s,o=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",(function(t){return o.progress=t.lengthComputable?100*t.loaded/t.total:o.progress+(100-o.progress)/2}),!1),e=0,n=(s=["load","abort","timeout","error"]).length;n>e;e++)t.addEventListener(s[e],(function(){return o.progress=100}),!1);else r=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?o.progress=100:3===t.readyState&&(o.progress=50),"function"==typeof r?r.apply(null,arguments):void 0}},f=function(t){var e,n,r,s=this;for(this.progress=0,e=0,n=(r=["error","open"]).length;n>e;e++)t.addEventListener(r[e],(function(){return s.progress=100}),!1)},r=function(t){var e,n,r;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),e=0,n=(r=t.selectors).length;n>e;e++)this.elements.push(new s(r[e]))},s=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return t.check()}),j.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),n=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),o=function(){var t,e,n,r,s,o=this;this.progress=0,t=0,s=[],r=0,n=R(),e=setInterval((function(){var i;return i=R()-n-50,n=R(),s.push(i),s.length>j.eventLag.sampleCount&&s.shift(),t=m(s),++r>=j.eventLag.minSamples&&t<j.eventLag.lagThreshold?(o.progress=100,clearInterval(e)):o.progress=3/(t+3)*100}),50)},h=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=j.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=O(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=O(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/j.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,j.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+j.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),C=null,A=null,y=null,U=null,g=null,v=null,c.running=!1,x=function(){return j.restartOnPushState?c.restart():void 0},null!=window.history.pushState&&(G=window.history.pushState,window.history.pushState=function(){return x(),G.apply(window.history,arguments)}),null!=window.history.replaceState&&(J=window.history.replaceState,window.history.replaceState=function(){return x(),J.apply(window.history,arguments)}),p={ajax:t,elements:r,document:n,eventLag:o},(T=function(){var t,n,r,s,o,i,a,u;for(c.sources=C=[],n=0,s=(i=["ajax","elements","document","eventLag"]).length;s>n;n++)!1!==j[t=i[n]]&&C.push(new p[t](j[t]));for(r=0,o=(u=null!=(a=j.extraSources)?a:[]).length;o>r;r++)C.push(new(F=u[r])(j));return c.bar=y=new e,A=[],U=new h})(),c.stop=function(){return c.trigger("stop"),c.running=!1,y.destroy(),v=!0,null!=g&&("function"==typeof w&&w(g),g=null),T()},c.restart=function(){return c.trigger("restart"),c.stop(),c.start()},c.go=function(){var t;return c.running=!0,y.render(),t=R(),v=!1,g=M((function(e,n){var r,s,o,i,a,u,l,p,f,d,g,m,w;for(r=p=0,s=!0,i=f=0,g=C.length;g>f;i=++f)for(F=C[i],l=null!=A[i]?A[i]:A[i]=[],a=d=0,m=(o=null!=(w=F.elements)?w:[F]).length;m>d;a=++d)s&=(u=null!=l[a]?l[a]:l[a]=new h(o[a])).done,u.done||(r++,p+=u.tick(e));return y.update(U.tick(e,p/r)),y.done()||s||v?(y.update(100),c.trigger("done"),setTimeout((function(){return y.finish(),c.running=!1,c.trigger("hide")}),Math.max(j.ghostTime,Math.max(j.minTime-(R()-t),0)))):n()}))},c.start=function(t){k(j,t),c.running=!0;try{y.render()}catch(e){u=e}return document.querySelector(".pace")?(c.trigger("start"),c.go()):setTimeout(c.start,50)},"function"==typeof define&&define.amd?define(["pace"],(function(){return c})):"object"==typeof exports?module.exports=c:j.startOnPageLoad&&c.start()}).call(this);