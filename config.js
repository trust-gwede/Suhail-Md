const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+263713004215";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUSUHAIL_18_50_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NixcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRFRFErOHZLcVJGODlpYmxBcW53L3ZpS1ZWVGR4UHFxTjRlbXNkRHloYWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImM4Ymozb3ZEVGVteXRPak5LMnpxVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzNiN2U3YTUtY2NlMC00N2U3LWFkM2EtYmEwMzEzZDdjYTAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDEzNyxcbiAgICAgIDU4LFxuICAgICAgMjMsXG4gICAgICA5NyxcbiAgICAgIDE0NixcbiAgICAgIDE0MCxcbiAgICAgIDEzMixcbiAgICAgIDM2LFxuICAgICAgMTgwLFxuICAgICAgMTUsXG4gICAgICA4MyxcbiAgICAgIDkxLFxuICAgICAgNzAsXG4gICAgICAyMzksXG4gICAgICAxMTIsXG4gICAgICAxNDAsXG4gICAgICAyMzcsXG4gICAgICAyMzIsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyNDQsXG4gICAgICAyNTIsXG4gICAgICA2MyxcbiAgICAgIDIzMSxcbiAgICAgIDIwNCxcbiAgICAgIDE1OSxcbiAgICAgIDExNyxcbiAgICAgIDIzNSxcbiAgICAgIDEyLFxuICAgICAgMjI5LFxuICAgICAgMTU3LFxuICAgICAgMTcyLFxuICAgICAgMTY1LFxuICAgICAgNyxcbiAgICAgIDE3NixcbiAgICAgIDQ4LFxuICAgICAgNjgsXG4gICAgICAyMTEsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkhNVExBVEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzAwNDIxNTo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY1OTcwMTYxNjEwOTA5OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxdnA2WUJFT3pseUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFNsdkhOWUY3djVtZ0dTR2xIZURMRVY0UEo0NkVJdGR5Q2kvTlRQaWdoZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVdEQyczYrVlZla29uakoyUXE3T0NLWERlYkNGdUczUHkyNWdrN0xkVTNoYXRZa0Q4ei90Zi9pRHJlYWtiSCtUVkhpcElQMlprYXp2eXpFVkFWeVhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3TStDVFFvU0xrUWczUVhoK1NPTmt1V1pZRGNkYjNBbFRsRWtPc0U0OVJSWjdGQTU0eVR3NFljVGZ2VHFSdUJJQ1VwTW5pM3luSXE3b21KTFptRHpCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTMwMDQyMTU6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY2NjMwMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKQVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpBWC5qc29uIjogIntcImtleURhdGFcIjpcIjliUSt1d0dnVFBvQzRDVFRTMldoOXRjVGZ3L2lFdGQ2NnVWVTVHRGJKQWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ4NzcyMzQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE2NjExNDA0ODIwXCJ9Igp9T your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "PROSPER",
  ownername:process.env.OWNER_NAME|| "Prosper",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
