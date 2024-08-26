/*! For license information please see 678.b6856e52.js.LICENSE.txt */
"use strict";(self.webpackChunkherzarmband_blog=self.webpackChunkherzarmband_blog||[]).push([[678],{3226:(t,e,s)=>{function i(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(e,"__esModule",{value:!0});var n=s(7213),r=i(n),o=i(s(1139)),a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)};var h,p=function(){function t(t){void 0===t&&(t={}),this._dependencies=[],this.id="",this.name="",this.start="",this.end="",this._progress=.52,Object.assign(this,t)}return Object.defineProperty(t.prototype,"progress",{get:function(){return this._progress||.52},set:function(t){this._progress=t||.52},enumerable:!0,configurable:!0}),t.prototype.setDependencies=function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map((function(t){return t.trim()}))},Object.defineProperty(t.prototype,"dependencies",{get:function(){return this._dependencies},set:function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map((function(t){return t.trim()})).filter(Boolean)},enumerable:!0,configurable:!0}),t}();(h=e.ViewMode||(e.ViewMode={})).QuarterDay="Quarter Day",h.HalfDay="Half Day",h.Day="Day",h.Week="Week",h.Month="Month";var d={viewMode:e.ViewMode.Day,onTasksChange:function(t){},onClick:function(t){},onDateChange:function(t,e,s){},onProgressChange:function(t,e){},onViewChange:function(t){}},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._target=n.createRef(),e._svg=n.createRef(),e._gantt=null,e.state={viewMode:null,tasks:[]},e}return function(t,e){function s(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}(e,t),e.getDerivedStateFromProps=function(t,e){return{viewMode:t.viewMode,tasks:t.tasks.map((function(t){return new p(t)}))}},e.prototype.componentDidUpdate=function(){this._gantt&&(this._gantt.refresh(this.state.tasks),this._gantt.change_view_mode(this.state.viewMode))},e.prototype.componentDidMount=function(){var t=this;this._gantt=new o(this._svg.current,this.state.tasks,{on_click:this.props.onClick,on_view_change:this.props.onViewChange,on_progress_change:function(e,s){t.props.onProgressChange(e,s),t.props.onTasksChange(t.props.tasks)},on_date_change:function(e,s,i){t.props.onDateChange(e,s,i),t.props.onTasksChange(t.props.tasks)}}),this._gantt&&this._gantt.change_view_mode(this.state.viewMode);var e=.5*this._svg.current.clientWidth;this._target.current.scrollLeft=e},e.prototype.render=function(){return r.createElement("div",{style:{overflow:"scroll"},ref:this._target},r.createElement("svg",{ref:this._svg,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}))},e.defaultProps=d,e}(r.Component);e.FrappeGantt=l,e.Task=p},3678:(t,e,s)=>{s.d(e,{tx:()=>i});const{FrappeGantt:i,Task:n,ViewMode:r}=s(3226)},5820:(t,e,s)=>{var i=s(5228),n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,h=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.forward_ref"):60112,_=n?Symbol.for("react.suspense"):60113,c=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,f="function"==typeof Symbol&&Symbol.iterator;function m(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(t,e,s){this.props=t,this.context=e,this.refs=y,this.updater=s||w}function v(){}function k(t,e,s){this.props=t,this.context=e,this.refs=y,this.updater=s||w}b.prototype.isReactComponent={},b.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(m(85));this.updater.enqueueSetState(this,t,e,"setState")},b.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},v.prototype=b.prototype;var $=k.prototype=new v;$.constructor=k,i($,b.prototype),$.isPureReactComponent=!0;var x={current:null},M=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function S(t,e,s){var i,n={},o=null,a=null;if(null!=e)for(i in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(o=""+e.key),e)M.call(e,i)&&!D.hasOwnProperty(i)&&(n[i]=e[i]);var h=arguments.length-2;if(1===h)n.children=s;else if(1<h){for(var p=Array(h),d=0;d<h;d++)p[d]=arguments[d+2];n.children=p}if(t&&t.defaultProps)for(i in h=t.defaultProps)void 0===n[i]&&(n[i]=h[i]);return{$$typeof:r,type:t,key:o,ref:a,props:n,_owner:x.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===r}var Y=/\/+/g,C=[];function H(t,e,s,i){if(C.length){var n=C.pop();return n.result=t,n.keyPrefix=e,n.func=s,n.context=i,n.count=0,n}return{result:t,keyPrefix:e,func:s,context:i,count:0}}function L(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>C.length&&C.push(t)}function j(t,e,s,i){var n=typeof t;"undefined"!==n&&"boolean"!==n||(t=null);var a=!1;if(null===t)a=!0;else switch(n){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case r:case o:a=!0}}if(a)return s(i,t,""===e?"."+O(t,0):e),1;if(a=0,e=""===e?".":e+":",Array.isArray(t))for(var h=0;h<t.length;h++){var p=e+O(n=t[h],h);a+=j(n,p,s,i)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=f&&t[f]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),h=0;!(n=t.next()).done;)a+=j(n=n.value,p=e+O(n,h++),s,i);else if("object"===n)throw s=""+t,Error(m(31,"[object Object]"===s?"object with keys {"+Object.keys(t).join(", ")+"}":s,""));return a}function A(t,e,s){return null==t?0:j(t,"",e,s)}function O(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function W(t,e){t.func.call(t.context,e,t.count++)}function P(t,e,s){var i=t.result,n=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?T(t,i,s,(function(t){return t})):null!=t&&(E(t)&&(t=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,n+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(Y,"$&/")+"/")+s)),i.push(t))}function T(t,e,s,i,n){var r="";null!=s&&(r=(""+s).replace(Y,"$&/")+"/"),A(t,P,e=H(e,r,i,n)),L(e)}var X={current:null};function q(){var t=X.current;if(null===t)throw Error(m(321));return t}var R={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:i};e.Children={map:function(t,e,s){if(null==t)return t;var i=[];return T(t,i,null,e,s),i},forEach:function(t,e,s){if(null==t)return t;A(t,W,e=H(null,null,e,s)),L(e)},count:function(t){return A(t,(function(){return null}),null)},toArray:function(t){var e=[];return T(t,e,null,(function(t){return t})),e},only:function(t){if(!E(t))throw Error(m(143));return t}},e.Component=b,e.Fragment=a,e.Profiler=p,e.PureComponent=k,e.StrictMode=h,e.Suspense=_,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,e.cloneElement=function(t,e,s){if(null==t)throw Error(m(267,t));var n=i({},t.props),o=t.key,a=t.ref,h=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,h=x.current),void 0!==e.key&&(o=""+e.key),t.type&&t.type.defaultProps)var p=t.type.defaultProps;for(d in e)M.call(e,d)&&!D.hasOwnProperty(d)&&(n[d]=void 0===e[d]&&void 0!==p?p[d]:e[d])}var d=arguments.length-2;if(1===d)n.children=s;else if(1<d){p=Array(d);for(var l=0;l<d;l++)p[l]=arguments[l+2];n.children=p}return{$$typeof:r,type:t.type,key:o,ref:a,props:n,_owner:h}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:l,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:t},t.Consumer=t},e.createElement=S,e.createFactory=function(t){var e=S.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:u,render:t}},e.isValidElement=E,e.lazy=function(t){return{$$typeof:g,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:c,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return q().useCallback(t,e)},e.useContext=function(t,e){return q().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return q().useEffect(t,e)},e.useImperativeHandle=function(t,e,s){return q().useImperativeHandle(t,e,s)},e.useLayoutEffect=function(t,e){return q().useLayoutEffect(t,e)},e.useMemo=function(t,e){return q().useMemo(t,e)},e.useReducer=function(t,e,s){return q().useReducer(t,e,s)},e.useRef=function(t){return q().useRef(t)},e.useState=function(t){return q().useState(t)},e.version="16.14.0"},7213:(t,e,s)=>{t.exports=s(5820)},1139:(t,e,s)=>{s.r(e),s.d(e,{default:()=>b});const i="year",n="month",r="day",o="hour",a="minute",h="second",p="millisecond",d={en:["January","February","March","April","May","June","July","August","September","October","November","December"],ru:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"]},l={parse(t,e="-",s=/[.:]/){if(t instanceof Date)return t;if("string"==typeof t){let i,n;const r=t.split(" ");i=r[0].split(e).map((t=>parseInt(t,10))),n=r[1]&&r[1].split(s),i[1]=i[1]-1;let o=i;return n&&n.length&&(4==n.length&&(n[3]="0."+n[3],n[3]=1e3*parseFloat(n[3])),o=o.concat(n)),new Date(...o)}},to_string(t,e=!1){if(!(t instanceof Date))throw new TypeError("Invalid argument type");const s=this.get_date_values(t).map(((t,e)=>(1===e&&(t+=1),u(t+"",6===e?3:2,"0")))),i=`${s[0]}-${s[1]}-${s[2]}`,n=`${s[3]}:${s[4]}:${s[5]}.${s[6]}`;return i+(e?" "+n:"")},format(t,e="YYYY-MM-DD HH:mm:ss.SSS",s="en"){const i=this.get_date_values(t).map((t=>u(t,2,0))),n={YYYY:i[0],MM:u(+i[1]+1,2,0),DD:i[2],HH:i[3],mm:i[4],ss:i[5],SSS:i[6],D:i[2],MMMM:d[s][+i[1]],MMM:d[s][+i[1]]};let r=e;const o=[];return Object.keys(n).sort(((t,e)=>e.length-t.length)).forEach((t=>{r.includes(t)&&(r=r.replace(t,`$${o.length}`),o.push(n[t]))})),o.forEach(((t,e)=>{r=r.replace(`$${e}`,t)})),r},diff(t,e,s=r){let i,n,o,a,h,p,d;return i=t-e,n=i/1e3,a=n/60,o=a/60,h=o/24,p=h/30,d=p/12,s.endsWith("s")||(s+="s"),Math.floor({milliseconds:i,seconds:n,minutes:a,hours:o,days:h,months:p,years:d}[s])},today(){const t=this.get_date_values(new Date).slice(0,3);return new Date(...t)},now:()=>new Date,add(t,e,s){e=parseInt(e,10);const d=[t.getFullYear()+(s===i?e:0),t.getMonth()+(s===n?e:0),t.getDate()+(s===r?e:0),t.getHours()+(s===o?e:0),t.getMinutes()+(s===a?e:0),t.getSeconds()+(s===h?e:0),t.getMilliseconds()+(s===p?e:0)];return new Date(...d)},start_of(t,e){const s={[i]:6,[n]:5,[r]:4,[o]:3,[a]:2,[h]:1,[p]:0};function d(t){return s[t]<=s[e]}const l=[t.getFullYear(),d(i)?0:t.getMonth(),d(n)?1:t.getDate(),d(r)?0:t.getHours(),d(o)?0:t.getMinutes(),d(a)?0:t.getSeconds(),d(h)?0:t.getMilliseconds()];return new Date(...l)},clone(t){return new Date(...this.get_date_values(t))},get_date_values:t=>[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()],get_days_in_month(t){const e=[31,28,31,30,31,30,31,31,30,31,30,31],s=t.getMonth();if(1!==s)return e[s];const i=t.getFullYear();return i%4==0&&i%100!=0||i%400==0?29:28}};function u(t,e,s){return t+="",e|=0,s=String(void 0!==s?s:" "),t.length>e?String(t):((e-=t.length)>s.length&&(s+=s.repeat(e/s.length)),s.slice(0,e)+String(t))}function _(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function c(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg",t);for(let i in e)if("append_to"===i){e.append_to.appendChild(s)}else"innerHTML"===i?s.innerHTML=e.innerHTML:s.setAttribute(i,e[i]);return s}function g(t,e,s,i){const n=function(t,e,s,i,n="0.4s",r="0.1s"){const o=t.querySelector("animate");if(o)return _.attr(o,{attributeName:e,from:s,to:i,dur:n,begin:"click + "+r}),t;const a=c("animate",{attributeName:e,from:s,to:i,dur:n,begin:r,calcMode:"spline",values:s+";"+i,keyTimes:"0; 1",keySplines:f("ease-out")});return t.appendChild(a),t}(t,e,s,i);if(n===t){const t=document.createEvent("HTMLEvents");t.initEvent("click",!0,!0),t.eventName="click",n.dispatchEvent(t)}}function f(t){return{ease:".25 .1 .25 1",linear:"0 0 1 1","ease-in":".42 0 1 1","ease-out":"0 0 .58 1","ease-in-out":".42 0 .58 1"}[t]}_.on=(t,e,s,i)=>{i?_.delegate(t,e,s,i):(i=s,_.bind(t,e,i))},_.off=(t,e,s)=>{t.removeEventListener(e,s)},_.bind=(t,e,s)=>{e.split(/\s+/).forEach((function(e){t.addEventListener(e,s)}))},_.delegate=(t,e,s,i)=>{t.addEventListener(e,(function(t){const e=t.target.closest(s);e&&(t.delegatedTarget=e,i.call(this,t,e))}))},_.closest=(t,e)=>e?e.matches(t)?e:_.closest(t,e.parentNode):null,_.attr=(t,e,s)=>{if(!s&&"string"==typeof e)return t.getAttribute(e);if("object"!=typeof e)t.setAttribute(e,s);else for(let i in e)_.attr(t,i,e[i])};class m{constructor(t,e){this.set_defaults(t,e),this.prepare(),this.draw(),this.bind()}set_defaults(t,e){this.action_completed=!1,this.gantt=t,this.task=e}prepare(){this.prepare_values(),this.prepare_helpers()}prepare_values(){this.invalid=this.task.invalid,this.height=this.gantt.options.bar_height,this.x=this.compute_x(),this.y=this.compute_y(),this.corner_radius=this.gantt.options.bar_corner_radius,this.duration=l.diff(this.task._end,this.task._start,"hour")/this.gantt.options.step,this.width=this.gantt.options.column_width*this.duration,this.progress_width=this.gantt.options.column_width*this.duration*(this.task.progress/100)||0,this.group=c("g",{class:"bar-wrapper "+(this.task.custom_class||""),"data-id":this.task.id}),this.bar_group=c("g",{class:"bar-group",append_to:this.group}),this.handle_group=c("g",{class:"handle-group",append_to:this.group})}prepare_helpers(){SVGElement.prototype.getX=function(){return+this.getAttribute("x")},SVGElement.prototype.getY=function(){return+this.getAttribute("y")},SVGElement.prototype.getWidth=function(){return+this.getAttribute("width")},SVGElement.prototype.getHeight=function(){return+this.getAttribute("height")},SVGElement.prototype.getEndX=function(){return this.getX()+this.getWidth()}}draw(){this.draw_bar(),this.draw_progress_bar(),this.draw_label(),this.draw_resize_handles()}draw_bar(){this.$bar=c("rect",{x:this.x,y:this.y,width:this.width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar",append_to:this.bar_group}),g(this.$bar,"width",0,this.width),this.invalid&&this.$bar.classList.add("bar-invalid")}draw_progress_bar(){this.invalid||(this.$bar_progress=c("rect",{x:this.x,y:this.y,width:this.progress_width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar-progress",append_to:this.bar_group}),g(this.$bar_progress,"width",0,this.progress_width))}draw_label(){c("text",{x:this.x+this.width/2,y:this.y+this.height/2,innerHTML:this.task.name,class:"bar-label",append_to:this.bar_group}),requestAnimationFrame((()=>this.update_label_position()))}draw_resize_handles(){if(this.invalid)return;const t=this.$bar;c("rect",{x:t.getX()+t.getWidth()-9,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle right",append_to:this.handle_group}),c("rect",{x:t.getX()+1,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle left",append_to:this.handle_group}),this.task.progress&&this.task.progress<100&&(this.$handle_progress=c("polygon",{points:this.get_progress_polygon_points().join(","),class:"handle progress",append_to:this.handle_group}))}get_progress_polygon_points(){const t=this.$bar_progress;return[t.getEndX()-5,t.getY()+t.getHeight(),t.getEndX()+5,t.getY()+t.getHeight(),t.getEndX(),t.getY()+t.getHeight()-8.66]}bind(){this.invalid||this.setup_click_event()}setup_click_event(){_.on(this.group,"focus "+this.gantt.options.popup_trigger,(t=>{this.action_completed||("click"===t.type&&this.gantt.trigger_event("click",[this.task]),this.gantt.unselect_all(),this.group.classList.toggle("active"),this.show_popup())}))}show_popup(){if(this.gantt.bar_being_dragged)return;const t=l.format(this.task._start,"MMM D")+" - "+l.format(l.add(this.task._end,-1,"second"),"MMM D");this.gantt.show_popup({target_element:this.$bar,title:this.task.name,subtitle:t,task:this.task})}update_bar_position({x:t=null,width:e=null}){const s=this.$bar;if(t){if(!this.task.dependencies.map((t=>this.gantt.get_bar(t).$bar.getX())).reduce(((e,s)=>t>=s),t))return void(e=null);this.update_attr(s,"x",t)}e&&e>=this.gantt.options.column_width&&this.update_attr(s,"width",e),this.update_label_position(),this.update_handle_position(),this.update_progressbar_position(),this.update_arrow_position()}date_changed(){let t=!1;const{new_start_date:e,new_end_date:s}=this.compute_start_end_date();Number(this.task._start)!==Number(e)&&(t=!0,this.task._start=e),Number(this.task._end)!==Number(s)&&(t=!0,this.task._end=s),t&&this.gantt.trigger_event("date_change",[this.task,e,l.add(s,-1,"second")])}progress_changed(){const t=this.compute_progress();this.task.progress=t,this.gantt.trigger_event("progress_change",[this.task,t])}set_action_completed(){this.action_completed=!0,setTimeout((()=>this.action_completed=!1),1e3)}compute_start_end_date(){const t=this.$bar,e=t.getX()/this.gantt.options.column_width,s=l.add(this.gantt.gantt_start,e*this.gantt.options.step,"hour"),i=t.getWidth()/this.gantt.options.column_width;return{new_start_date:s,new_end_date:l.add(s,i*this.gantt.options.step,"hour")}}compute_progress(){const t=this.$bar_progress.getWidth()/this.$bar.getWidth()*100;return parseInt(t,10)}compute_x(){const{step:t,column_width:e}=this.gantt.options,s=this.task._start,i=this.gantt.gantt_start;let n=l.diff(s,i,"hour")/t*e;if(this.gantt.view_is("Month")){n=l.diff(s,i,"day")*e/30}return n}compute_y(){return this.gantt.options.header_height+this.gantt.options.padding+this.task._index*(this.height+this.gantt.options.padding)}get_snap_position(t){let e,s,i=t;return this.gantt.view_is("Week")?(e=t%(this.gantt.options.column_width/7),s=i-e+(e<this.gantt.options.column_width/14?0:this.gantt.options.column_width/7)):this.gantt.view_is("Month")?(e=t%(this.gantt.options.column_width/30),s=i-e+(e<this.gantt.options.column_width/60?0:this.gantt.options.column_width/30)):(e=t%this.gantt.options.column_width,s=i-e+(e<this.gantt.options.column_width/2?0:this.gantt.options.column_width)),s}update_attr(t,e,s){return s=+s,isNaN(s)||t.setAttribute(e,s),t}update_progressbar_position(){this.$bar_progress.setAttribute("x",this.$bar.getX()),this.$bar_progress.setAttribute("width",this.$bar.getWidth()*(this.task.progress/100))}update_label_position(){const t=this.$bar,e=this.group.querySelector(".bar-label");e.getBBox().width>t.getWidth()?(e.classList.add("big"),e.setAttribute("x",t.getX()+t.getWidth()+5)):(e.classList.remove("big"),e.setAttribute("x",t.getX()+t.getWidth()/2))}update_handle_position(){const t=this.$bar;this.handle_group.querySelector(".handle.left").setAttribute("x",t.getX()+1),this.handle_group.querySelector(".handle.right").setAttribute("x",t.getEndX()-9);const e=this.group.querySelector(".handle.progress");e&&e.setAttribute("points",this.get_progress_polygon_points())}update_arrow_position(){this.arrows=this.arrows||[];for(let t of this.arrows)t.update()}}class w{constructor(t,e,s){this.gantt=t,this.from_task=e,this.to_task=s,this.calculate_path(),this.draw()}calculate_path(){let t=this.from_task.$bar.getX()+this.from_task.$bar.getWidth()/2;const e=()=>this.to_task.$bar.getX()<t+this.gantt.options.padding&&t>this.from_task.$bar.getX()+this.gantt.options.padding;for(;e();)t-=10;const s=this.gantt.options.header_height+this.gantt.options.bar_height+(this.gantt.options.padding+this.gantt.options.bar_height)*this.from_task.task._index+this.gantt.options.padding,i=this.to_task.$bar.getX()-this.gantt.options.padding/2,n=this.gantt.options.header_height+this.gantt.options.bar_height/2+(this.gantt.options.padding+this.gantt.options.bar_height)*this.to_task.task._index+this.gantt.options.padding,r=this.from_task.task._index>this.to_task.task._index,o=this.gantt.options.arrow_curve,a=r?1:0,h=r?-o:o,p=r?n+this.gantt.options.arrow_curve:n-this.gantt.options.arrow_curve;if(this.path=`\n            M ${t} ${s}\n            V ${p}\n            a ${o} ${o} 0 0 ${a} ${o} ${h}\n            L ${i} ${n}\n            m -5 -5\n            l 5 5\n            l -5 5`,this.to_task.$bar.getX()<this.from_task.$bar.getX()+this.gantt.options.padding){const e=this.gantt.options.padding/2-o,r=this.to_task.$bar.getY()+this.to_task.$bar.getHeight()/2-h,p=this.to_task.$bar.getX()-this.gantt.options.padding;this.path=`\n                M ${t} ${s}\n                v ${e}\n                a ${o} ${o} 0 0 1 -${o} ${o}\n                H ${p}\n                a ${o} ${o} 0 0 ${a} -${o} ${h}\n                V ${r}\n                a ${o} ${o} 0 0 ${a} ${o} ${h}\n                L ${i} ${n}\n                m -5 -5\n                l 5 5\n                l -5 5`}}draw(){this.element=c("path",{d:this.path,"data-from":this.from_task.task.id,"data-to":this.to_task.task.id})}update(){this.calculate_path(),this.element.setAttribute("d",this.path)}}class y{constructor(t,e){this.parent=t,this.custom_html=e,this.make()}make(){this.parent.innerHTML='\n            <div class="title"></div>\n            <div class="subtitle"></div>\n            <div class="pointer"></div>\n        ',this.hide(),this.title=this.parent.querySelector(".title"),this.subtitle=this.parent.querySelector(".subtitle"),this.pointer=this.parent.querySelector(".pointer")}show(t){if(!t.target_element)throw new Error("target_element is required to show popup");t.position||(t.position="left");const e=t.target_element;if(this.custom_html){let e=this.custom_html(t.task);e+='<div class="pointer"></div>',this.parent.innerHTML=e,this.pointer=this.parent.querySelector(".pointer")}else this.title.innerHTML=t.title,this.subtitle.innerHTML=t.subtitle,this.parent.style.width=this.parent.clientWidth+"px";let s;e instanceof HTMLElement?s=e.getBoundingClientRect():e instanceof SVGElement&&(s=t.target_element.getBBox()),"left"===t.position&&(this.parent.style.left=s.x+(s.width+10)+"px",this.parent.style.top=s.y+"px",this.pointer.style.transform="rotateZ(90deg)",this.pointer.style.left="-7px",this.pointer.style.top="2px"),this.parent.style.opacity=1}hide(){this.parent.style.opacity=0}}class b{constructor(t,e,s){this.setup_wrapper(t),this.setup_options(s),this.setup_tasks(e),this.change_view_mode(),this.bind_events()}setup_wrapper(t){let e,s;if("string"==typeof t&&(t=document.querySelector(t)),t instanceof HTMLElement)s=t,e=t.querySelector("svg");else{if(!(t instanceof SVGElement))throw new TypeError("Frapp\xe9 Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");e=t}e?(this.$svg=e,this.$svg.classList.add("gantt")):this.$svg=c("svg",{append_to:s,class:"gantt"}),this.$container=document.createElement("div"),this.$container.classList.add("gantt-container");this.$svg.parentElement.appendChild(this.$container),this.$container.appendChild(this.$svg),this.popup_wrapper=document.createElement("div"),this.popup_wrapper.classList.add("popup-wrapper"),this.$container.appendChild(this.popup_wrapper)}setup_options(t){this.options=Object.assign({},{header_height:50,column_width:30,step:24,view_modes:["Quarter Day","Half Day","Day","Week","Month","Year"],bar_height:20,bar_corner_radius:3,arrow_curve:5,padding:18,view_mode:"Day",date_format:"YYYY-MM-DD",popup_trigger:"click",custom_popup_html:null,language:"en"},t)}setup_tasks(t){this.tasks=t.map(((t,e)=>{if(t._start=l.parse(t.start),t._end=l.parse(t.end),l.diff(t._end,t._start,"year")>10&&(t.end=null),t._index=e,!t.start&&!t.end){const e=l.today();t._start=e,t._end=l.add(e,2,"day")}!t.start&&t.end&&(t._start=l.add(t._end,-2,"day")),t.start&&!t.end&&(t._end=l.add(t._start,2,"day"));if(l.get_date_values(t._end).slice(3).every((t=>0===t))&&(t._end=l.add(t._end,24,"hour")),t.start&&t.end||(t.invalid=!0),"string"==typeof t.dependencies||!t.dependencies){let e=[];t.dependencies&&(e=t.dependencies.split(",").map((t=>t.trim())).filter((t=>t))),t.dependencies=e}return t.id||(t.id=function(t){return t.name+"_"+Math.random().toString(36).slice(2,12)}(t)),t})),this.setup_dependencies()}setup_dependencies(){this.dependency_map={};for(let t of this.tasks)for(let e of t.dependencies)this.dependency_map[e]=this.dependency_map[e]||[],this.dependency_map[e].push(t.id)}refresh(t){this.setup_tasks(t),this.change_view_mode()}change_view_mode(t=this.options.view_mode){this.update_view_scale(t),this.setup_dates(),this.render(),this.trigger_event("view_change",[t])}update_view_scale(t){this.options.view_mode=t,"Day"===t?(this.options.step=24,this.options.column_width=38):"Half Day"===t?(this.options.step=12,this.options.column_width=38):"Quarter Day"===t?(this.options.step=6,this.options.column_width=38):"Week"===t?(this.options.step=168,this.options.column_width=140):"Month"===t?(this.options.step=720,this.options.column_width=120):"Year"===t&&(this.options.step=8760,this.options.column_width=120)}setup_dates(){this.setup_gantt_dates(),this.setup_date_values()}setup_gantt_dates(){this.gantt_start=this.gantt_end=null;for(let t of this.tasks)(!this.gantt_start||t._start<this.gantt_start)&&(this.gantt_start=t._start),(!this.gantt_end||t._end>this.gantt_end)&&(this.gantt_end=t._end);this.gantt_start=l.start_of(this.gantt_start,"day"),this.gantt_end=l.start_of(this.gantt_end,"day"),this.view_is(["Quarter Day","Half Day"])?(this.gantt_start=l.add(this.gantt_start,-7,"day"),this.gantt_end=l.add(this.gantt_end,7,"day")):this.view_is("Month")?(this.gantt_start=l.start_of(this.gantt_start,"year"),this.gantt_end=l.add(this.gantt_end,1,"year")):this.view_is("Year")?(this.gantt_start=l.add(this.gantt_start,-2,"year"),this.gantt_end=l.add(this.gantt_end,2,"year")):(this.gantt_start=l.add(this.gantt_start,-1,"month"),this.gantt_end=l.add(this.gantt_end,1,"month"))}setup_date_values(){this.dates=[];let t=null;for(;null===t||t<this.gantt_end;)t=t?this.view_is("Year")?l.add(t,1,"year"):this.view_is("Month")?l.add(t,1,"month"):l.add(t,this.options.step,"hour"):l.clone(this.gantt_start),this.dates.push(t)}bind_events(){this.bind_grid_click(),this.bind_bar_events()}render(){this.clear(),this.setup_layers(),this.make_grid(),this.make_dates(),this.make_bars(),this.make_arrows(),this.map_arrows_on_bars(),this.set_width(),this.set_scroll_position()}setup_layers(){this.layers={};const t=["grid","date","arrow","progress","bar","details"];for(let e of t)this.layers[e]=c("g",{class:e,append_to:this.$svg})}make_grid(){this.make_grid_background(),this.make_grid_rows(),this.make_grid_header(),this.make_grid_ticks(),this.make_grid_highlights()}make_grid_background(){const t=this.dates.length*this.options.column_width,e=this.options.header_height+this.options.padding+(this.options.bar_height+this.options.padding)*this.tasks.length;c("rect",{x:0,y:0,width:t,height:e,class:"grid-background",append_to:this.layers.grid}),_.attr(this.$svg,{height:e+this.options.padding+100,width:"100%"})}make_grid_rows(){const t=c("g",{append_to:this.layers.grid}),e=c("g",{append_to:this.layers.grid}),s=this.dates.length*this.options.column_width,i=this.options.bar_height+this.options.padding;let n=this.options.header_height+this.options.padding/2;for(let r of this.tasks)c("rect",{x:0,y:n,width:s,height:i,class:"grid-row",append_to:t}),c("line",{x1:0,y1:n+i,x2:s,y2:n+i,class:"row-line",append_to:e}),n+=this.options.bar_height+this.options.padding}make_grid_header(){c("rect",{x:0,y:0,width:this.dates.length*this.options.column_width,height:this.options.header_height+10,class:"grid-header",append_to:this.layers.grid})}make_grid_ticks(){let t=0,e=this.options.header_height+this.options.padding/2,s=(this.options.bar_height+this.options.padding)*this.tasks.length;for(let i of this.dates){let n="tick";this.view_is("Day")&&1===i.getDate()&&(n+=" thick"),this.view_is("Week")&&i.getDate()>=1&&i.getDate()<8&&(n+=" thick"),this.view_is("Month")&&(i.getMonth()+1)%3==0&&(n+=" thick"),c("path",{d:`M ${t} ${e} v ${s}`,class:n,append_to:this.layers.grid}),this.view_is("Month")?t+=l.get_days_in_month(i)*this.options.column_width/30:t+=this.options.column_width}}make_grid_highlights(){if(this.view_is("Day")){c("rect",{x:l.diff(l.today(),this.gantt_start,"hour")/this.options.step*this.options.column_width,y:0,width:this.options.column_width,height:(this.options.bar_height+this.options.padding)*this.tasks.length+this.options.header_height+this.options.padding/2,class:"today-highlight",append_to:this.layers.grid})}}make_dates(){for(let t of this.get_dates_to_draw())if(c("text",{x:t.lower_x,y:t.lower_y,innerHTML:t.lower_text,class:"lower-text",append_to:this.layers.date}),t.upper_text){const e=c("text",{x:t.upper_x,y:t.upper_y,innerHTML:t.upper_text,class:"upper-text",append_to:this.layers.date});e.getBBox().x2>this.layers.grid.getBBox().width&&e.remove()}}get_dates_to_draw(){let t=null;return this.dates.map(((e,s)=>{const i=this.get_date_info(e,t,s);return t=e,i}))}get_date_info(t,e,s){e||(e=l.add(t,1,"year"));const i={"Quarter Day_lower":l.format(t,"HH",this.options.language),"Half Day_lower":l.format(t,"HH",this.options.language),Day_lower:t.getDate()!==e.getDate()?l.format(t,"D",this.options.language):"",Week_lower:t.getMonth()!==e.getMonth()?l.format(t,"D MMM",this.options.language):l.format(t,"D",this.options.language),Month_lower:l.format(t,"MMMM",this.options.language),Year_lower:l.format(t,"YYYY",this.options.language),"Quarter Day_upper":t.getDate()!==e.getDate()?l.format(t,"D MMM",this.options.language):"","Half Day_upper":t.getDate()!==e.getDate()?t.getMonth()!==e.getMonth()?l.format(t,"D MMM",this.options.language):l.format(t,"D",this.options.language):"",Day_upper:t.getMonth()!==e.getMonth()?l.format(t,"MMMM",this.options.language):"",Week_upper:t.getMonth()!==e.getMonth()?l.format(t,"MMMM",this.options.language):"",Month_upper:t.getFullYear()!==e.getFullYear()?l.format(t,"YYYY",this.options.language):"",Year_upper:t.getFullYear()!==e.getFullYear()?l.format(t,"YYYY",this.options.language):""},n={x:s*this.options.column_width,lower_y:this.options.header_height,upper_y:this.options.header_height-25},r={"Quarter Day_lower":4*this.options.column_width/2,"Quarter Day_upper":0,"Half Day_lower":2*this.options.column_width/2,"Half Day_upper":0,Day_lower:this.options.column_width/2,Day_upper:30*this.options.column_width/2,Week_lower:0,Week_upper:4*this.options.column_width/2,Month_lower:this.options.column_width/2,Month_upper:12*this.options.column_width/2,Year_lower:this.options.column_width/2,Year_upper:30*this.options.column_width/2};return{upper_text:i[`${this.options.view_mode}_upper`],lower_text:i[`${this.options.view_mode}_lower`],upper_x:n.x+r[`${this.options.view_mode}_upper`],upper_y:n.upper_y,lower_x:n.x+r[`${this.options.view_mode}_lower`],lower_y:n.lower_y}}make_bars(){this.bars=this.tasks.map((t=>{const e=new m(this,t);return this.layers.bar.appendChild(e.group),e}))}make_arrows(){this.arrows=[];for(let t of this.tasks){let e=[];e=t.dependencies.map((e=>{const s=this.get_task(e);if(!s)return;const i=new w(this,this.bars[s._index],this.bars[t._index]);return this.layers.arrow.appendChild(i.element),i})).filter(Boolean),this.arrows=this.arrows.concat(e)}}map_arrows_on_bars(){for(let t of this.bars)t.arrows=this.arrows.filter((e=>e.from_task.task.id===t.task.id||e.to_task.task.id===t.task.id))}set_width(){const t=this.$svg.getBoundingClientRect().width,e=this.$svg.querySelector(".grid .grid-row").getAttribute("width");t<e&&this.$svg.setAttribute("width",e)}set_scroll_position(){const t=this.$svg.parentElement;if(!t)return;const e=l.diff(this.get_oldest_starting_date(),this.gantt_start,"hour")/this.options.step*this.options.column_width-this.options.column_width;t.scrollLeft=e}bind_grid_click(){_.on(this.$svg,this.options.popup_trigger,".grid-row, .grid-header",(()=>{this.unselect_all(),this.hide_popup()}))}bind_bar_events(){let t=!1,e=0,s=0,i=!1,n=!1,r=null,o=[];this.bar_being_dragged=null,_.on(this.$svg,"mousedown",".bar-wrapper, .handle",((a,h)=>{const p=_.closest(".bar-wrapper",h);h.classList.contains("left")?i=!0:h.classList.contains("right")?n=!0:h.classList.contains("bar-wrapper")&&(t=!0),p.classList.add("active"),e=a.offsetX,s=a.offsetY,r=p.getAttribute("data-id");const d=[r,...this.get_all_dependent_tasks(r)];o=d.map((t=>this.get_bar(t))),this.bar_being_dragged=r,o.forEach((t=>{const e=t.$bar;e.ox=e.getX(),e.oy=e.getY(),e.owidth=e.getWidth(),e.finaldx=0}))})),_.on(this.$svg,"mousemove",(s=>{if(!(t||i||n))return;const a=s.offsetX-e;s.offsetY;o.forEach((e=>{const s=e.$bar;s.finaldx=this.get_snap_position(a),i?r===e.task.id?e.update_bar_position({x:s.ox+s.finaldx,width:s.owidth-s.finaldx}):e.update_bar_position({x:s.ox+s.finaldx}):n?r===e.task.id&&e.update_bar_position({width:s.owidth+s.finaldx}):t&&e.update_bar_position({x:s.ox+s.finaldx})}))})),document.addEventListener("mouseup",(e=>{(t||i||n)&&o.forEach((t=>t.group.classList.remove("active"))),t=!1,i=!1,n=!1})),_.on(this.$svg,"mouseup",(t=>{this.bar_being_dragged=null,o.forEach((t=>{t.$bar.finaldx&&(t.date_changed(),t.set_action_completed())}))})),this.bind_bar_progress()}bind_bar_progress(){let t=0,e=0,s=null,i=null,n=null,r=null;_.on(this.$svg,"mousedown",".handle.progress",((o,a)=>{s=!0,t=o.offsetX,e=o.offsetY;const h=_.closest(".bar-wrapper",a).getAttribute("data-id");i=this.get_bar(h),n=i.$bar_progress,r=i.$bar,n.finaldx=0,n.owidth=n.getWidth(),n.min_dx=-n.getWidth(),n.max_dx=r.getWidth()-n.getWidth()})),_.on(this.$svg,"mousemove",(e=>{if(!s)return;let r=e.offsetX-t;e.offsetY;r>n.max_dx&&(r=n.max_dx),r<n.min_dx&&(r=n.min_dx);const o=i.$handle_progress;_.attr(n,"width",n.owidth+r),_.attr(o,"points",i.get_progress_polygon_points()),n.finaldx=r})),_.on(this.$svg,"mouseup",(()=>{s=!1,n&&n.finaldx&&(i.progress_changed(),i.set_action_completed())}))}get_all_dependent_tasks(t){let e=[],s=[t];for(;s.length;){const t=s.reduce(((t,e)=>t=t.concat(this.dependency_map[e])),[]);e=e.concat(t),s=t.filter((t=>!s.includes(t)))}return e.filter(Boolean)}get_snap_position(t){let e,s,i=t;return this.view_is("Week")?(e=t%(this.options.column_width/7),s=i-e+(e<this.options.column_width/14?0:this.options.column_width/7)):this.view_is("Month")?(e=t%(this.options.column_width/30),s=i-e+(e<this.options.column_width/60?0:this.options.column_width/30)):(e=t%this.options.column_width,s=i-e+(e<this.options.column_width/2?0:this.options.column_width)),s}unselect_all(){[...this.$svg.querySelectorAll(".bar-wrapper")].forEach((t=>{t.classList.remove("active")}))}view_is(t){return"string"==typeof t?this.options.view_mode===t:!!Array.isArray(t)&&t.some((t=>this.options.view_mode===t))}get_task(t){return this.tasks.find((e=>e.id===t))}get_bar(t){return this.bars.find((e=>e.task.id===t))}show_popup(t){this.popup||(this.popup=new y(this.popup_wrapper,this.options.custom_popup_html)),this.popup.show(t)}hide_popup(){this.popup&&this.popup.hide()}trigger_event(t,e){this.options["on_"+t]&&this.options["on_"+t].apply(null,e)}get_oldest_starting_date(){return this.tasks.map((t=>t._start)).reduce(((t,e)=>e<=t?e:t))}clear(){this.$svg.innerHTML=""}}},5228:t=>{var e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},s=0;s<10;s++)e["_"+String.fromCharCode(s)]=s;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(n){return!1}}()?Object.assign:function(t,n){for(var r,o,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),h=1;h<arguments.length;h++){for(var p in r=Object(arguments[h]))s.call(r,p)&&(a[p]=r[p]);if(e){o=e(r);for(var d=0;d<o.length;d++)i.call(r,o[d])&&(a[o[d]]=r[o[d]])}}return a}}}]);