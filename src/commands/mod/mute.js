module.exports = {
    run: async(client, message, args) => {
    
            try {

              
                let justmsg = message.content.substring(0,11).toString();


                let result = justmsg.replace('|', ' ');
              
                let result2 = justmsg.replace('|', '\n');
              
                    
                message.channel.send(result2.toString())


                const embed = {
                    "content": "" + message.guild.defaultRole.toString(),
                    "title": "Xedved update!",
                    "description": "",
                  
                    "color": 9936031,
                    "timestamp": "2020-04-29T05:00:18.664Z",
                    "footer": {
                      "icon_url": "https://media.discordapp.net/attachments/703857786496483359/704681488402219038/xedved_thing33.png",
                      "text": "Xedved update alert"
                    },
                  
                  
                 
                    "fields": [
                 
                      {
                        "name": "_ _",
                        "value": "Version " + Jsoup.connect("https://pastebin.com/raw/RvdaJKih").get().toString(),
                        "inline": true
                      },
                      {
                        "name": " _ _",
                        "value": "Update logs:",
                        "inline": true
                      },
                      {
                        "name": " _ _",
                        "value": "```" + args[0].toString() + "```",
                        "inline": true
                      }
                    ]
                  };
           
               
                 // message.delete(0);

            }
            catch(err) {
                message.channel.send(err);
            }
        
    },
    aliases: ["announce"],
    description: 'Bans a guild member by their ID'
}
