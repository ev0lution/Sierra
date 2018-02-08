exports.run = (client, message, args) => {
	message.channel.startTyping();
    message.channel.send("pong!");
    message.channel.stopTyping();
}