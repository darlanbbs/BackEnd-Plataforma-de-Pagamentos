const { FindUserByEmail } = require("../../repositories/UserRepository");
const { emailExists, invalidData } = require("../../utils/helpers/error-helpers");
const UserValidationMiddleware = (schema) => {
  return async (req, res, next) => {
    const {email} = req.body
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessage = error.details[0].message;
      if (errorMessage) {
        const customError = invalidData();
        return res.status(customError.status).json({ message: customError.message });
      }
    }

    
    if(await FindUserByEmail(email)){
      
        const customError = emailExists();
        return res.status(customError.status).json({ message: customError.message });
    }

    next();
  };
};

module.exports = UserValidationMiddleware;