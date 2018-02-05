exports.run = (client, message) => {
  message.reply({"embed": {
    "title": "Help",
    "description": "I don't know many commands yet, but here are the ones that I *do* know.",
    "color": 4886754,
    "thumbnail": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Information_icon4.svg/600px-Information_icon4.svg.png"},
    "fields": [
      {
        "name": "!status",
        "value": "`Bot owner only`\nThis command changes my status.\nValid statuses include:\n• online\n• dnd\n• idle\n• invisible"
      },
      {
        "name": "!reload",
        "value": "`Bot owner only`\nThis command reloads one of my other commands, that way it's faster to develop them."
      },
      {
        "name": "!ping",
        "value": "This command pings me and makes sure I'm still alive!"
      }
    ]
  }});
}