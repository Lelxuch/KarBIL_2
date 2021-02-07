window.onload = function(){
    let pr = document.getElementById('preloader');
    pr.style.display = "none";
}

var intro_title_1 = document.getElementById('intro_title_1');
var intro_title_2 = document.getElementById('intro_title_2');
function first(){
    setTimeout( function(){
        intro_title_1.style.opacity = "1";
    }, 300 );
}
function second(){
    setTimeout( function(){
        intro_title_1.style.opacity = "0";
    }, 1500 );
}
function third(){
    setTimeout( function(){
        intro_title_2.style.opacity = "1";
    }, 2300 );
}
first();
second();
third();