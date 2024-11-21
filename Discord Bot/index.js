const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent]});

client.on('messageCreate', message =>{
    if (message.author.bot) return;
    message.reply({
        content: 'hello form bot',
    });
})

client.login('your-token-here');