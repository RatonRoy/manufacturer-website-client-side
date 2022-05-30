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
		<div className='w-50 mx-auto'>
			<h1> Please Add Fruit </h1>
			<form onSubmit={handleSubmit(onSubmit)} className='block'>
				<legend>Name </legend> <br />
				<input className='mb-3 p-1' placeholder='product' {...register("name", { required: true, maxLength: 20 })} />
				<legend>description </legend> <br />
				<textarea className='mb-3 p-1' placeholder='description ' {...register("description")} />
				<legend> Price  </legend> <br />
				<input className='mb-3 p-1' placeholder=' price' type="number" {...register("price")} />
				<legend> Photo URL  </legend> <br />
				<input className='mb-3 p-1' placeholder='Photo Url ' type="text" {...register("img")} />
				<legend> Min Order  </legend> <br />
				<input className='mb-3 p-1' placeholder='minOrder' type="text" {...register("minOrder")} />
				<legend>  </legend> <br />
				<input className='mb-3 p-1' placeholder='Quantity ' type="number" {...register("quantity")} /> <br />
				<input type="submit" value= 'Add Product' className='btn btn-primary'/>
				
			</form>
		</div>
	);
};


export default AddProduct;