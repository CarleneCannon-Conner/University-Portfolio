/* ~~~~~~~~~~~~~~~~~~~~~ JavaScript for Email Client ~~~~~~~~~~~~~~~~~~~~ */

/* OnLoad */
window.onload = startUp;

/* Global Variables */
var theScore   		= 0; 
var userID     		= "";
var personsName		= "";	
var to				= "";
var mailNumber 		= "";
var tempID			= "";
var tempDate		= "";
var tempSubject		= "";
var requestInbox 	= false;
var requestMessage 	= false;


/* ~~~~~~~~~~~~~~~~~~~~ Navigation ~~~~~~~~~~~~~~~~~~~~ */

/* Hide unwanted divs */
function startUp()
{
	// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var senderTD 	= document.getElementById("senderTemp");
	var mailTD 		= document.getElementById("mailMeTemp");
	var mailTP 		= document.getElementById("mailTemp");	
	var dateTP 		= document.getElementById("dateTemp");
	var subjectTP 	= document.getElementById("subjectTemp")	
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	welcomeD.style.display 	= "none";
	mailTD.style.display 	= "none";
	mailTP.style.display 	= "none";
	dateTP.style.display 	= "none";
	subjectTP.style.display = "none";
	inboxBD.style.display 	= "none";
	viewBD.style.display 	= "none";
	composeBD.style.display = "none";
	inboxD.style.display 	= "none";
	messageD.style.display 	= "none";
	registerD.style.display = "none";
	composeD.style.display 	= "none";
	replyD.style.display 	= "none";
	forwardD.style.display 	= "none";
	// show divs
	senderTD.style.display 	= "block";
	signinD.style.display 	= "block";
}

/* --> Register */
function goToRegister()
{
	// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	welcomeD.style.display 	= "none";
	inboxBD.style.display 	= "none";
	viewBD.style.display 	= "none";
	composeBD.style.display = "none";
	inboxD.style.display	= "none";
	messageD.style.display 	= "none";
	registerD.style.display = "none";
	signinD.style.display 	= "none";
	composeD.style.display 	= "none";
	replyD.style.display 	= "none";
	forwardD.style.display 	= "none";
	// show divs
	registerD.style.display = "block";
}

/* --> Sign-in */
function goToSignin()
{
	// same as start up
	startUp();
}

/* Register or Sign in --> Inbox */
function goToInbox()
{
	// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	viewBD.style.display 	= "none";
	composeBD.style.display = "none";
	messageD.style.display 	= "none";
	registerD.style.display = "none";
	signinD.style.display 	= "none";
	composeD.style.display 	= "none";
	replyD.style.display 	= "none";
	forwardD.style.display 	= "none";
	// show divs
	inboxBD.style.display 	= "block";
	inboxD.style.display 	= "block";
	welcomeD.style.display 	= "block";
}

/* --> Sign-in & reset values */
function logOut()
{
	// same as startUp
	startUp();
	// reset values
	javascript:location.reload(true);
}

/* --> compose */
function composeIt()
{
	// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	inboxBD.style.display 	= "none";
	viewBD.style.display 	= "none";
	inboxD.style.display 	= "none";
	messageD.style.display 	= "none";
	registerD.style.display = "none";
	signinD.style.display 	= "none";
	replyD.style.display 	= "none";
	forwardD.style.display 	= "none";
	
	// show divs
	welcomeD.style.display 	= "block";
	composeD.style.display 	= "block";
	composeBD.style.display = "block";
}

/* --> message */
function messageView()
{
	// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	inboxBD.style.display 	= "none";
	composeBD.style.display = "none";
	inboxD.style.display 	= "none";
	registerD.style.display = "none";
	signinD.style.display 	= "none";
	composeD.style.display 	= "none";
	replyD.style.display 	= "none";
	forwardD.style.display 	= "none";
	//view Divs
	welcomeD.style.display 	= "block";
	viewBD.style.display 	= "block";
	messageD.style.display 	= "block";
}

