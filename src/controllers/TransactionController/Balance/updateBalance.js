const pool = require("../../../config/db");

const UpdateBalanceValues = async (req, res) => {
  const { balanceId } = req.query;
  const { initial_value, name, description } = req.body;

  try {
  // busca de saldos pelo id
    const {
      rows: [currentBalance],
    } = await pool.query("SELECT * FROM saldos WHERE id = $1", [balanceId]);

   
    const initialNumeric = parseFloat(initial_value);
    const utilizedNumeric = parseFloat(currentBalance.utilized_value);
    const currentInitialNumeric = parseFloat(currentBalance.initial_value);
    const currentRemainingNumeric = parseFloat(currentBalance.remaining_value);

  // calcula o valor restante corrigido antes da atualização
    const updatedRemaining = currentRemainingNumeric + (initialNumeric - currentInitialNumeric);

     // atualiza o saldo
    const newUtilizedValue = utilizedNumeric + updatedRemaining;

   
    const setFields = [];
    const setValues = [initialNumeric, newUtilizedValue, updatedRemaining];
    let index = setValues.length + 1;

    if (name) {
      setFields.push(`name = $${index}`);
      setValues.push(name);
      index++;
    }

    if (description) {
      setFields.push(`description = $${index}`);
      setValues.push(description);
      index++;
    }

    const query = `
      UPDATE balances 
      SET initial_value = $1, utilized_value = $2, remaining_value = $3
      ${setFields.length > 0 ? `, ${setFields.join(", ")}` : ""}
      WHERE id = $${index}
      RETURNING *`;

  
    setValues.push(balanceId);

    const {
      rows: [updatedBalance],
    } = await pool.query(query, setValues);

    return res.status(200).json(updatedBalance);
  } catch (error) {
    return res.status(500).json(`Internal server error ${error}`);
  }
};

module.exports = { UpdateBalanceValues };
