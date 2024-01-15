import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import CollegeHours from '@/components/ui/CollegeHours';
import WeekTimetable from '@/components/ui/WeekTimetable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight } from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebaseConfig';
import { Button } from '@/components/ui/button';
import GenerateTimetable from '@/AI/GenerateTimetable';

/* Responsibility
 - Render Main UI for Timetable and its component
 - Navigation options
*/

const ManageTimetable = () => {
	// variables
	// States
	const [tableType, setTableType] = useState('batches');
	const [options, setOptions] = useState([]);
	const [timetableOf, setTimetableOf] = useState("")
	
	// form definition

	// useEffects
	useEffect(() => {
		//list batch or teacher
		// get teacher
		onSnapshot(collection(db, tableType), (ss) => {
			const tarr = ss.docs.map((doc) => (
				<SelectItem key={doc.id} value={doc.id}>{doc.data().name}</SelectItem>
			));
			console.log('teacheers :>> ', tarr);
			setOptions(tarr);
		});
	}, [tableType]);

	// functions
	function GenerateTT(){
		GenerateTimetable();
	}

	return (
		<div className="flex flex-col w-full h-screen overflow-hidden box-border">
			{/* panel name  */}
			<div className="flex flex-row mb-5 mx-5">
				<h1 className="font-bold text-lg">Manage Timetable</h1>
			</div>
			<div className="flex flex-1 flex-col min-h-0 bg-white rounded-md p-5">
				{/* go back button */}
				<div className="flex w-full items-center flex-row gap-5 ">
					<Link
						className="flex flex-row h-6"
						to={-1}
					>
						<img
							src="/assets/backIcon.png"
							alt="backIcon"
						/>
					</Link>
					{/* tt type */}
					<Select
						onValueChange={setTableType}
						defaultValue={tableType}
					>
						<SelectTrigger className="flex w-fit items-center bg-gray-100 h-10">
							<SelectValue
								placeholder="Type"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="batches">Batch-wise</SelectItem>
							<SelectItem value="teachers">Teacher-wise</SelectItem>
						</SelectContent>
					</Select>
					<ChevronRight />

					{/* batch or teacher */}
					<Select onValueChange={setTimetableOf} defaultValue={timetableOf}>
						<SelectTrigger className="flex w-fit items-center bg-gray-100 h-10">
							<SelectValue
								placeholder={tableType}
							/>
						</SelectTrigger>
						<SelectContent>{options}</SelectContent>
					</Select>
					<ChevronRight />

					<Button onClick={GenerateTT} className='flex bg-green-500 hover:bg-green-600 w-fit'>Generate</Button>
					


				</div>
				{/* border */}
				<Separator className="my-2 h-0.5" />
				<div className="flex flex-1 min-h-0">
					<ScrollArea
						className="flex flex-1 flex-row"
						scrollHideDelay={1000}
					>
						<div className="flex overflow-hidden flex-row">
							{/* timings */}
							<CollegeHours />
							{/* calendar */}
							<WeekTimetable />
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	);
};

export default ManageTimetable;
