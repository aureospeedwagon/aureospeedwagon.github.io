all = [];
tree = [];
choice = 0;
n = 0
stuffList = [];
showAll = false;


function init() {
    const locals = getLocalStorage();
    if (locals) {
        all = locals.all;
        tree = locals.tree;
        choice = locals.choice;
        n = locals.n;
        stuffList = locals.stuffList;
        document.getElementById('stuff-input').value = stuffList.join('\n');
        document.getElementById('percent').innerHTML = `${n - all.length - 1}/${n}`;
    } else {

        stuffList = document.getElementById('stuff-input').value.split('\n');
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
        document.getElementById('current').innerHTML = getDataById(tree[1]);
        document.getElementById('option').innerHTML = getDataById(choice);
    } else {
        document.getElementById('current').style.visibility = "hidden";
        document.getElementById('option').style.visibility = "hidden";
    }
    document.getElementById('results').innerHTML = resultDisplay();
}

function reset() {
    localStorage.removeItem('sort-stuff');
    document.getElementById('stuff-input').value = '';
    init();
}


function start() {
    localStorage.removeItem('sort-stuff');
    init();
}

function pokemon() {
    localStorage.removeItem('sort-stuff');
    document.getElementById('stuff-input').value = pokemonList.join('\n');
    init();
}

function mcu() {
    localStorage.removeItem('sort-stuff');
    document.getElementById('stuff-input').value = mcuList.join('\n');
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
        document.getElementById('current').innerHTML = getDataById(currentBranch[1]);
    }
}

function handleLess() {
    if (currentBranch[0].length === 0) {
        currentBranch[0] = [[], choice, []];
        handleNewCurrent();
    } else {
        currentBranch = currentBranch[0];
        document.getElementById('current').innerHTML = getDataById(currentBranch[1]);
    }
}

function handleNewCurrent() {
    document.getElementById('results').innerHTML = resultDisplay();
    document.getElementById('percent').innerHTML = `${n - all.length}/${n}`;

    choice = goRando();
    tree = rebalanceTree();
    currentBranch = tree;
    if (choice != undefined) {
        document.getElementById('current').innerHTML = getDataById(tree[1]);
        document.getElementById('option').innerHTML = getDataById(choice);
    } else {
        document.getElementById('current').style.visibility = "hidden";
        document.getElementById('option').style.visibility = "hidden";
    }

    setLocalStorage();
}

function setLocalStorage() {
    localStorage.setItem('sort-stuff', JSON.stringify({
        tree,
        all,
        choice,
        n,
        stuffList
    }));
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('sort-stuff'));
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
    return thing.map((id, rank) => getResultHtml(id, rank)).join('<br>');
}

function redoResults() {
    showAll = !showAll;
    document.getElementById('results').innerHTML = resultDisplay();
}

function getDataById(id) {
    return `<span>${stuffList[id]}</span>`;
}

function getResultHtml(id, rank) {
    return `<div class='result'>
                <span class="ranking-label">#${rank + 1}</span>
                <br>
                ${getDataById(id)}
            </div>`
}

init();