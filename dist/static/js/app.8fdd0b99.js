(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],h=0,f=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"08f6":function(t,e,n){},"3da6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("034f"),n("2877")),r={},c=Object(o["a"])(r,s,a,!1,null,null,null),u=c.exports,l=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"game"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"backWhite",attrs:{id:"status"}},[n("div",{staticClass:"status_1"},[n("el-row",[n("div",{staticClass:"container"},[n("popover",{attrs:{content:"饥饿",popContent:"划船/探索/钓鱼等动作会降低饥饿值,吃东西来补充"}}),n("el-col",{attrs:{span:20}},[n("el-progress",{attrs:{percentage:t.status.hunger,color:t.color.hunger}})],1)],1),n("div",{staticClass:"container"},[n("popover",{attrs:{content:"口渴",popContent:"划船/探索/钓鱼等动作会降低口渴,吃东西可补充"}}),n("el-col",{attrs:{span:20}},[n("el-progress",{attrs:{percentage:t.status.thirst,color:t.color.thirst}})],1)],1),n("div",{staticClass:"container"},[n("popover",{attrs:{content:"血量",popContent:"战斗时主要参考数据,如果血量为0，玩家将永久死去！"}}),n("el-col",{attrs:{span:20}},[n("el-progress",{attrs:{percentage:t.status.HP,color:t.color.HP}})],1)],1),n("div",{staticClass:"container"},[n("popover",{attrs:{content:"SAN",popContent:"有待开发,如果玩家缺少娱乐，SAN值将会降低，如果SAN足够低，将会发生一些不可名状的事件!"}}),n("el-col",{attrs:{span:20}},[n("el-progress",{attrs:{percentage:t.status.san,color:t.color.san}})],1)],1)])],1)]),n("div",{staticClass:"backWhite",attrs:{id:"messagePanel"}},[n("div",{attrs:{id:"island"}},t._l(t.map,(function(e){return n("div",{key:e.id,staticClass:"map"},t._l(e,(function(e){return n("div",{key:e.id,staticClass:"mapEle ",class:e.show,on:{click:function(n){return t.exploreIsland(e)}}},[t._v(" "+t._s(e.eventType)+" ")])})),0)})),0),n("megBox",{attrs:{megInfo:t.megs}})],1)]),n("div",{staticClass:"backWhite",attrs:{id:"console"}},[n("el-tabs",{attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"物品"}},[t.hint?n("popover",{attrs:{content:"悬浮到对象上可看详细信息!点我隐去这则提示",popContent:"详细信息"},on:{click:t.closeHint}}):t._e(),t._l(t.items,(function(t){return n("popover",{key:t.name,attrs:{content:t.name+"x"+t.amount,popContent:t.introduce},on:{click:function(e){return t.func.call(t)}}})}))],2),n("el-tab-pane",{attrs:{label:"装备"}},[t._v(" 装备 ")]),n("el-tab-pane",{attrs:{label:"合成"}},[n("craftGuide",{attrs:{items:t.items}})],1),n("el-tab-pane",{attrs:{label:"行动"}},[n("popover",{directives:[{name:"show",rawName:"v-show",value:!t.ifIsland,expression:"!ifIsland"}],attrs:{content:"划船",popContent:"-1饥饿 -2口渴"},on:{click:t.boating}}),n("popover",{directives:[{name:"show",rawName:"v-show",value:!t.ifIsland,expression:"!ifIsland"}],attrs:{content:"钓鱼",popContent:"-2饥饿 -4口渴"},on:{click:t.fishing}}),n("popover",{directives:[{name:"show",rawName:"v-show",value:t.isFinding,expression:"isFinding"}],attrs:{content:"是否登岛?",popContent:"-2饥饿 -1口渴"},on:{click:t.loginIsland}}),n("popover",{directives:[{name:"show",rawName:"v-show",value:t.ifIsland,expression:"ifIsland"}],attrs:{content:"离开岛屿",popContent:"-2饥饿 -1口渴"},on:{click:t.leaveIsland}})],1)],1),t._m(0)],1),t.isBattle?n("batBox",{attrs:{status:t.status},on:{batEnd:t.battleEnd}}):t._e(),t.isFishing?n("fishBox",{attrs:{fishProp:t.fishProp}}):t._e()],1)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"gameLogo"}},[i("img",{attrs:{src:n("cf05"),alt:""}})])}],d=(n("d81d"),n("4fad"),n("3835")),p=n("b85c"),m=(n("99af"),n("b0c0"),n("d4ec")),v=n("bee2"),g=(n("c975"),n("a434"),n("ac1f"),n("1276"),n("262e")),b=n("2caf"),y=n("9f3a");i["default"].use(y["a"]);var k,O=new y["a"].Store({state:{vm:"vm"},mutations:{settingVm:function(t,e){t.vm=e}},actions:{},modules:{}});setTimeout((function(){k=O.state.vm}),0);var w=function(){function t(e,n){Object(m["a"])(this,t),this.name=e,this.amount=1,this.introduce=n}return Object(v["a"])(t,[{key:"add",value:function(){this.amount++}},{key:"reduce",value:function(){this.amount--}},{key:"addToPack",value:function(){k.items[this.name]?k.items[this.name].amount+=this.amount:k.$set(k.items,this.name,this)}},{key:"megs",value:function(t){k.megs.push(t)}}]),t}(),C=function(t){Object(g["a"])(n,t);var e=Object(b["a"])(n);function n(t){var i;return Object(m["a"])(this,n),i=e.call(this,t.name,t.introduce),i.foodProp=t.foodProp,i}return Object(v["a"])(n,[{key:"func",value:function(){if(this.amount>=1){for(var t=0,e=Object.entries(this.foodProp);t<e.length;t++){var n=Object(d["a"])(e[t],2),i=n[0],s=n[1],a=i.split("|");"+"===a[1]?k.status[a[0]]+=s:k.status[a[0]]-=s}this.amount--}}}]),n}(w),j=function(t){Object(g["a"])(n,t);var e=Object(b["a"])(n);function n(t){var i;return Object(m["a"])(this,n),i=e.call(this,t),i.speed=t.speed,i.complex=t.complex,i.meg=t.meg,i}return n}(C),_=["木材","石材","草药"],x=function(t){Object(g["a"])(n,t);var e=Object(b["a"])(n);function n(t){return Object(m["a"])(this,n),e.call(this,t.name,t.introduce)}return Object(v["a"])(n,[{key:"func",value:function(){console.log("这只是一个资源,要发挥效用请合成")}}]),n}(w);function P(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(p["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,s=_.indexOf(i);-1!=s&&_.splice(s,1)}}catch(r){n.e(r)}finally{n.f()}var a=_.length,o=Math.floor(Math.random()*a);return o=_[o],new x({name:o,introduce:"资源,用于合成"})}setTimeout((function(){I=O.state.vm}),0);var I=null,B=function(){function t(e,n){Object(m["a"])(this,t),this.setting=e,this.strategy=n}return Object(v["a"])(t,[{key:"start",value:function(){for(var t=0,e=0,n=Math.random(),i=Object.entries(this.setting),s=0,a=i;s<a.length;s++){var o=Object(d["a"])(a[s],2),r=(o[0],o[1]);t+=r}n*=t;for(var c=0,u=i;c<u.length;c++){var l=Object(d["a"])(u[c],2),h=l[0],f=l[1];if(e+=f,n<=e)return this.strategy[h]()}return null}}]),t}(),E=new B({nothing:.1,finding:.1},{nothing:function(){I.megs.push("你向前划行，但无事发生,周围依然是茫茫大海")},finding:function(){I.megs.push("远处出现了一个小圆点,你向前划去,是一座小岛！"),I.isFinding=!0}}),S=new B({jiyu:.3,luyu:.3},{jiyu:function(){var t=new j({name:"鲫鱼",speed:.2,complex:.05,foodProp:{"hunger|+":5,"thirst|+":1},introduce:"我是鲫鱼,可以被吃",meg:"突然,鱼竿传来阵阵颤动,你收起鱼竿,钓到鲫鱼"});I.initFishAnimation(t)},luyu:function(){var t=new j({name:"鲈鱼",speed:.2,complex:.05,foodProp:{"hunger|+":1,"thirst|+":5},introduce:"我是鲈,可以被吃",meg:"水面上荡你阵阵波纹,你觉得,是时候了，你猛力收杆,是鲈鱼"});I.initFishAnimation(t)}}),$=new B({commonEvent:.5,findResource:.2,battle:.2},{commonEvent:function(){return I.megs.push("无事发生"),"."},findResource:function(){var t=P();return t.meg="发现资源: ".concat(t.name," x").concat(t.amount),t.megs(t.meg),t.addToPack(),"r"},battle:function(){return I.megs.push("遭遇怪物,开始战斗"),I.isBattle=!0,"b"}}),A={event:[],trigger:function(t){return this.event[t].start()},init:function(t,e){this.event[t]=e}};A.init("boating",E),A.init("fishing",S),A.init("explore",$);var F=A,T=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"u",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(m["a"])(this,t),this.eventType=e,this.isDetect=n,this.show="mapEle-1"};function N(t){for(var e=[],n=0;n<t;n++){for(var i=[],s=0;s<t;s++)i.push(new T("u",!1));e.push(i)}return e}var M=N;function H(t,e){for(var n=0,i=Object.entries(e);n<i.length;n++){var s=Object(d["a"])(i[n],2),a=s[0],o=s[1],r=a.split("|");"+"===r[1]?t.status[r[0]]+=o:t.status[r[0]]-=o}}var D=H,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"batWrapper"}},[n("div",{attrs:{id:"batBox"}},[n("h1",[t._v("战斗")]),n("main",[n("article",[n("div",{attrs:{id:"player"}},[n("div",{staticClass:"Show"},[t._v("人物")]),n("el-progress",{attrs:{percentage:t.player.HP}})],1),n("div",{attrs:{id:"monster"}},[n("div",{staticClass:"Show"},[t._v(t._s(t.monster.name))]),n("el-progress",{attrs:{percentage:t.monster.HP}})],1)]),n("nav",[n("div",{staticClass:"btn"},[n("el-button",{attrs:{id:"atkBtn"},on:{click:t.playerAtk}},[t._v("攻击")]),n("div",{staticClass:"mask",class:t.cdAnimation[0]})],1),n("div",{staticClass:"btn"},[n("el-button",{on:{click:t.escape}},[t._v("逃跑")]),n("div",{staticClass:"mask",class:t.cdAnimation[1]})],1),n("div",{staticClass:"btn"},[n("el-button",[t._v("武器")]),n("div",{staticClass:"mask",class:t.cdAnimation[2]})],1)])])])])},W=[],R=(n("a9e3"),n("25eb"),function(){function t(e,n,i){Object(m["a"])(this,t),this.HP=100,this.name=e,this.atk=n,this.def=i}return Object(v["a"])(t,[{key:"attack",value:function(t){t.HP-=this.atk}},{key:"beAttacked",value:function(t){this.HP-=t}}]),t}()),V=[{"野猪":"5|1"},{"野兔":"2|0"}];function G(){var t=V.length,e=Math.floor(Math.random()*t);e=V[e];var n=Object.entries(e);n=n[0];var i=n[0],s=n[1].split("|")[0];s=Number.parseInt(s);var a=n[1].split("|")[1];return a=Number.parseInt(a),new R(i,s,a)}function J(t,e){var n=setInterval((function(){t.attack(e),e.HP<0&&clearInterval(n)}),1e3);return n}function Y(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},i=arguments.length>2?arguments[2]:void 0;return function(){for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];e||(e=!0,t(a),setTimeout((function(){n(a),e=!1}),i))}}var z={name:"batBox",data:function(){return{player:this.status,monster:{HP:100,name:"test",atk:0,def:0},battleCheck:void 0,cdAnimation:[]}},components:{},mounted:function(){var t=this;this.monster=G(),this.battleCheck=J(this.monster,this.player),this.playerAtk=Y((function(){t.monster.beAttacked(5),t.$set(t.cdAnimation,0,"cdAnimation")}),(function(){t.$set(t.cdAnimation,0,null)}),1e3)},methods:{playerAtk:function(){throw new Error("请先定义攻击函数")},escape:function(){clearInterval(this.battleCheck),this.$emit("batEnd")}},props:["status"]},U=z,q=(n("6036"),Object(o["a"])(U,L,W,!1,null,"2c50e8f0",null)),K=q.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"craftGuide"}},[n("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.data,(function(e,i){return n("el-collapse-item",{key:e.id,attrs:{title:i,name:e.id}},[n("template",{slot:"title"},[n("div",{staticClass:"headline"},[t._v(t._s(i)+" ")])]),t._l(e,(function(e){return n("div",{key:e.id,staticClass:"row"},[n("popover",{attrs:{content:e.name,popContent:e.introduce},on:{click:function(n){return t.createPrimaryTool(n,e.createFunc)}}}),n("div",{ref:"item",refInFor:!0,staticClass:"detailed"},[t._v(t._s(e.materials))])],1)}))],2)})),1)],1)},X=[],Z=(n("b64b"),[{name:"初级镐",materials:{"木材":4,"石材":4},introduce:"凿开矿石",createFunc:function(){console.log("生成ing")}}]),tt=[{name:"熟成鱼",materials:{"炉子":1,"木炭":1},introduce:"可更好食用",createFunc:function(){console.log("生成ing")}}],et=[{name:"扩大船体",materials:{"木材":50,"石材":50},introduce:"提升船的航行能力就有机会发现资源更丰厚的岛",createFunc:function(){console.log("生成ing")}}],nt=[{name:"初级剑",materials:{"木材":4,"石材":4},introduce:"增强战斗能力",createFunc:function(){console.log("生成ing")}}],it={tools:Z,foods:tt,ship:et,battleTools:nt},st=it,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popover"},[n("div",{staticClass:"content",on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(t.content)+" ")]),n("div",{staticClass:"popContent"},[t._v(" "+t._s(t.popContent)+" ")])])},ot=[],rt={name:"popover",data:function(){return{}},components:{},mounted:function(){},methods:{},props:["content","popContent"]},ct=rt,ut=(n("adea"),Object(o["a"])(ct,at,ot,!1,null,"2557dbe4",null)),lt=ut.exports,ht={name:"",data:function(){return{pack:this.items,activeName:"1",data:void 0,resouceData:{}}},props:["items"],mounted:function(){this.data=st},methods:{createPrimaryTool:function(t,e){this.$refs.item[0]}},watch:{items:{handler:function(t,e){var n,i=Object(p["a"])(_);try{for(i.s();!(n=i.n()).done;){var s=n.value;void 0!=t[s]&&(this.resouceData[s]=t[s].amount)}}catch(d){i.e(d)}finally{i.f()}var a,o=Object(p["a"])(this.$refs.item);try{for(o.s();!(a=o.n()).done;){for(var r=a.value,c=!1,u=JSON.parse(r.innerHTML),l=0,h=Object.keys(u);l<h.length;l++){var f=h[l];c=this.resouceData[f]>=u[f]}1==c?r.classList.add("activate"):r.classList.remove("activate")}}catch(d){o.e(d)}finally{o.f()}},deep:!0}},components:{popover:lt}},ft=ht,dt=(n("f170"),Object(o["a"])(ft,Q,X,!1,null,"7e07800c",null)),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"megBox"}},t._l(t.megs,(function(e){return n("div",{key:e.id,staticClass:"meg"},[t._v(" "+t._s(e)+" ")])})),0)},vt=[],gt={name:"megBox",data:function(){return{megs:this.megInfo}},components:{},mounted:function(){},methods:{},props:["megInfo"]},bt=gt,yt=(n("7b6b"),Object(o["a"])(bt,mt,vt,!1,null,"3cdbbc9b",null)),kt=yt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"fishWrapper"}},[n("div",{ref:"fishBox",attrs:{id:"fishBox"}},[n("div",{attrs:{id:"mainBox"}},[n("div",{staticClass:"groove"},[n("div",{ref:"slideBlock",staticClass:"slideBlock"}),n("div",{ref:"fish",attrs:{id:"fish"}})])]),n("div",{ref:"progressBar",staticClass:"progressBar"},[n("div",{ref:"bar",staticClass:"contain"}),n("p",{staticClass:"time"},[t._v(t._s(t.time)+"s")])])])])},wt=[],Ct=function(){function t(e){Object(m["a"])(this,t),this.change=e.change,this.speed=e.speed,this.direction="+",this.site=0,this.top=-20/this.speed,this.bottom=0}return Object(v["a"])(t,[{key:"getNextDirection",value:function(){for(var t=0,e=0,n=Math.random(),i={change:this.change,keep:1-this.change},s=Object.entries(i),a=0,o=s;a<o.length;a++){var r=Object(d["a"])(o[a],2),c=(r[0],r[1]);t+=c}n*=t;for(var u=0,l=s;u<l.length;u++){var h=Object(d["a"])(l[u],2),f=h[0],p=h[1];if(e+=p,n<=e){this.toggleDirection(f);break}}return this.direction}},{key:"toggleDirection",value:function(t){"change"==t&&("+"==this.direction?this.direction="-":this.direction="+")}},{key:"fishMove",value:function(t){var e=this.getNextDirection();"+"==e?(this.site--,this.site<=this.top&&(this.site=this.top)):(this.site++,this.site>=0&&(this.site=0)),t.setAttribute("style","transform:translateY(".concat(this.site*this.speed,"rem)"))}}]),t}(),jt={site:0,speed:0,gravity:10,t:.05,dom:null,init:function(t){this.site=0,this.speed=0,this.gravity=10,this.t=.05,this.dom=t},countSpeed:function(t){var e=this.t,n=this.gravity;1==t?this.speed-=n*e:this.speed+=n*e},countSite:function(t){var e=this.site,n=this.speed,i=this.gravity,s=this.t;1==t?(this.site=e+n*s-.5*i*s*s,this.countSpeed(t)):(this.site=e+n*s+.5*i*s*s,this.countSpeed(t)),this.move()},move:function(){this.site<=-18?(this.site=-18,this.speed=0):this.site>=0&&(this.site=0,this.speed=0),this.dom.setAttribute("style","transform:translateY(".concat(this.site,"rem)"))}},_t=null;setTimeout((function(){_t=O.state.vm}),0);var xt={props:["fishProp"],name:"",data:function(){return{fish:{speed:this.fishProp.speed,complex:this.fishProp.complex},isPull:!0,pullCheck:!0,time:0,count:0}},components:{},mounted:function(){var t=this;this.fishingStart(),jt.init(this.$refs.slideBlock),document.addEventListener("keydown",(function(){1==t.pullCheck&&(t.isPull=!0,t.pullCheck=!1)}))},methods:{fishingStart:function(){var t=this,e=this.$refs.fish,n=this.$refs.slideBlock,i=(this.fish.complex,new Ct({speed:this.fish.speed,change:this.fish.complex})),s=setInterval((function(){if(i.fishMove(e),t.pullCheck=!0,jt.countSite(t.isPull),t.isPull=!1,t.count>=200){var a=Number.parseInt(window.getComputedStyle(document.getElementsByTagName("body")[0]).fontSize),o=e.getBoundingClientRect().top,r=n.getBoundingClientRect().top,c=r-o;return c>-4*a&&c<2*a?(console.log(o),console.log(r),t.fishingEnd("win")):t.fishingEnd("fail"),void clearInterval(s)}t.count++%20==0&&t.time++}),50)},fishingEnd:function(t){"win"==t?(this.$message({showClose:!0,message:"钓鱼成功!",type:"success"}),this.fishProp.addToPack(),this.fishProp.megs(this.fishProp.meg)):(this.$message({showClose:!0,message:"钓鱼失败",type:"warning"}),this.fishProp.megs("突然,鱼竿传来阵阵颤动,你收起鱼竿,却发现钩子上空无一物")),_t.isFishing=!1}}},Pt=xt,It=(n("ce92"),Object(o["a"])(Pt,Ot,wt,!1,null,"61678ba6",null)),Bt=It.exports,Et={name:"game",data:function(){return{status:{hunger:100,thirst:100,HP:100,san:100},site:"0|0",hint:!0,ifIsland:!1,isFinding:!1,isBattle:!1,isFishing:!1,fishProp:null,megs:["欢迎来到海岛冒险(暂定)，点击右边控制台行动进行游戏"],map:[],color:{hunger:"#2980b9",thirst:"#2980b9",HP:"#2980b9",san:"#2980b9"},items:{"鱼竿":{name:"鱼竿",amount:"1",introduce:"点击行动，即可钓鱼!",func:function(){console.log("点击行动，即可钓鱼!")}}}}},methods:{closeHint:function(){this.hint=!1},boating:function(){D(this,{"hunger|-":1,"thirst|-":2}),this.isFinding=!1,this.ifIsland=!1,F.trigger("boating")},fishing:function(){D(this,{"hunger|-":2,"thirst|-":2}),F.trigger("fishing")},initFishAnimation:function(t){this.fishProp=t,this.isFishing=!0},exploreIsland:function(t,e){1!=t.isDetect&&(t.eventType=F.trigger("explore"),t.isDetect=!0,t.show="mapEle-2")},StatusManage:function(t,e){var n,i=Object(p["a"])(t);try{for(i.s();!(n=i.n()).done;){var s=Object(d["a"])(n.value,2),a=s[0],o=s[1];o>100?e[a]=100:o>50&&o<100?this.color[a]="#2980b9":o<50&&o>25?this.color[a]="#e67e22":o<25&&o>0?this.color[a]="#c0392b":o<0&&this.$alert("你死了刷新页面重新开始游戏！","YOU DIED",{confirmButtonText:"确定",callback:function(t){location.reload()}})}}catch(r){i.e(r)}finally{i.f()}},loginIsland:function(){D(this,{"hunger|-":1,"thirst|-":2}),this.map=M(5),this.ifIsland=!0,this.isFinding=!1,this.megs.push("点击小岛方块,进行岛屿探索,点击离岛可返回小船")},leaveIsland:function(){D(this,{"hunger|-":1,"thirst|-":2}),this.map=[],this.ifIsland=!1},battleEnd:function(){this.isBattle=!1}},mounted:function(){O.commit("settingVm",this)},created:function(){this.$nextTick((function(){document.oncontextmenu=new Function("event.returnValue=false"),document.onselectstart=new Function("event.returnValue=false")}))},watch:{status:{handler:function(t,e){this.StatusManage(Object.entries(t),t)},deep:!0}},store:O,components:{batBox:K,craftGuide:pt,popover:lt,megBox:kt,fishBox:Bt}},St=Et,$t=(n("cb9e"),Object(o["a"])(St,h,f,!1,null,"3a253404",null)),At=$t.exports;i["default"].use(l["a"]);var Ft=[{path:"/",name:"game",component:At}],Tt=new l["a"]({mode:"history",base:"",routes:Ft}),Nt=Tt,Mt=(n("3880"),n("b705")),Ht=n.n(Mt);i["default"].config.productionTip=!1,i["default"].use(Ht.a),new i["default"]({router:Nt,store:O,render:function(t){return t(u)}}).$mount("#app")},6036:function(t,e,n){"use strict";var i=n("d0e4"),s=n.n(i);s.a},"7b6b":function(t,e,n){"use strict";var i=n("3da6"),s=n.n(i);s.a},"85ec":function(t,e,n){},9906:function(t,e,n){},adea:function(t,e,n){"use strict";var i=n("d1bc"),s=n.n(i);s.a},cb9e:function(t,e,n){"use strict";var i=n("9906"),s=n.n(i);s.a},ce92:function(t,e,n){"use strict";var i=n("e96e"),s=n.n(i);s.a},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.79596f44.png"},d0e4:function(t,e,n){},d1bc:function(t,e,n){},e96e:function(t,e,n){},f170:function(t,e,n){"use strict";var i=n("08f6"),s=n.n(i);s.a}});
//# sourceMappingURL=app.8fdd0b99.js.map