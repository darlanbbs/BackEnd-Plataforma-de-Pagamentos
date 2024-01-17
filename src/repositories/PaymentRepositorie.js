const pool = require("../config/db");

const checkValuePayment = async (id) => {
  const balanceQuery = await pool.query(
    "SELECT  valor_restante FROM saldos WHERE id = $1",
    [id]
  );
  return balanceQuery.rows[0];
};

module.exports = { checkValuePayment };
