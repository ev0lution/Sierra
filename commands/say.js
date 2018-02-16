const config = require("../config.json");

exports.run = (client, message, args) => {
	message.channel.startTyping();
	if(message.author.id !== config.ownerID) {
    	message.channel.stopTyping();
    	return;
  	}
  	if (!args || args.length < 1 || args === undefined) {
  		message.channel.stopTyping();
    	return;
  	}
  	message.channel.send(args.join(' ').toString());
  	message.delete();
  	message.channel.stopTyping();
}