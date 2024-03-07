const { Client, IntentsBitField, MessageActivityType } = require ("discord.js");

// Here the client means the bot
const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on ("ready", (c) => {
    console.log (`👍 ${c.user.tag} is online.`);
});

client.on ("messageCreate", (message) => {
    // console.log (message.content);

    // It checks if the user is bot or not 
    if (message.author.bot) {
        return;
    }

    if (message.content.toLowerCase () === "hello") {
        message.reply ("Hey!");
    }
    
    if (message.content.toLowerCase () === "hi") {
        message.reply ("Hey!");
    }
}); 

require ("dotenv").config ();
client.login (process.env.BOT_PASSWORD);

