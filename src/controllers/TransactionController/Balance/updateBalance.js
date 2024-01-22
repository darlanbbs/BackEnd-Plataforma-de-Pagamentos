const pool = require("../../../config/db");

const UpdateBalanceValues = async (req, res) => {
  const { balanceId } = req.query;
  const { valor_inicial, nome, descricao } = req.body;

  try {
    // busca de saldos pelo id
    const {
      rows: [actualbalance],
    } = await pool.query("SELECT * FROM saldos WHERE id = $1", [balanceId]);

    // converte os valores para números
    const valorInicialNumerico = parseFloat(valor_inicial);
    const valorUtilizadoNumerico = parseFloat(actualbalance.valor_utilizado);
    const valorInicialAtualNumerico = parseFloat(actualbalance.valor_inicial);

    // atualiza o saldo
    const newValueBalance = valorUtilizadoNumerico + (valorInicialNumerico - valorInicialAtualNumerico);

    // calcula o valor restante
    const restNewBalance = valorInicialNumerico - newValueBalance;

    // validação se campo existe, se existir adiciona e passa se não só passa
    const setFields = [];
    const setValues = [valorInicialNumerico, newValueBalance, restNewBalance];
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

    // adiciona o id do saldo que vai atualizar
    setValues.push(balanceId);

    const {
      rows: [updatedBalance],
      // query com valores a ser atualizados como nome/descricao e o id do saldo a ser atualizado
    } = await pool.query(query, setValues);

    return res.status(200).json(updatedBalance);
  } catch (error) {
    return res.status(500).json(`Erro interno do servidor ${error}`);
  }
};

module.exports = { UpdateBalanceValues };
