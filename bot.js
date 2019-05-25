const {Client, Attachment} = require('discord.js');
const bot = new Client();

bot.on('ready', () =>{
    console.log('This Bot Is Online!');
})

bot.login(process.env.BOT_TOKEN);
