const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *GROUP MENU* ]----- ð°
Hallo, ${pushname} ð
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ Nama : ${pushname}
âââ¸ Level : ${getLevelingLevel(sender)}
âââ¸ User ${botName} : ${_registered.length}
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
Berikut adalah fitur yang ada pada bot ini!â¨
Jika tidak paham ketik *${prefix}bingungcok*
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ *${prefix}welcome* ã1/0ã
âââ¸ *${prefix}leveling* ã1/0ã
âââ¸ *${prefix}simih* ã1/0ã
âââ¸ *${prefix}nsfw* ã1/0ã
âââ¸ *${prefix}antilinkgrup* ã1/0ã
âââ¸ *${prefix}grup* ãbuka/tutupã
âââ¸ *${prefix}add*
âââ¸ *${prefix}kick*
âââ¸ *${prefix}hedsot*
âââ¸ *${prefix}linkgrup*
âââ¸ *${prefix}promote*
âââ¸ *${prefix}demote*
âââ¸ *${prefix}setname*
âââ¸ *${prefix}setdesc*
âââ¸ *${prefix}leave*
âââ¸ *${prefix}tagall*
âââ¸ *${prefix}admin*
âââ¸ *${prefix}level*
âââ¸ *${prefix}fitnah*
âââ¸ *${prefix}hidetag*
âââ¸ *${prefix}hidetag5*
âââ¸ *${prefix}hidetag10*
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
ð° -----[ *POWERED BY ${ownerName}* ]----- ð°`
}
exports.groupm = groupm