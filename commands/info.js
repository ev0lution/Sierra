exports.run = (client, message) => {
	message.reply({"embed": {
    "title": "Information",
    "description": "I'm a Discord bot made for the purpose of assisting the normal duties of Server Admins and Mods.",
    "color": 12390624,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/148680149548793856/6f019240d669ed110cb165b53f85ae4f.jpg?size=1024",
      "text": "Andrew#2659"
    },
    "thumbnail": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Information_icon4.svg/600px-Information_icon4.svg.png"
    },
    "fields": [
      {
        "name": "Author",
        "value": "I was created by Andrew, a hobbyist focused on computer science, programming/coding, and databases."
      },
      {
        "name": "Support/Suggestions",
        "value": "To request features, get quick support on an aspect of me, or just hang out with Andrew and his friends you can join his Discord server [here](https://discord.gg/ryXbjvE)."
      },
      {
        "name": "Documentation/Bugs and Issues",
        "value": "To report an issue with me please go [here](https://github.com/NootSponge/Sierra/issues), and for more in-depth documentation you can visit the wiki [here](https://github.com/NootSponge/Sierra/wiki)."
      },
      {
        "name": "I'm open source!",
        "value": "I am hosted on the [GNU General Public License v3](https://www.tldrlegal.com/l/gpl-3.0) so you can freely modify me! Here's my repo: https://github.com/NootSponge/Sierra."
      }
    ]
  }});
}