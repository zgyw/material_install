webpackJsonp([2],{"9bBU":function(e,t,r){r("mClu");var i=r("FeBl").Object;e.exports=function(e,t,r){return i.defineProperty(e,t,r)}},C4MV:function(e,t,r){e.exports={default:r("9bBU"),__esModule:!0}},QYgu:function(e,t){},QwGT:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("bOdI"),o=r.n(i),a=r("mvHQ"),l=r.n(a),s={data:function(){return{labelPosition:"right",content:"",selectedFno:"group",conHeight:0,orderList:[],materielList:[],addVisible:!1,confirmVisible:!1,isCheck:!1,isEdit:!1,selectGroup:{},isGroupSelect:!1,dialogTitle:"",handleType:"",orderForm:{id:"",name:"",remarks:""},checkDefault:[],orderId:"",inNums:[],isDialogMaterielDeatil:!1,isDialogDeleMateriel:!1,putInWareDialog:!1,materielForm:{inNum:"",name:"",id:"",code:"",potting:"",factoryModel:"",quantity:"",model:"",brand:"",supplier:"",website:"",remarks:"",price:""},materCode:"",materId:"",delIds:[],selectedVariate:{},variatesList:{},parentId:0}},computed:{},watch:{checkDefault:function(e,t){e&&this.$nextTick(function(){document.querySelector(".el-tree-node__content").click()})}},mounted:function(){var e=this;this.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-20}),window.addEventListener("resize",function(){e.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-20})})},methods:{nodeClick:function(e){this.orderId=e.id,this.selectGroup.id=e.id,this.selectGroup.name=e.name,this.selectGroup.remarks=e.remarks,this.isGroupSelect=!0,this.getMaterielList(),this.inNums=[]},saveMaterielNum:function(){var e=this;if(0!=this.inNums.length){var t={materielNums:l()(this.inNums)};this.$post("/materielRecords/changeInNum",t).then(function(t){console.log(t),0==t.code?(e.$notify({title:"成功",message:"修改数量成功",type:"success"}),e.inNums=[],e.getMaterielList()):e.$message.error(t.msg)}).catch(function(t){e.$message.error("保存失败")})}else this.$message.error("入库数量没有改变不需要保存")},showDialog:function(e,t){var r=this;this.handleType=e,"add"==e?(this.orderForm.id="",this.orderForm.name="",this.orderForm.remarks="",this.dialogTitle="创建订单",this.addVisible=!0):"edit"==e?(this.dialogTitle="编辑订单",this.orderForm.id=this.selectGroup.id,this.orderForm.name=this.selectGroup.name,this.orderForm.remarks=this.selectGroup.remarks,this.addVisible=!0):"delete"==e&&(this.confirmVisible=!0),this.$nextTick(function(){r.$refs.orderForm.clearValidate()})},closeDialog:function(){this.addVisible=!1,this.confirmVisible=!1,this.handleType=""},handleGroup:function(){"add"==this.handleType?this.addOrder():"edit"==this.handleType?this.updateOrder():"delete"==this.handleType&&this.deleteOrder()},addOrder:function(){var e=this;this.$refs.orderForm.validate(function(t){if(t){var r={name:e.orderForm.name,remarks:e.orderForm.remarks,type:1};e.$post("/orderRecords/saveOrder",r).then(function(t){0==t.code?(e.getOrderList(),e.orderForm.id="",e.orderForm.name="",e.orderForm.remarks="",e.closeDialog(),e.$notify({title:"成功",message:"创建订单成功",type:"success"})):e.$message.error(t.msg)}).catch(function(t){e.$message.error("创建订单失败")})}})},updateOrder:function(){var e=this;this.$refs.orderForm.validate(function(t){if(t){var r={id:e.orderForm.id,name:e.orderForm.name,remarks:e.orderForm.remarks,type:1};e.$post("/orderRecords/modifyOrder",r).then(function(t){0==t.code?(e.getOrderList(),e.orderForm.id="",e.orderForm.name="",e.orderForm.remarks="",e.closeDialog(),e.$notify({title:"成功",message:"修改订单成功",type:"success"})):e.$message.error(t.msg)}).catch(function(t){e.$message.error("修改订单失败")})}})},deleteOrder:function(){var e=this;if(this.orderId){var t={id:this.orderId};this.$get("/orderRecords/delete",t).then(function(t){0==t.code?(e.$notify({title:"成功",message:"删除订单成功",type:"success"}),e.closeDialog(),e.getOrderList(),e.orderForm.id="",e.orderForm.name="",e.orderForm.remarks=""):e.$message.error(t.msg)})}},putInWareOrder:function(){var e=this;if(this.orderId)if(0!=this.materielList.length){var t={orderId:this.orderId};this.$post("/orderRecords/putInWare",t).then(function(t){0==t.code?(e.$notify({title:"成功",message:"订单入库成功",type:"success"}),e.putInWareDialog=!1,e.orderId="",e.getOrderList()):e.$message.error(t.msg)}).catch(function(t){e.$message.error("加入订单失败")})}else this.$message.error("订单下没有要入库的物料!!!")},getOrderList:function(){var e=this;this.orderList=[],this.$get("/orderRecords/findByType",{type:1}).then(function(t){0==t.code&&(e.orderList=t.data,t.data.length>0&&e.checkDefault.push(t.data[0].id))})},getMaterielList:function(){var e=this;if(this.orderId){var t={orderId:this.orderId,content:this.content,page:0,size:9999999};this.$get("/materielRecords/findCurOrder",t).then(function(t){0==t.code&&(e.materielList=t.data.materielRecords)})}},changeInNum:function(e){for(var t={id:e.id,code:e.code,inNum:e.inNum},r=0;r<this.inNums.length;r++){var i=this.inNums[r].id;if(e.id===i){this.inNums.splice(r,1);break}}this.inNums.push(t)},openDialog:function(e,t){switch(e){case"materielOpen":this.isDialogMaterielDeatil=!0,this.detailMeteriel(t.id);break;case"deleMateriel":this.isDialogDeleMateriel=!0,this.materCode=t.code,this.materId=t.id;break;case"putInWare":this.putInWareDialog=!0}},detailMeteriel:function(e){var t=this,r={id:e};this.$get("/materielRecords/detail",r).then(function(e){0==e.code&&(t.materielForm=e.data)})},modifyMateriel:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var r;if(isNaN(t.materielForm.inNum))return void t.$message.error("入库数量只能是数值类型");var i=(r={id:t.materielForm.id,remarks:t.materielForm.remarks,inNum:t.materielForm.inNum,name:t.materielForm.name,code:t.materielForm.code,potting:t.materielForm.potting,quantity:parseInt(t.materielForm.quantity),model:t.materielForm.model,brand:t.materielForm.brand,supplier:t.materielForm.supplier,website:t.materielForm.website,price:t.materielForm.price},o()(r,"remarks",t.materielForm.remarks),o()(r,"orderId",t.orderId),o()(r,"factoryModel",t.materielForm.factoryModel),o()(r,"type",1),r);t.$post("/materielRecords/modify",i).then(function(e){0==e.code?(t.$notify({title:"成功",message:"修改成功",type:"success"}),t.getMaterielList(),t.isDialogMaterielDeatil=!1):t.$message.error(e.msg)})}}).catch(function(e){t.$message.error("修改失败")})},delMaterial:function(){var e=this,t={id:this.materId};this.$get("/materielRecords/delete",t).then(function(t){0==t.code?e.$notify({title:"成功",message:"删除物料成功",type:"success"}):e.$message.error(t.msg),e.isDialogDeleMateriel=!1,e.materId="",e.getMaterielList()})}},created:function(){this.getOrderList()}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"groups"},[r("div",{staticClass:"content-main"},[r("div",{staticClass:"left-con inner"},[r("div",{staticClass:"btn-box"},[r("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.showDialog("add",1)}}},[e._v("创建订单")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:"group"==e.selectedFno,expression:"selectedFno == 'group'"}],attrs:{type:"warning",size:"mini",icon:"el-icon-edit",disabled:!e.isGroupSelect},on:{click:function(t){return e.showDialog("edit")}}},[e._v("编辑")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:"group"==e.selectedFno,expression:"selectedFno == 'group'"}],attrs:{type:"danger",size:"mini",icon:"el-icon-delete",disabled:!e.isGroupSelect},on:{click:function(t){return e.showDialog("delete")}}},[e._v("删除")])],1),e._v(" "),r("div",{staticClass:"tree-box"},[r("el-tree",{ref:"treeBox",attrs:{data:e.orderList,"node-key":"id",props:{label:"name"},"check-on-click-node":!0,"default-expanded-keys":e.checkDefault,"highlight-current":!0},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node;return r("div",{staticClass:"tree_item"},[r("span",{staticClass:"has_ellipsis",attrs:{title:i.label}},[e._v(e._s(i.label))]),e._v(" "),r("el-button",{staticClass:"confirm",attrs:{icon:"el-icon-circle-plus",type:"text"},on:{click:function(t){return e.openDialog("putInWare")}}})],1)}}])})],1)]),e._v(" "),r("div",{staticClass:"right-con inner"},[r("div",{staticClass:"title-box"},[r("el-input",{staticStyle:{float:"left",width:"200px","margin-left":"10px"},attrs:{"prefix-icon":"el-icon-search",size:"mini"},on:{change:e.getMaterielList},model:{value:e.content,callback:function(t){e.content="string"==typeof t?t.trim():t},expression:"content"}}),e._v(" "),r("el-button",{staticClass:"save-btn",attrs:{type:"primary",size:"mini",icon:"el-icon-finished",disabled:0==e.materielList.length},on:{click:e.saveMaterielNum}},[e._v("保存")])],1),e._v(" "),r("div",{ref:"conBox",staticClass:"var-list"},[r("el-table",{staticClass:"table-style",attrs:{size:"mini",stripe:"",data:e.materielList,"max-height":e.conHeight,"header-cell-style":{"background-color":"#e3e3e3"}}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{property:"code",label:"物料编码"}}),e._v(" "),r("el-table-column",{attrs:{property:"name",label:"物料名称"}}),e._v(" "),r("el-table-column",{attrs:{property:"potting",label:"封装"}}),e._v(" "),r("el-table-column",{attrs:{property:"model",label:"型号"}}),e._v(" "),r("el-table-column",{attrs:{property:"brand",label:"品牌"}}),e._v(" "),r("el-table-column",{attrs:{property:"factoryModel",label:"厂家型号"}}),e._v(" "),r("el-table-column",{attrs:{property:"price",label:"单价"}}),e._v(" "),r("el-table-column",{attrs:{property:"remarks",label:"描述(规格)"}}),e._v(" "),r("el-table-column",{attrs:{property:"quantity",label:"库存数量"}}),e._v(" "),r("el-table-column",{attrs:{label:"入库数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{size:"mini"},on:{change:function(r){return e.changeInNum(t.row)}},model:{value:t.row.inNum,callback:function(r){e.$set(t.row,"inNum",r)},expression:"scope.row.inNum"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"125px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"edit-tooltip",attrs:{effect:"dark",offset:"-20",content:"详情",placement:"top-start"}},[r("el-button",{staticClass:"confirm",attrs:{icon:"el-icon-edit",size:"mini",type:"warning"},on:{click:function(r){return e.openDialog("materielOpen",t.row)}}})],1),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"删除",placement:"top-start"}},[r("el-button",{staticClass:"del",attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(r){return e.openDialog("deleMateriel",t.row)}}})],1)]}}])})],1)],1)])]),e._v(" "),r("el-dialog",{attrs:{title:e.dialogTitle,visible:e.addVisible,width:"500px"},on:{"update:visible":function(t){e.addVisible=t}}},[r("el-form",{ref:"orderForm",attrs:{model:e.orderForm,"label-width":"120px"}},[r("el-form-item",{attrs:{prop:"name",label:"订单名称:",rules:[{required:!0,message:"请输入订单名称",trigger:"blur"}]}},[r("el-input",{staticStyle:{width:"80%"},model:{value:e.orderForm.name,callback:function(t){e.$set(e.orderForm,"name","string"==typeof t?t.trim():t)},expression:"orderForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"remarks",label:"订单描述:"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea"},model:{value:e.orderForm.remarks,callback:function(t){e.$set(e.orderForm,"remarks","string"==typeof t?t.trim():t)},expression:"orderForm.remarks"}})],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleGroup}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"提示",visible:e.confirmVisible,width:"370px"},on:{"update:visible":function(t){e.confirmVisible=t}}},[r("div",{staticClass:"tips-con"},[e._v("\n        确认删除 \n        "),r("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[e._v(e._s(e.selectGroup.name)+" ")]),e._v("吗？\n      ")]),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleGroup}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")])],1)]),e._v(" "),r("el-dialog",{staticClass:"detai-dialog",attrs:{visible:e.isDialogMaterielDeatil,"close-on-click-modal":!1,width:"668px",title:"编辑物料"},on:{"update:visible":function(t){e.isDialogMaterielDeatil=t}}},[r("el-form",{ref:"materielForm",attrs:{"label-position":e.labelPosition,"label-width":"90px",model:e.materielForm}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"编码:",prop:"code"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.code,callback:function(t){e.$set(e.materielForm,"code",t)},expression:"materielForm.code"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"名称:",prop:"name"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.name,callback:function(t){e.$set(e.materielForm,"name",t)},expression:"materielForm.name"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"封装:",prop:"potting"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.potting,callback:function(t){e.$set(e.materielForm,"potting",t)},expression:"materielForm.potting"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"厂家型号:",prop:"factoryModel"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.factoryModel,callback:function(t){e.$set(e.materielForm,"factoryModel",t)},expression:"materielForm.factoryModel"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"价格:",prop:"price"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.price,callback:function(t){e.$set(e.materielForm,"price",t)},expression:"materielForm.price"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"型号:",prop:"model"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.model,callback:function(t){e.$set(e.materielForm,"model",t)},expression:"materielForm.model"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"库存数量:",prop:"quantity"}},[r("el-input",{attrs:{readonly:""},model:{value:e.materielForm.quantity,callback:function(t){e.$set(e.materielForm,"quantity",t)},expression:"materielForm.quantity"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{rules:[{required:!0,message:"入库数量不能为空",trigger:"blur"}],label:"入库数量:",prop:"inNum"}},[r("el-input",{model:{value:e.materielForm.inNum,callback:function(t){e.$set(e.materielForm,"inNum",t)},expression:"materielForm.inNum"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"描述:",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"描述规格"},model:{value:e.materielForm.remarks,callback:function(t){e.$set(e.materielForm,"remarks",t)},expression:"materielForm.remarks"}})],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.modifyMateriel("materielForm")}}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:function(t){e.isDialogMaterielDeatil=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.isDialogDeleMateriel,"close-on-click-modal":!1,width:"500px",title:"删除物料"},on:{"update:visible":function(t){e.isDialogDeleMateriel=t}}},[r("div",{staticStyle:{"margin-bottom":"20px"}},[r("span",[e._v("确定删除物料\n          "),r("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[e._v(e._s(e.materCode)+" ")]),e._v("吗？")])]),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.delMaterial()}}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:function(t){e.isDialogDeleMateriel=!1}}},[e._v("取 消")])],1)]),e._v(" "),r("el-dialog",{attrs:{visible:e.putInWareDialog,"close-on-click-modal":!1,width:"500px",title:"订单入库"},on:{"update:visible":function(t){e.putInWareDialog=t}}},[r("div",{staticStyle:{"margin-bottom":"20px"}},[r("span",[e._v("确定\n          "),r("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[e._v(e._s(e.selectGroup.name))]),e._v("入库吗？")])]),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.putInWareOrder()}}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:function(t){e.putInWareDialog=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var c=r("VU/8")(s,n,!1,function(e){r("QYgu")},"data-v-372d5076",null);t.default=c.exports},bOdI:function(e,t,r){"use strict";t.__esModule=!0;var i,o=r("C4MV"),a=(i=o)&&i.__esModule?i:{default:i};t.default=function(e,t,r){return t in e?(0,a.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},mClu:function(e,t,r){var i=r("kM2E");i(i.S+i.F*!r("+E39"),"Object",{defineProperty:r("evD5").f})}});
//# sourceMappingURL=2.f0b17214bef69cb08e02.js.map