
/** В данном файле содержится основные функции работы игры, такие как постоянное обновление контекста, загрузка ресурсов и тд
и тд
*  **/

let canvas = document.getElementById('game_scene');
let ctx = canvas.getContext('2d');

let flyImage = new Image();
flyImage.src = 'img/small_fly.png'
let clap = new Audio('sounds/clap.wav')

let maxFlies = 20;
let minFlies = 3;
let selectedNumberFlies = minFlies;

let flies = []
let playGame = false;

let endTime;

let username = 'Player'

let showResult = false;

function createFlies() {
    for (let i = 0; i < selectedNumberFlies; i++)
    {
        flies[i] = createFly();
    }

}

function createFly() {
    return new Fly(flyImage,0, canvas, getRandomIntInclusive(20, canvas.width - 20), getRandomIntInclusive(20, canvas.height -20))
}

function addFly() {
    let fly = createFly()
    flies.push(fly);

}

function removeFly() {
    flies.pop();

}

function init() {
    window.requestAnimationFrame(draw);
    createFlies();
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function createSpeedFli() {
    // return getRandomIntInclusive(1, 5);
    return 0;

}

function startFlies() {
    for (let i in flies) {
        flies[i].speed = createSpeedFli();
    }
}

function stopFlies() {
    for (let i in flies) {
        flies[i].speed = 0;
    }
}



canvas.addEventListener('click', (e) => {
    if (!playGame)
        return

    clap.play();
    const pos = {
        x: e.clientX - canvas.getBoundingClientRect().left,
        y: e.clientY - canvas.getBoundingClientRect().top
      };
    let new_flies = []
    for (let i in flies) {
        if (!flies[i].isClicked(pos.x, pos.y)) {
            new_flies.push(flies[i])
        }
    }
    flies = new_flies;
    if (!flies.length)
    {
        endTime = document.getElementById("timer").innerHTML;
        endGame();
    }

})

function startGame() {
    if (!flies.length || playGame)
        return;
    playGame = true;
    startFlies();
    refreshTimer();
    startTimer();

}

function restartGame() {
    createFlies();
    stopTimer();
    playGame = false;
    showResult = false;

}


function endGame() {
    stopFlies();
    stopTimer();
    playGame = false;
    let bestResult = getBestResultForCurrentNumberFlies(selectedNumberFlies);
    if (bestResult === undefined || bestResult > parseFloat(endTime))
        $('#write_result').dialog("open");
    else {
        showResult = true;

    }

}

function draw() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    if (showResult) {
        ctx.font = "30pt Calibri";
        ctx.textAlign = 'center';
        ctx.fillText(`${selectedNumberFlies} мухи за ${endTime} с.`, canvas.width / 2, canvas.height / 3);
    }
    for (let i in flies){
        ctx.drawImage(flies[i].image, flies[i].pos_x, flies[i].pos_y);
        flies[i].move();
    }
    window.requestAnimationFrame(draw);
}


function writeResult() {
    username = $('#nick').val();
    addToStorage(username, selectedNumberFlies, endTime);
    $('#write_result').dialog("close");

}