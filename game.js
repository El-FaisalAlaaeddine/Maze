window.addEventListener ("load", function(){
var boolean = false;
var score = 0;
var stat = document.getElementById('status')
var initial = document.getElementById("start")
var ending = document.getElementById('end')
var elements = document.getElementsByClassName('boundary');
var game = document.getElementById('game')
var hover = 0;
var move = 0

function crossedBorder(){
    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#ff8888"
    }
    score -= 10
    stat.innerHTML = "Oops, You lost :( , Click S to start again, Current score "+ score
}
    function reTry(){
        for(var i = 0; i < elements.length; i++)
        {
             elements[i].style.backgroundColor = "#eeeeee"
            }  
            stat.innerHTML = 'This is a reset, last score was: ' + score
            boolean = true
     }
   

   
})

