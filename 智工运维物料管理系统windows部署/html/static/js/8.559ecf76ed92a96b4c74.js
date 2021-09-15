webpackJsonp([8],{"5FQe":function(e,t){},"KN+M":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),i=a.n(l),r={data:function(){return{dialogTitleAddToCart:"加入订单",classificationOptions:[],isDialogVisibleAddToCart:!1,isDialogVisibleCreateCart:!1,isDialogDeleMateriel:!1,conHeight:0,selectMater:!1,classifyId:"",orderType:1,orderId:"",orderArr:[],currentPage:1,currPageSize:20,totalMateriel:0,content:"",materielDate:[],isDialogMaterielDeatil:!1,labelPosition:"right",materielForm:{classifyId:"",id:"",code:"",potting:"",factoryModel:"",quantity:"",model:"",brand:"",supplier:"",note:"",remarks:"",price:"",photo:""},materielIds:[],materCode:"",materielRules:{code:[{required:!0,message:"编码不能为空",trigger:"blur"}],classifyId:[{required:!0,message:"分类不能为空",trigger:"blur"}],quantity:[{required:!0,message:"数量不能为空",trigger:"blur"}]},imageUrl:"",materielFile:"",value:[],valueDetail:[]}},computed:{},watch:{},mounted:function(){var e=this;this.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-120}),window.addEventListener("resize",function(){e.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-120})})},methods:{getDateList:function(){var e=this,t={page:this.currentPage-1,size:this.currPageSize,classifyId:this.classifyId,content:this.content};this.materielDate=[],this.$get("/materielLevel/pageList",t).then(function(t){0==t.code&&(e.totalMateriel=t.data.total,e.materielDate=t.data.materielLevels)})},getClassifyList:function(){var e=this;this.classificationOptions=[],this.$get("/classify/findAll").then(function(t){if(0==t.code)for(var a=0;a<t.data.length;a++){var l={};l.id=t.data[a].id,l.name=t.data[a].name,l.children=t.data[a].children,e.classificationOptions.push(l)}})},classifyChange:function(e){console.log(e),this.classifyId="",2==e.length&&(this.classifyId=e[1]),this.getDateList()},classifyChange2:function(e){console.log(e),this.materielForm.classifyId,2==e.length&&(this.materielForm.classifyId=e[1])},handleCurrentChange:function(e){this.currentPage=e,this.getDateList()},handleSizeChange:function(e){this.currPageSize=e,this.currentPage=1,this.getDateList()},openDialog:function(e,t){switch(e){case"order":this.orderType=1,this.isDialogVisibleAddToCart=!0,this.getOrderByType();break;case"materielOpen":this.imageUrl="",this.detailMeteriel(t.id),this.isDialogMaterielDeatil=!0,t.photo&&this.getPhoto(t.photo);break;case"deleMateriel":this.isDialogDeleMateriel=!0,this.materCode=t.code}},submitAddToCart:function(){var e=this;if(0!=this.materielIds.length){var t={orderId:parseInt(this.orderId),materielIds:this.materielIds.join(","),type:parseInt(this.orderType)};this.$post("/materielRecords/putInOrder",t).then(function(t){0==t.code?(e.$notify({title:"成功",message:"加入订单成功",type:"success"}),e.isDialogVisibleAddToCart=!1,e.selectMater=!1,e.getDateList(),e.materielIds=[]):(e.$message.error(t.msg),e.selectMater=!1,e.materielIds=[])})}else this.$message.error("请先选中至少一个物料才能加入订单!!!")},detailMeteriel:function(e){var t=this,a={id:e};this.valueDetail=[],this.$get("/materielLevel/detail",a).then(function(e){if(0==e.code){var a=[];a.push(e.data.groupId),a.push(e.data.classifyId),t.valueDetail=a,t.materielForm=e.data}})},getPhoto:function(e){var t=this,a={photoPath:e};this.$getFile("/materielLevel/getPhoto",a).then(function(e){console.log(e),t.imageUrl=window.URL.createObjectURL(e.data)})},modifyMateriel:function(e){var t=this;this.$refs[e].validate(function(e){if(e){if(isNaN(t.materielForm.quantity))return void t.$message.error("数量只能是数值类型");if(0==t.valueDetail.length)return void t.$message.error("分类不能为空");var a={id:t.materielForm.id,code:t.materielForm.code,classifyId:t.valueDetail[1],potting:null==t.materielForm.potting?"":t.materielForm.potting,quantity:parseInt(t.materielForm.quantity),model:null==t.materielForm.model?"":t.materielForm.model,brand:null==t.materielForm.brand?"":t.materielForm.brand,supplier:null==t.materielForm.supplier?"":t.materielForm.supplier,note:null==t.materielForm.note?"":t.materielForm.note,price:null==t.materielForm.price?"":t.materielForm.price,remarks:null==t.materielForm.remarks?"":t.materielForm.remarks,factoryModel:null==t.materielForm.factoryModel?"":t.materielForm.factoryModel},l=new FormData;for(var r in console.log(t.materielFile),"{}"!=i()(t.materielFile)&&l.append("file",t.materielFile),a)l.append(r,a[r]);t.$postForm("/materielLevel/modify",l).then(function(e){0==e.code?(t.$notify({title:"成功",message:"修改成功",type:"success"}),t.getDateList(),t.isDialogMaterielDeatil=!1):t.$message.error(e.msg)})}})},getOrderByType:function(){var e=this,t={type:this.orderType};this.$get("/orderRecords/findByType",t).then(function(t){0==t.code?(e.orderArr=t.data,t.data.length>0&&(e.orderId=t.data[0].id)):e.orderArr=[]})},radioChange:function(){this.getOrderByType()},handleSelectionChange:function(e){this.materielIds=[];for(var t=0;t<e.length;t++)this.materielIds.push(e[t].id)},delMaterial:function(){var e=this,t={code:this.materCode};this.$get("/materielLevel/delete",t).then(function(t){0==t.code?e.$notify({title:"成功",message:"删除物料成功",type:"success"}):e.$message.error(t.msg),e.isDialogDeleMateriel=!1,e.materCode="",e.getDateList()})},fileChange:function(e){console.log(e),this.materielFile=e.raw,this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(e){console.log(e.size);var t=e.size/1024/1024/10<2;return t||this.$message.error("上传物料图片大小不能超过 200kb!"),t}},created:function(){this.getClassifyList(),this.getDateList()},beforeDestroy:function(){}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"conBox",staticStyle:{height:"100%"}},[a("div",{staticClass:"content-all"},[a("div",{staticClass:"content-first"},[a("el-cascader",{staticStyle:{float:"left"},attrs:{placeholder:"请选择分类",clearable:"",filterable:"","show-all-levels":!1,options:e.classificationOptions,props:{expandTrigger:"hover",label:"name",value:"id"}},on:{change:e.classifyChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("el-input",{staticStyle:{width:"auto",float:"left","margin-left":"10px"},attrs:{"suffix-icon":"el-icon-search",placeholder:"请输入编号或型号或封装",clearable:""},on:{change:e.getDateList},model:{value:e.content,callback:function(t){e.content="string"==typeof t?t.trim():t},expression:"content"}}),e._v(" "),a("div",{staticClass:"button-div"},[e.selectMater?[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(t){e.selectMater=!1}}},[e._v("取消")])]:[a("el-button",{staticClass:"del",attrs:{size:"small",type:"success"},on:{click:function(t){e.selectMater=!0}}},[e._v("批量选择")])],e._v(" "),a("el-button",{staticClass:"confirm",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.openDialog("order",null)}}},[e._v("加入订单")])],2)],1),e._v(" "),a("div",{staticClass:"material-table"},[a("el-table",{attrs:{data:e.materielDate,"max-height":e.conHeight,size:"mini",border:"",stripe:"","header-cell-style":{"background-color":"#e3e3e3"}},on:{"selection-change":e.handleSelectionChange}},[e.selectMater?a("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"商品编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称(分类)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"model",label:"型号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"potting",label:"封装"}}),e._v(" "),a("el-table-column",{attrs:{prop:"factoryModel",label:"厂家型号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价(元)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"quantity",label:"库存数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"supplier",label:"供应商信息","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"remarks",label:"描述(规格)","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"note",label:"备注","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"125px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"编辑",placement:"top-start"}},[a("el-button",{staticClass:"confirm",attrs:{icon:"el-icon-edit",size:"mini",type:"warning"},on:{click:function(a){return e.openDialog("materielOpen",t.row)}}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"删除",placement:"top-start"}},[a("el-button",{staticClass:"del",attrs:{icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(a){return e.openDialog("deleMateriel",t.row)}}})],1)]}}])})],1)],1),e._v(" "),a("div",{ref:"pageBox",staticClass:"block",staticStyle:{"margin-top":"10px",float:"right"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50],"page-size":e.currPageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalMateriel},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)]),e._v(" "),a("el-dialog",{staticClass:"el-dialog__wrap",attrs:{visible:e.isDialogVisibleAddToCart,"close-on-click-modal":!1,width:"500px",title:e.dialogTitleAddToCart},on:{"update:visible":function(t){e.isDialogVisibleAddToCart=t}}},[a("div",{staticClass:"radio-group"},[a("el-radio-group",{on:{change:e.radioChange},model:{value:e.orderType,callback:function(t){e.orderType=t},expression:"orderType"}},[a("el-radio",{attrs:{label:1}},[e._v("入库订单")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("出库订单")])],1)],1),e._v(" "),a("div",{staticClass:"select-option"},[a("el-select",{attrs:{placeholder:"请选择订单"},model:{value:e.orderId,callback:function(t){e.orderId=t},expression:"orderId"}},e._l(e.orderArr,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitAddToCart}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.isDialogVisibleAddToCart=!1}}},[e._v("取 消")])],1)]),e._v(" "),a("el-dialog",{staticClass:"detai-dialog",attrs:{visible:e.isDialogMaterielDeatil,"close-on-click-modal":!1,width:"660px",title:"编辑物料"},on:{"update:visible":function(t){e.isDialogMaterielDeatil=t}}},[a("el-form",{ref:"materielForm",staticClass:"materiel-form",attrs:{"label-position":e.labelPosition,"label-width":"90px",model:e.materielForm,rules:e.materielRules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编码",prop:"code"}},[a("el-input",{attrs:{readonly:""},model:{value:e.materielForm.code,callback:function(t){e.$set(e.materielForm,"code",t)},expression:"materielForm.code"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分类",prop:"classifyId"}},[a("el-cascader",{attrs:{placeholder:"请选择分类",clearable:"",filterable:"","show-all-levels":!1,options:e.classificationOptions,props:{expandTrigger:"hover",label:"name",value:"id"}},on:{change:e.classifyChange2},model:{value:e.valueDetail,callback:function(t){e.valueDetail=t},expression:"valueDetail"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"数量",prop:"quantity"}},[a("el-input",{attrs:{readonly:""},model:{value:e.materielForm.quantity,callback:function(t){e.$set(e.materielForm,"quantity",t)},expression:"materielForm.quantity"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"厂家型号",prop:"factoryModel"}},[a("el-input",{model:{value:e.materielForm.factoryModel,callback:function(t){e.$set(e.materielForm,"factoryModel",t)},expression:"materielForm.factoryModel"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"封装",prop:"potting"}},[a("el-input",{model:{value:e.materielForm.potting,callback:function(t){e.$set(e.materielForm,"potting",t)},expression:"materielForm.potting"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"型号",prop:"model"}},[a("el-input",{model:{value:e.materielForm.model,callback:function(t){e.$set(e.materielForm,"model",t)},expression:"materielForm.model"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input",{model:{value:e.materielForm.price,callback:function(t){e.$set(e.materielForm,"price",t)},expression:"materielForm.price"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"品牌",prop:"brand"}},[a("el-input",{model:{value:e.materielForm.brand,callback:function(t){e.$set(e.materielForm,"brand",t)},expression:"materielForm.brand"}})],1)],1)],1),e._v(" "),a("el-row",[a("div",{staticStyle:{width:"50%",float:"left"}},[a("el-form-item",{attrs:{label:"供应商",prop:"supplier"}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.materielForm.supplier,callback:function(t){e.$set(e.materielForm,"supplier",t)},expression:"materielForm.supplier"}})],1)],1),e._v(" "),a("div",{staticStyle:{width:"50%",float:"right"}},[a("el-form-item",{staticClass:"inline-input-width",attrs:{label:"图片",prop:"photo"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","on-change":e.fileChange,"show-file-list":!1,"before-upload":e.beforeAvatarUpload,"auto-upload":!1}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl,width:"120",height:"120"}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)]),e._v(" "),a("el-form-item",{attrs:{label:"描述(规格)",prop:"remarks"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"物料规格描述"},model:{value:e.materielForm.remarks,callback:function(t){e.$set(e.materielForm,"remarks",t)},expression:"materielForm.remarks"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"物料备注描述"},model:{value:e.materielForm.note,callback:function(t){e.$set(e.materielForm,"note",t)},expression:"materielForm.note"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.modifyMateriel("materielForm")}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.isDialogMaterielDeatil=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.isDialogDeleMateriel,"close-on-click-modal":!1,width:"500px",title:"删除物料"},on:{"update:visible":function(t){e.isDialogDeleMateriel=t}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("span",[e._v("确定删除物料\n        "),a("span",{staticStyle:{color:"DarkOrange","font-size":"18px"}},[e._v(e._s(e.materCode)+" ")]),e._v("吗？")])]),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.delMaterial()}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.isDialogDeleMateriel=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(e){a("5FQe")},"data-v-462fa008",null);t.default=s.exports}});
//# sourceMappingURL=8.559ecf76ed92a96b4c74.js.map