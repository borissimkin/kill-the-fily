/** Управление локальным хранилещем **/

function addToStorage(nickname, countFlies, time) {
    window.localStorage.setItem(nickname, JSON.stringify({flies: countFlies, time: time}));

}

function getBestResultForCurrentNumberFlies(countFlies) {
    let timesCurrentFlies = []
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        let note = JSON.parse(localStorage.getItem(key));
        if (note.flies == countFlies) {
            timesCurrentFlies.push(parseFloat(note.time));
        }

    }

    timesCurrentFlies.sort(function(a, b){
        return a - b;
    });
    return timesCurrentFlies.pop();

}

function clearRecords() {
    window.localStorage.clear();
}

function makeTableRecords() {


}

