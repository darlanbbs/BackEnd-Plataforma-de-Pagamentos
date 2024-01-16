const bcrypt = require('bcrypt');
const pool = require('../../../config/db');


const loginUser = async (req,res) => {
    const { email, senha} = req.body
    
    try {
        const { rows } = await pool.query(
         "select * from usuarios where email = $1", [email]
        );


       const match = await bcrypt.compare(senha, rows[0].senha)


       if(!match) {
        return res.status(401).json({ message: "Os dados fornecidos são inválidos." });
       }


        return res.status(201).json({ message: "Usuário conectou com sucesso" });
      } catch (error) {
        return res.status(500).json("Erro interno do servidor");
      }
}

module.exports = loginUser