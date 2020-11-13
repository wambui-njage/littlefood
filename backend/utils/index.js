const axios = require("axios");
const { encrypt, decrypt } = require('./crypt');

function sendData(url, FORMID) {
    return axios({
        url: decrypt(url), 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: `DATA=${encodeURIComponent(encrypt(FORMID))}`
        }).then(response => response.data
        
        )
}

module.exports = {sendData}
