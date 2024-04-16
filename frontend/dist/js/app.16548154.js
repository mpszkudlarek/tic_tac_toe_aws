(function(){"use strict";var e={7173:function(e,t,r){var o=r(9242),n=r(3396);const s={class:"d-flex justify-content-center header"},a={class:"ghub",href:"https://github.com/AnkushSarkar10/vue-flask-tic-tac-toe",target:"_blank"};function i(e,t,r,o,i,c){const d=(0,n.up)("the-header"),l=(0,n.up)("router-view"),m=(0,n.up)("win-loose-draw"),u=(0,n.up)("connecting-to-server"),p=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n.Wm)(d)]),(0,n.Wm)(l),e.$store.getters.gameOver?((0,n.wg)(),(0,n.j4)(m,{key:0,id:"win-loose-draw",resultStr:i.resultStr},null,8,["resultStr"])):(0,n.kq)("",!0),"server not connected"===e.$store.state.connectionStr?((0,n.wg)(),(0,n.j4)(u,{key:1})):(0,n.kq)("",!0),(0,n._)("a",a,[(0,n.Wm)(p,{icon:"fa-brands fa-github"})])],64)}var c={data(){return{resultStr:""}},methods:{},created(){window.addEventListener("beforeunload",this.$router.replace("/"))},mounted(){let e=this.$store;document.title="Tic Tac Toe",e.getters.socket.on("on_connect",(t=>{e.commit("setConnStr",t)})),e.getters.socket.on("on_disconnect",(t=>{e.commit("setConnStr",t),this.$router.replace("/")})),e.getters.socket.on("message",(e=>{console.log(e)})),e.getters.socket.on("make_user_switch",(()=>{let t=e.getters.myTurn;e.commit("setMyTurn",!t),console.log("our lord and savior server said to switch the user "+!t)})),e.getters.socket.on("board_changed_in_server",(t=>{if(e.commit("changeValue",{x:t["x"],y:t["y"],player:t["player"]}),e.getters.playerHas3InARow("X")){let t={roomId:e.getters.roomId,player:"X"};e.getters.socket.emit("someone_won",t),console.log("X won!")}else if(e.getters.playerHas3InARow("O")){let t={roomId:e.getters.roomId,player:"O"};e.getters.socket.emit("someone_won",t),console.log("O won!")}e.getters.checkIfFull&&(console.log("Draw!"),e.getters.socket.emit("draw",{roomId:e.getters.roomId}))})),e.getters.socket.on("game_over",(t=>{e.commit("setGameOver",!0),this.resultStr=t})),e.getters.socket.on("setOppName",(t=>{e.commit("setOppUserName",t)}))}},d=r(89);const l=(0,d.Z)(c,[["render",i]]);var m=l,u=r(65);const p=r(4718),h=(0,u.MT)({state(){return{board:[[0,0,0],[0,0,0],[0,0,0]],currentPlayer:"",playerUserName:"",opponentUserName:"",roomId:"",myTurn:!1,gameOver:!1,socket:p("https://tictactoe-server.onrender.com/",{transports:["websocket"]}),connectionStr:"server not connected"}},mutations:{setConnStr(e,t){e.connectionStr=t},changeValue(e,t){0==e.board[t.x][t.y]&&(e.board[t.x][t.y]=t.player)},switchPlayer(e){"O"==e.currentPlayer?e.currentPlayer="X":e.currentPlayer="O"},clearBoard(e){for(var t=0;t<e.board.length;t++)for(var r=0;r<e.board[t].length;r++)0!=e.board[t][r]&&(console.log("clear board"),e.board[t][r]=0)},setUserName(e,t){e.playerUserName=t},setOppUserName(e,t){e.opponentUserName=t},setCurrentPlayer(e,t){e.currentPlayer=t},setRoomId(e,t){e.roomId=t},setMyTurn(e,t){e.myTurn=t},setGameOver(e,t){e.gameOver=t}},getters:{socket:e=>e.socket,board:e=>e.board,checkIfFull:e=>{for(var t=0;t<e.board.length;t++)for(var r=0;r<e.board[t].length;r++)if(0==e.board[t][r])return!1;return!0},playerHas3InARow:e=>t=>{for(let r=0;r<3;r++)if(e.board[0][r]===t&&e.board[1][r]===t&&e.board[2][r]===t)return!0;for(let r=0;r<3;r++)if(e.board[r][0]===t&&e.board[r][1]===t&&e.board[r][2]===t)return!0;return e.board[0][0]===t&&e.board[1][1]===t&&e.board[2][2]===t||e.board[2][0]===t&&e.board[1][1]===t&&e.board[0][2]===t},playerUserName:e=>e.playerUserName,opponentUserName:e=>e.opponentUserName,roomId:e=>e.roomId,myTurn:e=>e.myTurn,currentPlayer:e=>e.currentPlayer,gameOver:e=>e.gameOver}});var v=h,g=r(678),y=r(7139);const f=e=>((0,n.dD)("data-v-1c1b2366"),e=e(),(0,n.Cn)(),e),b={class:"container"},_={class:"tictactoe-board"},w={class:"container-fluid gameInfo"},x=f((()=>(0,n._)("div",{class:"line-break"},null,-1))),k={key:0,class:"yourTurn"},I={key:1,class:"oppTurn"};function O(e,t,r,o,s,a){const i=(0,n.up)("the-cell");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",b,[(0,n._)("div",_,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,((e,t)=>(0,n._)("div",{key:t},[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,((e,r)=>(0,n._)("div",{key:r},[(0,n.Wm)(i,{vals:[r,t]},null,8,["vals"])]))),64))]))),64))])]),(0,n._)("div",w,[(0,n._)("div",{class:(0,y.C_)(["myName",{active:e.$store.getters.myTurn}])},(0,y.zw)(e.$store.getters.playerUserName),3),(0,n._)("div",{class:(0,y.C_)(["oppName",{active:!e.$store.getters.myTurn}])},(0,y.zw)(e.$store.getters.opponentUserName),3),x,e.$store.getters.myTurn?((0,n.wg)(),(0,n.iD)("div",k,"It's your turn!")):((0,n.wg)(),(0,n.iD)("div",I,"Waiting for opponent to move . . ."))])],64)}var T={methods:{clearBoard(){this.$store.commit("clearBoard")}}};const N=(0,d.Z)(T,[["render",O],["__scopeId","data-v-1c1b2366"]]);var $=N;const C=e=>((0,n.dD)("data-v-466da2df"),e=e(),(0,n.Cn)(),e),U={class:"nameInput container"},D={class:"input-button"},S=C((()=>(0,n._)("label",null,"Gamer Name",-1))),W=["disabled"];function P(e,t,r,s,a,i){return(0,n.wg)(),(0,n.iD)("div",U,[(0,n._)("div",D,[(0,n.wy)((0,n._)("input",{ref:"name",class:(0,y.C_)({active:a.isActive}),onFocus:t[0]||(t[0]=e=>a.isActive=!0),onBlur:t[1]||(t[1]=e=>0==a.name.length?a.isActive=!1:a.isActive=a.isActive),type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>a.name=e)},null,34),[[o.nr,a.name]]),S,(0,n._)("button",{class:"btn btn-dark",onClickOnce:t[3]||(t[3]=e=>i.setUserName()),disabled:!i.validateName(a.name)},"Find Match",40,W)])])}var j={data(){return{name:"",isActive:!1}},created(){},watch:{name(e){let t=12;e.length<t?this.name=e:this.name=e.slice(0,t)}},methods:{validateName(e){return""!=e},setUserName(){let e=this.$store.getters.socket,t=this.$store;this.$store.commit("setUserName",this.name),e.emit("get_username",this.name);let r={room_id:this.name+"-"+e.id,username:this.name};e.emit("user_join_room",r);let o=new Promise(((r,o)=>{e?t.getters.socket.on("set_current_player_and_room_id",(e=>{t.commit("setCurrentPlayer",e["player"]),t.commit("setRoomId",e["room_id"]),console.log("my room id is this -> "+t.getters.roomId),"X"==e["player"]&&t.commit("setMyTurn",!0),r(t.getters.roomId)})):o("No socket connection.")}));o.then((r=>{e.on("waiting_for_opponent",(()=>{let e="/waiting/"+r;this.$router.replace(e)})),e.on("match_found",(()=>{e.emit("sendUserName",{name:t.getters.playerUserName,roomid:t.getters.roomId});let o="/game/"+r;this.$router.replace(o)}))})).catch((e=>{console.log(e)}))}}};const M=(0,d.Z)(j,[["render",P],["__scopeId","data-v-466da2df"]]);var A=M,G=r.p+"img/giphy.765d29ec.gif";const H=e=>((0,n.dD)("data-v-6f50b6fa"),e=e(),(0,n.Cn)(),e),Z=H((()=>(0,n._)("h3",null,"Waiting for opponent . . .",-1))),X=H((()=>(0,n._)("img",{src:G},null,-1)));function B(e,t,r,o,s,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[Z,X],64)}var F={};const R=(0,d.Z)(F,[["render",B],["__scopeId","data-v-6f50b6fa"]]);var Y=R;const z=(0,g.p7)({history:(0,g.PO)(),routes:[{path:"/",component:A},{path:"/waiting/:roomid",component:Y},{path:"/game/:roomid",component:$}]});var V=z;const q={key:0};function E(e,t,r,o,s,a){return(0,n.wg)(),(0,n.iD)("div",{class:"cell",onClick:t[0]||(t[0]=e=>a.makeMove()),style:(0,y.j5)({"border-width":s.borderWidth})},[0!==e.$store.state.board[s.x][s.y]?((0,n.wg)(),(0,n.iD)("span",q,(0,y.zw)(e.$store.state.board[s.x][s.y]),1)):(0,n.kq)("",!0)],4)}var K={props:["vals"],data(){return{x:this.vals[0],y:this.vals[1],borderWidth:""}},created(){0==this.x&&0==this.y&&(this.borderWidth="0px 2px 2px 0px"),0==this.x&&1==this.y&&(this.borderWidth="0px 2px 2px 2px"),0==this.x&&2==this.y&&(this.borderWidth="0px 0px 2px 2px"),1==this.x&&0==this.y&&(this.borderWidth="2px 2px 2px 0px"),1==this.x&&1==this.y&&(this.borderWidth="2px 2px 2px 2px"),1==this.x&&2==this.y&&(this.borderWidth="2px 0px 2px 2px"),2==this.x&&0==this.y&&(this.borderWidth="2px 2px 0px 0px"),2==this.x&&1==this.y&&(this.borderWidth="2px 2px 0px 2px"),2==this.x&&2==this.y&&(this.borderWidth="2px 0px 0px 2px")},methods:{makeMove(){let e=this.$store;if(0==e.state.board[this.x][this.y]&&e.state.myTurn){e.commit("setMyTurn",!1),e.commit("changeValue",{x:this.x,y:this.y,player:e.getters.currentPlayer}),e.getters.socket.emit("switch_users",e.getters.roomId);let t={roomId:e.getters.roomId,player:e.getters.currentPlayer,x:this.x,y:this.y};e.getters.socket.emit("board_changed",t)}}}};const L=(0,d.Z)(K,[["render",E]]);var J=L;const Q=e=>((0,n.dD)("data-v-6ebc8516"),e=e(),(0,n.Cn)(),e),ee={class:"container"},te={class:"modal-mask"},re={class:"modal-wrapper"},oe={class:"modal-container"},ne={class:"modal-body"},se=Q((()=>(0,n._)("hr",null,null,-1)));function ae(e,t,r,s,a,i){return(0,n.wg)(),(0,n.iD)("div",ee,[(0,n.Wm)(o.uT,{name:"modal"},{default:(0,n.w5)((()=>[(0,n._)("div",te,[(0,n._)("div",re,[(0,n._)("div",oe,[(0,n._)("div",ne,[(0,n.Uk)((0,y.zw)(r.resultStr)+" ",1),se,(0,n._)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>i.newGame&&i.newGame(...e))},"New Game")])])])])])),_:1})])}var ie={props:["resultStr"],methods:{newGame(){this.$store.state.gameOver=!1,this.$store.commit("clearBoard"),this.$store.commit("setMyTurn",!1),this.$router.replace("/"),window.location.reload()}}};const ce=(0,d.Z)(ie,[["render",ae],["__scopeId","data-v-6ebc8516"]]);var de=ce;const le=e=>((0,n.dD)("data-v-0756e82f"),e=e(),(0,n.Cn)(),e),me={class:"main-header"},ue=le((()=>(0,n._)("h1",null,"TIC TAC TOE",-1))),pe=[ue];function he(e,t,r,o,s,a){return(0,n.wg)(),(0,n.iD)("div",me,pe)}var ve={};const ge=(0,d.Z)(ve,[["render",he],["__scopeId","data-v-0756e82f"]]);var ye=ge;const fe=e=>((0,n.dD)("data-v-cb5b3494"),e=e(),(0,n.Cn)(),e),be=fe((()=>(0,n._)("div",{class:"modal-mask"},[(0,n._)("div",{class:"modal-wrapper"},[(0,n._)("div",{class:"modal-dialog modal-dialog-centered"},[(0,n._)("div",{class:"modal-content"},[(0,n._)("div",{class:"modal-body"},[(0,n._)("h2",{class:"display-7"}," Wiating for server . . . "),(0,n._)("p",{class:""}," cold starts 🥶🥶🥶 ")])])])])],-1)));function _e(e,t){return(0,n.wg)(),(0,n.j4)(o.uT,{name:"modal"},{default:(0,n.w5)((()=>[be])),_:1})}const we={},xe=(0,d.Z)(we,[["render",_e],["__scopeId","data-v-cb5b3494"]]);var ke=xe,Ie=r(8125),Oe=r(2234),Te=r(7749);r(8937);Ie.vI.add(Oe.vnX);const Ne=(0,o.ri)(m);Ne.component("the-cell",J),Ne.component("win-loose-draw",de),Ne.component("the-header",ye),Ne.component("connecting-to-server",ke),Ne.component("font-awesome-icon",Te.GN),Ne.use(v),Ne.use(V),Ne.mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,s){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],n=e[l][1],s=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],i=o[1],c=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var l=c(r)}for(t&&t(o);d<a.length;d++)s=a[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},o=self["webpackChunkvue_tic_tac_toe"]=self["webpackChunkvue_tic_tac_toe"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(7173)}));o=r.O(o)})();
//# sourceMappingURL=app.16548154.js.map