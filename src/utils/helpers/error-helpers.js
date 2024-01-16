module.exports = {
    naoEncontrado: () => {
      const err = new Error('URL não encontrada, por favor, verifique a documentação.');
      err.status = 404;
      err.code = 'URLNaoEncontrada';
      return err;
    },
  
    emailJaExistente: () => {
      const err = new Error('O email já está associado a outra conta de usuário.');
      err.code = 'EmailUtilizado';
      err.status = 400;
      return err;
    },
  
    dadosInvalidos: () => {
      const err = new Error('Os dados fornecidos são inválidos.');
      err.code = 'DadosInvalidos';
      err.status = 400;
      return err;
    },
  };
  