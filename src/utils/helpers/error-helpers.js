module.exports = {
  userNotFound: () => {
    const err = new Error('Usuário não encontrado.');
    err.status = 404;
    err.code = 'UsuarioNaoEncontrado';
    return err;
},

  
    emailExists: () => {
      const err = new Error('O email já está associado a outra conta de usuário.');
      err.code = 'EmailUtilizado';
      err.status = 400;
      return err;
    },
  
    invalidData: () => {
      const err = new Error('Os dados fornecidos são inválidos.');
      err.code = 'DadosInvalidos';
      err.status = 400;
      return err;
    },
  };
  