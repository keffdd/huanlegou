"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[784],{5784:function(a,s,t){t.r(s),t.d(s,{default:function(){return g}});var r=function(){var a=this,s=a._self._c;return s("div",[s("TypNav"),s("div",{staticClass:"main"},[s("div",{staticClass:"py-container"},[s("div",{staticClass:"bread"},[a._m(0),s("ul",{staticClass:"fl sui-tag"},[a.searchParams.categoryName?s("li",{staticClass:"with-x"},[a._v(a._s(a.searchParams.categoryName)),s("i",{on:{click:a.removecategoryName}},[a._v("×")])]):a._e(),a.searchParams.keyword?s("li",{staticClass:"with-x"},[a._v(a._s(a.searchParams.keyword)),s("i",{on:{click:a.removekeyword}},[a._v("×")])]):a._e(),a.searchParams.trademark?s("li",{staticClass:"with-x"},[a._v(a._s(a.searchParams.trademark.split(":")[1])),s("i",{on:{click:a.removeTradeMark}},[a._v("×")])]):a._e(),a._l(a.searchParams.props,(function(t,r){return s("li",{key:r,staticClass:"with-x"},[a._v(a._s(t.split(":")[1])),s("i",{on:{click:function(s){return a.removeProps(r)}}},[a._v("×")])])}))],2)]),s("SearchSelector",{on:{trademarkInfo:a.trademarkInfo,attrInfo:a.attrInfo}}),s("div",{staticClass:"details clearfix"},[s("div",{staticClass:"sui-navbar"},[s("div",{staticClass:"navbar-inner filter"},[s("ul",{staticClass:"sui-nav"},[s("li",{class:{active:a.isOne},on:{click:function(s){return a.changeOrder(1)}}},[s("a",[a._v("综合 "),s("span",{directives:[{name:"show",rawName:"v-show",value:a.isOne,expression:"isOne"}],staticClass:"iconfont",class:{"icon-down":a.isDown,"icon-up":a.isUp}})])]),s("li",{class:{active:a.isTwo},on:{click:function(s){return a.changeOrder(2)}}},[s("a",[a._v("价格 "),s("span",{directives:[{name:"show",rawName:"v-show",value:a.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-down":a.isDown,"icon-up":a.isUp}})])])])])]),s("div",{staticClass:"goods-list"},[s("ul",{staticClass:"yui3-g"},a._l(a.goodsList,(function(t){return s("li",{key:t.id,staticClass:"yui3-u-1-5"},[s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"p-img"},[s("router-link",{attrs:{to:`/detail/${t.id}`}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.defaultImg,expression:"good.defaultImg"}]})])],1),s("div",{staticClass:"price"},[s("strong",[s("em",[a._v("¥")]),s("i",[a._v(a._s(t.price))])])]),s("div",{staticClass:"attr"},[s("a",{attrs:{target:"_blank",href:"item.html",title:t.title}},[a._v(a._s(t.title))])]),a._m(1,!0),a._m(2,!0)])])})),0)]),s("div",{staticClass:"fr page"},[s("PagiNation",{attrs:{total:a.total,pageSize:a.searchParams.pageSize,pageNo:a.searchParams.pageNo,pagerCount:5},on:{currentPage:a.currentPage}})],1)])],1)])],1)},e=[function(){var a=this,s=a._self._c;return s("ul",{staticClass:"fl sui-breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[a._v("全部结果")])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"commit"},[s("i",{staticClass:"command"},[a._v("已有"),s("span",[a._v("1999")]),a._v("人评价")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"operate"},[s("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[a._v("加入购物车")]),s("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[a._v("收藏")])])}],i=function(){var a=this,s=a._self._c;return s("div",{staticClass:"clearfix selector"},[s("div",{staticClass:"type-wrap logo"},[s("div",{staticClass:"fl key brand"},[a._v("品牌")]),s("div",{staticClass:"value logos"},[s("ul",{staticClass:"logo-list"},a._l(a.trademarkList,(function(t){return s("li",{key:t.tmId,on:{click:function(s){return a.changTradeMark(t)}}},[a._v(a._s(t.tmName))])})),0)]),a._m(0)]),a._l(a.attrsList,(function(t){return s("div",{key:t.attrId,staticClass:"type-wrap"},[s("div",{staticClass:"fl key"},[a._v(a._s(t.attrName))]),s("div",{staticClass:"fl value"},[s("ul",{staticClass:"type-list"},a._l(t.attrValueList,(function(r,e){return s("li",{key:e,on:{click:function(s){return a.atrrInfo(t,r)}}},[s("a",[a._v(a._s(r))])])})),0)]),s("div",{staticClass:"fl ext"})])}))],2)},c=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"ext"},[s("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[a._v("多选")]),s("a",{attrs:{href:"javascript:void(0);"}},[a._v("更多")])])}],o=t(629),n={name:"SearchSelector",computed:{...(0,o.Se)(["attrsList","trademarkList"])},methods:{changTradeMark(a){this.$emit("trademarkInfo",a)},atrrInfo(a,s){this.$emit("attrInfo",a,s)}}},l=n,h=t(1001),d=(0,h.Z)(l,i,c,!1,null,"6404003b",null),m=d.exports,u={name:"MySearch",components:{SearchSelector:m},data(){return{searchParams:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",props:[],trademark:"",order:"1:desc",pageNo:1,pageSize:5},up:"↑",down:"↓"}},beforeMount(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},methods:{getSearchData(){this.$store.dispatch("getSearchList",this.searchParams)},removecategoryName(){this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0,this.searchParams.categoryName=void 0,this.getSearchData(),this.$router.push({name:"search",params:this.$route.params})},removekeyword(){this.searchParams.keyword=void 0,this.getSearchData(),this.$router.push({name:"search",query:this.$route.query}),this.$bus.$emit("clear")},trademarkInfo(a){this.searchParams.trademark=`${a.tmId}:${a.tmName}`,this.getSearchData()},removeTradeMark(){this.searchParams.trademark="",this.getSearchData()},attrInfo(a,s){let t=`${a.attrId}:${s}:${a.attrName}`;-1==this.searchParams.props.indexOf(t)&&(this.searchParams.props.push(t),this.getSearchData())},removeProps(a){this.searchParams.props.splice(a,1),this.getSearchData()},changeOrder(a){let s=this.searchParams.order.split(":")[0],t=this.searchParams.order.split(":")[1],r="";r=a==s?`${s}:${"desc"==t?"asc":"desc"}`:`${a}:desc`,this.searchParams.order=r,this.getSearchData()},currentPage(a){this.searchParams.pageNo=a,this.getSearchData()}},mounted(){this.getSearchData()},computed:{...(0,o.Se)(["goodsList"]),...(0,o.rn)({total:a=>a.search.searchList.total}),isOne(){return this.searchParams.order.includes(1)},isTwo(){return this.searchParams.order.includes(2)},isUp(){return this.searchParams.order.includes("asc")},isDown(){return this.searchParams.order.includes("desc")}},watch:{$route(){this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0,Object.assign(this.searchParams,this.$route.query,this.$route.params),this.getSearchData()}}},v=u,p=(0,h.Z)(v,r,e,!1,null,"49dabb8e",null),g=p.exports}}]);