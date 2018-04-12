import jwt from 'jsonwebtoken'
import config from '../config'
// import config from '../config'

// userType:需要的用户权限  0:游客 1:超级管理员 2:普通管理员 3:VIP用户 4:普通用户
const urls = {
  'login': { userType: 0 },	//用户登录（游客）
  'register': { userType: 0 },	//用户注册（游客）
  'retrieve': { userType: 0 },	//找回密码（游客）
  'findPassword': { userType: 0, method: 'get', url: '/:email/:code' },//激活找回密码（游客）
  'active': { userType: 0, method: 'get', url: '/:name/:code' }//帐号激活（游客）
}

Object.assign(urls, config.page_grade)

//验证权限函数
const verify = (ctx) => {
  return new Promise((resolve, reject) => {
    jwt.verify(ctx.request.header.authorization, config.JWTs.secret, (err, decoded) => {
      console.log(decoded, '777777')
      // if (err) {
      //   resolve('token验证错误！');
      // } else {
      //   if (config.getClientIP(ctx) !== decoded.ip || !Number.isInteger(decoded.id)) {
      //     resolve('token无效！');
      //   } else if (decoded.user_type > userType) {
      //     resolve('对不起您无权操作！');
      //   }
      // }
      // resolve(decoded);//把用户信息带上
    });
  })
}

export default verify