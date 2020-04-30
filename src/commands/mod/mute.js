module.exports = {
    run: async(client, message, args) => {
    
            try {

              
                let justmsg = message.content.substring(0,7).toString();
  message.channel.send(justmsg.toString())


                let result = justmsg.replace('|', ' ');
              
                let result2 = justmsg.replace('|', '\n');
              
                    
                message.channel.send(result2.toString())


           
               
                 // message.delete(0);

            }
            catch(err) {
                message.channel.send(err);
            }
        
    },
    aliases: ["update"],
    description: 'Bans a guild member by their ID'
}
