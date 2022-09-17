<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cartInfo in cartInfoList" :key="cartInfo.id">
          <li class="cart-list-con1" >
            <input type="checkbox" name="chk_list" :checked="cartInfo.isChecked==1" @change="updateChecked(cartInfo,$event)">
          </li>
          <li class="cart-list-con2">
            <img :src="cartInfo.imgUrl">
            <div class="item-msg">{{cartInfo.skuName}}</div>
          </li>
        
          <li class="cart-list-con4">
            <span class="price">{{cartInfo.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="handler('Subtraction',-1,cartInfo)">-</a>
            <input autocomplete="off" type="text" :value="cartInfo.skuNum" minnum="1" class="itxt" @change="handler('change',$event.target.value*1,cartInfo)">
            <a href="javascript:void(0)" class="plus" @click="handler('add',1,cartInfo)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cartInfo.cartPrice*cartInfo.skuNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCart(cartInfo)">删除</a>
            <br>
            <a>移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllchecked && cartInfoList.length>0" :disabled="cartInfoList.length==0" @change="checkedAll">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCheckedCart">删除选中的商品</a>
        <a >移到我的关注</a>
        <a>清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <!-- <a class="sum-btn" href="###" target="_blank">结算</a> -->
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name: 'ShopCart',
    mounted() {
      this.getShopCartData()
      // this.$store.dispatch('getDeleteCart',this.cartInfo.skuId)
    },
    methods: {
      getShopCartData(){
        this.$store.dispatch('getShopCart')
      },
      // 传入3个参数
      async handler(type,disNum,cartInfo){
        // console.log(type,disNum,cartInfo);
        switch(type){
          case 'add':
            disNum =1
            break
          case 'Subtraction':
            // 数量必须大于1
            disNum= cartInfo.skuNum>1 ?-1:0
            break
          case "change":
            // 不正常情况
            if(isNaN(disNum)||disNum<0){
              disNum=0
            }else{
              disNum = parseInt(disNum)-cartInfo.skuNum
            }
            break
        }
       try {
         await this.$store.dispatch('addOrUpdateCart',{skuId:cartInfo.skuId,skuNum:disNum})
         this.getShopCartData()
       } catch (error) {
        alert("修改数量失败");
       }
      },
      // 删除商品
      async deleteCart(cartInfo){
        // console.log(cartInfo);
        try {
          await this.$store.dispatch('getDeleteCart',cartInfo.skuId)
          // 如果删除成功再次发请求
          this.getShopCartData()
        } catch (error) {
        alert("删除商品失败");
          
        }
      },
      // 修改商品的状态
      async updateChecked(cartInfo,event){
          let params = {
        skuId: cartInfo.skuId,
        isChecked: event.target.checked ? "1" : "0",
      };
      //发请求:修改商品的勾选的状态
      try {
          await this.$store.dispatch("updateChecked", params);
        this.getShopCartData();
      } catch (error) {
        alert('失败')
      }
    },
    // 删除选中的商品
    async deleteAllCheckedCart(){
     try {
       await this.$store.dispatch('deleteAllCheckedCart')
       this.getShopCartData()
     } catch (error) {
      alert('删除失败')
     }
    },
    // 全选
    async checkedAll(event){
    try {
        let isChecked = event.target.checked?'1':'0'
      await this.$store.dispatch('updatecheckedAll',isChecked)
      this.getShopCartData()
    } catch (error) {
      alert(error.message)
    }
    }
    },
    computed: {
      ...mapGetters(['ShopCartList']),
      // 购物车的数据
      cartInfoList(){
        return this.ShopCartList.cartInfoList||[]
      },
      // 总价格
      totalPrice(){
        // let res = this.cartInfoList.filter(item => {return item.isChecked === 1}).
        // map(item =>{return item.skuNum * item.skuPrice}).reduce((pre,cur) => {return pre + cur}) 
        // return res
          return this.cartInfoList.filter(item => {return item.isChecked === 1}).reduce((a, b) => a + b.skuPrice * b.skuNum, 0);
           },
          //  是否全选
      isAllchecked(){
        // return  this.cartInfoList.every((item)=>{
        //   item.isChecked==1
        // })
      //  return this.cartInfoList.filter(item=>item.isChecked=='1').length===this.cartInfoList.length;
      return this.cartInfoList.every(item=>item.isChecked==1)

    },
  }
  }
</script>

<style lang="less" scoped>
  .cart{
    a{
        text-decoration: none;
    }
    text-decoration: none;
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 25%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
        }

        .cart-th3,
        .cart-th4,
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 15%;
          }

          .cart-list-con2 {
            width: 35%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }

          .cart-list-con4 {
            width: 10%;

          }

          .cart-list-con5 {
            width: 16%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 10%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 13%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>