const pool = require("../../../config/db");

const createPayment = async (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  const { balanceId } = req.query;

  try {
    const balanceQuery = await pool.query(
      "SELECT valor_utilizado, valor_restante FROM saldos WHERE id = $1",
      [balanceId]
    );

    const balance = balanceQuery.rows[0];
    const newUpdatedValue = parseFloat(balance.valor_utilizado) + valor;

    const newRestValue = balance.valor_restante - valor;

    const updateBalance = await pool.query(
      "UPDATE saldos SET valor_utilizado = $1, valor_restante = $2 WHERE id = $3 RETURNING *",
      [newUpdatedValue, newRestValue, balanceId]
    );

    const insertedPayment = await pool.query(
      "INSERT INTO pagamentos (nome, descricao, valor, saldo_id, usuario_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      ["Nome do Pagamento", "Descrição do Pagamento", valor, balanceId, id]
    );

    return res.status(200).json({
      balance: updateBalance.rows[0],
      payment: insertedPayment.rows[0],
    });
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = createPayment;
