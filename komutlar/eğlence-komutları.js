module.exports = {
  name: "eğlence",
  code: `
  $title[SunBot Eğlence]
  $description[
   **$getGuildVar[prefix]aşk-ölçer**
  Etiketlenen kullanıcıyla olan aşkınızı ölçer.
  **Kullanım:** $getGuildVar[prefix]aşk-ölçer <kişi>

   **$getGuildVar[prefix]silah-efekt**
  Etiketlediğiniz kullanıcının profil fotoğrafına silah yerleştirir.
  **Kullanım:** $getGuildVar[prefix]silah-efekt <kişi>
  
   **$getGuildVar[prefix]hapis**
  Etiketlediğiniz kullanıcının profil fotoğrafına hapis efekti koyar.
  **Kullanım:** $getGuildVar[prefix]hapis <kişi>
  
   **$getGuildVar[prefix]iphone-alarm**
  Yazdığınız yazıyı iphone alarmına çevirir.
  **Kullanım:** $getGuildVar[prefix]iphone-alarm <yazı>
  
   **$getGuildVar[prefix]steam-oyun**
  Yazdığınız oyunun steamdaki bilgilerini gösterir.
  **Kullanım:** $getGuildVar[prefix]steam-oyun <oyun ismi>
  
   **$getGuildVar[prefix]yılan-oyunu**
  Yılan oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]yılan-oyunu
  
   **$getGuildVar[prefix]mc-sunucu**
  Yazdığınız minecraft sunucusunun bilgilerini gösterir.
  **Kullanım:** $getGuildVar[prefix]mc-sunucu <server ip> <server port>
  
   **$getGuildVar[prefix]tic-tac-toe**
  Etiketlediğiniz kişiyle Tic Tac Toe oynarsınız.
  **Kullanım:** $getGuildVar[prefix]tic-tac-toe <kişi>

  **$getGuildVar[prefix]mayın-tarlası**
  Mayın tarlası oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]mayın-tarlası

   **$getGuildVar[prefix]adam-asmaca**
  Adam asmaca oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]adam-asmaca

   **$getGuildVar[prefix]tkm**
  Taş kağıt makas oyunu başlatır.
  **Kullanım:** $getGuildVar[prefix]tkm <kişi>

   **$getGuildVar[prefix]şarkı-sözü**
  Yazdığınız şarkının sözlerini gösterir.
  **Kullanım:** $getGuildVar[prefix]şarkı-sözü <şarkı>
]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}