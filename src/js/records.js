/** Управление локальным хранилещем
 * кол-во мух: {nickname, time} **/

function addToStorage(nickname, countFlies, time) {
    window.localStorage.setItem(countFlies, JSON.stringify({nickname: nickname, time: time}));

}

function getBestResultForCurrentNumberFlies(countFlies) {
    let note = JSON.parse(localStorage.getItem(countFlies));
    if (note)
        return note.time;

}

function clearRecords() {
    window.localStorage.clear();
}

function makeTableRecords() {


}

