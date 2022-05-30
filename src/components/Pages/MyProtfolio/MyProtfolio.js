import React from 'react';

const MyProtfolio = () => {
	return (
		<div className='py-8'>
			<h1 className='text-4xl text-green-700  text-center my-8'>
				My Portfolio
			</h1>
			<div className=" mx-auto">
				<div className=" w-1/4 mx-auto">
					<h1 className="text-1xl mb-2">
						Name : Raton Chandro Roy
					</h1>
					<h1 className="text-1xl mb-2">
						Email : ratonroy18@gmail.com
					</h1>
				</div>
				<div>
					<h1 className='ext-center text-2xl text-center'>My Educational Background </h1>
					<div class="overflow-x-auto py-8 lg:w-3/4 mx-auto">
						<table class="table w-full">

							<thead>
								<tr>
									<th></th>
									<th>Degree</th>
									<th>Department </th>
									<th> Institution Name</th>
									<th>Passing Year </th>
								</tr>
							</thead>
							<tbody>

								<tr>
									<th>1</th>
									<td>B.Sc</td>
									<td>Physics </td>
									<td> Shahjalal University of Science and Technology

									</td>
									<td>2022</td>
								</tr>

								<tr>
									<th>2</th>
									<td>M.Sc </td>
									<td>IT</td>
									<td>
										Institute of Information and Communication Technology,
										SUST

									</td>
									<td> Ongoing </td>
								</tr>


							</tbody>
						</table>
					</div>

				</div>
				<div>
					<h1 className='text-center text-2xl py-6'>My Projects </h1>
					<div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4 py-8 px-10">
						<div className=" py-8">
							<h1 className='text-2xl'> Group portfolio </h1>
							<a href="https://ratonroy.github.io/Group-protfolio/">
								https://ratonroy.github.io/Group-protfolio/
							</a>
						</div>
						<div className="py-8">
							<h1 className='text-2xl'> Fruit Store </h1>
							<a href="https://glistening-buttercream-7e6192.netlify.app/">
								https://glistening-buttercream-7e6192.netlify.app/
							</a>
						</div>
						<div className="py-8">
							<h1 className='text-2xl'> Tutor-of-science </h1>
							<a href="https://tutor-of-science.web.app/">
								https://tutor-of-science.web.app/
							</a>
						</div>

					</div>
				</div>
				<div className="">
					<h1 className="text-2xl my-8 text-center"> I know those technologies </h1>
					<ul className='list-disc pl-4 grid grid-cols-1 md:grid-cols-2 md:px-8 w-1/2 mx-auto'>
						<div>
							<li>HTML5 </li>
							<li>Raw CSS </li>
							<li> Javascript with ES6 </li>
							<li>Bootstrap </li>
							<li> React Bootstrap </li>
							<li>Figma to html css </li>
							<li> PSD  to html css </li>
							<li> PNG   to html css </li>
							<li>Responsive design </li>
						</div>
						<div>
							<li>Tailwindcss</li>
							<li>daisyUI Tailwindcss components</li>
							<li> React </li>
							<li> Firebase </li>
							<li> React firebase hooks  </li>
							<li> React Router </li>
							<li> React form </li>
							<li>JSON </li>
							<li> API </li>
							<li> Node   </li>
							<li> MongoDb   </li>
							<li> Express js   </li>
							<li> git and github   </li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MyProtfolio;