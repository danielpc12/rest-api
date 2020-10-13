//metodo de cifrado de información
/** Packages */

const CryptoJS = require("crypto-js");
const config = require ("config");
const jwt = require("jsonwebtoken");

/** Encriptar contraseña */
exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
};

/** Desencriptar contraseña */
exports.DecryptPassword= (cryptedPassword) => {
    let secretKey = config.get("secretkeys").cryptojs;
    let bytes  = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
};

/**Generar token */
exports.GenerateToken = (user) => {
    let secretKey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + config.get("sessionTime"),
        /**Por si quiero guardar información dentro del token */
        data: {
            username: user.username,
            id: user._id,
            role: user.role
        }
      }, secretKey);

      return token;
}