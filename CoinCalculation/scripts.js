/* ~~~~~~~~~~~~~~~~~~~~~ JavaScript Document for BBC Task By Carlene J. Conner ~~~~~~~~~~~~~~~~~~~~ */

/** 
 A simple application that given a number of pennies will calculate the minimum number of Sterling coins needed to make that amount.
 Eg. 123p = 1 x ¬£1, 1 x 20p, 1 x 2p, 1 x 1p
 Account for only the common £2, £1, 50p, 20p, 2p and 1p coins. 
*/		

/* On load */
window.onload 	= startUp;

/* ~~~~~~~~~~~~~~~~~~~~~ Global Variables ~~~~~~~~~~~~~~~~~~~~~ */

var originalNo	= 0; // value understood to entered by user e.g. £2.99 is seen as 299
var currentNo 	= 0; // original number minus any total values worked out thus far
var currentCoin = 0; // current coin value
var amount 		= 0; // amount of coins
var value		= 0; // total value of current coin times amount of coins 


/* ~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~ */

/* Hide coins div on load as button has not been presssed yet therefore no coins to show */
function startUp()
{
	// grab div
	var coinsD 	= document.getElementById("coins");
	// hide div
	coinsD.style.display = "none";
}
 
/* Envoked by calculate button  */
function coins ()
{	
	
	// grab the value input by the user
	currentNo 	= document.getElementById("calculateCoins").value;
	// assign value
	originalNo 	= currentNo;
	
	// hide div again - no coins to show	
	var coinsD 	= document.getElementById("coins");
	// hide div
	coinsD.style.display = "none";
	
	/* ~~~~~~~~~~~~~~~~~~~~~ Check input is valid ~~~~~~~~~~~~~~~~~~~~~ */
	
	// set up check
	var error = false;
	
	// data entered?
	if(currentNo == "" || (currentNo == 0))
	{
		alert("Please enter a number");
		error = true;
	}

	// check that the value is not a negative number
	if(currentNo < 0 && (currentNo != ""))
	{
		alert("Please enter a number greater than 0");
		error = true;
	} 
	
	// check no special characters are used
	if(currentNo.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) && currentNo.match(/[0-9]/))
	{
		alert("Please do not use special characters e.g. [!,@,#,$,%,^,&,*,?,_,~,-,(,).");
		error = true;
	}

	// check a number has been entered
	if(!currentNo.match(/[0-9]/)  && (currentNo != ""))
	{
		alert("Please enter a number");
		error = true;
	}
	
	// check no unwanted letters are used
	if( (currentNo.match(/[A-Z]/) && currentNo.match(/[0-9]/)))
	{
		alert("Please do not use any letters apart from p in lowercase.");
		error = true;	
	}
	
	
	// check no unwanted letters are used
	if( (currentNo.match(/[a-o,q-z]/) && currentNo.match(/[0-9]/)))
	{
		alert("Please do not use any letters apart from p in lowercase.");
		error = true;	
	}
	
	
	
	// an error has not occured so there are coins to show
	if (error == false)
	{
		// grab div
		var coinsD 	= document.getElementById("coins");
		// show div
		coinsD.style.display 	= "block";
	}
	
	/* ~~~~~~~~~~~~~~~~~~~~~ Check input is in correct format ~~~~~~~~~~~~~~~~~~~~~ */
	
	// remove p
	currentNo = currentNo.replace('p','');	
	
	// check if what has been entered in pounds only e.g. £2 
	if(currentNo.match(/[£]/) &&(!currentNo.match(/[.]/)))
	{
		// remove unwanted symbols
		currentNo = currentNo.replace('£','');
		
		// add two 0s to deal in pence
		currentNo = currentNo + "00";
	} 
	
	// check if there are decimals e.g. 3.98
	if (currentNo.match(/[.]/))
	{
		// remove unwanted symbols
		currentNo = currentNo.replace('£','');
		
		// round to 2 decimal places e.g. 2.341 will give 234p
		currentNo = Math.round(currentNo * Math.pow(10, 2)) // reference http://forums.devarticles.com/javascript-development-22/javascript-to-round-to-2-decimal-places-36190.html
	}
	
	// this is what is understood to have been entered
	originalNo = currentNo;
	
		

	// reset values - button can be pressed more than once
 	document.getElementById("200").innerHTML	= "£2 x ";	
	document.getElementById("100").innerHTML	= "£1 x ";	
	document.getElementById("50").innerHTML 	= "50p x ";	
	document.getElementById("20").innerHTML 	= "20p x ";	
	document.getElementById("2").innerHTML 		= "2p x ";	
	document.getElementById("1").innerHTML 		= "1p x ";
	
	/* ~~~~~~~~~~~~~~~~~~~~~ Array ~~~~~~~~~~~~~~~~~~~~~ */
	// set up array
	var coinAmount = ["200", "100", "50", "20", "2", "1"];
	
	// envoke the calculate function with the different coin amounts
	for (var i = 0; i < coinAmount.length; i++)
	{
		// assign coin value
		currentCoin = (coinAmount[i]);
		// envoke calculate function
		calculate();
	}
		// inform user of what is assumed they have entered
		document.getElementById("Number").innerHTML ="The amount you entered in pence: "+originalNo+"p";
}

/* ~~~~~~~~~~~~~~~~~~~~~ Calculate ~~~~~~~~~~~~~~~~~~~~~ */

/*Calculation of coins */
function calculate()
{
	// amount of coins = how many times does the current coin devide into the entered value
	amount = Math.floor(currentNo /currentCoin); 
	// e.g. 2 =				450   /		200
	
	// check that there were any coins else, no point in doing the following
	if(amount > 0) 
	{
		// multipy current coin by amount of coins to give the new value
		value = currentCoin * amount;
		//	400		200			2
		// minus the value of the coins from the current number to give the new current number - the new current number willl be used if the calculate funtion is run again (current coin will be of a different value e.g. 100)
		currentNo = currentNo - value;
		//	50		450			400	
		// add to div
		document.getElementById(currentCoin).innerHTML += amount;
	}
	else 
	{
		// there were no coins for the currentCoin value
		amount = 0;
		// add to div
		document.getElementById(currentCoin).innerHTML += amount;
	}
}