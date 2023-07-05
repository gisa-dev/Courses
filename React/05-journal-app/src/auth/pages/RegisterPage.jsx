import { Link as RouterLink } from 'react-router-dom';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useRegisterPage } from '../../hooks';

export const RegisterPage = () => {
	const {
		onSubmit,
		displayName,
		onInputChange,
		displayNameValid,
		formSubmitted,
		email,
		emailValid,
		password,
		passwordValid,
		errorMessage,
		isCheckingAuthentication,
	} = useRegisterPage();

	return (
		<AuthLayout title='Register'>
			<form
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Display Name'
							type='text'
							placeholder='Gilbert Acosta'
							fullWidth
							name='displayName'
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Email'
							type='email'
							placeholder='email@google.com'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Password'
							type='password'
							placeholder='Password'
							fullWidth
							name='password'
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
						<Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>
						<Grid item xs={12}>
							<Button
								disabled={isCheckingAuthentication}
								type='submit'
								variant='contained'
								fullWidth
							>
								Create account
							</Button>
						</Grid>
					</Grid>

					<Grid
						container
						direction='row'
						justifyContent='end'
						alignItems='center'
					>
						<Typography sx={{ mr: 1 }}>you already have an account?</Typography>
						<Link component={RouterLink} color='inherit' to='/auth/login'>
							login
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
