require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_EMOJIS_AND_STICKERS"
    ]
});

// logs the bot on
client.login(process.env.TOKEN);

// If the bot is online, send this in Powershell
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(process.env.WELCOME).send(`<@${member.id} Welcome to the server!`)
});

// Grub pie, pet only
client.on("messageCreate", (message) => {
    if (message.content.toLowerCase().includes("grub pie") && !message.author.bot) {
        message.reply("Repashy Grub Pie is not suitable as a staple food for axolotls due to its low nutritional value, but it can be used as an occasional treat.");
    } else if (message.content.toLowerCase().includes("pet only") && !message.author.bot) {
        message.reply('"Pet only" means that this animal can only be kept as a pet and never be bred, due to its genetics either being unknown or problematic.');
    }
});

// If person says good morning, react with sun
// If person says good night, react with moon
client.on("messageCreate", (message) => {
    if (message.content.toLowerCase().includes("good morning")) {
        message.react("☀️");
    } else if (message.content.toLowerCase().includes("good night") || message.content.toLowerCase().includes("goodnight")) {
        message.react("🌕");
    }
});