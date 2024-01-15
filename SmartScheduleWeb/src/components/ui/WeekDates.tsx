import moment from 'moment';
import React, { useEffect, useState } from 'react';

/* Responsibility
- Render UI for Date Time of selected week

*/

function DateItem({date}) {
    //variable
    const d = moment(date)
    //state
    const [isToday, setIsToday] = useState(false)

    useEffect(() => {
        setIsToday(d.isSame(moment(),'day'))
        console.log('d==moment() :>> ', d.isSame(moment(),'day'));
    },[])

	return (
		<div className={`flex flex-1 flex-col justify-center items-center ${isToday&&"bg-green-200"} rounded-full`}>
			<p>{d.format('ddd')}</p>
			<p >{d.date()}</p>
		</div>
	);
}

const WeekDates = ({ dates }) => {
    const dateList = dates.map((date) =>(
        <DateItem key={date} date={date} />
    ))
	useEffect(() => {
        
		// console.log('dates :>> ', dates);
	});
	return (
		<div className="flex h-[50px] mb-[10px] flex-row gap-5">
            {dateList}
		</div>
	);
};

export default WeekDates;
