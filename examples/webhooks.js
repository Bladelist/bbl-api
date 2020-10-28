const BBL = require("../app");
const client = new BBL(
    "", // BOT_ID
    "", // API_KEY, use bbl!key gen on the discord server
    {
        server_count: "3000",
        shard_count: "20",
        interval: 300000,
        webhook: {
            status: true,
            port: 6060,
            password: "youshallnotpass",
            endpoint:"/hook"
        }
    });


client.on("ready", () => console.log("Client is started !")); // when the module is loaded and ready to post data

client.on("debug", (log) => console.log(log))

client.on("update", () => console.log("Stats updated !")); // autopost or manual post

client.on("error", (error) => console.log(`Something was wrong when the module has posted stats: ${error}`)); // complete reports about errors like invalid api key or bot id

client.on("vote", (out) => {
/*
out must looks like
{
            "userid":355995885085392896,
            "usertag":`HiiZun#0001`,
            "username":`HiiZun`,
            "userdiscriminator":`0001`,
            "botID":`643499304950038539`,
            "date":1603908629750
}
*/

    console.log(`Whoohoo ! ${out.usertag} just voted !`)
})
