
const disbut = require("discord-buttons");
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
let button1 = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Music')
  .setID("Music")
  .setEmoji('874333312846549063');
let button2 = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Filters')
  .setEmoji('866155255485825035')
  .setID("Filter");

let row1 = new disbut.MessageActionRow()
  .addComponent(button1)
  .addComponent(button2)


module.exports = {
  name: 'help',
  aliases: ['h'],
  category: 'Core',
  utilisation: '{prefix}help <command name>',

  execute(client, message, args) {
    if (!args[0]) {
      const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
      const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

      let helpEmbed = new Discord.MessageEmbed()
        .setTitle("<a:pdx_loading:956111042243620884> Help Panel <a:pdx_loading:956111042243620884>")
        .setColor("cccfff")
        .setDescription("")
        .addField(
        "Music:",
        "`clear-queue`, `filter`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `resume`, `search`, `shuffle`, `skip`, `stop`, `volume`, `w-filters`")
        .setImage("https://media.discordapp.net/attachments/955698680009207839/956139200737062952/unknown.gif")
      
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Powered by Neear")
      return message.channel.send(helpEmbed,row1);
      message.channel.send({
        embed: {
          color: 'ORANGE',
          author: { name: 'Help pannel' },
          footer: { text: '' },
          fields: [
            { name: 'Bot', value: infos },
            { name: 'Music', value: music },
            { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
          ],
          timestamp: new Date(),
          description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
        },
      });
      message.channel.send('test1')
    } else {
      const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

      if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);
      let helpcommandEmbed = new MessageEmbed()
        .setTitle(" <a:pdx_loading:956111042243620884> Help Panel <a:pdx_loading:956111042243620884>")
        .setColor("cccfff")
        .addField(
          "<a:pdx_arrow:956132105354637323> Command Name: ",
          command.name
        )
        .addField(
          "<a:pdx_arrow:956132105354637323> Command Category:",
          command.category
        )
        .addField(
          "<a:pdx_arrow:956132105354637323> Command Aliase(s)",
          command.aliases.length < 1 ? 'None' : command.aliases.join(', ')
        )
        .addField(
          "<a:pdx_arrow:956132105354637323> Command Utilisation: ",
          command.utilisation.replace('{prefix}', client.config.discord.prefix)
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Powered by Neear")
      return message.channel.send(helpcommandEmbed,{
        button: [buttoninv,buttonsupport],
      });
      




    };
  },
};