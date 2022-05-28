import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';


const ProductModal = ({ product, setProduct }) => {
	const [user, loading, error] = useAuthState(auth);
	// const [orderP, setOrderP] = useState({});
	// setOrderP(product);
	const { _id, name, quantity, minOrder, price } = product;


	const handleProduct = (e) => {
		e.preventDefault();

		const orderProduct = {
			orderProductId: _id,
			orderProductnName: name,
			orderProductPrice: price,
			buyer: user.email,
			buyerName: user.displayName,
			phone: e.target.phone.value,
			address: e.target.address.value,
		}

		fetch('http://localhost:5000/order', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(orderProduct)
		})
			.then(res => res.json())
			.then(data => {
				/* if (data.success) {
					toast(`Appointment is set`)
				} */
				toast('order place');
				// setProduct(null);
				/*  else{
					 toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
				 }
				 setTreatment(null); */
			});
	}

	let productPrice = `${price} taka/pic`;
	let minimumOrder = `Min Order : ${minOrder} pic `;

	return (
		<div>
			{/* <!-- Put this part before </body> tag --> */}
			<input type="checkbox" id="product-modal" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<label for="product-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h3 class="font-bold text-lg">
						{product.name}
					</h3>
					<p class="py-4">
						{product.Details}
					</p>
					<form onSubmit={handleProduct}>
						<input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mb-2" />
						<input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mb-2" />
						<input type="text" name="productN"
							value={name} disabled
							className="input input-bordered w-full max-w-xs mb-2" />
						<input type="text" name="price"
							value={productPrice} disabled
							className="input input-bordered w-full max-w-xs mb-2" />

						<input type="text" name="price"
							value={minimumOrder} disabled
							className="input input-bordered w-full max-w-xs mb-2" />

						<input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-2" />

						<input type="text" name="address" placeholder=" Address" className="input input-bordered w-full max-w-xs mb-2" />


						<input type="submit" value="Order" className="btn btn-primary w-full max-w-xs
						  
						"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;