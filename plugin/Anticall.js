(function(_0x9ceefd,_0x4f826d){const _0x3f4df0=_0x3e74,_0x2205fe=_0x9ceefd();while(!![]){try{const _0x2f6792=-parseInt(_0x3f4df0(0x8d))/0x1*(-parseInt(_0x3f4df0(0x95))/0x2)+parseInt(_0x3f4df0(0x99))/0x3*(parseInt(_0x3f4df0(0x9a))/0x4)+parseInt(_0x3f4df0(0x82))/0x5*(parseInt(_0x3f4df0(0x83))/0x6)+-parseInt(_0x3f4df0(0x8c))/0x7*(-parseInt(_0x3f4df0(0x86))/0x8)+-parseInt(_0x3f4df0(0x9c))/0x9*(parseInt(_0x3f4df0(0x9b))/0xa)+-parseInt(_0x3f4df0(0x91))/0xb*(parseInt(_0x3f4df0(0x9f))/0xc)+-parseInt(_0x3f4df0(0x96))/0xd*(-parseInt(_0x3f4df0(0x9e))/0xe);if(_0x2f6792===_0x4f826d)break;else _0x2205fe['push'](_0x2205fe['shift']());}catch(_0x6cce1f){_0x2205fe['push'](_0x2205fe['shift']());}}}(_0x6765,0x63a6a));function _0x3e74(_0x5d65a0,_0x120b26){const _0x6765d1=_0x6765();return _0x3e74=function(_0x3e7482,_0x3e361d){_0x3e7482=_0x3e7482-0x80;let _0x4f51ae=_0x6765d1[_0x3e7482];return _0x4f51ae;},_0x3e74(_0x5d65a0,_0x120b26);}function _0x6765(){const _0x586850=['Usage:\x0a-\x20`anticall\x20on`:\x20Enable\x20Anti-Call\x0a-\x20`anticall\x20off`:\x20Disable\x20Anti-Call','sendMessage','40966LMqpEQ','65MIONhw','user','Anti-Call\x20has\x20been\x20disabled.','15UnddpE','173772MwqanO','50ZdWxDq','180891elyhzf','Error\x20processing\x20your\x20request.','828758dkxMte','229104npyBoy','anticall','toLowerCase','OWNER_NUMBER','5muMzVk','77412VlYUQX','length','from','912416KcKpCO','*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*','Error\x20processing\x20your\x20request:','reply','error','body','7TPDBCv','29vzuvvX','match','includes','decodeJid','418oundOx','REJECT_CALL'];_0x6765=function(){return _0x586850;};return _0x6765();}import _0xbe6fda from'../../config.cjs';const anticallcommand=async(_0x31a52c,_0x25f464)=>{const _0x521b66=_0x3e74,_0x357ad8=await _0x25f464[_0x521b66(0x90)](_0x25f464[_0x521b66(0x97)]['id']),_0x2bac1f=[_0x357ad8,_0xbe6fda[_0x521b66(0x81)]+'@s.whatsapp.net'][_0x521b66(0x8f)](_0x31a52c['sender']),_0x18f912=_0x31a52c[_0x521b66(0x8b)][_0x521b66(0x8e)](/^[\\/!#.]/),_0x5e6795=_0x18f912?_0x18f912[0x0]:'/',_0x33046a=_0x31a52c[_0x521b66(0x8b)]['startsWith'](_0x5e6795)?_0x31a52c[_0x521b66(0x8b)]['slice'](_0x5e6795['length'])['split']('\x20')[0x0]['toLowerCase']():'',_0x1b7b92=_0x31a52c['body']['slice'](_0x5e6795[_0x521b66(0x84)]+_0x33046a[_0x521b66(0x84)])['trim']()[_0x521b66(0x80)]();if(_0x33046a===_0x521b66(0xa0)){if(!_0x2bac1f)return _0x31a52c[_0x521b66(0x89)](_0x521b66(0x87));let _0xb12cb2;if(_0x1b7b92==='on')_0xbe6fda[_0x521b66(0x92)]=!![],_0xb12cb2='Anti-Call\x20has\x20been\x20enabled.';else _0x1b7b92==='off'?(_0xbe6fda[_0x521b66(0x92)]=![],_0xb12cb2=_0x521b66(0x98)):_0xb12cb2=_0x521b66(0x93);try{await _0x25f464[_0x521b66(0x94)](_0x31a52c[_0x521b66(0x85)],{'text':_0xb12cb2},{'quoted':_0x31a52c});}catch(_0x1b00f){console[_0x521b66(0x8a)](_0x521b66(0x88),_0x1b00f),await _0x25f464['sendMessage'](_0x31a52c[_0x521b66(0x85)],{'text':_0x521b66(0x9d)},{'quoted':_0x31a52c});}}};export default anticallcommand;