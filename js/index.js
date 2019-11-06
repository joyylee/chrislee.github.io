var i = 0;
var txt = 'Scroll down to learn more about me!'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
};

window.addEventListener('load', function() {
    typeWriter();
}, false);