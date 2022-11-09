import { useEffect, useState, useRef } from 'react';
import AboutUs2 from '../element/aboutUs-2';
import Blog2 from '../element/blog-2';
import Clients2 from '../element/clients-2';
import Counter2 from '../element/counter2';
import OurServices2 from '../element/our-services-2';
import Pricing2 from '../element/pricing-2';
import Projects2 from '../element/Projects-2';
import Service2 from '../element/service-2';
import Slider2 from '../element/slider-2';
import Testimonial2 from '../element/testimonial-2';
import Footer2 from '../layout/footer-2';
import Header2 from './../layout/header-2';

import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js';
// import "../css/skin/skin-1.css";

function Index2() {
	const [vantaEffect, setVantaEffect] = useState(0);

	const vantaRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,

					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: '#ffe100',
					backgroundColor: '#303030',
					maxDistance: 34.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.distroy();
		};
	}, [vantaEffect]);

	return (
		<>
			<Header2 />
			<div className="page-content bg-white">
				<main
					className="style-main"
					style={{ height: '100vh', width: '100%' }}
					ref={vantaRef}
				></main>
				<Slider2 />

				<Service2 />
				<AboutUs2 />
				<Counter2 />
				<OurServices2 />
				<Projects2 />
				<Pricing2 />
				<Testimonial2 />
				<Blog2 />
				<Clients2 />
			</div>
			<Footer2 />
		</>
	);
}

export default Index2;
