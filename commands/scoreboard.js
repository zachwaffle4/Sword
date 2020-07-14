module.exports = {
	name: 'scoreboard',
  aliases: ['leaderboard','scores'],
	description: 'Shows the Server Games leaderboard.',
	async execute(message, args) {
		var hotPocketScore = '0';
		var beansScore = '0'
		var spaghettoScore = '0'
		if (!args.length || args[0] === 'list') {
			message.channel.send(`The current scores are:
			Beans: ${beansScore}
			Hot Pockets: ${hotPocketScore}
			Spaghettos: ${spaghettoScore}
			`)
		} else if (args[0] === 'edit') {
			switch (args[1]) {
				case 'hotPocket':
					hotPocketScore = args[2];
					break;
				case 'beans':
					beansScore = args[2];
					break;
				case 'spaghetto':
					spaghettoScore = args[2];
					break
			}
		}
	},
};
