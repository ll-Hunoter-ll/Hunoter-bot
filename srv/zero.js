
//FOLLOW SOSIAL MEDIA
//INSTAGRAM @h0ss3n
//YOUTUBE Hunoter
//TIKTOK @ctfs
//owner Hunoter

var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var ggs = require('google-it')
var googleImage = require('g-i-s')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var Exif = require('../mess/exif')
var exif = new Exif()
var request = require('request')
var translate = require('@vitalets/google-translate-api')
var fs = require('fs')
var hx = require("hxz-api")
var cheerio = require('cheerio')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var yts = require('yt-search')
var Math_js = require('mathjs')
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("../mess/limit")
var { jadibot, stopjadibot, listjadibot } = require("../mess/jadibot")
var { upload, formatDate } = require('../mess/ytdl')
faketeks = '© Erstellt von ɦᴜπᴏᴛᴇʀ. 王 𖡝Şɪх Ƥατӊʂ σƒ Ƥαɪɳ𖡝⁩'
blocked = []
hit_today = []
multi =false
nopref = false
allpref = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))
var prem = JSON.parse(fs.readFileSync('./storage/premium.json'))
var limit = JSON.parse(fs.readFileSync('./storage/limit.json'))
var balance = JSON.parse(fs.readFileSync('./storage/balance.json'))
var hit = JSON.parse(fs.readFileSync('./storage/totalcmd.json'))
var _scommand = JSON.parse(fs.readFileSync("./storage/scommand.json"))
var event = JSON.parse(fs.readFileSync('./storage/event.json'))
var ban = JSON.parse(fs.readFileSync('./storage/banned.json'))
var nsfw = JSON.parse(fs.readFileSync('./storage/nsfw.json'))
var _truth = JSON.parse(fs.readFileSync('./storage/truth.json'))
var tde = fs.readFileSync('./img/truth.jpg')
var _dare = JSON.parse(fs.readFileSync('./storage/dare.json'))
var audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
var videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
var setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
var _leveling = JSON.parse(fs.readFileSync('./storage/leveling.json'))
var _level = JSON.parse(fs.readFileSync('./storage/level.json'))
var imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner
limitCount = setting.limitCount
gcounti = setting.gcounti

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Shizukaa
var apikey7 = config.Nurutomo
var apikey8 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = '•Deine Info•'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '_Deine info_'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '```Deine info```'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '*Deine Info*'
}
if(time2 < "11:00:00"){
var ucapanWaktu = '°Deine Info°'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '™Deine info™'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Tag, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Uhr, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Sekunde") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var totalchat = await zero.chats.all()
var latensyi = speed() - timestampi
hit_today.push(command);
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "4915678388861@s.whatsapp.net"
var ownerNumber = [`${NomorOwner}@s.whatsapp.net`,"4915678388861@s.whatsapp.net"]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isPremium = prem.includes(sender) || isOwner
var isWelcome = isGroup ? welcome.includes(from) : false
var isNsfw = isGroup ? nsfw.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isLevelingOn = isGroup ? _leveling.includes(from) : false
var isEventon = isGroup ? event.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Bitte warten... In Bearbeitung',
success: 'fertig... vergessen sie nicht @h0ss3n auf insta zu folgen',
wrongFormat: 'Falsches Format, bitte überprüfen Sie es erneut in der Menüliste',
error: {
stick: 'Falscher Aufkleber. Bitte versuchen Sie es erneut',
Iv: 'Linkfehler Bitte ändern Sie einen anderen'
},
only: {
group: 'befehl in der Gruppe',
bodmin: 'Machen Sie zuerst Den Bot Admin',
prem: 'Exklusiv für Premium-Mitglieder...',
admin: 'Nur Die Admins können dieses Befehl benutzen!',
event: 'Die Veranstaltung ist in dieser Gruppe noch nicht aktiv!!',
block: 'du bist kein Premium user oder owner!',
owner: 'd!'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//


var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Fehler beim Herunterladen und Senden von Medien_')
console.log(e)
})
})
})
})
}	
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, pesan1, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🍏 : 🍒 : 🍐',
        '🍎 : 🍌 : 🫐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        
        var premi = 'Kein Premium User'
			if (isPremium) {
				premi = 'Premium User'
			} 
			if (isOwner) {
				premi = 'Owner'
			}
			
			const cmdadd = () => {
	    hit[0].totalcmd += 1
    	fs.writeFileSync('./storage/totalcmd.json', JSON.stringify(hit))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./storage/totalcmd.json'))[0].totalcmd
        
        function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./storage/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe Hunoter`, 
orderTitle: `Subscribe Hunoter`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        var getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        var getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        var addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./storage/level.json', JSON.stringify(_level))
            }
         }
     
var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("https://")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK ERKANNT Tut mir leid, dass du aus der Gruppe geworfen wurdest!! ");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Als gelesen markieren\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Ich habe eine Virus-TEXT erhalten!', 'yellow'))
zero.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           
case 'botinfo':
timestamp = speed();
latensi = speed() - timestamp
teks18 =
`┏━➤ *INFO BOT* 
*┃┃* Creator-Bot : Hunoter
*┃┃* Name des OWNERs : ${NameOwner}
*┃┃* Name des Bots : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Benutzer insgesamt : ${pendaftar.length}
*┃┃* Laufzeit : ${runtime(process.uptime())}
*┃┃* Geschwindigkeit : ${latensi.toFixed(4)} second
*┃┃* Sprache : Deutsch
*┃┗━━━━━━━━*
*┃◗ Thanks To Hunoter*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `script`, buttonText: { displayText: '📌 SCRIPT' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks18, faketeks, fakeimg, but)
break
case 'myinfo': case 'help':
addBalance(sender, randomNomor(20), balance)
menu =` Hallo ${pushname} ${ucapanWaktu}

➪ Benutzerstatus : ${premi}
➪ Benutzerlimit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
➪ Benutzergeld : $${(getBalance(sender, balance))}
➪ Totaler Chat : ${totalchat.length} Chat
➪ Benutzer insgesamt : ${pendaftar.length} User
➪ Schlagen Sie heute zu : ${hit_today.length} Hit
➪ Gesamttreffer : ${totalhit} Hit`
but = [
{ buttonId: `menu`, buttonText: { displayText: 'MENU' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]

sendButLocation(from, menu, faketeks, fakeimg, but)
break
case 'menu':
menu =`wenn du ein Problem hast melde es unter #support (dein Problem)
╭─❒「 Owner Menu 」❒
├  ${prefix}ping
├  ${prefix}runtime
├  ${prefix}bc
├  ${prefix}support
├  ${prefix}runtime
├  ${prefix}leave
├  ${prefix}block
├  ${prefix}unblock
├  ${prefix}listpremium
├  ${prefix}addpremium
├  ${prefix}delpremium
├  ${prefix}listcmd
├  ${prefix}addcmd
├  ${prefix}delcmd 
└❏                        

╭─❒「 Tools Menu 」❒
├  ${prefix}join (dein link)
├  ${prefix}myinfo
├  ${prefix}botinfo
├  ${prefix}stopjadibot
├  ${prefix}listbot
├  ${prefix}buylimit
└❏                      

╭─❒「 großartig Menu 」❒
├  ${prefix}ahegao
├  ${prefix}ass
├  ${prefix}bdsm
├  ${prefix}cuckold
├  ${prefix}cum
├  ${prefix}ero
├  ${prefix}femdom
├  ${prefix}foot
├  ${prefix}hentai
├  ${prefix}jahy
├  ${prefix}manga
├  ${prefix}nsfw 1-enable 0-disable
├  ${prefix}orgy
├  ${prefix}panties
├  ${prefix}sfwneko
├  ${prefix}xnxxsearch
├  ${prefix}xnxxdl 
└❏                        

╭─❒「 Search Menu 」❒
├  ${prefix}liriklagu
├  ${prefix}wiki
├  ${prefix}pinterest
├  ${prefix}linkwa
├  ${prefix}playstore
├  ${prefix}ssweb
├  ${prefix}gimage 
└❏                       

╭─❒「 Download Menu 」❒
├  ${prefix}ytmp4
├  ${prefix}ytmp3
├  ${prefix}play
├  ${prefix}tiktoknowm
├  ${prefix}tiktokwm
├  ${prefix}mediafire
├  ${prefix}igfoto
├  ${prefix}igvideo 
└❏                      

╭─❒「 Media Menu 」❒
├  ${prefix}sticker
├  ${prefix}toimage
├  ${prefix}tourl
├  ${prefix}attp
├  ${prefix}tomp3
├  ${prefix}stickerwm
├  ${prefix}dadu
├  ${prefix}semoji
├  ${prefix}tomp4
├  ${prefix}robot
├  ${prefix}balik
├  ${prefix}bass
├  ${prefix}gemuk
├  ${prefix}detikvn
├  ${prefix}detikvideo 
└❏                      

╭─❒「 Upsw Menu 」❒
├  ${prefix}upswgift
├  ${prefix}upswteks
├  ${prefix}upswvideo
├  ${prefix}upswaudio
├  ${prefix}upswvoice
├  ${prefix}upswlokasi
├  ${prefix}upswimage
├  ${prefix}upswsticker 
└❏                      

╭─❒「 Fun Menu 」❒
├  ${prefix}slot
├  ${prefix}wahrheit
├  ${prefix}pflicht
├  ${prefix}verlobt
├  ${prefix}hass
├  ${prefix}gay
├  ${prefix}pedo
├  ${prefix}schlecht
├  ${prefix}unkraut
├  ${prefix}schön
├  ${prefix}gutaussieht
├  ${prefix}darkjokes
└❏                     

╭─❒「 Group Menu 」❒
├  ${prefix}antilink
├  ${prefix}antivirtex
├  ${prefix}welcome
├  ${prefix}group
├  ${prefix}linkgroup
├  ${prefix}hidetag
├  ${prefix}tagall
├  ${prefix}setdesc
├  ${prefix}setname
├  ${prefix}setpp
├  ${prefix}kick
├  ${prefix}add
├  ${prefix}demote
├  ${prefix}promote
├  ${prefix}games 
└❏                     

╭─❒「 Storage Menu 」❒
├  ${prefix}listvn
├  ${prefix}listvideo
├  ${prefix}liststicker
├  ${prefix}listimg
├  ${prefix}addvn
├  ${prefix}addvideo
├  ${prefix}addsticker
├  ${prefix}addimage
├  ${prefix}getvn
├  ${prefix}getvideo
├  ${prefix}getsticker
├  ${prefix}getimage 
└❏                       

╭─❒「 Image Maker Menu 」❒
├  ${prefix}ttp
├  ${prefix}blackpink
├  ${prefix}neon
├  ${prefix}matrix
├  ${prefix}joker
├  ${prefix}devil
├  ${prefix}transformer
├  ${prefix}thunder
├  ${prefix}harry
├ ${prefix}gradient 
└❏                    `
but = [
{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButLocation(from, menu, faketeks, fakeimg, but)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('ist schon aktiviert!!...!!!') 
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('Welcome erfolgreich aktiviert')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('welcome wurde deaktiviert!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('Welcome erfolgreich ausgeschaltet')
} else if (!q){
anu =`BITTE WÄHLE EINES`
punten = [{buttonId: 'welcome on', buttonText: {displayText: '📌 ON'}, type: 1},{buttonId: 'welcome off', buttonText: {displayText: '📌 OFF️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: '',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("ist schon aktiviert!!...!!!"); 
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
); 
reply("Antilink erfolgreich aktiviert");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("Anti-Link erfolgreich ausgeschaltet");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Bitte wähle eins`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `📌 ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `📌 OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("ist schon aktiviert!!...!!!"); 
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);  
reply("AntiVirtex Erfolgreich aktiviert");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("Anti-Virtex Erfolgreich Ausgeschaltet");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Bitte wähle eins`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `📌 ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `📌 OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: '☕ OFFEN' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: '✉️ GESCHLOSSEN' }, type: 1 }
]
sendButMessage(from, "Bitte wählen Sie zum Öffnen/Schließen der Gruppe", Faketext, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin) 
reply(`\`\`\`erfolgreiche Eröffnungsgruppe\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'ahegao': case 'ass': case 'bdsm': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'hentai': case 'jahy': case 'manga': case 'nsfwneko': case 'orgy': case 'panties': case 'sfwneko': 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          sange = await fetchJson(`https://apikey6-api.xyz/${command}?apikey${apikey6}`)
          result = await getBuffer(sange.result)
          gbutsan = [{buttonId:`${command}`,buttonText:{displayText:'MACH WEITER➡️'},type:1}]
mhan = await zero.prepareMessage(from, result, image, {thumbnail: result})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Please Subscribe Hunoter`,
footerText: '©Created Hunoter',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
limitAdd(sender, limit)
break
case 'play':
         
          if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
          reply('Bentar Om lagi Nyari')
          let yut = await 
         (youtube.videos[0].url)             
          .then(async(res) => {
          var { thumb, title, filesizeF, filesize } = res
          var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
          ya = await getBuffer(thumb)
          py =await zero.prepareMessage(from, ya, image)
          sendButloc(from,monospace(capti),'',`*select the type you want to download*`,[{buttonId: `!ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
          {buttonId: `!ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}],null,null,ya)
          }).         
          break
case 'ytmp3':                  
         
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp3 link*`)
          get_dl = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/audio?url=${v}`)
          mp3 = await getBuffer(get_dl.result.download_audio)
          hm = `*Judul* : ${get_dl.result.title}\n*Size* : ${get_dl.result.size}\n*Resolution* : ${get_dl.result.resolution}`
          await zero.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', filename: `${get_dl.result.title}.mp3`, quoted: ftrol}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })      
          break
    case 'ytmp4':

          if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp4 link*`)
          get_hasil = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${v}`)
          mp4 = await getBuffer(get_hasil.result.download_video)
          hm = `*Judul* : ${get_hasil.result.title}\n*Size* : ${get_hasil.result.size}\n*Resolution* : ${get_hasil.result.resolution}`
          await zero.sendMessage(from, mp4, video, { mimetype: 'video/mp4', filename: `${get_hasil.result.title}.mp3`, quoted: ftrol,caption:hm}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })
          break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`Gruppe erfolgreich geschlossen\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Markieren Sie jemandenl, das Sie zum Administrator machen möchten!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks10 = 'Befehl erhalten Sie werden Admin :\n' 
for (let _ of mentioned) {
teks10 += `@${_.split('@')[0]}\n`
}
mentions(teks10, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`Befehl erhalten, @${mentioned[0].split('@')[0]} sie werden Admin In der Gruppe  *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Markieren Sie jemandenl, das Sie nicht als Administrator Haben möchten!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks11 = 'Befehl erhalten Sie sind kein Administrator mehr :\n' 
for (let _ of mentioned) {
teks11 += `@${_.split('@')[0]}\n`
}
mentions(teks11, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else { 
mentions(`Bestelleingang niedriger : @${mentioned[0].split('@')[0]} Mitglied Werden`, mentioned, true) 
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Wem willst du hinzufügen??')
if (args[0].startsWith('08')) return reply('Verwenden Sie den Ländervorwahl')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Ziel konnte nicht hinzugefügt werden, möglicherweise weil privat')
}
break
case 'ban':
				bnnd = body.slice(4)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./storage/banned.json', JSON.stringify(ban))
				reply(`successfully banned number : wa.me/${bnnd} `)
				break
		case 'unban':
				bnnd = body.slice(6)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./storage/banned.json', JSON.stringify(ban))
				reply(`wa.me/${bnnd} kann den bot wieder benutzen!!!`)
				break
                case 'ban':
				if (!isOwner) return reply(mess.only.owner())
				if (!isPremium) return reply(mess.only.prem())
				if (isLimit(sender, isPremium, limitCount, limit)) reply ('du bist kein Owner oder ein Premium User')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./storage/banned.json', JSON.stringify(ban))
				reply(`kann den bot nicht mehr benutzen : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				if (!isPremium) return reply(mess.only.prem())
				if (isLimit(sender, isPremium, limitCount, limit)) return reply('du bist kein Owner oder ein Premium User') 
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./storage/banned.json', JSON.stringify(ban))
				reply(` wa.me/${bnnd} kann den bot wieder benutzen!`)
				break
                case 'banlist':
				zero.updatePresence(from, Presence.composing) 
				
                 if (!isLimit) return reply( ind.noregis())    
				teks = 'Dies ist eine Liste von gebannte Nummern :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				zero.sendMessage(from, teks.trim(), extendedText, {quoted: ftrol, contextInfo: {"mentionedJid": ban}})
				break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
zer.message.extendedTextMessage === undefined ||
zer.message.extendedTextMessage === null
)
return reply("Markieren Sie das Ziel, das Sie kicken möchten !");
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
zero.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = zer.message.extendedTextMessage.contextInfo.participant;
zero.groupRemove(from, [anu]);
reply(mess.success);
} else {
zero.groupRemove(from, mentioned);
reply(mess.success);
}
break
case 'tagall':
if (!isGroup) return reply("Nur in Gruppen");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`hat den Gruppennamen erfolgreich geändert in\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\Die Gruppenbeschreibung wurde erfolgreich geändert In\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break

case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'leave':
					
					if (!isGroup) return reply(mess.only.group())
					if (!isOwner && !isPremium) return reply(mess.only.owner())
					
					setTimeout( () => {
					zero.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					zero.updatePresence(from, Presence.composing) 
					zero.sendMessage(from, 'BITTE\n\Mit Erlaubnis des Besitzers habe ich die Gruppe verlassen, bye noob👋🗿', text) // ur cods
					}, 0)
					break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait) 
reply(`\`\`\`Gruppenbild erfolgreich geändert\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Nur für @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Der Text?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: '✉️ MENU'}, type: 1},{buttonId: `botinfo`, buttonText: {displayText: '📌 SPoP BOT'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*BITTE DRÜCKEN SIE DIE TASTE FÜR WEITERE INFORMATIONEN*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
zero.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftrol })
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
zero.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftrol })
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Senden Sie ein Bild mit einer Bildunterschrift ${prefix}sticker\Dauer des Videostickers 1-9 Sekunden`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Fehler beim Konvertieren von Sticker in Bild ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Vergessen Sie nicht, @h0ss3n zu folgen`)
fs.unlinkSync(ran)
})
break
case 'stickerwm':
case 'swm':
if (args.length == 0) return reply(`Wo ist der Text?\nContoh: ${prefix + command} Zero | Gantenk`)
if (isMedia && !zer.message.videoMessage || isQuotedImage) {
ppp = `${args.join(' ')}`
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
wmsti = body.slice(11)
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = wmsti.split('|')[0]
const author1 = wmsti.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'Hunoter',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'instagram1', buttonText: {displayText: '📌 INSTAGRAM1'}, type: 1},
{buttonId: 'instagram2', buttonText: {displayText: '📌 INSTAGRAM2'}, type: 1},
{buttonId: 'owner2', buttonText: {displayText: '📌 NUMMER OWNER 2'}, type: 1}
]
 buttons = {
contentText: 'Hier ist meine Besitzernummer, was möchten Sie wissen?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'support':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Entschuldigung, der Text ist zu lang, maximal 300 Texte', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\nBotschaft : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`4915678388861@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Das Problem wurde dem BOT-Eigentümer gemeldet, bitte warten Sie den Reparaturvorgang ab')
break
case 'join':
let pesan1 = body.slice(8)
 if (args.length < 1) return reply(`Wo ist der link?\nBeispiel: ${prefix + command} https://chat.whatsapp.com/DlmfgSkiSQwBSBY5Cl4Pcr`)
var nomor = zer.participant
let teks = `[𝗥𝗘𝗣𝗢𝗥𝗧]\nBotschaft : ${pesan1}`
var options = {
text: teks,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`4915678388861@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('der Link wurde an uns gesendet, warte bis der bot in deiner gruppe rein kommt')
break
case 'instagram1':
teks5 =
`Hier ist der Instagram Account von meinem.besitzer https://instagram.com/h0ss3n`
zero.sendMessage(from, teks5, text, {quoted: ftrol})
break
case 'instagram2':
teks4 =
`Hier ist der 2 Instagram Account von meinem besitzer https://instagram.com/legend.hunoter`
zero.sendMessage(from, teks4, text, {quoted: ftrol})
break
case 'owner2':
teks3 =
`hier ist die 2te nummer von meinem Besitzer https://wa.me/+4797575757`
zero.sendMessage(from, teks3, text, {quoted: ftrol})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break

case 'script':
case 'sc':
teks =
`[ INFO SCRIPT ]
• Creator Bot : Hunoter 
• Instagram Creator : @h0ss3n

[ LINK SCRIPT ]
• haha hi follow me on insta https://instagram.com/h0ss3n

[ LINK GROUP ]
• https://chat.whatsapp.com/DlmfgSkiSQwBSBY5Cl4Pcr`   

        sendButLocation(from, teks, faketeks, fakeimg, but, { thumbnail: Buffer.alloc(0) })       
break

case 'listprem': case 'listpremium':
    case 'premlist':
          if (!isPremium && !isOwner) return reply(mess.only.prem)
		  teks15 = '*List Premium:*\n\n'
		  for (let manikgans of prem) {
		  teks15 += `- ${manikgans}\n`
		  }
	      teks15 += `\n*Total : ${prem.length}*`
		  zero.sendMessage(from, teks15.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": prem } })
		  break
		case 'addprem':  case 'addpremium':
		  if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)    
		  adprem = `${args[0].replace('@','')}@s.whatsapp.net`
		  prem.push(adprem)
		  fs.writeFileSync('./storage/premium.json', JSON.stringify(prem))
	 	  reply(`PREMIUM-BENUTZER ERFOLGREICH HINZUGEFÜGT`)
		  break
		case 'delprem':  case 'delpremium':
		  if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)    
		  delp = body.slice(10)
		  prem.splice(`${delp}@s.whatsapp.net`, 1)
		  fs.writeFileSync('./storage/premium.json', JSON.stringify(prem))
		  reply(`Erfolgreich gelöscht wa.me/${delp} Aus der Premium-Liste`)
		  break
		case "listcmd":
          teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
          cemde = [];
          for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
          }
          mentions(teksnyee, cemde, true);
          break
          case "addcmd":
    case "setcmd":
          if (isQuotedSticker) {
          if (!q)
          return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya = zer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          addCmd(kodenya, q);
          reply("Done!");
          } else {
          reply("das sticker etikett");
          }
          break;
          case "delcmd":
          if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
          var kodenya = zer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          _scommand.splice(getCommandPosition(kodenya), 1);
          fs.writeFileSync("./storage/scommand.json", JSON.stringify(_scommand));
          reply("Done!");
          break;
          case "jadibot":
          if (!isPremium) return reply(mess.only.prem)
          if (!isOwner && !zer.key.fromMe) return
          if (zer.key.fromMe) return reply("Kann kein Bot in einem Bot sein");
          jadibot(reply, zero, from);
          break;
          case "stopjadibot":
          if (zer.key.fromMe)
          return reply("kann nicht aufhören, ein Bot zu sein, außer der Besitzer");
          stopjadibot(reply);
          break;
          case "listbot":
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;
          case 'buylimit':{
          if (args.length < 1) return reply(`Bestellungen senden *${prefix}buylimit* begrenzen Sie den Betrag, den Sie kaufen möchten\n\nPreis 1 limit = $150 Balance`)      
          payout = body.slice(10)
          let ane = 150 * payout
          if (getBalance(sender, balance) < ane) return reply(`Ihr Guthaben reicht für diesen Kauf nicht aus`)
          kurangBalance(sender, ane, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
          }
          break
case 'nsfw':
					if (!isGroup) return reply(mess.only.group())
					if (!isGroupAdmins) return reply(mess.only.admin())
					if (args.length < 1) return reply('enable for 1, disable for 0')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Die NSFW-Funktion war zuvor aktiv*')
						nsfw.push(from)
						fs.writeFileSync('./storage/nsfw.json', JSON.stringify(nsfw))
						reply('nsfw-Modus in dieser Gruppe erfolgreich aktiviert️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./storage/nsfw.json', JSON.stringify(nsfw))
						reply('nsfw-Modus in dieser Gruppe erfolgreich deaktiviert ✔️')
					} else {
						reply(ind.satukos())
					}
					break
case 'xnxxsearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxsearch?query=${q}&apikey=${apikey5}`)
          result = sange.result.result
         for (let i of result) {
         	hasil =`Title : ${i.title}
         Info : ${i.info}
         Link : ${i.link}`
         }
         reply(hasil)
         limitAdd(sender, limit)
         break
         case 'xnxxdl':
         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
         if (args.length < 1) return reply(`Wo ist die URL?\nBeispiel: ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${q}&apikey=${apikey5}`)
          result = sange.result.result
          hasil =`Title : ${result.title}
          Duration : ${result.duration}
          Video Type : ${result.videoType}
          Video Width : ${result.videoWidth}
          Video Height : ${result.videoHeight}
          Info : ${result.info}`
          gambar = await getBuffer(result.image)
          buttons = [{buttonId:`low ${q}`,buttonText:{displayText:'LOW'},type:1},{buttonId:`high ${q}`,buttonText:{displayText:'HIGH'},type:1}]
imageMessage = (await zero.prepareMessageMedia({url:result.image},'imageMessage')).imageMessage
buttonsMessage = {contentText: hasil,footerText:'Bitte wählen Sie unten einen Dateityp aus',imageMessage,buttons,headerType:4}
prot = await zero.prepareMessageFromContent(from,{buttonsMessage},{})
zero.relayWAMessage(prot)
          limitAdd(sender, limit)
          break
case  'blowjob':
      
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Die NSFW-Funktion ist in der Gruppe noch nicht aktiv Ini\nArt: ${prefix}nsfw 1 \nAktivieren`)
if (!isPremium) return reply('Sie sind kein VIP-Benutzer') 
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
//zero.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./media/miku.jpg')})
reply('Sünde: v')
		case 'rdmhentai':
		case 'randomhentai':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
                                        gatauda = body.slice(12)
					reply(ind.wait())
                                        anu = await fetchJson(`https://api.shizukaa.xyz/api/randomimage?apikey=client633`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        zero.sendMessage(from, buffer, image, {quoted: ftrol})
					await limitAdd(sender)
                                        break
		case 'kiss':
   if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=client633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						zero.sendMessage(from, buffer, sticker, {quoted: ftrol})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'hug':
			
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=client633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						zero.sendMessage(from, buffer, sticker, {quoted: ftrol})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
case 'pornhub':
				var gh = body.slice(9) 
				var porn = gh.split("/")[0]
				var hub = gh.split("/")[1]
				if (args.length < 1) return reply(`「❗」Example : ${prefix}pornhub Xeon / Hub`)
				reply('[❕] Wait') 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/pornhub?apikey=rivalxyz42&text1=${porn}&text2=${hub}`) 
				zero.sendMessage(from, buffer, image, {caption: '*here you go my frnd😽... *so beautiful, isnt it? ☺️*', quoted: ftrol})
				await limitAdd(sender) 
				break
case 'soundplaydate':
				                 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				let XYTODmy = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				zero.sendMessage(from, XYTODmy, MessageType.audio, { quoted: ftrol, ptt: true })
				await limitAdd(sender)
				break
          case 'low':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Wo ist die URL?\nBeispiel: ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${q}&apikey=${apikey5}`)
          result = sange.result.result
          videonya = await getBuffer(result.files.low)
          zero.sendMessage(from, videonya, video, {caption: 'bitte folg @h0ss3n auf Instagram ', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'high':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Wo ist die URL?\nBeispiel: ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${q}&apikey=${apikey5}`)
          result = sange.result.result
          videonya = await getBuffer(result.files.high)
          zero.sendMessage(from, videonya, video, {caption: 'bitte folg @h0ss3n auf Instagram', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'liriklagu':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Wie heißt der Song?\nBeispiel: ${prefix + command} Ich bin nicht sein Kumpel`)
          musik = await fetchJson(`https://zeroyt7-api.xyz/liriklagu?query=${q}&apikey=${apikey5}`)
          result = musik.result
          for (let i of result) {
          hasil =`Lirik : ${i.result}`
          }
          reply(hasil)
          limitAdd(sender, limit)
          break
case 'playstore':
            if(!c) return reply('what are you looking for?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY lSTORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
case 'ytsearch':
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += (`❒「  YtSearch  」\n• Title : ${i.title}\n• Views : ${i.views}\n• Uploaded On : ${i.ago}\n• Duration : ${i.timestamp}\n• Channel : ${i.author.name}\n• Video Link : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: ftrol , caption: akhir})
          break
case 'pinterest':
if (!c) return reply('what are you looking for?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('What are you looking for??')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Title* : ${i.title}
*Link* : ${i.link}
*Description* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
case 'googleimg':
if (args.length < 1) return reply('What do you want to search?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Api Error Or Result Not Found_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: ftrol , caption: `*Search Result :* ${teks}`})
}
}
break
              case 'fire':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `In process...`
        reply(result)
        sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
        break
              case 'fire1':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `In process...`
        reply(result)
        sendFileFromUrl(res[0].link, video, { quoted: ftrol , mimetype: 'video/mp4', filename: res[0].output })
        break
              case 'fire2':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Wait for the Process of Sending Media......`
        reply(result)
        sendFileFromUrl(res[0].link, audio, { quoted: ftrol , mimetype: 'video/mp3', filename: res[0].output })
        break
case 'spotify':{
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Artists : ${get_result.artists}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Popularity : ${get_result.popularity}\n`
    ini_txt += `Preview : ${get_result.preview_url}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await zero.sendMessage(from, thumbnail, image, { quoted: ftrol , caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    await zero.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: ftrol })
    }
    break
case 'block':
				 zero.updatePresence(from, Presence.composing) 
				 zero.chatRead (from)
					if (!isGroup) return reply(mess.only.group())
					if (!isPremium && !isOwner) return reply(mess.only.prem())
		 
					zero.blockUser (`${body.slice(7)}@c.us`, "add")
					zero.sendMessage(from, `*Befehl erhalten, blockiert* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(mess.only.group())
					if (!isPremium && !isOwner) return reply(mess.only.prem())
				    
				    zero.blockUser (`${body.slice(9)}@c.us`, "remove")
					zero.sendMessage(from, `*Befehl erhalten, Entsperrung* ${body.slice(9)}@c.us`, text)
					break
   case 'soundcloud':
                if(!q)return reply(`Example : ${prefix + command} sound cloud link`)
                if (!q.includes('m.soundcloud.com')) return reply('Thats not a SoundCloud link')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Please wait a moment, in the process of delivery...*`
                    sendFileFromUrl(from, data.thumbnail, txt, ftrol )
                    zero.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: ftrol , mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'telegramsticker': case 'tstiker': {
			if (!q) return reply(`Example: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('This is not a telegram sticker link')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(mess.wait)
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			zero.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: ftrol})
			}
		}
		break
case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List of heroes for features ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Hero Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommended Lane* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Release* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
break

case 'instagram':
case 'instagramdownload':
if (!q) return reply('Which Links?')
if (!q.includes('instagram')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await igDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.link, data.result.desc, ftrol ) })
.catch((err) => { reply(String(err)) })
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Successfully Obtained!*
\`\`\`🐥 Name : ${res[0].nama}\`\`\`
\`\`\`🐤 Size : ${res[0].size}\`\`\`
\`\`\`🐣 Link : ${res[0].link}\`\`\`

*Wait for media upload......*`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol })
break
case 'tiktok':
if (args.length < 1) return reply("enter tiktok url")
menu = `Hi ${pushname}
Please choose one`
teks = `must choose!!`
but = [
{ buttonId: `${prefix}ttwm ${q}`, buttonText: { displayText: '️TIKTOKWATERMARK' }, type: 1 },
{ buttonId: `${prefix}ttnowm ${q}`, buttonText: { displayText: 'TIKTOKNOWATERMARK️' }, type: 1 },
{ buttonId: `${prefix}ttaudio ${q}`, buttonText: { displayText: 'TIKTOKAUDIO' }, type: 1 }
]
sendButMessage(from, menu, teks, but)
break
case 'tiktoknowm':
case 'ttnowm':
if (args.length < 1) return reply("enter tiktok url")
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.nowatermark)
zero.sendMessage(from, tiktok, video, {quoted: ftrol, caption : 'Done bro'})
break
case 'tiktokwm':
case 'ttwm':
if (args.length < 1) return reply("enter tiktok url")
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.watermark)
zero.sendMessage(from, tiktok, video, {quoted: ftrol, caption : 'Done bro'})
break
case 'tiktokaudio':
case 'tiktokmusik':
case 'tiktokmusic':
case 'ttaudio':
case 'ttmusik':
case 'ttmusic':
if (args.length < 1) return reply("enter tiktok url")
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.audio)
zero.sendmessage(from, tiktok, audio, {quoted: ftrol})
break
          case 'tourl':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (
          ((isMedia && !zer.message.videoMessage) ||
          isQuotedImage ||
          isQuotedVideo) &&
          args.length == 0
          ) {
          boij =
          isQuotedImage || isQuotedVideo
          ? JSON.parse(JSON.stringify(zer).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : zer;
          owgi = await zero.downloadMediaMessage(boij);
          res = await upload(owgi);
          tek = `Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`
          zero.sendMessage(from, tek, text, {quoted: ftrol});
          limitAdd(sender, limit)
          } else {
          reply("kirim/reply gambar/video");
          }
          break;
          case 'upswteks':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Der Text?')
          teks = body.slice(10)
          zero.sendMessage('status@broadcast', teks, MessageType.text)
          reply(`Sukses upload status:\n${teks}`)
          break	
          case 'upswlokasi':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('Der Text?')
          teks = body.slice(12)
          zero.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
          reply(`Sukses upload lokasi:\n${teks}`)
          break	
          case 'upswsticker':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedSticker) return reply('Antworten Sie auf den sticker!')
          if (isMedia && !zer.message.videoMessage || isQuotedSticker) {
	      const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
	      buff = await zero.downloadMediaMessage(encmedia)
	 	  zero.sendMessage('status@broadcast', buff, sticker)
	      }
		  reply(`Sukses upload sticker`)
          break
          case 'upswaudio':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedAudio) return reply('Antwort Audio!')
          if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
	      const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
	      buff = await zero.downloadMediaMessage(encmedia)
	      zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		  }
		  reply(`Sukses upload audio`)
		  break
		case 'upswvoice':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.ownerBl)
          if (!isQuotedAudio) return reply('Antwort Audio!')
          if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
		  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
          buff = await zero.downloadMediaMessage(encmedia)
		  zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
		  reply(`Sukses upload voice`)
		  break
		case 'upswvideo':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(11)
          reply(mess.wait)
          var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
          const buffer3 = fs.readFileSync(mediap)
          zero.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
          reply(`Sukses upload video:\n${konti}`)
          break
          case 'upswgif':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(7)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zero.downloadAndSaveMediaMessage(enmedia)
          const buffer6 = fs.readFileSync(media)
          zero.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
          reply(`Sukses upload gif:\n${konti}`)
          break
          case 'upswimage':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          var teksyy = body.slice(11)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zero.downloadAndSaveMediaMessage(enmedia)
          buffer = fs.readFileSync(media)
          zero.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
          reply(`Sukses upload image:\n${teksyy}`)
          break
          case 'slot':
    case 'slots':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)           
          if (!isGroup) return reply(mess.only.group)        
          if (!isEventon) return reply(mess.only.event)
          if (isBanned) return reply('```banned u idiot```')
          const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
          slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Erhalten Sie 3 Stücke, um zu gewinnen\n\nBeispiel: 🍌 : 🍌 : 🍌<== 👑`
          but = [{ buttonId: `slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
          { buttonId: `menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, slom, 'Slot Game', but)
          limitAdd(sender, limit)
          break
          case 'wahrheit':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const truth = _truth[Math.floor(Math.random() * _truth.length)]
          but = [
          { buttonId: `pflicht`, buttonText: { displayText: 'pflicht' }, type: 1 }, { buttonId: `truth`, buttonText: { displayText: 'wahrheit' }, type: 1 }]
          sendButLocation(from, truth, `Wahrheit oder Pflicht`, tde, but)  
          limitAdd(sender, limit)
          break
          case 'pflicht':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const dare = _dare[Math.floor(Math.random() * _dare.length)]
          but = [
          { buttonId: `dare`, buttonText: { displayText: 'pflicht' }, type: 1 }, { buttonId: `truth`, buttonText: { displayText: 'wahrheit' }, type: 1 }]
          sendButLocation(from, dare, `Wahrheit oder pflicht`, tde, but)  
          limitAdd(sender, limit)
          break
          case "verlobt":
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
	  	  const jdii = groupMembers
		  const koss = groupMembers
		  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		  const diaa = koss[Math.floor(Math.random() * koss.length)]
	      teks9 = `damn.. was geht schon wieder
	@${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
		  jds.push(akuu.jid)
		  jds.push(diaa.jid)
	      mentions(teks9, jds, true)
		  break	
		case "hass":
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiid = groupMembers
	      const kosst = groupMembers
	      const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
		  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
		  teks8 = `Diejenigen, die sich Hassen, sind @${akuut.jid.split('@')[0]} und️ @${diaat.jid.split('@')[0]} `
		  jds.push(akuut.jid)
		  jds.push(diaat.jid)		  		  
		  mentions(teks8, jds, true)
	   	  break
	case "gutaussieht":
    case "schlecht":
    case "schön":
    case "gay":
    case "pedo":
    case "unkraut":
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidc = groupMembers
		  const kosstc = groupMembers
		  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  teks2 = `der jenige der ${command} In dieser Gruppe ist, ist @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  limitAdd(sender, limit)
		  mentions(teks2, jds, true)
	      break	
	case 'darkjokes':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
          let data = fs.readFileSync('./mess/darkjokes.js');
	      jsonData = JSON.parse(data);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasl = await getBuffer(randKey.result)  
          but = [
          { buttonId: `darkjokes`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButLocation(from, `AhhhGelapKekMasaDepanlu`, `Klik Next Ngab`, hasl, but)   
          limitAdd(sender, limit)       
          break
          case 'listvn':
	case 'vnlist': 
       	  teks = '*List Vn:*\n\n'
		  for (let awokwkwk of audionye) {
		  teks += `- ${awokwkwk}\n`
	  	  }
		  teks += `\n*Total : ${audionye.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": audionye } })
		  break
		case 'listvideo':
	case 'videolist':
		  teks = '*List Video :*\n\n'
		  for (let awokwkwk of videonye) {
	      teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${videonye.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": videonye } })
		  break
		case 'liststicker': 
		  teks = '*Sticker List :*\n\n'
		  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${setiker.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": setiker } })
	      break
	case 'imglist':
	case 'listimg':
		  teks = '*List Image :*\n\n'
		  for (let awokwkwk of imagenye) {
		  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${imagenye.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": imagenye } })
	 	  break 
	case 'addvn': 
	      svst = body.slice(7)
		  if (!svst) return reply('Wie lautet der Audioname?')
	  	  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zero.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
		  fs.writeFileSync(`./media/${svst}.mp3`, delb)
		  fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
		  zero.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftrol })
		  break	
		 case 'addvideo':
		  if (!isQuotedVideo) return reply('Antwort das Video ist gesperrt!')
		  svst = body.slice(10)
		  if (!svst) return reply('Wie heißt das Video?')
		  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zero.downloadMediaMessage(boij)
		  videonye.push(`${svst}`)
		  fs.writeFileSync(`./media/${svst}.mp4`, delb)
		  fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
		  zero.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftrol })
		  break
		case 'addsticker':
    case 'addstiker':
		  if (!isQuotedSticker) return reply('Antworten Sie auf den Sticker')
	      svst = body.slice(12)
		  if (!svst) return reply('Wie heißt der Sticker?')
		  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zero.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./media/${svst}.webp`, delb)
		  fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
	  	  zero.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftrol })
	 	  break
	case 'addimage':
		  if (!isQuotedImage) return reply('Antwortbild ist gesperrt!')
		  svst = body.slice(10)
		  if (!svst) return reply('Wie heißt das Bild?')
		  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await zero.downloadMediaMessage(boij)
		  imagenye.push(`${svst}`)
		  fs.writeFileSync(`./media/${svst}.jpeg`, delb)
		  fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
		  zero.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: ftrol })
		  break
		case 'getvn': 
		  namastc = body.slice(7)
		  buffer = fs.readFileSync(`./media/${namastc}.mp3`)
	 	  zero.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftrol, ptt: true })
		  break
		case 'getvideo':
		  namastc = body.slice(10)
		  buffer = fs.readFileSync(`./media/${namastc}.mp4`)
		  zero.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftrol })
		  break		
		case 'getsticker':
	case 'gets': 
		  namastc = body.slice(12)
		  result = fs.readFileSync(`./media/${namastc}.webp`)
		  zero.sendMessage(from, result, sticker, {quoted :ftrol})
		  break
		case 'getimage':
	      namastc = body.slice(10)
		  buffer = fs.readFileSync(`./media/${namastc}.jpeg`)
		  zero.sendMessage(from, buffer, image, { quoted: ftrol, caption: `Result From Database : ${namastc}.jpeg` })
		  break
		case 'ttp':
		case 'blackpink':
		case 'neon':
		case 'matrix':
		case 'joker':
		case 'devil':
		case 'transformer':
		case 'thunder':
		case 'harry':
		case 'gradient':
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Wo ist der Text?\nBeispiel: ${prefix + command} Hunoter`)
          img = await fetchJson(`https://zeroyt7-api.xyz/${command}?text=${q}&apikey=${apikey5}`)
          hasil = await getBuffer(img.data)
          zero.sendMessage(from, hasil, image, {caption: 'folg @h0ss3n auf insta', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'games':
          pp = 'on or off?'
          but = [
           { buttonId: `epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButMessage(from, pp, 'Games Group', but, ftrol)
          break
          case 'epen':
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*AKTIVIERT* !!!')
		  event.push(from)
		  fs.writeFileSync('./storage/event.json', JSON.stringify(event))
		  reply('*❬ ERFOLG ❭ GAMES IN DIESER GRUPPE AKTIVIERT*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./storage/event.json', JSON.stringify(event))
		  reply('*❬ ERFOLG ❭ SCHALTEN SIE DIE GAMES IN DIESEM GRUB AUS*')
		  } else {
		  reply('eeee')
		  }								

//━━━━━━━━━━━━━━━[ ENDE DER FUNKTIONEN ]━━━━━━━━━━━━━━━━━//
        
default:

if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}