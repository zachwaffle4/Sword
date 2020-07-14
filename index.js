require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
/*const db = require('./database')
const Ticket = require('./models/Ticket')
const TicketConfig = require('./models/TicketConfig')*/
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
//const { welcomeMessages } = require('./dbconfig.js');
//welcomeMessages.on('error', err => console.log('Connection Error', err));


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('for -help!', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
});


// prefix = '-'
client.on('message', async message => {

if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

    try {
    	command.execute(message, args)
    } catch (error) {
    	console.error(error);
    	message.reply('there was an error trying to execute that command!');
    }

});
client.on('guildMemberRemove', async member => {
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_KICK',
	});
	// Since we only have 1 audit log entry in this collection, we can simply grab the first one
	const kickLog = fetchedLogs.entries.first();

	//to test
	if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);
	const { executor, target } = kickLog;

	//to test if a user was kicked or not, and if so, by who
	if (target.id === member.id) {
		console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
	} else {
		console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`)
	}
});
/*[client.on('message', async message => {
	//stupid activity for no reason whatsoever
	if (message.content.toLowerCase() === 'verify' && message.channel.id === '732002802544672788'){
      	message.member.roles.add(message.guild.roles.cache.get('704388018567512164'));
      	const confirmMessage = await message.reply("you have successfully verified!");
				console.log('Verify successful!')
				const newUser = message.author.id;
				message.delete();
				confirmMessage.delete();
				const channel = client.channels.cache.get('704116185356042323');
				channel.send(`Welcome to the server, <@${newUser}>. I hope you enjoy your time in the Robotale AU Server!

Be sure to check out <#713227378306056244> to grab a color and learn how to get ping roles. If you have a question, check out <#713194923909972159>.`);
}


});
]*/
/*client.on('guildMemberAdd', async member => {
	//try {
	//	let set2 = await welcomeMessages.get(member.guild.id);
//	} catch(error) {
//		console.error();
//	}
	if (member.guild.id == 685289771043520521) {
  	var welcomeChannel1 = client.channels.cache.get('713215120305815612');
		welcomeChannel1.send(`Welcome to the server, <@${member.id}>. I hope you enjoy your stay here at Bongo's Diner.

Be sure to check out <#713227378306056244> to grab a color and learn how to get ping roles. If you have a question, check out <#713194923909972159>.`);
} else if (member.guild.id == 727313145353470016) {
	var welcomeChannel2 = client.channels.cache.get('727313145353470016');
	welcomeChannel2.send(`Welcome to Bongocord, <@${member.id}>! I hope you enjoy your time here!

Be sure to read the <#727314447491792997> and check out <#727314672289841213>. If you have any questions, ask it in <#727321986275213363>.`);
}
	//welcomechannel.send(set2);

});*/


// verify role = 🥉Customer
client.login(token)
