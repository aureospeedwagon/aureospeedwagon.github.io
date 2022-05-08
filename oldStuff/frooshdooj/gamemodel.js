//does f i times.
times = function (i, f) {
	if (i === 0) return;
	f(); times (i-1, f)
	}

var XDIM = 32;
var YDIM = 16;

//Initializes with XDIM x YDIM blank grid


Game = function() {
    var that = Object.create(Game.prototype);
    
    that.score = 0;
    that.health = 10;
    that.multiplier = 1;

    var cl = [];
    cl.push(XDIM/2);
    cl.push(YDIM/2);

    that.curLocation = cl;


    var rows = []
	 times(XDIM, function() {
  		var col = [];
  		rows.push(col);
  		times(YDIM, function() {
    		col.push(0);
  		})
	})

  rows[XDIM/2][YDIM/2] = 2; 

	that.model = rows;

  that.message = "Weclome to the game.";
  
 

    return that;
}

//colors 0 = dead, 1 = monster, 2 = player, 3 = fire, 4 = cheat, 5 = potfire 98=hp 99=pp 100=secret



Game.prototype = {

    killCell : function(x,y) { 
      var deadx = (x+XDIM)%XDIM;
      var deady = (y+YDIM)%YDIM;

      var oldtype = this.model[deadx][deady];

      if ((oldtype === 5)|| (oldtype === 2)){
        this.model[deadx][deady] = oldtype;
      }else{
    	 this.model[deadx][deady] = 0;
      }


      },

    setFire : function(x,y) {

      var firex = (x+XDIM)%XDIM;
      var firey = (y+YDIM)%YDIM;

      var oldtype = this.model[firex][firey];
      this.model[firex][firey] = 5;

      if ((oldtype === 98)||(oldtype === 99)){
        this.message = "Potions are very flammable."
        this.setFire(firex+1,firey+1);
        this.setFire(firex+1,firey);
        this.setFire(firex+1,firey-1);
        this.setFire(firex,firey+1);
        this.setFire(firex,firey);
        this.setFire(firex,firey-1);
        this.setFire(firex-1,firey+1);
        this.setFire(firex-1,firey);
        this.setFire(firex-1,firey-1);
      }else if (oldtype === 2){
          this.message = "You've lit yourself on fire somehow. Minus 30 Health.";
          this.injure(30);
      }

  },

    burnCell : function(x,y, source) { 
      var burntx = (x + XDIM)%XDIM;
      var burnty = (y + YDIM)%YDIM;




      var oldtype = this.model[burntx][burnty];
      this.model[burntx][burnty] = 3;

      if (oldtype === 1){
          this.message = "You Froosh'd and/or Dooj'd the enemy monster. Plus " + 11*this.multiplier +" points."
          this.changeScore(11*this.multiplier);
        } else if (oldtype === 4){
          this.message = "Oh no, you Froosh'd and/or Dooj'd a The Cheat. Minus " + 15*this.multiplier +" points";
          this.changeScore(-15*this.multiplier);
        } else if (oldtype === 3){
          this.message = "Fighting fire with fire, eh? No point, so no points.";
        } else if (oldtype === 5){
          this.message = "Potion fire is too strong for your fire.";
          this.model[burntx][burnty] = 5;
        } else if (oldtype === 2){
          this.message = "You've lit yourself on fire somehow. Minus 30 Health.";
          this.injure(30);
        } else if (oldtype === 100){
          alert("You burned the secret SECRET COLLECT easter egg! Now, it's a secret SECRET COLLECT omelette. Nice going, brain for brains.");
        } else if ((oldtype === 98)||(oldtype===99)){
          this.model[burntx][burnty] = oldtype;
          this.message = "Potions are highly flammable."
          this.setFire(burntx,burnty);
        } 




      },

    placeMonster : function(x,y) { 
      this.model[x][y] = 1;
      },

    placeCheat : function(x,y) {
      this.model[x][y] = 4;
    },

    placePowerUp : function(x,y) {
      this.model[x][y] = 99;
    },

    placePotion : function(x,y) {
      this.model[x][y] = 98;
    },

    placeSECRET(x,y){
      this.model[x][y] = 100;
    },

    changeScore : function(amt){
      this.score = this.score + amt;
      if ((this.score >= 99999999999999999)||this.score <= -999999999999999){
        alert("FLAGRANT SYSTEM ERROR \n Computer over? Virus equals very yes?! That's not a good prize!");
      }
      
      if (this.score === 423827){
        alert("WAAGH! That is not a small number! That is a BIG number!");
      } 
    },

    injure : function(amt){
      this.health = this.health - amt;
      if (this.health <= 0){
        alert("You died. GAME OVER");
        location.reload();
      }
    },
    
    resetZero : function() {
    	this.model = Game().model;
      this.curLocation = Game().curLocation;
      this.score = Game().score;
      },

    stepOn : function(oldtype) {
      if (oldtype === 1){
        this.message ="Ran into a monster. -1 HP.";
        this.injure(1);
      } else if (oldtype === 4){
        this.message ="You kick The Cheat. Plus " + 10*this.multiplier + " points.";
        this.changeScore(10*this.multiplier);
      }else if (oldtype === 3){
        this.message ="Put out fire with your face. Minus 3 health.";
        this.injure(3);
      }else if (oldtype === 5){
        this.message ="It turns out that potion fire heals you. Plus 1 health.";
        this.injure(-1);
      }else if (oldtype === 2){
        this.message ="Somehow stepped on owndangself. Plus 1,000,000,000 points! (but -1 health)";
        this.changeScore(1000000);
        this.injure(1);
      }else if (oldtype === 98){
        this.message ="Got the POTION OF HEALTH. Plus 5 health.";
        this.injure(-5);
      }else if (oldtype === 99){
        this.message ="Obtained the POTION OF POWER. Plus 1 multiplier.";
        this.multiplier = this.multiplier + 1;
      }else if (oldtype === 100){
        alert("Found the secret SECRET COLLECT easter egg!") 

      }

    },

    moveUp : function(){

      var curX = this.curLocation[0];
      var curY = this.curLocation[1];
      var newY = (curY+YDIM -1)%YDIM;
      var oldtype = this.model[curX][newY];
      this.stepOn(oldtype);


      this.model[curX][curY] = 0;
      this.curLocation[1] = newY;
      this.model[curX][newY] = 2;
    },

    moveDown : function(){
      var curX = this.curLocation[0];
      var curY = this.curLocation[1];
      var newY = (curY+YDIM +1)%YDIM;
      var oldtype = this.model[curX][newY];
      this.stepOn(oldtype);


      this.model[curX][curY] = 0 ;
      this.curLocation[1] = newY;
      this.model[curX][newY] = 2;
    },

    moveLeft : function(){
      var curX = this.curLocation[0];
      var curY = this.curLocation[1];
      var newX = (curX+XDIM -1)%XDIM;
      var oldtype = this.model[newX][curY];
      this.stepOn(oldtype);


      this.model[curX][curY] = 0 ;
      this.curLocation[0] = newX;
      this.model[newX][curY] = 2;
    },

    moveRight : function(){
      var curX = this.curLocation[0];
      var curY = this.curLocation[1];
      var newX = (curX+XDIM +1)%XDIM;
      var oldtype = this.model[newX][curY];
      this.stepOn(oldtype);


      this.model[curX][curY] = 0 ;
      this.curLocation[0] = newX;
      this.model[newX][curY] = 2;
    },
    




}