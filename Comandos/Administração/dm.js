const Discord = require("discord.js")

module.exports = {
  name: "dm", // Coloque o nome do comando
  description: "Envie uma mensagem no privado de um usuário.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "kullanici",
        description: "Bir kullanıcıdan bahsedin.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "mesaj",
        description: "Gönderilecek bir şey yazın.",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando!`, ephemeral: true })
    } else {
        let user = interaction.options.getUser("kullanici");
        let msg = interaction.options.getString("mesaj");

        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`${msg}`);

        user.send({ embeds: [embed] }).then( () => {
            let emb = new Discord.EmbedBuilder()
            .setColor("Green")
            .setDescription(`Merhaba ${interaction.user}, mesaj şu adrese gönderildi ${user} başarıyla!`);

            interaction.reply({ embeds: [emb] })
        }).catch(e => {
            let emb = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription(`Merhaba ${interaction.user}, mesaj şu adrese gönderilmedi ${user}, çünkü kullanıcı dm'yi kapattı!`);

            interaction.reply({ embeds: [emb] })
        })
    }


  }
}