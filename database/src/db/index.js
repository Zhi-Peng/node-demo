import fs from "fs"
import mysql from 'mysql2/promise'
import config from '../config'

const foo = async () => {
  const connection = await mysql.createConnection(config.mysqlDB)

  return connection
}

export default foo
