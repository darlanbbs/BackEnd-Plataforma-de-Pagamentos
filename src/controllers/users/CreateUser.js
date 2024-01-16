const pool = require("../../config/db");
const bcrypt = require('bcrypt')


const createUser = async (req,res) => {
    const {nome, email, senha} = req.body
    const HashPassword = bcrypt.hashSync(senha, 10)


    try {
        const { rows } = await pool.query(
          "insert into usuarios (nome, email, senha) values ($1, $2, $3)",
          [nome, email, HashPassword]
        );
        return res.status(201).json({ message: "Usuário criado com sucesso" });
      } catch (error) {
        return res.status(500).json("Erro interno do servidor");
      }
}

module.exports = createUser