//New Command Template:

const Discord = require('discord.js');

module.exports = {
	name: 'decide',
	description: 'Decides who does FOTD/QOTD.',
	aliases: [],
	usage: [],
	async execute(message, args) {
		var numberGen = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
		switch (numberGen) {
			case 1:
				message.channel.send(`<@522513851942436867>, you were chosen to do the Fact and Question of the day!`);
				break;
			case 2:
				message.channel.send(`<@589560165825642516>, you were chosen to do the Fact and Question of the day!`);
				break;
			case 3:
				message.channel.send(`<@655153644278251544>, you were chosen to do the Fact and Question of the day!`);
				break;
			case 4:
				message.channel.send(`<@440877228910313472>, you were chosen to do the Fact and Question of the day!`);
				break;
//,

		}
	},
};
