const {REST , Routes} = require('discord.js');

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!'
},
]

const rest = new REST({version: '10'}).setToken('your-token  here');

async function registerCommands(){  
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands('your-client-id-here'),
            {body: commands},
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}