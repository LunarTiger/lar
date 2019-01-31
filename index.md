<hr style='height:5px; visibility:hidden;' />
<button onclick="getInvite()">Submit Invite Link</button>
<p id='alert' style="color: #f00;"></p>
<hr style='height:5px; visibility:hidden;' />
<hr />
<h2>So, if the app generates links for you, why did you make this??</h2>
<p>I've noticed that when sharing links the bots of whatever site is used will usually invalidate the link by viewing it. Also, when a link is generated with the app it is very long, but the only thing that is needed is the last 4 characters. So, to combat these problems I've made this simple site. By using the link https://tiny.cc/lar combined with a # and characters it will direct to the site. For example: https://api2.lovense.com/c/<mark>1234</mark> would become https://tiny.cc/lar#<mark>1234</mark></p>
<script type="text/javascript">
	if(window.location.hash) {
		var key = window.location.hash.substr(1);
		if(key.length == 4) {window.location = 'https://api2.lovense.com/c/'+key;}
		else {document.getElementById("alert").innerHTML = "Please make sure the invite code is 4 characters.";}
	}
	function getInvite() {
		document.getElementById("alert").innerHTML = "";
		var invite = prompt("Please enter your 4 digit invite code:", "");
		if ((invite != null) && (invite.length == 4)) {
			window.location = 'https://api2.lovense.com/c/'+invite;
		}
		else if (invite == null) {}
		else {document.getElementById("alert").innerHTML = "Please make sure the invite code is 4 characters.";}
	}
</script>
<hr style='height:200px; visibility:hidden;' />