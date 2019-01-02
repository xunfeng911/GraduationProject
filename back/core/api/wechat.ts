import axios from 'axios';
class WeChatApi {
  getSession = async (code: string) => {
    const appid = 'wx455630e5b225de48';
    const app_secret = '20990f4172bcc86bdc9428acc359221a';
    return axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${app_secret}&js_code=${code}&grant_type=authorization_code`);
  }
}

const weChatApi = new WeChatApi();
export default weChatApi;