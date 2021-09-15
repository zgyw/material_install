webpackJsonp([6],{"KN+M":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{dialogTitleAddToCart:"加入订单",classificationOptions:[],isDialogVisibleAddToCart:!1,isDialogVisibleCreateCart:!1,isDialogDeleMateriel:!1,conHeight:0,selectMater:!1,classifyId:"",orderType:1,orderId:"",orderArr:[],currentPage:1,currPageSize:10,totalMateriel:0,content:"",materielDate:[],isDialogMaterielDeatil:!1,labelPosition:"right",materielForm:{classifyId:"",id:"",code:"",potting:"",factoryModel:"",quantity:"",model:"",brand:"",supplier:"",website:"",remarks:"",price:""},materielIds:[],materCode:"",materielRules:{code:[{required:!0,message:"编码不能为空",trigger:"blur"}],classifyId:[{required:!0,message:"分类不能为空",trigger:"blur"}],quantity:[{required:!0,message:"数量不能为空",trigger:"blur"}]}}},computed:{},watch:{},mounted:function(){var e=this;this.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-55-55-36}),window.addEventListener("resize",function(){e.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-120})})},methods:{getDateList:function(){var e=this,t={page:this.currentPage-1,size:this.currPageSize,classifyId:this.classifyId,content:this.content};this.totalMateriel=0,this.materielDate=[],this.$get("/materielLevel/pageList",t).then(function(t){0==t.code&&(e.totalMateriel=t.data.total,e.materielDate=t.data.materielLevels)})},getClassifyList:function(){var e=this;this.classificationOptions=[],this.$get("/classify/findAll").then(function(t){if(0==t.code)for(var i=0;i<t.data.length;i++){var a={};a.id=t.data[i].id,a.name=t.data[i].name,e.classificationOptions.push(a)}else e.classificationOptions=[]})},classifyChange:function(){this.getDateList()},handleCurrentChange:function(e){this.currentPage=e,this.getDateList()},handleSizeChange:function(e){this.currPageSize=e,this.currentPage=1,this.getDateList()},openDialog:function(e,t){switch(e){case"order":this.orderType=1,this.isDialogVisibleAddToCart=!0,this.getOrderByType();break;case"materielOpen":this.isDialogMaterielDeatil=!0,this.detailMeteriel(t.id);break;case"deleMateriel":this.isDialogDeleMateriel=!0,this.materCode=t.code}},submitAddToCart:function(){var e=this;if(0!=this.materielIds.length){var t={orderId:parseInt(this.orderId),materielIds:this.materielIds.join(","),type:parseInt(this.orderType)};this.$post("/materielRecords/putInOrder",t).then(function(t){0==t.code?(e.$notify({title:"成功",message:"加入订单成功",type:"success"}),e.isDialogVisibleAddToCart=!1,e.selectMater=!1,e.getDateList(),e.materielIds=[]):(e.$message.error(t.msg),e.selectMater=!1,e.materielIds=[])})}else this.$message.error("请先选中至少一个物料才能加入订单!!!")},detailMeteriel:function(e){var t=this,i={id:e};this.$get("/materielLevel/detail",i).then(function(e){0==e.code&&(t.materielForm=e.data)})},modifyMateriel:function(e){var t=this;this.$refs[e].validate(function(e){if(e){if(isNaN(t.materielForm.quantity))return void t.$message.error("数量只能是数值类型");var i={id:t.materielForm.id,code:t.materielForm.code,classifyId:t.materielForm.classifyId,potting:t.materielForm.potting,quantity:parseInt(t.materielForm.quantity),model:t.materielForm.model,brand:t.materielForm.brand,supplier:t.materielForm.supplier,website:t.materielForm.website,price:t.materielForm.price,remarks:t.materielForm.remarks,factoryModel:t.materielForm.factoryModel};t.$post("/materielLevel/modify",i).then(function(e){0==e.code?(t.$notify({title:"成功",message:"修改成功",type:"success"}),t.getDateList(),t.isDialogMaterielDeatil=!1):t.$message.error(e.msg)})}})},getOrderByType:function(){var e=this,t={type:this.orderType};this.$get("/orderRecords/findByType",t).then(function(t){0==t.code?(e.orderArr=t.data,t.data.length>0&&(e.orderId=t.data[0].id)):e.orderArr=[]})},radioChange:function(){this.getOrderByType()},handleSelectionChange:function(e){this.materielIds=[];for(var t=0;t<e.length;t++)this.materielIds.push(e[t].id)},delMaterial:function(){var e=this,t={code:this.materCode};this.$get("/materielLevel/delete",t).then(function(t){0==t.code?e.$notify({title:"成功",message:"删除物料成功",type:"success"}):e.$message.error(t.msg),e.isDialogDeleMateriel=!1,e.materCode="",e.getDateList()})}},created:function(){this.getClassifyList(),this.getDateList()},beforeDestroy:function(){}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"conBox",staticStyle:{height:"100%"}},[i("div",{staticClass:"content-all"},[i("div",{staticClass:"content-first"},[i("el-select",{staticStyle:{float:"left"},attrs:{placeholder:"请选择分类",clearable:"",filterable:""},on:{change:e.classifyChange},model:{value:e.classifyId,callback:function(t){e.classifyId=t},expression:"classifyId"}},e._l(e.classificationOptions,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1),e._v(" "),i("el-input",{staticStyle:{width:"auto",float:"left","margin-left":"10px"},attrs:{"suffix-icon":"el-icon-search",placeholder:"请输入编号或型号或封装",clearable:""},on:{change:e.getDateList},model:{value:e.content,callback:function(t){e.content="string"==typeof t?t.trim():t},expression:"content"}}),e._v(" "),i("div",{staticClass:"button-div"},[e.selectMater?[i("el-button",{attrs:{type:"success",size:"small"},on:{click:function(t){e.selectMater=!1}}},[e._v("取消")])]:[i("el-button",{staticClass:"del",attrs:{size:"small",type:"success"},on:{click:function(t){e.selectMater=!0}}},[e._v("批量选择")])],e._v(" "),i("el-button",{staticClass:"confirm",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.openDialog("order",null)}}},[e._v("加入订单")])],2)],1),e._v(" "),i("div",{staticClass:"material-table"},[i("el-table",{attrs:{data:e.materielDate,"max-height":e.conHeight,border:"","header-cell-style":{"background-color":"#e3e3e3"}},on:{"selection-change":e.handleSelectionChange}},[e.selectMater?i("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),i("el-table-column",{attrs:{prop:"code",label:"商品编号"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"商品名称(分类)"}}),e._v(" "),i("el-table-column",{attrs:{prop:"model",label:"型号"}}),e._v(" "),i("el-table-column",{attrs:{prop:"potting",label:"封装"}}),e._v(" "),i("el-table-column",{attrs:{prop:"factoryModel",label:"厂家型号"}}),e._v(" "),i("el-table-column",{attrs:{prop:"brand",label:"品牌"}}),e._v(" "),i("el-table-column",{attrs:{prop:"price",label:"单价(元)"}}),e._v(" "),i("el-table-column",{attrs:{prop:"quantity",label:"库存数量"}}),e._v(" "),i("el-table-column",{attrs:{prop:"remarks",label:"描述(规格)"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"125px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"编辑",placement:"top-start"}},[i("el-button",{staticClass:"confirm",attrs:{icon:"el-icon-edit",size:"mini",type:"warning"},on:{click:function(i){return e.openDialog("materielOpen",t.row)}}})],1),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"删除",placement:"top-start"}},[i("el-button",{staticClass:"del",attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(i){return e.openDialog("deleMateriel",t.row)}}})],1)]}}])})],1)],1),e._v(" "),i("div",{ref:"pageBox",staticClass:"block",staticStyle:{"margin-top":"20px",float:"right"}},[i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50],"page-size":e.currPageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalMateriel},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),e._v(" "),i("el-dialog",{staticClass:"el-dialog__wrap",attrs:{visible:e.isDialogVisibleAddToCart,"close-on-click-modal":!1,width:"500px",title:e.dialogTitleAddToCart},on:{"update:visible":function(t){e.isDialogVisibleAddToCart=t}}},[i("div",{staticClass:"radio-group"},[i("el-radio-group",{on:{change:e.radioChange},model:{value:e.orderType,callback:function(t){e.orderType=t},expression:"orderType"}},[i("el-radio",{attrs:{label:1}},[e._v("入库订单")]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v("出库订单")])],1)],1),e._v(" "),i("div",{staticClass:"select-option"},[i("el-select",{attrs:{placeholder:"请选择订单"},model:{value:e.orderId,callback:function(t){e.orderId=t},expression:"orderId"}},e._l(e.orderArr,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.submitAddToCart}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:function(t){e.isDialogVisibleAddToCart=!1}}},[e._v("取 消")])],1)]),e._v(" "),i("el-dialog",{staticClass:"detai-dialog",attrs:{visible:e.isDialogMaterielDeatil,"close-on-click-modal":!1,width:"660px",title:"编辑物料"},on:{"update:visible":function(t){e.isDialogMaterielDeatil=t}}},[i("el-form",{ref:"materielForm",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.materielForm,rules:e.materielRules}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"编码:",prop:"code"}},[i("el-input",{attrs:{readonly:""},model:{value:e.materielForm.code,callback:function(t){e.$set(e.materielForm,"code",t)},expression:"materielForm.code"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"分类:",prop:"classifyId"}},[i("el-select",{attrs:{placeholder:"请选择分类"},model:{value:e.materielForm.classifyId,callback:function(t){e.$set(e.materielForm,"classifyId",t)},expression:"materielForm.classifyId"}},e._l(e.classificationOptions,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"封装:",prop:"potting"}},[i("el-input",{model:{value:e.materielForm.potting,callback:function(t){e.$set(e.materielForm,"potting",t)},expression:"materielForm.potting"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"厂家型号:",prop:"factoryModel"}},[i("el-input",{model:{value:e.materielForm.factoryModel,callback:function(t){e.$set(e.materielForm,"factoryModel",t)},expression:"materielForm.factoryModel"}})],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"数量:",prop:"quantity"}},[i("el-input",{model:{value:e.materielForm.quantity,callback:function(t){e.$set(e.materielForm,"quantity",t)},expression:"materielForm.quantity"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"型号:",prop:"model"}},[i("el-input",{model:{value:e.materielForm.model,callback:function(t){e.$set(e.materielForm,"model",t)},expression:"materielForm.model"}})],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"价格:",prop:"price"}},[i("el-input",{model:{value:e.materielForm.price,callback:function(t){e.$set(e.materielForm,"price",t)},expression:"materielForm.price"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"供应商:",prop:"supplier"}},[i("el-input",{model:{value:e.materielForm.supplier,callback:function(t){e.$set(e.materielForm,"supplier",t)},expression:"materielForm.supplier"}})],1)],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"品牌:",prop:"brand"}},[i("el-input",{model:{value:e.materielForm.brand,callback:function(t){e.$set(e.materielForm,"brand",t)},expression:"materielForm.brand"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"网址:",prop:"website"}},[i("el-input",{model:{value:e.materielForm.website,callback:function(t){e.$set(e.materielForm,"website",t)},expression:"materielForm.website"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述:",prop:"remarks"}},[i("el-input",{attrs:{type:"textarea",rows:3,placeholder:"物料备注"},model:{value:e.materielForm.remarks,callback:function(t){e.$set(e.materielForm,"remarks",t)},expression:"materielForm.remarks"}})],1),e._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.modifyMateriel("materielForm")}}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:function(t){e.isDialogMaterielDeatil=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.isDialogDeleMateriel,"close-on-click-modal":!1,width:"500px",title:"删除物料"},on:{"update:visible":function(t){e.isDialogDeleMateriel=t}}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("span",[e._v("确定删除物料\n        "),i("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[e._v(e._s(e.materCode)+" ")]),e._v("吗？")])]),e._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.delMaterial()}}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:function(t){e.isDialogDeleMateriel=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var r=i("VU/8")(a,l,!1,function(e){i("sU0C")},"data-v-b0475908",null);t.default=r.exports},sU0C:function(e,t){}});
//# sourceMappingURL=6.fdb6d34897971e248b4f.js.map