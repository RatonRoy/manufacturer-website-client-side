import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../img/notFound.jpg';

const NotFound = () => {
	return (

		<div class="hero min-h-screen" style={{
			background: `url(${notFound})`, 
			backgroundRepeat : 'no-repeat', backgroundSize : 'cover', backgroundPosition : 'center'
		}}>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold">ERROR  404 </h1>
					<p class="mb-5">
					  You are trying to searching something else that not remaining in this website. 
					</p>
					<Link to= '/' class="btn btn-primary px-8"> Go Back </Link>
				</div>
			</div>
		</div>


	);
};

export default NotFound;