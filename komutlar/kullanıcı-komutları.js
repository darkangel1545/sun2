module.exports = {
  name: "kullanıcı",
  code: `
  $title[SunBot Kullanıcı]
  $description[
  📘 **$getGuildVar[prefix]afk**
  Afk moduna geçmenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]afk <sebep>

  📘 **$getGuildVar[prefix]kullanıcı-bilgi**
  Etiketlediğiniz kullanıcı hakkındaki bilgileri gösterir.
  **Kullanım:** $getGuildVar[prefix]afk <kişi>

  📘 **$getGuildVar[prefix]avatar**
  Etiketlediğiniz kullanıcının avatarını gösterir.
  **Kullanım:** $getGuildVar[prefix]avatar <kişi>
  
  📘 **$getGuildVar[prefix]notlarım**
  Notlarınızı gösterir.
  **Kullanım:** $getGuildVar[prefix]notlarım
  
  📘 **$getGuildVar[prefix]not-düzenle**
  Notunuzu düzenlemenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]not-düzenle <yeni not>
  
  📘 **$getGuildVar[prefix]not-sil**
  Notunuzu silmenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]not-sil
  
  📘 **$getGuildVar[prefix]dm-gönder**
  Etiketlediğiniz kullanıcıya dm gönderir.
  **Kullanım:** $getGuildVar[prefix]dm-gönder <kişi> <mesaj>

  📘 **$getGuildVar[prefix]roblox-kayıt**
  Roblox üzerinden sisteme kayıt olmanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]roblox-kayıt <roblox id>

  📘 **$getGuildVar[prefix]roblox-profil**
  Etiketlediğiniz kullanıcının roblox profilini gösterir.
  **Kullanım:** $getGuildVar[prefix]roblox-profil <kişi>
  ]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  
  `
}