const Command = require('./Command');
let commandshandler = require('../core/Loader')
let client = require('../core/ArrowClient');
let { properties: { prefix } } = require('../../config.json');

//new things
let { arrow    } = new client()
let { commands } = commandshandler
//---------------------------

class Handler extends Command {

    constructor() {

        super();

        arrow.on('message', message => {
            if (!message.content.startsWith(prefix)) return;

            let args = message.content.split(prefix.length).trim().split(/ +/);
            const cmd = args.shift().toLowerCase();
            
            const commandExecute = commands.get(cmd) 
            || commands.find(this.aliases && this.aliases.includes(cmd))

            if(!commandExecute) return;

            //the things to handle commands
            if (this.enabled === false) return message.channel.send('This command is disabled')

            try {
                commandExecute.run({ message })
            } catch (error) {
                throw new Error('There was an error when executing error: \n' + error)
            }
        })
    }
}

module.exports = Handler;