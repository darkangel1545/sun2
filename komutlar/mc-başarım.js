module.exports = {
  name: "mc-başarım",
  code: `
  $title[SunBot Mc Başarım]
  $image[https://skinmc.net/achievement/$random[1;30]/Basarim+Kazanildi/$message]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $onlyIf[$message!=;**Ödül için yazı girmelisin!**]
  `
}