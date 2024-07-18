const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection is succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
let allchats = [
    {
        from:"neha",
        to:"priya",
        msg:"send me your exam sheets",
        created_at:new Date(),
       },

       {
        from:"sneha",
        to:"opriya",
        msg:"send me your sheets",
        created_at:new Date(),
       },

       {
        from:"oneha",
        to:"riya",
        msg:"send me our exam sheets",
        created_at:new Date(),
       },
];

Chat.insertMany (allchats);
