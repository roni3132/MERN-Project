const jwt = require("jsonwebtoken");
const User = require("../Modal/userschema");

const Authenticate = async (req, res, next) => {

    try {
        const header = req.headers?.cookie
        const token = header.slice(6, header.length);
        const verifytoken = jwt.verify(token, process.env.PRIVATE_KEY);
        const data = await User.findOne({ _id: verifytoken._id, "tokens.token": token })
        if (data) {
            req.status = 1;
            req.data = data;
        } else {
            req.status = 0;
            req.data = "";
        }
        next();
    } catch (error) {
        res.send({ "status": 0, "message": "Invalid User Please Login", "error": error });
    }
}

module.exports = Authenticate;
