module.exports = {
  environment: 'dev',
  database: {
    dbName: 'boblog',
    host: '110.40.174.104',
    port: 10003,
    user: 'root',
    password: 'momotou.com1'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}