module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "আইডিতে এডড করার সিস্টেম নেই অথবা আমাকে ব্লক করেছে _😅🙂";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`দুংখিত ওয়াহিদ বস এডড করতে পারিনি_🥺🥺 ${name} Group Mai :( `, event.threadID)
   } else api.sendMessage(`Bhag Ke Jaane Ka Nhi, ${name} Baby, Dekho Phir Se Add Kardiya Aapko`, event.threadID);
  })
 }
}
