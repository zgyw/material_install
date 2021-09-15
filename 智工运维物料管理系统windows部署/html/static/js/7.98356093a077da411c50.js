webpackJsonp([7],{"8bwY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{},data:function(){return{currPageSize:10,conHeight:0,orderDate:[],currentPage:1,total:0,content:"",orderForm:{id:"",name:"",remarks:"",inTime:""},orderDetail:!1,materielList:[],expands:[]}},computed:{},watch:{},mounted:function(){var e=this;this.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-180}),window.addEventListener("resize",function(){e.$nextTick(function(){e.conHeight=e.$refs.conBox.offsetHeight-180})})},methods:{handleSizeChange:function(e){this.currPageSize=e,this.getOrderList()},handleCurrentChange:function(e){this.currentPage=e,this.getOrderList()},getOrderList:function(){var e=this,t={type:1,status:1,content:this.content,page:this.currentPage-1,size:this.currPageSize};this.orderDate=[],this.total=0,this.$get("/orderRecords/pageList",t).then(function(t){0==t.code&&(e.total=t.data.total,e.orderDate=t.data.orderRecords)})},getOrderInfo:function(e){var t=this,r={id:e};this.$get("/orderRecords/detail",r).then(function(e){0==e.code&&(t.orderForm=e.data)}).catch(function(e){t.$notity.error("")})},openDialog:function(e){this.orderDetail=!0,this.getOrderInfo(e.id)},getMaterielList:function(e){var t=this,r={orderId:e.id,content:"",page:0,size:999999999};this.$get("/materielRecords/findCurOrder",r).then(function(e){if(0==e.code){t.materielList=[];for(var r=0;r<e.data.materielRecords.length;r++){var a=e.data.materielRecords[r];t.materielList.push(a)}console.log(t.materielList)}})},getRowkeys:function(e){return e.id},expandChange:function(e,t){this.expands=[],t.length&&(this.materielList=[],e&&(this.expands.push(e.id),this.materielList=e.materielRecords))}},created:function(){this.getOrderList()}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"conBox",staticStyle:{height:"100%"}},[r("div",{staticClass:"content-all"},[r("div",{staticClass:"title-box"},[r("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{"suffix-icon":"el-icon-search",placeholder:"搜索内容",clearable:""},on:{change:e.getOrderList},model:{value:e.content,callback:function(t){e.content="string"==typeof t?t.trim():t},expression:"content"}})],1),e._v(" "),r("div",{staticClass:"record-table"},[r("el-table",{attrs:{data:e.orderDate,border:"",stripe:"","max-height":e.conHeight,"expand-row-keys":e.expands,"row-key":e.getRowkeys,"header-cell-style":{"background-color":"#e3e3e3"}},on:{"expand-change":e.expandChange}},[r("el-table-column",{attrs:{type:"expand"}},[r("el-table",{staticClass:"table-style",attrs:{size:"mini",border:"",stripe:"",height:"auto",data:e.materielList,"max-height":e.conHeight,"header-cell-style":{"background-color":"#e3e3e3"}}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{property:"code",label:"物料编码"}}),e._v(" "),r("el-table-column",{attrs:{property:"name",label:"物料名称"}}),e._v(" "),r("el-table-column",{attrs:{property:"potting",label:"封装"}}),e._v(" "),r("el-table-column",{attrs:{property:"model",label:"型号"}}),e._v(" "),r("el-table-column",{attrs:{property:"brand",label:"品牌"}}),e._v(" "),r("el-table-column",{attrs:{property:"factoryModel",label:"厂家型号"}}),e._v(" "),r("el-table-column",{attrs:{property:"price",label:"单价"}}),e._v(" "),r("el-table-column",{attrs:{property:"remarks",label:"描述(规格)"}}),e._v(" "),r("el-table-column",{attrs:{property:"quantity",label:"库存数量"}}),e._v(" "),r("el-table-column",{attrs:{label:"入库数量",property:"inNum"}})],1)],1),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"订单名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"remarks",label:"订单描述"}}),e._v(" "),r("el-table-column",{attrs:{prop:"inTime",label:"入库时间"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",offset:"-20",content:"详情",placement:"top-start"}},[r("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(r){return e.openDialog(t.row)}}},[e._v("详情")])],1)]}}])})],1)],1),e._v(" "),r("div",{ref:"pageBox",staticClass:"block",staticStyle:{"margin-top":"20px",float:"right"}},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50],"page-size":e.currPageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),r("el-dialog",{attrs:{title:"订单详情",visible:e.orderDetail,width:"500px"},on:{"update:visible":function(t){e.orderDetail=t}}},[r("el-form",{ref:"orderForm",staticClass:"order-form",attrs:{model:e.orderForm,"label-width":"120px"}},[r("el-form-item",{attrs:{prop:"name",label:"订单名称:",rules:[{required:!0,message:"请输入订单名称",trigger:"blur"}]}},[r("el-input",{staticStyle:{width:"80%"},attrs:{readonly:""},model:{value:e.orderForm.name,callback:function(t){e.$set(e.orderForm,"name","string"==typeof t?t.trim():t)},expression:"orderForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"remarks",label:"订单描述:"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{readonly:"",type:"textarea"},model:{value:e.orderForm.remarks,callback:function(t){e.$set(e.orderForm,"remarks","string"==typeof t?t.trim():t)},expression:"orderForm.remarks"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"remarks",label:"入库时间:"}},[r("span",[e._v(e._s(e.orderForm.inTime))])])],1)],1)],1)])},staticRenderFns:[]};var n=r("VU/8")(a,o,!1,function(e){r("ECCx")},"data-v-3adc2aab",null);t.default=n.exports},ECCx:function(e,t){}});
//# sourceMappingURL=7.98356093a077da411c50.js.map