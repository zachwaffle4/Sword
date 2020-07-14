
module.exports = {
	name: 'suggest',
	description: 'Suggests something.',
	async execute(message, args) {
		if (message.guild.id = '721448802531278929') { //sword's server
			const channel1 = message.guild.channels.cache.get('721474694288506950');  //finds the channel named suggestions

			const sMessage1 = await channel1.send('Suggestion:\n ' + '```' + args.join(' ') + '```')  //Sends the arguments
			await sMessage1.react('⬆️');
			await sMessage1.react('⬇️');
    } else if (message.guild.id = '722533543296892978') { //creeper's server
				const channel2 = message.guild.channels.cache.get('722824522520199209');  //finds the channel named suggestions

				const sMessage2 = await channel2.send('Suggestion:\n ' + '```' + args.join(' ') + '```')  //Sends the arguments
				await sMessage2.react('⬆️');
				await sMessage2.react('⬇️');
		} else if (message.guild.id = '727313145353470016') { //bongocord's server
				const channel3 = message.guild.channels.cache.get('728418101254815754');  //finds the channel named suggestions

				const sMessage3 = await channel3.send('Suggestion:\n ' + '```' + args.join(' ') + '```')  //Sends the arguments
				await sMessage3.react('⬆️');
				await sMessage3.react('⬇️');
		} else if (message.guild.id = '704116185356042320') { //avery's server
				const channel4 = message.guild.channels.cache.get('714766910910234674');  //finds the channel named suggestions

				const smessage4 = await channel4.send('Suggestion:\n ' + '```' + args.join(' ') + '```')  //Sends the arguments
				await smessage4.react('⬆️');
				await smessage4.react('⬇️');
	}
},
};

//714766910910234674
/*const channel = msg.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions

channel.send('Suggestion:\n ' + args.join(' '))  //Sends the arguments
}*/
