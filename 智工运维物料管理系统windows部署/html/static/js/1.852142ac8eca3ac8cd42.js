webpackJsonp([1],{"+Okl":function(e,t){},"/1sR":function(e,t){},"4Ya8":function(e,t){},"5YQ4":function(e,t){},N7K5:function(e,t){},QX7T:function(e,t){},dH1o:function(e,t){},j7e0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),i=a("woOf"),l=a.n(i),r=a("Dd8w"),o=a.n(r),c=a("NYxO"),u={name:"setUp",data:function(){return{visible:!1,language:"en"}},computed:o()({},Object(c.c)("common",{lang:"language"}),{setUp:function(){return{setting:this.$t("language.setting"),languageSettings:this.$t("language.languageSettings"),zh:this.$t("language.zh"),en:this.$t("language.en")}}}),methods:o()({},Object(c.b)("common",["updateLanguage"]),{init:function(){this.visible=!0,this.language=this.lang,this.$i18n.locale=this.lang}}),watch:{language:function(e){this.updateLanguage(e),this.$i18n.locale=this.lang}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.setUp.setting,visible:e.visible,"append-to-body":!0},on:{"update:visible":function(t){e.visible=t}}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7,offset:2}},[e._v("\n\t\t\t"+e._s(e.setUp.languageSettings)+"\n\t\t")]),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"zh"},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},[e._v(e._s(e.setUp.zh))])],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"en"},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},[e._v(e._s(e.setUp.en))])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(u,d,!1,function(e){a("N7K5")},null,null).exports,h=a("zSLJ"),p={name:"Header",data:function(){return{foldAside:!0,setUpVisible:!1}},components:{Setup:m},computed:o()({},Object(c.c)("user",["userName"]),{language:function(){return{foldAside:this.$t("header.foldAside"),unFoldAside:this.$t("header.unFoldAside"),setUp:this.$t("header.setUp"),help:this.$t("header.help"),blogAddress:this.$t("header.blogAddress"),codeAddress:this.$t("header.codeAddress"),userSetUp:this.$t("header.userSetUp"),updatePassword:this.$t("header.updatePassword"),logOut:this.$t("header.logOut")}}}),methods:{foldOrOpen:function(){this.foldAside=!this.foldAside,this.$emit("foldOrOpenAside",this.foldAside)},logout:function(){var e=this;this.$post("/user/logout",{}).then(function(t){0==t.code?(Object(h.a)("uuid"),e.$router.push("/")):e.$message.error(t.msg)})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-title",on:{click:e.foldOrOpen}},[e.foldAside?a("a",{staticClass:"el-icon-s-fold",staticStyle:{color:"#f5a623"},attrs:{title:e.language.foldAside}}):a("a",{staticClass:"el-icon-s-unfold",staticStyle:{color:"#f5a623"},attrs:{title:e.language.unFoldAside}})]),e._v(" "),a("div",{staticClass:"header-menu"},[a("el-menu",{staticClass:"header-menu-submenu",attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{title:e.language.userSetUp,index:"3"}},[a("template",{slot:"title"},[a("span",{staticClass:"header-span"},[e._v(e._s(e.userName))])]),e._v(" "),a("el-menu-item",{staticStyle:{background:"#3B77E3",color:"white"},attrs:{index:"3-1"},on:{click:e.logout}},[a("i",{staticClass:"el-icon-close",staticStyle:{color:"white"}}),e._v(e._s(e.language.logOut)+"\n          ")])],2)],1),e._v(" "),a("el-avatar",{staticStyle:{float:"right","margin-top":"12px",color:"lightgreen"},attrs:{size:"small",icon:"el-icon-user-solid"}})],1),e._v(" "),e.setUpVisible?a("Setup",{ref:"setUp"}):e._e()],1)},staticRenderFns:[]};var f=a("VU/8")(p,v,!1,function(e){a("5YQ4")},null,null).exports,g={name:"DynamicMenu",props:{menu:{type:Object,required:!0}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-submenu",{attrs:{index:e.menu.name}},[a("template",{slot:"title"},[a("i",{class:e.menu.meta.icon}),e._v(" "),a("span",[e._v(e._s("zh"===e.$i18n.locale?e.menu.meta.name_zh:e.menu.meta.name_en))])]),e._v(" "),e._l(e.menu.children,function(t){return a("el-menu-item",{key:t.meta.menuId,attrs:{index:t.name},on:{click:function(a){return e.$router.push({name:t.name})}}},[a("i",{class:t.meta.icon}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s("zh"===e.$i18n.locale?t.meta.name_zh:t.meta.name_en))])])})],2)},staticRenderFns:[]};var _={name:"Aside",props:["foldAside"],data:function(){return{asideWidth:"200px",iconSize:"true"}},components:{DynamicMenu:a("VU/8")(g,b,!1,function(e){a("/1sR")},null,null).exports},computed:o()({},Object(c.c)("common",["menuActiveName","mainTabs","dynamicRoutes"]),{language:function(){return{adminCenter:this.$t("aside.adminCenter"),admin:this.$t("aside.admin"),homePage:this.$t("aside.homePage"),inventory:this.$t("aside.inventory"),material:this.$t("aside.material"),addMaterial:this.$t("aside.addMaterial"),checkIn:this.$t("aside.checkIn"),checkOut:this.$t("aside.checkOut"),currentList:this.$t("aside.currentList"),listRecord:this.$t("aside.listRecord"),classification:this.$t("aside.classification")}}}),methods:o()({},Object(c.b)("common",["updateMenuActiveName","updateMainTabs","updateMainTabsActiveName"])),watch:{foldAside:function(e){this.asideWidth=e?"200px":"64px",this.iconSize=e},$route:function(e){if(this.updateMenuActiveName(e.name),e.meta.isTab){var t=this.mainTabs.filter(function(t){return t.name===e.name})[0];t||(t={name:e.name,params:e.params,query:e.query,type:isURL(e.meta.iframeUrl)?"iframe":"module",iframeUrl:e.meta.iframeUrl||""},this.updateMainTabs(this.mainTabs.concat(t))),this.updateMainTabsActiveName(e.name)}}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("el-aside",{staticClass:"header-logo",attrs:{width:e.asideWidth}},[a("div",{on:{click:function(t){return e.$router.push({name:"Home"})}}},[e.foldAside?a("a",{staticStyle:{"font-size":"18px"}},[e._v(e._s(e.language.adminCenter))]):a("a",{staticStyle:{"font-size":"18px"}},[e._v(e._s(e.language.admin))])])]),e._v(" "),a("el-aside",{staticClass:"aside",class:"icon-size-"+e.iconSize,attrs:{width:e.asideWidth}},[a("el-scrollbar",{staticStyle:{height:"100%",width:"100%"}},[a("el-menu",{staticStyle:{width:"100%"},attrs:{"default-active":e.menuActiveName||"material",collapse:!e.foldAside,collapseTransition:!1,"background-color":"#FFFFFF","text-color":"#8a979e"}},[a("el-submenu",{attrs:{index:"inventory"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-coin"}),e._v(" "),a("span",[e._v(e._s(e.language.inventory))])]),e._v(" "),a("el-menu-item",{attrs:{index:"material"},on:{click:function(t){return e.$router.push({name:"material"})}}},[a("i",{staticClass:"el-icon-cpu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.material))])]),e._v(" "),a("el-menu-item",{attrs:{index:"NewMaterial"},on:{click:function(t){return e.$router.push({name:"NewMaterial"})}}},[a("i",{staticClass:"el-icon-document-add"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.addMaterial))])])],2),e._v(" "),a("el-submenu",{attrs:{index:"checkIn"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-sell"}),e._v(" "),a("span",[e._v(e._s(e.language.checkIn))])]),e._v(" "),a("el-menu-item",{attrs:{index:"currentListIn"},on:{click:function(t){return e.$router.push({name:"currentListIn"})}}},[a("i",{staticClass:"el-icon-shopping-cart-full"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.currentList))])]),e._v(" "),a("el-menu-item",{attrs:{index:"listRecordIn"},on:{click:function(t){return e.$router.push({name:"listRecordIn"})}}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.listRecord))])])],2),e._v(" "),a("el-submenu",{attrs:{index:"checkOut"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-sold-out"}),e._v(" "),a("span",[e._v(e._s(e.language.checkOut))])]),e._v(" "),a("el-menu-item",{attrs:{index:"currentListOut"},on:{click:function(t){return e.$router.push({name:"currentListOut"})}}},[a("i",{staticClass:"el-icon-shopping-cart-full"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.currentList))])]),e._v(" "),a("el-menu-item",{attrs:{index:"listRecordOut"},on:{click:function(t){return e.$router.push({name:"listRecordOut"})}}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.listRecord))])])],2),e._v(" "),a("el-menu-item",{attrs:{index:"classification"},on:{click:function(t){return e.$router.push({name:"classification"})}}},[a("i",{staticClass:"el-icon-s-grid"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.language.classification))])]),e._v(" "),e._l(e.dynamicRoutes,function(e){return a("DynamicMenu",{key:e.meta.menuId,attrs:{menu:e}})})],2)],1)],1)],1)},staticRenderFns:[]};var T=a("VU/8")(_,$,!1,function(e){a("4Ya8")},null,null).exports,A={data:function(){return{}},computed:o()({},Object(c.c)("common",["mainTabs"]),{mainTabsActiveName:{get:function(){return this.$store.state.common.mainTabsActiveName},set:function(e){this.updateMainTabsActiveName(e)}}}),methods:o()({},Object(c.b)("common",["updateMainTabs","updateMainTabsActiveName"]),{selectedTabHandle:function(e){(e=this.mainTabs.filter(function(t){return t.name===e.name})[0])&&this.$router.push({name:e.name,query:e.query,params:e.params})},removeTabHandle:function(e){if(this.updateMainTabs(this.mainTabs.filter(function(t){return t.name!==e})),this.mainTabs.length>0){var t=this.mainTabs[this.mainTabs.length-1];e===this.mainTabsActiveName&&this.$router.push({name:t.name,query:t.query,params:t.params})}else this.updateMainTabsActiveName(""),this.$router.push({name:"HomePage"})},closeCurrentTabsHandle:function(){this.removeTabHandle(this.mainTabsActiveName)},closeOtherTabsHandle:function(){var e=this;this.updateMainTabs(this.mainTabs.filter(function(t){return t.name===e.mainTabsActiveName}))},closeAllTabsHandle:function(){this.updateMainTabs([]),this.updateMainTabsActiveName(""),this.$router.push({name:"HomePage"})},refreshCurrentTabs:function(){var e=this,t=[];l()(t,this.mainTabs);var a=this.mainTabs.filter(function(t){return t.name===e.mainTabsActiveName})[0];this.removeTabHandle(a.name),this.$nextTick(function(){e.updateMainTabs(t),e.$router.push({name:a.name,query:a.query,params:a.params})})}})},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tabs",{staticClass:"tab",attrs:{closable:!0},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.mainTabsActiveName,callback:function(t){e.mainTabsActiveName=t},expression:"mainTabsActiveName"}},[e._l(e.mainTabs,function(t){return a("el-tab-pane",{key:t.name,attrs:{label:t.name,name:t.name}},[a("el-card",{staticClass:"card",attrs:{shadow:"hover"}},["iframe"===t.type?a("iframe",{attrs:{src:t.iframeUrl,width:"100%",height:"650px",frameborder:"0",scrolling:"yes"}}):a("keep-alive",[t.name===e.mainTabsActiveName?a("router-view"):e._e()],1)],1)],1)}),e._v(" "),a("el-dropdown",{staticClass:"dropdown-tool",attrs:{"show-timeout":0}},[a("i",{staticClass:"el-icon-arrow-down"}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.closeCurrentTabsHandle(t)}}},[e._v(e._s(e.$t("tab.closeCurrentTabs")))]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){return e.closeOtherTabsHandle(t)}}},[e._v(e._s(e.$t("tab.closeOtherTabs")))]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){return e.closeAllTabsHandle(t)}}},[e._v(e._s(e.$t("tab.closeAllTabs")))]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){return e.refreshCurrentTabs(t)}}},[e._v(e._s(e.$t("tab.refreshCurrentTabs")))])],1)],1)],2)},staticRenderFns:[]};var k={components:{Tab:a("VU/8")(A,O,!1,function(e){a("+Okl")},"data-v-25e2bedd",null).exports}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-main",{staticClass:"content"},[t("el-card",{staticClass:"card"},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)],1)},staticRenderFns:[]};var w={name:"Home",components:{Aside:T,Header:f,Content:a("VU/8")(k,C,!1,function(e){a("QX7T")},"data-v-5af3f03f",null).exports},data:function(){return{foldAside:!0}},methods:{foldOrOpen:function(e){this.foldAside=e}},created:function(){var e=this;localStorage.getItem("store")&&this.$store.replaceState(l()({},this.$store.state,JSON.parse(localStorage.getItem("store")))),window.addEventListener("beforeunload",function(){localStorage.setItem("store",s()(e.$store.state))})}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-page"},[t("el-container",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}],staticClass:"container",attrs:{"element-loading-text":"拼命加载中","element-loading-background":"rgba(0, 0, 0, 0.8)","element-loading-spinner":"el-icon-loading"}},[t("Aside",{attrs:{foldAside:this.foldAside}}),this._v(" "),t("el-container",{attrs:{direction:"vertical"}},[t("Header",{on:{foldOrOpenAside:this.foldOrOpen}}),this._v(" "),t("Content")],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(w,x,!1,function(e){a("dH1o")},null,null);t.default=y.exports}});
//# sourceMappingURL=1.852142ac8eca3ac8cd42.js.map