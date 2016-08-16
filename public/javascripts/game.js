(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVzaHVxaW5nL1Byb2plY3QvZmlzY2hlL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9icm93c2VyLXBhY2svMi4wLjEvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2xpdXNodXFpbmcvUHJvamVjdC9maXNjaGUvdmlld3MvanMvZmFrZV83MmE5NjFiZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQ3JlYXRlIHRoZSBjYW52YXNcbnZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSA1MTI7XG5jYW52YXMuaGVpZ2h0ID0gNDgwO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4vLyBCYWNrZ3JvdW5kIGltYWdlXG52YXIgYmdSZWFkeSA9IGZhbHNlO1xudmFyIGJnSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbmJnSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRiZ1JlYWR5ID0gdHJ1ZTtcbn07XG5iZ0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2JhY2tncm91bmQucG5nXCI7XG5cbi8vIEhlcm8gaW1hZ2VcbnZhciBoZXJvUmVhZHkgPSBmYWxzZTtcbnZhciBoZXJvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbmhlcm9JbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdGhlcm9SZWFkeSA9IHRydWU7XG59O1xuaGVyb0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2hlcm8ucG5nXCI7XG5cbi8vIE1vbnN0ZXIgaW1hZ2VcbnZhciBtb25zdGVyUmVhZHkgPSBmYWxzZTtcbnZhciBtb25zdGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbm1vbnN0ZXJJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdG1vbnN0ZXJSZWFkeSA9IHRydWU7XG59O1xubW9uc3RlckltYWdlLnNyYyA9IFwiaW1hZ2VzL21vbnN0ZXIucG5nXCI7XG5cbi8vIEdhbWUgb2JqZWN0c1xudmFyIGhlcm8gPSB7XG5cdHNwZWVkOiAyNTYgLy8gbW92ZW1lbnQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcbn07XG52YXIgbW9uc3RlciA9IHt9O1xudmFyIG1vbnN0ZXJzQ2F1Z2h0ID0gMDtcblxuLy8gSGFuZGxlIGtleWJvYXJkIGNvbnRyb2xzXG52YXIga2V5c0Rvd24gPSB7fTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcblx0a2V5c0Rvd25bZS5rZXlDb2RlXSA9IHRydWU7XG59LCBmYWxzZSk7XG5cbmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuXHRkZWxldGUga2V5c0Rvd25bZS5rZXlDb2RlXTtcbn0sIGZhbHNlKTtcblxuLy8gUmVzZXQgdGhlIGdhbWUgd2hlbiB0aGUgcGxheWVyIGNhdGNoZXMgYSBtb25zdGVyXG52YXIgcmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdGhlcm8ueCA9IGNhbnZhcy53aWR0aCAvIDI7XG5cdGhlcm8ueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuXG5cdC8vIFRocm93IHRoZSBtb25zdGVyIHNvbWV3aGVyZSBvbiB0aGUgc2NyZWVuIHJhbmRvbWx5XG5cdG1vbnN0ZXIueCA9IDMyICsgKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gNjQpKTtcblx0bW9uc3Rlci55ID0gMzIgKyAoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gNjQpKTtcbn07XG5cbi8vIFVwZGF0ZSBnYW1lIG9iamVjdHNcbnZhciB1cGRhdGUgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcblx0aWYgKDM4IGluIGtleXNEb3duKSB7IC8vIFBsYXllciBob2xkaW5nIHVwXG5cdFx0aGVyby55IC09IGhlcm8uc3BlZWQgKiBtb2RpZmllcjtcblx0fVxuXHRpZiAoNDAgaW4ga2V5c0Rvd24pIHsgLy8gUGxheWVyIGhvbGRpbmcgZG93blxuXHRcdGhlcm8ueSArPSBoZXJvLnNwZWVkICogbW9kaWZpZXI7XG5cdH1cblx0aWYgKDM3IGluIGtleXNEb3duKSB7IC8vIFBsYXllciBob2xkaW5nIGxlZnRcblx0XHRoZXJvLnggLT0gaGVyby5zcGVlZCAqIG1vZGlmaWVyO1xuXHR9XG5cdGlmICgzOSBpbiBrZXlzRG93bikgeyAvLyBQbGF5ZXIgaG9sZGluZyByaWdodFxuXHRcdGhlcm8ueCArPSBoZXJvLnNwZWVkICogbW9kaWZpZXI7XG5cdH1cblxuXHQvLyBBcmUgdGhleSB0b3VjaGluZz9cblx0aWYgKFxuXHRcdGhlcm8ueCA8PSAobW9uc3Rlci54ICsgMzIpXG5cdFx0JiYgbW9uc3Rlci54IDw9IChoZXJvLnggKyAzMilcblx0XHQmJiBoZXJvLnkgPD0gKG1vbnN0ZXIueSArIDMyKVxuXHRcdCYmIG1vbnN0ZXIueSA8PSAoaGVyby55ICsgMzIpXG5cdCkge1xuXHRcdCsrbW9uc3RlcnNDYXVnaHQ7XG5cdFx0cmVzZXQoKTtcblx0fVxufTtcblxuLy8gRHJhdyBldmVyeXRoaW5nXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoYmdSZWFkeSkge1xuXHRcdGN0eC5kcmF3SW1hZ2UoYmdJbWFnZSwgMCwgMCk7XG5cdH1cblxuXHRpZiAoaGVyb1JlYWR5KSB7XG5cdFx0Y3R4LmRyYXdJbWFnZShoZXJvSW1hZ2UsIGhlcm8ueCwgaGVyby55KTtcblx0fVxuXG5cdGlmIChtb25zdGVyUmVhZHkpIHtcblx0XHRjdHguZHJhd0ltYWdlKG1vbnN0ZXJJbWFnZSwgbW9uc3Rlci54LCBtb25zdGVyLnkpO1xuXHR9XG5cblx0Ly8gU2NvcmVcblx0Y3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1MCwgMjUwLCAyNTApXCI7XG5cdGN0eC5mb250ID0gXCIyNHB4IEhlbHZldGljYVwiO1xuXHRjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG5cdGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuXHRjdHguZmlsbFRleHQoXCJHb2JsaW5zIGNhdWdodDogXCIgKyBtb25zdGVyc0NhdWdodCwgMzIsIDMyKTtcbn07XG5cbi8vIFRoZSBtYWluIGdhbWUgbG9vcFxudmFyIG1haW4gPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBub3cgPSBEYXRlLm5vdygpO1xuXHR2YXIgZGVsdGEgPSBub3cgLSB0aGVuO1xuXG5cdHVwZGF0ZShkZWx0YSAvIDEwMDApO1xuXHRyZW5kZXIoKTtcblxuXHR0aGVuID0gbm93O1xuXG5cdC8vIFJlcXVlc3QgdG8gZG8gdGhpcyBhZ2FpbiBBU0FQXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcbn07XG5cbi8vIENyb3NzLWJyb3dzZXIgc3VwcG9ydCBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG52YXIgdyA9IHdpbmRvdztcbnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHcud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHcubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbi8vIExldCdzIHBsYXkgdGhpcyBnYW1lIVxudmFyIHRoZW4gPSBEYXRlLm5vdygpO1xucmVzZXQoKTtcbm1haW4oKTtcbiJdfQ==
