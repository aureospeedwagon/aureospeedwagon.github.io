//does f i times.
times = function (i, f) {
	if (i === 0) return;
	f(); times (i-1, f)
	}

var XDIM = 32;
var YDIM = 16;

//GAME MODEL
Game = function() {
  var that = Object.create(Game.prototype);





  var player = Player();
  that.PLAYER = player;

  

  var groundRows = []
	 times(XDIM, function() {
  		var col = [];
  		groundRows.push(col);
  		times(YDIM, function() {
    		col.push("GRASS");
  		})
	})
	that.GROUND = groundRows;

  var entRows = []
   times(XDIM, function() {
      var col = [];
      entRows.push(col);
      times(YDIM, function() {
        col.push("Empty");
      })
  })
  that.ENTITY = entRows;

  var dmgRows = []
   times(XDIM, function() {
      var col = [];
      dmgRows.push(col);
      times(YDIM, function() {
        col.push("Empty");
      })
  })
  that.DMGOBJ = dmgRows;


    return that;
}

Game.prototype = {

    placeEntity : function(entity) {
      var xloc = entity.LocationX;
      var yloc = entity.LocationY;
      this.ENTITY[xloc][yloc] = entity;
    }, 

    clearEntCell : function(x,y) { 
      this.ENTITY[x][y] = "Empty";
    },

    moveEnt : function(ent,x,y) { 
      
      var EntName  = ent.Name;
      var EntType  = ent.Type;
      var EntMove  = ent.MoveType;
      var EntHealth  = ent.Health;
      var EntStepDmg  = ent.StepDmg;
      var EntX = ent.LocationX;
      var EntY = ent.LocationY;
      var EntTimer = ent.MOVETIMER;

      var newEnt = Entity(EntName, EntType, EntMove, EntHealth, EntStepDmg, x, y);
      newEnt.MOVETIMER = EntTimer;

      return newEnt;






    }, 

    placeDmgObj : function(obj) { 
      this.DMGOBJ[obj.LocationX][obj.LocationY] = obj;
    }, 

    clearDmgObjCell : function(x,y) { 
      this.DMGOBJ[x][y] = "Empty";
    }, 

    moveDmgObj : function(obj,x,y) { 
      var name = obj.Name;
      var weap = obj.WeaponType;
      var dmgtype = obj.DmgType;
      var dmg = obj.Damage;
      var oldx = obj.LocationX;
      var oldy = obj.LocationY;

      var newDmgObj = DmgObj(name, weap, dmgtype, dmg, x, y);
      return newDmgObj;



    }, 

    nextStep : function() { 

      var newENTITY = []
      times(XDIM, function() {
        var col = [];
        newENTITY.push(col);
        times(YDIM, function() {
        col.push("Empty");
        })
      })

      var newDMGOBJ = []
      times(XDIM, function() {
        var col = [];
        newDMGOBJ.push(col);
        times(YDIM, function() {
        col.push("Empty");
        })
      })
      


      for (var i = 0; i < XDIM; i++) { 
        for (var j = 0; j < YDIM; j++) { 
          var thisEnt = this.ENTITY[i][j];
          var thisDmg = this.DMGOBJ[i][j];

          if ((thisEnt != "Empty")&&(thisDmg !="Empty")){
            var dmgamt = thisDmg.Damage;
            var dmgtype = thisDmg.DmgType;
            var weap = thisDmg.WeaponType;

            //Check weapons damage and types
            // ADD MAGIC, BOW, ETC
            if (dmgtype === "P"){
              thisEnt.injure(dmgamt);
              if (weap.startsWith("Sword")){
                this.clearDmgObjCell(i,j);
              }
            }
          }
    
      }
    }


      //DO ACTIONS

      for (var i = 0; i < XDIM; i++) { 
        for (var j = 0; j < YDIM; j++) {

          if (this.ENTITY[i][j] != "Empty"){
          this.ENTITY[i][j].doAction();
          }

          if (this.DMGOBJ[i][j] != "Empty"){
          this.DMGOBJ[i][j].doAction();
          }

        }
      }

      //DO MOVES

      for (var i = 0; i < XDIM; i++) { 
        for (var j = 0; j < YDIM; j++) {

          if (this.ENTITY[i][j] != "Empty"){

            var newposENT = this.ENTITY[i][j].moveAction();
            if (newposENT==="DEAD"){
              newENTITY[i][j] = "Empty";
            }else{
              var newposENTX = newposENT[0];
              var newposENTY = newposENT[1];

              var newEnt = this.moveEnt(this.ENTITY[i][j], newposENTX, newposENTY);
              newENTITY[newposENTX][newposENTY] = newEnt;
            }
          }


          if (this.DMGOBJ[i][j] != "Empty"){
            var newposDMG = this.DMGOBJ[i][j].moveAction();
            if (newposDMG==="DEAD"){
              newDMGOBJ[i][j] = "Empty";
            }else{
              var newposDMGX = newposDMG[0];
              var newposDMGY = newposDMG[1];
              var newDmg = this.moveDmgObj(newposDMGX, newposDMGY);
              newDMGOBJ[newposDMGX][newposDMGY] = newDmg;
          }
          }

        }
      }


                //check interactions with player
      for (var i = 0; i < XDIM; i++) { 
        for (var j = 0; j < YDIM; j++) {

          if ((this.PLAYER.locx === i)&&(this.PLAYER.locy === j)){

            var thisEnt = newENTITY[i][j];
            var thisDmg = newDMGOBJ[i][j];

            if (thisEnt != "Empty"){
              var dmgamt = thisEnt.StepDmg;
              this.PLAYER.injure(dmgamt);
            }

            if (thisDmg != "Empty"){
              var dmgamt = thisDmg.Damage;
              this.PLAYER.injure(dmgamt);
              this.clearDmgObjCell(i,j);
            }


          }
        }
      }


    this.ENTITY = newENTITY;
    this.DMGOBJ = newDMGOBJ;

    },

    doTHING : function(x,y) { 
      //DOES THING
    }, //DONT FORGET COMMAS
}


