function _0x5b5e(_0x3aceba, _0x17323f) {
    const _0xa1361a = _0xa136();
    return _0x5b5e = function (_0x5b5e15, _0x43376d) {
      _0x5b5e15 = _0x5b5e15 - 0x10e;
      let _0x518807 = _0xa1361a[_0x5b5e15];
      return _0x518807;
    }, _0x5b5e(_0x3aceba, _0x17323f);
  }
  (function (_0x26b500, _0x399e8a) {
    const _0x36e836 = _0x5b5e,
      _0x47dd13 = _0x26b500();
    while (!![]) {
      try {
        const _0xa7b1e7 = -parseInt(_0x36e836(0x11f)) / 0x1 * (parseInt(_0x36e836(0x11e)) / 0x2) + parseInt(_0x36e836(0x127)) / 0x3 * (-parseInt(_0x36e836(0x111)) / 0x4) + -parseInt(_0x36e836(0x128)) / 0x5 * (parseInt(_0x36e836(0x129)) / 0x6) + parseInt(_0x36e836(0x124)) / 0x7 * (parseInt(_0x36e836(0x12a)) / 0x8) + -parseInt(_0x36e836(0x121)) / 0x9 * (-parseInt(_0x36e836(0x11b)) / 0xa) + -parseInt(_0x36e836(0x10e)) / 0xb + -parseInt(_0x36e836(0x10f)) / 0xc * (-parseInt(_0x36e836(0x120)) / 0xd);
        if (_0xa7b1e7 === _0x399e8a) break;else _0x47dd13['push'](_0x47dd13['shift']());
      } catch (_0x263904) {
        _0x47dd13['push'](_0x47dd13['shift']());
      }
    }
  })(_0xa136, 0x74032);
  import _0x5d912d from 'express';
  import { createServer } from 'http';
  import _0x54cba2 from 'path';
  import { Socket } from 'socket.io';
  import { toBuffer } from 'qrcode';
  import _0x45b12f from 'node-fetch';
  function connect(_0x10e8fc, _0x47fe8c) {
    const _0x4f0322 = _0x5b5e;
    let _0x39a7f9 = global[_0x4f0322(0x114)] = _0x5d912d();
    console['log'](_0x39a7f9);
    let _0x2ca620 = global[_0x4f0322(0x113)] = createServer(_0x39a7f9),
      _0x12484d = 'invalid';
    _0x10e8fc['ev']['on'](_0x4f0322(0x11d), function _0x218a7b({
      qr: _0x399f21
    }) {
      if (_0x399f21) _0x12484d = _0x399f21;
    }), _0x39a7f9[_0x4f0322(0x116)](async (_0x5eddde, _0x4af55a) => {
      const _0x244bbf = _0x4f0322;
      _0x4af55a['setHeader'](_0x244bbf(0x125), _0x244bbf(0x126)), _0x4af55a[_0x244bbf(0x115)](await toBuffer(_0x12484d));
    }), _0x2ca620[_0x4f0322(0x12b)](_0x47fe8c, () => {
      const _0x297d66 = _0x4f0322;
      console[_0x297d66(0x117)](_0x297d66(0x123), _0x47fe8c);
      if (opts[_0x297d66(0x122)]) keepAlive();
    });
  }
  function pipeEmit(_0x5e0231, _0x52fb69, _0x26f86c = '') {
    const _0x2116f5 = _0x5b5e;
    let _0x2786e3 = _0x5e0231[_0x2116f5(0x11c)];
    return _0x5e0231[_0x2116f5(0x11c)] = function (_0x216037, ..._0xbbd6e5) {
      const _0x557d65 = _0x2116f5;
      _0x2786e3[_0x557d65(0x11c)](_0x216037, ..._0xbbd6e5), _0x52fb69[_0x557d65(0x11c)](_0x26f86c + _0x216037, ..._0xbbd6e5);
    }, {
      'unpipeEmit'() {
        const _0x1fff30 = _0x2116f5;
        _0x5e0231[_0x1fff30(0x11c)] = _0x2786e3;
      }
    };
  }
  function keepAlive() {
    const _0x596357 = _0x5b5e,
      _0x5c267e = _0x596357(0x12c) + process[_0x596357(0x112)][_0x596357(0x119)] + '.' + process[_0x596357(0x112)][_0x596357(0x12d)] + _0x596357(0x11a);
    if (/(\/\/|\.)undefined\./[_0x596357(0x118)](_0x5c267e)) return;
    setInterval(() => {
      const _0x397d39 = _0x596357;
      _0x45b12f(_0x5c267e)['catch'](console[_0x397d39(0x110)]);
    }, 0x5 * 0x3e8 * 0x3c);
  }
  function _0xa136() {
    const _0x221dfe = ['listen', 'https://', 'REPL_OWNER', '5269913WdLzXC', '42204unUWad', 'error', '368mQHoud', 'env', 'server', 'app', 'end', 'use', 'log', 'test', 'REPL_SLUG', '.repl.co', '2714300azkScS', 'emit', 'connection.update', '52FqWbaP', '24757QFTJgD', '3692bnbRdv', '18ohbbiq', 'keepalive', 'App\x20listened\x20on\x20port', '105bPNJOs', 'content-type', 'image/png', '804vnHdoT', '65905rUyqju', '36jpOOFi', '85336aOpNOx'];
    _0xa136 = function () {
      return _0x221dfe;
    };
    return _0xa136();
  }
  export default connect;