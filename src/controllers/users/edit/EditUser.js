const pool = require("../../../config/db");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;

  let updateFields = [];
  let params = [];
  let index = 1;

  if (nome) {
    updateFields.push(`nome = $${index}`);
    params.push(nome);
    index++;
  }

  if (email) {
    updateFields.push(`email = $${index}`);
    params.push(email);
    index++;
  }

  if (senha) {
    const hash = await bcrypt.hash(senha, 10);
    updateFields.push(`senha = $${index}`);
    params.push(hash);
    index++;
  }

  try {
    const { rows } = await pool.query(
      `UPDATE usuarios SET ${updateFields.join(", ")} WHERE id = $${index}`,
      [...params, id]
    );

    res.status(200).json({ mensagem: "Usuário atualizado com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = updateUser;
