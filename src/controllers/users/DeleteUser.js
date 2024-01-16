const pool = require("../../config/db");


const deleteUser = async (req,res) => {
    const {id} = req.params
    try {
       await pool.query(`
       DELETE FROM usuarios WHERE ID = $1`,[id])
       res.status(204).send();
      } catch (error) {
        return res.status(500).json("Erro interno do servidor");
      }
}

module.exports = deleteUser