import P5Wrapper from "../navigation/p5Wrapper";

export default function Screen4(){
    const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    }
  
    p.draw = () => {
      if (p.frameCount % 100 == 0) p.background(0, 0, 0);
      p.fill(p.random(255), p.random(255), p.random(255));
      if (p.mouseIsPressed) {
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      }
    }
  };


    return(
        <div className="p5wrapper">
            <P5Wrapper sketch={sketch} />
        </div>
    );
}