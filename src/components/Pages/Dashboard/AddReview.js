import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
	const handlereview = (e) => {
		e.preventDefault();
		const review = {
			
			description: e.target.description.value,
			rating: e.target.rating.value,
			name: e.target.name.value,
		}

		fetch('http://localhost:5000/review', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(review)
		})
			.then(res => res.json())
			.then(data => {

				toast('add review');

			});

	}
	return (
		<div>
			<form onSubmit={handlereview}>
				<textarea name="description" id="" cols="30" rows="10" className="input input-bordered input-secondary w-full max-w-xs">

				</textarea>
				<br />
				<label htmlFor=""> Rating within five </label> <br />
				<input type="text" placeholder="rating" className="input input-bordered input-secondary w-full max-w-xs" name='rating' />
				<br />
				<input type="text" placeholder="name" className="input input-bordered input-secondary w-full max-w-xs" name='name' />
				<br />
				<input type="submit" value="submit" className='btn btn-primary'/>
			 </form>
		</div>
	);
};

export default AddReview;