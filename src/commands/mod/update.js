

module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send("You don't have permission to use that command.");
        }
        else {
            try {

              
                let justmsg = message.substring(0,11).toString();
                  
                          message.channel.send(justmsg);
                
               
                 // message.delete(0);

            }
            catch(err) {
                message.channel.send(err);
            }
        }
    },
    aliases: ["updateText"],
    description: 'Bans a guild member by their ID'
}
