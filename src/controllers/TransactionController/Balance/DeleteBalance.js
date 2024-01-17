const pool = require("../../../config/db");

const deleteBalance = async (req, res) => {
  const { balanceId } = req.query;

  try {
    const {
      rows: [balance],
    } = await pool.query("SELECT valor_restante FROM saldos WHERE id = $1", [
      balanceId,
    ]);

    await pool.query("DELETE FROM saldos WHERE id = $1", [balanceId]);

    res.status(204).send();
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = deleteBalance;
