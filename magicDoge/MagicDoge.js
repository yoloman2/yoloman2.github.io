var C = {
  "game": 320,
   "width": 568

},
"bg": {
  "width": 320,
  "height": 568,
  "xspeed": 0,
  "yspeed": 700,
  "file": "assets/backgrounds.jpg"
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
  }
  create() {
  
  this.load.image("bg","assets/backgrounds.jpg")
    console.log("DONE");
  this.state.start("Play")

  }
}

class Play {
  create() {
    console.log("Entered play ");
    this.bg = this.add.titleSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
  }
}
var game = new Phaser.Game(1400,969);
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play",Play);
game.state.start("Boot");

