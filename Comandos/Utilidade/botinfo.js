const Discord = require("discord.js")

module.exports = {
  name: "botinfo", // Coloque o nome do comando
  description: "Bot hakkında bilgi sağlar.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let dono = "329614299557396483"; // Coloque seu ID
    let membros = client.users.cache.size;
    let servidores = client.guilds.cache.size;
    let canais = client.channels.cache.size;
    let bot = client.user.tag;
    let avatar_bot = client.user.displayAvatarURL({ dynamic: true });
    let linguagem = "JavaScript";
    let livraria = "Discord.Js";
    let ping = client.ws.ping;

    let embed = new Discord.EmbedBuilder()
    .setColor("Random")
    .setAuthor({ name: bot, iconURL: avatar_bot })
    .setFooter({ text: bot, iconURL: avatar_bot })
    .setTimestamp(new Date())
    .setThumbnail(avatar_bot)
    .setDescription(`Merhaba ${interaction.user}, aşağıdaki bilgilerime bakın:\n\n> 🤖 İsim: \`${bot}\`.\n> 🤖 Sahip: <@923380965810774016>.
\n> ⚙ Üyeler: \`${membros}\`.\n> ⚙ Sunucular: \`${servidores}\`.\n> ⚙ Kanallar: \`${canais}\`.\n> ⚙ Ping: \`${ping}\`.
\n> 📚 Programlama dili: \`${linguagem}\`.\n> 📚 Kitapçı: \`${livraria}\`.`);

    interaction.reply({ embeds: [embed] })


  }
}