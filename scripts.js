const cors = require('cors')

async function getGames() {
    try {
        let response = await fetch("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=55E499C8C4C104C49AED56DDE13DF8ED&steamid=76561198093067647&format=json");
        let gameList = await response.json()
        return gameList
        console.log(gamesList);
    } catch (error) {
        console.log(error)
    }


}

getGames();