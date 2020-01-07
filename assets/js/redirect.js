if(window.location.hash) {
	var key = window.location.hash.substr(1);
	window.location = 'https://api2.lovense.com/c/'+key;
}
function getInvite() {
	document.getElementById("alert").innerHTML = "";
	var invite = prompt("Please enter your invite code:", "");
	if (invite) {
		window.location = 'https://api2.lovense.com/c/'+invite;
	}
	else {document.getElementById("alert").innerHTML = "Please insert a control link.";}
}