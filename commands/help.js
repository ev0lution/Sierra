exports.run = (client, message) => {
  message.channel.startTyping();
  message.reply({"embed": {
    "title": "Help",
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
        "value": "https://discord.gg/ryXbjvE"
      }
    ]
  }
});
  message.channel.stopTyping();
}