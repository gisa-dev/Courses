import { memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = memo(
	({ id, title = '', body = '', date, imageUrls = [] }) => {
		const dispatch = useDispatch();
		const newTitle = useMemo(() => {
			return title.length > 17 ? title.substring(0, 17) + '...' : title;
		}, [title]);

		const newBody = useMemo(() => {
			return body.length > 50 ? body.substring(0, 17) + '...' : body;
		}, [body]);

		const showNote = () => {
			dispatch(setActiveNote({ id, date, title, body, imageUrls }));
		};

		return (
			<ListItem disablePadding>
				<ListItemButton onClick={showNote}>
					<ListItemIcon>
						<TurnedInNot />
					</ListItemIcon>
					<Grid container>
						<ListItemText primary={newTitle} />
						<ListItemText secondary={newBody} />
					</Grid>
				</ListItemButton>
			</ListItem>
		);
	},
);
