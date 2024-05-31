(function(){
	if(window.location.hash) {
		const key = window.location.hash.substr(1);
		window.location = "https://c.lovense-api.com/t2/"+key;
	};
})();
function getLovenseInviteCodeFromUser() {
	document.getElementById("alert").innerHTML = "";
	var invite = prompt("Please enter your invite code:", "");
	if (invite) {
		window.location = "https://c.lovense-api.com/t2/"+invite;
	}else {document.getElementById("alert").innerHTML = "Please insert a control link.";};
}