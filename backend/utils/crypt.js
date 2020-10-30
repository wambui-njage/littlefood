'use strict';
const _crypt = require('cryptlib');

const key = process.env.KEY || "f080786e3a348458a621e2fa4c267ad8"; // Must be 256 bits (32 characters)
const iv = process.env.iv || "84jfkfndl3ybdfkf";

function encrypt (plainText) {
    return _crypt.encrypt(plainText, key, iv);
}

function decrypt (cypherText) {
    return _crypt.decrypt(cypherText, key, iv);
}

module.exports = { decrypt, encrypt };
