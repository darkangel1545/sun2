module.exports = [{
    name: "",
    type: "guildLeave", // Event name
    channel: "$getGuildVar[giriscikis]", 
    code: `
  $title[Sunucudan Bir Üye Ayrıldı]
  $description[
  📤 **Görüşürüz \`$username\`!**
  
  **Sensiz $membersCount kişi kaldık.**
  ]
  $thumbnail[$authorAvatar]
    `
}]