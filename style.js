var counterElement = document.getElementById("counter");
var incrementElement = document.getElementById("increment");
var decrementElement = document.getElementById("decrement");
var resetElement = document.getElementById("reset");

var counterValue = 0;

incrementElement.addEventListener("click", function(){
    counterValue = counterValue + 1;
    console.log(typeof(counterElement.textContent));
    counterElement.textContent = counterValue
})

decrementElement.addEventListener("click", function(){
    if(counterValue>0){
        counterValue = counterValue - 1;
        counterElement.textContent = counterValue
    }
})
resetElement.addEventListener("click", function(){
    counterValue = 0;
    counterElement.textContent = counterValue
})
