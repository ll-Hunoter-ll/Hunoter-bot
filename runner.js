const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./mess/myfunc')
const { color } = require('./mess/color')
const welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
number = '6285157740529@s.whatsapp.net'

require('./srv/zero.js')
nocache('./srv/zero.js', module => console.log(`${module} Telah Di Updated... Jangan Lupa Subscribe Zero YT7`))

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const starts = async (zero = new WAConnection()) => {
zero.logger.level = 'warn'
zero.version = [2, 2143, 3]
zero.browserDescription = [ 'Hunoter', 'Firefox', '3.0' ]
console.log(banner.string)
console.log(color('[•] [ ERSTELLT VON HUNOTER ] [•]'))
console.log(color('Bitte folgen Sie mir in den sozialen Medien'))
console.log(color(' ==============================================='))
console.log(color('│ ○ Youtube : https://youtube.com/ɦᴜπᴏᴛᴇʀ. 王⁩                     '))
console.log(color('│ ○ Instagram : https://instagram.com/h0ss3n                 '))
console.log(color('│ ○ My owner : wa.me/+4915678388861                        '))
console.log(color(' ==============================================='))
zero.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Please... Scan Is Now Qr Code !'))
})

fs.existsSync('./session/qrsession.json') && zero.loadAuthInfo('./session/qrsession.json')

zero.on('connecting', () => {
start('2', 'Verbindung wird hergestellt. Bitte warten...')
})
zero.on('open', () => {
success('2', 'Bot wurde verbunden... Vergessen Sie nicht, @h0ss3n zu folgen auf Instagram')
})
await zero.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session/qrsession.json', JSON.stringify(zero.base64EncodedAuthInfo(), null, '\t'))
zero.on('chat-update', async (message) => {
require('./srv/zero.js')(zero, message)
})
    
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1;
mhan = await zero.prepareMessage(id, kma, MessageType.image);
buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

zero.on('group-participants-update', async (anu) => {
try {
var mdata = await zero.groupMetadata(anu.jid)
groupMet = await zero.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await zero.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await zero.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(zero.user.jid)) {
zero.sendMessage(anu.jid, "hallo!.. 𖡝Şɪх Ƥατӊʂ σƒ Ƥαɪɳ𖡝 hat mich in dieser Gruppe geschickt. viel Spaß", "conversation")
}
      
if (anu.action == 'add') {
num = anu.participants[0]
let v = zero.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
try {
ppUr = await zero.getProfilePicture(anu_user)
} catch {
ppUrl = 'https://telegra.ph/file/c9dfa715c26518201f478.jpg'
}
img = await getBuffer(ppUrl)
teks = `Hallo @${anu_user}\nWillkommen In der Gruppe:

✫${mdata.subject}✫\n
Ich hoffe, Sie fühlen sich wohl In dieser Gruppe`
sendButImage(anu.jid, teks, `©ERSTELLT VON HUNOTER`, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'WILLKOMMEN!!!'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppUrl = await zero.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Bye Bye @${num.split('@')[0]}\nTschüss... Gruppenbelastung wird reduziert Abschied von der Gruppe: ${mdata.subject}`
sendButImage(anu.jid, teks, `©ERSTELLT VON HUNOTER`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `AUF WIEDERSEHEN!!!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})
}
if (anu.action == "promote") {
anu_user = zero.contacts[mem]
num = anu.participants[0]
try {
ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `@${num.split("@")[0]} Befördert`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
if (anu.action == "demote") {
anu_user = zero.contacts[mem]
num = anu.participants[0]
const mdata = await zero.groupMetadata(anu.jid)
try {
ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(
`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
)
teks = `@${num.split("@")[0]} admin weg!`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log(e)
}
})
   
zero.on("group-update", async (anu) => {
metdata = await zero.groupMetadata(anu.jid);
if (anu.announce == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻𝗲𝗱 ] -\n\nDie Gruppe wurde vom Administrator geöffnet\nJetzt können alle Mitglieder Nachrichten senden`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Opened ] - In ${metdata.subject}`);
} else if (anu.announce == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] -\n\nDie Gruppe wurde vom Admin geschlossen\nJetzt kann nur der Administrator Nachrichten senden`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Closed ] - In ${metdata.subject}`);
} else if (!anu.desc == "") {
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n Die Gruppenbeschreibung wurde vom Administrator geändert @${
anu.descOwner.split("@")[0]
}\neue Beschreibung : ${anu.desc}`;
zero.sendMessage(metdata.id, teks, MessageType.text, {
contextInfo: { mentionedJid: [tag] },
});
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\Gruppeninformationen bearbeiten wurde für Mitglieder geöffnet\nJetzt können alle Mitglieder diese Gruppeninformationen bearbeiten`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\nGruppeninformationen bearbeiten wurde für Mitglieder geschlossen\nJetzt kann nur der Gruppenadministrator diese Gruppeninformationen bearbeiten`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ${metdata.subject}`);
}
})

antical = true
zero.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
zero.sendMessage(call, `*Sorry ${zero.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => zero.blockUser(call, "add"))
})


zero.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Jetzt wird auf Veränderung geachtet')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()