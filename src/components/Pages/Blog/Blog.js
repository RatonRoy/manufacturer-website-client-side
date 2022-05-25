import React from 'react';

const Blog = () => {
	return (
		<div className='py-8'>
			<h1 className='text-center text-3xl text-green-700 font-bold py-6'> Welcome To My Blog  </h1>
			<div className="blog-container md:w-3/4 md:mx-auto">
				{/* single question */}
				<div>
					<h3 className='text-lg font-bold mb-4'>
						How will you improve the performance of a React Application?
					</h3>
					<h4 className='text-md font-medium mb-2'>
						Every one should be try to flow these  techniques to improve the performance of a React Application.
					</h4>
					<ul class="list-disc pl-4">
						<li>
							Keeping component state local where necessary.
						</li>
						<li>
							Memoizing React components to prevent unnecessary re-renders
						</li>
						<li>
							Code-splitting in React using dynamic import()
						</li>
						<li>
							Windowing or list virtualization in React applications
						</li>
						<li>
							we can avoid rendering all of the images at once to improve the page load time.
						</li>
					</ul>
				</div>
				{/* end of single question */}
				{/* 2nd question */}
				<div className='mt-8'>
					<h3 className='text-lg font-bold mb-4'>
						What are the different ways to manage a state in a React application?
					</h3>

					<h4 className='text-md font-medium mb-2'>
						There are four main types of state remain in a  React application
					</h4>
					<p className='mb-3'>
						1. Local(UI)state : Local state is data we manage in one or another component. Like as useState.
					</p>

					<p className='mb-3'>
						2. Global(UI)state : Global state is data we manage across multiple components.
					</p>

					<p className='mb-3'>
						3. Server state : Data that comes from an external server that must be integrated with our UI state.
					</p>

					<p className='mb-3'>
						4. URL state : Data that exists on our URLs, including the pathname and query parameters.
					</p>

				</div>
				{/* end of the  2nd question */}
				{/* 3rd question  */}
				<div className='mt-8'>
					<h3 className='text-lg font-bold mb-4'>
						How does prototypical inheritance work?
					</h3>
					<p>
						The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
					</p>
				</div>
				{/* end of  3rd question  */}
				{/* 4th question */}
				<div className='mt-10'>
					<h3 className='text-lg font-bold mb-4'>
						Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
					</h3>
					<p>
						In my opinion, useState using where have possibility to  change  of state like as change of number value, array element, object element etc.
						if I use products = [.....] here I assign  the  elements directly to the array of products  that's why it is not easy to modification on different state.

						Another way  if I use the setProducts it's easy to set the element on different state.

					</p>
				</div>
				{/*end of  4th question */}
				{/* 5th question */}
				<div className='mt-8'>
					<h3 className='text-lg font-bold mb-4'>
						What is a unit test? Why should write unit tests?
					</h3>
					<p className='py-6'>
					A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. 
					</p>
					<p className='py-4'>
					Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
					</p>
				</div>

				{/* End of  5th question */}
				{/* 6th question  */}
				<div>
				<h3 className='text-lg font-bold mb-4'>
				 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
					</h3>
					<p className=" ">
						I will use the javascript map method to find th e element by name. 
					</p>
				</div>
				{/* end of  6th question  */}
			</div>
		</div>
	);
};

export default Blog;