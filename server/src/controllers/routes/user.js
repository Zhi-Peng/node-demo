import Router from 'koa-router'
import _sdk from '../datasdk'
import verify from '../verify'
const router = new Router()

const modname = 'user'
const sdk = _sdk()
const currmod = sdk[modname]

router.use(async (ctx, next) => {
  await verify(ctx)
  await next()
})

router.get('/', async (ctx) => {
  const data = await currmod.get()
  ctx.body = data
})

router.get('/:id', async (ctx) => {
  const id = ctx.params.id
  const data = await currmod.get(id)
  ctx.body = data
})

// 注册
router.post('/register', async (ctx) => {
  const data = ctx.request.body
  if (!user_name || !user_email) {
    return false
  }

  await currmod.create()
})

// 登录
router.post('/signin', async () => {

})

// 退出
router.post('/signout', async () => {
  
})


export default router.routes()