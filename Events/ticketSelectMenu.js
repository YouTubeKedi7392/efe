require('../index')

const Discord = require('discord.js')
const client = require('../index')

const { QuickDB } = require("quick.db")
const db = new QuickDB(); // npm i quick.db better-sqlite3

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
      if (interaction.customId === "painel_ticket") {
        let opc = interaction.values[0]
        if (opc === "opc1") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "1115025598025301128" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Zaten açık bir biletin var ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [
                    Discord.PermissionFlagsBits.ViewChannel
                  ]
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions
                  ]
                }
              ]
            }).then((ch) => {
              interaction.reply({ content: `✅ Merhaba ${interaction.user}, biletiniz açıldı ${ch}!`, ephemeral: true })  
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(`**Hoşgeldin ! ${interaction.user} Slot Seçimi Yapmak İçin Bize Ulaştığını Görüyoruz.** \n \n *Ekibimiz En Kısa Sürede Sizlere Yardımcı Olacaktır.*`);
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );
              ch.send({ embeds: [embed], components: [botao], content: `||@here||` }).then(m => {
                m.pin()
                
              })
          })
          }
  
        } else if (opc === "opc2") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "1115025598025301128" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Zaten açık bir biletin var ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [
                    Discord.PermissionFlagsBits.ViewChannel
                  ]
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions
                  ]
                }
              ]
            }).then((ch) => {
              interaction.reply({ content: `✅ Merhaba ${interaction.user}, biletiniz açıldı ${ch}!`, ephemeral: true })
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(`**Hoşgeldin ! ${interaction.user} Konvoy Daveti Yapmak İçin Bize Ulaştığını Görüyoruz.** \n \n *Ekibimiz En Kısa Sürede Sizlere Yardımcı Olacaktır.*`);
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );
  
              ch.send({ embeds: [embed], components: [botao], content: `||@here||` }).then(m => {
                m.pin()
              })
            })
          }
  
        } else if (opc === "opc3") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "1115025598025301128" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Zaten açık bir biletin var ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [
                    Discord.PermissionFlagsBits.ViewChannel
                  ]
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions
                  ]
                }
              ]
            }).then((ch) => {
              interaction.reply({ content: `✅ Merhaba ${interaction.user}, biletiniz açıldı ${ch}!`, ephemeral: true })
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(`**Hoşgeldin ! ${interaction.user} Ekibimize Katılmak İçin Bize Ulaştığını Görüyoruz.** \n \n *Ekibimiz En Kısa Sürede Sizlere Yardımcı Olacaktır.*`);
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );
  
              ch.send({ embeds: [embed], components: [botao], content: `||@here||` }).then(m => {
                m.pin()
              })
            })
          }
  
        }
      }
    } else if (interaction.isButton()) {
      if (interaction.customId === "fechar_ticket") {
        interaction.reply(`Merhaba ${interaction.user}, bu bilet 3 saniye içinde silinecektir...`)
        setTimeout(() => {
          try {
            interaction.channel.delete()
          } catch (e) {
            return;
          }
        }, 3000)
      }
    }
  })