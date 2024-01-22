const pool = require("../../../config/db");

const getPayments = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query(
      "SELECT * FROM pagamentos WHERE usuario_id = $1 ORDER BY id ASC",
      [id]
    );

    return res.send(rows);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { getPayments };
