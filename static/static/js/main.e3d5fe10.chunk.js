(this["webpackJsonpd-mgr"]=this["webpackJsonpd-mgr"]||[]).push([[0],{63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"ADD_TODO",(function(){return p})),n.d(i,"COMPLETE_TODO",(function(){return m})),n.d(i,"addTodo",(function(){return j})),n.d(i,"addTodo2",(function(){return f})),n.d(i,"complete",(function(){return b})),n.d(i,"complete2",(function(){return O}));var c=n(1),o=n(0),r=n(10),s=n(48);var a=n(13),u=n(20),l=n.n(u),d=n(52),h=n(15),p="@@example/ADD_TODO",m="@@example/COMPLETE_TODO";function j(t){return{type:p,text:t}}function f(t){return function(t){return fetch("api/add.json").then((function(e){return e.json().then((function(e){return t(j(e.status))}))}))}}function b(t){var e=t.complete,n=t.id;return{type:m,complete:e,id:n}}function O(t){return function(e){return fetch("api/add.json").then((function(n){return n.json().then((function(n){return e(b(t))}))}))}}var v=i.ADD_TODO,x=i.COMPLETE_TODO,g=function(t,e){switch(e.type){case v:return{id:Math.floor(100*Math.random())+1,todo:e.text,completed:!1};case x:return t.id!==e.id?t:Object(h.a)(Object(h.a)({},t),{},{complete:!t.complete});default:return t}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return[].concat(Object(d.a)(t),[g(void 0,e)]);case x:return t.map((function(t){return g(t,e)}));default:return t}},k=Object(r.c)({todos:y}),C=n(2),M=n(3),T=n(5),N=n(4),S=(n(63),function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){var t,e=this.props.onClick;return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{ref:function(e){t=e}}),Object(c.jsx)("button",{onClick:function(){e(t.value),t.value=""},children:"Add"})]})}}]),n}(o.Component)),A=(Object(a.b)(void 0,(function(t){return{onClick:function(e){t(f())}}}))(S),function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.todo,i=t.complete,o=t.onClick;return Object(c.jsx)("li",{id:e,onClick:function(){return o({id:e,complete:!i})},className:i?"completed":"",children:n})}}]),n}(o.Component)),E=function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){var t=this.props,e=t.todos,n=t.onClick;return Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsx)(A,Object(h.a)({onClick:n},t),t.id)}))})}}]),n}(o.Component),D=(Object(a.b)((function(t){return{todos:t.todos}}),(function(t){return{onClick:function(e){t(b(e))}}}))(E),o.Component,n(21)),P=function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(t){return Object(C.a)(this,n),e.call(this,t)}return Object(M.a)(n,[{key:"renderMessage",value:function(t){var e=0;if(t.includes("\n")){var n=[];return t.split("\n").map((function(t){n.push(Object(c.jsxs)("span",{children:[t,Object(c.jsx)("br",{})]},e++))})),Object(c.jsx)("span",{className:"message",children:n},e++)}return Object(c.jsx)("span",{className:"message",children:t},e++)}},{key:"renderMessageGroup",value:function(t){for(var e=this.props.time.split(" ")[1],n=this.props.isMine?"my-chat":"your-chat",i=this.props.isMine?"right":"left",o=[],r=0;r<t.length;++r)o.push(Object(c.jsx)("p",{})),r===t.length-1&&this.props.isMine&&o.push(Object(c.jsx)("div",{className:"cell timestamp",children:e},"timestamp")),o.push(Object(c.jsx)("div",{className:"balloon "+n+(r>0?" child":""),children:Object(c.jsx)("div",{className:"text-message "+i,children:this.renderMessage(t[r])})},r));return this.props.isMine||o.push(Object(c.jsx)("div",{className:"cell timestamp",children:e},"timestamp")),o}},{key:"renderProfile",value:function(){return Object(c.jsx)("div",{className:"cell pic",children:Object(c.jsx)("img",{src:this.props.img})})}},{key:"render",value:function(){var t=this.props.isMine?"right":"left";return Object(c.jsxs)("div",{id:"dv-chat-message",children:[Object(c.jsx)("div",{className:"float-"+t,children:Object(c.jsxs)("div",{className:"desc "+t,children:[this.props.isMine?null:this.renderProfile(),Object(c.jsxs)("div",{className:"cell message-"+t,children:[Object(c.jsx)("div",{className:"name",children:this.props.isMine?"":this.props.name}),this.renderMessageGroup(this.props.text)]})]})}),Object(c.jsx)("p",{children:"\xa0"})]})}}]),n}(o.Component);P.defaultProps={isMine:!1,text:[""],name:"\uc791\uc131\uc790",time:"\uc624\uc804 00:00",img:"https://lh3.googleusercontent.com/proxy/A-2dhRZZaeZ0IWMPOlybAu7tR5UAtOaX3EpcWHJ5iMxQAmSwFWM6JOieS-om-Xr2zDK2soGyseTVRoKdAm8Y4g7bHS1GWo-7j9btj2yB5TCPNuBfzpnU_PEKcen09-Nhnn3XuC6EQqikgPbYtqUxlaAq0Uc"};var J=P,w=(n(64),n(65),n(50)),U=n.n(w),W=function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(t){var i;return Object(C.a)(this,n),(i=e.call(this,t)).inputName=null,i.inputText=null,i.state={},i}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var t=this.onClickSend.bind(this);console.log("didmount"),U()("#textarea-message").on("keypress",(function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||e.shiftKey||(e.preventDefault(),t())}))}},{key:"onClickJoin",value:function(){if(this.inputName.value){var t={isMine:!0,text:this.inputText.value,name:this.inputName.value,img:"https://lh3.googleusercontent.com/proxy/A-2dhRZZaeZ0IWMPOlybAu7tR5UAtOaX3EpcWHJ5iMxQAmSwFWM6JOieS-om-Xr2zDK2soGyseTVRoKdAm8Y4g7bHS1GWo-7j9btj2yB5TCPNuBfzpnU_PEKcen09-Nhnn3XuC6EQqikgPbYtqUxlaAq0Uc",time:"2020-12-21 12:28"};this.props.onClickJoin(t)}else;}},{key:"onClickSend",value:function(){var t=this.inputText.value;if(console.log(this.inputText),this.inputText.value="",t){var e={isMine:!0,text:t,name:this.inputName.value,img:"https://lh3.googleusercontent.com/proxy/A-2dhRZZaeZ0IWMPOlybAu7tR5UAtOaX3EpcWHJ5iMxQAmSwFWM6JOieS-om-Xr2zDK2soGyseTVRoKdAm8Y4g7bHS1GWo-7j9btj2yB5TCPNuBfzpnU_PEKcen09-Nhnn3XuC6EQqikgPbYtqUxlaAq0Uc",time:"2020-12-21 12:28"};this.props.onClickSend(e)}else;}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{id:"dv-chat-input",children:[Object(c.jsxs)("label",{className:"hidden",children:["\uc774\ub984:",Object(c.jsx)("input",{ref:function(e){t.inputName=e}})]}),Object(c.jsx)("button",{className:"hidden",onClick:function(){t.onClickJoin()},children:"\uc785\uc7a5"}),Object(c.jsxs)("div",{className:"input-text",children:[Object(c.jsx)("textarea",{id:"textarea-message",ref:function(e){t.inputText=e}}),Object(c.jsx)("button",{onClick:function(){t.onClickSend()},children:"\uc804\uc1a1"})]})]})}}]),n}(o.Component),K=n(51),R=n.n(K).a.connect("http://localhost:5000/chat"),_=[],q=function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(t){var i;Object(C.a)(this,n),(i=e.call(this,t)).state={data:[]};return i.getCurrentTime=function(){var t=new Date,e=t.getFullYear().toString().padStart(4,"0"),n=t.getMonth().toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0"),c=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(i," ").concat(c,":").concat(o)}.bind(Object(D.a)(i)),i}return Object(M.a)(n,[{key:"joinChannel",value:function(t){R.emit("login",{name:"\uc0c1\ud638",userid:"sangho@gmail.com",room:"public"})}},{key:"join",value:function(){var t=this,e=this.addMessage.bind(this);R.emit("login_user",{},(function(n){"complete"===n.result&&(console.log(n.data),R.emit("login",{name:"\uc0c1\ud638",userid:"sangho@gmail.com",room:"public"}),R.on("chat",(function(n){e({isMine:!1,name:n.from.name,img:"./unnamed.jpg",text:n.msg,time:t.getCurrentTime()})})),R.on("leaveRoom",(function(t){console.log(t+"\ub2d8\uc774 \ubc29\uc744 \ub5a0\ub0ac\uc2b5\ub2c8\ub2e4")})))}))}},{key:"componentDidMount",value:function(){this.convert(),this.join()}},{key:"addMessage",value:function(t){t.time=this.getCurrentTime();var e=[],n=(e=this.state.data).length-1;n>=0&&e[n].name===t.name&&e[n].time===t.time?e[n].text.push(t.text):(e.push(t),e[++n].text=[t.text]),this.setState({data:e})}},{key:"sendMessage",value:function(t){_.push(t),R.emit("chat",{msg:t.text},(function(t){console.log(t)})),this.addMessage(t)}},{key:"convert",value:function(){var t=[],e=-1;_.forEach((function(n){e>=0&&t[e].name===n.name&&t[e].time===n.time?t[e].text.push(n.text):(t.push(n),t[++e].text=[n.text])})),JSON.stringify(this.state.data)!==JSON.stringify(t)&&this.setState({data:t})}},{key:"renderText",value:function(){var t=0,e=[];return this.state.data.forEach((function(n){e.push(Object(c.jsx)(J,{isMine:n.isMine,text:n.text,name:n.name,img:n.img,time:n.time},t++))})),e}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{id:"dv-chat",children:[Object(c.jsx)("div",{id:"dv-chat-body",children:this.renderText()}),Object(c.jsx)(W,{onClickJoin:function(e){t.joinChannel(e)},onClickSend:function(e){t.sendMessage(e)}})]})}}]),n}(o.Component),X=function(t){Object(T.a)(n,t);var e=Object(N.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(q,{})})}}]),n}(o.Component),Z=(n(96),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.d)(Object(r.a)(s.a),window.devToolsExtension?window.devToolsExtension():function(t){return t});return Object(r.e)(t,e,n)}(k,{todos:[]})),G=function(){l.a.render(Object(c.jsx)(a.a,{store:Z,children:Object(c.jsx)(X,{})}),document.getElementById("root"))};Z.subscribe(G),G()}},[[97,1,2]]]);
//# sourceMappingURL=main.e3d5fe10.chunk.js.map