// import React from 'react'
import Sidebar from '@/components/ui/Sidebar';
import { auth } from '@/lib/firebase/firebaseConfig';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RootLayout = () => {
	let isAuth = true;

	
	//state
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			{isAuth ? (
				<div className="flex flex-col w-full overflow-hidden">
					{/* navbar */}
					<div className="flex flex-row h-16 items-center px-5 ">
						{/* menu options */}
						<div
							onClick={() => {
								setShowSidebar(!showSidebar);
							}}
							className='hover:bg-gray-300 p-3 rounded-full'
						>
							<MenuIcon />
						</div>
					</div>
					{/* sidebar */}
					<div className="flex flex-1 flex-row relative">

						{showSidebar && <Sidebar />}
						{showSidebar && 
						<div className="flex-1 md:hidden lg:hidden xl:hidden 2xl:hidden bg-black absolute h-full w-full opacity-50"></div>}

						<section className="flex flex-1 justify-center  items-center flex-col bg-violet-100">
							<Outlet />
						</section>
					</div>
				</div>
			) : (
				<Navigate to="/sign-in" />
			)}
		</>
	);
};

export default RootLayout;
