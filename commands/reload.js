const config = require("../config.json");

exports.run = (client, message, args) => {
  message.channel.startTyping();
  if(message.author.id !== config.ownerID) {
  	message.reply({embed: {
  		color: 16711680,
  		title: "Command Error",
  		description: "You don't have access to use this command!\nOnly the bot owner has permission to use this command."
  	}});
    message.channel.stopTyping();
    return;
  } else
  if(!args || args.size < 1 || args[0] === undefined) {
    message.channel.stopTyping();
    return message.reply("Must provide a command name to reload.");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply({"embed": {
    "title": "Success",
    "description": `The command ${args[0]} has been reloaded.`,
    "color": 8311585
  }});
  message.channel.stopTyping();
};