//New Command Template:

const Discord = require('discord.js');
const { welcomeMessages } = require('c:/users/admir/documents/sword/dbconfig.js');

module.exports = {
	name: 'welcome-message',
	description: 'Shows options for changing the welcome message.',
	aliases: [],
	usage: '[<set/change> <new welcome message>]',
	async execute(message, args) {
		message.delete();
		var set = await welcomeMessages.set(message.guild.id, args.join(' '));
		if (!set) {
			message.reply('that didn\'t work.')
			console.error;
		} else if (set) {
			message.reply('that worked!')
		}
	},
};
