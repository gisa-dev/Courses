import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
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
				sx={{
					backgroundColor: 'white',
					borderRadius: 2,
					padding: 3,
					width: { md: 450 },
				}}
			>
				<Typography
					component='h1'
					sx={{ mb: 1, fontSize: 20, fontWeight: 600 }}
				>
					{title}
				</Typography>

				{children}
			</Grid>
		</Grid>
	);
};
