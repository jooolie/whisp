const { Parallax, ParallaxLayer } = require('react-spring/addons.cjs');
import Link from 'next/Link'
import dynamic from 'next/dynamic';
import Grater from '../comps/grater'

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
			<div>
			<Parallax pages={4} scrolling={true} horizontal ref={ref => (this.parallax = ref)}>
				{/* PAGE 1 */}
				<div>
				<ParallaxLayer
				    offset = {.2}
					speed={1}
					style={{marginTop: '7em'}}
					onClick={() => this.parallax.scrollTo(1)}>
					<img height = "325px" src="../static/gratimg_1.jpeg" />
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {.62}
					speed={1}
					style={{marginTop: '7em'}}
					onClick={() => this.parallax.scrollTo(1)}>
					<img height = "150px" src="../static/gratimg_2.jpeg" />
				</ParallaxLayer>
				<ParallaxLayer
				    offset = {.62}
					speed={1}
					style={{marginTop: '18em'}}
					onClick={() => this.parallax.scrollTo(1)}>
					<img height = "150px" src="../static/gratimg_3.jpeg" />
				</ParallaxLayer>
        		<ParallaxLayer
        			offset = {.15}
					speed={0.5}
					onClick={() => this.parallax.scrollTo(1)}>
					<h2> Ginger Grater </h2> 
        		</ParallaxLayer>
        		<ParallaxLayer
        			offset = {.2}
					speed={.75}
					onClick={() => this.parallax.scrollTo(1)}
					style={{marginTop: '3em'}}>
					<Grater />
				</ParallaxLayer>
        		</div>

				{/* PAGE 2 */}
				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					onClick={() => this.parallax.scrollTo(2)}>
					<div className="p5">
  				  <img width="400em" src={'../static/placeholder.png'}/>
          </div>
				</ParallaxLayer>
				<ParallaxLayer
					offset={1.58}
					speed={.75}
					onClick={() => this.parallax.scrollTo(2)}
					style={{marginTop: '3em'}}>
				    <img width="200" src={'../static/blob-shape (4).svg'}/>
				</ParallaxLayer>
				<ParallaxLayer
					offset={1.23}
					speed={1}
					style={{marginTop: '23em'}}
					onClick={() => this.parallax.scrollTo(2)}>
					  <p> This is the second product. </p>
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
			<style jsx>{`

				@font-face {
				    font-family: 'Misto';
				    src: url('../static/fonts/Misto.woff');
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
