var gamemodel = Game();
var scale = 25;

//draws the model onto a canvas
function drawGrid() {

var can = document.getElementById("Grid");
var canM = can.getContext("2d");
canM.clearRect(0,0,scale*XDIM,scale*YDIM);

//draw ground
for (var i=0; i < XDIM; i++){
	for (var j=0; j < YDIM; j++){
		if (gamemodel.GROUND[i][j] === "GRASS"){
			canM.fillStyle = "darkgreen";
			canM.fillRect(scale*i,scale*j, scale, scale);
			canM.fillStyle = "green";
			canM.fillRect(scale*i+1,scale*j+1, scale-1, scale-1);
		}

		
	}
}

//draw player
canM.fillStyle = "blue";
canM.fillRect(scale*gamemodel.PLAYER.locx + 2, scale*gamemodel.PLAYER.locy + 2, scale - 3, scale - 3);

//draw entities
for (var i=0; i < XDIM; i++){
	for (var j=0; j < YDIM; j++){
		
		if (gamemodel.ENTITY[i][j].Type === "Monster"){
			canM.fillStyle = "black";
			canM.fillRect(scale*i+3,scale*j+3, scale-5, scale-5);
		}

	}
}

//draw dmg obj
for (var i=0; i < XDIM; i++){
	for (var j=0; j < YDIM; j++){

		if (gamemodel.DMGOBJ[i][j].WeaponType === "Sword R"){
			
			canM.fillStyle = "gray";
			canM.fillRect(scale*i,scale*j + scale/3, scale, scale/3);
			canM.fillStyle = "black";
			canM.fillRect(scale*i,scale*j + scale/3, scale/5, scale/3);
		}

		if (gamemodel.DMGOBJ[i][j].WeaponType === "Sword L"){
			
			canM.fillStyle = "gray";
			canM.fillRect(scale*i,scale*j + scale/3, scale, scale/3);
			canM.fillStyle = "black";
			canM.fillRect(scale*i + 4*scale/5,scale*j + scale/3, scale/5, scale/3);
		}

		if (gamemodel.DMGOBJ[i][j].WeaponType === "Sword U"){
			
			canM.fillStyle = "gray";
			canM.fillRect(scale*i  + scale/3,scale*j, scale/3, scale);
			canM.fillStyle = "black";
			canM.fillRect(scale*i + scale/3,scale*j + 4*scale/5 , scale/3, scale/5);
		}
		if (gamemodel.DMGOBJ[i][j].WeaponType === "Sword D"){
			
			canM.fillStyle = "gray";
			canM.fillRect(scale*i  + scale/3,scale*j, scale/3, scale);
			canM.fillStyle = "black";
			canM.fillRect(scale*i +scale/3,scale*j, scale/3, scale/5);
		}




	}
}



var scorecan = document.getElementById("score");
var scorectx = scorecan.getContext("2d");
scorectx.fillStyle = "#FFFFFF";
scorectx.fillRect(0,0,800,40);
scorectx.fillStyle = "#000000"
scorectx.font = "20px Arial";
scorectx.fillText("Health: " + gamemodel.PLAYER.Health, 500,20);

// var scorecan = document.getElementById("message");
// var scorectx = scorecan.getContext("2d");
// scorectx.fillStyle = "#FFFFFF";
// scorectx.fillRect(0,0,800,40);
// scorectx.fillStyle = "#000000"
// scorectx.font = "20px Arial";
// scorectx.fillText(gamemodel.message,10,20);


}

drawGrid();



// newGame
function newgame() {
	location.reload();
}

// help
function about() {
	alert("Experimental game. \n October 7, 2017. \n Current Version: 0.0.1.")
}

//updates
function updates(){
	alert("None.")
}

//player movement
// up
function up() {
	gamemodel.PLAYER.moveUp();
	drawGrid();
	gamemodel.nextStep();
	drawGrid();
	
}

// down
function down() {
	gamemodel.PLAYER.moveDown();
	drawGrid();
	gamemodel.nextStep();
	drawGrid();
	
}

// left
function left() {
	gamemodel.PLAYER.moveLeft();
	drawGrid();
	gamemodel.nextStep();
	drawGrid();
	
}

// right
function right() {
	gamemodel.PLAYER.moveRight();
	drawGrid();
	gamemodel.nextStep();
	drawGrid();
	
}

// wait
function wait() {
	drawGrid();
	gamemodel.nextStep();
	drawGrid();
	
}

//sword attacks
// up
function swordup() {

	var swordx = gamemodel.PLAYER.locx;
	var swordy = gamemodel.PLAYER.locy - 1;
	var sword = DmgObj("psword", "Sword U", "P", 1, swordx, swordy);
	gamemodel.placeDmgObj(sword);
	console.log("sword is placed");
	drawGrid();
	setTimeout(function(){
		gamemodel.nextStep();
		drawGrid();
	}, 100);
}

// down
function sworddown() {
	var swordx = gamemodel.PLAYER.locx;
	var swordy = gamemodel.PLAYER.locy + 1;
	var sword = DmgObj("psword", "Sword D", "P", 1, swordx, swordy);
	gamemodel.placeDmgObj(sword);
	console.log("sword is placed");
	drawGrid();
	setTimeout(function(){
		gamemodel.nextStep();
		drawGrid();
	}, 100);
}

// left
function swordleft() {
	var swordx = gamemodel.PLAYER.locx - 1;
	var swordy = gamemodel.PLAYER.locy;
	var sword = DmgObj("psword", "Sword L", "P", 1, swordx, swordy);
	gamemodel.placeDmgObj(sword);
	console.log("sword is placed");
	drawGrid();
	setTimeout(function(){
		gamemodel.nextStep();
		drawGrid();
	}, 100);
	
}

// right
function swordright() {
	var swordx = gamemodel.PLAYER.locx + 1;
	var swordy = gamemodel.PLAYER.locy;
	var sword = DmgObj("psword", "Sword R", "P", 1, swordx, swordy);
	gamemodel.placeDmgObj(sword);
	console.log("sword is placed");
	drawGrid();
	setTimeout(function(){
		gamemodel.nextStep();
		drawGrid();
	}, 100);
}


//keyboard handler

keydown = function(e){
 if(e.keyCode==65){
   left();
}else if(e.keyCode==87){
   up();
}else if(e.keyCode==68){
   right();
}else if(e.keyCode==83){
   down();
}else if(e.keyCode==73){
   swordup();
}else if(e.keyCode==76){
   swordright();
}else if(e.keyCode==75){
   sworddown();
}else if(e.keyCode==74){
   swordleft();
}else if(e.keyCode==77){
   wait();
}else if(e.keyCode==32){
   mon = Entity("fred", "Monster", "Patrol 3H", 5,1, 7, 7);
   gamemodel.placeEntity(mon);
   drawGrid();
}


}
document.onkeydown = keydown
