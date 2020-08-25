const BBL = require("../app");
const client = new BBL(
    "", // BOT_ID
    "", // API_KEY, use bbl!key gen on the discord server
    {
        server_count: "3000",
        shard_count: "20",
        interval: 300000,
    });


client.on("ready", () => console.log("Client is started !")); // when the module is loaded and ready to post data

client.on("debug", (log) => console.log(log))

client.on("update", () => console.log("Stats updated !")); // autopost or manual post

client.on("error", (error) => console.log(`Something was wrong when the module has posted stats: ${error}`)); // complete reports about errors like invalid api key or bot id