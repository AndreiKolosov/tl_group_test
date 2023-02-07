(function(){"use strict";var e={7443:function(e,t,s){var r=s(9242),n=s(3396);const l={class:"users-statistics"},o={class:"controls"},a={class:"controls__sorting"},i=(0,n._)("h2",{class:"controls__block-title"},"Сортировать таблицу",-1),u={class:"controls__filters"},c=(0,n._)("h2",{class:"controls__block-title"},"Фильтрация значений",-1),d={class:"controls__orders-filter"},m=(0,n._)("p",{class:"controls__orders-filter-title"},"Подтвержденные заказы",-1);function p(e,t,s,r,p,h){const f=(0,n.up)("MySelect"),_=(0,n.up)("MyInput"),w=(0,n.up)("MyButton"),v=(0,n.up)("UserTable");return(0,n.wg)(),(0,n.iD)("main",null,[(0,n._)("section",l,[(0,n._)("div",o,[(0,n._)("div",a,[i,(0,n.Wm)(f,{class:"controls__sorting-by",modelValue:p.selectedSort,"onUpdate:modelValue":t[0]||(t[0]=e=>p.selectedSort=e),options:p.columns,placeholderValue:"Выберити способ сортировки..."},null,8,["modelValue","options","placeholderValue"]),(0,n.Wm)(f,{class:"controls__sorting-dir",modelValue:p.selectedSortDirection,"onUpdate:modelValue":t[1]||(t[1]=e=>p.selectedSortDirection=e),options:p.sortingDirections,placeholderValue:"Выберити направление сортировки..."},null,8,["modelValue","options","placeholderValue"])]),(0,n._)("div",u,[c,(0,n.Wm)(_,{class:"controls__search",modelValue:p.searchQuery,"onUpdate:modelValue":t[2]||(t[2]=e=>p.searchQuery=e),type:"text",placeholder:"Найти по логину"},null,8,["modelValue"]),(0,n.Wm)(f,{class:"controls__filter-by-status",modelValue:p.selectedStatus,"onUpdate:modelValue":t[3]||(t[3]=e=>p.selectedStatus=e),options:p.statusOptions,placeholderValue:"Выберите статус..."},null,8,["modelValue","options","placeholderValue"]),(0,n._)("div",d,[m,(0,n.Wm)(_,{class:"controls__orders-min-input input_number",modelValue:p.minConfirmedOrders,"onUpdate:modelValue":t[4]||(t[4]=e=>p.minConfirmedOrders=e),type:"number",min:"0",placeholder:"От"},null,8,["modelValue"]),(0,n.Wm)(_,{class:"controls__orders-max-input input_number",modelValue:p.maxConfirmedOrders,"onUpdate:modelValue":t[5]||(t[5]=e=>p.maxConfirmedOrders=e),type:"number",placeholder:"До"},null,8,["modelValue"])])]),(0,n.Wm)(w,{onClick:h.resetTable,class:"controls__reset-btn"},{default:(0,n.w5)((()=>[(0,n.Uk)("Сбросить фильтры")])),_:1},8,["onClick"])]),(0,n.Wm)(v,{users:h.preparedUsers,columns:p.columns},null,8,["users","columns"])])])}var h=s(7139);const f=["value"],_={value:"",class:"placeholder"},w=["value"];function v(e,t,s,r,l,o){return(0,n.wg)(),(0,n.iD)("select",{value:s.modelValue,onChange:t[0]||(t[0]=(...e)=>o.changeOption&&o.changeOption(...e))},[(0,n._)("option",_,(0,h.zw)(s.placeholderValue),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.options,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.value,value:e.value},(0,h.zw)(e.name),9,w)))),128))],40,f)}var g={name:"MySelect",props:{placeholderValue:String,modelValue:String,options:{type:Array,default:()=>[]}},methods:{changeOption(e){this.$emit("update:modelValue",e.target.value)}}},y=s(89);const b=(0,y.Z)(g,[["render",v],["__scopeId","data-v-669fe2d9"]]);var O=b;const S=e=>((0,n.dD)("data-v-3e1d946a"),e=e(),(0,n.Cn)(),e),U=S((()=>(0,n._)("h2",{class:"title"},"Таблица пользователей",-1))),V={class:"users-table"},C={class:"user-table__head"},x={class:"user-table__cell-text"};function D(e,t,s,l,o,a){const i=(0,n.up)("UserTableRow");return(0,n.wg)(),(0,n.iD)(n.HY,null,[U,(0,n._)("table",V,[(0,n._)("thead",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.columns,(e=>((0,n.wg)(),(0,n.iD)("td",{class:"user-table__head-cell",key:e.value},[(0,n._)("p",x,(0,h.zw)(e.name),1)])))),128))]),(0,n._)("tbody",null,[(0,n.Wm)(r.W3,{name:"users"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.users,(e=>((0,n.wg)(),(0,n.j4)(i,{class:"user-table__row",key:e.id,user:e},null,8,["user"])))),128))])),_:1})])])],64)}const R={class:"row"},k={class:"row__cell"},I={class:"row__cell-text"},W={class:"row__cell"},P={class:"row__cell-text"},T={class:"row__cell"},j={class:"row__cell-text"},M={class:"row__cell"},z={class:"row__cell-text"};function Q(e,t,s,r,l,o){return(0,n.wg)(),(0,n.iD)("tr",R,[(0,n._)("td",k,[(0,n._)("p",I,(0,h.zw)(s.user.position),1)]),(0,n._)("td",W,[(0,n._)("p",P,(0,h.zw)(s.user.login),1)]),(0,n._)("td",T,[(0,n._)("p",j,(0,h.zw)(s.user.confirmedOrders),1)]),(0,n._)("td",M,[(0,n._)("p",z,(0,h.zw)(s.user.status),1)])])}var Z={props:{user:{type:Object,required:!0}}};const A=(0,y.Z)(Z,[["render",Q],["__scopeId","data-v-6bc28614"]]);var B=A,H={components:{UserTableRow:B,TransitionGroup:r.W3},props:{users:{type:Array,required:!0},columns:{type:Array,required:!0}}};const Y=(0,y.Z)(H,[["render",D],["__scopeId","data-v-3e1d946a"]]);var q=Y;const F=[{id:1231,position:1,login:"smith@gmail.com",confirmedOrders:312,status:"Ценитель красоты"},{id:23245,position:2,login:"lenin@gmail.com",confirmedOrders:120,status:"Поставщик аксессуаров"},{id:33421,position:3,login:"mask@gmail.com",confirmedOrders:98,status:"Конкурент минздрава"},{id:45431,position:4,login:"dog@mail.ru",confirmedOrders:64,status:"рыбак"},{id:55642,position:5,login:"nightmare@mail.ru",confirmedOrders:34,status:"охотник"},{id:61233,position:6,login:"cat@mail.ru",confirmedOrders:1,status:"Ценитель красоты"}],K=[{value:"position",name:"Место"},{value:"login",name:"Логин"},{value:"confirmedOrders",name:"Подтвержденные заказы"},{value:"status",name:"Статус"}],L=(e,t)=>"number"===typeof e&&"number"===typeof t?e>t?1:e<t?-1:0:e?.localeCompare(t),$=(e,t)=>"number"===typeof e&&"number"===typeof t?e<t?1:e>t?-1:0:t?.localeCompare(e),E=[{value:"asc",name:"По возрастанию"},{value:"desc",name:"По убыванию"}],G=[{value:"Ценитель красоты",name:"Ценитель красоты"},{value:"Поставщик аксессуаров",name:"Поставщик аксессуаров"},{value:"Конкурент минздрава",name:"Конкурент минздрава"},{value:"рыбак",name:"рыбак"},{value:"охотник",name:"охотник"}],N=e=>{window.history.pushState(null,null,e)};var J={components:{UserTable:q,MySelect:O},data(){return{users:F,columns:K,sortingDirections:E,statusOptions:G,selectedSortDirection:"",selectedSort:"",searchQuery:"",selectedStatus:"",minConfirmedOrders:null,maxConfirmedOrders:null,newURl:new URL(window.location.href)}},methods:{resetTable(){this.selectedSortDirection="",this.selectedSort="",this.searchQuery="",this.selectedStatus="",this.minConfirmedOrders=null,this.maxConfirmedOrders=null,this.newURl.search="",N(this.newURl.href)},setInitialFilters(){const e=this.newURl.searchParams;this.selectedSortDirection=e.get("direction")||"",this.selectedSort=e.get("selected-sort")||"",this.searchQuery=e.get("search-string")||"",this.selectedStatus=e.get("selected-status")||"",this.minConfirmedOrders=e.get("min-orders")||null,this.maxConfirmedOrders=e.get("max-orders")||null}},computed:{sortedUsers(){return[...this.users].sort(((e,t)=>"desc"===this.selectedSortDirection?$(e[this.selectedSort],t[this.selectedSort]):L(e[this.selectedSort],t[this.selectedSort])))},sortedAndSearchedUsers(){return this.sortedUsers.filter((e=>e.login.toLowerCase().includes(this.searchQuery.toLowerCase())))},filteredByStatusUsers(){return this.sortedAndSearchedUsers.filter((e=>this.selectedStatus?e.status===this.selectedStatus:e))},preparedUsers(){return this.filteredByStatusUsers.filter((e=>this.maxConfirmedOrders?e.confirmedOrders<=this.maxConfirmedOrders:this.minConfirmedOrders?e.confirmedOrders>=this.minConfirmedOrders:e))}},watch:{minConfirmedOrders(e){e&&(this.newURl.searchParams.set("min-orders",e),N(this.newURl.href))},maxConfirmedOrders(e){e&&(this.newURl.searchParams.set("max-orders",e),N(this.newURl.href))},selectedSortDirection(e){""!==e&&(this.newURl.searchParams.set("direction",e),N(this.newURl.href))},selectedSort(e){""!==e&&(this.newURl.searchParams.set("selected-sort",e),N(this.newURl.href))},searchQuery(e){""!==e&&(this.newURl.searchParams.set("search-string",e),N(this.newURl.href))},selectedStatus(e){""!==e&&(this.newURl.searchParams.set("selected-status",e),N(this.newURl.href))}},mounted(){this.setInitialFilters()}};const X=(0,y.Z)(J,[["render",p]]);var ee=X;const te={class:"btn"};function se(e,t,s,r,l,o){return(0,n.wg)(),(0,n.iD)("button",te,[(0,n.WI)(e.$slots,"default")])}var re={name:"MyButton"};const ne=(0,y.Z)(re,[["render",se]]);var le=ne;const oe=["value"];function ae(e,t,s,r,l,o){return(0,n.wg)(),(0,n.iD)("input",{value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>o.updateInput&&o.updateInput(...e)),class:"input",type:"text"},null,40,oe)}var ie={name:"MyInput",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const ue=(0,y.Z)(ie,[["render",ae],["__scopeId","data-v-30ee3f98"]]);var ce=ue,de=[le,O,ce];const me=(0,r.ri)(ee);de.forEach((e=>{me.component(e.name,e)})),me.mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,l){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],l=e[c][2];for(var a=!0,i=0;i<r.length;i++)(!1&l||o>=l)&&Object.keys(s.O).every((function(e){return s.O[e](r[i])}))?r.splice(i--,1):(a=!1,l<o&&(o=l));if(a){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,n,l]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,o=r[0],a=r[1],i=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(i)var c=i(s)}for(t&&t(r);u<o.length;u++)l=o[u],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(c)},r=self["webpackChunktl_group_test"]=self["webpackChunktl_group_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7443)}));r=s.O(r)})();
//# sourceMappingURL=app.51675b67.js.map