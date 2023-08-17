const Discord = require("discord.js")

module.exports = {
  name: "nickayarla", // Coloque o nome do comando
  description: "Kullanıcının sunucudaki takma adını yapılandırır.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Nick'i değiştirmek için bir üyeden bahsedin.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "nick",
        description: "Üyenin yeni takma adını girin.",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageNicknames)) {
        interaction.reply({ content: `Bu komutu kullanma izniniz yok.`, ephemeral: true })
    } else {
        const user = interaction.options.getUser("user")
        const membro = interaction.guild.members.cache.get(user.id)
        const nick = interaction.options.getString("nick")

        membro.setNickname(`${nick}`).then( () => {
            let embed = new Discord.EmbedBuilder()
            .setColor("Green")
            .setDescription(`Kullanıcı ${user} takma adını başarıyla \`${nick}\` olarak değiştirdi.`)
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            let embed = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription(`Girilen nick'in 32'den fazla karakteri vardır.`)
            interaction.reply({ embeds: [embed] })
        })
    }


  }
}