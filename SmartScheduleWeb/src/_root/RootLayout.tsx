// import React from 'react'
import Sidebar from '@/components/ui/Sidebar';
import { auth } from '@/lib/firebase/firebaseConfig';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RootLayout = () => {
	let isAuth = true;
	return (
		<>
			{isAuth ? (
				<div className="flex flex-row w-full">
					{/* sidebar */}
					<Sidebar />
					<section className="flex flex-1 justify-center items-center flex-col bg-violet-100">
						<Outlet />
					</section>
				</div>
			) : (
				<Navigate to="/sign-in" />
			)}
		</>
	);
};

export default RootLayout;
