webpackJsonp([10],{YjdK:function(t,e){},wh9G:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{conHeight:0,checkDefault:[],groupList:[],classifyList:[],addVisible:!1,addClassVisible:!1,confirmVisible:!1,isDialogDeleMateriel:!1,classifyName:"",isEdit:!1,selectGroup:{},isGroupSelect:!1,gatewayOptions:[],dialogTitle:"",equips:[],handleType:"",groupObj:{id:"",name:""},classForm:{id:"",name:"",remarks:""},type:"",groupId:"",selectedVariate:{},variatesList:{},parentId:0}},computed:{},watch:{checkDefault:function(t,e){t&&this.$nextTick(function(){document.querySelector(".el-tree-node__content").click()})}},created:function(){this.getGroup()},mounted:function(){var t=this;this.$nextTick(function(){t.conHeight=t.$refs.conBox.offsetHeight-20}),window.addEventListener("resize",function(){t.$nextTick(function(){t.conHeight=t.$refs.conBox.offsetHeight-20})})},methods:{nodeClick:function(t){this.selectGroup.id=t.id,this.selectGroup.name=t.name,this.isGroupSelect=!0,this.groupId=t.id,this.getClassifyList()},changeEdit:function(t){this.isEdit=t,this.getDetail(this.selectGroup)},showDialog:function(t){var e=this;this.handleType=t,"add"==t?(this.dialogTitle="新增大类",this.addVisible=!0,this.groupObj.id="",this.groupObj.name=""):"edit"==t?(this.dialogTitle="编辑大类",this.addVisible=!0,this.groupObj.id=this.selectGroup.id,this.groupObj.name=this.selectGroup.name):"delete"==t&&(this.confirmVisible=!0),this.$nextTick(function(){e.$refs.groupForm.clearValidate()})},openDialog:function(t,e){this.type=t,"add"==t?(this.dialogTitle="新增子类",this.addClassVisible=!0,this.classForm.name="",this.classForm.remarks=""):"edit"==t?(this.dialogTitle="修改子类",this.addClassVisible=!0,this.classForm.id=e.id,this.classForm.name=e.name,this.classForm.remarks=e.remarks):"delete"==t&&(this.classForm.id=e.id,this.classifyName=e.name,this.isDialogDeleMateriel=!0)},handleClassify:function(){"add"==this.type?this.addClassify():"edit"==this.type?this.updateClassify():"delete"==this.type&&this.deleteClassify()},addClassify:function(){var t=this;this.$refs.classForm.validate(function(e){if(e){var i={name:t.classForm.name,remarks:t.classForm.remarks,groupId:t.groupId};t.$post("/classify/add",i).then(function(e){0==e.code?(t.$notify({title:"成功",message:"子类新增成功",type:"success"}),t.classForm.name="",t.classForm.remarks="",t.getClassifyList()):t.$notify.error(e.msg)}).catch(function(e){t.$notify.error("子类新增失败")}),t.closeDialog()}})},updateClassify:function(){var t=this;this.$refs.classForm.validate(function(e){if(e){var i={id:t.classForm.id,name:t.classForm.name,remarks:t.classForm.remarks,groupId:t.groupId};t.$post("/classify/modify",i).then(function(e){0==e.code?(t.$notify({title:"成功",message:"子类修改成功",type:"success"}),t.classForm.id="",t.classForm.name="",t.classForm.remarks="",t.getClassifyList()):t.$notify.error(e.msg)}).catch(function(e){t.$notify.error("子类修改失败")}),t.closeDialog()}})},deleteClassify:function(){var t=this,e={id:this.classForm.id};this.$get("/classify/delete",e).then(function(e){0==e.code?(t.$notify({title:"成功",message:"子类删除成功",type:"success"}),t.getClassifyList()):t.$notify.error(e.msg)}),this.classForm.id="",this.classForm.name="",this.classForm.remarks="",this.classifyName="",this.closeDialog()},closeDialog:function(){this.addVisible=!1,this.confirmVisible=!1,this.handleType="",this.addClassVisible=!1,this.isDialogDeleMateriel=!1,this.type=""},getGroup:function(t){var e=this;this.$get("/group/findAll",{}).then(function(t){0==t.code&&(e.groupList=t.data,t.data.length>0&&(e.checkDefault.push(t.data[0].id),e.groupId=t.data[0].id))})},getClassifyList:function(){var t=this;if(this.groupId){var e={id:this.groupId};this.$get("/group/getClassify",e).then(function(e){0==e.code&&(t.classifyList=e.data)})}},handleGroup:function(){"add"==this.handleType?this.addGroup():"edit"==this.handleType?this.updateGroup():"delete"==this.handleType&&this.deleteGroup()},addGroup:function(){var t=this;this.$refs.groupForm.validate(function(e){if(e){var i={name:t.groupObj.name};t.$post("/group/add",i).then(function(e){0==e.code?(t.$notify({title:"成功",message:"大类新增成功",type:"success"}),t.groupObj.name="",t.getGroup()):t.$notify.error(e.msg)}).catch(function(e){t.$notify.error("新增大类失败")})}t.closeDialog()})},updateGroup:function(){var t=this;if(this.groupId){var e={id:this.groupObj.id,name:this.groupObj.name};this.$post("/group/modify",e).then(function(e){0==e.code?(t.$notify({title:"成功",message:"大类修改成功",type:"success"}),t.groupObj.id="",t.groupObj.name="",t.getGroup(),t.closeDialog()):t.$message.error(e.msg)}).catch(function(e){t.$notify.error("修改大类失败")})}},deleteGroup:function(){var t=this;if(this.groupId){var e={id:this.groupId};this.$get("/group/delete",e).then(function(e){0==e.code?(t.$notify({title:"成功",message:"删除成功",type:"success"}),t.groupObj.id="",t.groupObj.name="",t.getGroup()):t.$message.error(e.msg)}).catch(function(e){t.$notify.error("删除大类失败")}),this.closeDialog()}}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"groups"},[i("div",{staticClass:"content-main"},[i("div",{staticClass:"left-con inner"},[i("div",{staticClass:"btn-box"},[i("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-plus"},on:{click:function(e){return t.showDialog("add")}}},[t._v("新增大类")]),t._v(" "),i("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-edit",disabled:!t.isGroupSelect},on:{click:function(e){return t.showDialog("edit")}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",disabled:!t.isGroupSelect},on:{click:function(e){return t.showDialog("delete")}}},[t._v("删除")])],1),t._v(" "),i("div",{staticClass:"tree-box"},[i("el-tree",{ref:"treeBox",attrs:{data:t.groupList,"node-key":"id",props:{label:"name"},"default-expanded-keys":t.checkDefault,"check-on-click-node":!0,"highlight-current":!0},on:{"node-click":t.nodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.node;return i("div",{staticClass:"tree_item"},[i("i",{class:{"el-icon-folder-opened":1==s.level}}),t._v(" "),i("span",{staticClass:"has_ellipsis",attrs:{title:s.label}},[t._v(t._s(s.label))])])}}])})],1)]),t._v(" "),i("div",{staticClass:"right-con inner"},[i("div",{staticClass:"title-box"},[i("div",{staticClass:"btn-box fr"},[i("el-button",{staticClass:"confirm",attrs:{type:"success",size:"mini",icon:"el-icon-plus",disabled:!t.selectGroup.id},on:{click:function(e){return t.openDialog("add")}}},[t._v("添加子类")])],1)]),t._v(" "),i("div",{ref:"conBox",staticClass:"var-list"},[i("el-table",{attrs:{"header-cell-style":{"background-color":"#e3e3e3"},stripe:"",data:t.classifyList,border:"",size:"mini","max-height":t.conHeight}},[i("el-table-column",{attrs:{type:"index",label:"子类编号",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"子类名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"remarks",label:"子类描述",width:""}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{staticClass:"edit-tooltip",attrs:{effect:"dark",offset:"-20",content:"详情",placement:"top-start"}},[i("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"warning"},on:{click:function(i){return t.openDialog("edit",e.row)}}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"删除",placement:"top-start"}},[i("el-button",{staticClass:"del",attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(i){return t.openDialog("delete",e.row)}}})],1)]}}])})],1)],1)])]),t._v(" "),i("el-dialog",{attrs:{title:t.dialogTitle,visible:t.addVisible,width:"500px"},on:{"update:visible":function(e){t.addVisible=e}}},[i("el-form",{ref:"groupForm",staticClass:"group-form",attrs:{model:t.groupObj,"label-width":"120px"}},[i("el-form-item",{attrs:{prop:"name",label:"大类名称：",rules:[{required:!0,message:"请输入大类名称",trigger:"blur"}]}},[i("el-input",{staticStyle:{width:"80%"},model:{value:t.groupObj.name,callback:function(e){t.$set(t.groupObj,"name","string"==typeof e?e.trim():e)},expression:"groupObj.name"}})],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleGroup}},[t._v("确 定")]),t._v(" "),i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.confirmVisible,width:"370px"},on:{"update:visible":function(e){t.confirmVisible=e}}},[i("div",{staticClass:"tips-con"},[t._v("\n      确认删除 \n      "),i("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[t._v(t._s(t.selectGroup.name)+"  ")]),t._v("吗？\n    ")]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleGroup}},[t._v("确 定")]),t._v(" "),i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:t.dialogTitle,visible:t.addClassVisible,width:"500px"},on:{"update:visible":function(e){t.addClassVisible=e}}},[i("el-form",{ref:"classForm",staticClass:"group-form",attrs:{model:t.classForm,"label-width":"120px"}},[i("el-form-item",{attrs:{prop:"name",label:"子类名称:",rules:[{required:!0,message:"请输入子类名称",trigger:"blur"}]}},[i("el-input",{staticStyle:{width:"80%"},model:{value:t.classForm.name,callback:function(e){t.$set(t.classForm,"name","string"==typeof e?e.trim():e)},expression:"classForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"remarks",label:"子类描述:"}},[i("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea"},model:{value:t.classForm.remarks,callback:function(e){t.$set(t.classForm,"remarks","string"==typeof e?e.trim():e)},expression:"classForm.remarks"}})],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleClassify}},[t._v("确 定")]),t._v(" "),i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.isDialogDeleMateriel,"close-on-click-modal":!1,width:"500px",title:"删除物料"},on:{"update:visible":function(e){t.isDialogDeleMateriel=e}}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("span",[t._v("确定删除子类\n        "),i("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[t._v(t._s(t.classifyName)+" ")]),t._v("吗？")])]),t._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleClassify}},[t._v("确 定")]),t._v(" "),i("el-button",{on:{click:function(e){t.isDialogDeleMateriel=!1}}},[t._v("取 消")])],1)])],1)},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("YjdK")},"data-v-0c239d93",null);e.default=a.exports}});
//# sourceMappingURL=10.277d5aaf4a7b2e748769.js.map