var i = 0;
var txt = document.getElementById("typewriter").innerText; /* The text */
document.getElementById("typewriter").innerHTML = "";
var speed = 40; /* The speed/duration of the effect in milliseconds */
typeWriter();
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        speed = speed * (1.02);
    }
}