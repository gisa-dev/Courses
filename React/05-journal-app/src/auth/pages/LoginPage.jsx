import { Grid, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
		>
			<Grid
				item
				className='box-shadow'
				xs={3}
				sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
			>
				<Typography component='h1' sx={{ mb: 1, fontSize: 20 }}>
					Login
				</Typography>
				<form>
					<Grid container>
						<Grid item>
							<TextField
								label='Correo'
								type='email'
								placeholder='correo@google.com'
							/>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};
