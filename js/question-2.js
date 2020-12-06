// QUESTION 2:

const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(gameUrl);

        const results = await response.json();

        const games = results.results;

        resultsContainer.innerHTML = "";

        for(let i = 0; i < games.length; i++) {
            console.log(games[i].name);
            console.log(games[i].rating);
            console.log(games[i].tags.length);
        
            if(i === 8) {
                break;
            }
        
        resultsContainer.innerHTML += `
        <div class="result">
            <h2> Name: ${games[i].name}</h2>
            <h2> Rating: ${games[i].rating}</h2>
            <h2> Tags: ${games[i].tags.length}</h2>
        </div>`;                             
       } 
    } catch (error) {
        console.log("An error occured");
        resultsContainer.innerHTML ="An error occured. Please try again later."
    }
}
 getGames();

