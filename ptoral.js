var numClicks = 0;
var xTemp = [];
var yTemp = [];
var runningProfit = 0;
function revealProfit(input){
	numClicks++;
	// numClicks means amount of financial quarters

	//This blob of code calculates the formula given
	var StochasticValue = Math.random();
	var userinput = input;
	var UserMinusStoch = input - StochasticValue;
	var squared = Math.pow(2,UserMinusStoch);
	var profit = 1 - squared;
	if(profit <= 0){
		profit=profit*-1;
	}

	// Storing the running profit and profit averag
	runningProfit = profit + runningProfit;
	var profitAverage = runningProfit/numClicks;

	//Storing the "quarters" and the current quarter profit to be displayed on the graph
	xTemp.push(numClicks);
	yTemp.push(profit);

	//Graphing object to be given to the graphing framework
   	var pricedata = [
   {
   	x: xTemp,
   	y: yTemp,
   	type: 'scatter'
   }
   ];
    Plotly.newPlot('PriceGraph', pricedata);

    //Displaying the info
    var currentQuarter = document.getElementById("currentQuarter");
    var quarterProfit = document.getElementById("quarterProfit");
    var profitAvg = document.getElementById("profitAverage");
    var runningProf = document.getElementById("runningProfit");
    currentQuarter.innerHTML = "Current Quarter: " + numClicks;
    quarterProfit.innerHTML = "Quarter " + numClicks + " Profit: $" +profit;
    profitAvg.innerHTML = "Average Profit per Quarter: $" + profitAverage;
    runningProf.innerHTML = "Total Profit: $" + runningProfit;


}
