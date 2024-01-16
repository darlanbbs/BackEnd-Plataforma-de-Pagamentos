const pool = require("../../../config/db");

const getBalance = async (req, res) => {
  const { id } = req.params;
  try {
    const query = `
    SELECT saldos.*
      FROM saldos
      INNER JOIN usuarios ON saldos.usuario_id = usuarios.id
      WHERE usuarios.id = $1`;
    const values = [id];

    const { rows } = await pool.query(query, values);

    return res.send(rows);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { getBalance };
