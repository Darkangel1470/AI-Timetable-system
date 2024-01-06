import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { BatchValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { createBatch } from '@/lib/firebase/api';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebaseConfig';

const ManageBatches = () => {
	// variables
	const [showForm, setShowForm] = useState(false);
    const [batches, setBatches] = useState([])
	// States
	// form definition
	const form = useForm<z.infer<typeof BatchValidation>>({
		resolver: zodResolver(BatchValidation),
		defaultValues: {
			name: '',
		},
	});
	// useEffects
	useEffect(() => {
		//get batch
		onSnapshot(collection(db, 'batches'), (ss) => {
			const barr = ss.docs.map((doc, index) => (
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
			console.log('batches :>> ', barr);
			setBatches(barr);
		});
	}, []);

	// functions

	function onSubmit(values: z.infer<typeof BatchValidation>) {
		createBatch(values);
		console.log('form :>> ', form.setValue('name', ''));
	}

	return (
		<div className="flex flex-col w-full h-full p-10 box-border">
			{/* panel name  */}
			<div className="flex flex-row mb-5">
				<h1 className="font-bold text-lg">Manage Batches</h1>
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

				{/* add batches> */}
				<Button
					onClick={() => {
						setShowForm(!showForm);
						console.log('batches :>> ', batches);
					}}
					className="w-28 h-15 bg-violet-400 text-black hover:bg-violet-600 hover:text-white font-bold"
				>
					Add batch
				</Button>
				{/* Add batches form */}
				{showForm && (
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-row bg-violet-50 gap-5 my-3"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input
												className="border-slate-700"
												{...field}
											/>
										</FormControl>
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

				{/* List of existing batches */}
				<div>
					{/* item */}
					{/* <ul> */}
						{batches}
						{/* </ul> */}
				</div>
			</div>
		</div>
	);
};

export default ManageBatches;
