const env = process.env;
const config = {
  db: {
    host: env.DB_HOST || 'remotemysql.com',
    user: env.DB_USER || 'x0B9v9MaCy',
    password: env.DB_PASSWORD || 's7RjzSve5L',
    database: env.DB_NAME || `x0B9v9MaCy`,
  },
  currencyConverterApi: {
    baseUrl: 'https://free.currconv.com/api/v7',
    key: 'ca0133cec785f144a8c5'
  },
  itemsPerPage: env.ITEMS_PER_PAGE || 10
};

module.exports = config;
