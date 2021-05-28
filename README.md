<h1 align="center">Welcome to bbl-api 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/bbl-api" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/bbl-api.svg">
  </a>
  <a href="https://docs.bladebotlist.xyz" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/bladebotlist/bbl-api/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/bladebotlist/bbl-api/blob/master/LICENSE" target="_blank">
    <img alt="License: mit" src="https://img.shields.io/github/license/hiizun/bbl-api" />
  </a>
  <a href="https://twitter.com/bladebotlist" target="_blank">
    <img alt="Twitter: bladebotlist" src="https://img.shields.io/twitter/follow/bladebotlist.svg?style=social" />
  </a>
</p>

> The official bladebotlist.xyz's api to post your server count easly and interact with the bladebotlist api

### 🏠 [Homepage](https://docs.bladebotlist.xyz)

## Install

```sh
npm install bbl-api
```

## Usage

```js
const BBL = require("bbl-api");
const client = new BBL(
    "BOT ID", // BOT_ID
    "THE API KEY", // API_KEY, use bbl!key gen on the discord server
    {
        server_count: "2",
        interval: 300000,
    });


client.on("ready", () => console.log("Client is started !")); // when the module is loaded and ready to post data

client.on("debug", (log) => console.log(log))

client.on("update", () => console.log("Stats updated !")); // autopost or manual post

client.on("error", (error) => console.log(`Something was wrong when the module has posted stats: ${error}`)); // complete reports about errors like invalid api key or bot id
```

you can also checkout the exemples directory where you can see some examples :P

## Author

👤 ****

* Website: http://hiizun.codes
* Twitter: [@HiiZunfr](https://twitter.com/HiiZunfr)
* Github: [@hiizun](https://github.com/hiizun)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bladebotlist/bbl-api/issues). You can also take a look at the [contributing guide](https://github.com/bladebotlist/bbl-api/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [NaoismyWaifu](https://github.com/Naoismywaifu).<br />
This project is [MIT](https://github.com/bladebotlist/bbl-api/blob/master/LICENSE) licensed.
