module.exports = [{
  name: "yardım",
  code: `
  $title[DarkBot Yardım]
  $description[
  Botun yardım sayfasına hoşgeldiniz.

  📗 **-** Eğlence
  📕 **-** Moderasyon
  📘 **-** Kullanıcı
  📙 **-** Geliştirici
  ]
  $thumbnail[$userAvatar[$clientID]]
  $footer[$username;$authorAvatar]
  $addTimestamp
        $addButton[1;📙Geliştirici;secondary;gelistirici;false;]
           $addButton[1;📘Kullanıcı;secondary;kullanici;false;]
             $addButton[1;📕Moderasyon;secondary;mod;false;]
  $addButton[1;📗Eğlence;secondary;eglence;false;]
    $onlyIf[$getVar[bakım]!=var;Botta bakım çalışması var! Şuanda komutları kullanamazsın.]
    $onlyIf[$getGlobalUserVar[karaliste;$authorID]!=var;Kara listedesin! Komutları kullanamazsın.]
  `
},
                  ,{
  type: "interaction",
  prototype: "button",
  name: "eglence",
  code: `
$interactionUpdate[;{newEmbed:{title:DarkBot Eğlence}{description:
  📗 **$getGuildVar[prefix]aşk-ölçer**
  Etiketlenen kullanıcıyla olan aşkınızı ölçer.
  **Kullanım:** $getGuildVar[prefix]aşk-ölçer <kişi>
  
  📗 **$getGuildVar[prefix]silah-efekt**
  Etiketlediğiniz kullanıcının profil fotoğrafına silah yerleştirir.
  **Kullanım:** $getGuildVar[prefix]silah-efekt <kişi>
  
  📗 **$getGuildVar[prefix]hapis**
  Etiketlediğiniz kullanıcının profil fotoğrafına hapis efekti koyar.
  **Kullanım:** $getGuildVar[prefix]hapis <kişi>
  
  📗 **$getGuildVar[prefix]iphone-alarm**
  Yazdığınız yazıyı iphone alarmına çevirir.
  **Kullanım:** $getGuildVar[prefix]iphone-alarm <yazı>
  
  📗 **$getGuildVar[prefix]steam-oyun**
  Yazdığınız oyunun steamdaki bilgilerini gösterir.
  **Kullanım:** $getGuildVar[prefix]steam-oyun <oyun ismi>
  
  📗 **$getGuildVar[prefix]yılan-oyunu**
  Yılan oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]yılan-oyunu
  
  📗 **$getGuildVar[prefix]mc-sunucu**
  Yazdığınız minecraft sunucusunun bilgilerini gösterir.
  **Kullanım:** $getGuildVar[prefix]mc-sunucu <server ip> <server port>
  
  📗 **$getGuildVar[prefix]tic-tac-toe**
  Etiketlediğiniz kişiyle Tic Tac Toe oynarsınız.
  **Kullanım:** $getGuildVar[prefix]tic-tac-toe <kişi>

  📗 **$getGuildVar[prefix]mayın-tarlası**
  Mayın tarlası oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]mayın-tarlası

  📗 **$getGuildVar[prefix]adam-asmaca**
  Adam asmaca oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]adam-asmaca

  📗 **$getGuildVar[prefix]tkm**
  Taş kağıt makas oyunu başlatır.
  **Kullanım:** $getGuildVar[prefix]tkm <kişi>

  📗 **$getGuildVar[prefix]şarkı-sözü**
  Yazdığınız şarkının sözlerini gösterir.
  **Kullanım:** $getGuildVar[prefix]şarkı-sözü <şarkı>
}{thumbnail:$userAvatar[$clientID]}{footer:$username:$authorAvatar}{timestamp:ms}};{actionRow:{button:📗Eğlence:secondary:eglence:false}{button:📕Moderasyon:secondary:mod:false}{button:📘Kullanıcı:secondary:kullanici:false}{button:💰Ekonomi:secondary:ekonomi:false}};;everyone;false]

`
},{
  type: "interaction",
  prototype: "button",
  name: "mod",
  code: `
$interactionUpdate[;{newEmbed:{title:DarkBot Moderasyon}{description:
  📕 **$getGuildVar[prefix]ban**
  Etiketlediğiniz kullanıcıyı sunucudan banlar.
  **Kullanım:** $getGuildVar[prefix]ban <kişi>

  📕 **$getGuildVar[prefix]ban-sayı**
  Etiketlediğiniz kullanıcının banladığı kişi sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]ban-sayı <kişi>

  📕 **$getGuildVar[prefix]uyar**
  Etiketlediğiniz kullanıcıyı belirttiğiniz nedenle uyarır.
  **Kullanım:** $getGuildVar[prefix]uyar <kişi> <sebep>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]uyarı-say**
  Etiketlediğiniz kullanıcının uyarı alma sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]uyarı-say <kişi>

 <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sa-as**
  Etiketlediğiniz kullanıcının uyarı alma sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]sa-as <aç veya kapat>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]hgbb**
  Giriş çıkış sistemini ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]hgbb <aç veya kapat>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sunucu-bilgi**
  Sunucu hakkındaki bilgileri gösterir.
  **Kullanım:** $getGuildVar[prefix]sunucu-bilgi

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sunucu-tanıt**
  Sunucunuzu botun destek sunucusunda tanıtır.
  **Kullanım:** $getGuildVar[prefix]sunucu-tanıt

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]duyuru-kanal-ayarla**
  Duyuru kanalını ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]duyuru-kanal-ayarla <kanal>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]duyuru-yap**
  Duyuru kanalında yazdığınız duyuruyu yapar.
  **Kullanım:** $getGuildVar[prefix]duyuru-yap <duyuru>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sunucu-panel**
  Sunucu panelini ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]sunucu-panel <kur veya sıfırla>
}{thumbnail:$userAvatar[$clientID]}{footer:$username:$authorAvatar}{timestamp:ms}};{actionRow:{button:📗Eğlence:secondary:eglence:false}{button:📕Moderasyon:secondary:mod:false}{button:📘Kullanıcı:secondary:kullanici:false}{button:💰Ekonomi:secondary:ekonomi:false}};;everyone;false]

`
},{
  type: "interaction",
  prototype: "button",
  name: "kullanici",
  code: `
$interactionUpdate[;{newEmbed:{title:DarkBot Kullanıcı}{description:
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]afk**
  Afk moduna geçmenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]afk <sebep>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]kullanıcı-bilgi**
  Etiketlediğiniz kullanıcı hakkındaki bilgileri gösterir.
  **Kullanım:** $getGuildVar[prefix]afk <kişi>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]avatar**
  Etiketlediğiniz kullanıcının avatarını gösterir.
  **Kullanım:** $getGuildVar[prefix]avatar <kişi>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]notlarım**
  Notlarınızı gösterir.
  **Kullanım:** $getGuildVar[prefix]notlarım
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]not-düzenle**
  Notunuzu düzenlemenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]not-düzenle <yeni not>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]not-sil**
  Notunuzu silmenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]not-sil
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]dm-gönder**
  Etiketlediğiniz kullanıcıya dm gönderir.
  **Kullanım:** $getGuildVar[prefix]dm-gönder <kişi> <mesaj>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]roblox-kayıt**
  Roblox üzerinden sisteme kayıt olmanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]roblox-kayıt <roblox id>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]roblox-profil**
  Etiketlediğiniz kullanıcının roblox profilini gösterir.
  **Kullanım:** $getGuildVar[prefix]roblox-profil <kişi>
}{thumbnail:$userAvatar[$clientID]}{footer:$username:$authorAvatar}{timestamp:ms}};{actionRow:{button:📗Eğlence:secondary:eglence:false}{button:📕Moderasyon:secondary:mod:false}{button:📘Kullanıcı:secondary:kullanici:false}{button:💰Ekonomi:secondary:ekonomi:false}};;everyone;false]

`
},{
  type: "interaction",
  prototype: "button",
  name: "gelistirici",
  code: `
$interactionUpdate[;{newEmbed:{title:DarkBot Ekonomi}{description:
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]eval**
  Yazdığınız komutları işlemenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]eval <komutlar>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]kara-liste**
  Kara listedeki üyeleri yönetmenizi sağlar.
  **Kullanım:** $getGuildVar[prefix]kara-liste <ekle veya sil> <kullanıcı ıd>
}{thumbnail:$userAvatar[$clientID]}{footer:$username:$authorAvatar}{timestamp:ms}};{actionRow:{button:📗Eğlence:secondary:eglence:false}{button:📕Moderasyon:secondary:mod:false}{button:📘Kullanıcı:secondary:kullanici:false}{button:💰Ekonomi:secondary:ekonomi:false}};;everyone;false]
$suppressErrors[]

`
}]