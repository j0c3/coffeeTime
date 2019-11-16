
const cups = document.querySelectorAll('.cup-counter');
const initialCaf = 0;
const cafResult = 0;
let time = 0;
var today = new Date();
let difference = 0;

//shows the rest of the page if
function showAll(){
    console.log("start");
    //reveals the rest
    document.getElementById("hide").style.display= "block";
    document.getElementById("nope").style.display= "none";
    
    //hide the age question
    document.getElementsByClassName("over18")[0].style.display= "none";
}

//our main function that will handle
function log(){
    //store value
    time = document.getElementById('bedtime').value;
    let currentHour = parseInt(today.getHours());
    let currentMin = parseInt(today.getMinutes());
    difference = Math.abs(parseInt(time,0)- currentHour);
    if(clicks > 0){
        let amount = clicks * 90;
        console.log("hello friend")
        var coffeeResult = metabolize(difference,amount);
    }
    //dont do this (opens up a new page)
    document.write("hello test" + coffeeResult);

}

function underAge(){
    document.getElementById("nope").innerHTML = "sorry you're too young to use this";
}
var clicks = 0;
function cupCounter(){

    clicks ++;
    cups.textContent = clicks;
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