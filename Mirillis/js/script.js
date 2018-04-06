menu.onclick = function myFunction() {
	let x = document.getElementById("myTop-nav");

	if (x.className === "top-nav") {
		x.className += " responsive";
	} else {
		x.className = "top-nav";
	}
}