
const cups = document.querySelectorAll('.cup-counter');
const initialCaf = 0;
const cafResult = 0;
let time = 0;
var today = new Date();
let difference = 0;

//adding limits based on weight, caffeine tolerance and choice of drink
function pickDrink(){
    document.getElementById("drink-list").classList.toggle("show");
    //will close window when clicked outside
    window.onclick  = function (event) {
        if(!event.target.matches('.drop-drink-btn')){
            var drop = document.getElementsByClassName("drink-content");
            for(var i = 0; i < drop.length; i++){
                var openDrop = drop[i];
                if(openDrop.classList.contains('show')){
                    openDrop.classList.remove('show');
                }
            }
        }

    }
}//endCoffeeList



//shows the rest of the page when yes button is clicked
function showAll() {
    document.getElementById("limit").style.display = "none";
    document.getElementById("log").style.display= "inline-block";
    // document.getElementsByClassName("hidden")[0].style.display="none";
}

const display = document.getElementById('resultP');
const displayDrink = document.getElementById('displayDrink');
const displayAmounts = document.getElementById('displayAmounts');

//our main function that will handle
function log(){
    //store value
    var getMg = document.getElementById("choices");
    var index = getMg.options[getMg.selectedIndex];
    var indexValue = getMg.options[getMg.selectedIndex].value;

    let weight=document.getElementById("weight").value;
    let kgvalue = weight*2.2;

    var outputCLimit = Math.round(weight*2.72);
    var outputMaxCups = outputCLimit/indexValue;

    display.innerText=outputCLimit.toString();
    displayDrink.innerText=index.innerText;
    displayAmounts.innerText = (outputMaxCups.toFixed(2)).toString();

}

function underAge(){
    document.getElementById("nope").innerHTML = "sorry you're too young to use this";
}
var clicks = 0;
function cupCounter(){

    clicks ++;
    document.getElementById('cup-counter').value = clicks;
    // cups.textContent = clicks;
    return clicks;
}
function metabolize(bedtime, amount){
    const now = 0;//todays time
    while(bedtime > now){
        amount *= .87;
        bedtime --;
    }
    return amount;
}