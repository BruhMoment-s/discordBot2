module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send(args[0].toString());
           
        }
        else {
            try {

              
         
           
               
                 // message.delete(0);

            }
            catch(err) {
                message.channel.send(err);
            }
        }
    },
    aliases: ["update"],
    description: 'Bans a guild member by their ID'
}
