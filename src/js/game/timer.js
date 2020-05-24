
let startTime = Date.now();

let interval;
let isCount = false;

function startTimer() {
    isCount = true;
    interval = setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        if (isCount)
        {
            document.getElementById("timer").innerHTML = ((elapsedTime / 1000).toFixed(1));
        }
    }, 100);

}

function stopTimer() {
    isCount = false;
    clearInterval(interval);
    document.getElementById("timer").innerHTML = '0.0';
}

function refreshTimer() {
    startTime = Date.now();
}
