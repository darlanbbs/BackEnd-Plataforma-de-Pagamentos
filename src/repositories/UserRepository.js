
const pool = require('../config/db');
require("dotenv/config")

const emailExists = async (email) => {
    const { rows } = await pool.query(
      "SELECT COUNT(*) FROM usuarios WHERE email = $1",
      [email]
    );
    return parseInt(rows[0].count) > 0;
  };

  module.exports = {emailExists}