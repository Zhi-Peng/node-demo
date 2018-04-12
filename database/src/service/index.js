import app from './app'

const foo = async  () => {
  const _app = await app()
  _app.listen(6080, () => {
    console.log('6080数据服务启动成功')
  })
}

foo()