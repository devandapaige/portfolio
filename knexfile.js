require("dotenv").config();
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  connection: process.env.DEV_DATABASE_URL,
  pool: {
    min: 0,
    max: 15,
  },
  migrations: { directory: "./api/data/migrations" },
  seeds: { directory: "./api/data/seeds" },
  debug: true,
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};
