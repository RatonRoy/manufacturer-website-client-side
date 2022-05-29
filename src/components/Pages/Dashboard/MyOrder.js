import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
	const [orders, setOrders] = useState([]);
	const navigate = useNavigate();
	const [user] = useAuthState(auth);

	useEffect(() => {
		// https://obscure-coast-57144.herokuapp.com/order?buyer=ratonroy18@gmail.com 
		if (user) {
			fetch(`https://obscure-coast-57144.herokuapp.com/order?buyer=${user.email}`, {
				method: 'GET',
				headers: {
					'authorization': `Bearer ${localStorage.getItem('accessToken')}`
				}
			})

				.then(res => {
					console.log('res', res);
					if (res.status === 401 || res.status === 403) {
						navigate('/');
					}
					return res.json()
				})
				.then(data => {
					setOrders(data);
					console.log(data)
				})
		}

	}, [user])
	return (
		<div>
			<h3 className='pl-10'> My Total  Orders  {orders.length} </h3>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
						<tr>
							<th></th>
							<th> Product Name</th>
							<th> Price </th>
							<th> Payment </th>
							<th> Remove </th>

						</tr>
					</thead>
					<tbody>
						{
							orders.map((order, index) => <tr key={order._id}>
								<th>{index + 1}</th>
								<td>{order.orderProductnName}</td>
								<td>{order.orderProductPrice}</td>
								<td>
									<button className='btn btn-secondary'> Payment </button>
								</td>
								<td>
									<button
										className='btn btn-secondary'
									>
										Cancel
									</button>
								</td>

							</tr>)
						}


					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrder;