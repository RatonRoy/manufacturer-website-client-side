import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Purchase.css'

import ProductModal from './ProductModal/ProductModal';

const Purchase = () => {

	const { productId } = useParams();

	const [product, setProduct] = useState({});

	useEffect(() => {

		const url = `http://localhost:5000/part/${productId}`;

		fetch(url)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
			})
	}, [])


	const handleUpdatefruit = () => {

	}



	return (
		<div class="card card-compact w-full md:w-1/2 mx-auto bg-base-100 shadow-xl min-h-screen py-10">
			<label for="product-modal"
				class="modal-button">
				<figure

				><img src={product.img} alt="computer parts " className='mb-8' /></figure>
				<div className="product-info">
					<div className='my-4 pl-4'>
						<h2 class="text-sm md:text-base font-semibold mb-2"> Name :  {product.name} </h2>
						<h2 class="text-sm md:text-base font-semibold mb-2">Price : {product.price} Taka / pic </h2>
						<h2 class="text-sm md:text-base font-semibold mb-2">Available : {product.quantity}pic  </h2>
						<h2 class="text-sm md:text-base font-semibold mb-2">Min Order : {product.minOrder} pic  </h2>
					</div>
				</div>
			</label>

			<p className='md:text-sm text-justify'>
				{product.Details
				}
			</p>



			<ProductModal product={product}
				setProduct={setProduct}
			></ProductModal>

		</div>
	);
};

export default Purchase;