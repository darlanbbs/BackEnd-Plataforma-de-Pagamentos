
const pool = require('../config/db');
require("dotenv/config")

const FindUserByEmail = async (email) => {
    const { rows, rowCount } = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );
   return parseInt(rowCount)
  };


  const FindUser = async (id) => {
      const { rows, rowCount } = await pool.query(
        "select * from usuarios where id = $1",
        [id]
      );
return parseInt(rowCount)
  };
  

  module.exports = {FindUserByEmail, FindUser}