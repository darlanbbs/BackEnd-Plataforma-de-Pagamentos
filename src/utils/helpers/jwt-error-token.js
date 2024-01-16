module.exports = {
    invalidToken: () => {
        const err = new Error('Token Inválido.');
        err.status = 401;  
        err.code = 'TokenInvalido';
        return err;
    },

    tokenNotProvided: () => {
        const err = new Error('Token não fornecido.');
        err.status = 403;  
        err.code = 'TokenNaoFornecido';
        return err;
    },
};
