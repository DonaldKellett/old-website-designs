/*
 * timedRedirect.404.js
 * (c) Donald Leung.  All rights reserved.
 */

// Use absolute URL for worker since 404.html can be displayed anywhere
var worker = new Worker("http://donaldkellett.github.io/widgets/timedRedirect.404.webworker.js");

function timedRedirect() {
	worker.onmessage = function (event) {
		if (event.data > 0) {
			document.getElementById("timed-redirect").innerHTML = "If you do nothing, you will be redirected to <strong>Donald Leung - Home</strong> in " + event.data + " seconds.";
		} else {
			document.getElementById("timed-redirect").innerHTML = "You will now be redirected to <strong>Donald Leung - Home</strong>.";
			window.location = "http://donaldkellett.github.io";
			worker.terminate();
		}
	}
}

timedRedirect();