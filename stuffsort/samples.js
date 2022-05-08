mcuList = [];

function getMCUHttpRequest() {

    Promise.all([
        fetch(`https://mcuapi.herokuapp.com/api/v1/movies`),
        fetch(`https://mcuapi.herokuapp.com/api/v1/tvshows`)
    ])
        .then(([moviesResponse, showsResponse]) => {
            return Promise.all([moviesResponse.json(), showsResponse.json()])
        })
        .then(([moviesJSON, showsJSON]) => handleMCUData(moviesJSON, showsJSON))
        .catch(x => console.log('err', x));
}

function handleMCUData(moviesJSON, showsJSON) {
    mcuStuff = [...moviesJSON.data, ...showsJSON.data];

    mcuStuff.filter(m => m.release_date)

    mcuList = mcuStuff
        .filter(m => (m.release_date !== null) && (new Date(m.release_date) < Date.now()))
        .map(m => {
            return `<img src="${m.cover_url}" width="150px"><br><span class="name-label">${m.title.toUpperCase()}</span>`;
        });
}

getMCUHttpRequest();