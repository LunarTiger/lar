(function(){
	const lovenseURL = "https://c.lovense-api.com/t2/";
	if(window.location.hash) {
		const key = window.location.hash.substr(1);
		window.location = lovenseURL+key;
	};
	function getInvite() {
		document.getElementById("alert").innerHTML = "";
		var invite = prompt("Please enter your invite code:", "");
		if (invite) {
			window.location = lovenseURL+invite;
		}else {document.getElementById("alert").innerHTML = "Please insert a control link.";};
	}
})();