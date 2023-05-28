function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function doSomething(){ 
	alert("Thank you for submitting");
	location.href = "main.html";		
}

function goToQuiz(){
	location.href = "realquiz.html";
}