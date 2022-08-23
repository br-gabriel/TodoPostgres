const jwt = require("jsonwebtoken");

async function checkToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({message: "Token não encontrado"});
    }

    const [, token] = authHeader.split(" ");

    try {
        const secret = process.env.SECRET;
        await jwt.verify(token, secret);
        return next();
    } catch(err) {
        return res.status(401).json({message: "Token inválido"});
    }
    
}

module.exports = checkToken;