const Discord = require("discord.js");
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password 		  	: process.env.SQLPASS,
  database        : 'sierra'
});

exports.run = (client, message, args) => {
	let has_manageGuild = message.member.hasPermission("MANAGE_GUILD");
	var date = new Date();
  client.channels.find("id","413855266929508353").send({"embed": {
    "title": "`!help` command executed",
    "description": `Command executed on guild ${message.guild.name} (ID: ${message.guild.id}) by ${message.author.tag},\nwith arguments ${args.toString()}`,
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
	if(has_manageGuild === false) {
		return message.reply({"embed": {
  		"color": 16711680,
  		"title": "Command Error",
  		"description": "You don't have access to use this command!\nYou must have the Manage Guild permission."
  	}});
	} else
	if(!args || args.size < 1 || args[0] === undefined) {
		message.channel.stopTyping();
    return message.reply("Must provide a valid channel name.");
  }
  if (args[0] === "list") {
	  pool.query("SELECT * FROM ignoredChannels WHERE guildID = ?", [message.guild.id], function (error, results, fields) {
      if (error) throw error;
      if (results[0].ignoredIDs === '') {
        return message.reply({"embed": {
          "color": 4886754,
          "title": "Ignored Channels",
          "description": "You do not have any ignored channels."
        }});
      }
      var ignoredChannels = results[0].ignoredIDs.split(" "); // Converts ignored channel IDs from column to an array.
      var mentionsArray = new Array();
      ignoredChannels.forEach(function(string) {
        ignoredChannelMentions = "<#" + string + ">"; // Adds the mention brackets.
        mentionsArray.push(ignoredChannelMentions); // Adds the full mention to an array.
      });
      var finalMentions = mentionsArray.join("\n"); // Makes the mentions print correctly
      const embed = new Discord.RichEmbed()
        .setTitle("Ignored Channels")
        .setColor(4886754)
        .setDescription("You have " + mentionsArray.length + " ignored channel(s).\n" + finalMentions);
      return message.reply({embed});
    });
  }
  // To-do: Work on rest of args
}