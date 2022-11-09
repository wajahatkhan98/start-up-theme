import { useEffect } from 'react';
import AnimatedText from 'react-animated-text-content';

function Slider2() {
	useEffect(() => {
		const threeScript = document.createElement('script');
		threeScript.setAttribute('id', 'threeScript');
		threeScript.setAttribute(
			'src',
			'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
		);

		document.getElementsByTagName('head')[0].appendChild(threeScript);
		return () => {
			if (threeScript) {
				threeScript.remove();
			}
		};
	}, []);
	return (
		// // <!-- Slider -->

		<div className="banner-two gradient">
			<div className="container">
				<div className="banner-inner">
					{/* <img
						className="img1 move-2"
						src="images/main-slider/slider2/pic3.png"
						alt=""
					/> */}
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="banner-content text-white">
								<h6
									className="wow fadeInUp sub-title bgl-light text-white"
									data-wow-delay="0.5s"
									style={{
										visibility: 'visible',
										animationDelay: '0.5s',
										animationName: 'fadeInUp',
										background:
											'linear-gradient(270deg, #ffe100 , #f8ae56 , #ffe100)',
									}}
								>
									We are The Best
								</h6>
								{/* <AnimatedText
									type="words" // animate words or chars
									animation={{
										x: '200px',
										y: '-20px',
										scale: 1.1,
										ease: 'ease-in-out',
									}}
									animationType="float"
									interval={0.06}
									duration={0.1}
									className="wow fadeInUp m-b20"
									tag="h1"
									threshold={0.1}
									rootMargin="20%"
								> */}
								<h1
									className="wow fadeInUp m-b20"
									data-wow-delay="1s"
									style={{
										visibility: 'visible',
										animationDelay: '1s',
										animationName: 'fadeInUp',
									}}
								>
									We Provide Website Solution For You
								</h1>
								{/* </AnimatedText> */}

								<p
									className="wow fadeInUp m-b30"
									data-wow-delay="1.5s"
									style={{
										visibility: 'visible',
										animationDelay: '1.5s',
										animationName: 'fadeInUp',
									}}
								>
									Mauris in enim sollicitudin quam sollicitudin fermentum ut
									vitae massa. Donec venenatis accumsan nisi, sit amet maximus
									velit euismod sit amet. Vivamus et sem sed ipsum pretium
									lobortis non vitae sem.
								</p>
								<a
									href="/about-us-2"
									className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
									data-wow-delay="2s"
									style={{
										visibility: 'visible',
										animationDelay: '2s',
										animationName: 'fadeInUp',
										backgroundColor: '#ffe100',
										color: '#303030',
									}}
								>
									Learn More
								</a>
							</div>{' '}
						</div>
					</div>
					{/* <img
						className="img2 move-1"
						src="images/pattern/pattern8.png"
						alt=""
					/> */}
					{/* <img
						className="img3 move-2"
						src="images/pattern/pattern9.png"
						alt=""
					/> */}
				</div>
			</div>
			<div className="dz-media">
				{/* <img src="images/main-slider/slider2/pic1.jpg" alt="" /> */}
			</div>
		</div>
	);
}

export default Slider2;
