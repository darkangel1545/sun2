module.exports = {
  name: "geliştirici",
  code: `
  $title[SunBot Geliştirici]
  $description[
  📙 **$getGuildVar[prefix]eval**
  Yazdığınız komutları işlemenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]eval <komutlar>
  
  📙 **$getGuildVar[prefix]kara-liste**
  Kara listedeki üyeleri yönetmenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]kara-liste <ekle veya sil> <kullanıcı ıd>
  ]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}