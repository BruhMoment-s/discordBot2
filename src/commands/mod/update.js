

module.exports = {
    run: async(client, message, args) => {
        if(message.member.hasPermission('BAN_MEMBERS')) {
            let justmsg = message.substring(0,11).toString();
                  
                          message.channel.send(justmsg);
                
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
    aliases: ["updateText"],
    description: 'bruh'
}
