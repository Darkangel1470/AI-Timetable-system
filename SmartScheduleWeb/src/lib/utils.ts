import { type ClassValue, clsx } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getWeekDates() {
	const startOfWeek = moment('2024-01-14T15:05:27+05:30').startOf('isoWeek');
	const endOfWeek = moment('2024-01-14T15:05:27+05:30').endOf('isoWeek');

	// get dates of currect week
	const days = [];
	let day = startOfWeek;

	while (day <= endOfWeek) {
		days.push(day.toDate());
		day = day.clone().add(1, 'd');
	}
	days.forEach((day) => {
		console.log('day :>> ', day);
	});
	return days;
}
