import mysql from "mysql2/promise";

const config = useRuntimeConfig();

const connectionMysql = mysql.createPool({
      host: config.mysqlHost,
      user: 'root',
      port: config.mysqlPort,
      password: config.mysqlPass,
      database: 'keylogo',
    })

export default connectionMysql;