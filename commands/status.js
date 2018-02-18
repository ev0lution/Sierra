const config = require("../config.json");

exports.run = (client, message, args) => {
  if(message.author.id !== config.ownerID) {
    message.reply({"embed": {
    "title": "Error",
    "description": "You do not have access to this command!\nOnly the bot owner has access to this command.",
    "color": 16713984
    }});
  }
  const status = args[0];
  if (!status) {
    return message.reply({"embed": {
    "title": "Error",
    "description": "You must provide a valid status.\nValid statuses:\n•online\n•dnd\n•idle\n•invisible",
    "color": 16713984
    }});
  }

  switch(status) {
    case "online": 
      client.user.setStatus("online");
      message.reply({"embed": {
        "title": "Success",
        "description": "Bot status set to `online`.",
        "color": 8311585
      }});
      break;
    case "idle":
      client.user.setStatus("idle");
      message.reply({"embed": {
        "title": "Success",
        "description": "Bot status set to `idle`.",
        "color": 8311585
      }});
      break;
    case "dnd":
      client.user.setStatus("dnd");
      message.reply({"embed": {
        "title": "Success",
        "description": "Bot status set to `Do not disturb`.",
        "color": 8311585
      }});
      break;
    case "invisible":
      client.user.setStatus("invisible");
      message.reply({"embed": {
        "title": "Success",
        "description": "Bot status set to `invisible`.",
        "color": 8311585
      }});
      break;
  }
}
