require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));

const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;
let restMEssage;
client.on('message', message => {
if (message.substring(0,12) == "_updateText")
{
 restMEssage = message.substring(0,12).ToString();

 message.channel.send(restMEssage);
}


});
