const http = require('http');
const express = require('express');
const app = express();
const mysql = require('mysql');

app.get("/", (request, response) => {
  const date = new Date().toISOString().
  replace(/T/, ' ').
  replace(/\..+/, '');
  console.log(`[${date}]` + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const pool = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password 		  	: process.env.SQLPASS,
  database        : 'sierra'
});

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

// Prints 'I'm online' to console if startup is successful
client.on('ready',() => {
  console.log("I'm online!");
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("guildCreate", guild => {
  pool.query("INSERT INTO ignoredChannels (guildID, ignoredIDs) VALUES (?, ?)", [guild.id, ""], function (error, results, fields) {
    if (error) throw error;
  });
});

client.on("guildDelete", guild => {
  pool.query("DELETE FROM ignoredChannels WHERE guildID = ?", [guild.id], function (error, results, fields) {
    if (error) throw error;
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  if (message.channel.type === "dm") return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.TOKEN);