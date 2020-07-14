const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
	    const data = [];
		const { commands } = message.client;
		const embed = new Discord.MessageEmbed()
			.setTitle('Here\'s a list of all my commands!')
			.setDescription(`${commands.map(command => command.name).join(', ')}
You can send \`${prefix}help [command name]\` to get info on a specific command! Note: Some commands are in development.				`)
        if (!args.length) {
					data.push(embed);
            return message.author.send(data, { split: true })
            	.then(() => {
            		if (message.channel.type === 'dm') return;
            		message.react('✅');
            	})
            	.catch(error => {
            		console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
            		message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
            	});
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
        	return message.reply('that\'s not a valid command!');
        }
				const embed2 = new Discord.MessageEmbed()
					.setTitle(`Command: ${command.name}`)
					.setDescription(command.description);
				if(command.aliases) {
					 embed2.addField('Aliases:', `${command.aliases.join(', ')}`)
				}
				if (command.usage) {
					embed2.addField('Usage:', `${prefix}${command.name} ${command.usage}`)
				}
				embed2.addField('Cooldown:', `${command.cooldown || 3} second(s)`)

        message.channel.send(embed2);
        // ...
	},
};
