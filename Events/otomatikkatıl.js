require('../index')

const Discord = require('discord.js')
const client = require('../index')

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {
  let canal = client.channels.cache.get("1140212208396148806") // coloque o ID do canal de voz
  if (!canal) return console.log("❌ Ses kanalına girilemedi.")
  if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Kanala girilemedi [ ${canal.name} ].`)

  try {

    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    })
    console.log(`✅ Ses kanalına katıldım [ ${canal.name} ] com sucesso!`)

  } catch(e) {
    console.log(`❌ Kanala girilemedi [ ${canal.name} ].`)
  }

});
