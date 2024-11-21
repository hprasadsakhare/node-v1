const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.on('messageCreate', message =>{
    console.log(message.content);
})

client.login('your-token-here');