/* --> reply form */
function replyIt()
{
	// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	inboxBD.style.display 	= "none";
	viewBD.style.display 	= "none";
	composeD.style.display 	= "none";
	inboxD.style.display 	= "none";
	messageD.style.display 	= "none";
	registerD.style.display = "none";
	signinD.style.display 	= "none";
	forwardD.style.display 	= "none";
	//view Divs
	welcomeD.style.display 	= "block";
	replyD.style.display 	= "block";
	composeBD.style.display = "block";
}

/* --> forward form */
function forwardIt()
{
		// grab divs
	var welcomeD 	= document.getElementById("welcome");
	var inboxBD 	= document.getElementById("inboxBtn");
	var viewBD 		= document.getElementById("viewBtn");
	var composeBD 	= document.getElementById("composeBtn");
	var inboxD 		= document.getElementById("inboxBox");
	var messageD 	= document.getElementById("messageBox");
	var registerD 	= document.getElementById("register");
	var signinD 	= document.getElementById("signin");
	var composeD 	= document.getElementById("compose");
	var replyD 		= document.getElementById("reply");
	var forwardD 	= document.getElementById("forward");
	// hide divs
	inboxBD.style.display 	= "none";
	viewBD.style.display 	= "none";
	composeD.style.display 	= "none";
	inboxD.style.display 	= "none";
	messageD.style.display 	= "none";
	registerD.style.display = "none";
	signinD.style.display 	= "none";
	replyD.style.display 	= "none";
	//view Divs
	welcomeD.style.display 	= "block";
	forwardD.style.display 	= "block";
	composeBD.style.display = "block";	
}
	 
	
/* ~~~~~~~~~~~~~~~~~~~~ Register new user functions ~~~~~~~~~~~~~~~~~~~~ */

/* Register a new user */
function registerNew() 
{
	// grab data from form and alter to proper cases
		userID 	= document.forms[0].elements[0].value;
		userID 	= userID.toProperCase(this.value);
	var fName 	= document.forms[0].elements[1].value;
		fName 	= fName.toProperCase(this.value);
	var sName 	= document.forms[0].elements[2].value;
		sName 	= sName.toProperCase(this.value);
	var	pass1  	= document.forms[0].elements[3].value;
	var	pass2 	= document.forms[0].elements[4].value;
	

	// assign to url
	var url = "RegisterNewUser.php?userID="+userID+"&passWD="+pass1+"&Name="+fName+"&Surname="+sName;

	// check that all feilds are filled in and password strength is great enough
	if (userID == "") 	alert("Create a user ID")
	if (fName == "")	alert("Enter your first name")
	if (sName == "" )	alert("Enter your surname")
	if (pass1 == "" ) 	alert("Enter a password" )
	if (pass2 == "")	alert("Confirm your password" )
	if (theScore < 3) 	alert
	("Password is too weak, try increasing it's length, using a mixture of uppercase and lower case letters, numbers or special characters such as /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/")
	else
	{
		// if passwords entered not idenical
		if (pass1 != pass2) 
		{	// give a warning message and ignore entered data
			alert("Password is not the same"); 	
		} 
		// passwords must be identical and all checks above are done so preform regestration bellow
		else									
		{
			// ensure request is null
			request = null;						
		
			// check what type of browswer is being used to set up appropriate request
			if (window.ActiveXObject)			
			{
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} else if (window.XMLHttpRequest)
			{
				request = new XMLHttpRequest();
			}
			if( request != null)
			{	
				// preform the request function and open the url
				request.onreadystatechange = RequestNew;
				request.open("GET", url);
				request.send(null);
				
			}
		}
	}
}

/* Register new user request function */
function RequestNew()
{
	// check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text and display it
      		var response=request.responseText;
			// if the new user is registered
			if (response == "registered")
			{
				// inform the user
				alert("You are now registered");
				// go to sign in page
				startUp();
			}
			else 
			{
				// inform user they need to create a different ID
				alert("User already exists");
			}
	  	} 
	} 
	// reset form values
	document.forms[0].elements[0].value="";
	document.forms[0].elements[1].value="";
	document.forms[0].elements[2].value="";
	document.forms[0].elements[3].value="";
	document.forms[0].elements[4].value="";	  
}

