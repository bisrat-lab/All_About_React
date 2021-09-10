const jwt = require("jsonwebtoken")
const secret ="secretCode"
const createToken =(user) => {
    accessToken = jwt.sign({username: user.username, role:user.role},secret);
    return accessToken;
}


const validateToken =(req,res,next) =>{
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}
module.exports = {createToken,validateToken}