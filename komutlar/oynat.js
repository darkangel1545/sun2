module.exports = {
  name: "oynat",
  code: `
  $playTrack[$message;youtube]
  $author[Şarkı Oynatılıyor;https://media4.giphy.com/media/JmUQGMJMZNPjXmT8Tq/giphy.gif?cid=6c09b9527agzp1w69g96guouu65800prnkr1wx1nf69uihcp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s]
  $addField[Ekleyen;<@$authorID>;true]
  $addField[Şarkı;<@$authorID>;true]

  `
}