exports.run = (client, message, args) => {
	var date = new Date();
  client.channels.find("id","413855266929508353").send({"embed": {
    "title": "`!ping` command executed",
    "description": `Command executed on guild ${message.guild.name} (ID: ${message.guild.id}) by ${message.author.tag}`,
    "color": 4886754,
    "author": {
      "name": `${message.author.tag}`,
      "icon_url": `${message.author.displayAvatarURL}`
    },
    "timestamp": `${date.toISOString()}`,
    "footer": {
      "text": "Command Execution"
    }
  }
});
	message.channel.startTyping();
  message.channel.send("pong!");
  message.channel.stopTyping();
}