import p5 from "./main.js";

export default class Dragon
{
   constructor()
   {
      this.width = 100;
      this.height = 50;
      this.y = p5.height - this.height - 2;
      this.x = 80;
      this.image = p5.loadImage("dragon.png");
   }

   show()
   {
      p5.image(this.image, this.x, this.y, this.width, this.height);
   }

   flap()
   {
      if (this.y - 100 <= 0)
      {
         this.y = 0;
      }
      else
      {
         this.y -= 100;
      }
   }

   drop()
   {
      if (this.y + this.height + 2 < p5.height)
      {
         this.y += 12;
      }
      else
      {
         this.y = p5.height - this.height - 2;
      }
   }
}