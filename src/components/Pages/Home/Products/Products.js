import React, { useEffect, useState } from 'react';

const Products = () => {
	const [Products, setProduct] = useState([]);
	useEffect(() => {
		fetch('parts.json')
			.then(res => res.json())
			.then(data => setProduct(data))
	}, [])
	return (
		<section className='py-5 lg:px-10 md:px-6 sm:px-4'>
			<h1 className="text-primary text-center text-2xl mb-4">Our Computer Parts </h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
				{
					Products.map(product => <div key={product._id}>
						<div class="card card-compact  bg-base-100 shadow-xl">
							<figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
							<div class="px-2 py-3">
								<div className="product-info">
									<div className='flex justify-between mb-2'>
										<h2 class="text-sm md:text-base"> {product.name} </h2>
										<h2 class="text-sm md:text-base">Price : {product.price} Taka / pic </h2>
									</div>
									<div className='flex justify-between mb-2'>
										<h2 class="text-sm md:text-base">Available : {product.quantity}pic  </h2>
										<h2 class="text-sm md:text-base">Min Order : {product.minOrder} pic  </h2>
									</div>
								</div>
								<p className='md:text-sm text-justify'>
									{product.description}
								</p>
								<div class="mt-3 flex sm:justify-center md:justify-start">
									<button class="btn btn-primary w-1/2 block">Buy Now</button>
								</div>
							</div>
						</div>
					</div>)
				}
			</div>

		</section>
	);
};

export default Products;