import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const { register, formState: { errors }, handleSubmit } = useForm();

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);

	  let signInError;
	  const navigate = useNavigate();
	  const location = useLocation();
	  let from = location.state?.from?.pathname || "/";
	
	
	  useEffect( () =>{
        if (user || gUser) {
            navigate(from, { replace: true });
        }
	  }, [user, gUser, from, navigate])
	
	if (loading || gLoading) {
        return <Loading></Loading>
	}
	if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

	const onSubmit = data => {
		signInWithEmailAndPassword(data.email, data.password);
		
	};

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div class="card  w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="text-center text-3xl "> Login </h2>

			
						<form onSubmit={handleSubmit(onSubmit)}>

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
						
						{signInError}

							<input type="submit" value= 'Login' className='btn w-full max-w-xs btn-success'/>
					</form> 
					<p><small>New to computer manufacture  <Link className='text-blue-700' to="/signup">Create New Account</Link></small></p>
				
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

export default Login;