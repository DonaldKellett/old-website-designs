/*
 * timer.js
 * (c) Donald Leung.  All rights reserved.
 */

var worker = new Worker("widgets/timer.webworker.js");
var seconds = 0,
	minutes = 0,
	hours = 0;

function timer () {
	worker.onmessage = function (event) {
		seconds = event.data;
		minutes = 0;
		hours = 0;
		if (seconds < 60) {
			document.getElementById("timer").innerHTML = "Time Visited: " + seconds + " seconds";
		} else if (seconds >= 60 && seconds < 3600) {
			// First convert seconds to minutes if there are over 60 seconds
			for (i = 0; i < 60; i++) {
				if (seconds >= 60) {
					seconds -= 60;
					minutes += 1;
				}
			}
			document.getElementById("timer").innerHTML = "Time Visited: " + minutes + " minutes " + seconds + " seconds";
		} else if (seconds >= 3600 && seconds < 86400) {
			// First convert seconds to minutes if there are over 60 seconds
			for (i = 0; i < 1440; i++) {
				if (seconds >= 60) {
					seconds -= 60;
					minutes += 1;
				}
			}
			// Then convert minutes to hours if there are over 60 minutes
			for (i = 0; i < 24; i++) {
				if (minutes >= 60) {
					minutes -= 60;
					hours += 1;
				}
			}
			document.getElementById("timer").innerHTML = "Time Visited: " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds";
		} else {
			document.getElementById("timer").innerHTML = "Time Visited: Over 24 hours";
			worker.terminate();
		}
	};
}

// Call the function to start the timer (I keep forgetting that!)
timer();