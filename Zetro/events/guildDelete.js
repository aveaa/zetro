exports.run = (client, guild) => {
  const ServerLog = client.channels.get('484425064146665472');

  let large = guild.large;
  
  if(large === true) large = "Yes";
  if(large === false) large = "No"
  
  let leftEmbed = new Discord.RichEmbed()
  .setTitle("Just Left a Server!")
  .setColor("#ff0000")
  .setDescription(`Guild Name: **${guild.name}**\nMember Count: **${guild.memberCount}**\nLarge: **${large}**\nID: **${guild.id}** Users\nServer Count: **${client.guilds.size}**`)
  .setTimestamp();
  
  ServerLog.send(leftEmbed);
  
 };
