const { emailExists, invalidData } = require("../../utils/helpers/error-helpers");

const CreateUserValidationMiddleware = (schema) => {
  return  (req, res, next) => {
    const {email} = req.body
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessage = error.details[0].message;
      if (errorMessage) {
        const customError = invalidData();
        return res.status(customError.status).json({ message: customError.message });
      }
    }

    if(emailExists(email)) {
      const customError = emailExists();
      return res.status(customError.status).json({ message: customError.message });
    }

    next();
  };
};

module.exports = CreateUserValidationMiddleware;
