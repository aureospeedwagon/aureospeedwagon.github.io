all = [];
tree = [];
choice = 0;
n = 0
stuffList = [];
showAll = false;
showImages = false;

function init() {
    const locals = getLocalStorage();
    if (locals) {
        all = locals.all;
        tree = locals.tree;
        choice = locals.choice;
        n = locals.n;
        stuffList = locals.stuffList;
        document.getElementById('percent').innerHTML = `${n - all.length - 1}/${n}`;
    } else {
        all = stuffList.map((v,i)=>i);
        n = all.length;
        // console.log(all.length);

        const initialCurrent = goRando();
        tree = [[], initialCurrent, []];
        document.getElementById('percent').innerHTML = `1/${n}`;

        choice = goRando();
        setLocalStorage();
    }

    currentBranch = tree;

    document.getElementById('current').style.visibility = "visible";
    document.getElementById('option').style.visibility = "visible";

    if (choice != undefined) {
        document.getElementById('current').innerHTML = getDisplayById(tree[1]);
        document.getElementById('option').innerHTML = getDisplayById(choice);
    } else {
        document.getElementById('current').style.visibility = "hidden";
        document.getElementById('option').style.visibility = "hidden";
    }
    document.getElementById('results').innerHTML = resultDisplay();
}

// function start() {
//     //TODO get selections
//     localStorage.removeItem('poke-stuff');
//     init();
// }

async function pokemon() {
    stuffList = await getPokemonByGeneration();
    localStorage.removeItem('poke-stuff');
    init();
}

async function water() {
    stuffList = await getPokemonByType('water');
    localStorage.removeItem('poke-stuff');
    init();
}

async function gen(x) {
    stuffList = await getPokemonByGeneration(x);
    localStorage.removeItem('poke-stuff');
    init();
}

function goRando() {
    const index = Math.floor(Math.random() * all.length);
    const rando = all[index];
    all.splice(index, 1);
    return rando;
}


function handleMore() {
    if (currentBranch[2].length === 0) {
        currentBranch[2] = [[], choice, []];
        handleNewCurrent();
    } else {
        currentBranch = currentBranch[2];
        document.getElementById('current').innerHTML = getDisplayById(currentBranch[1]);
    }
}

function handleLess() {
    if (currentBranch[0].length === 0) {
        currentBranch[0] = [[], choice, []];
        handleNewCurrent();
    } else {
        currentBranch = currentBranch[0];
        document.getElementById('current').innerHTML = getDisplayById(currentBranch[1]);
    }
}

function handleNewCurrent() {
    document.getElementById('results').innerHTML = resultDisplay();
    document.getElementById('percent').innerHTML = `${n - all.length}/${n}`;

    choice = goRando();
    tree = rebalanceTree();
    currentBranch = tree;
    if (choice != undefined) {
        document.getElementById('current').innerHTML = getDisplayById(tree[1]);
        document.getElementById('option').innerHTML = getDisplayById(choice);
    } else {
        document.getElementById('current').style.visibility = "hidden";
        document.getElementById('option').style.visibility = "hidden";
    }

    setLocalStorage();
}

function setLocalStorage() {
    localStorage.setItem('poke-stuff', JSON.stringify({
        tree,
        all,
        choice,
        n,
        stuffList
    }));
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('poke-stuff'));
}

function rebalanceTree() {
    const orderedList = results();
    return balanceBranch(orderedList);
}

function balanceBranch(array) {
    if (array.length === 0) {
        return [];
    }
    if (array.length === 1) {
        return [[], array[0], []];
    }

    const index = Math.floor(array.length / 2)
    const front = array.slice(0, index)
    const back = array.slice(index + 1);

    return [balanceBranch(front), array[index], balanceBranch(back)]
}

function results() {
    return tree.toString().split(',').filter(x => x);
}

function resultDisplay() {
    let thing = results();
    thing.reverse();
    if (!showAll) {
        thing = thing.slice(0, 10);
    }

    return thing.map((id, rank) => getResultHtml(id, rank, showImages)).join('<br>');
}

function redoResultShowAll() {
    showAll = !showAll;
    document.getElementById('results').innerHTML = resultDisplay();
}

function redoResultShowImages() {
    showImages = !showImages;
    document.getElementById('results').innerHTML = resultDisplay();
    document.getElementById('results').className = showImages ? "show-result-images" : "hide-result-images";
}

function getDisplayById(id) {
    return stuffList[id].display;
}
function getLabelById(id) {
    return stuffList[id].label;
}

function getResultHtml(id, rank, image) {
    if (image) {
        return `<div class='result'>
        <span class="ranking-label">#${rank + 1}</span>
        <br>
        ${getDisplayById(id)}
        </div>`
    } else {
        return `<span class="ranking-label">#${rank + 1} ${getLabelById(id)}</span><br>`
    }
}

init();