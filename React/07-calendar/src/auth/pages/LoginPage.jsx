import './LoginPage.css';

export const LoginPage = () => {
	return (
		<div className='mx-auto max-w-7xl login-container'>
			<div className='grid gap-2 md:grid-cols-2'>
				<div className='mx-5 md:mx-0 login-form-1'>
					<h3 className='text-3xl font-semibold text-center'>Login</h3>
					<form>
						<div>
							<label
								for='UserEmail'
								className='block font-medium text-gray-700 text-md'
							>
								Email
							</label>

							<input
								type='email'
								id='UserEmail'
								placeholder='john@rhcp.com'
								className='w-full p-3 mt-1 border-gray-200 rounded-md shadow-sm text-md '
							/>
						</div>
						<div className='mt-2'>
							<label
								for='UserPassword'
								className='block font-medium text-gray-700 text-md'
							>
								Password
							</label>

							<input
								type='password'
								id='UserPassword'
								placeholder='Password'
								className='w-full p-3 mt-1 border-gray-200 rounded-md shadow-sm text-md '
							/>
						</div>
						<button
							className='inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.125rem] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mt-5 w-full transition ease-in-out duration-300'
							type='submit'
						>
							<span className='block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent'>
								Login
							</span>
						</button>
					</form>
				</div>

				<div className='mx-5 md:mx-0 login-form-2'>
					<h3 className='text-3xl font-semibold text-center'>Register</h3>
					<form>
						<div>
							<label
								for='UserName'
								className='block font-medium text-gray-700 text-md'
							>
								Name
							</label>

							<input
								type='text'
								id='UserName'
								placeholder='John Due'
								className='w-full p-3 mt-1 border-gray-200 rounded-md shadow-sm text-md '
							/>
						</div>
						<div>
							<label
								for='UserEmail'
								className='block font-medium text-gray-700 text-md'
							>
								Email
							</label>

							<input
								type='email'
								id='UserEmail'
								placeholder='john@rhcp.com'
								className='w-full p-3 mt-1 border-gray-200 rounded-md shadow-sm text-md '
							/>
						</div>
						<div>
							<label
								for='UserPassword'
								className='block font-medium text-gray-700 text-md'
							>
								Password
							</label>

							<input
								type='password'
								id='UserPassword'
								placeholder='Password'
								className='w-full p-3 mt-1 border-gray-200 rounded-md shadow-sm text-md '
							/>
						</div>

						<div>
							<label
								for='UserPassword'
								className='block font-medium text-gray-700 text-md'
							>
								Repeat Password
							</label>

							<input
								type='password'
								id='UserPassword'
								placeholder='Repeat Password'
								className='w-full p-3 mt-1 border-gray-200 rounded-md shadow-sm text-md '
							/>
						</div>

						<button
							className='inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.125rem] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mt-5 w-full transition ease-in-out duration-300'
							type='submit'
						>
							<span className='block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent'>
								Create account
							</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
