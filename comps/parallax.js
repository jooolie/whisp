const { Parallax, ParallaxLayer } = require('react-spring/addons.cjs');
import Link from 'next/Link'
import dynamic from 'next/dynamic';
import Grater from '../comps/grater'
import Vase from '../comps/vase'
import Seq from '../comps/seq'

export class App extends React.Component {
	constructor(props) {
		super(props);
  	this.state = {
   		x: 100,
  		y: 100
    }
	}

	render () {
		return (
			<div className="wrapper">
			<Parallax pages={4} scrolling={true} horizontal ref={ref => (this.parallax = ref)}>
				{/* PAGE 0 */}
				<ParallaxLayer
        			offset = {0.35}
					speed={.75}
					style={{marginTop: '10em'}}>
					<p className="welcome"> Spring Collection </p>
				</ParallaxLayer>
				<ParallaxLayer
        			offset = {0.35}
					speed={.75}
					style={{marginTop: '15em'}}>
					<p className="headphones"> 29,99:- per month </p>
				</ParallaxLayer>
				<ParallaxLayer
        			offset = {0.35}
					speed={.75}
					style={{marginTop: '17em', height: "60px", width: "60px"}}>
					<p className="headphones"> please wear headphones </p>
				</ParallaxLayer>
				<ParallaxLayer
        			offset = {0.92}
					speed={.75}
					onClick={() => this.parallax.scrollTo(1)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-right"> </div>
				</ParallaxLayer>

				{/* PAGE 1 */}

				<ParallaxLayer
					offset={1.25}
					speed={0.5}
					style={{marginTop: '7em'}}>
  				  <img height="325px" src={'../static/plantimg_1.jpeg'}/>
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {1.1}
					speed={1}
					style={{marginTop: '11em'}}>
					<img height = "150px" src="../static/plantimg_2.jpeg" />
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {1.1}
					speed={1}
					style={{marginTop: '22em'}}>
					<img height = "150px" src="../static/plantimg_3.jpeg" />
				</ParallaxLayer>
				
				<ParallaxLayer
					offset={1.7}
					style={{marginTop: '7em'}}
					speed={1}>
					<Seq />
				</ParallaxLayer>

				
				<ParallaxLayer
        			offset = {1.03}
					speed={.75}
					onClick={() => this.parallax.scrollTo(0)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-left"> </div>
				</ParallaxLayer>
				<ParallaxLayer
        			offset = {1.92}
					speed={.75}
					onClick={() => this.parallax.scrollTo(2)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-right"> </div>
				</ParallaxLayer>

				{/* PAGE 2 */}

				<ParallaxLayer
					offset={2.53}
					speed={0.5}
					style={{marginTop: '7em'}}
					onClick={() => this.parallax.scrollTo(0)}>
					<div>
  				  <img height="325px" src={'../static/vaseimg_1.jpg'}/>
          			</div>
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {2.2}
					speed={1}
					style={{marginTop: '7em'}}
					onClick={() => this.parallax.scrollTo(0)}>
					<img height = "150px" src="../static/vaseimg_2.jpeg" />
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {2.2}
					speed={1}
					style={{marginTop: '18em'}}>
					<img height = "150px" src="../static/vaseimg_3.jpeg" />
				</ParallaxLayer>
				
				<ParallaxLayer
					offset={2.42}
					speed={1}
					style={{marginTop: '6em'}}>
					  <Vase />
				</ParallaxLayer>
				 
				<ParallaxLayer
        			offset = {2.03}
					speed={.75}
					onClick={() => this.parallax.scrollTo(1)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-left"> </div>
				</ParallaxLayer>
				<ParallaxLayer
        			offset = {2.92}
					speed={.75}
					onClick={() => this.parallax.scrollTo(3)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-right"> </div>
				</ParallaxLayer>

				{/* PAGE 3 */}

				<ParallaxLayer
				    offset = {3.1}
					speed={1}
					style={{marginTop: '7em'}}>
					<img height = "325px" src="../static/gratimg_1.jpeg" />
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {3.5}
					speed={1}
					style={{marginTop: '7em'}}>
					<img height = "325px" src="../static/gratimg_2.jpg" />
				</ParallaxLayer>
        		<ParallaxLayer
        			offset = {3.1}
					speed={.75}
					style={{marginTop: '3em', height: "100px", width: "500px"}}>
					<Grater />
				</ParallaxLayer>

				<ParallaxLayer
        			offset = {3.03}
					speed={.75}
					onClick={() => this.parallax.scrollTo(2)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-left"> </div>
				</ParallaxLayer>
				<ParallaxLayer
        			offset = {3.92}
					speed={.75}
					onClick={() => this.parallax.scrollTo(0)}
					style={{marginTop: '3em', height: "60px", width: "60px"}}>
					<div className="arrow-right"> </div>
				</ParallaxLayer>
			</Parallax>
			<style jsx>{`

				@font-face {
				    font-family: 'Misto';
				    src: url('../static/fonts/Misto.woff');
				}
				@import url('https://fonts.googleapis.com/css?family=DM+Serif+Text|Source+Code+Pro');

				.wrapper {
					padding-top: 3em;

				}

				.welcome {
					font-family: 'Misto';
					font-size: 200%;
				}

				.headphones {
					font-family: 'Source Code Pro';
					color: gray;
					font-size: 115%
				}

				.arrow-left {
					margin-top: 12em;
					border-bottom: 1px solid #000;
					border-right: 1px solid #000;
					width: 35px;
					height: 35px;
					transform: rotate(135deg);

				}

				.arrow-left:hover {
					border-bottom: 2px solid #000;
					border-right: 2px solid #000;
				}


				.arrow-right {
					margin-top: 12em;
					border-bottom: 1px solid #000;
					border-right: 1px solid #000;
					width: 35px;
					height: 35px;
					transform: rotate(-45deg);

				}

				.arrow-right:hover {
					border-bottom: 2px solid #000;
					border-right: 2px solid #000;
				}

				h2 {
					font-family: 'Misto';
					font-size: 150%;
					color: #585858;
					padding-top: 9em;
					writing-mode: vertical-rl;
				}

				`} </style> 
			</div>

			)
}
}

export default App;
