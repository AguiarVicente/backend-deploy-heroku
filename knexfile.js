const db = process.env.DATABASE_URL

module.exports = {
    client: 'postgresql',
    connection: {
        host: 'ec2-52-204-20-42.compute-1.amazonaws.com',
        port: 5432,
        database: 'dajt46c7k86gkq',
        user: 'gqygbiojtwbcdy',
        password: 'f1c4d83a16b3e38b5b5dd45df6129ef319973bde62301bfe99ba7f527e9c3d28'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
