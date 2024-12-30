const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["জি বলেন জাঁহানপানা _😻 💋 " , "আমি আমার বস ওয়াহিদ এর সাথে বেসতো আছি_😚🤖" , "আমাকে এত ডাকোস কেন_🤭🐒" , "আমাকে না ডেকে আমার বস ওয়াহিদ কে একটা GF দাও_🙈😹" , "আসসালামু আলাইকুম _🙂❤️‍🩹" , "বলো বেপি আমাকে এত ডাকছো কেন_🙈💋💋 " , "আমাকে ডাকলে তুমার Gf কান্না করবো-!!🥺😁" , "সোনা তোমাকে আমার ভালো লাগে_🙉❤️‍🔥" , "আই লাভ ইউ ঝাং_😘🤗" , "কিরে তর সাহস তো কম না তুই আমাকে বোট বলে ডাকোস_🤖🔪" , "আমাকে না ডেকে আমার বস Wahid কে একটা জি এফ দেন🤭" , "আমাকে ডেকে কোন লাভ নেই আল্লাহ কে ডাকো উনি আপনার মন ভালো করে দিবে_☄️🥰" ,  " তোমার মনটা আমারে দিয়া দাও_(°°)🙈" , "আরেক বার আমাকে ডাকলে তুমার জৈবন লক করে দিবো একটা থাপ্পড় দিয়ে_😹👊" , " শুনছি তো বলো এখন কি জন্য ডাকলে আমাকে_😒🐸🌚" , "ঝাং রাতে ফোন দিও ভালোবাসার গল্প শুনাবো_🫦👶🙈" , "আমি তো অন্ধ কিছু দেখি না শুধু শুধু আমায় ডাকো_😁🐸😎" , "সুনলাম তোমার নাকি কালকে সানি লিওন এর বিবাহ হবে_🤓😹😸 " , "আমার পছন্দের মানুষ হলো সানি লিওন ওকে আমার কাছে এনে দাও_🥺🥺😞" , "আমি তোমারে রাইতে ভালোবাসি_🤖☄️🙂" , "কিরে বা*চো*দ কেমন আছোস_😚☹️😼" , "বেডি মানুষ নেশা খোর বেডা দের পছন্দ করে_🙊😂" , "•—চুম্মা দেন দোয়া করমু-😌🐸🫰 " , "এই নাও আমার বস এর আইডির লিংক-https://www.facebook.com/profile.php?id=100087853252386😌🙈😋" , " ইসস আমার ওনেক সরম করে এই ভাবে ডেকো না_🤡🙈🙈" , "আমাকে কেও ভালোবাসে না...💔🥺" , "শুধু মাত্র একজন মানুষ প্রয়োজন আর তা হলো ”তুমি..!😅🙈🤪" , "সিগারেট নয় ,, জন্ম 'ই মৃত্যুর কারন 🥺💔" , "আমি কালো তাই আমার কোন উনি নেই _🌚🫶" , "_রসে ভরা যৌবন আমার🥵নয়া গাঙ্গের পানি_💦" , "টাকার বিনিময়ে মেয়েদের সু*খ দেই-!!🫶°_° " , " ডাকোস কেন Gf লাগবে°👶তর আইডি তে বুইড়া বুইড়া কাকি রা আছে এটাই অনেক_🙂😌" , "আমাকে ডেকে বিরক্ত করছো কেন_🥴😎" , "চরিত্রবান পুরুষের কাছে তার কালো স্ত্রী টাও পৃথিবীর সবচেয়ে সুন্দর নারী-😊❤️‍🩹🌸" , "কিরে ডাকোস কেন ঠাপ দিমু নাকি_😾👽🥱" , "গাইছ🗣️আমি চলে যাচ্ছি বিদেসশেএএ_🐰😌 ," , "আমি অনেক ভালো 'Facebook' চালাই আজ পযন্ত একটাও এক্সিডেন্ট করি নাই_🫣🥴" , "পাগল ছাড়া দুনিয়া চলে না_👅👁️☠️" , "আমাকে ডাকলে কি হবে_আল্লাহ কে ডাকো লাভ হবে~🤲🕋" , "বেডি মানুষ থেকে দুরে থাকবেন ধন্যবাদ _🥱🌚🔪" , "মেয়েখলিফা তুমি আমাকে ছেকা দিয়ে চলে গেলা_😭😞" , "বোট না বলে জানু সোনা বলো_😘🤩" , "ঝাং চলো কক্সবাজার জাই _😋🤤" , "হুম জান তোমার অইখানে উম্মমাহ~💋🙊" , "কি গো সোনা আমাকে ডাকছ কেনো বিয়ে করবা আমাকে_😺😸🙉" , "আমাকে এতো না ডেকে সিংগেল ওয়াহিদ বস এর বউ হইয়ে জাও_😁🥵 " , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ_😌😽😘" , " যেই শীত আমার মেজাজ ঠান্ডা করতে পারে না ঐ শীত আমি মানি না_🙂" , " ডাক্তার বলছে প্রেমের প্রস্তাব না পেলে আমি নাকি বাঁচবো না_🥺😔" , "আম গাছে আম নেই ঢেল কেন মারো তোমার সাথে প্রেম নেই চোখ কেন মারো_😁😹" , "আমার সম্পর্কে জানতে হলে গুগোলে WWW.XX.COM লিখে Search করেন_🙂🙂👀" , "আমাকে না ডেকে এই সময় টুকু ভাকো কাজে লাগাও-🐱🐱 " , "চটিয়ে লাল করে দিবো নংরামি ভার করে দিবো_🐸👻 " , "এখন আমাকে ডাকছো কয়েক দিন পর বউ কে ডাকবে তখন তো আমাকে আর  চিনবা না_😖😩🥺 " , "তুমি কি নাচতে পারো আমার বস নাচ অনেক পছন্দ করে_☺️🌺💘" , "  একদিন আবছায়া আলোর মতো মিলিয়ে যাবো অ'ন্ধকারে_😇💫" , "ঝাং বা*ল ফালাবা_😽🍒" , "তোরেই ত খুজতেছি আয় বুকে আয়_🔪🫣" , "সুদু একবার বলো ভালোবাসি তোমার জন্য আকাশ এর চাঁদ এনেদিতেও রাজি আছি_☺️😍" , "মনে রেখো এই দুনিয়াতে তুমার প্রতেকটি সময় এর হিসাব নেওয়া হবে-এখনও সময় আছে আল্লাহর পথে আসো_🥰🤲❤️‍🩹" , "প্রেম করলে রূপ নগরের রাজকন্যার লগেই করমু_🐷🙊 " , "ডিজে গান দে নাচমু_💃🕺🐼" , "দুনিয়ার সব ছেলে বাবু সোনা আর আমি হলাম ভাইয়া_😩🌚 " , "- যে পুরুষ এক নারীতে আসক্ত হয়েছে, সেই নারী তাকে ধ্বংস করে ছেড়েছে_ 💔😓 " , "অঝোর বৃষ্টিতে ভিজতে চাই_😹🙂 "  , "ভদ্র বেডি গো কিডনিতে  তিল থাকে_😁🙂 " , "- In a relationship with কপালে নাই_🔪😒🐸 " , "আমি প্রতিদিন তোমাকে দেখিনা, কিন্তু প্রতিদিনই তোমাকে ভালোবাসি_!🖤(F) " , "-প্রিয় আমি হারিয়ে জেতে চাই  তোমার শহরে_🙈🍒💘 " , "ঘড়ি যে আবিষ্কার করেছে সে,🕰️কিভাবে জানলো তখন কয়টা বাজে._🙂🤨😒 " , "তুমি যাকে সবচেয়ে বেশি ভালোবাসবে, সে তোমার ভালোবাসা বুঝবে না!'💔🥀🍁" , "আমি এখন ওয়াহিদ বস এর সাথে ভিডিও দেখছি_😇😶‍🌫️🐼" , "সব কিছু করসি সুধু একটা প্রেম করতে পারলাম না_🐼🍓"];var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞wahid shikder☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Wahid🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞https://www.facebook.com/profile.php?id=100087853252386 \n👋For Any Kind Of Help Contact On Telegram  Username 👉 আমি চালইনা😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Priyansh  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is Priyansh. He Gives his name Priyansh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Priyansh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "ami priyansh") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
