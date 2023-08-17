const Discord = require("discord.js");
const DONO = "1027513785050746921"; // Coloque seu ID

module.exports = {
    name: "setstatus2",
    description: "Durumumu belirle.",
    options: [
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "status",
            description: "Hangi stili uygulamak istiyorsunuz (online, dnd, idle, invisible)?",
            required: true,
        },
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "descrição",
            description: "Durumun açıklaması ne olacak?",
            required: true,
        }
    ],

    run: async (client, interaction) => {

        if (interaction.user.id !== DONO) return interaction.reply({ content: `Bu komutu yalnızca sahibim kullanabilir!`, ephemeral: true })

        try {

            let status = interaction.options.getString("status");
            let desc = interaction.options.getString("descrição");

            client.user.setStatus(`${status}`);

            client.user.setPresence({
                activities: [{
                    name: desc
                }],
            });

            let embed = new Discord.EmbedBuilder()
            .setColor("Green")
            .setTitle("Durum güncellendi!")
            .addFields(
                {
                    name: `🔮 Durumumu şu şekilde değiştirdim:`,
                    value: `\`${status}\`.`,
                    inline: false
                },
                {
                    name: `📝 Tarifimi şu şekilde değiştirdim:`,
                    value: `\`${desc}\`.`,
                    inline: false
                }
            )

            await interaction.reply({ embeds: [embed] });

        } catch (error) {
            return console.log(`Ops ${interaction.user}, bu komutu yürütürken bir şeyler ters gitti.`)
        }
    }
}