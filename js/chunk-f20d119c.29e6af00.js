(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f20d119c"],{"07bd":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.$vuetify.breakpoint.mobile?e._e():i("v-btn",{attrs:{fab:"",bottom:"",right:"",fixed:"",dark:""},on:{click:e.toggleDrawer}},[i("v-icon",[e._v("mdi-view-list")])],1),e.$vuetify.breakpoint.mobile?e._e():i("v-navigation-drawer",{attrs:{right:"",absolute:"",dark:"",temporary:"",width:"200",color:"green darken-3"},model:{value:e.drawerOpen,callback:function(t){e.drawerOpen=t},expression:"drawerOpen"}},[i("v-list",{attrs:{nav:""}},[i("h3",[e._v("Projects")]),e._l(e.projects,(function(t){return i("v-list-item",{key:t.title},[i("v-btn",{attrs:{text:"",to:"/portfolio/"+t.id}},[e._v(" "+e._s(t.title)+" ")])],1)}))],2)],1),i("base-container",{attrs:{title:e.selectedProject.title}},[i("v-row",{staticClass:"mx-5"},[i("v-col",{attrs:{cols:"12"}},[i("v-img",{staticClass:"float-center ma-4 ml-0",attrs:{src:e.selectedProject.largeImg}}),i("p",[e._v(e._s(e.selectedProject.description))])],1)],1),i("v-row",{staticClass:"mx-5"},[i("v-col",{attrs:{cols:"12",md:"6"}},[i("h3",[e._v("Technologies Used:")]),i("v-list",e._l(e.selectedProject.technologies,(function(t){return i("v-list-item",{key:t},[e._v(" "+e._s(t)+" ")])})),1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("h3",[e._v("Project Links:")]),i("v-list",[i("v-list-item",[i("base-button",{attrs:{color:"black",link:e.selectedProject.github,icon:"mdi-github",target:"_blank"}},[e._v(" GitHub ")])],1),i("v-list-item",[i("base-button",{attrs:{color:"purple",icon:"mdi-open-in-new",link:e.selectedProject.deploy,target:"_blank"}},[e._v(" Deployed Page ")])],1)],1)],1)],1)],1)],1)},o=[],r=(i("7db0"),i("6c78")),n={props:{projectId:String},data:function(){return{projects:r["a"],selectedProject:null,drawerOpen:!1}},methods:{toggleDrawer:function(){this.drawerOpen=!0},selectProject:function(){var e=this;this.selectedProject=r["a"].find((function(t){return t.id===e.projectId}))}},watch:{projectId:function(){this.selectProject()}},created:function(){this.selectProject()}},s=n,c=i("2877"),l=i("6544"),p=i.n(l),d=i("8336"),g=i("62ad"),u=i("132d"),h=i("adda"),m=i("8860"),b=i("da13"),f=i("f774"),v=i("0fd9"),_=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=_.exports;p()(_,{VBtn:d["a"],VCol:g["a"],VIcon:u["a"],VImg:h["a"],VList:m["a"],VListItem:b["a"],VNavigationDrawer:f["a"],VRow:v["a"]})},"2d16":function(e,t,i){e.exports=i.p+"img/Train_Schedule.5de62765.png"},"36dd":function(e,t,i){e.exports=i.p+"img/Plan_and_Go.01f9b51b.png"},"593f":function(e,t,i){e.exports=i.p+"img/Eat_da_Burger.ab535908.png"},"627d":function(e,t,i){e.exports=i.p+"img/escape.bc62c85e.png"},"6c78":function(e,t,i){"use strict";var a=i("36dd"),o=i.n(a),r=i("c3fb"),n=i.n(r),s=i("593f"),c=i.n(s),l=i("2d16"),p=i.n(l),d=i("bfe7"),g=i.n(d),u=i("627d"),h=i.n(u),m=i("74bb"),b=i.n(m),f=i("def2"),v=i.n(f),_=i("9571"),k=i.n(_),w=i("bee7"),j=i.n(w),y=i("aa4a"),S=i.n(y),P=i("8619"),x=i.n(P);t["a"]=[{id:"plan_and_go",title:"Plan and Go",description:"Plan and Go is an app where users can look for attractions at a searched destination and find nearby hotels.",technologies:["HTML/CSS","Javascript","Bulma","JQuery","LocationIQ","Leaflet"],image:o.a,largeImg:b.a,github:"https://github.com/zirris512/project-1",deploy:"https://zirris512.github.io/project-1/"},{id:"epic_adventure",title:"Epic Adventure!",description:"Epic Adventure is a choose your own adventure story. The user makes choices and winds up at an ending based on those choices.",technologies:["HTML/CSS","Javascript","JQuery","Pug","MySQL","Sequelize","Express","Nodejs"],image:n.a,largeImg:v.a,github:"https://github.com/zirris512/Project2",deploy:"https://ku-project2-group3.herokuapp.com/"},{id:"eat_da_burger",title:"Eat-da-Burger",description:"A small project where the user could add items to a list. Then, remove and add them to another list from the database.",technologies:["HTML/CSS","Javascript","JQuery","Bootstrap","MySQL","Handlebars"],image:c.a,largeImg:k.a,github:"https://github.com/zirris512/burger",deploy:"https://burgerappbse.herokuapp.com/"},{id:"train_schedule",title:"Train Schedule",description:"A small project where the user could enter values into a form and update the table with the new values and times.",technologies:["HTML/CSS","Javascript","JQuery","Bootstrap","Momentjs","Firebase"],image:p.a,largeImg:j.a,github:"https://github.com/zirris512/Train_Schedule",deploy:"https://zirris512.github.io/Train_Schedule/"},{id:"clicky_game",title:"Clicky Game",description:"An app where the user tries to click on images that have not been previously clicked to increase their score. The goal is to achieve the highest score possible out of 12.",technologies:["HTML/CSS","Javascript","Reactjs","Bootstrap"],image:g.a,largeImg:S.a,github:"https://github.com/zirris512/clicky-game",deploy:"https://zirris512.github.io/clicky-game/"},{id:"escape_room",title:"Escape Room",description:"",technologies:["HTML/CSS","Javascript","Reactjs","React-Router","MongoDB","Mongoose","Passport","SCSS"],image:h.a,largeImg:x.a,github:"https://github.com/zirris512/escaperoom",deploy:"https://shipescaperoom.herokuapp.com/"}]},"74bb":function(e,t,i){e.exports=i.p+"img/plan_and_go_lg.9f94a3c8.png"},8619:function(e,t,i){e.exports=i.p+"img/escape_room_lg.132e98dc.png"},9571:function(e,t,i){e.exports=i.p+"img/eat_da_burger_lg.81b4a485.png"},aa4a:function(e,t,i){e.exports=i.p+"img/clicky_game_lg.37f7e7b3.png"},bee7:function(e,t,i){e.exports=i.p+"img/train_schedule_lg.10197796.png"},bfe7:function(e,t,i){e.exports=i.p+"img/Clicky_home.49b4196f.png"},c3fb:function(e,t,i){e.exports=i.p+"img/Epic_Adventure.d437fab5.png"},def2:function(e,t,i){e.exports=i.p+"img/epic_adventure_lg.f8a047ad.png"}}]);
//# sourceMappingURL=chunk-f20d119c.29e6af00.js.map