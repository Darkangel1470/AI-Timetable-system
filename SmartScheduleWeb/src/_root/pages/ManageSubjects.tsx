import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { SubjectValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { createBatch, createSubject } from '@/lib/firebase/api';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebaseConfig';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const ManageSubjects = () => {
	// variables
	const [showForm, setShowForm] = useState(false);
	const [subjects, setSubjects] = useState([]);
	const [batches, setBatches] = useState([]);
	const [teacher, setTeacher] = useState([]);
	// States
	// form definition
	const form = useForm<z.infer<typeof SubjectValidation>>({
		resolver: zodResolver(SubjectValidation),
		defaultValues: {
			name: '',
			batch: '',
			frequency: 3,
		},
	});
	// useEffects
	useEffect(() => {
		//get subjects
		onSnapshot(collection(db, 'subjects'), (ss) => {
			const sarr = ss.docs.map((doc, index) => (
				// <li id={doc.id}>
				<>
					{index > 0 && <Separator />}
					<div className="flex flex-1 flex-row  items-center my-2">
						{/* name */}
						<p>{doc.data().name}</p>
						<div className="flex flex-1 justify-end gap-2">
							{/* View Batch */}
							<Button className="flex h-8 bg-yellow-300 text-black hover:bg-yellow-700 hover:text-white">
								View Batch
							</Button>
							{/* View Timetable */}
							<Button className="flex h-8 bg-green-300 text-black hover:bg-green-700 hover:text-white">
								View Batch
							</Button>
						</div>
					</div>
				</>
				// </li>
			));
			console.log('subjects :>> ', sarr);
			setSubjects(sarr);
		});
	}, []);
	useEffect(() => {
		// get batches
		onSnapshot(collection(db, 'batches'), (ss) => {
			const barr = ss.docs.map((doc) => (
				<SelectItem value={doc.id}>{doc.data().name}</SelectItem>
			));
			console.log('subjects :>> ', barr);
			setBatches(barr);
		});
	});

	useEffect(() => {
		// get teacher
		onSnapshot(collection(db, 'teachers'), (ss) => {
			const tarr = ss.docs.map((doc) => (
				<SelectItem value={doc.id}>{doc.data().name}</SelectItem>
			));
			console.log('teacheers :>> ', tarr);
			setTeacher(tarr);
		});
	});

	// functions

	function onSubmit(values: z.infer<typeof SubjectValidation>) {
		createSubject(values);
		console.log('form :>> ', form.setValue('name', ''));
	}

	return (
		<div className="flex flex-col w-full h-full p-10 box-border">
			{/* panel name  */}
			<div className="flex flex-row mb-5">
				<h1 className="font-bold text-lg">Manage Subjects</h1>
			</div>
			<div className="flex flex-1 flex-col bg-white rounded-md p-5">
				{/* go back button */}
				<Link
					className="flex flex-row h-6"
					to={-1}
				>
					<img
						src="/assets/backIcon.png"
						alt="backIcon"
					/>
					<span className="pl-2 text-blue-500 underline text-lg">
						Go back
					</span>
				</Link>
				{/* border */}
				<Separator className="my-2 h-0.5" />

				{/* add subject> */}
				<Button
					onClick={() => {
						setShowForm(!showForm);
						console.log('subjects :>> ', subjects);
					}}
					className="w-28 h-15 bg-violet-400 text-black hover:bg-violet-600 hover:text-white font-bold"
				>
					Add subject
				</Button>
				{/* Add subject form */}
				{showForm && (
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-row gap-5 my-3"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input
												className="border-slate-700 w-30 lg:w-1/2"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="frequency"
								render={({ field }) => (
									<FormItem className="">
										<FormControl>
											<Input
												type="number"
												className="border-slate-700 w-10 px-0 pl-2"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="batch"
								render={({ field }) => (
									<FormItem>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Batch" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{batches}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="teacher"
								render={({ field }) => (
									<FormItem>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Teacher" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{teacher}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="bg-blue-600 hover:bg-blue-700"
							>
								Add
							</Button>
						</form>
					</Form>
				)}

				{/* List of existing subjects */}
				<div>
					{/* item */}
					{/* <ul> */}
					{subjects}
					{/* </ul> */}
				</div>
			</div>
		</div>
	);
};

export default ManageSubjects;
