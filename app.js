
const btn1 = document.getElementById('square1');
const btn2 = document.getElementById('square2');
const btn3 = document.getElementById('square3');
const btn4 = document.getElementById('square4');
const btn5 = document.getElementById('square5');

let challengeText = document.getElementById('challenge-text');

let btnsClicked = 0;
let orderCounter = 0;

function nextGame() {
    challengeText.innerHTML = "Current Challenge: click in the right order!";
    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    btn4.style.visibility = "visible";
    btn5.style.visibility = "visible";
};

btn1.onclick = function() {
    if (btnsClicked < 10 && orderCounter === 0) {
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "visible";
        console.log(btnsClicked);
        btnsClicked++;
    };
    if(orderCounter === 0 && btnsClicked >= 10) {
        btn1.style.visibility = "hidden";
        orderCounter++;
    } else if ( btnsClicked > 10 ) {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        btn5.style.visibility = "visible";
        orderCounter = 0;
    };
};

btn2.onclick = function() {
    if (btnsClicked < 11 && orderCounter === 0) {
        btn2.style.visibility = "hidden";
        btn1.style.visibility = "visible";
        console.log(btnsClicked);
        btnsClicked++;
        if (btnsClicked === 10) { nextGame() };
    };
    if(orderCounter === 1) {
        btn2.style.visibility = "hidden";
        orderCounter++;
    } else if ( btnsClicked > 10 ) {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        btn5.style.visibility = "visible";
        orderCounter = 0;
    };
};

btn3.onclick = function() {
    if(orderCounter === 2) {
        btn3.style.visibility = "hidden";
        orderCounter++;
    } else {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        btn5.style.visibility = "visible";
        orderCounter = 0;
    };
};

btn4.onclick = function() {
    if(orderCounter === 3) {
        btn4.style.visibility = "hidden";
        orderCounter++;
    } else {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        btn5.style.visibility = "visible";
        orderCounter = 0;
    };
};

btn5.onclick = function() {
    if(orderCounter === 4) {
        btn5.style.visibility = "hidden";
        orderCounter++;
        challengeText.innerHTML = "you win!"
    } else {
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        btn5.style.visibility = "visible";
        orderCounter = 0;
    };
};


