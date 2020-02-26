import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
const Products = () => (
	<div>
		<div className="parallax">
			<Parallax>	
				<img className="blob" width="200em" src={'../static/blob-shape (3).svg'}/>
			</Parallax>
		<div className="prod">
		<Parallax x={[50, 10]} y={[100, 0]}>
			<img width="400em" className="image" src={'../static/placeholder.png'}/>
		</Parallax>
	 <Parallax x={[140, 10]}>
		<img width = "400em" className = "image" src={'../static/placeholder.png'}/>
	</Parallax>
	</div>
	</div>
		<style jsx>{`
			.prod{
				display: flex;
				justify-content: space-around;
			}

		`}</style>
  </div>
)
export default Products
