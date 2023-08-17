const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()

module.exports = {
  name: "afk", // Coloque o nome do comando
  description: "Afk modunu etkinleştirin.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "sebep",
        description: "Hareketsizlik nedenini ekleyin.",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }
],

  run: async (client, interaction) => {

    let motivo = interaction.options.getString("sebep");

    let afk_mode = await db.get(`modo_afk_${interaction.user.id}`);

    if (afk_mode === true) {
        interaction.reply({ content: `Merhaba ${interaction.user}, AFK modunuz zaten etkinleştirildi.`, ephemeral: true })
    } else {
        interaction.reply({ content: `Merhaba ${interaction.user}, AFK modunuz başarıyla etkinleştirildi!` })
        await db.set(`modo_afk_${interaction.user.id}`, true)
        await db.set(`motivo_afk_${interaction.user.id}`, motivo)
    }
    
  }
}