/* Check the password against certain criteria to assess it's strength */
function passwordStrength(password)
{
        // create a new array and call it str
		var str = new Array(); 
		
		// assign values to array
        str[0] = "Password is very Weak";
        str[1] = "Password is weak";
        str[2] = "Password is better";
        str[3] = "Password is medium";
        str[4] = "Password is strong";
        str[5] = "Password is very strong";
		
		// local varible that also holds the strength of the password
		var score = 0; 


        // if password bigger than 6 give 1 point
        if (password.length > 6) score++;
        // if password has both lower and uppercase characters give 1 point      
        if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;
        // if password has at least one number give 1 point
        if (password.match(/\d+/)) score++;
        // if password has at least one special caracther give 1 point
        if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;
        // if password bigger than 8 give another 1 point
        if (password.length > 8) score++;
		// assign phrase
         document.getElementById("passwordDescription").innerHTML = str[score];
		 // assign bar colour and size
         document.getElementById("passwordStrength").className = "strength" + score;
		 
		 // assign value to global variable
		 theScore = score;
}

/* Function to change any text to Proper Case (e.g. carlene --> Carlene) */
String.prototype.toProperCase = function() 
{
	// change fist letter to upper case and all the other letters to lower case
    return this.charAt(0).toUpperCase() + this.substring(1,this.length).toLowerCase();
}

/* ~~~~~~~~~~~~~~~~~~~~ Log-in user functions ~~~~~~~~~~~~~~~~~~~~ */
	
/* Log-in User */
function loginUser()
{
	// grab data from form and alter to proper cases
		userID 	= document.forms[1].elements[0].value;
		userID 	= userID.toProperCase(this.value);
	var passWD  = document.forms[1].elements[1].value;	
	
	// assign to url
	var url = "checkuser.php?userID="+userID+"&passWD="+passWD;

	
	// ensure request is null
	request = null;						
		
	// check what type of browswer is being used to set up appropriate request
	if (window.ActiveXObject)			
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	if(request != null)
	{	
		// preform the request function and open the url
		request.onreadystatechange = RequestLogin;
		request.open("GET", url);
   		request.send(null);
   	}
}

/* log in request function */
function RequestLogin()
{
   // check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text
      		var response = request.responseText;
			// if the person is registered
	  		if (response == "registered")
			{
				// open inbox
		  		openInbox("checkmail1.php?userID="+userID);
		 	} else 
		  	{
				// or inform user of issue
			 	alert("The User ID or Password you entered is incorrect.");
		  	}
	  	} 
	}	 	  
}

/* ~~~~~~~~~~~~~~~~~~~~ Inbox functions ~~~~~~~~~~~~~~~~~~~~ */

/* Open the inbox */
function openInbox(url)
{
	// call function to get user's name to display on screen
	checkName();
	// reset form values
	document.forms[1].elements[0].value="";
	document.forms[1].elements[1].value="";
	
	// ensure request is null
	requestInbox = null;						
		
	// check what type of browswer is being used to set up appropriate request
	if (window.ActiveXObject)			
	{
		requestInbox = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest)
	{
		requestInbox = new XMLHttpRequest();
	}
	if(requestInbox != null)
	{	
		// preform the request function and open the url
 		requestInbox.onreadystatechange = RequestInbox;
  		requestInbox.open("GET",url);
		requestInbox.send(null);
	}

}


