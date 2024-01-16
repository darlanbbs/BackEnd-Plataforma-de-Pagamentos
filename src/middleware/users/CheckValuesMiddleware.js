const { createUserSchema } = require("../../validator/schema");

const verifyValue = (req, res, next) => {
    const {body} = req;
    const result = Joi.validate(body, createUserSchema);
    const { value, error } = result; 
    const valid = error == null; 
    
    !valid ? res.status(400).send(error.details[0].message):next();
  };
  