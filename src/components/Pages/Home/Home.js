import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Products from './Products/Products';

const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Products></Products>
			<BusinessSummary></BusinessSummary>
		</main>
	);
};

export default Home;
