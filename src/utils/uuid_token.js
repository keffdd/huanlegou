//利用uuid生成未登录用户临时标识符
import { v4 as uuidv4 } from 'uuid';
//封装函数:只能生成一次用户临时身份
let userId;
export const getuuid = () => {
    // 先从本地存储捞一次
    userId = localStorage.getItem('USERTEMPID');
    // 如果没有
    if (!userId) {
        // 生成游客临时身份
        userId = uuidv4();
        // 本地存储一次
        localStorage.setItem('USERTEMPID', userId);
    }
    // 必须要有返回值
    return userId;
}