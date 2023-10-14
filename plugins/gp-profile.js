import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './dzadehlyy.jpg')
let user = global.db.data.users[who]
let { name, warn } = global.db.data.users[who]
let username = conn.getName(who)
let sn = createHash('md5').update(who).digest('hex')

let str = `
🔖 *Name:* ${username}
👤 *User:* @${who.replace(/@.+/, '')}
📱 *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 *Link:* wa.me/${who.split`@`}
⚠️ *warn:* ${warn}/${maxwarn}
`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['profile'] 

export default handler

