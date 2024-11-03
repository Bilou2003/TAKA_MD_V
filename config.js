//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/237659079843 , https://wa.me/237690768603";
global.sudo = process.env.SUDO || "237659079843";
global.owner = process.env.OWNER_NUMBER || "237696007635";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU4zeG1ZQVJWU0FrbGVHb1FrbnNxb013eEJRd1lTZnFaWGNRYUl5NjhrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXZVVWliVWZlMkhxc3hqc1VHQ1I1YjcxbVdYeGEybUpIZEo0Q0RDcEpXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTVJOUHJrZmR3M0ZrTXVrQ2ZNUEVFNUR2anJXL1Jyb0JSd0tseXVYbjJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQzByZmYvMmsxc3RPMC9Xa0RxVGdMOSthNHFrZGM0amVONW83WVZmcGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHZU5vb3doS3FHcUpLU2NGVFpBVXhNTnQ1QUcvV1dzTUlmemJZUXNjR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ5a0JiYXYzQVJpRVN4T1p1NGgxaDFpQmJZTWhhdmYxVDZqaFNuV0JSM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS08wR3k4OHZOSEE0UllyL0RXVFpRSGZ3MnlDSHNNcis0TUEwVHJ4LzIzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1NZbExheG94ZEJ3WjI4TncyakgwOThaVHlRTDZrSzlMS0libnQwT0ZCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iktza09jbHVoUnJ2SDVaU1RYUC9rYVdBTldxakZFVUZTRU1WVlhyREJtNDNzKzY4aDN2Qis0bVFzZW14bE1BRlZwdXRIcHNuUkMzNXgwZ3ZmREFrUUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6Ik5VU1c0WTEza2NGZ3dVaHU5T3FybXhXdzkxcmQ0SFZYQm5rN2JRWXFIT2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndaNlIwb0VQUjJtbFpraUJjT0V0bUEiLCJwaG9uZUlkIjoiNTczMGJmYTQtNmEzZS00MTgzLTg2NGItMzdiMWZjMmQ5ODJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk5WEVibDFSd0pGWWg0WndERG5RVDZMbjY5Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDaWdOUzEzeVZHYjVaOTFnZkc5L0U3RVBrUkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0dORjlSRkoiLCJtZSI6eyJpZCI6IjIzNzY5NjAwNzYzNToxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLK3J1NUFGRU02MG5ia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMQnV6T0dwSUpiTzlGU0JwMDRjL0tzVDhaaU5hQTJGOXJuY0UvajNCRFVFPSIsImFjY291bnRTaWduYXR1cmUiOiJWN3BEcGhiV1BoZFY1QnFsNUpxS0g2Y2h1UFdyS1pDR3RUeGJIMXNUWXZHV3lWb21IcWh4bFFIaW1Bb3YrTXJQOTRycFV5TWZpdzFDVEk3MksrSG9Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlFKdkxiYlIwck1LaDVwUDJDU0JuTTJjVk9sZUdtRFBPUWpJRnlIZ3QreFh2Z2piUVd3QWRiUHdmSlRQbHpIWXF6V0xUdEEzdjhxYk54dDZlWnNDQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTYwMDc2MzU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTd2JzemhxU0NXenZSVWdhZE9IUHlyRS9HWWpXZ05oZmE1M0JQNDl3UTFCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjMyMjg0fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜TAKA_TECH⌝☜`",
  author: process.env.PACK_AUTHER || "꧁•༆$ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯🚹࿇꧂",
  packname: process.env.PACK_NAME || "TAKA MD",
  botname: process.env.BOT_NAME || "ᵏᵍ┘TAKA_𝙼𝙳_𝚅𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜TAKA_TECH☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
