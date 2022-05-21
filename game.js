window.addEventListener ("load", function(){
var boolean = false;
var score = 0;
var stat = document.getElementById('status')
var initial = document.getElementById("start")
var ending = document.getElementById('end')
var elements = document.getElementsByClassName('boundary');
var game = document.getElementById('game')
var hover = 0;


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
        
        function alertMSG(){
            alert("Caught you, No Cheating :)")
        }

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
            
        })

        ending.addEventListener("mouseover", Winning)

   
})

