var mysql      = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password 		  : process.env.SQLPASS,
  database        : 'sierra'
});

exports.run = (client, message, args) => {
	message.channel.startTyping();
	let args1 = args[0];
	let channelMentions = message.mentions.channels.array();
	if (!args || args.size < 1 || args === undefined) {
		message.reply({"embed": {
    	"title": "Error",
    	"description": "Usage: `!ignore <channel | list>`",
    	"color": 16713984
    	}});
    	message.channel.stopTyping();
	} else
	if (args1 !== "list") {
		message.reply({"embed": {
    	"title": "Error",
    	"description": "Usage: `!ignore <channel | list>`",
    	"color": 16713984
    	}});
    	message.channel.stopTyping();
	} else
	if (args1 === "list") {
		let guildId = message.guild.id;
		let guildExistsInDB = "";
    	pool.query("SELECT * FROM ignoredChannels WHERE guildID = ?", [guildId], function (error, results, fields) {
		  if (error) throw error;
		  let guildExistsInDB = results.length;
		  if (guildExistsInDB === 0) {
		  	pool.query("INSERT INTO ignoredChannels (guildID, ignoredIDs) VALUES (?, ?)", [guildId, ""], function (error) {
		  		if (error) throw error;
		  	});
		  	message.reply({"embed": {
		      "title": "Ignored Channels",
		      "description": "There are no ignored channels on this server.",
		      "color": 8311585
		    }});
		    message.channel.stopTyping();
		  } else
		  if (guildExistsInDB === 1) {
		  	pool.query("SELECT ignoredIDs FROM ignoredChannels WHERE guildID = ?", [guildId], function (error, results) {
		  		if (error) throw error;
		  		message.reply(Array.isArray(results));
		  		message.channel.stopTyping();
			});
		  }
		});
		return;
    }
	if (!channelMentions || channelMentions.length < 1 || channelMentions === undefined)  {
		message.reply({"embed": {
	 	"title": "Error",
		"description": "Please include a valid channel mention.\nDon't know how to mention channels? Check [here](https://github.com/NootSponge/Sierra/wiki/How-to-mention-a-channel).",
		"color": 16713984
		}});
	}
	message.channel.stopTyping();
}