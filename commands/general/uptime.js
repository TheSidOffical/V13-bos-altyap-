const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Tells you how long the bot has been running.'),
  async execute (interaction) {
    let totalSeconds = (interaction.client.uptime / 1000)
    const days = Math.floor(totalSeconds / 86400)
    totalSeconds %= 86400
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)

      const embed = new MessageEmbed()
      .setDescription(`The bot has been online for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`)
      .setColor("GREEN")
     await interaction.reply({ embeds: [embed] })
  }
}
