const { EventEmitter } = require("events");
const fetch = require("node-fetch")
class Client extends EventEmitter
{
    constructor(id, token, options)
    {
        super();
        this._bot = { _id: id, _token: token, _serverCount: (options.server_count ? options.server_count : null), _shardCount: (options.shard_count ? options.shard_count : null) };
        this._interval = null;
        this._timer = ((options.interval && options.interval >= 60000) ? options.interval : 60000);
        this._isRunning = false;
        this._webhook = false
        this._logs = [];
        setTimeout(() => { this._start(); }, 1000);
    
        if(options.webhook && options.webhook.status){
                this.webhook = {
                endpoint: options.webhook.endpoint||'/hook',
                port: options.webhook.port||3000,
                password: options.webhook.password
            }
        }

    }
	/**
	 * Method used at the launching of the module, this musn't be used if you don't know what you are doing !
	 */
    _start()
    {
        if (!this._isRunning) {
            this.emit("ready");
            this._postStats();
            this._isRunning = true;
            this._interval = setInterval(() => { this._postStats(); }, this._timer);
        } else {

			this.emit("debug", "[\x1b[31mError\x1b[0m]] the module is already loaded, please use <client>#update() to update stats.");
            this.emit("error", { status: null, data: null, error: "the module is already loaded.", timestamp: Date.now() });
        }
        if(this.webhook){
            const express = require("express")
            const bodyParser = require("body-parser")

const app = express()
const PORT = this.webhook.port||3000

app.use(bodyParser.json())

app.listen(PORT, () => this.emit("debug", `[Debug] 🚀 Webhook server running at ::${PORT}${this.webhook.endpoint}`))    
        
app.post(this.webhook.endpoint, (req, res) => {
    if(this.webhook.password){
        if(!req.headers.password || req.headers.password !== this.webhook.password){
            return res.status(403).json({ err:true, code:403, message:"Invalid password in headers !"})
        }
    }
    let output = req.body
    this.emit("debug", output)
    this.emit("vote", (output))
    return res.status(200).json({ok:true, code:200, message:"Success"})
})

}
    }
	/**
	 * Strings must include **ONLY** the number: "10"
	 * @param {String} serverCount 
	 * @param {String} shardCount 
	 * @example update(client.guilds.cache.size, client.shard.count) // for discord.js v12 !
	 */
    update(serverCount, shardCount)
    {
        this._bot._serverCount = (serverCount ? serverCount : null);
        this._bot._shardCount = (shardCount ? shardCount : null);
        this.emit("update");
    }
    /**
	 * Post datas directly to the api (not recommanded to use !)
	 * This method isn't tested and developed to be used in production !
	 */
    _postStats()
    {
		let body = {
			"server_count": this._bot._serverCount||null,
			"shard_count": this._bot._shardCount||null
		}


		this.emit("debug", "[Debug] Preparing the posting...");

		fetch(`https://bladebotlist.xyz/api/bots/${this._bot._id}/stats`, {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json', "Authorization": this._bot._token },
    })
    .then(res => res.json())
	.then(json => {

		if(json.error){
			this.emit("debug", "[\x1b[31mError\x1b[0m] An error has occurred while updating stats on \x1b[36mBladeBotList\x1b[0m !");
				return this.emit("error", `An error occured while tring to post stats: ${json.error}`);
		}
	
	

			this.emit("debug", "[\x1b[32mSuccess\x1b[0m] Stats posted to \x1b[36mBladeBotList\x1b[0m !");
			
			this.emit("post");

	})
	.catch((err) => {
			this.emit("debug", "[\x1b[31mError\x1b[0m] An error has occurred while updating stats on \x1b[36mBladeBotList\x1b[0m !");
			
			this.emit("error", `An error occured while tring to post stats: ${err}`);
	})

	

}



};

    
	

module.exports = Client;