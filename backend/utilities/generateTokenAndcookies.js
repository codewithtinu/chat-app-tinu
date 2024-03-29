import  Jwt  from "jsonwebtoken";

const generateTokenAndcookies = (userId, res) => {

    const  token = Jwt.sign({userId},  process.env.JWT_SECREAT, {
        expiresIn : '15d'
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 15 * 24 * 60 * 60 ,
    })
};

export default generateTokenAndcookies;