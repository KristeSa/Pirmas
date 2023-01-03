require("dotenv").config();

module.exports = {
  PORT: process.env.serverPort || 5100,

  MSQL_CONFIG: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port,
  },
};
