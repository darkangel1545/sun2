module.exports = {
  name: "yetkili",
  code: `
  $title[SunBot Yetkili]
  $description[
  📕 **$getGuildVar[prefix]ban**
  Etiketlediğiniz kullanıcıyı sunucudan banlar.
  **Kullanım:** $getGuildVar[prefix]ban <kişi>

  📕 **$getGuildVar[prefix]ban-sayı**
  Etiketlediğiniz kullanıcının banladığı kişi sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]ban-sayı <kişi>

  📕 **$getGuildVar[prefix]uyar**
  Etiketlediğiniz kullanıcıyı belirttiğiniz nedenle uyarır.
  **Kullanım:** $getGuildVar[prefix]uyar <kişi> <sebep>

  📕 **$getGuildVar[prefix]uyarı-say**
  Etiketlediğiniz kullanıcının uyarı alma sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]uyarı-say <kişi>

 📕 **$getGuildVar[prefix]sa-as**
  Etiketlediğiniz kullanıcının uyarı alma sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]sa-as <aç veya kapat>

  📕 **$getGuildVar[prefix]hgbb**
  Giriş çıkış sistemini ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]hgbb <aç veya kapat>
  
  📕 **$getGuildVar[prefix]sunucu-bilgi**
  Sunucu hakkındaki bilgileri gösterir.
  **Kullanım:** $getGuildVar[prefix]sunucu-bilgi

  📕 **$getGuildVar[prefix]sunucu-tanıt**
  Sunucunuzu botun destek sunucusunda tanıtır.
  **Kullanım:** $getGuildVar[prefix]sunucu-tanıt

  📕 **$getGuildVar[prefix]duyuru-kanal-ayarla**
  Duyuru kanalını ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]duyuru-kanal-ayarla <kanal>

  📕 **$getGuildVar[prefix]duyuru-yap**
  Duyuru kanalında yazdığınız duyuruyu yapar.
  **Kullanım:** $getGuildVar[prefix]duyuru-yap <duyuru>
  
  📕 **$getGuildVar[prefix]sunucu-panel**
  Sunucu panelini ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]sunucu-panel <kur veya sıfırla>
  ]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$username tarafından]
  $addTimestamp
  
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}