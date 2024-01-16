const bcrypt = require('bcrypt');
const pool = require('../../../config/db');
const { newToken } = require('../../../services/jwt');


const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const { rows } = await pool.query(
            "SELECT id, nome, email, senha FROM usuarios WHERE email = $1",
            [email]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: "Usuário não encontrado." });
        }

        const match = await bcrypt.compare(senha, rows[0].senha);

        if (!match) {
            return res.status(401).json({ message: "Os dados fornecidos são inválidos." });
        }

        const token = await newToken(rows[0].id);

        return res.status(201).json({
            message: "Usuário conectou com sucesso",
            usuario: {
                id: rows[0].id,
                nome: rows[0].nome,
                email: rows[0].email
            },
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
};

module.exports = loginUser