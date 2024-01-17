const pool = require("../../../config/db");

const updatePayment = async (req, res) => {
  const { balanceId } = req.query;
  const { nome, descricao, valor } = req.body;

  try {
    // Obter informações do pagamento atual
    const currentPayment = await pool.query(
      "SELECT * FROM pagamentos WHERE id = $1",
      [balanceId]
    );

    console.log("current" + currentPayment.rows[0].valor);
    const currentValor = currentPayment.rows[0].valor;
    const currentSaldoId = currentPayment.rows[0].saldo_id;

    // Calcular a diferença entre o valor atual e o novo valor
    const diff = valor - currentValor;

    // Atualizar o pagamento
    const updateResult = await pool.query(
      "UPDATE pagamentos SET nome = $1, descricao = $2, valor = $3 WHERE id = $4 RETURNING *",
      [nome, descricao, valor, balanceId]
    );

    // Atualizar o saldo
    await pool.query(
      "UPDATE saldos SET valor_utilizado = valor_utilizado + $1, valor_restante = valor_restante - $1 WHERE id = $2",
      [diff, currentSaldoId]
    );

    return res.status(200).json(updateResult.rows[0]);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { updatePayment };
