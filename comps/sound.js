import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  playA = () => {
    console.log(this.audioFileA);
    this.audioFileA.play();
  }
  playS = () => {
    this.audioFileS.play();
  }
 playM = () => {
    this.audioFileM.play();
  }
 playR = () => {
    this.audioFileR.play();
  }

  render() {
    return (
			<Parallax y={[-100, 100]}>
			<div id="flex">
				<div id="title">
					<span className="a" data-letter="A" onMouseOver={this.playA}> </span>
					<span className="b" data-letter="S" onMouseOver={this.playS}> </span>
          <span className="e" data-letter="M" onMouseOver={this.playM}> </span>
          <span className="d" data-letter="R" onMouseOver={this.playR}> </span>
        </div>

        <audio
          src="/static/apple.mp3" ref= { el => this.audioFileA = el }> </audio>
        <audio
          src="/static/water.mp3" ref= { el => this.audioFileS = el }> </audio>        
        <audio
          src="/static/purr.mp3" ref= { el => this.audioFileM = el }> </audio>        
        <audio
          src="/static/sizzle.mp3" ref= { el => this.audioFileR = el }> </audio>        
       
       <div id="caption"> 
          <p>hover over the letters above</p> 
	      </div>

      <style jsx>{`
         	 @import url('https://fonts.googleapis.com/css?family=Modak|Press+Start+2P|Shrikhand|VT323&display=swap');

        	  *, *:before, *:after {
       		   box-sizing: border-box;
	       	 }

		        #flex {
             display: flex;
		        flex-flow: column wrap;
		  align-items: center;
		  text-align: center;
		 }
			

		#title {
		  height: 100%;
   		width: 100%;
			//padding-top: 10%;
		}

		#caption {
                  font-family: "Source Code Pro";
		  display: inline-block;
		  position: center; 
		}


		.a:before, .b:before, .c:before, .d:before, .e:before {
   		 font-family: "VT323";
    		 display: inline-block;
   		 font-weight: 900;
    		 font-size: 10em;
   		 letter-spacing: .3em;
   		 color: pink;
    		 content:attr(data-letter);
   		 transition: all 0.35s ease-out;
		}

		.d:before {
		 margin-right: -.3em;
		}

		.a:hover:before{
   		 color: #dbff9c;
   		 transform: rotate(45deg);
		}

	        .a:hover:after{
    		 color: #dbff9c;
   		 transform: rotate(45deg);
		}

		.b:hover:before{
   		 color: #ffc780;
   		 transform: rotate(45deg);
		}

		.b:hover:after{
   		 color: #ffc780;
   		 transform: rotate(45deg);
		}

		.c:hover:before{
   		 color: #ffbdb7;
   		 transform: rotate(45deg);
		}

		.c:hover:after{
   		 color: #ffbdb7;
   		 transform: rotate(45deg);
		}

		.d:hover:before{
   		 color: #b6f2fc;
   		 transform: rotate(45deg);
		}

		.d:hover:after{
   		 color: #b6f2fc;
   		 transform: rotate(45deg);
		}

		.e:hover:before{
   		 color: #ffee8c;
    		 transform: rotate(45deg);
		}

		.e:hover:after{
   		 color: #ffee8c;
   		 transform: rotate(45deg);
		}	
	`} </style> 
	</div>
	</Parallax>
    );
  }
}


export default App;
