const modules = {
  user: 'user',
  device: 'device'
}

export default async (router) => {
  for (let module of Object.keys(modules)) {
    router.use(`/${ module }`, require(`./${ module }`).default)
  }
  router.all('/*', (ctx, next) => {
    next()
  })
}
