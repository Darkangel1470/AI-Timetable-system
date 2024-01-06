import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { SigninValidation } from '@/lib/validation';
import { Link, useNavigate } from 'react-router-dom';
import { signinUser } from '@/lib/firebase/api';
const SigninForm = () => {

	// variables
	const navigate = useNavigate();
	// form definition
	const form = useForm<z.infer<typeof SigninValidation>>({
		resolver: zodResolver(SigninValidation),
		defaultValues: {
			email: 'n@n.com',
			password: '12345678',
		},
	});
	// states
	// useeffects
	// functions

	//submit handler
	async function onSubmit(values: z.infer<typeof SigninValidation>) {
		console.log('values :>> ', values);
		const result = await signinUser(values)
		if(result){
			navigate('/')
		}
		console.log('result :>> ', result);
	}
	return (
		<div className="flex flex-1 flex-row justify-center items-center">
			<div className="flex flex-1 flex-row justify-center items-center">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col justify-center gap-2 items-center w-2/3 md:w-2/3 lg:w-2/5"
					>
						<div className="flex flex-1 items-center justify-center w-full">
							<img
								src="/assets/SmartSchedulerLogo.png"
								alt="logo"
								className="w-12 m-3"
							/>
							<h1 className="font-bold text-xl ">
								SmartScheduler
							</h1>
						</div>
						<h1 className="font-bold text-xl text-center ">
							Login to your account
						</h1>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											className="border-slate-700"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											type="password"
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
							className="mt-10 bg-blue-700 w-full"
						>
							Submit
						</Button>
						<p className="">Dont have an account yet? <Link className='text-blue-600' to="/sign-up">Sign up</Link></p>
					</form>
				</Form>
			</div>
			<img
				src="/assets/authbg.jpg"
				className="flex w-1/2 h-screen object-cover bg-no-repeat hidden md:block"
			/>
		</div>
	);
};

export default SigninForm;
