const pool = require("../../../config/db");

const UpdateBalanceValues = async (req, res) => {
  const { balanceId } = req.query;
  const { valor_inicial, nome, descricao } = req.body;

  try {
  // busca de saldos pelo id
    const {
      rows: [currentBalance],
    } = await pool.query("SELECT * FROM saldos WHERE id = $1", [balanceId]);

   
    const initialNumeric = parseFloat(valor_inicial);
    const utilizedNumeric = parseFloat(currentBalance.valor_utilizado);
    const currentInitialNumeric = parseFloat(currentBalance.valor_inicial);
    const currentRemainingNumeric = parseFloat(currentBalance.valor_restante);

  // calcula o valor restante corrigido antes da atualização
    const updatedRemaining = currentRemainingNumeric + (initialNumeric - currentInitialNumeric);

     // atualiza o saldo
    const newUtilizedValue = utilizedNumeric + updatedRemaining;

   
    const setFields = [];
    const setValues = [initialNumeric, newUtilizedValue, updatedRemaining];
    let index = setValues.length + 1;

    if (nome) {
      setFields.push(`nome = $${index}`);
      setValues.push(nome);
      index++;
    }

    if (descricao) {
      setFields.push(`descricao = $${index}`);
      setValues.push(descricao);
      index++;
    }

    const query = `
      UPDATE saldos 
      SET valor_inicial = $1, valor_utilizado = $2, valor_restante = $3
      ${setFields.length > 0 ? `, ${setFields.join(", ")}` : ""}
      WHERE id = $${index}
      RETURNING *`;

  
    setValues.push(balanceId);

    const {
      rows: [updatedBalance],
    } = await pool.query(query, setValues);

    return res.status(200).json(updatedBalance);
  } catch (error) {
    return res.status(500).json(`Erro interno no servidor ${error}`);
  }
};

module.exports = { UpdateBalanceValues };
