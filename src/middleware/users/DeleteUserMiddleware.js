const { FindUser } = require("../../repositories/UserRepository");
const { userNotFound } = require("../../utils/helpers/error-helpers");

const deleteUserMiddleware = async (req,res,next) => {
const {id} = req.params;

console.log(await FindUser(id))
if(await FindUser(id) != 1){
    const customError = userNotFound();
    return res.status(customError.status).json({ message: customError.message });
}
next()
}

module.exports = deleteUserMiddleware