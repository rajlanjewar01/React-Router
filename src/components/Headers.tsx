import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

export default function Headers() {
	return <> 
		<header className="navbar navbar-expand-lg navbar-light navbar-end">
			<nav className="w-100">
				<div>
					<ul className="navbar-nav w-100 d-flex justify-content-between align-item-center">
						<li className='nav-item'>
							<Link to="/" className="text-decoration-none text-warning"><h4 className="text-uppercase">NPM Registry🛠 </h4></Link>
						</li>
						<li className="nav-item w-75">
							<SearchInput />
						</li>
					</ul>
				</div>
			</nav>
  		</header>
	</>;
}
