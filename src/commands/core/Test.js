let Command = require('../../command/Command');

module.exports = class Test extends Command {
    
    constructor() {
        super({
            name: 'test'
        })
    }

    run ({ message }) {}
}