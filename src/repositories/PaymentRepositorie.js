const pool = require("../config/db");

const checkValuePayment = async (id) => {
  const balanceQuery = await pool.query(
    "SELECT  valor_restante FROM saldos WHERE id = $1",
    [id]
  );
  return balanceQuery.rows[0];
};

const checkPaymentExists = async (id) => {
  const paymentQuery = await pool.query(
    "SELECT * FROM pagamentos WHERE id = $1",
    [id]
  );
  return paymentQuery.rows[0];
};
module.exports = { checkValuePayment, checkPaymentExists };
