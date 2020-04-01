import Link from 'next/link'

const Nav = () => (
<div className="nav">
    <p className="title"> Whisp </p>
    <p className="desc"> Spring Collection: 29,99:-/month </p>
   
    <style jsx> {`
			@import url('https://fonts.googleapis.com/css?family=DM+Serif+Text|Source+Code+Pro');

        @font-face {
            font-family: 'Misto';
            src: url('../static/fonts/Misto.woff');
        }

      .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -0.4em;
      position: fixed;


      }

      .title {
      margin-left: 1em;
      font-family: 'Misto';
      font-size: 170%;
      color: black;
      }

      .desc {
      font-family: 'Misto';
      font-size: 100%;
      margin-left: 2em;
      color: gray;
      }

      .links {
      font-family: 'Source Code Pro';
      list-style: none;
      display: flex;
      margin-left: 55em;
      margin-right: 1em;
      text-decoration: none;
			}
      

			li {
      padding-left: .4em;
      padding-right: .4em;
      color: gray;
      }

      li: active {
        color: black;
      }

      li: visited {
        color: gray;
      }
      
    `} </style>
    </div>
)
export default Nav
