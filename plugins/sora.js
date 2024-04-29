let handler = async (m, { conn, usedPrefix, command }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
  let img = await q.download()
  if (!img) throw '*[❗] رد علی صوره فقط*'
  await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘ *_تم تغير الصوره بنجاح._*'))
  } else throw '[❗] رد علی الصورة اللتي ترید به تغير افتار المجموعه'}
  handler.command = /^(تغيرافتار|تغيرالفتار|تغير-صورة-المجموعة|تغير-صوره-المجموعه|تغير-صورة-الجروب|تغير-صوره-الجروب)$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  export default handler
