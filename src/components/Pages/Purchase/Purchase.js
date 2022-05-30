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

	const minOrderValue = product.minOrder;
	const maxOrderValue = product.quantity;

	let order; 

	const onSubmit = e => {
		
		e.preventDefault();
		order = e.target.order.value;
		
	};


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

			<form onSubmit={onSubmit}>

				<div class="form-control w-full max-w-xs">
					<label class="label">

						<span class="label-text"> Quantity   </span>

					</label>
					<input
						type="number"
						name = 'order'
						placeholder="Your Order"
						class="input input-bordered w-full max-w-xs"	
					/>

					
				</div>

				<input type="submit" value='Order' className='btn w-full max-w-xs btn-success'
				disabled = {order === minOrderValue || maxOrderValue}
				/> 
			</form>

		</div>
	);
};

export default Purchase;