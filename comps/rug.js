import dynamic from 'next/dynamic';

export class Rug extends React.Component {
	constructor(props) {
		super(props);
		this.rugRef = React.createRef()
  	this.state = {
   		x: 100,
  		y: 100
    }
	}

	componentDidMount() {
		const p5 = require("p5");
		require('p5/lib/addons/p5.sound');

    this.rugSketch = new p5( p => {
      var rows = 0,
        cols = 0,
        space = 33,
        scl = 0,
        rot = 0,
        marg = 3;
      p.disableFriendlyErrors = true;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(this.rugRef.current);
        rows = p.windowWidth / space;
        cols = p.windowHeight / space;
      }

		/*	p.windowResized = () => {
				p.resizeCanvas(p.windowWidth, p.windowHeight )
      }*/

			p.draw = () => {
				p.background(255);
				//p.noStroke();

				for (var i = 0; i <= rows; i++) 
				{
					for (var j = 0; j < cols; j++) {
						var offSet = p.PI + p.PI / rows * i + p.PI / cols * j;
						var x = (i + .5) * space;
						var y = (j + .5) * space;
						var chaosX = p.mouseX - x;
						var chaosY = p.mouseY - y;
           // p.noStroke();
						p.fill(255, 213, 110);
						var orient = p.atan2(chaosY, chaosX);
						var pacMan = p.map(
            p.cos(rot / 7 + offSet), -111, 111, p.radians(900000), p.TWO_PI);
						
            scl = space * .90;
            p.push();
						p.translate(x + marg, y + marg);
						p.rotate(orient + rot);
						p.line(0, 0, scl, scl);
            p.pop();
					}
				}
				rot += 0.003;
			}
		});
	}

render () {
		return (
			<div className="p5">
				<div ref={this.rugRef}></div>
  		</div>
		)
  }
}

export default Rug;
