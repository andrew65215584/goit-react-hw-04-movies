(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[3],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"MoviesPage",(function(){return y}));var n=a(34),r=a.n(n),o=a(35),c=a(12),u=a(13),i=a(15),s=a(14),l=a(0),p=a.n(l),m=a(36),h=a.n(m),f=a(7),d=function(e){var t=e.movies,a=e.location,n=e.query;return console.log(a),p.a.createElement("ul",null,t.map((function(e){return p.a.createElement("li",{key:e.id},p.a.createElement(f.b,{className:"Link",to:{pathname:"/movies/".concat(e.id),state:{from:a.pathname,query:n}}},e.original_title||e.original_name))})))},v="c6a84470b29816d87dd13d4e239e0619",y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,u=new Array(n),i=0;i<n;i++)u[i]=arguments[i];return(e=t.call.apply(t,[this].concat(u))).state={query:"",page:"",movies:[]},e.handleSubmit=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData(a.target),t.next=4,n.forEach((function(t,a){e.setState({query:t})}));case 4:return o=e.state.query,t.next=7,h.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(v,"&language=en-US&page=1&include_adult=false&query=").concat(o));case 7:c=t.sent,e.setState({movies:c.data.results});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.location.query){e.next=5;break}return e.next=3,h.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(v,"&language=en-US&page=1&include_adult=false&query=").concat(this.props.location.query));case 3:t=e.sent,this.setState({movies:t.data.results,query:this.props.location.query});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("form",{onSubmit:this.handleSubmit},p.a.createElement("input",{type:"text",autoComplete:"off",autoFocus:!0,name:"query",placeholder:"Search movies",className:"SearchInput"}),p.a.createElement("button",{type:"submit",className:"SearchInputBtn"},"Search")),p.a.createElement(d,{movies:this.state.movies,location:this.props.location,query:this.state.query}))}}]),a}(l.Component);t.default=y}}]);
//# sourceMappingURL=Movies-Page.9452aa64.chunk.js.map