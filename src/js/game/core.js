
/** В данном файле содержится основные функции работы игры, такие как постоянное обновление контекста, загрузка ресурсов и тд
и тд
*  **/

let canvas = document.getElementById('game_scene');
let ctx = canvas.getContext('2d');

let flyImage = new Image();
let clap = new Audio('sounds/clap.wav')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


flyImage.src = 'img/small_fly.png'
let flies = []
for (let i = 0; i < 6; i++)
{
    flies[i] = new Fly(flyImage, canvas, getRandomIntInclusive(20, canvas.width - 20), getRandomIntInclusive(20, canvas.height -20))
}


canvas.addEventListener('click', (e) => {
    clap.play();
    const pos = {
        x: e.clientX - canvas.getBoundingClientRect().left,
        y: e.clientY - canvas.getBoundingClientRect().top
      };
    console.log(pos.x, pos.y)
    let new_flies = []
    for (let i in flies) {
        if (!flies[i].isClicked(pos.x, pos.y)) {
            new_flies.push(flies[i])
        }
    }
    flies = new_flies;
})


function init() {

    window.requestAnimationFrame(draw)


}

function draw() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    for (let i in flies){
        ctx.drawImage(flies[i].image, flies[i].pos_x, flies[i].pos_y);
        flies[i].move();
    }
    window.requestAnimationFrame(draw)
}