/* inbox request function */
function RequestInbox() 
{
	// check all has been sent
	if (requestInbox.readyState==4)
	{
		// and all is OK
		if (requestInbox.status==200)
		{
			goToInbox();
			// grab users messages from the database in an XML format
        	var responseInbox = requestInbox.responseXML;
			// reset inbox value in div
			document.getElementById("inboxBox").innerHTML="";
			// welcome user
			document.getElementById("welcome").innerHTML="Welcome "+personsName;

			// a for loop that is as many as their are messages in the mail table for this user
			for (var i=0; i<responseInbox.getElementsByTagName('mail').length; i++) 
			{
				// create a new div
				var newdiv = document.createElement("div");
				// assign variable to show where the inbox div is
				var mailHolder = document.getElementById("inboxBox");
				// put new div in this inbox div
				mailHolder.appendChild(newdiv);
				// set new divs attributes
				newdiv.setAttribute("id",i);
				// createcall to function on click
				newdiv.setAttribute("onclick","mailClick('"+responseInbox.getElementsByTagName('mailid')[i].childNodes[0].nodeValue+"',"+i+");");
				// get mail dates
				document.getElementById(i).innerHTML ="<b>Date:</b> "+responseInbox.getElementsByTagName('date')[i].childNodes[0].nodeValue+"<br/>";
				// get sender
 				document.getElementById(i).innerHTML+="<b>Sender:</b> "+responseInbox.getElementsByTagName('sender')[i].childNodes[0].nodeValue+"<br/>";
				// get subject
	 			document.getElementById(i).innerHTML+="<b>Subject:</b> "+responseInbox.getElementsByTagName('subject')[i].childNodes[0].nodeValue+"<br/>";
      			// is it read or unread?
				document.getElementById(i).innerHTML+="<b id='status'>status:</b> "+"<i id='status"+i+"'>"+responseInbox.getElementsByTagName('status')[i].childNodes[0].nodeValue+"</i>"+"<br/>";  
				
			}
	
		}
	}

}

/* Get the user's name */
function checkName()
{
	var passWD= document.forms[1].elements[1].value;
	userID 	= userID.toProperCase(this.value);
	// assign url	
	var url = "checkuserName.php?userID="+userID+"&passWD="+passWD;
	
	// ensure request is null
	request=null;						
		
	// check what type of browswer is being used to set up appropriate request
	if (window.ActiveXObject)			
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	if(request!=null)
	{	
		// preform the request function and open the url
		request.onreadystatechange = RequestName;
		request.open("GET", url);
   		request.send(null);
   }
}

/* Name request function */
function RequestName()
{   
 	// check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text
      		var response=request.responseText;
			// assign user's first name
			personsName = response;
		} 
	} 
}

/* Individual mail view when selected */
function mailClick(mailNumber,divNumber) 
{
	var url =  "update.php?mailID="+mailNumber;
	
	// check what type of browswer is being used to set up appropriate request
	if (window.ActiveXObject)			
	{
		requestMessage = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest)
	{
		requestMessage = new XMLHttpRequest();
	}
	if(requestMessage != null)
	{	
		// preform the request function and open the url
 		requestMessage.onreadystatechange=RequestMessage;
  		requestMessage.open("GET",url);
		requestMessage.send(null);

		// change status view to read
		document.getElementById("status"+divNumber).innerHTML="read";
	}

}

