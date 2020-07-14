const Keyv = require('keyv');
var welcomeMessages = new Keyv('sqlite://./welcomeMessages.sqlite');
module.exports = { welcomeMessages };
