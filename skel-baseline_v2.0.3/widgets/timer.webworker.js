/*
 * timer.webworker.js
 * (c) Donald Leung.  All rights reserved.
 */

var s = 0;

function sendMessage () {
	postMessage(s);
	s++;
	setTimeout("sendMessage()", 1000);
}

sendMessage();