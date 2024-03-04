const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

  // Set the bot's status
  bot.editStatus("idle", {
    name: "NixonNodes.com",  // Replace with the desired status text
    type: 3,  // 0 for playing, 1 for streaming, 2 for listening, 3 for watching
  });
});

bot.connect(); // Get the bot to connect to Discord
