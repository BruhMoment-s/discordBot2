

module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send("You don't have permission to use that command.");
        }
        else {
            try {

           
                let result = args[0].replace(/;/ig, ' ');
              
                let result2 = args[0].replace(/|/ig, '\n');
              
                    
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
                        "value": "```" + result2 + "```",
                        "inline": true
                      }
                    ]
                  };
                  message.channel.send({ embed });

                  message.delete(0);

            }
            catch(err) {
                message.channel.send(err);
            }
        }
    },
    aliases: ["update"],
    description: 'Bans a guild member by their ID'
}
