let { readdirSync } = require('fs');
let Command = require('../command/Command')
let Discord = require('discord.js');


class Loader extends Command
{
    constructor() {
        super();

        this.commands = new Discord.Collection();

        let folder = readdirSync('./src/commands')

        for ( let category of folder ) {
            const folders = readdirSync(`./src/commands/${category}/`).filter(file => file.endsWith(".js"))

            for ( let file of folders ) {
                let command = require(`../commands/${category}/${file}`)
            this.commands.set(command.name, command)
            console.info(`${command.name} was loaded`)
            }
        }
    }
}

module.exports = Loader;