import Dragon from "./Dragon.js";
import Obstacle from "./Obstacle.js";
import p5 from "./main.js";

export default class Game
{
   constructor()
   {
      this.dragon = new Dragon();
      this.obstacles = new Array();
      this.point = 0;
   }

   spawnObstacle()
   {
      const clearingHeight = 250;
      const remaining = p5.height - clearingHeight;
      const top = p5.random(50, remaining-50);
      const bottom = remaining - top;

      this.obstacles.push(new Obstacle(p5.width - 100, 40, top, true));
      this.obstacles.push(new Obstacle(p5.width - 100, 40, bottom, false));
   }

   addPoint()
   {
      this.point += 0.5;
   }
}