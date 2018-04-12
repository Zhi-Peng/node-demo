import Router from 'koa-router'
import connection from '../../../../db'
const router = new Router()

router.get('/', async (ctx) => {
  console.log('11111')
  const _connection = await connection()
  const [ rows ] = await _connection.execute('SELECT * FROM user')
  console.log(rows[0], '0090000000')
  ctx.body = rows
})

router.get('/:name', async (ctx) => {
  console.log('22222')
  const _connection = await connection()
  const [ rows ] = await _connection.execute('SELECT * FROM user where `user_name`=?', [ctx.params.name])
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
  if (!user_name || !user_email) {
    return false
  }

  fasfasfdaf
  //fasfasd
  const result = await _connection.execute('INSERT INTO `user` (user_name,pass_word,create_time,login_ip,user_email) VALUES (?,?,?,?,?)', [data.user_name, data.pass_word, new Date().toLocaleString(), getClientIP(ctx),data.user_email])
})

export default router.routes()