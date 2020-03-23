(this["webpackJsonpsars-cov-2-simulator"]=this["webpackJsonpsars-cov-2-simulator"]||[]).push([[0],{115:function(e,t,a){e.exports=a(126)},120:function(e,t,a){},121:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(14),o=a.n(c),l=(a(120),a(156)),s=a(175),u=a(168),m=a(163),d=a(161),f=a(128),p=a(96),E=a.n(p),g=(a(121),a(25)),h=a(159),v=a(59),w=a(42),b=a(127),O=a(171),N=a(170),I=a(99),y=a(176),C=Object(l.a)({slider:{width:150}}),j=function(e){var t=e.title,a=e.onChange,n=e.percent,r=void 0!==n&&n,c=Object(I.a)(e,["title","onChange","percent"]),o=C(),l=function(e){return void 0===e?"":r?"".concat(e,"%"):e};return i.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:0},i.a.createElement(h.a,{item:!0,container:!0,direction:"row",spacing:1,alignItems:"center"},i.a.createElement(h.a,{item:!0},i.a.createElement(d.a,null,l(c.min))),i.a.createElement(h.a,{item:!0,className:o.slider},i.a.createElement(y.a,Object.assign({"aria-labelledby":"discrete-slider",valueLabelDisplay:"on",valueLabelFormat:l,onChangeCommitted:function(e,t){a(c.name,t)}},c))),i.a.createElement(h.a,null,i.a.createElement(d.a,null,l(c.max)))),i.a.createElement(h.a,{item:!0},i.a.createElement(d.a,{id:"discrete-slider",variant:"caption"},t)))},A=[{title:"Average spread (R0)",name:"R0",min:0,max:3,step:.1,defaultValue:2.2},{title:"Average spread shutdown (R0)",name:"shutdownR0",min:0,max:3,step:.1,defaultValue:1.05},{title:"Mortality Rate",name:"mortalityRate",min:0,max:5,step:.1,defaultValue:.5,percent:!0},{title:"Mortality Rate Overflow",name:"mortalityRateOverflow",min:0,max:7,step:.5,defaultValue:3,percent:!0},{title:"Hospitalization Rate",name:"hospitalizationRate",min:0,max:25,step:1,defaultValue:15,percent:!0},{title:"Hospital stay in weeks",name:"hospitalStayInWeeks",min:0,max:2,step:.1,defaultValue:.3}];!function(e){e[e.CHANGE_SLIDER_VALUE=0]="CHANGE_SLIDER_VALUE",e[e.CHANGE_START_DATE=1]="CHANGE_START_DATE",e[e.CHANGE_POPULATION=2]="CHANGE_POPULATION",e[e.CHANGE_BEDS=3]="CHANGE_BEDS"}(n||(n={}));var D=A.reduce((function(e,t){return e[t.name]=t.defaultValue,e}),{});D.infectionStartDate=new Date("1/1/2020"),D.totalPopulation=331e6,D.totalHospitalBeds=1e6;var k=Object(l.a)((function(e){return Object(s.a)({root:{paddingTop:e.spacing(4),paddingLeft:e.spacing(6),paddingRight:e.spacing(2),width:250},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}})}));function S(e,t){switch(t.type){case n.CHANGE_SLIDER_VALUE:return Object(w.a)({},e,Object(v.a)({},t.sliderName,t.value));case n.CHANGE_START_DATE:return Object(w.a)({},e,{infectionStartDate:t.infectionStartDate});case n.CHANGE_POPULATION:return Object(w.a)({},e,{totalPopulation:t.value});case n.CHANGE_BEDS:return Object(w.a)({},e,{totalHospitalBeds:t.value});default:return e}}var T=function(e){var t=e.onChange,a=k(),c=i.a.useReducer(S,D),o=Object(g.a)(c,2),l=o[0],s=o[1];Object(r.useEffect)((function(){t(l)}),[l]);var u=function(e,t){s({type:n.CHANGE_SLIDER_VALUE,sliderName:e,value:t})};return i.a.createElement(b.a,{elevation:3,className:a.root},i.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:8},i.a.createElement(h.a,{item:!0},i.a.createElement(d.a,null,"Control Values")),i.a.createElement(h.a,{item:!0},i.a.createElement(O.a,{label:"Total population",onChange:function(e){s({type:n.CHANGE_POPULATION,value:e.target.value})},value:l.totalPopulation})),i.a.createElement(h.a,{item:!0},i.a.createElement(N.a,{onChange:function(e){s({type:n.CHANGE_START_DATE,infectionStartDate:e})},variant:"inline",value:l.infectionStartDate,label:"Infection Start date"})),i.a.createElement(h.a,{item:!0},i.a.createElement(O.a,{label:"Total hospital beds",onChange:function(e){s({type:n.CHANGE_BEDS,value:e.target.value})},value:l.totalHospitalBeds})),A.map((function(e){return i.a.createElement(h.a,{item:!0,key:e.name},i.a.createElement(j,Object.assign({},e,{onChange:u})))}))))},R=a(76),H=a.n(R),_=a(89),L=a.n(_),G=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4),width:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},chartContainer:{height:"100%"}})})),x=function(e){var t=e.config,a=G();return i.a.createElement(b.a,{elevation:3,className:a.root},i.a.createElement(L.a,{containerProps:{className:a.chartContainer},highcharts:H.a,options:t}))},B=a(74),W=a(173),z=a(90),P=a(174),V=a(165),U=a(162),M=a(92),J=a.n(M),F=a(94),$=a.n(F),q=a(91),K=a.n(q),Q=a(93),X=a.n(Q),Y=a(164),Z=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4)},marginBottom:{marginBottom:e.spacing(2)},marginTop:{marginTop:e.spacing(2)},marginLeft:{marginLeft:e.spacing(2)},marginLeftAuto:{marginLeft:"auto"}})})),ee=function(e){var t=e.shutdownWeeks,a=e.startDate,n=e.computeOptimalWeeks,r=e.onChange,c=Z(),o=i.a.useState([{start:new Date,end:Object(z.a)(new Date,12)}]),l=Object(g.a)(o,2),s=l[0],u=l[1],m=i.a.useState([]),p=Object(g.a)(m,2),E=p[0],v=p[1],w=i.a.useState(!1),O=Object(g.a)(w,2),I=O[0],y=O[1];i.a.useEffect((function(){r(s)}),[s]),i.a.useEffect((function(){v(function(e,t){return e.reduce((function(e,a){for(var n=Object(P.a)(a.start,t),r=Object(P.a)(a.end,t),i=n;i<=r;i++)e[i]=!0;return e}),Array(104).fill(!1))}(s,a))}),[I]),i.a.useEffect((function(){if(t&&a){var e=te(a,t);u(e),v(t)}}),[t,a]);var C=function(e){return function(){s.splice(e,1),u(Object(B.a)(s))}},j=function(e){return function(t){return function(a){e[t]=a,"start"===t&&e.end<a&&(e.end=a),u(Object(B.a)(s))}}},A=function(e){E[Number(e.target.id)]=e.target.checked;var t=te(a,E);v(E),u(t)};return i.a.createElement(b.a,{elevation:3,className:c.root},i.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:2},i.a.createElement(h.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(d.a,{className:c.marginBottom},"Shutdown Dates"),i.a.createElement(h.a,{item:!0},i.a.createElement(h.a,{container:!0,alignItems:"center"},i.a.createElement(W.a,{color:"primary",onChange:function(e){y(e.target.checked)}}),i.a.createElement(d.a,{variant:"body2"},"Week view")))),I?i.a.createElement(h.a,{item:!0,container:!0,direction:"row"},E.map((function(e,t){return i.a.createElement(h.a,{item:!0},i.a.createElement(h.a,{container:!0,alignItems:"center"},i.a.createElement(Y.a,{color:"primary",id:t+"",checked:e,onChange:A}),i.a.createElement(d.a,{variant:"caption"},"Week ".concat(t+1))))}))):s.map((function(e,t){return i.a.createElement(h.a,{container:!0,item:!0,direction:"row",spacing:4,alignItems:"center"},i.a.createElement(h.a,{item:!0},i.a.createElement(N.a,{variant:"inline",onChange:j(e)("start"),value:e.start,label:"Start"})),i.a.createElement(h.a,{item:!0},i.a.createElement(N.a,{variant:"inline",onChange:j(e)("end"),value:e.end,label:"End"})),i.a.createElement(h.a,{item:!0},i.a.createElement(f.a,{onClick:C(t),"aria-label":"delete"},i.a.createElement(K.a,null))))})),i.a.createElement(h.a,{container:!0,item:!0,className:c.marginTop,spacing:2,alignItems:"center"},i.a.createElement(U.a,{variant:"contained",startIcon:i.a.createElement(J.a,null),onClick:function(){var e,t=(null===(e=s[s.length-1])||void 0===e?void 0:e.end)||new Date,a={start:t,end:t};u([].concat(Object(B.a)(s),[a]))}},"Add"),i.a.createElement(U.a,{variant:"contained",className:c.marginLeft,startIcon:i.a.createElement(X.a,null),onClick:function(e){return u([])}},"Reset"),i.a.createElement(U.a,{className:c.marginLeft,variant:"contained",startIcon:i.a.createElement($.a,null),onClick:n},"Optimize Shutdowns"))))};function te(e,t){for(var a=[],n=null,r=0;r<t.length;r++)!t[r]&&n&&(a.push(n),n=null),t[r]&&(n?n.end=Object(z.a)(n.end,1):n={start:Object(z.a)(e,r),end:Object(z.a)(e,r+1)});return n&&a.push(n),a}var ae,ne=a(66),re=a.n(ne),ie=a(98),ce=a(167),oe=a(95),le=a(166),se=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(oe.a)(this,e),this.weekStartDate=void 0,this.weekNum=void 0,this.healthy=0,this.newInfected=0,this.totalInfected=0,this.currentlyInfected=0,this.recovered=0,this.dead=0,this.hospitalized=0,Object.assign(this,t)};function ue(e,t,a,n){return(e*a+t*n)/(a+n)}function me(e,t){try{return t.some((function(t){return Object(le.a)(e,t)}))}catch(a){return!1}}!function(e){e[e.CHANGE_CONTROL=0]="CHANGE_CONTROL",e[e.CHANGE_SHUTDOWN=1]="CHANGE_SHUTDOWN"}(ae||(ae={}));var de=function(e,t){switch(t.type){case ae.CHANGE_CONTROL:return Object(w.a)({},e,{controls:t.controls});case ae.CHANGE_SHUTDOWN:return Object(w.a)({},e,{shutdowns:t.shutdowns});default:return e}};function fe(e){var t,a,n=function(e){var t=e.controls,a=t.totalPopulation,n=t.infectionStartDate,r=t.R0,i=t.shutdownR0,c=t.mortalityRate,o=t.mortalityRateOverflow,l=t.hospitalizationRate,s=t.totalHospitalBeds;c/=100,o/=100,l/=100;for(var u,m=[new se({weekStartDate:n,weekNum:0,healthy:a-1,newInfected:1,totalInfected:1,currentlyInfected:1,recovered:0,dead:0,hospitalized:0})],d=1;d<104;d++){m[d]=new se,m[d].weekStartDate=Object(z.a)(n,d);var f=me(m[d].weekStartDate,e.shutdowns)?i:r,p=m[d-1].healthy/a,E=m[d-1].hospitalized<s?c:ue(c,o,s,m[d-1].hospitalized-s);m[d].newInfected=Math.round(m[d-1].newInfected*f*p),m[d].currentlyInfected=Math.round(m[d].newInfected+m[d-1].newInfected+(d>=2?m[d-2].newInfected:0)),m[d].totalInfected=m[d-1].totalInfected+m[d].newInfected,d>=3&&(m[d].dead=Math.round(m[d-1].dead+m[d-3].newInfected*E),m[d].recovered=m[d-1].recovered+m[d-3].newInfected*(1-E)),d>2&&(m[d].hospitalized=m[d-2].newInfected*l),m[d].healthy=a-(m[d].currentlyInfected+m[d].recovered+m[d].dead),0!==m[d].currentlyInfected||u||(u=d)}return{lastWeekNum:u,weeks:m}}(e),r=n.weeks,i=n.lastWeekNum,c=function(e,t){var a=Object(ce.a)(new Date,t);return e-a}(i,e.controls.infectionStartDate),o=function(e){var t={};return e.forEach((function(e){Object.keys(e).forEach((function(a){t[a]=t[a]||{name:a,data:[],visible:!1},t[a].data.push({x:e.weekStartDate,y:e[a]})}))})),delete t.week,delete t.weekNum,t.totalInfected.visible=!0,t.dead.visible=!0,t.newInfected.visible=!0,Object.values(t)}(r),l={subtitle:{text:""},title:{text:""},yAxis:{type:"logarithmic",title:{text:"Number of people"}},xAxis:{type:"datetime",title:{text:"Date"},gridLineWidth:1,plotBands:(a=e.shutdowns,a.map((function(e){return{color:"#ffcccb",from:e.start,to:e.end}}))),plotLines:[{value:null===(t=r[i])||void 0===t?void 0:t.weekStartDate,color:"#013220"}]},plotOptions:{line:{lineWidth:5}},tooltip:{formatter:function(){return"<b>".concat(this.series.name,"</b>:").concat(re()(this.y)," <br>")+"".concat(Object(ie.a)(this.x,"do MMM y"))}},series:o};return console.log(l),{config:l,weeks:r,weeksToGo:c}}function pe(e,t,a,n,r){var i=e.R0,c=e.shutdownR0,o=e.totalPopulation,l=e.totalHospitalBeds,s=e.mortalityRate,u=e.mortalityRateOverflow,m=e.hospitalizationRate;s/=100,u/=100,m/=100;var d=new se,f=t?c:i,p=a.healthy/o,E=a.hospitalized<l?s:ue(s,u,l,a.hospitalized-l);return d.newInfected=Math.round(a.newInfected*f*p),d.currentlyInfected=d.newInfected+a.newInfected+(null!=n?n.newInfected:0),d.totalInfected=a.totalInfected+d.newInfected,null!=r&&(d.dead=a.dead+r.newInfected*E,d.recovered=a.recovered+r.newInfected*(1-E)),null!=n&&(d.hospitalized=n.newInfected*m),d.healthy=o-(d.currentlyInfected+d.recovered+d.dead),d}var Ee=a(18),ge=a(97),he=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(2),paddingRight:e.spacing(4),flexGrow:1},marginBottom:{marginBottom:e.spacing(2)},marginTop:{marginTop:e.spacing(2)},marginLeft:{marginLeft:e.spacing(2)},marginLeftAuto:{marginLeft:"auto"}})})),ve=function(e){var t=e.title,a=e.value,n=he();return i.a.createElement(b.a,{className:n.root,elevation:3},i.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:3},i.a.createElement(h.a,{item:!0},i.a.createElement(d.a,{variant:"body1"},t)),i.a.createElement(h.a,{item:!0},i.a.createElement(d.a,{variant:"h5"},a))))},we=Object(l.a)((function(e){return Object(s.a)({content:{flexGrow:1,flexBasis:0,display:"flex"},marginBottom:{marginBottom:e.spacing(2)}})})),be=function(){var e,t=we(),a=function(){var e=Object(r.useReducer)(de,{controls:{},shutdowns:[]}),t=Object(g.a)(e,2),a=t[0],n=t[1];return[a,fe(a),function(e){return n({type:ae.CHANGE_CONTROL,controls:e})},function(e){return n({type:ae.CHANGE_SHUTDOWN,shutdowns:e})}]}(),n=Object(g.a)(a,4),c=n[0],o=n[1],l=o.config,s=o.weeks,u=o.weeksToGo,m=n[2],d=n[3],f=i.a.useState(),p=Object(g.a)(f,2),E=p[0],v=p[1];return i.a.createElement(Ee.a,{utils:ge.a},i.a.createElement(h.a,{container:!0,spacing:2,direction:"row"},i.a.createElement(h.a,{item:!0},i.a.createElement(T,{onChange:m})),i.a.createElement(h.a,{item:!0,direction:"column",className:t.content,spacing:2},i.a.createElement(h.a,{item:!0,className:t.marginBottom},i.a.createElement(ee,{shutdownWeeks:E,startDate:c.controls.infectionStartDate,computeOptimalWeeks:function(){v(function(e){for(var t=e.totalPopulation,a=e.totalHospitalBeds,n=[new se({newInfected:1,totalInfected:1,currentlyInfected:1,healthy:t-1})],r=Array(104).fill(!1),i=1;i<104;i++){var c,o,l;c=pe(e,!1,n[i-1],i>=2?n[i-2]:null,i>=3?n[i-3]:null),o=pe(e,!0,c,n[i-1],i>=2?n[i-2]:null),l=pe(e,!0,o,c,n[i-1]),c.hospitalized>a||o.hospitalized>a||l.hospitalized>a?(r[i]=!0,n[i]=pe(e,r[i],n[i-1],i>=2?n[i-2]:null,i>=3?n[i-3]:null)):(r[i]=!1,n[i]=c)}return r}(c.controls))},onChange:d})),i.a.createElement(h.a,{item:!0,container:!0,direction:"row",className:t.marginBottom,spacing:2},i.a.createElement(h.a,{item:!0,className:t.content},i.a.createElement(ve,{title:"Total Shutdown",value:"".concat((e=c.shutdowns,e.reduce((function(e,t){return e+Object(V.a)(t).length}),0))," weeks")})),i.a.createElement(h.a,{item:!0,className:t.content},i.a.createElement(ve,{title:"Time before we play",value:"".concat(u," weeks")})),i.a.createElement(h.a,{item:!0,className:t.content},i.a.createElement(ve,{title:"Deaths",value:re()(s[s.length-1].dead)}))),i.a.createElement(h.a,{item:!0,className:t.content},i.a.createElement(x,{config:l})))))},Oe=a(169),Ne=Object(l.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{paddingTop:e.spacing(2)}})}));var Ie=function(){var e=Ne();return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{position:"static"},i.a.createElement(m.a,null,i.a.createElement(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(E.a,null)),i.a.createElement(d.a,{variant:"h6",className:e.title},"COVID Simulator"))),i.a.createElement(Oe.a,{maxWidth:"lg",className:e.container},i.a.createElement(be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.34567f09.chunk.js.map