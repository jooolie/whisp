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
			let osc, envelope, mySound, mouseMoved = "";
			let res = 30;
			let seqs = [];
      p.disableFriendlyErrors = true;
			p.setup = () => {
				p.createCanvas(400, 400)
					.parent(this.seqRef.current);
				var countX = p.ceil(p.width/res) + 1;
				var countY = p.ceil(p.height/res) + 1;
				//osc = new p5.SinOsc();
				//envelope = new p5.Env();
				//envelope.setADSR(0.001, 0.5, 0.1, 0.5);
				//envelope.setRange(1, 0);
				//osc.start();
				for (var j = 0; j < countY; j++) {
					for (var i = 0; i < countX; i++) {
						seqs.push({ x: res*i, y: res*j, color: "pink", visited: false}); 
					}
				}
			}
			p.windowResized = () => {
				p.resizeCanvas(p.windowWidth, p.windowHeight )
			}
				/*
			p.mouseMoved = () => {
				p.userStartAudio()
				mouseMoved = (p.mouseX / p.width - 0.5) * 4
				if(mouseMoved < 1 && mouseMoved > 0.5) {
				    let freqValue = p.midiToFreq(60);
				    osc.freq(freqValue);
				    envelope.play(osc, 0, 0.1);
				} 
				if(mouseMoved > 0 && mouseMoved < 0.5) {
				    let freqValue = p.midiToFreq(62);
				    osc.freq(freqValue);
				    envelope.play(osc, 0, 0.1);
				}
				if(mouseMoved < 0 && mouseMoved < -(0.5)) {
				    let freqValue = p.midiToFreq(64);
				    osc.freq(freqValue);
				    envelope.play(osc, 0, 0.1);
				}
				if(mouseMoved > -(1.0) && mouseMoved < -(0.5)) {
				    let freqValue = p.midiToFreq(67);
				    osc.freq(freqValue);
				    envelope.play(osc, 0, 0.1);
				}
      } */

			p.draw = () => {
				p.cursor(p.HAND)
				for (var i = seqs.length - 1; i >= 0; i--) {
					let x_bound = seqs[i].x + res
					let y_bound = seqs[i].y + res
					if(p.mouseX > seqs[i].x - res && p.mouseX < x_bound
						&& p.mouseY > seqs[i].y - res && p.mouseY < y_bound) {
							if (p.mouseX > p.pmouseX) {
								p.fill("blue")
								p.circle(seqs[i].x, seqs[i].y, res*1.5)
								seqs[i].visited = true
								seqs[i].color = "blue"
							} else if(p.mouseX <= p.pmouseX) {
								p.fill("pink")
								p.circle(seqs[i].x, seqs[i].y, res*1.5)
								seqs[i].visited = true
								seqs[i].color = "pink"
							}
					} else if(seqs[i].visited == true && seqs[i].color == "blue") {
						p.fill("blue")
						p.circle(seqs[i].x, seqs[i].y, res*1.5)
					} else {
						p.fill("pink")
						p.circle(seqs[i].x, seqs[i].y, res*1.5)
						seqs[i].visited = false
					}
				}
			}
			function calcVec(x, y) {
				return new p5.Vector(y - x, - x - y);
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
