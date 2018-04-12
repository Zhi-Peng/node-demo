import Router from 'koa-router'
import connection from '../../../../db'
const router = new Router()

//公用：获取客户端IP
function getClientIP(ctx) {
  let req = ctx.request;
  let ip = ctx.ip ||
    req.headers['x-forwarded-for'] ||
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress || ''
  let arr = ip.match(/(\d{1,3}\.){3}\d{1,3}/)
  return arr ? arr[0] : ''
}

router.get('/', async (ctx) => {
  console.log('11111')
  const _connection = await connection()
  const [rows] = await _connection.execute('SELECT * FROM user')
  console.log(rows[0], '0090000000')
  ctx.body = rows
})

router.get('/:name', async (ctx) => {
  console.log('22222')
  const _connection = await connection()
  const [rows] = await _connection.execute('SELECT * FROM user where `user_name`=?', [ctx.params.name])
  console.log(rows, '0090000000')
  if (!rows.length) {
    ctx.body = {
      success: false,
      data: {},
      message: '没有数据'
    }
    return false
  }
  ctx.body = rows[0]
})

// 注册
router.post('/register', async (ctx) => {
  const data = ctx.request.body
  console.log(data, '777')
  if (!user_name || !user_email) {
    return false
  }

  const _connection = await connection()
  const result = await _connection.execute('INSERT INTO `user` (user_name,pass_word,create_time,login_ip,user_email) VALUES (?,?,?,?,?)', [data.user_name, data.pass_word, new Date().toLocaleString(), getClientIP(ctx), data.user_email])

  console.log(result, '7777')
})

export default router.routes()