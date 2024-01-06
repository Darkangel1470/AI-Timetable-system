import { logout } from '@/lib/firebase/api';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const navigate = useNavigate();

    return (
		<div className="flex flex-col w-60 sm:w-60 p-5">
			{/* logo */}
			<div className="flex flex-row h-20 justify-center items-center">
				<img
					src="/assets/SmartSchedulerLogo.png"
					alt="logo"
					className="h-10"
				/>
				<div className="flex flex-col">
					<h1 className="ml-1 text-xl font-bold p-0">Smart</h1>
					<h1 className="ml-1 text-xl font-bold p-0">Scheduler</h1>
				</div>
			</div>
			{/* sidebar list */}
			<div className="flex flex-1 flex-col gap-5 justify-center ml-2">
				{/* sidebar item */}
				<div>
					<img
						src=""
						alt=""
					/>
					<p className="text-lg font-semibold">Dashboard</p>
				</div>
				{/* sidebar item */}
				<div>
					<img
						src=""
						alt=""
					/>
					<p className="text-lg font-semibold">Timetable</p>
				</div>
				{/* sidebar item */}
				<div>
					<img
						src=""
						alt=""
					/>
					<p className="text-lg font-semibold">Notice</p>
				</div>
				{/* sidebar item */}
				<div
					onClick={() => {
						if (logout()) {
							navigate('/sign-in');
						}
					}}
				>
					<img
						src=""
						alt=""
					/>
					<p className="text-lg font-semibold">Logout</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
function componentDidMount() {
    throw new Error('Function not implemented.');
}