//PLAYER MODEL
Player = function() {
  var that = Object.create(Player.prototype);

  that.locx = XDIM/2;
  that.locy = YDIM/2;
  that.Health = 10;

    return that;
}

Player.prototype = {

    moveUp : function() {
      var oldx = this.locx;
      var oldy = this.locy;
      this.locx = oldx;
      this.locy = oldy-1;
    }, 

    moveDown : function() { 
      var oldx = this.locx;
      var oldy = this.locy;
      this.locx = oldx;
      this.locy = oldy + 1;
    }, 

    moveLeft : function() { 
      var oldx = this.locx;
      var oldy = this.locy;
      this.locx = oldx-1;
      this.locy = oldy;
    }, 

    moveRight : function() { 
      var oldx = this.locx;
      var oldy = this.locy;
      this.locx = oldx + 1;
      this.locy = oldy;
    }, 

    setLoc : function(x,y) { 
      this.locx = x;
      this.locy = y;
    }, 

    injure : function(amt) { 
      this.Health = this.Health - amt;
    }, 

    doTHING : function(x,y) { 
      //DOES THING
    }, //DONT FORGET COMMAS

}

//Base ENTITY MODEL
Entity = function(name, type, move, health, stepdmg, xloc, yloc) {
  var that = Object.create(Entity.prototype);

  that.Name = name;
  that.Type = type;
  that.MoveType = move;
  that.Health = health;
  that.StepDmg = stepdmg;
  that.LocationX = xloc;
  that.LocationY = yloc;

  that.MOVETIMER = 0;

    return that;
}

Entity.prototype = {




    doAction : function() {
      //do something;
    },



    moveAction : function() { 

      if (this.Health <= 0){
        return "DEAD";
      }
      
      //Left Step
      if (this.MoveType === "Left"){
          //move left
          var newx = this.LocationX - 1;
          var newy = this.LocationY;
          var newpos = [newx, newy];
          return newpos;
      }
      
      //Patrol 3 horizontal
      if (this.MoveType === "Patrol 3H"){
        if ((this.MOVETIMER % 4) <=1){  

          //move left
          var newx = this.LocationX - 1;
          var newy = this.LocationY;
          var newpos = [newx, newy];
          
          this.MOVETIMER = this.MOVETIMER + 1;
          return newpos;

        } else{
           //move right
          var newx = this.LocationX + 1;
          var newy = this.LocationY;
          var newpos = [newx, newy];

          this.MOVETIMER = this.MOVETIMER + 1;
          return newpos;

        }


      }
    }, 

    injure: function(amt) {
      this.Health = this.Health - amt;
    },

    onPhysHit : function(dmg) { 
      this.injure(dmg);
    },

    onDeath : function() { 
      //do something, maybe;
    },

    doTHING : function(x,y) { 
      //DOES THING
    }, //DONT FORGET COMMAS

}


//Base DamageObject MODEL
DmgObj = function(name, weaptype, dmgtype, dmg, xloc, yloc) {
  var that = Object.create(DmgObj.prototype);

  that.Name = name;
  that.WeaponType = weaptype;
  that.DmgType = dmgtype
  that.LocationX = xloc;
  that.LocationY = yloc;
  that.Damage = dmg;

    return that;
}

DmgObj.prototype = {

    doAction : function() {
      //DO thing
    },

    

    moveAction : function(model) { 
      //if sword, disappear after stab
      if (this.WeaponType.startsWith("Sword")){
        return "DEAD";
      }

    }, 

    doTHING : function(x,y) { 
      //DOES THING
    }, //DONT FORGET COMMAS

}

