import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import DetailsPage from "./pages/DetailsPage";
import HomePage from './pages/HomePage';
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";

// create browser router
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: '/search',
				element: <SearchPage />,
				loader: searchLoader
			},
			{
				path: '/packages/:name',
				element: <DetailsPage />
			}
		]
	}
]);

function App() {
	return <div>
		<div className="p-2 mt-2">
			<div className="row">
				<div className="col-md-12 mb-4 p-2">
					<RouterProvider router={router} />
				</div>
			</div>
        </div>
	</div>
}

export default App
