const Discord = require("discord.js")

module.exports = {
  name: "kullanıcıbilgisi", // Coloque o nome do comando
  description: "Bir kullanıcının bilgilerini görüntüleyin.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "kullanici",
        description: "Bir kullanıcıdan bahsedin.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    }
],

  run: async (client, interaction) => {

    let user = interaction.options.getUser("kullanici");
    let data_conta = user.createdAt.toLocaleString();
    let id = user.id;
    let tag = user.tag;
    let is_bot = user.bot;

    if (is_bot === true) is_bot = "Evet";
    if (is_bot === false) is_bot = "Hayır";

    let embed = new Discord.EmbedBuilder()
    .setColor("Random")
    .setAuthor({ name: user.username, iconURL: user.displayAvatarURL({ dynamic: true }) })
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    .setTitle("Kullanıcı bilgileri:")
    .addFields(
        {
            name: `🎇 İsim:`,
            value: `\`${tag}\` `,
            inline: false
        },
        {
            name: `🆔 Id:`,
            value: `\`${id}\` `,
            inline: false
        },
        {
            name: `📅 Hesap oluşturma:`,
            value: `\`${data_conta}\` `,
            inline: false
        },
        {
            name: `🤖 Bu bir bot mu?`,
            value: `\`${is_bot}\` `,
            inline: false
        }
    );

    let botao = new Discord.ActionRowBuilder().addComponents(
        new Discord.ButtonBuilder()
        .setURL(user.displayAvatarURL({ dynamic: true }))
        .setEmoji("📎")
        .setStyle(Discord.ButtonStyle.Link)
        .setLabel(`Avatarı ${user.username}.`)
        
    )

    interaction.reply({ embeds: [embed], components: [botao] })


    
  }
}