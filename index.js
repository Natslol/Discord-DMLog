require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13'),
    client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
})

client.on('messageDelete', (deletedMessage) => {
    if (deletedMessage.channel.type === "DM")
        if(deletedMessage.author.id !== client.user.id)
            console.log(`\n[${deletedMessage.author.tag}] ${deletedMessage.content}`);
})

client.login(process.env.YOUR_TOKEN);
