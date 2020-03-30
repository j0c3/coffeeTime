
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


    //output new bedtime and fill chart
    var copy = currentTime;
    fillChart(copy,indexValue,bedTime);
    currentTime.setHours(currentTime.getHours() + bedTime);


    // document.getElementById("bedtime").innerText = currentTime.getHours().toString() + ":" + String(currentTime.getMinutes()).padStart(2,"0");
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

function finalAmount(prevDose,eTime){
    return prevDose/Math.pow(2,eTime/6);
}
var tTable = [], dTable=[];
function fillChart(hours, dose, bedtime) {
    //fill out chart
    let i = 0;
    for(;i<bedtime+4;i++) {

        tTable.push(hours.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"));
        dTable.push(finalAmount(dose,i));
        hours.setHours(hours.getHours() + 1);
    }
    document.getElementById("bedtime").innerText = tTable[bedtime].toString();



    drawChart();
}
// load frozen version 44
google.charts.load('44', {
    callback: drawChart,
    packages: ['corechart']
});


function drawChart(){
    // create DataTable
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Time');
    // data.addColumn('number', 'Id');
    data.addColumn('number', 'mg');

    // load data

    for (var i = 0; i < tTable.length; i++) {
        var row = [tTable[i], dTable[i]];
        data.addRow(row);
    }

    var options = {

        hAxis: {
            title:'Time'
        },
        vAxis:{
            orientAngle: 30,
            title: "Caffeine left in body",
            // scaleType: tTable
        },
        pointsVisible: true
    };

    var chart = new  google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    tTable=[];
    dTable=[];
}


function underAge(){
    document.getElementById("nope").innerHTML = "sorry you're too young to use this";
}
let clicks = 0;
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