const pool = require("../../../config/db");

const getPayments = async (req, res) => {
  const { id, page } = req.params;

  try {
    const { rows } = await pool.query(
      "SELECT * FROM pagamentos WHERE usuario_id = $1 ORDER BY id ASC LIMIT 5 OFFSET $2",
      [id, page]
    );

    return res.send(rows);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { getPayments };
