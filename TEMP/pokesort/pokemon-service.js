async function makeRequest(url) {
    const promise = await fetch(url)
    const json = await promise.json()
    return json;
}

async function getAllPokemon() {
    const data = await makeRequest(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`);
    return data.results;
}

// //single type, string
// async function getPokemonByType(pokemonType) {
//     const typeData = await makeRequest(`https://pokeapi.co/api/v2/type/${pokemonType}`)
//     const pokemonList = filterValid(typeData.pokemon.map(x => x.pokemon));
//     console.log(pokemonList);
//     return formatPokemonData(pokemonList);
// }

function filterValid(pokemonList) {
    const baseForms = filterRange(pokemonList, 1, 9999)
    const megaForms = filterMega(pokemonList);
    const alolanForms = filterAlola(pokemonList);
    const galarianForms = filterGalar(pokemonList);
    const gmaxForms = filterGmax(pokemonList);

    return [
        ...baseForms,
        ...megaForms,
        ...alolanForms,
        ...galarianForms,
        ...gmaxForms,
    ];
}

function filterMega(pokemonList) {
    return pokemonList.filter(x => {
        return x.name.includes('-mega')
            || x.name.includes('-primal')
            || x.name.includes('-unbound');
    });
}

function filterAlola(pokemonList) {
    return pokemonList.filter(x => {
        return x.name.includes('-alola')
            && !x.name.includes('-totem-alola') // raticate-totem-alola
            && !x.name.includes('-alola-cap'); // pikachu-alola-cap
    });
}

function filterGalar(pokemonList) {
    return pokemonList.filter(x => {
        return x.name.includes('-galar')
            && !x.name.includes('darmanitan-galar-zen')
            && !x.name.includes('toxtricity-low-key-gmax');
    });
}

function filterGmax(pokemonList) {
    return pokemonList.filter(x => {
        return (x.name.includes('-gmax') || x.name.includes('-eternamax'))
            && !x.name.includes('toxtricity-low-key-gmax');
    });
}

function filterRange(pokemonList, start, end) {
    return pokemonList.filter(x => {
        id = getIdFromUrl(x.url);
        return id >= start && id <= end;
    });
}

function filterById(pokemonList, id) {
    return pokemonList.filter(x => id == getIdFromUrl(x.url));
}

async function getPokemonByGeneration(gen) {
    return formatPokemonData(await getPokemonDataByGeneration(gen));
}
async function getPokemonDataByGeneration(gen) {
    const allPokemon = await getAllPokemon();

    const gen1 = filterRange(allPokemon, 1, 151);
    const gen2 = filterRange(allPokemon, 152, 251);
    const gen3 = filterRange(allPokemon, 252, 386);
    const gen4 = filterRange(allPokemon, 387, 493);
    const gen5 = filterRange(allPokemon, 494, 649);
    const gen6 = filterRange(allPokemon, 650, 721);
    const gen7 = filterRange(allPokemon, 722, 809);
    const gen8 = filterRange(allPokemon, 810, 898);



    const baseForms = filterRange(allPokemon, 1, 9999)
    const megaForms = filterMega(allPokemon);
    const alolanForms = filterAlola(allPokemon);
    const galarianForms = filterGalar(allPokemon);
    const gmaxForms = filterGmax(allPokemon);


    switch (gen) {
        case 1:
            return [...gen1];
        case 2:
            return [...gen2];
        case 3:
            return [...gen3];
        case 4:
            return [...gen4];
        case 5:
            return [...gen5];
        case 6:
            return [...gen6, ...megaForms];
        case 7:
            return [...gen7, ...alolanForms];
        case 8:
            return [...gen8, ...galarianForms, ...gmaxForms];
        default:
            return [
                ...baseForms,
                ...megaForms,
                ...alolanForms,
                ...galarianForms,
                ...gmaxForms
            ];
    }
}


function formatPokemonData(data) {
    return data.map(p => {
        id = getIdFromUrl(p.url);
        nameLabel = formatName(p.name);
        return {
            display: `<div class="pokebox">${getAlternateSprites(id)}<br><span class="name-label">${nameLabel}</span></div>`,
            label: nameLabel
        }
    });
}

function getIdFromUrl(url) {
    return Number(url.split('/').at(-2));
}


