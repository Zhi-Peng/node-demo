import Router from 'koa-router'
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'index'
})

router.get('/dd', async (ctx, next) => {
  ctx.body = 'dd'
})

export default router
