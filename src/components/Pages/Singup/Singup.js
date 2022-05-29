import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../Hooks/useToken';

const Singup = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth);

	const [updateProfile, updating, updateError] = useUpdateProfile(auth);

	let signUpError;
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const [token] = useToken(user || gUser);
	
  
  if (loading || gLoading || updating) {
	  return <Loading></Loading>
  }
  if(error || gError || updateError){
	  signUpError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
	}
	
	const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
		navigate(from, { replace: true });
       
	}

	if (token) {
        navigate('/');
    }
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div class="card  w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="text-center text-3xl "> Sign Up  </h2>


					<form onSubmit={handleSubmit(onSubmit)}>

						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Your Name"
								className="input input-bordered w-full max-w-xs"
								{...register("name", {
									required: {
										value: true,
										message: 'Name is Required'
									}
								})}
							/>
							<label className="label">
								{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
							</label>
						</div>
						<div class="form-control w-full max-w-xs">
							<label class="label">

								<span class="label-text"> Email  </span>

							</label>
							<input
								type="email"
								placeholder="Your email"
								class="input input-bordered w-full max-w-xs"

								{...register("email", {
									required: {
										value: true,
										message: 'Email is Required'
									},
									pattern: {
										value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
										message: 'Provide a valid Email'
									}
								})}
							/>

							<label class="label">
								{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
								{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

							</label>
						</div>

						<div class="form-control w-full max-w-xs">
							<label class="label">

								<span class="label-text"> Password </span>

							</label>
							<input
								type="password"
								placeholder="Your password "
								class="input input-bordered w-full max-w-xs"
								{...register("password", {
									required: {
										value: true,
										message: 'Password is Required'
									},
									minLength: {
										value: 6,
										message: 'Must be 6 characters or longer'
									}
								})}
							/>

							<label class="label">
								{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
								{errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

							</label>
						</div>
							{signUpError}
						<input type="submit" value='Sign Up' className='btn w-full max-w-xs btn-success' />
					</form>
					<p><small> Already have an account?   <Link className='text-blue-600' to="/login"> Please  Login </Link></small></p>

					<div class="divider">OR</div>

					<button class="btn btn-primary  capitalize  w-full max-w-xs"
						onClick={() => signInWithGoogle()}
					>
						Continue With Google
					</button>

				</div>
			</div>
		</div>
	);
};

export default Singup;