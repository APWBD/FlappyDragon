import p5 from "./main.js";

export default class Obstacle
{
   /**
    *
    * @param {int} x
    * @param {int} width
    * @param {int} height
    * @param {boolean} top
    */
   constructor(x, width, height, top)
   {
      this.x = x;
      this.width = width;
      this.height = height;
      this.top = top;
      this.velocity = -10;
      this.toDelete = false;
      if (top)
      {
         this.y = 0;
      }
      else
      {
         this.y = p5.height - height;
      }
   }

   show()
   {
      p5.stroke(0);
      p5.fill(55);
      p5.rect(this.x, this.y, this.width, this.height);
   }

   move()
   {
      this.x += this.velocity;

      if (this.x <= 0)
      {
         this.toDelete = true;
      }
   }
}