const { Client, Intents } = require('discord.js');
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// logs the bot on
client.login(token);

// If the bot is online, send this in Powershell
client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`);
});

// // welcome message
// client.on("guildMemberAdd", (member) => {
//     member.guild.channels.cache.get(process.env.WELCOME).send(`Welcome to the server, <@${member.id}>! Please be sure to read the <#705231752771403778> to understand how we expect members to behave in this server, and then the <#886389510731104316> for important information on axolotl care!`)
// });

// // Grub pie, pet only
// client.on("messageCreate", (message) => {
//     if (message.content.toLowerCase().includes("grub pie") && !message.author.bot) {
//         message.reply("Repashy Grub Pie is not suitable as a staple food for axolotls due to its low nutritional value, but it can be used as an occasional treat.");
//     } else if (message.content.toLowerCase().includes("pet only") && !message.author.bot) {
//         message.reply('"Pet only" means that this animal can only be kept as a pet and never be bred, due to its genetics either being unknown or problematic.');
//     }
// });

// // If person says good morning, react with sun
// // If person says good night, react with moon
// client.on("messageCreate", (message) => {
//     if (message.content.toLowerCase().includes("good morning")) {
//         message.react("☀️");
//     } else if (message.content.toLowerCase().includes("good night") || message.content.toLowerCase().includes("goodnight")) {
//         message.react("🌕");
//     }
// });

// client.on("message", message => {
//     // if doesn't start with prefix, or by bot, do not run
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     // slice deletes prefix
//     // split allows multiple words
//     const args = message.content.slice(prefix.length).split(/ +/g);
//     const command = args.shift().toLowerCase();

//     if(command === "ping") {
//         message.reply("Pong!");
//     }
// })