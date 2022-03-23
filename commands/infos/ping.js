module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`<a:pdx_online:954732318499696751> Pong - **${client.ws.ping}ms** !`);
    },
};