/* Message request function */			 
function RequestMessage() 
{
// check all has been sent
	if (requestMessage.readyState==4)
	{
		// and all is OK
		if (requestMessage.status==200)
		{
			// grab response xml
         	var responseMessage = requestMessage.responseXML;
		  
			// Display message
			for (var i=0; i<responseMessage.getElementsByTagName('mail').length; i++)
			{
		  		// get date
				document.getElementById("messageBox").innerHTML ="<b>Date:</b> "+responseMessage.getElementsByTagName('date')[i].childNodes[0].nodeValue+"<br/>";
				// get sender
				document.getElementById("messageBox").innerHTML+="<b>Sender:</b> "+responseMessage.getElementsByTagName('sender')[i].childNodes[0].nodeValue+"<br/>";
				 // get subject
				 document.getElementById("messageBox").innerHTML+="<b>Subject:</b> "+responseMessage.getElementsByTagName('subject')[i].childNodes[0].nodeValue+"<br/>";
				 // get messsage
				 document.getElementById("messageBox").innerHTML+="<b>Message:</b> <br/>"+responseMessage.getElementsByTagName('message')[i].childNodes[0].nodeValue+"<br/>";
				  // temp store of mail id
				 document.getElementById("mailTemp").innerHTML=""+responseMessage.getElementsByTagName('mailid')[i].childNodes[0].nodeValue+"";
				 // temp store of sender
				 document.getElementById("senderTemp").innerHTML=""+responseMessage.getElementsByTagName('sender')[i].childNodes[0].nodeValue+"";
				 // temp store of userID
				 document.getElementById("mailMeTemp").innerHTML=""+responseMessage.getElementsByTagName('sender')[i].childNodes[0].nodeValue+"";
				 // temp store of date
				 document.getElementById("dateTemp").innerHTML=""+responseMessage.getElementsByTagName('date')[i].childNodes[0].nodeValue+"";
				 // temp store of subject
				 document.getElementById("subjectTemp").innerHTML=""+responseMessage.getElementsByTagName('subject')[i].childNodes[0].nodeValue+"";
				 
				 // assign values from temp stores to variables
				 tempID 		= document.getElementById("mailMeTemp").innerHTML;
				 tempID 		= tempID.toProperCase(this.value);
				 tempDate 		= document.getElementById("dateTemp").innerHTML;
				 tempSubject 	= document.getElementById("subjectTemp").innerHTML;
				 
				 // display in forward message area
				 document.getElementById("message3").innerHTML =" \n~~~~~~~~~~~~~  * Forward Message * ~~~~~~~~~~~~~ \n";
				 document.getElementById("message3").innerHTML+=" From: "+tempID+ "\n"; 
				 document.getElementById("message3").innerHTML+=" Sent: "+tempDate+" \n"; 
				 document.getElementById("message3").innerHTML+=" Subject: "+tempSubject+"\n Message: \n";
				 document.getElementById("message3").innerHTML+=" "+responseMessage.getElementsByTagName('message')[i].childNodes[0].nodeValue+"\n ";
				 
			}
			// Display message
			messageView();
		}
	}
}

/* ~~~~~~~~~~~~~~~~~~~~ Sending mail functions ~~~~~~~~~~~~~~~~~~~~ */

/* Send Mail */
function sendMail()
{
	// grab data from form and alter to proper cases
	var to		= document.forms[2].elements[0].value;
		to 		= to.toProperCase(this.value);
		userID 	= userID.toProperCase(this.value);
	var from 	= userID;
	var subj	= document.forms[2].elements[1].value;
	var msg 	= document.forms[2].elements[2].value;
	var date 	= new Date();
	
	// assign to url
	var url = "insert.php?id="+to+"&sender="+from+"&subject="+subj+"&message="+msg+"&date="+date;

	// check that all feilds are filled in and password strength is great enough
	if (to == "")		alert("Who are you sending this to?")
	if (subj == "" )	alert("There is no subject")
	if (msg == "" ) 	alert("You haven't entered a message" )

	else
	{
		// ensure request is null
		request = null;						
		
		// check what type of browswer is being used to set up appropriate request
		if (window.ActiveXObject)			
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
		if(request!=null)
		{	
			// preform the request function and open the url
			request.onreadystatechange = RequestMail;
			request.open("GET", url);
			request.send(null);
		}
	}
}


/* Sending mail request function */
function RequestMail()
{
	// check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text and display it
      		var response=request.responseText;
	  		alert("Message has been sent");
			// Go back to updated inbox
			openInbox("checkmail1.php?userID="+userID);
	  	} 
	} 
	// reset form values
	document.forms[2].elements[0].value="";
	document.forms[2].elements[1].value="";
	document.forms[2].elements[2].value=""; 
}

