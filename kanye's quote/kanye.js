const theUrl = "https://api.kanye.rest";
const quote = document.getElementById("quote");

function randomQuote(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var strr = JSON.parse(randomQuote());


 function showQuote(){
    quote.innerText = `${strr.quote}`;
    quote.style.color = "white";
    quote.style.fontSize = "larger"
 }
 showQuote();
 function change(){
    var x = JSON.parse(randomQuote());
    quote.innerText = `${x.quote}`;
 }

 window.onload=function(){
    document.getElementById("my_audio").play();
  }