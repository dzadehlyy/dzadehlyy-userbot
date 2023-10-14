let handler = async (m, { conn, usedPrefix}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './dzadehlyy.jpg'


//Bütün komandalar aşağıda qeyd edildi
    
let lkr = `
*🛠️Main Commands:*
🕹️${usedPrefix}alive - The bot is in operational mode and sends some information about the User
🕹️${usedPrefix}info - It is used to check the status of the bot
🕹️${usedPrefix}ping
🕹️${usedPrefix}qr - Convert text to qr code
🕹️${usedPrefix}attp - Turns text into a color sticker
\n*🛠️Tools:*
🕹️${usedPrefix}tts - Convert the text you typed into speech
\n*🛠️Commands for Group:*
🕹️${usedPrefix}link
🕹️${usedPrefix}delete
🕹️${usedPrefix}demote
🕹️${usedPrefix}promote
🕹️${usedPrefix}add
🕹️${usedPrefix}kick
🕹️${usedPrefix}tagall (your message) - (For Admins)
🕹️${usedPrefix}listadmin
🕹️${usedPrefix}profile
🕹️${usedPrefix}gpinfo
\n*🛠️Commands for Mp3/Mp4:*
🕹️${usedPrefix}yts - Search for a video from YouTube
🕹️${usedPrefix}video - Download a video from YouTube
🕹️${usedPrefix}play - Download a song from YouTube
\n*🛠️Commands for Audio Editing:*
🕹️${usedPrefix}bass
🕹️${usedPrefix}slow

🕹️${usedPrefix}shazam


\n\n\n\t\t📁Developed by @dzadehlyy
`  

conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler
