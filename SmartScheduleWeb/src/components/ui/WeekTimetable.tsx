import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Event from './Event';
import HourSeparator from './HourSeparator';
import WeekDates from './WeekDates';
import { getWeekDates } from '@/lib/utils';

function DaySchedule({day}) {
	
	const todayEvents = day.map((event) => <Event detail={event} />);
	return (
		<div className="flex flex-1 flex-col border-r-[1px] border-black relative bg-blue-100">
			{todayEvents}
			<HourSeparator />
		</div>
	);
}

const WeekTimetable = () => {
	// variable
	// state
	const [weekDates, setWeekDates] = useState([]);
	const [day, setDay] = useState([
		{
			lid: 1,
			batch: 'tysd',
			subject: 'BD',
			teacher: 'SS',
			startTime: '2024-01-14T10:00:00+05:30',
			endTime: '2024-01-14T11:00:00+05:30',
		},
		{
			lid: 2,
			batch: 'tysd',
			subject: 'OT',
			teacher: 'SDS',
			startTime: '2024-01-14T11:00:00+05:30',
			endTime: '2024-01-14T12:00:00+05:30',
		},
		{
			lid: 3,
			batch: 'tysd',
			subject: 'CC',
			teacher: 'PS',
			startTime: '2024-01-14T12:00:00+05:30',
			endTime: '2024-01-14T13:00:00+05:30',
		},
		{
			lid: 4,
			batch: 'tysd',
			subject: 'ML',
			teacher: 'SJ',
			startTime: '2024-01-14T13:00:00+05:30',
			endTime: '2024-01-14T14:00:00+05:30',
		},
		{
			lid: 5,
			batch: 'tysd',
			subject: 'ML Prac',
			teacher: 'subTeacher',
			startTime: '2024-01-14T14:30:00+05:30',
			endTime: '2024-01-14T16:30:00+05:30',
		},
	]);
	const [week, setWeek] = useState({
		'Mon Jan 08 2024 00:00:00 GMT+0530 (India Standard Time)': day,
		'Tue Jan 09 2024 00:00:00 GMT+0530 (India Standard Time)': day,
		'Wed Jan 10 2024 00:00:00 GMT+0530 (India Standard Time)': day,
		'Thu Jan 11 2024 00:00:00 GMT+0530 (India Standard Time)': day,
		'Fri Jan 12 2024 00:00:00 GMT+0530 (India Standard Time)': day,
		'Sat Jan 13 2024 00:00:00 GMT+0530 (India Standard Time)': day,
		'Sun Jan 14 2024 00:00:00 GMT+0530 (India Standard Time)': day,
	});
	const todayEvents = day.map((event) => <Event detail={event} />);

	const WeekDays = []
	for (const key in week){
			WeekDays.push(<DaySchedule key={key} day={week[key]}/>)
	}

	// function
	// useEffects
	useEffect(() => {
		//get currect week
		// const startOfWeek = moment('2024-01-14T15:05:27+05:30').startOf(
		// 	'isoWeek'
		// );
		// const endOfWeek = moment('2024-01-14T15:05:27+05:30').endOf('isoWeek');

		// // get dates of currect week
		// const days = [];
		// let day = startOfWeek;

		// while (day <= endOfWeek) {
		// 	days.push(day.toDate());
		// 	day = day.clone().add(1, 'd');
		// }
		// days.forEach((day) => {
		// 	console.log('day :>> ', day);
		// });
		setWeekDates(getWeekDates());
	}, []);

	return (
		<div className="flex flex-1 flex-col z-0">
			{/* dates */}
			<WeekDates dates={weekDates} />
			{/* events */}
			<div className="flex flex-1 flex-row z-0">
				{WeekDays}
				{/* <div className="flex flex-1 flex-col border-r-[1px] border-black relative bg-blue-100">
					{todayEvents}
					<HourSeparator />
				</div> */}
			</div>
		</div>
	);
};

export default WeekTimetable;
