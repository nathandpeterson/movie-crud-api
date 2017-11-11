module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie_db_dev'
  },
  production : {
    client: 'pg',
    connection: 'postgres://luvhxxsfbcvjlh:7f7f0c51965194fa4e00ae6421dbbb1c93bb4efeb7deb77ac3b26e96e5fd37c1@ec2-23-23-221-255.compute-1.amazonaws.com:5432/d99o2028r58v49'
  }
}
