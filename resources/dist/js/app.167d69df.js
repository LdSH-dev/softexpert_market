(function(){"use strict";var t={6881:function(t,e,a){a(2166);var r=a(3233),o=a(3396);const n={id:"app"};function l(t,e,a,r,l,s){const i=(0,o.up)("MarketNavbar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(i),(0,o.Wm)(c)])}const s={class:"navbar navbar-expand-lg navbar-light"},i=(0,o.uE)('<div class="container" data-v-e30cb4b0><a class="navbar-brand" href="#" data-v-e30cb4b0>Meu Software</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-e30cb4b0><span class="navbar-toggler-icon" data-v-e30cb4b0></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-e30cb4b0><ul class="navbar-nav ml-auto" data-v-e30cb4b0><li class="nav-item" data-v-e30cb4b0><a class="nav-link" href="/sell" data-v-e30cb4b0>Sell</a></li><li class="nav-item" data-v-e30cb4b0><a class="nav-link" href="/categories" data-v-e30cb4b0>Categories</a></li><li class="nav-item" data-v-e30cb4b0><a class="nav-link" href="/products" data-v-e30cb4b0>Products</a></li></ul></div></div>',1),c=[i];function d(t,e,a,r,n,l){return(0,o.wg)(),(0,o.iD)("nav",s,c)}var u={name:"MarketNavbar"},p=a(89);const h=(0,p.Z)(u,[["render",d],["__scopeId","data-v-e30cb4b0"]]);var m=h,_={name:"App",components:{MarketNavbar:m}};const g=(0,p.Z)(_,[["render",l]]);var b=g,f=a(4736),v=(a(7691),(0,f.Rd)({theme:{dark:!1,themes:{light:{primary:"#0091ed",secondary:"#ff4081"},dark:{primary:"#42a5f5",secondary:"#f50057"}}}})),y=a(678);const w=t=>((0,o.dD)("data-v-c85159fe"),t=t(),(0,o.Cn)(),t),F={id:"home"},C=w((()=>(0,o._)("h1",null,"Bem-vindo ao meu software",-1))),P=w((()=>(0,o._)("p",null,"Esta é a tela inicial do software.",-1))),M=[C,P];function D(t,e,a,r,n,l){return(0,o.wg)(),(0,o.iD)("div",F,M)}var k={name:"HomeScreen"};const x=(0,p.Z)(k,[["render",D],["__scopeId","data-v-c85159fe"]]);var q=x,S=a(7156);const I=t=>((0,o.dD)("data-v-73622099"),t=t(),(0,o.Cn)(),t),T={id:"category"},z=I((()=>(0,o._)("h1",{class:"category-title"},"Category",-1))),L={class:"table-container"},N={class:"table table-transparent"},V=I((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"#"),(0,o._)("th",null,"ID"),(0,o._)("th",null,"Name"),(0,o._)("th",null,"Fee"),(0,o._)("th",null,"Status"),(0,o._)("th",null,"Actions")])],-1))),Z={key:0,class:"status-active"},U={key:1,class:"status-inactive"},O=["onClick"],A=["onClick"],E=I((()=>(0,o._)("td",null,null,-1))),$=I((()=>(0,o._)("td",null,null,-1))),j=I((()=>(0,o._)("td",null,null,-1))),H=I((()=>(0,o._)("td",null,null,-1))),K=I((()=>(0,o._)("td",null,null,-1))),R={class:"pagination-container"},Q=["hidden"],Y=["hidden"],G={key:0,class:"modal"},W={class:"modal-content"},B=I((()=>(0,o._)("h2",null,"Edit Category",-1))),J={class:"form-group"},X=I((()=>(0,o._)("label",{for:"name"},"Name:",-1))),tt={class:"form-group"},et=I((()=>(0,o._)("label",{for:"fee"},"Fee:",-1))),at={class:"form-group"},rt=I((()=>(0,o._)("label",{for:"status"},"Status:",-1))),ot=I((()=>(0,o._)("option",{value:"true"},"Active",-1))),nt=I((()=>(0,o._)("option",{value:"false"},"Inactive",-1))),lt=[ot,nt],st=I((()=>(0,o._)("button",{type:"submit",class:"btn btn-primary"},"Save",-1))),it={key:1,class:"modal"},ct={class:"modal-content"},dt=I((()=>(0,o._)("h2",null,"New Category",-1))),ut={class:"form-group"},pt=I((()=>(0,o._)("label",{for:"name"},"Name:",-1))),ht={class:"form-group"},mt=I((()=>(0,o._)("label",{for:"fee"},"Fee:",-1))),_t={class:"form-group"},gt=I((()=>(0,o._)("label",{for:"status"},"Status:",-1))),bt=I((()=>(0,o._)("option",{value:"true"},"Active",-1))),ft=I((()=>(0,o._)("option",{value:"false"},"Inactive",-1))),vt=[bt,ft],yt=I((()=>(0,o._)("button",{type:"submit",class:"btn btn-success"},"Save",-1)));function wt(t,e,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",T,[z,(0,o._)("div",L,[(0,o._)("table",N,[V,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.paginatedData,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:t.uuid},[(0,o._)("td",null,(0,S.zw)((l.currentPage-1)*l.perPage+e+1),1),(0,o._)("td",null,(0,S.zw)(t.uuid),1),(0,o._)("td",null,(0,S.zw)(t.name),1),(0,o._)("td",null,(0,S.zw)(t.fee),1),(0,o._)("td",null,[t.status?((0,o.wg)(),(0,o.iD)("span",Z,"Active")):((0,o.wg)(),(0,o.iD)("span",U,"Inactive"))]),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-primary btn-sm",onClick:e=>s.editItem(t)},"Edit",8,O),(0,o._)("button",{class:"btn btn-danger btn-sm",onClick:e=>s.deleteItem(t)},"Delete",8,A)])])))),128)),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-success btn-sm",onClick:e[0]||(e[0]=(...t)=>s.openCreateModal&&s.openCreateModal(...t))},"New Category")]),E,$,j,H,K])])]),(0,o._)("div",R,[(0,o._)("button",{class:"btn btn-primary btn-sm",hidden:1===l.currentPage,onClick:e[1]||(e[1]=(...t)=>s.previousPage&&s.previousPage(...t))},"Previous",8,Q),(0,o._)("span",null,(0,S.zw)(l.currentPage)+" / "+(0,S.zw)(s.totalPages),1),(0,o._)("button",{class:"btn btn-primary btn-sm",hidden:l.currentPage===s.totalPages,onClick:e[2]||(e[2]=(...t)=>s.nextPage&&s.nextPage(...t))},"Next",8,Y)]),l.showModal?((0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("div",W,[B,(0,o._)("form",{onSubmit:e[7]||(e[7]=(0,r.iM)(((...t)=>s.updateItem&&s.updateItem(...t)),["prevent"]))},[(0,o._)("div",J,[X,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":e[3]||(e[3]=t=>l.editForm.name=t),class:"form-control",required:""},null,512),[[r.nr,l.editForm.name]])]),(0,o._)("div",tt,[et,(0,o.wy)((0,o._)("input",{type:"text",id:"fee","onUpdate:modelValue":e[4]||(e[4]=t=>l.editForm.fee=t),class:"form-control",required:""},null,512),[[r.nr,l.editForm.fee]])]),(0,o._)("div",at,[rt,(0,o.wy)((0,o._)("select",{id:"status","onUpdate:modelValue":e[5]||(e[5]=t=>l.editForm.status=t),class:"form-control",required:""},lt,512),[[r.bM,l.editForm.status]])]),st,(0,o._)("button",{type:"button",class:"btn btn-secondary",onClick:e[6]||(e[6]=(...t)=>s.closeModal&&s.closeModal(...t))},"Cancel")],32)])])):(0,o.kq)("",!0),l.showModalCreate?((0,o.wg)(),(0,o.iD)("div",it,[(0,o._)("div",ct,[dt,(0,o._)("form",{onSubmit:e[12]||(e[12]=(0,r.iM)(((...t)=>s.createItem&&s.createItem(...t)),["prevent"]))},[(0,o._)("div",ut,[pt,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":e[8]||(e[8]=t=>l.createForm.name=t),class:"form-control",required:""},null,512),[[r.nr,l.createForm.name]])]),(0,o._)("div",ht,[mt,(0,o.wy)((0,o._)("input",{type:"text",id:"fee","onUpdate:modelValue":e[9]||(e[9]=t=>l.createForm.fee=t),class:"form-control",required:""},null,512),[[r.nr,l.createForm.fee]])]),(0,o._)("div",_t,[gt,(0,o.wy)((0,o._)("select",{id:"status","onUpdate:modelValue":e[10]||(e[10]=t=>l.createForm.status=t),class:"form-control",required:""},vt,512),[[r.bM,l.createForm.status]])]),yt,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[11]||(e[11]=(...t)=>s.closeModalCreate&&s.closeModalCreate(...t))},"Cancel")],32)])])):(0,o.kq)("",!0)])}var Ft=a(4161),Ct={name:"CategoryScreen",data(){return{dataList:[],currentPage:1,perPage:10,showModal:!1,showModalCreate:!1,editForm:{id:"",name:"",status:!1,fee:""},createForm:{name:"",status:!0,fee:""}}},computed:{totalPages(){return Math.ceil(this.dataList.length/this.perPage)},paginatedData(){if(Array.isArray(this.dataList)&&this.dataList.length>0){const t=(this.currentPage-1)*this.perPage,e=t+this.perPage;return this.dataList.slice(t,e)}return[]}},mounted(){this.fetchData()},methods:{fetchData(){Ft.Z.get("http://localhost:8000/category").then((t=>{t.data["success"]?this.dataList=t.data["data"]:this.dataList=[]})).catch((t=>{console.error(t)}))},previousPage(){this.currentPage>1&&this.currentPage--},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},deleteItem(t){const e=new FormData;e.append("id",t.uuid),Ft.Z.post("http://localhost:8000/category/delete",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{t.data["success"]?this.fetchData():alert(t.data["error"])})).catch((t=>{console.error(t)}))},closeModal(){this.showModal=!1},editItem(t){this.editForm.id=t.uuid,this.editForm.name=t.name,this.editForm.fee=t.fee,this.editForm.status=t.status.toString(),this.showModal=!0},openCreateModal(){this.showModalCreate=!0},updateItem(){const t=new FormData;t.append("id",this.editForm.id),t.append("name",this.editForm.name),t.append("status",this.editForm.status),t.append("fee",this.editForm.fee),Ft.Z.post("http://localhost:8000/category/update",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{t.data["success"]?this.fetchData():alert(t.data["error"]),this.closeModal()})).catch((t=>{console.error(t),this.closeModal()}))},createItem(){const t=new FormData;t.append("name",this.createForm.name),t.append("status",this.createForm.status),t.append("fee",this.createForm.fee),Ft.Z.post("http://localhost:8000/category/create",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{t.data["success"]?this.fetchData():alert(t.data["error"]),this.closeModalCreate()})).catch((t=>{console.error(t),this.closeModalCreate()}))},closeModalCreate(){this.showModalCreate=!1}}};const Pt=(0,p.Z)(Ct,[["render",wt],["__scopeId","data-v-73622099"]]);var Mt=Pt;const Dt=t=>((0,o.dD)("data-v-43853990"),t=t(),(0,o.Cn)(),t),kt={id:"product"},xt=Dt((()=>(0,o._)("h1",{class:"product-title"},"Product",-1))),qt={class:"table-container"},St={class:"table table-transparent"},It=Dt((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"#"),(0,o._)("th",null,"ID"),(0,o._)("th",null,"Name"),(0,o._)("th",null,"Category"),(0,o._)("th",null,"Price"),(0,o._)("th",null,"Quantity"),(0,o._)("th",null,"Status"),(0,o._)("th",null,"Actions")])],-1))),Tt={key:0,class:"status-active"},zt={key:1,class:"status-inactive"},Lt=["onClick"],Nt=["onClick"],Vt=Dt((()=>(0,o._)("td",null,null,-1))),Zt=Dt((()=>(0,o._)("td",null,null,-1))),Ut=Dt((()=>(0,o._)("td",null,null,-1))),Ot=Dt((()=>(0,o._)("td",null,null,-1))),At=Dt((()=>(0,o._)("td",null,null,-1))),Et=Dt((()=>(0,o._)("td",null,null,-1))),$t={class:"pagination-container"},jt=["hidden"],Ht=["hidden"],Kt={key:0,class:"modal"},Rt={class:"modal-content"},Qt=Dt((()=>(0,o._)("h2",null,"Edit Product",-1))),Yt={class:"form-group"},Gt=Dt((()=>(0,o._)("label",{for:"name"},"Name:",-1))),Wt={class:"form-group"},Bt=Dt((()=>(0,o._)("label",{for:"price"},"Price:",-1))),Jt={class:"form-group"},Xt=Dt((()=>(0,o._)("label",{for:"quantity"},"Quantity:",-1))),te={class:"form-group"},ee=Dt((()=>(0,o._)("label",{for:"category_id"},"Categoria:",-1))),ae=["value"],re={class:"form-group"},oe=Dt((()=>(0,o._)("label",{for:"status"},"Status:",-1))),ne=Dt((()=>(0,o._)("option",{value:"true"},"Active",-1))),le=Dt((()=>(0,o._)("option",{value:"false"},"Inactive",-1))),se=[ne,le],ie=Dt((()=>(0,o._)("button",{type:"submit",class:"btn btn-primary"},"Save",-1))),ce={key:1,class:"modal"},de={class:"modal-content"},ue=Dt((()=>(0,o._)("h2",null,"New Product",-1))),pe={class:"form-group"},he=Dt((()=>(0,o._)("label",{for:"name"},"Name:",-1))),me={class:"form-group"},_e=Dt((()=>(0,o._)("label",{for:"price"},"Price:",-1))),ge={class:"form-group"},be=Dt((()=>(0,o._)("label",{for:"quantity"},"Quantity:",-1))),fe={class:"form-group"},ve=Dt((()=>(0,o._)("label",{for:"category_id"},"Categoria:",-1))),ye=["value"],we={class:"form-group"},Fe=Dt((()=>(0,o._)("label",{for:"status"},"Status:",-1))),Ce=Dt((()=>(0,o._)("option",{value:"true"},"Active",-1))),Pe=Dt((()=>(0,o._)("option",{value:"false"},"Inactive",-1))),Me=[Ce,Pe],De=Dt((()=>(0,o._)("button",{type:"submit",class:"btn btn-success"},"Save",-1)));function ke(t,e,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",kt,[xt,(0,o._)("div",qt,[(0,o._)("table",St,[It,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.paginatedData,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:t.uuid},[(0,o._)("td",null,(0,S.zw)((l.currentPage-1)*l.perPage+e+1),1),(0,o._)("td",null,(0,S.zw)(t.uuid),1),(0,o._)("td",null,(0,S.zw)(t.name),1),(0,o._)("td",null,(0,S.zw)(t.category.name),1),(0,o._)("td",null,"$"+(0,S.zw)(t.price),1),(0,o._)("td",null,(0,S.zw)(t.quantity),1),(0,o._)("td",null,[t.status?((0,o.wg)(),(0,o.iD)("span",Tt,"Active")):((0,o.wg)(),(0,o.iD)("span",zt,"Inactive"))]),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-primary btn-sm",onClick:e=>s.editItem(t)},"Edit",8,Lt),(0,o._)("button",{class:"btn btn-danger btn-sm",onClick:e=>s.deleteItem(t)},"Delete",8,Nt)])])))),128)),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-success btn-sm",onClick:e[0]||(e[0]=(...t)=>s.openCreateModal&&s.openCreateModal(...t))},"New Category")]),Vt,Zt,Ut,Ot,At,Et])])]),(0,o._)("div",$t,[(0,o._)("button",{class:"btn btn-primary btn-sm",hidden:1===l.currentPage,onClick:e[1]||(e[1]=(...t)=>s.previousPage&&s.previousPage(...t))},"Previous",8,jt),(0,o._)("span",null,(0,S.zw)(l.currentPage)+" / "+(0,S.zw)(s.totalPages),1),(0,o._)("button",{class:"btn btn-primary btn-sm",hidden:l.currentPage===s.totalPages,onClick:e[2]||(e[2]=(...t)=>s.nextPage&&s.nextPage(...t))},"Next",8,Ht)]),l.showModal?((0,o.wg)(),(0,o.iD)("div",Kt,[(0,o._)("div",Rt,[Qt,(0,o._)("form",{onSubmit:e[9]||(e[9]=(0,r.iM)(((...t)=>s.updateItem&&s.updateItem(...t)),["prevent"]))},[(0,o._)("div",Yt,[Gt,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":e[3]||(e[3]=t=>l.editForm.name=t),class:"form-control",required:""},null,512),[[r.nr,l.editForm.name]])]),(0,o._)("div",Wt,[Bt,(0,o.wy)((0,o._)("input",{type:"text",id:"price","onUpdate:modelValue":e[4]||(e[4]=t=>l.editForm.price=t),class:"form-control",required:""},null,512),[[r.nr,l.editForm.price]])]),(0,o._)("div",Jt,[Xt,(0,o.wy)((0,o._)("input",{type:"number",min:"0",id:"quantity","onUpdate:modelValue":e[5]||(e[5]=t=>l.editForm.quantity=t),class:"form-control",required:""},null,512),[[r.nr,l.editForm.quantity]])]),(0,o._)("div",te,[ee,(0,o.wy)((0,o._)("select",{id:"category_id","onUpdate:modelValue":e[6]||(e[6]=t=>l.editForm.category_id=t),class:"form-control",required:""},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.categories,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t.uuid,value:t.uuid},(0,S.zw)(t.name),9,ae)))),128))],512),[[r.bM,l.editForm.category_id]])]),(0,o._)("div",re,[oe,(0,o.wy)((0,o._)("select",{id:"status","onUpdate:modelValue":e[7]||(e[7]=t=>l.editForm.status=t),class:"form-control",required:""},se,512),[[r.bM,l.editForm.status]])]),ie,(0,o._)("button",{type:"button",class:"btn btn-secondary",onClick:e[8]||(e[8]=(...t)=>s.closeModal&&s.closeModal(...t))},"Cancel")],32)])])):(0,o.kq)("",!0),l.showModalCreate?((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",de,[ue,(0,o._)("form",{onSubmit:e[16]||(e[16]=(0,r.iM)(((...t)=>s.createItem&&s.createItem(...t)),["prevent"]))},[(0,o._)("div",pe,[he,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":e[10]||(e[10]=t=>l.createForm.name=t),class:"form-control",required:""},null,512),[[r.nr,l.createForm.name]])]),(0,o._)("div",me,[_e,(0,o.wy)((0,o._)("input",{type:"text",id:"price","onUpdate:modelValue":e[11]||(e[11]=t=>l.createForm.price=t),class:"form-control",required:""},null,512),[[r.nr,l.createForm.price]])]),(0,o._)("div",ge,[be,(0,o.wy)((0,o._)("input",{type:"number",min:"0",id:"quantity","onUpdate:modelValue":e[12]||(e[12]=t=>l.createForm.quantity=t),class:"form-control",required:""},null,512),[[r.nr,l.createForm.quantity]])]),(0,o._)("div",fe,[ve,(0,o.wy)((0,o._)("select",{id:"category_id","onUpdate:modelValue":e[13]||(e[13]=t=>l.createForm.category_id=t),class:"form-control",required:""},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.categories,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t.uuid,value:t.uuid},(0,S.zw)(t.name),9,ye)))),128))],512),[[r.bM,l.createForm.category_id]])]),(0,o._)("div",we,[Fe,(0,o.wy)((0,o._)("select",{id:"status","onUpdate:modelValue":e[14]||(e[14]=t=>l.createForm.status=t),class:"form-control",required:""},Me,512),[[r.bM,l.createForm.status]])]),De,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[15]||(e[15]=(...t)=>s.closeModalCreate&&s.closeModalCreate(...t))},"Cancel")],32)])])):(0,o.kq)("",!0)])}var xe={name:"ProductScreen",data(){return{dataList:[],currentPage:1,perPage:10,showModal:!1,showModalCreate:!1,categories:[],editForm:{id:"",name:"",category_id:"",price:"",quantity:"",status:!1},createForm:{name:"",status:!0,price:"",quantity:"",category_id:""}}},computed:{totalPages(){return Math.ceil(this.dataList.length/this.perPage)},paginatedData(){if(Array.isArray(this.dataList)&&this.dataList.length>0){const t=(this.currentPage-1)*this.perPage,e=t+this.perPage;return this.dataList.slice(t,e)}return[]}},mounted(){this.fetchData()},methods:{fetchData(){Ft.Z.get("http://localhost:8000/product").then((t=>{t.data["success"]?this.dataList=t.data["data"]:this.dataList=[]})).catch((t=>{console.error(t)})),Ft.Z.get("http://localhost:8000/category").then((t=>{t.data["success"]?this.categories=t.data["data"]:this.categories=[]})).catch((t=>{console.error(t)}))},previousPage(){this.currentPage>1&&this.currentPage--},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},deleteItem(t){const e=new FormData;e.append("id",t.uuid),Ft.Z.post("http://localhost:8000/product/delete",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{t.data["success"]?this.fetchData():alert(t.data["error"])})).catch((t=>{console.error(t)}))},closeModal(){this.showModal=!1},editItem(t){this.editForm.id=t.uuid,this.editForm.name=t.name,this.editForm.category_id=t.category_id,this.editForm.price=t.price,this.editForm.quantity=t.quantity,this.editForm.status=t.status.toString(),this.showModal=!0},openCreateModal(){this.showModalCreate=!0},updateItem(){const t=new FormData;t.append("id",this.editForm.id),t.append("name",this.editForm.name),t.append("category_id",this.editForm.category_id),t.append("price",this.editForm.price),t.append("quantity",this.editForm.quantity),t.append("status",this.editForm.status),Ft.Z.post("http://localhost:8000/product/update",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{t.data["success"]?this.fetchData():alert(t.data["error"]),this.closeModal()})).catch((t=>{console.error(t),this.closeModal()}))},createItem(){const t=new FormData;t.append("name",this.createForm.name),t.append("status",this.createForm.status),t.append("category_id",this.createForm.category_id),t.append("price",this.createForm.price),t.append("quantity",this.createForm.quantity),Ft.Z.post("http://localhost:8000/product/create",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{t.data["success"]?this.fetchData():alert(t.data["error"]),this.closeModalCreate()})).catch((t=>{console.error(t),this.closeModalCreate()}))},closeModalCreate(){this.showModalCreate=!1}}};const qe=(0,p.Z)(xe,[["render",ke],["__scopeId","data-v-43853990"]]);var Se=qe;const Ie={id:"sell"},Te=(0,o._)("h1",{class:"sell-title"},"Sales",-1),ze={class:"search-results"},Le=["onClick"],Ne={class:"product-table"},Ve=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Quantity"),(0,o._)("th",null,"Product"),(0,o._)("th",null,"Category"),(0,o._)("th",null,"Price ($)"),(0,o._)("th",null,"Tax ($)"),(0,o._)("th")])],-1),Ze=["value","max","onInput"],Ue=["onClick"],Oe={class:"total"},Ae={class:"tax"},Ee={class:"grand-total"};function $e(t,e,a,n,l,s){return(0,o.wg)(),(0,o.iD)("div",Ie,[Te,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.search=t),onKeyup:e[1]||(e[1]=(0,r.D2)(((...e)=>t.addProduct&&t.addProduct(...e)),["enter"])),placeholder:"Search product"},null,544),[[r.nr,l.search]]),(0,o._)("ul",ze,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.searchResults,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id,onClick:e=>s.addProductFromSearch(t)},(0,S.zw)(t.name),9,Le)))),128))]),(0,o._)("table",Ne,[Ve,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.products,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("td",null,[(0,o._)("input",{type:"number",value:t.quantity_selected,min:"0",max:t.quantity,style:{width:"50px"},onInput:e=>s.updateQuantitySelected(e,t)},null,40,Ze)]),(0,o._)("td",null,(0,S.zw)(t.name),1),(0,o._)("td",null,(0,S.zw)(t.category.name),1),(0,o._)("td",null,"$"+(0,S.zw)(t.price),1),(0,o._)("td",null,"$"+(0,S.zw)(s.calculateTax(t.price,t.category.fee)),1),(0,o._)("td",null,[(0,o._)("button",{class:"delete-button",onClick:t=>s.deleteProduct(e)},"X",8,Ue)])])))),128))])]),(0,o._)("div",Oe," Subtotal: $"+(0,S.zw)(s.calculateSubtotal()),1),(0,o._)("div",Ae," Total Tax: $"+(0,S.zw)(s.calculateTotalTax()),1),(0,o._)("div",Ee," Grand Total: $"+(0,S.zw)(s.calculateGrandTotal()),1),(0,o._)("button",{class:"btn btn-success",onClick:e[2]||(e[2]=t=>s.sellProducts())},"Confirm Sale")])}a(7658);var je={name:"SellScreen",data(){return{search:"",searchResults:[],products:[],dataList:[]}},mounted(){this.fetchData()},methods:{fetchData(){Ft.Z.get("http://localhost:8000/product").then((t=>{t.data["success"]?this.dataList=t.data["data"]:this.dataList=[]})).catch((t=>{console.error(t)})),Ft.Z.get("http://localhost:8000/category").then((t=>{t.data["success"]?this.categories=t.data["data"]:this.categories=[]})).catch((t=>{console.error(t)}))},updateQuantitySelected(t,e){const a=t.target.value;/^\d*$/.test(a)?e.quantity_selected=a:e.quantity_selected=0},calculateTax(t,e){return(t*e).toFixed(2)},calculateSubtotal(){let t=0;return this.products.forEach((e=>{t+=e.price*e.quantity})),t.toFixed(2)},calculateTotalTax(){let t=0;return this.products.forEach((e=>{t+=this.calculateTax(e.price,e.category.fee)*e.quantity,console.log(t)})),t.toFixed(2)},getSearchResults(){if(this.search){const t=this.search.toLowerCase();return this.dataList.filter((e=>e.name.toLowerCase().includes(t)))}return[]},calculateGrandTotal(){const t=parseFloat(this.calculateSubtotal()),e=parseFloat(this.calculateTotalTax());return(t+e).toFixed(2)},addProductFromSearch(t){t.quantity_selected=0,this.products.push(t),this.search="",this.searchResults=[]},deleteProduct(t){this.products.splice(t,1)},sellProducts(){const t=new FormData;t.append("total_value",this.calculateGrandTotal()),t.append("total_fee",this.calculateTotalTax()),t.append("item",JSON.stringify(this.products)),Ft.Z.post("http://localhost:8000/sale/create",t).then((t=>{t.data["success"]?(alert("Venda concluída com sucesso!"),this.fetchData()):alert(t.data["error"])})).catch((t=>{console.error(t)}))}},watch:{search:function(){this.searchResults=this.getSearchResults()}},computed:{filteredProducts(){if(this.search){const t=this.search.toLowerCase();return this.dataList.filter((e=>e.name.toLowerCase().includes(t)))}return[]}}};const He=(0,p.Z)(je,[["render",$e]]);var Ke=He;const Re=[{path:"/",name:"Home",component:q},{path:"/categories",name:"Categories",component:Mt},{path:"/products",name:"Products",component:Se},{path:"/sell",name:"Sell",component:Ke}],Qe=(0,y.p7)({history:(0,y.PO)(),routes:Re}),Ye=(0,r.ri)(b);Ye.use(Qe),Ye.use(v),Ye.mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var l=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],n=t[d][2];for(var s=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[i])}))?r.splice(i--,1):(s=!1,n<l&&(l=n));if(s){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,l=r[0],s=r[1],i=r[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var d=i(a)}for(e&&e(r);c<l.length;c++)n=l[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},r=self["webpackChunkMarket"]=self["webpackChunkMarket"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6881)}));r=a.O(r)})();
//# sourceMappingURL=app.167d69df.js.map