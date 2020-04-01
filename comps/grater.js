
import React from "react";
import { render } from "react-dom";
import Link from 'next/Link'

export class Grater extends React.Component {
	constructor(props) {
		super(props);
  	this.state = {}
  }
  	playSound = () => {
  	console.log('alksdj')
    var thissound=document.getElementById('mySound');
    thissound.volume = 0.03;
    thissound.play();
	}

	stopSound = () => {
    var thissound=document.getElementById('mySound');
    thissound.pause();
    thissound.currentTime = 0;
	}


	render () {
		return (
		<div className = "flex">
			<div className = "grid" >
				<div onMouseEnter={this.playSound} onMouseLeave={this.stopSound} className = "g">
					<img height = "75px" src="../static/grater_green.png" />
				</div>
				<div onMouseEnter={this.playSound} onMouseLeave={this.stopSound} className = "g"> 
					<img height = "75px" src="../static/grater_green.png" />
				</div>
				<div onMouseEnter={this.playSound} onMouseLeave={this.stopSound} className = "g"> 
					<img height = "75px" src="../static/grater_green.png" /> 
				</div>
				<div onMouseEnter={this.playSound} onMouseLeave={this.stopSound} className = "g"> 
					<img height = "75px" src="../static/grater_green.png" />
				</div>
				<div onMouseEnter={this.playSound} onMouseLeave={this.stopSound} className = "g"> 
					<img height = "75px" src="../static/grater_green.png" />
				</div>

			</div>

			<audio id='mySound' src='../static/glass.mp3'/>

			<style jsx>{`

				#title {
					font-family: 'Misto';
					font-size: 300%;
				}
				
				.grid {
					display: flex;
					flex-wrap: wrap;
				}

				.g:hover {
					transform: scale(1.05);
				}

				`} </style> 
		</div>

		)
	}
}

export default Grater;
