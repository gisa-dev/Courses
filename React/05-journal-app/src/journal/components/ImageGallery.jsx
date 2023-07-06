import { ImageList, ImageListItem } from '@mui/material';


export const ImageGallery = ({images}) => {
	return (
		<ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
			{images.map((image) => (
				<ImageListItem key={image}>
					<img
						src={`${image}?w=200&h=200&fit=crop&auto=format`}
						srcSet={`${image}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
						alt='image note'
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};
