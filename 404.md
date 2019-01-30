<script type="text/javascript">
	if(window.location.hash){window.location = 'https://api2.lovense.com/c/'+window.location.hash.substr(1);}
</script>
<hr style='height:10px; visibility:hidden;' />
<button onclick="getInvite()">Submit Invite Link</button>
<p id='alert'></p>
<hr />
<h2>So, if the app generates links for you, why did you make this??</h2>
<p>I've noticed that when sharing links the bots of whatever site is used will usually invalidate the link by viewing it. Also, when a link is generated with the app it is very long, but the only thing that is needed is the last 4 characters. So, to combat these problems I've made this simple site. By using the link https://tiny.cc/lar combined with a # and characters it will direct to the site. For example: https://api2.lovense.com/c/<mark>1234</mark> would become https://tiny.cc/lar#<mark>1234</mark></p>
<script>
	function getInvite() {
		document.getElementById("alert").innerHTML = "";
		var invite = prompt("Please enter your 4 digit invite code:", "");
		if ((invite != null) &&(invite.length == 4)) {
			window.location = 'https://api2.lovense.com/c/'+invite;
		}
		else {
			document.getElementById("alert").innerHTML = "Something went wrong, please make sure the invite code is 4 characters.";
		}
	}
</script>