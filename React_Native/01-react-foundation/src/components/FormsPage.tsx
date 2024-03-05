import { useForm } from 'react-hook-form'

type FormInputs = {
	email: string
	password: string
}
export const FormsPage = () => {
	const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
		defaultValues: {
			email: 'gilbert@apple.com',
			password: 'abc123'
		}
	})

	const onSubmit = (myForm: FormInputs) => {
		console.log({ myForm })
	}
  console.log(watch('email'))

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>Forms</h3>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<input
						type='text'
						placeholder='Email'
						{...register('email', { required: true })}
					/>
					<input
						type='password'
						placeholder='Password'
						{...register('password', { required: true })}
					/>
					<button type='submit'>Enter</button>
				</div>
			</form>

			<pre>{JSON.stringify(formState, null, 3)}</pre>
		</>
	)
}
