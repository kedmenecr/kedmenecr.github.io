console.log("hello world")
var i = 0;
var i2 = 0;
var txt = 'Who am I?'; /* The text */
var txt2 = 'Who am I?'; /* The text */
var speed = 250; /* The speed/duration of the effect in milliseconds */

function clearBody() {
    setTimeout(() => {
        document.body.innerHTML = ''
        var par = document.createElement("span");
        var hereAnchro = document.createElement("a");
        hereAnchro.setAttribute('href', 'me.html');
        par.setAttribute("class", "blinking")
        hereAnchro.setAttribute("class", "blinking")
        var text = document.createTextNode("Find Out");
        var textHere = document.createTextNode("Here.");
        par.appendChild(text);
        hereAnchro.appendChild(textHere)
        document.body.appendChild(par);
        document.body.appendChild(hereAnchro);
    }, 2000);
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("me").innerHTML += txt.charAt(i);
        i++;
        document.getElementsByClassName("ext")[0].innerHTML += txt2.charAt(i2);
        console.log(document.getElementsByClassName("ext")[0].innerHTML, "document.getElementsByClassName")
        i2++;
        setTimeout(typeWriter, speed);
    } else {
        clearBody();
    }
}
typeWriter()