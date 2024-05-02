import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
const prohibited = ['', '', '', '', '', '', '', '', 'puto', 'culo', 'putita', '', '', 'pene', 'coño', 'asesinato', '', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', '', '', '', 'teta', 'vagina', 'marsha may', 'misha cross', '', '', 'furro', 'furra', 'xxx', 'rule34', '', '', 'necrofilia', 'pinga', 'horny', '', 'nude', 'popo', '', 'femdom', 'futanari', 'erofeet', '', '', '', 'ero', 'ecchi', '', '', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '', 'cp', 'mia marin', 'lana rhoades', 'cepesito', '', 'buceta', '']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '🚩 *لن أعطي نتائج لطلبك* 😒', m, )

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `*تحميل صور من غوغل*\nمثــــال :\n*.image* facebook`

const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `📍 instagram.com/noureddine_ouafy` , m) 
}
handler.help = ['image']
handler.tags = ['downloader']
handler.command = /^(image)$/i

export default handler
