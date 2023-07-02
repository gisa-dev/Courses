import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useLoginPage } from '../../hooks';

export const LoginPage = () => {
	const {
		errorMessage,
		email,
		password,
		onInputChange,
		isAuthenticating,
		onSubmit,
		onGoogleSignIn,
	} = useLoginPage();

	return (
		<AuthLayout title='Login'>
			<form
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Email'
							type='email'
							placeholder='email@google.com'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
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
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
						<Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								fullWidth
								type='submit'
								variant='contained'
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								fullWidth
								onClick={onGoogleSignIn}
								variant='contained'
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color='inherit' to='/auth/register'>
							Create a new account
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
