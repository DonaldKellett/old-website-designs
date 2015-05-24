/*
 * timedRedirect.404.webworker.js
 * (c) Donald Leung.  All rights reserved.
 */

var s = 60;

function countDown () {
	postMessage(s);
	s--;
	setTimeout("countDown()", 1000);
}

countDown();