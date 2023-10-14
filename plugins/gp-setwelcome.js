//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Qarşılama mesajı təyin edildi')
  } else throw `✳️ Mesajı daxil edin\n@user (mención)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome']
handler.admin = true
handler.owner = false

export default handler
