import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	
	if (user) {
		console.log(user);
	}
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div class="card w-1/2">
				<div class="card-body">
					<h2 class="text-center text-3xl "> Login </h2>
					<div class="divider">OR</div> 

					<button class="btn btn-primary w-1/2 mx-auto capitalize"
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