/* Reply to message */
function replying()
{
	// get sender from temp store 
	to = document.getElementById("senderTemp").innerHTML;
	to 	= to.toProperCase(this.value);	
	// grab and assign 	
		userID 	= userID.toProperCase(this.value);
	var from 	= userID;
	var subj	= document.forms[3].elements[0].value;
	var msg 	= document.forms[3].elements[1].value;
	// get current date and time
	var date 	= new Date();
	
	// assign to url
	var url = "insert.php?id="+to+"&sender="+from+"&subject="+subj+"&message="+msg+"&date="+date;

	// check that all feilds are filled
	if (to == "")		alert("Who are you sending this to?")
	if (subj == "" )	alert("There is no subject")
	if (msg == "" ) 	alert("You haven't entered a message" )

	else
	{
		// ensure request is null
		request = null;						
		
		// check what type of browswer is being used to set up appropriate request
		if (window.ActiveXObject)			
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
		if(request != null)
		{	
			// preform the request function and open the url
			request.onreadystatechange = RequestReply;
			request.open("GET", url);
			request.send(null);
		}
	}
}


/* Replying mail request function */
function RequestReply()
{
	// check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text and display it
      		var response=request.responseText;
	  		alert("Message has been sent");
			// open inbox
			openInbox("checkmail1.php?userID="+userID);
	  	} 
	} 
	// reset form values
	document.forms[3].elements[0].value="";
	document.forms[3].elements[1].value="";
}

/* Forward mail */
function forwarding()
{
	// grab data and format appropriately 
		userID 	= userID.toProperCase(this.value);
	var from 	= userID;
		to 		= document.forms[4].elements[0].value;
		to 		= to.toProperCase(this.value);
	var subj	= document.forms[4].elements[1].value;
	var msg 	= document.forms[4].elements[2].value;
	var date 	= new Date();
	
	// assign to url
	var url = "insert.php?id="+to+"&sender="+from+"&subject="+subj+"&message="+msg+"&date="+date;

	// check that all feilds are filled in and password strength is great enough
	if (to == "")		alert("Who are you sending this to?")
	if (subj == "" )	alert("There is no subject")
	if (msg == "" ) 	alert("You haven't entered a message" )

	else
	{
		// ensure request is null
		request=null;						
		
		// check what type of browswer is being used to set up appropriate request
		if (window.ActiveXObject)			
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
		if(request!=null)
		{	
			// preform the request function and open the url
			request.onreadystatechange = RequestForward;
			request.open("GET", url);
			request.send(null);
		}
	}
}

/* Forwarding mail request function */
function RequestForward()
{
	// check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text and display it
      		var response=request.responseText;
	  		alert("Message has been sent");
			// open Inbox
			openInbox("checkmail1.php?userID="+userID);
	  	} 
	} 
	// reset form values
	document.forms[4].elements[0].value="";
	document.forms[4].elements[1].value="FWD: ";
	document.forms[4].elements[2].value="";
}

/* ~~~~~~~~~~~~~~~~~~~~ Deleting mail functions ~~~~~~~~~~~~~~~~~~~~ */

/* Delete mail */
function deleteIt()
{
	// grab required data
	mailNumber = document.getElementById("mailTemp").innerHTML;
	
	// assign to url
	var url = "delete.php?mailID="+mailNumber;

	// check that all feilds are filled in
	if (mailNumber == "")		alert("No mail number");
	else
	{
		// ensure request is null
		request=null;						
		
		// check what type of browswer is being used to set up appropriate request
		if (window.ActiveXObject)			
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
		if(request!=null)
		{	
			// preform the request function and open the url
			request.onreadystatechange = RequestDelete;
			request.open("GET", url);
			request.send(null);
		}
	}
}

/* Sending mail request function */
function RequestDelete()
{
	// check all has been sent
	if (request.readyState==4)
	{
		// and all is OK
		if (request.status==200)
		{
			// grab response text and display it
      		var response=request.responseText;
	  		alert("Message has been deleted");
			// open inbox
			openInbox("checkmail1.php?userID="+userID);
	  	} 
	} 
}