const pool = require("../../../config/db");

const deletePayment = async (req, res) => {
  const { balanceId } = req.query;

  try {
    const result = await pool.query(
      "DELETE FROM pagamentos WHERE id = $1 RETURNING *",
      [balanceId]
    );

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { deletePayment };
