const _0xc9dd59 = _0x19f8;
(function (_0x2bab51, _0x38a5b3) {
    const _0x30facf = _0x19f8;
    const _0x2948c6 = _0x2bab51();
    while (true) {
        try {
            const _0x303ced =
                (parseInt(_0x30facf(0x185)) / 0x1) * (-parseInt(_0x30facf(0x17a)) / 0x2) +
                parseInt(_0x30facf(0x183)) / 0x3 +
                (-parseInt(_0x30facf(0x177)) / 0x4) * (parseInt(_0x30facf(0x173)) / 0x5) +
                (parseInt(_0x30facf(0x18b)) / 0x6) * (-parseInt(_0x30facf(0x179)) / 0x7) +
                -parseInt(_0x30facf(0x181)) / 0x8 +
                (-parseInt(_0x30facf(0x17f)) / 0x9) * (-parseInt(_0x30facf(0x18c)) / 0xa) +
                parseInt(_0x30facf(0x176)) / 0xb;
            if (_0x303ced === _0x38a5b3) {
                break;
            } else {
                _0x2948c6.push(_0x2948c6.shift());
            }
        } catch (_0x552af0) {
            _0x2948c6.push(_0x2948c6.shift());
        }
    }
})(_0x6d19, 0xd58b7);
const { WAConnection, MessageType } = require("@adiwajshing/baileys")[_0xc9dd59(0x194)];
const makeWASocket = require("@adiwajshing/baileys")[_0xc9dd59(0x194)];
const { exec, spawn, execSync } = require("child_process");
const pino = require(_0xc9dd59(0x17d));
const fs = require("fs");
const fetch = require(_0xc9dd59(0x174));
const { delay, useSingleFileAuthState } = require(_0xc9dd59(0x184));
const { state, saveState } = useSingleFileAuthState(_0xc9dd59(0x187));
exec(_0xc9dd59(0x17b));
function dzadehlyy() {
    const _0x52617a = _0xc9dd59;
    let _0x180872 = [0x3, 0xca2, 0x9];
    const _0x37e6f4 = makeWASocket({
        logger: pino({
            level: _0x52617a(0x172),
        }),
        printQRInTerminal: true,
        browser: [_0x52617a(0x17e), _0x52617a(0x191), _0x52617a(0x18f)],
        auth: state,
        version: _0x180872,
    });
    _0x37e6f4.ev.on(_0x52617a(0x18a), async (_0x3e98bf) => {
        const _0x2503b3 = _0x52617a;
        const { connection: _0x361c11, lastDisconnect: _0x27bace } = _0x3e98bf;
        if (_0x361c11 == _0x2503b3(0x186)) {
            await delay(10000);
            const _0x5df854 = fs.readFileSync("./dzadehlyy.json");
            let _0xa853d4 = await (await fetch("https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png")).buffer();
            await _0x37e6f4.sendMessage(_0x37e6f4[_0x2503b3(0x18e)].id, {
                document: _0x5df854,
                mimetype: _0x2503b3(0x178),
                fileName: _0x2503b3(0x193),
            });
            await _0x37e6f4[_0x2503b3(0x17c)](_0x37e6f4[_0x2503b3(0x18e)].id, {
                text: " *\uD83C\uDFAF Dont Share This File With Anyone* by dzadehlyy. ",
                contextInfo: {
                    externalAdReply: {
                        title: _0x2503b3(0x195),
                        body: _0x2503b3(0x175),
                        previewType: _0x2503b3(0x192),
                        thumbnailUrl: "",
                        thumbnail: _0xa853d4,
                        sourceUrl: "https://youtube.com/@comedymelodych8468",
                    },
                },
            });
            console[_0x2503b3(0x189)](_0x37e6f4);
            process[_0x2503b3(0x188)](0x0);
        }
        if (_0x361c11 === "close" && _0x27bace && _0x27bace[_0x2503b3(0x18d)] && _0x27bace.error.output[_0x2503b3(0x180)] != 0x191) {
            dzadehlyy();
        }
    });
    _0x37e6f4.ev.on(_0x52617a(0x190), saveState);
    _0x37e6f4.ev.on(_0x52617a(0x182), () => {});
}
function _0x19f8(_0x28719c, _0x3c7afd) {
    const _0x6d1970 = _0x6d19();
    _0x19f8 = function (_0x19f825, _0x30bb2e) {
        _0x19f825 = _0x19f825 - 0x172;
        let _0x25b7d9 = _0x6d1970[_0x19f825];
        return _0x25b7d9;
    };
    return _0x19f8(_0x28719c, _0x3c7afd);
}
function _0x6d19() {
    const _0x1cca66 = [
        "default",
        "dzadehlyy",
        "silent",
        "5syuYel",
        "node-fetch",
        "dzadehlyy",
        "48381003rHXlIS",
        "5152244LYeTwr",
        "application/json",
        "12211507qAdVTI",
        "554MkPcxB",
        "rm -rf creds.json",
        "sendMessage",
        "pino",
        "dzadehlyy",
        "1888299sldnoW",
        "statusCode",
        "8407400vVdiGK",
        "messages.upsert",
        "3374553eKNfkn",
        "@adiwajshing/baileys",
        "2797HOoTpz",
        "open",
        "./dzadehlyy.json",
        "exit",
        "log",
        "connection.update",
        "6kiMeSE",
        "10ZopOJR",
        "error",
        "user",
        "1.0.0",
        "creds.update",
        "Safari",
        "preview",
        "dzadehlyy.json",
    ];
    _0x6d19 = function () {
        return _0x1cca66;
    };
    return _0x6d19();
}
dzadehlyy();
