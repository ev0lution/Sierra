exports.run = (client, message) => {
  var date = new Date();
  client.channels.find("id","413855266929508353").send({"embed": {
    "title": "`!help` command executed",
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
  message.author.send({"embed": {
    "title": "Help Menu",
    "description": "I don't know many commands yet, but here are the links to the documentation.",
    "color": 4886754,
    "thumbnail": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Information_icon4.svg/600px-Information_icon4.svg.png"},
    "fields": [
      {
        "name": "Commands List",
        "value": "https://github.com/NootSponge/Sierra/wiki/Commands"
      },
      {
        "name": "Wiki",
        "value": "https://github.com/NootSponge/Sierra/wiki/"
      },
      {
        "name": "Found a bug?",
        "value": "https://github.com/NootSponge/Sierra/issues/"
      },
      {
        "name": "Want to suggest a feature?",
        "value": "https://discord.gg/ryXbjvE <-- That's Andrew's dev server ;)"
      }
    ]
  }
});
  message.reply("Check your DMs.");
  message.channel.stopTyping();
}