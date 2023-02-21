require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13'),
    client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
})

client.on('messageDelete', (deletedMessage) => {
    if (/^<@(\d+)>$/gm.test(deletedMessage.channel)) {
        if(deletedMessage.author.id === client.user.id) return;
        console.log(`\nMessage deleted from ${deletedMessage.author.tag} - "${deletedMessage.content}"`)
    }
})

client.login(process.env.YOUR_TOKEN);