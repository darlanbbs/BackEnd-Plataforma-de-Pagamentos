const pool = require("../../config/db");

const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("select * from usuarios");

    return res.send(rows);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = getUsers;