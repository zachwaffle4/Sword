//New Command Template:

const Discord = require('discord.js');

module.exports = {
	name: 'election',
	description: 'Starts the Bongocord Election!',
	aliases: [],
	usage: [],
	async execute(message, args) {
		message.delete();
		const embed = new Discord.MessageEmbed()
			.setTitle('Welcome to the Bongocord Election!')
			.setDescription(`Voting ends at 4 PM EST!`)
			.addField('Team Bumble (🇦)', '"If you guys vote me I’ll basically do nothing but make changes to the server’s channels oh and roles. Daz it. o r g a n i z e."')
			.addField('Team Blob and Spaghetti (🇧)', '"If you vote for us we\'ll remove unnecessary channels and then add some features of your choosing."')
			.addField('Team Pain (🇨)', 'No campaign statements made.');
		const election = await message.channel.send(embed);
		await election.react('🇦');
		await election.react('🇧');
		await election.react('🇨');
	},
};
