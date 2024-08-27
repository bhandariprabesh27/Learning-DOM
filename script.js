//Accessing Elements
var frstimg = document.querySelector("#abcd");
var secndimg = document.querySelector(".eddf");
var firsth3 = document.querySelector("#abcd");
var secndh3 = document.querySelector(".abcd");

//Eg: Manam hami snga html ma dherai h3 xa ra JS ma document.querySelector("h3") garda first ko matra select hunxa. Yo case ma sabai h3 lai select garna ko lagi document.querySelectorAll("h3") garnu parxa.

//Modifying Elements - textContent, innerHTML
var selectionOFh1 = document.querySelector("h1");
selectionOFh1.textContent = "I am Prabesh";

var selectionOFh2 = document.querySelector("h2");
selectionOFh2.innerHTML = "<i>Hello Sir</i>";

var selectionOfh5 = document.querySelector("h5");
selectionOfh5.textContent += "May I come in?";

var selectionOFh4 = document.querySelector("h4");
selectionOFh4.innerHTML += "<i> ,Hello JI</i>";
