import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Makecomputer from './Makecomputer';
import Products from './Products/Products';
import Review from './Review';
import Contact from './Contact/Contact';

const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Products></Products>
			<Makecomputer></Makecomputer>
			<BusinessSummary></BusinessSummary>
			<Review></Review>
			<Contact></Contact>
			<Footer></Footer>
		</main>
	);
};

export default Home;
