import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import {
	setActiveNote,
	startSaveNote,
	startUploadingFiles,
} from '../../store/journal';

export const NoteView = () => {
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useSelector((state) => state.journal);
	const dispatch = useDispatch();

	const { body, title, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);

		return newDate.toUTCString();
	}, [date]);

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire('Note updated', messageSaved, 'success');
		}
	}, [messageSaved]);

	const fileInputRef = useRef();

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onFileInputChange = ({ target }) => {
		if (target.files === 0) return;
		dispatch(startUploadingFiles(target.files));
	};

	return (
		<Grid
			className='animate__animated animate__fadeIn animate__faster'
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<input
					ref={fileInputRef}
					type='file'
					multiple
					onChange={onFileInputChange}
					style={{ display: 'none' }}
				/>
				<IconButton
					color='primary'
					disabled={isSaving}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined />
				</IconButton>

				<Button
					color='primary'
					sx={{ p: 2 }}
					onClick={onSaveNote}
					disabled={isSaving}
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Save
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Enter a title'
					label='Title'
					sx={{ border: 'none', mb: 1 }}
					name='title'
					value={title}
					onChange={onInputChange}
				/>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='What happened today?'
					minRows={5}
					name='body'
					value={body}
					onChange={onInputChange}
				/>
			</Grid>
			<ImageGallery />
		</Grid>
	);
};
