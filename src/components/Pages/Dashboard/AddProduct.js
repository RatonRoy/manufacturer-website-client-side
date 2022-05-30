import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
	const { register, handleSubmit } = useForm();
	let navigate = useNavigate();
	const onSubmit = data => {
		const url = `http://localhost:5000/part`;
		fetch((url), {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(result => console.log(result));

		
		navigate('/');
	}
	return (
		<div className='w-90 mx-auto'>
			<h1 className='text-2xl text-red-900 pb-4'> Please Add Product </h1>
			<form onSubmit={handleSubmit(onSubmit)} className='block'>
				<legend>Name </legend> <br />
				<input className='mb-3 p-1 input w-full max-w-xs input-bordered' placeholder='product' {...register("name", { required: true, maxLength: 20 })} />
				<legend>description </legend> <br />
				<textarea className='mb-3 p-1 textarea textarea-primary input w-full max-w-xs input-bordered input-primary' placeholder='description ' {...register("description")} />
				<legend> Price  </legend> <br />
				<input className='mb-3 p-1 input w-full max-w-xs input-bordered input-primary' placeholder=' price' type="number" {...register("price")} />
				<legend> Photo URL  </legend> <br />
				<input className='mb-3 p-1 input w-full max-w-xs input-bordered input-primary' placeholder='Photo Url ' type="text" {...register("img")} />
				<legend> Min Order  </legend> <br />
				<input className='mb-3 p-1 input w-full max-w-xs input-bordered input-primary' placeholder='minOrder' type="text" {...register("minOrder")} />
				<legend> Quantity </legend> <br />
				<input className='mb-3 p-1 input w-full max-w-xs input-bordered input-primary' placeholder='Quantity ' type="number" {...register("quantity")} /> <br />
				<input type="submit" value= 'Add Product' className='btn btn-primary input w-full max-w-xs'/>
				
			</form>
		</div>
	);
};


export default AddProduct;