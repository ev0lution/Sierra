exports.run = (client, message, args) => {
	const sqlite3 = require('sqlite3').verbose();
	// Opens guild database
	let db = new sqlite3.Database('./guilds.db', sqlite3.OPEN_READWRITE, (err) => {
  	if (err) {
  	  console.error(err.message);
  	}
	  console.log('Connected to the guilds database.');
	});
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
    	db.close();
    	return;
	} else
	if (args1 !== "list") {
		message.reply({"embed": {
    	"title": "Error",
    	"description": "Usage: `!ignore <channel | list>`",
    	"color": 16713984
    	}});
    	message.channel.stopTyping();
    	db.close();
    	return;
	} else
	if (args1 === "list") {
		let guildId = message.guild.id;
		db.run("CREATE TABLE IF NOT EXISTS 'ignoredChannels' ('guildID'	INTEGER, 'ignoredIDs'	TEXT, PRIMARY KEY('guildID'));", (err, rows) => {
			if (err) {
				throw err;
			}
		});
		let sql = `SELECT * FROM ignoredChannels WHERE guildID = ?`;
    	db.all(sql, [guildId], (err, rows) => {
		  if (err) {
		  	message.channel.stopTyping();
		    throw err;
		  } else
		  if (rows.length < 1) {
		  	message.channel.stopTyping();
		  	message.reply("<1");
		  }
		});
	} else
	if (!channelMentions || channelMentions.length < 1 || channelMentions === undefined)  {
		message.reply({"embed": {
    	"title": "Error",
    	"description": "Please include a valid channel mention.\nDon't know how to mention channels? Check [here](https://github.com/NootSponge/Sierra/wiki/How-to-mention-a-channel).",
    	"color": 16713984
    	}});
	}
	message.channel.stopTyping();
	db.close();
}