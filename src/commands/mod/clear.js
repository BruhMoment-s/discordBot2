module.exports = {
    run: async(client, msg, args) => {
        let [ userId, limit ] = args.split(/\s+/);
        if (isNAN(args[0])) return message.channel.send('**Please select a valid amount of messages to purge');

        if (args[0] > 100 )  return message.channel.send('**Please select a value bellow 100**');
        
        message.channel.buldDelete(args[0])
        .then( messagess => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then( msg => msg.delete({timeout: 1000})))
        .catch( error => message.channel.send(`**Error:** ${error.message}`));

    },
    aliases: ['clear'],
    description: 'Deletes a number of messages from a user in a channel.'
}
