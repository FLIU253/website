import React from 'react';
import './Landing.css';
import PORTAIT from './images/portait.jpg';

const Landing = () => {
	return (
		<div className="wrapper" id="landing">
			<div className="text-white text-center landing-info">
				<h5 style={{ color: '#64ffda' }} data-aos="fade-down" data-aos-duration="3000">
					Hi, my name is
				</h5>
				<h1
					data-aos="zoom-in"
					style={{ color: '#E6F1FF', fontWeight: 'bold', fontSize: '70px' }}
					data-aos-duration="3000"
				>
					<hr />
					Franklin Liu <hr />
				</h1>
				<div className="profile" data-aos="zoom-in" data-aos-duration="3000">
					<img src={PORTAIT} alt="portait" className="portait-img" data-aos="flip-up" />
					<div className="bio" style={{ color: '#8892b0', fontWeight: 'bold' }}>
						<h3 style={{ color: 'rgb(100, 255, 218)' }}>Details</h3>
						<br />
						<p>
							<strong style={{ color: 'rgb(100, 255, 218)' }}>Name:</strong>
						</p>
						<p>Franklin Liu</p>
						<p>
							<strong style={{ color: 'rgb(100, 255, 218)' }}>Age:</strong>
						</p>
						<p>Born July 3rd, 1998</p>
						<p>
							<strong style={{ color: 'rgb(100, 255, 218)' }}>Location: </strong>
						</p>
						<p>Toronto, ON, Canada but willing to relocate!</p>
						<p style={{ lineHeight: '1.5em' }}>
							A self-driven Software Engineer with a passion for learning internet of things. Eager to
							learn and develop skills in full stack development.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
