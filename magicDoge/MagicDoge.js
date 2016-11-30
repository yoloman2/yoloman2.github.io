var C = {
  "game": { 
   "height": 1400,
   "width": 969
  },
"bg": {
  "width": 969,
  "height": 1400,
  "xspeed": 0,
  "yspeed": 700,
  "file": "assets/space.png"
},
"p": {
  "file": "assets/spacedoge.png",
  "width": 32,
  "height":32,
  "frames": 3,
  "startx": 160,
  "starty": 500,
  "speed": 5
},
"tacobell": {
  "file": "assets/dodge.png",
  "width": 64,
  "height": 64,
  "frames": 2,
  "fps": 10,
  "startx": 160,
  "starty": 32

    }
  }
class Boot {
  
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlighHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}


class Load {
  preload() {
    console.log("Loading..........");
    this.load.image("bg",C.bg.file)
    this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.frames);
  }
  create() {
  
    console.log("DONE");
  this.state.start("Play")

  }
}

class Play {
  create() {
    console.log("Entered play ");
   
    
   
    this.bg = this.add.titleSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
   
    this.player.anchor.set(0.5,0.);
    this.player.smothed = false;
    this.player.scale.set(1);
    this.player.animations.add("anim");
    this.player.animations.play("anim",C.p.fps,true);
    
    this.doge = this.add.sprite(C.d.startx,C,d.starty,"doge");
    this.doge.anchor.set(0.5,0.5);
    this.doge.smoothed = false;
    this.doge.scale.set(1);
    this.doge.animations.add("anim");
    this.doge.animation.play("anim",C.d.fps,true);
  }
  update() {
    console.log("play.uptate() called.");
  }
}

function restart() {
  game.state.start("Boot");
}
var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play",Play);
game.state.start("Boot");

