const Discord = require("discord.js")

module.exports = {
  name: "ban", // Coloque o nome do comando
  description: "Bir kullanıcıyı yasaklayın.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Yasaklanacak bir kullanıcıdan bahsedin.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "sebep",
        description: "Bir sebep girin.",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
        interaction.reply(`Bu komutu kullanma izniniz yok.`);
    } else {
        let userr = interaction.options.getUser("user");
        let user = interaction.guild.members.cache.get(userr.id)
        let motivo = interaction.options.getString("sebep");
        if (!motivo) motivo = "Tanımlanmadı.";

        let embed = new Discord.EmbedBuilder()
        .setColor("Green")
        .setDescription(`Kullanıcı ${user} (\`${user.id}\`) başarıyla yasaklandı!`);

        let erro = new Discord.EmbedBuilder()
        .setColor("Red")
        .setDescription(`Kullanıcı yasaklanamadı  ${user} (\`${user.id}\`) sunucudan!`);

        user.ban({ reason: [motivo] }).then( () => {
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [erro] })
        })
    }

  }
}