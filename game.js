window.addEventListener ("load", function(){
var boolean = false;
var score = 0;
var stat = document.getElementById('status')
var initial = document.getElementById("start")
var ending = document.getElementById('end')
var elements = document.getElementsByClassName('boundary');
var game = document.getElementById('game')
var hover = 0;
var array = []

//for timing
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function crossedBorder(){
    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#ff8888"
    }
    score -= 10
    stat.innerHTML = "Oops, You lost :( , Click S to start again, Current score "+ score
    for(var i = 0; i < elements.length; i++){
        elements[i].removeEventListener('mouseover',crossedBorder)
    }
    
}
    function reTry(){
        for(var i = 0; i < elements.length; i++)
            {
             elements[i].style.backgroundColor = "#eeeeee"
            }  
            stat.innerHTML = 'This is a reset, last score was: ' + score
            boolean = true
     }
    function Winning(){
        if (boolean === true){
            score += 5
            stat.innerHTML = "Bravo!! You Won, Current score:  " + score;
            hover+=1
            if (hover === 1){
                ending.removeEventListener("mouseover", Winning)
                for(var i = 0; i < elements.length; i++){
                    elements[i].removeEventListener('mouseover',crossedBorder)
                }
            }
        }}
        function tick(){
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
                if (min >= 60) {
                    min = 0;
                    hrs++;
                }
            }
        }
        function add() {
            tick();
            document.getElementById('xxx').textContent = (hrs > 9 ? hrs : "0" + hrs) 
                     + ":" + (min > 9 ? min : "0" + min)
                        + ":" + (sec > 9 ? sec : "0" + sec);
            timer();
            before_score = document.getElementById('xxx').textContent;
            
            document.removeEventListener('mouseover',add)
        }
        function timer() {
            t = setTimeout(add, 1000);
        
        }
        function alertMSG(){
            alert("Caught you, No Cheating :)")
        }

        function lastTiming(){
            last_time = before_score;
            document.getElementById('yyy').innerHTML = last_time

        }

     /*  function bestTiming(){
            array.push(before_score)
            min = before_score;
            for (var i=0; i<array.length;i++){
                if (array[i].sec<min.sec){
                    min = array[i]
                }
            }
            document.getElementById('zzz').innerHTML = min  

        } */

        initial.addEventListener("click", function(){
                boolean = true;
                stat.innerHTML = "Current score: " + score
              
                game.addEventListener("mouseleave", function(){
                   alertMSG()
                })
                for(var i = 0; i < elements.length; i++){
                    elements[i].addEventListener("mouseover",crossedBorder);
                }
                
                initial.addEventListener("click",reTry)
                timer();
                initial.onclick = timer;
                
                elements.onmouseover = function() {
                    clearTimeout(t);
                    lastTiming()
                    bestTiming()
                    before_score = '00:00:00'
                                }
                  
                ending.onmouseover = function() {
                clearTimeout(t);
                lastTiming()
                bestTiming()
                
                } 
                
        initial.removeEventListener('click',timer)  
                                
        })
        ending.addEventListener("mouseover", Winning)

   
})

