module.exports = {
  	name: 'verifysetup',
  	description: 'Sets up a verification system!',
  	execute(message, args) {
  		message.channel.send('To gain access to the server, reply with the codeword in #verify. The codeword is found somewhere within this channel.');
  	},
  };
