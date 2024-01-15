/* responsibility 
-generate timetable

*/

import { getAllBatches, getSubjectList } from '@/lib/firebase/api';
import { getWeekDates } from '@/lib/utils';

import React from 'react';

/* 
Requirements
1. batch list
2. batch subject
3. teachers
*/
const GenerateTimetable = async () => {
	// get list of days in currWeek
	// console.log(getWeekDates());

	// get List of Batches
	const batchList = await getAllBatches();

	// loop through batches
	for (const batch in batchList) {
		console.log('batch :>> ', batchList[batch]);

		// get list of subjects and store freq
        const subjectList = getSubjectList(batchList[batch].subidList);
		// loop through days of week for the batch: for each day
		//   get dayschedule for batch
		//     //Advance Algorithm: time blocking algorithm
		//     check if subject freq >0
		//     go through subject list: for each subject
		//      check if time available for lecture
		// if available then check if subject teacher free
		// if free then assign subject to
		//day schedule
		//teacher day schedule
		//decrement subject freq
		// if not then move to next
	}

	//function CheckTeacherAvailable(name, st, et){

	// }

	return <div>GenerateTimetable</div>;
};

export default GenerateTimetable;
