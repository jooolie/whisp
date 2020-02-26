const { Parallax, ParallaxLayer } = require('react-spring/addons.cjs');
import dynamic from 'next/dynamic';
//const sketch = require('./sketches.js')

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.rugRef = React.createRef()
		this.seqRef = React.createRef()
  	this.state = {
   		x: 100,
  		y: 100
    }
	}

	componentDidMount() {
		const p5 = require("p5");
		require('p5/lib/addons/p5.sound');
		
		this.rugSketch = new p5( p => {
			let locs = [];
			let res = 20;

			p.setup = () => {
				p.createCanvas(600, 300)
					.parent(this.rugRef.current);
				var countX = p.ceil(p.width/res) + 1;
				var countY = p.ceil(p.height/res) + 1;
				for (var j = 0; j < countY-1; j++) {
					for (var i = 0; i < countX-1; i++) {
						locs.push( new p5.Vector(res*i, res*j) );
					}
				};
			}

			p.windowResized = () => {
				p.resizeCanvas(p.windowWidth, p.windowHeight )
			}

			p.draw = () => {
				p.background(255);	
				for (var i = locs.length - 1; i >= 0; i--) {
					var h = calcVec( locs[i].x - p.mouseX, locs[i].y - p.mouseY);
					/*p.bezier(
						locs[i].x, 
						locs[i].y,
						locs[i].x + 15*p.cos(h.heading()), 
						locs[i].y + 15*p.sin(h.heading()),
						locs[i].x + 15*p.cos(h.heading())+30,
						locs[i].y + 15*p.sin(h.heading())+30,
						locs[i].x,
						locs[i].y
					);
				};*/
			}

			function calcVec(x, y) {
				return new p5.Vector(y - x, - x - y);
			}
		});

	this.seqSketch = new p5( p => {
			let osc, envelope, mySound, mouseMoved = "";
			let res = 30;
			let seqs = [];

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
			}*/

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
			<Parallax pages={4} scrolling={true} horizontal ref={ref => (this.parallax = ref)}>
				{/* PAGE 1 */}
				<ParallaxLayer 
					offset={0}
					speed={0.5}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					onClick={() => this.parallax.scrollTo(1)}>
						<div className="p5">
							<div ref={this.rugRef}></div>
  				</div>
				</ParallaxLayer>
				<ParallaxLayer 
					offset={0.23}
					speed={.75}
					onClick={() => this.parallax.scrollTo(1)}
					style={{marginTop: '3em'}}>
				{/*<img width="200" src={'../static/blob-shape (3).svg'}/>*/}
				</ParallaxLayer> 
				<ParallaxLayer 
					offset={.58}
					speed={1}
					style={{marginTop: '23em'}}
					onClick={() => this.parallax.scrollTo(1)}>
					{/*<p> This is the first product. </p> */} 
				</ParallaxLayer>
				{/* PAGE 2 */}
				<ParallaxLayer 
					offset={1}
					speed={0.5}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					onClick={() => this.parallax.scrollTo(2)}>
					<div className="p5">
    				<div ref={this.seqRef}></div>
  				</div> 
				</ParallaxLayer>
				<ParallaxLayer 
					offset={1.58}
					speed={.75}
					onClick={() => this.parallax.scrollTo(2)}
					style={{marginTop: '3em'}}>
				{/*<img width="200" src={'../static/blob-shape (4).svg'}/>*/}
				</ParallaxLayer> 
				<ParallaxLayer 
					offset={1.23}
					speed={1}
					style={{marginTop: '23em'}}
					onClick={() => this.parallax.scrollTo(2)}>
					{/*<p> This is the second product. </p>*/}
				</ParallaxLayer>			
				{/* PAGE 3 */}
				<ParallaxLayer 
					offset={2}
					speed={0.5}
					style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					onClick={() => this.parallax.scrollTo(0)}>
						<img width="400em" src={'../static/placeholder.png'}/>
				</ParallaxLayer>
				<ParallaxLayer 
					offset={2.23}
					speed={.75}
					style={{zIndex: '1', marginTop: '3em'}}
					onClick={() => this.parallax.scrollTo(0)}>
				<img width="200" src={'../static/blob-shape (3).svg'}/>
				</ParallaxLayer> 
				<ParallaxLayer 
					offset={2.58}
					speed={1}
					style={{zIndex: '2', marginTop: '23em'}}
					onClick={() => this.parallax.scrollTo(0)}>
					<p> This is the third product. </p>
				</ParallaxLayer>	



				<ParallaxLayer 
					offset={2}
					speed={0.5}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<span onClick={() => this.parallax.scrollTo(0)}>
						<img width="400em" src={'../static/placeholder.png'}/>
					</span>
				</ParallaxLayer>
			</Parallax>

			)
}
}

export default App;
