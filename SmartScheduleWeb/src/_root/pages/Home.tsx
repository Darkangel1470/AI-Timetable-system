import DashboardCard from '@/components/ui/DashboardCard';
import { getCount } from '@/lib/firebase/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	// variables
	const navigate = useNavigate();
	// states
	const [teacherCount, setTeacherCount] = useState(0);
	const [batchCount, setBatchCount] = useState(0);
	const [subjectCount, setSubjectCount] = useState(0)
	// useffects
	useEffect(() => {
		//get teacher count
		const getteacherCount = async () => {
			setTeacherCount(await getCount('teachers'));
			console.log('teacherCount :>> ', teacherCount);
		};
		getteacherCount();

		//get batch count
		const getBatchCount = async () => {
			setBatchCount(await getCount('batches'));
			console.log('batchCount :>> ', batchCount);
		};
		getBatchCount();
		//get batch count
		const getSubjectCount = async () => {
			setSubjectCount(await getCount('subjects'));
			console.log('subjectCount :>> ', subjectCount);
		};
		getSubjectCount();
	}, [teacherCount, batchCount, subjectCount]);

	// function
	function manageTeachers() {
		console.log('Go to teachers tab');
		navigate('/manageteachers');
	}
	function manageSubjects() {
		console.log('Go to subject tab');
		navigate('/managesubjects');
	}
	function manageBatches() {
		console.log('Go to Batches tab');
		navigate('/managebatches');
	}
	function manageTimetable() {
		console.log('Go to Timetable tab');
		navigate('/managetimetable');
	}

	return (
		<div className="flex flex-col w-full h-full p-10 box-border">
			{/* panel name  */}
			<div className="flex flex-row mb-5">
				<h1 className="font-bold text-lg">Dashboard</h1>
			</div>
			{/* First row  */}
			<div className="flex flex-row gap-3 ">
				{/* Teachers card  */}
				<DashboardCard
					count={teacherCount}
					label="Teacher"
					onClickHandler={manageTeachers}
				/>
				{/* Batches card  */}
				<DashboardCard
					count={batchCount}
					label="Batches"
					onClickHandler={manageBatches}
					/>
				{/* SubjectS card  */}
				<DashboardCard
					count={subjectCount}
					label="Subjects"
					onClickHandler={manageSubjects}
				/>
			</div>
			{/* Second Row */}
			<div className="flex flex-row gap-3 mt-5 ">
				{/* timetable card*/}
				<DashboardCard
					label="Timetable"
					onClickHandler={manageTimetable}
				/>
			</div>
		</div>
	);
};

export default Home;
