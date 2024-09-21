
const btn1 = document.getElementById('square1');
const btn2 = document.getElementById('square2');

btn1.onclick = function() {
    btn1.style.visibility = "hidden";
    btn2.style.visibility = "visible";
};

btn2.onclick = function() {
    btn2.style.visibility = "hidden";
    btn1.style.visibility = "visible";
};