(this["webpackJsonpgot-db-app"]=this["webpackJsonpgot-db-app"]||[]).push([[0],{40:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var n,a,c,s=r(1),i=r.n(s),o=r(14),l=r.n(o),u=(r(39),r(40),r(6)),d=r(7),j=r(9),h=r(8),b=r(16),f=r(21),p=r(22),m=r(17),O=r(2),x=p.a.div(n||(n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]))),g=p.a.div(a||(a=Object(f.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]))),v=p.a.ul(c||(c=Object(f.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;        \n    }\n"]))),S=function(){return Object(O.jsxs)(x,{children:[Object(O.jsx)(g,{children:Object(O.jsx)(m.b,{to:"/",children:"Game of Thrones DB"})}),Object(O.jsxs)(v,{children:[Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/characters/",children:"Characters"})}),Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/houses/",children:"Houses"})}),Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/books/",children:"Books"})})]})]})},y=(r(48),r(11)),k=r.n(y),w=r(18),C=function(){function e(){var t=this;Object(u.a)(this,e),this.getResource=function(){var e=Object(w.a)(k.a.mark((function e(r){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(r));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(w.a)(k.a.mark((function e(){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=5&pageSize=10");case 2:return r=e.sent,e.abrupt("return",r.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(w.a)(k.a.mark((function e(r){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(r));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=Object(w.a)(k.a.mark((function e(){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/");case 2:return r=e.sent,e.abrupt("return",r.map(t._transformHouse));case 4:case"end":return e.stop()}}),e)}))),this.getHouse=function(){var e=Object(w.a)(k.a.mark((function e(r){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(r));case 2:return n=e.sent,e.abrupt("return",t._transformHouse(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(w.a)(k.a.mark((function e(){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/");case 2:return r=e.sent,e.abrupt("return",r.map(t._transformBook));case 4:case"end":return e.stop()}}),e)}))),this.getBook=function(){var e=Object(w.a)(k.a.mark((function e(r){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(r));case 2:return n=e.sent,e.abrupt("return",t._transformBook(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)$/)[1]},this._transformCharacter=function(e){return{id:t._extractId(e),name:t.isSet(e.name),gender:t.isSet(e.gender),born:t.isSet(e.born),died:t.isSet(e.died),culture:t.isSet(e.culture)}},this._transformHouse=function(e){return{id:t._extractId(e),name:t.isSet(e.name),region:t.isSet(e.region),words:t.isSet(e.words),titles:t.isSet(e.titles),overlord:t.isSet(e.overlord),ancestralWeapons:t.isSet(e.ancestralWeapons)}},this._transformBook=function(e){return{id:t._extractId(e),name:t.isSet(e.name),numberOfPages:t.isSet(e.numberOfPages),publisher:t.isSet(e.publisher),released:t.isSet(e.released)}},this._apiBase="https://www.anapioficeandfire.com/api"}return Object(d.a)(e,[{key:"isSet",value:function(e){return e||"no data :("}}]),e}(),I=(r(50),function(){return Object(O.jsx)("div",{class:"loadingio-spinner-ripple-api2nd2g9du",children:Object(O.jsxs)("div",{class:"ldio-kvg8xtg4j",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})}),N=(r(51),r.p+"static/media/error.4a53f279.jpg"),D=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:N,alt:"error"}),Object(O.jsx)("span",{children:"Something goes wrong"})]})},R=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).gotService=new C,e.state={char:{},loading:!0,error:!1},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updateChar=function(){var t=Math.floor(140*Math.random()+25);e.gotService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,15e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,r=e.loading,n=e.error,a=n?Object(O.jsx)(D,{}):null,c=r?Object(O.jsx)(I,{}):null,s=r||n?null:Object(O.jsx)(A,{char:t});return Object(O.jsxs)("div",{className:"random-block rounded",children:[a,c,s]})}}]),r}(s.Component),A=function(e){var t=e.char,r=t.name,n=t.gender,a=t.born,c=t.died,s=t.culture;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h4",{children:["Random Character:",r]}),Object(O.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(O.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(O.jsx)("span",{className:"term",children:"Gender"}),Object(O.jsx)("span",{children:n})]}),Object(O.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(O.jsx)("span",{className:"term",children:"Born"}),Object(O.jsx)("span",{children:a})]}),Object(O.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(O.jsx)("span",{className:"term",children:"Died"}),Object(O.jsx)("span",{children:c})]}),Object(O.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(O.jsx)("span",{className:"term",children:"Culture"}),Object(O.jsx)("span",{children:s})]})]})]})},_=R,B=(r(52),function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={itemList:null,error:!1},e.onError=function(t){e.setState({itemList:null,error:!0})},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.getData)().then((function(t){e.setState({itemList:t,error:!1})})).catch((function(){e.onError()}))}},{key:"componentDidCatch",value:function(){this.setState({itemList:null,error:!0})}},{key:"renderItems",value:function(e){var t=this;return e.map((function(e){var r=e.id,n=t.props.renderItem(e);return Object(O.jsx)("li",{className:"list-group-item",onClick:function(){return t.props.onItemSelected(r)},children:n},r)}))}},{key:"render",value:function(){var e=this.state,t=e.itemList;if(e.error)return Object(O.jsx)(D,{});if(!t)return Object(O.jsx)("div",{className:"char-details rounded",children:Object(O.jsx)(I,{})});var r=this.renderItems(t);return Object(O.jsx)("ul",{className:"item-list list-group",children:r})}}]),r}(s.Component)),H=B,E=(r(53),function(e){var t=e.item,r=e.field,n=e.label;return Object(O.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(O.jsx)("span",{className:"term",children:n}),Object(O.jsx)("span",{children:t[r]})]})}),L=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={item:null,loading:!0,error:!1},e.onItemDetailsLoaded=function(t){e.setState({item:t,loading:!1})},e.onError=function(){e.setState({item:null,error:!0})},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,r=t.itemId,n=t.getData;r&&(this.setState({loading:!0}),n(r).then(this.onItemDetailsLoaded).catch((function(){return e.onError()})))}},{key:"showItem",value:function(e){var t=e.name;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h4",{children:t}),Object(O.jsx)("ul",{className:"list-group list-group-flush",children:i.a.Children.map(this.props.children,(function(t){return i.a.cloneElement(t,{item:e})}))})]})}},{key:"render",value:function(){var e=this.state,t=e.item,r=e.loading,n=e.error,a=n?Object(O.jsx)(D,{}):null,c=r?Object(O.jsx)("div",{className:"item-details rounded",children:Object(O.jsx)(I,{})}):null,s=r||n?null:this.showItem(t);return t?Object(O.jsxs)("div",{className:"item-details rounded",children:[a,c,s]}):Object(O.jsx)("div",{className:"item-details rounded",children:Object(O.jsx)("span",{className:"select-error",children:"Please select a character"})})}}]),r}(s.Component),W=L,M=function(e){var t=e.left,r=e.right;return Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{md:"6",children:t}),Object(O.jsx)(b.a,{md:"6",children:r})]})},P=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).gotService=new C,e.state={selectedChar:null,error:!1},e.onItemSelected=function(t){e.setState({selectedChar:t})},e}return Object(d.a)(r,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return Object(O.jsx)(D,{});var e=Object(O.jsx)(H,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllCharacters,renderItem:function(e){var t=e.name,r=e.gender;return"".concat(t," (").concat(r,")")}}),t=Object(O.jsxs)(W,{itemId:this.state.selectedChar,getData:this.gotService.getCharacter,children:[Object(O.jsx)(E,{field:"gender",label:"Gender"}),Object(O.jsx)(E,{field:"born",label:"Born"}),Object(O.jsx)(E,{field:"died",label:"Died"}),Object(O.jsx)(E,{field:"cultue",label:"Cultute"})]});return Object(O.jsx)(M,{left:e,right:t})}}]),r}(s.Component),z=r(4),F=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).gotService=new C,e.state={error:!1},e}return Object(d.a)(r,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this;return this.state.error?Object(O.jsx)(D,{}):Object(O.jsx)(H,{onItemSelected:function(t){e.props.history.push(t)},getData:this.gotService.getAllBooks,renderItem:function(e){return e.name}})}}]),r}(s.Component),G=Object(z.e)(F),J=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).gotService=new C,e.state={selectedHouse:null,error:!1},e.onItemSelected=function(t){e.setState({selectedHouse:t})},e}return Object(d.a)(r,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return Object(O.jsx)(D,{});var e=Object(O.jsx)(H,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllHouses,renderItem:function(e){return e.name}}),t=Object(O.jsxs)(W,{itemId:this.state.selectedHouse,getData:this.gotService.getHouse,children:[Object(O.jsx)(E,{field:"region",label:"Region"}),Object(O.jsx)(E,{field:"words",label:"Words"}),Object(O.jsx)(E,{field:"titles",label:"Titles"}),Object(O.jsx)(E,{field:"ancestralWeapons",label:"Ancestral Weapons"})]});return Object(O.jsx)(M,{left:e,right:t})}}]),r}(s.Component),T=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).gotService=new C,e}return Object(d.a)(r,[{key:"render",value:function(){return Object(O.jsxs)(W,{itemId:this.props.bookId,getData:this.gotService.getBook,children:[Object(O.jsx)(E,{field:"numberOfPages",label:"Number of pages"}),Object(O.jsx)(E,{field:"publisher",label:"Publisher"}),Object(O.jsx)(E,{field:"released",label:"Released"})]})}}]),r}(s.Component),U=(r(54),function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).gotService=new C,e.state={showRandomChar:!0,error:!1},e.toggleRandomChar=function(){e.setState((function(e){return{showRandomChar:!e.showRandomChar}}))},e}return Object(d.a)(r,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this.state.showRandomChar?Object(O.jsx)(_,{}):null;return this.state.error?Object(O.jsx)(D,{}):Object(O.jsx)(m.a,{children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(b.b,{children:Object(O.jsx)(S,{})}),Object(O.jsxs)(b.b,{children:[Object(O.jsx)(b.c,{children:Object(O.jsxs)(b.a,{lg:{size:5,offset:0},children:[Object(O.jsx)("button",{className:"toggle-btn",onClick:this.toggleRandomChar,children:"Hide/Show"}),e]})}),Object(O.jsx)(z.a,{path:"/characters",component:P}),Object(O.jsx)(z.a,{path:"/houses",component:J}),Object(O.jsx)(z.a,{path:"/books",exact:!0,component:G}),Object(O.jsx)(z.a,{path:"/books/:id",render:function(e){var t=e.match.params.id;return Object(O.jsx)(T,{bookId:t})}})]})]})})}}]),r}(s.Component)),$=U;l.a.render(Object(O.jsx)($,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8f6d72e8.chunk.js.map