import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Products from './Products/Products';

const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Products></Products>
			<BusinessSummary></BusinessSummary>
			<Footer></Footer>
		</main>
	);
};

export default Home;
