<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
                <h3>
                  <a
                    class="red"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c1.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c1.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// import 'animate.css'
//利用辅助函数获取仓库state数据--->mapState
import { mapState } from "vuex";
export default {
  name: "TypNav",
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    //派发action
    //路由切换的时候,路由组件会被销毁重建【子组件不也是】
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        //对象写法,对象的K,给VC新增的属性
      //新增的属性erha,右侧属性值为箭头函数返回的结果。作为新增属性的属性值
      //箭头函数执行，注入一个参数state->大仓库【包含小仓库】
        return state.home.categoryList.slice(0, 16);
      },
    }),
  },
  methods: {
    goSearch(event) {
      let e = event.target;
      //获取触发事件节点的自定义属性【a:data-categoryName】

    
 //第一个问题:div父节点子元素太多【h3、h2、em、dt、dd、dl...a】？你怎么知道你点击的一定是a
      //第二个问题:要区分一级分类、二级分类、三级分类的a标签【category1Id|category2Id|category2Id】
      let { categoryname, category1id, category2id, category3id } = e.dataset;
      //判断点击的是a【不管是1|2|3】

      if (categoryname) {
        //点击只要是a,就是往search模块跳转

        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
        //一级分类的a

          query.category1Id = category1id;
        } else if (category2id) {
          //二级分类的a

          query.category2Id = category2id;
        } else {
          //三级分类的a

          query.category3Id = category3id;
        }
        //点击商品分类按钮的时候,如果路径当中携带params参数,需要合并携带给search模块
       if(this.$route.params){
        location.params =this.$route.params
         location.query = query;
        this.$router.push(location);
       }
      }
    },
    enterShow() {
      if (this.$route.path !== "/home") {
        this.isShow = !this.isShow;
      }
    },
    leaveShow() {
      if (this.$route.path !== "/home") {
        this.isShow = !this.isShow;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          :hover {
            background-color: #fff;
          }
          :hover .red {
            color: #c81623;
          }
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            background-color: #c81623;
            a {
              color: #fff;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    .sort-enter-active, .sort-leave-active {
    transition: opacity 0.5s
}
.sort-enter, .sort-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
  }
}
</style>