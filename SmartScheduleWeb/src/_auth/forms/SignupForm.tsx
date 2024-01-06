import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {createUser} from '@/lib/firebase/api.ts'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { SignupValidation } from '@/lib/validation';
import { Link, useNavigate } from 'react-router-dom';



const SigninForm = () => {
	// variables
	const navigate = useNavigate();
	// States

	// useffects


	// functions





	// form definition
	const form = useForm<z.infer<typeof SignupValidation>>({
		resolver: zodResolver(SignupValidation),
		defaultValues: {
			name: 'Nihar',
			username: 'darky',
			email: 'n@n.com',
			password: '12345678',
		},
	});

	//submit handler
	async function onSubmit(values: z.infer<typeof SignupValidation>) {
		const newUser = await createUser(values)
		console.log('newUser :>> ', newUser);
		
		if(newUser){
			navigate('/')
		}
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
						<h1 className="font-bold text-xl text-center pb-10">
							Create your account
						</h1>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Name</FormLabel>
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
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Username</FormLabel>
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
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											className="border-slate-700"
											type="email"
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
						<p>
							Already have an account?{' '}
							<Link
								className="text-blue-600"
								to="/sign-in"
							>
								Sign in
							</Link>
						</p>
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
