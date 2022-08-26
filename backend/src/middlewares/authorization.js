const jwt = require("jsonwebtoken");

async function authorization(req, res, next) {
    const token = req.cookies.access_token;

    if(!token) {
        return res.status(403).json({ error: "Token não encontrado" });
    }

    try {
        const secret = process.env.SECRET;
        const data = await jwt.verify(token, secret);
        return next();
    } catch {
        return res.status(403).json({ error: "Token inválido" });
    }
    
    // const authHeader = await req.headers.authorization;

    // if(!authHeader) {
    //     return res.status(401).json({message: "Token não encontrado"});
    // }

    // const [, token] = authHeader.split(" ");

    // try {
    //     const secret = process.env.SECRET;
    //     await jwt.verify(token, secret);
    //     next();
    // } catch(err) {
    //     return res.status(401).json({message: "Token inválido"});
    // }
    
}

module.exports = authorization;