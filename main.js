import Game from "./Game.js";

export default p5 = new p5(p5 =>
{
   let game;
   let frame;

   p5.setup = () =>
   {
      p5.createCanvas(1000, 600);
      p5.frameRate(30);
      frame = 0;
      game = new Game();
   }

   p5.draw = () =>
   {
      frame++;
      p5.background(200);
      game.dragon.show();
      game.dragon.move();

      let obstacles = game.obstacles;
      for (let obstacle of obstacles)
      {
         obstacle.show();
         obstacle.move();
      }

      if (frame == 30)
      {
         game.spawnObstacle();
         frame = 0;
      }

      for (let i = obstacles.length; i > 0; i--)
      {
         let obj = obstacles[i-1];
         if (obj.toDelete)
         {
            game.obstacles.splice(i-1, 1);
            game.addPoint();
         }
      }

      p5.textAlign(p5.CENTER);
      p5.textSize(20);
      p5.text("Point", p5.width - 100, 50);
      p5.text(game.point, p5.width - 100, 80);
   }

   p5.keyPressed = (e) =>
   {
      if (e.key == "ArrowUp")
      {
         game.dragon.flap = true;
      }
   }

   p5.keyReleased = (e) =>
   {
      if (e.key == "ArrowUp")
      {
         game.dragon.flap = false;
      }
   }
});