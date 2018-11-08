module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/costumedb'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
