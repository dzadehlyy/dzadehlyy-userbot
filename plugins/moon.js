let handler = async (message, { conn }) => {
  let response = await conn.sendMessage(message.chat, {
    'text': "*Loading...*"
  });
  let emojis = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
  let developerAbout = '_developed by dzadehlyy_';

  let interval = 250;
  let i = 0;
  let maxIterations = 201; // Maksimum tekrar sayısı

  for (let j = 0; j < maxIterations; j++) {
    let emoji = emojis[i % emojis.length];
    await conn.relayMessage(message.chat, {
      'protocolMessage': {
        'key': response.key,
        'type': 0xe,
        'editedMessage': {
          'conversation': emoji
        }
      }
    }, {});
    i++;
    interval += 250;
  }

  await conn.relayMessage(message.chat, {
    'protocolMessage': {
      'key': response.key,
      'type': 0xe,
      'editedMessage': {
        'conversation': developerAbout
      }
    }
  }, {});
};

handler.help = ['moon'];
handler.tags = ["fun"];
handler.command = ["moon"];
export default handler;
