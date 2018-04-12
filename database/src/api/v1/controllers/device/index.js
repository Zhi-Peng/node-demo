import Router from 'koa-router'
import connection from '../../../../db'
const router = new Router()

router.get('/', async (ctx) => {
  // const [ rows ] = await connection.execute('SELECT * FROM user');
  // console.log(rows)
  ctx.body = rows
})

export default router.routes()