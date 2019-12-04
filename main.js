import Dragon from "./Dragon.js";

export default p5 = new p5(p5 =>
{
   let dragon;

   p5.setup = () =>
   {
      p5.createCanvas(1000, 600);
      p5.frameRate(30);
      dragon = new Dragon();
   }

   p5.draw = () =>
   {
      p5.background(200);
      dragon.show();
      dragon.drop();
   }

   p5.keyReleased = (e) =>
   {
      if (e.key == "ArrowUp")
      {
         dragon.flap();
      }
   }
});