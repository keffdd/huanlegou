<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>欢乐购欢迎您！</p>
          <p v-if="!username">
            <span>请</span>
            <!-- <a href="###">登录</a> -->
            <router-link to="./login">登录</router-link>
            <!-- <a href="###" class="register">免费注册</a> -->
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{username}} </a>
            <a class="register" @click="loginOut">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <!-- <a href="###">我的订单</a> -->
          <router-link  to="/center/myorder">我的订单</router-link>
          <!-- <a href="###">我的购物车</a> -->
          <router-link to="/shopcart">我的购物车 </router-link>
          <a href="###">我的欢乐购</a>
          <a href="###">欢乐购会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注欢乐购</a>
          <a href="###">客户服务</a>
          <a href="###">网站导航</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            v-model="keyword"
            id="autocomplete"
            class="input-error input-xxlarge"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="GoSearch" 
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
      //点击搜索按钮之前,如果路径当中有query参数,需要携带给search
    GoSearch() {
      let locations = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      };
      //确定路径当中有query参数
      if (this.$route.query.categoryName) {
        locations.query = this.$route.query;
      }

      this.$router.push(locations);
    },
    // 退出登录
    async loginOut(){
     try {
      await this.$store.dispatch('logOut')
      this.$router.push('/home')
     } catch (error) {
      return error.message
     }
    }
  },
  mounted() {
    //清除关键字
    this.$bus.$on('clear',()=>{
      this.keyword = ''
    })
  },
  computed: {
    username(){
      return this.$store.state.user.userinfo.name
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>