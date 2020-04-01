import dynamic from 'next/dynamic';

export class Seq extends React.Component {
	constructor(props) {
		super(props);
		this.seqRef = React.createRef()
  	this.state = {
   		x: 100,
  		y: 100
    }
	}

	componentDidMount() {
		const p5 = require("p5");
		require('p5/lib/addons/p5.sound');

   	this.seqSketch = new p5( p => {
   		let cnv, sound;
   		let canWidth = 200;
		let canHeight = 400;
		let x = canWidth/2;
   		let y = canHeight-100;
		let center = canWidth/2;
		
		p.setup = () => {
		  sound = p.loadSound('../static/plantsound3.mp3');
		  cnv = p.createCanvas(canWidth, canHeight).parent(this.seqRef.current);
		  cnv.mouseOver(playSound);
		  cnv.mouseMoved(mouseMoved);
		  cnv.mouseOut(mouseOut);
		  p.masterVolume(0.01);
		}

		function playSound(){
			sound.play();
		}

		function mouseMoved() {
			x = p.mouseX;
			y = p.mouseY;
		}

		function mouseOut() {
			x = canWidth/2;
   			y = canHeight-100;
		}

		p.draw = () => {
		  p.background(255);
		  p.stroke(91, 186, 93);
		  p.noFill();
		  p.bezier(center, 60, center+10, 90, center+10, 90, x, y);
		  p.bezier(center, 90, center+10, 100, center+20, 110, x, y);
		}
					
  });
}
	render () {
		return (
			<div className="p5">
				<div ref={this.seqRef}></div>
  		</div>
		)
  }
}

export default Seq;
