<template>
  <div class="like">
            <div class="py-container">
                <div class="title">
                    <h3 class="fl">猜你喜欢</h3>
                    <a href="javascript:;" class="fr tip changeBnt">换一换</a>
                </div>
                <div class="bd">
                    <ul class="favourate">
                        <li>
                            <img src="https://img30.360buyimg.com/mobilecms/s300x300_jfs/t1/39923/23/9168/51118/5d0724b6E3cc8d346/1de4b58561241d09.jpg!q70.jpg.webp" alt="" />
                            <div class="like-text">
                                <p>逸乐途 elittile 婴儿推车轻便折叠婴儿车可坐可躺</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/202510/38/14059/158719/6188990dEbb833bec/d9b66583ca1c1992.jpg.webp" alt="" />
                            <div class="like-text">
                                <p>徐福记小叭叭3斤装多口味<br> 酥心糖1500g(约120颗糖)</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/29034/9/18542/58830/62d51991E50291387/8d11630de4695816.jpg.webp" alt="" />
                            <div class="like-text">
                                <p>索尼FE 50mm F1.2 GM <br>大光圈大师镜头</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/86353/12/29946/56583/62d51a35E475e0beb/b239cccf16c2c2f7.png.webp" alt="" />
                            <div class="like-text">
                                <p>小熊电炖锅 婴儿辅食锅1L<br>迷你宝宝辅食锅熬粥锅</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/142892/11/27617/42414/62cfbaf7E3f08f128/794ef863e6ad8aa9.jpg.webp" alt="" />
                            <div class="like-text">
                                <p>小熊（Bear）电风扇宿舍<br> usb风扇办公室电动</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/2512/27/19638/39696/62cfc433E0753a957/6818c7cd316247c7.jpg.webp" alt="" />
                            <div class="like-text">
                                <p>长虹 CHANGHONG电热水器 <br> 3000W速热智控八倍增容</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'MyLike'
}
</script>

<style lang="less" scoped>
.like {
        margin-top: 15px;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .title {
                overflow: hidden;

                .fl {
                    float: left;
                    font-size: 20px;
                    line-height: 30px;
                }

                .fr {
                    float: right;
                    background-image: url(~@/assets/images/icons.png);
                    width: 66px;
                    height: 25px;
                    background-position: 182px -104px;
                    line-height: 30px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #666;
                    text-decoration: none;
                }
            }

            .bd {
                .favourate {
                    border: 1px solid #e4e4e4;
                    overflow: hidden;
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: flex;

                    li {
                        height: 250px;
                        margin: 0 -1px;
                        overflow: hidden;
                        background: #fff;
                        position: relative;
                        width: 16.667%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;

                        img {
                            width: 142px;
                            height: 142px;
                            transition: all 400ms;

                            &:hover {
                                opacity: 0.8;
                                transform: scale(1.1)
                            }
                        }

                        .like-text {
                            padding: 0;
                            width: 142px;
                            border-right: 1px solid #e4e4e4;

                            p {
                                margin: 5px 0;
                            }

                            h3 {
                                color: #df3033;
                                font-size: 20px;
                                line-height: 30px;
                                margin: 9px 0;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }
</style>