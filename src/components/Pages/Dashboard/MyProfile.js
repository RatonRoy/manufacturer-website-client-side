import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
	const [user, loading, error] = useAuthState(auth);

	/* if (loading) {
		return <Loading></Loading>
	} */

	const handleProfile = (e) => {
		e.preventDefault();
		const profile = {
			linkedin: e.target.linkedin.value,
			location: e.target.location.value,
			education: e.target.education.value,
			phone: e.target.phone.value,
		}

		fetch('https://obscure-coast-57144.herokuapp.com/profile', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(profile)
		})
			.then(res => res.json())
			.then(data => {

				toast('send information to database');

			});

	}
	return (
		<div>
			<h1 className='text-3xl py-4 px-10'> About Me  </h1>
			<div className='px-10'>
				<h1 className='text-lg '> 	Name : {user?.displayName} </h1>

				<h1 className='text-lg '> 	Email : {user?.email} </h1>
			</div>
			<form onSubmit={handleProfile}>

				<br />
				<label className='py-3'> Give Linkedin id  </label> <br />

				<input type="text" placeholder="linkedin" className="input input-bordered input-secondary w-full max-w-xs" name='linkedin' />
				<br />
				<label className='py-3'> Give Your Location  </label> <br />

				<input type="text" placeholder="Location" className="input input-bordered input-secondary w-full max-w-xs" name='location' />
				<br />
				<label className='py-3'> Education Info  </label> <br />

				<input type="text" placeholder="Education" className="input input-bordered input-secondary w-full max-w-xs" name='education' />
				<br />
				<label className='py-3'> Give Your Phone Number   </label> <br />

				<input type="text" placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" name='phone' />
				<br />
				<input type="submit" value="submit" className='btn btn-primary py-3' />
			</form>
		</div>
	);
};

export default MyProfile;