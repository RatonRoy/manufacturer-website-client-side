import React from 'react';
import { AiFillFlag } from 'react-icons/ai';

import { BiHappyHeartEyes } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { VscFeedback } from 'react-icons/vsc';


const BusinessSummary = () => {
	return (
		<section className='py-6 px-8'>
			<div className='text-center py-7'>
				<h1 className=' text-blue-600 text-3xl tracking-wide'>Thousand Business Trust Us </h1>
				<p className='text-green-900 capitalize'>
					Try to understand people needs 
				</p>
			</div>
			<div className='icon-container w-3.5/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>

				<div className="country-icon">

					<div className='text-5xl text-blue-700 flex justify-center'>
						<AiFillFlag></AiFillFlag>
					</div>
					<p className='text-primary text-3xl text-center '>
						30 + 
					</p>
					<p className='text-lg text-blue-700 text-capitalize capitalize text-center'>
					
						countries 
					</p>
				</div>
				<div className="country-icon">

					<div className='text-5xl text-blue-700 flex justify-center'>
						<VscFeedback></VscFeedback>
					</div>
					<p className='text-primary text-3xl text-center '>
						600 + 
					</p>
					<p className='text-lg text-blue-700 text-capitalize capitalize text-center'>
						Feedbacks 
					</p>
				</div>
				<div className="country-icon">

					<div className='text-5xl text-blue-700  flex justify-center'>
						<GrDeliver></GrDeliver>
					</div>
					<p className='text-primary text-3xl text-center '>
						2000 + 
					</p>
					<p className='text-lg text-blue-700 text-capitalize capitalize text-center'>
						Complete Delivery 
					</p>
				</div>
				<div className="country-icon">

					<div className='text-lg text-red-500'>
						<div className='flex justify-center'>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							
						</div>
						<div className='flex justify-center'>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							
						</div>
						<div className='flex justify-center'>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							<BiHappyHeartEyes></BiHappyHeartEyes>
							<BiHappyHeartEyes></BiHappyHeartEyes>
						</div>
						
					</div>
					<p className='text-primary text-3xl text-center '>
						1500 + 
					</p>
					<p className='text-lg text-blue-700 text-capitalize capitalize text-center'>
						Happy  Clients 
					</p>
				</div>
			</div>
		</section>
	);
};

export default BusinessSummary;
