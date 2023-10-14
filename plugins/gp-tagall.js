






let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`Members: ${participants.length}${text ? `\nMessage: ${text}` : ''}\n\nMentions\n` + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
