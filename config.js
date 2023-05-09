import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultvalue = undefined) {
    const value = process.env[key] || defaultvalue;
    if (value == null){
        throw new Error(`Key ${key} is undefined`)
    }
    return value
}


export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)) // 문자열이 아니고 숫자이기 때문에 parseInt를 적용시킨다.
        // 혹시라도 env에 값이 없으면 기본값인 86400이 들어가게 된다.
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUND', 12))
    }, 
    host: {
        port: parseInt(required('SERVER_PORT', 8080))
    }
};