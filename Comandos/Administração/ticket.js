const Discord = require("discord.js")

module.exports = {
  name: "ticket", // Coloque o nome do comando
  description: "Bilet panosunu açın.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
        interaction.reply({ content: `Bu komutu kullanma izniniz yok!`, ephemeral: true })
    } else {
        let embed = new Discord.EmbedBuilder()
        .setColor("#9fe7e8")
        .setThumbnail("https://cdn.discordapp.com/avatars/1112416118947205220/66ad3dec892c6d6c8b71589861890c84.webp")
        .setFooter({ text: "discord.gg/wannos", iconURL: "https://cdn.discordapp.com/avatars/1112416118947205220/66ad3dec892c6d6c8b71589861890c84.webp" })
        .setURL('https://discord.gg/wannos')
        .setTimestamp(new Date())
        .setAuthor({ name: "WaNNoS Logistics Ticket System", iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setDescription(`### Bize Ulaşmak İçin Bir Sebep Seçiniz. \n \n \n **WaNNoS Logistics**`);

        let painel = new Discord.ActionRowBuilder().addComponents(
            new Discord.SelectMenuBuilder()
            .setCustomId("painel_ticket")
            .setPlaceholder("- Ticket açmak için buraya tıklayın! -")
            .addOptions(
                {
                    label: "🔴 Slot Seçimi - Slot Selection 🔴",
                    description: "Konvoy Slotu Seçmek İçin Bize Ulaşın!",
                    value: "opc1"
                },
                {
                    label: "🚛 Konvoy Daveti - Convoy Invitation 🚛",
                    description: "Konvoyunuza Ekibimizi Davet Etmek İçin Bize Ulaşın!",
                    value: "opc2"
                },
                {
                    label: "👨 Ekibimize Katılım - Join Our Team 👨",
                    description: "Ekibimize Katılmak İçin Bize Ulaşın",
                    value: "opc3"
                }
            )
        );

        interaction.reply({ content: `✅ Mesaj gönderildi!`, ephemeral: true  })
        interaction.channel.send({ embeds: [embed], components: [painel] })
    }


  }
}