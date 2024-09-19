
// Összesített
async function GetUser(username) {
    let user = null;
    try {
        const request = await fetch(`https://www.codewars.com/api/v1/users/${username}`);

        if(!request.ok)
            throw new Error('REQUEST ERROR');

        const response = await request.json();

        if(response.success) {
            if(response.success === "false")
                return { "error": "User not found." };
        }

        //console.log(response);

        user = response;
    }
    catch(err) { console.error(err); }

    return user;
}

/*
async function GetScores(username) {
    const user = await GetUser(username);

    console.log(user.ranks.languages);
    let languages = user.ranks.languages, result = {};

    for(const [key, val] of Object.entries(languages)) {
        //console.log(`${key}: ${val}`);
        //console.log(val.score);
        result[key] = val.score;
    }

    //console.log(result);
    return result;
}
*/

async function RenderUser() {
    const uName = document.getElementById('name').value;
    const user = await GetUser(uName);

    if(user.error)
        document.querySelector('#container').innerHTML += `
            <div class="result" id="all">
                <p>A felhasználó nem található.</p>
            </div>`;
    
    document.querySelector('#container').innerHTML += `
        <div class="result" id="all">
        <table>
            <tr>
                <th>Felhasználónév</th>
                <th>Teljes név</th>
                <th>Clan</th>
                <th>Rank</th>
                <th>Pontszám</th>
            </tr>
            <tr>
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.clan}</td>
                <td>${user.ranks.overall.rank}</td>
                <td>${user.ranks.overall.score}</td>
            </tr>
        </table>
    </div>`;
}

function getValueOfObject(obj, k) {
    for(let [key, value] of Object.entries(obj)) {
        //console.log(key, value)
        if(key === k)
            return value.languages;
    }
}

async function RenderLanguages() {
    const uName = document.getElementById('name').value;
    let languages = getValueOfObject(await GetUser(uName), 'ranks'), output = `<div class="result" id="languages">
    <table>
        <caption>${uName}</caption>
        <tr>
            <th>Nyelv</th>
            <th>Rank</th>
            <th>Pontszám</th>
        </tr>`;
    console.log(languages);
    
    for(let [key, value] of Object.entries(languages)) {
       output += `
            <tr>
                <td>${key}</td>
                <td>${value.rank}</td>
                <td>${value.score}</td>
            </tr>`;
    }
    
    output += `</table></div>`;
    document.querySelector('#container').innerHTML += output;
}
