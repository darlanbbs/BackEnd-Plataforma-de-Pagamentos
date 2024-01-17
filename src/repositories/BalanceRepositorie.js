const pool = require("../config/db");

const getBalanceById = async (id) => {
  const { rows } = await pool.query(
    "SELECT valor_restante FROM saldos WHERE id = $1",
    [id]
  );
  return rows[0];
};

module.exports = { getBalanceById };
