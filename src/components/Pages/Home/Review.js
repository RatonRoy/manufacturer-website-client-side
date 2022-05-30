import React, { useEffect, useState } from 'react';

const Review = () => {

	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch('https://obscure-coast-57144.herokuapp.com/review')
			.then(res => res.json())
			.then(data => setReview(data))
	}, [])

	return (
		<div className='px-8 py-10'>
			<h1 className='py-4 text-2xl text-center'> Reviews </h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

				{
					review.map(oneR => <div key={oneR._id}>
						<h1 className='text-2xl'> Name : {oneR.name} </h1>
						<p className='pb-3'>
							{oneR.description}
						</p>
						<h3 className='text-red-600 text-3xl'>
							Rating : {oneR.rating}/5
						</h3>
					</div>)
				}

			</div>
		</div>
	);
};

export default Review;