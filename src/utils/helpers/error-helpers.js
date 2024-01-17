module.exports = {
  userNotFound: () => {
    const err = new Error("Usuário não encontrado.");
    err.status = 404;
    err.code = "UsuarioNaoEncontrado";
    return err;
  },

  unathourizedPermission: () => {
    const err = new Error("Você não tem permissão para acessar este recurso.");
    err.status = 401;
    err.code = "NaoTemPermissao";
    return err;
  },

  emailExists: () => {
    const err = new Error(
      "O email já está associado a outra conta de usuário."
    );
    err.code = "EmailUtilizado";
    err.status = 400;
    return err;
  },

  invalidData: () => {
    const err = new Error("Os dados fornecidos são inválidos.");
    err.code = "DadosInvalidos";
    err.status = 400;
    return err;
  },

  valueIsMandatory: (value) => {
    const err = new Error(`O ${value} é obrigatório.`);
    err.code = "ValorObrigatorio";
    err.status = 400;
    return err;
  },
  restValuesIsBiggerThanZero: () => {
    const err = new Error("O valor restante é maior que zero.");
    err.code = "ValorRestanteMaiorZero";
    err.status = 400;
    return err;
  },
  initialValueIsMinorOrEqualsZero: () => {
    const err = new Error("O valor inicial é menor ou igual a zero.");
    err.code = "ValorInicialMenorZero";
    err.status = 400;
    return err;
  },
  valueUsedIsBiggerThanRest: () => {
    const err = new Error("O valor utilizado é maior que o restante.");
    err.code = "ValorUtilizadoMaiorRestante";
    err.status = 400;
    return err;
  },
};
