module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie_db_dev'
  },
  production : {
    client: 'pg',
    connection: 'process.env.DATABASE_URL'
  }
}
