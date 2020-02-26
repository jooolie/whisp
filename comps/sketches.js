const p5 = require("p5");
		require('p5/lib/addons/p5.sound');

const noise_sketch = new p5( p => {
			let noiseScale = 0.02;	
			p.setup = ()  => {
				p.createCanvas(p.windowWidth, p.windowHeight)
					.parent(this.noiseRef.current);
				p.background('white');
				p.strokeWeight(5);
			}
			p.draw = () => {
				p.background(255);
				for (let x=0; x < p.width; x++) {
					let noiseVal = p.noise((p.mouseX+x)*noiseScale, p.mouseY*noiseScale);
					let c1 = 202*noiseVal
					let c2 = 217*noiseVal
					let c3 = 216*noiseVal
					p.stroke(c1, c2, c3);
					p.line(x, p.mouseY+noiseVal*80, x, p.height);
				}
			}
		})
module.exports = {
	noise_sketch
}
