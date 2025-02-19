import { Outlet } from 'react-router-dom';
import Header from '../components/Headers';

export default function Root() {
	return (
		<div className="container">
			<Header />
			<Outlet />
		</div>
	);
}
