var display = document.getElementById('resultP');
var displayDrink = document.getElementById('displayDrink');
var displayAmounts = document.getElementById('displayAmounts');

const cups = document.querySelectorAll('.cup-counter');

//calculateBedTime
function calculateBedTime() {
    var t1 = 5.7, t2 = 6, t3 = 7.5;

    //get time
    var currentTime = new Date();
    //calculate new bedtime
    var bedTime=Math.round((6*Math.log(indexValue/45))/(Math.log(2)));


    //output new bedtime
    currentTime.setHours(currentTime.getHours() + bedTime);

    if (currentTime.getHours() > 11) {
        document.getElementById("ampm").innerText = "pm";
        currentTime.setHours(currentTime.getHours()-12);
    } else {
        if(currentTime.getHours()==0) currentTime.setHours(12);
        document.getElementById("ampm").innerText = "am";
    }
    document.getElementById("bedtime").innerText = currentTime.getHours().toString() + ":" + String(currentTime.getMinutes()).padStart(2,"0");
}

//shows the rest of the page when yes button is clicked
function showAll() {
    document.getElementById("limit").style.visibility = "collapse";
    document.getElementById("calculateC").style.visibility= "visible";
}


//our main function that will handle
var getMg = document.getElementById("choices");
var index, indexValue;
//store value
function calculateC(){
    index = getMg.options[getMg.selectedIndex];
    indexValue = getMg.options[getMg.selectedIndex].value;
    let weight=document.getElementById("weight").value;
    // let kgvalue = weight*2.2;

    var outputCLimit = Math.round(weight*2.72);
    var outputMaxCups = outputCLimit/indexValue;

    document.getElementById('result').style.visibility="visible";
    display.innerText=outputCLimit.toString();
    displayDrink.innerText=index.innerText;
    displayAmounts.innerText = (outputMaxCups.toFixed(2)).toString();
    calculateBedTime();
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