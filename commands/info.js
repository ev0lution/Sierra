exports.run = (client, message) => {
  var date = new Date();
  client.channels.find("id","413855266929508353").send({"embed": {
    "title": "`!info` command executed",
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
    "title": "Information",
    "description": "I'm a Discord bot made for the purpose of 'because why not'. I was created on Feburuary 4th, 2018, and that's about it. Here I am!",
    "color": 8004607,
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
  message.reply("Check your DMs.");
  message.channel.stopTyping();
}