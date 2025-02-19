import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

export default function Headers() {
	return <> 
		<header className="navbar navbar-expand-lg navbar-light navbar-end bg-white">
			<nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal w-100">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav  d-flex align-items-center justify-content-between w-100">
						<li className='nav-item'>
							<Link to="/">NPM Registry</Link>
						</li>
						<li className="nav-item w-50">
							<SearchInput />
						</li>
					</ul>
				</div>
			</nav>
  		</header>
	</>;
}
