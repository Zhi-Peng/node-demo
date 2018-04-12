export default {
  http: {
    hostname: '172.16.10.158',
    port: 6080,
    path: '',
    method: 'GET'
  },

  rootPath: '/api/v1',

  JWTs : {
    secret : 'scscms', // 指定密钥
    expiresIn:'2h'  //超时设置 m分钟 h小时 d天数
  },

  user_type: {
    0: '未审核用户',
    1: '超级管理员',
    2: '普通管理员',
    3: 'VIP用户',
    4: '普通用户'
  },

  //页面权限设置 0:所有人 4:所有登录用户 3:vip用户以上 2:管理员级别 1:只有超级管理员
  page_grade: {
    device: 4,//分类列表（页面访问权限）
    deviceList: 3
  }
}