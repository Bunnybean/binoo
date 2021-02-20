import React from 'react';
import p1 from '../images/p4.PNG';
import p2 from '../images/p5.PNG';
import p3 from '../images/p6.PNG';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Cards() {
	return (
		<>
			<div className="best">BINOO</div>
			<Carousel className="carousel">
				<Carousel.Item>
					<img className="d-block w-100" src={p1} alt="First slide" />
					<Carousel.Caption>
						<h3 style={{ color: 'white' }}>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={p3} alt="Second slide" />

					<Carousel.Caption>
						<h3 style={{ color: 'white' }}>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={p2} alt="Third slide" />

					<Carousel.Caption>
						<h3 style={{ color: 'white' }}>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="button">
				<button className="btn btn-primary">
					<Link to="/shop" style={{ color: 'white' }}>
						Show More
					</Link>
				</button>
			</div>
		</>
	);
}

export default Cards;
