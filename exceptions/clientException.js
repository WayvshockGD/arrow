let { properties: { token, prefix } } = require('../config.json');

class clientException {

    constructor() {
        if (!token)
        throw new Error('Hey dumb there is no token you need it to login right here:\nhttps://discord.com/developers/applications')

        if(!prefix) 
        throw new Error('There is no prefix present in the config file')
    }
}

module.exports = clientException;