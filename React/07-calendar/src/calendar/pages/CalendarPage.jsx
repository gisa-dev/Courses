import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { NavBar } from '../components/NavBar';

const locales = {
	'en-US': enUS,
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const events = [{
  
}]

export const CalendarPage = () => {
	return (
		<>
			<NavBar />

			<Calendar
				localizer={localizer}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 500 }}
			/>
		</>
	);
};
