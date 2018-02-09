const config = require("../config.json");

exports.run = (client, message, args) => {
  message.channel.startTyping();
  if(message.author.id !== config.ownerID) {
    return;
    message.channel.stopTyping();
  } else
  if (!args || args.length < 1 || args === undefined) {
    message.reply({"embed": {
    "title": "Error",
    "description": "You must provide a valid status.\nValid statuses:\n•online\n•dnd\n•idle\n•invisible",
    "color": 16713984
    }});
    message.channel.stopTyping();
  } else
  if (args[0] === "online") {
    client.user.setStatus("online");
    message.reply({"embed": {
      "title": "Success",
      "description": "Bot status set to `online`.",
      "color": 8311585
    }});
    message.channel.stopTyping();
  } else
  if (args[0] === "idle") {
    client.user.setStatus("idle");
    message.reply({"embed": {
      "title": "Success",
      "description": "Bot status set to `idle`.",
      "color": 8311585
    }});
    message.channel.stopTyping();
  } else
  if (args[0] === "dnd") {
    client.user.setStatus("dnd");
    message.reply({"embed": {
      "title": "Success",
      "description": "Bot status set to `Do not disturb`.",
      "color": 8311585
    }});
    message.channel.stopTyping();
  } else
  if (args[0] === "invisible") {
    client.user.setStatus("invisible");
    message.reply({"embed": {
      "title": "Success",
      "description": "Bot status set to `invisible`.",
      "color": 8311585
    }});
    message.channel.stopTyping();
  }
}