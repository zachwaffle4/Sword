const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'reactSetup',
	description: 'Sets up the set reaction roles.',
	async execute(message, args) {
		await message.delete().catch(O_o=>{});
		if (message.guild.id === '685289771043520521') {
			const r1 = message.guild.roles.get('721920746766729267'); //partnership
			const r2 = message.guild.roles.get('685309613901611018'); //dead chat
			const r3 = message.guild.roles.get('689516809669443686'); //announcement
			const r4 = message.guild.roles.get('689516992113148025'); //event
			const r5 = message.guild.roles.get('689517032517271577'); //giveaway
			const r6 = message.guild.roles.get('689517265766711374'); //fact of the day
			const r7 = message.guild.roles.get('720802379443994644'); //Battle

			const filter = (reaction, user) => ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬'].includes(reaction.emoji.name);

			const embed = new RichEmbed()
				.setTitle('Available Roles')
				.setDescription(`
				🇦
				🇧
				🇨
				🇩
				🇪
				🇫
				🇬
				`)
				.setColor('#be1171')
			message.channel.send(embed);
		}
	},
};
/* Bongo's Diner roles: (Guild ID: 685289771043520521)
Partnership: 721920746766729267
dead chat: 685309613901611018
announcement: 689516809669443686
event: 689516992113148025
giveaway: 689517032517271577
debate/poll: 689517077148467215
fact of the day: 689517265766711374
battle: 720802379443994644 */
