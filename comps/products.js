import Link from 'next/Link'

export class App extends React.Component {
	constructor(props) {
		super(props);
  	this.state = {}
	}

	render () {
		return (
		<div className = "flex">
			<h1 id='title'> Whisp </h1>
			<div className = "grid">
				<div className = "box color-a"> 
					<img height ="150px" src = {"../static/button_svg.svg"}/>
				</div>
				<div className = "box color-b"> 
				<img height ="200px" src = {"../static/teapot_test.png"} />
				</div>
				<div className = "box color-a"> </div>
				<div className = "box color-b"> </div>
				<div className = "box color-a"> </div>
				<div className = "box color-b"> </div>
			</div>

			<style jsx>{`
				@font-face {
				    font-family: 'Misto';
				    src: url('../static/fonts/Misto.woff');
				}

				body {
					background: pink;
				}
				#title {
					font-family: 'Misto';
					font-size: 300%;
				}
				.flex {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.grid {
					background: red;
					width: 600px;
					display: flex;
					flex-wrap: wrap;
				}

				.box {
					height: 00px;
					width: 200px;
				}

				.color-a {
					background: yellow;
				}

				.color-b {
					background: #c7f8fc;
				}

				`} </style> 
		</div>
		)
	}
}

export default App;
