//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {

}
const defaultMenu = {
  before: `
┍───━━━━━━───╍⪼
┆ ❑ SANJI BOT ❏
┕───━━━━━━───╍⪼
╭╼⪼ SALAM *%name* 
父 *𝑻𝒐𝒕𝒂𝒍 𝑼𝒔𝒆𝒓:* %totalreg 
父 *𝑼𝒑𝒕𝒊𝒎𝒆:* %muptime 
父 *𝑪𝒓𝒆𝒂𝒕𝒐𝒓* saaaaaaaaaaaaaaanji
╰─────────────⪼
────────────────────────────────────────────

────────────────────────────────────────────
%readmore
Ⓛ =  ʟɪᴍɪᴛ/ᴅɪᴀᴍᴏɴᴅs
Ⓟ = ᴘʀᴇᴍɪᴜᴍ
--------------------------------------------------------------------------------------------------------------

  ≡ * 🅜🅔🅝🅤*
`.trimStart(),
  header: '┏━━⊜ *_%category_* ━⊜',
  body: '┃⋄ %cmd %isdiamond %isPremium',
  footer: '┗━━━━━━━━⬣\n',
  after: '♥',
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
let nao = await conn.sendMessage(m.chat, {text: '___________________🚂🚃🚃🚃'})

 await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '________________🚂🚃🚃🚃___'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '_____________🚂🚃🚃🚃______'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '__________🚂🚃🚃🚃_________'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '_______🚂🚃🚃🚃____________'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '____🚂🚃🚃🚃_______________'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '_🚂🚃🚃🚃__________________'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '🚃🚃_____________________'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '________________________'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「              」'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「  Z O R O 💚  」'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「              」'
       }
      }
    }, {})
 await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「  Z O R O 💚  」'
       }
      }
    }, {})   
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「             」'
       }
      }
    }, {})   
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「  Z O R O 💚  」'
       }
      }
    }, {})   
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: nao.key,
        type: 14,
        editedMessage: {
        conversation: '「 Loading menu 」'
       }
      }
    }, {})   
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 5000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 5000)
      }) * 5000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

 conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: 'red line ♥',
body: "",
thumbnailUrl: 'https://telegra.ph/file/4b77cbf714add7dbd9bcd.jpg',
sourceUrl: 'https://www.instagram.com/__.taoufik
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

     let vn = "./vn/miku.mp3"

  conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
  } catch (e) {
    conn.reply(m.chat, '❎ ᴍᴀᴀғ, ᴍᴇɴᴜ ᴍᴇɴɢᴀʟᴀᴍɪ ᴋᴇsᴀʟᴀʜᴀɴ', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = ['all','allmenu'] 

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
   }
