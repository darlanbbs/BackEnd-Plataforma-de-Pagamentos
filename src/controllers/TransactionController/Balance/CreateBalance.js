const pool = require("../../../config/db");

const createBalance = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome, descricao, valor_inicial, valor_utilizado, valor_restante } =
      req.body;

    const query = `
      INSERT INTO saldos (nome, descricao, valor_inicial, valor_utilizado, valor_restante, usuario_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

    const values = [
      nome,
      descricao,
      valor_inicial,
      valor_utilizado,
      valor_restante,
      id,
    ];

    const { rows } = await pool.query(query, values);

    return res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { createBalance };
