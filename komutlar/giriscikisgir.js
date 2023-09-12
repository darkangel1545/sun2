module.exports = [{
    name: "",
    type: "guildJoin", // Event name
    channel: "$getGuildVar[giriscikis]", 
    code: `
      $title[Sunucuya Yeni Bir Üye Katıldı]
  $description[
  📥 **Sunucumuza hoşgeldin <@$authorID>!**
  
  **Senin sayende $membersCount üye olduk.**
  ]
  $thumbnail[$authorAvatar]
    `
}]