const pool = require("../../../config/db");

const updateInitialValue = async (req, res) => {
  const { balanceId } = req.query;
  const { valor_inicial } = req.body;
  try {
    const {
      rows: [actualbalance],
    } = await pool.query("SELECT * FROM saldos WHERE id = $1", [balanceId]);

    const newValueBalance =
      actualbalance.valor_utilizado +
      (valor_inicial - actualbalance.valor_inicial);
    const restNewBalance = valor_inicial - newValueBalance;

    const {
      rows: [updatedBalance],
    } = await pool.query(
      "UPDATE saldos SET valor_inicial = $1, valor_utilizado = $2, valor_restante = $3 WHERE id = $4 RETURNING *",
      [valor_inicial, newValueBalance, restNewBalance, balanceId]
    );

    return res.status(200).json(updatedBalance);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { updateInitialValue };
