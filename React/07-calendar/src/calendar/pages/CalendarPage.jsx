import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';

import { NavBar, CalendarEvent, CalendarModal } from '../';
import { localizer } from '../../helpers';
import { useState } from 'react';

const events = [
	{
		title: 'Birthday of the Month',
		notes: 'you have to buy the cake',
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: '#FaFaFa',
		user: {
			_id: '123',
			name: 'Gilbert',
		},
	},
];

export const CalendarPage = () => {
	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'week',
	);

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#347CF7',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
		};

		return {
			style,
		};
	};

	const onDoubleClick = (event) => {
		console.log({ doubleClick: event });
	};
	const onSelect = (event) => {
		console.log({ click: event });
	};
	const onViewChanged = (event) => {
		localStorage.setItem('lastView', event);
	};

	return (
		<div className='relative'>
			<NavBar />

			<Calendar
				events={events}
				defaultView={lastView}
				localizer={localizer}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 'calc(100vh - 80px)' }}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>

			<CalendarModal />
		</div>
	);
};
