const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "urlbuton",
async execute(client, message, args) {

    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: "Bu Komutu Kullanabilmek İçin Gerekli İzinlere Sahip Değilsin", ephemeral: true});

    const arvsbed = new MessageEmbed()
    .setColor("#2f3136")
    .setFooter("Made by ❤️ arviis.")
    .setImage("https://media.discordapp.net/attachments/997105193256747028/1051895712792711178/image.png")
    .setDescription('Made by ❤️ arviis.');

    let arv = new MessageButton()
    .setStyle("LINK")
    .setURL("https://discord.gg/aVBCqTU4PZ")
    .setLabel("Made by ❤️ arviis.")
    .setEmoji('997610083670302870');

    const arvsrow = new MessageActionRow() 
    .addComponents([arv]);

    message.channel.send({components: [arvsrow], embeds: [arvsbed] });
  }
}