let defuserE = document.getElementById("defuser");
let timerE = document.getElementById("timer");

count = 10;
let intervalId = setInterval(function() {
    count = count - 1;
    timerE.textContent = count;

    if (count === 0) {
        timerE.textContent = "BOOM";
        clearInterval(intervalId);

    }
}, 1000);

defuserE.addEventListener("keydown", function(event) {
    let bombDefuser = defuserE.value;

    if (event.key === "Enter" && count !== 0 && bombDefuser === "defuse") {
        timerE.textContent = "Congrats! you did it";
        clearInterval(intervalId);

    }
});