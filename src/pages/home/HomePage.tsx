import type { HomeLoaderResult } from "./homeLoader"
import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom';


export default function HomePage() {
	const { featuredPackages } = useLoaderData() as HomeLoaderResult;

	const renderedPackages = featuredPackages.map((p) => {
		return <div className="js-nav-scroller hs-nav-scroller-horizontal col" key={p.name}>
		<ul className="nav nav-pills mb-7">
			<li className="nav-item border rounded mb-2 me-2">
				<div className="d-flex p-2 shadow-sm">
					<div className="flex-shrink-0">
						<span className="svg-icon svg-icon-sm text-primary">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.6 5.59998L20.9 10.9C21.3 11.3 21.3 11.9 20.9 12.3L17.6 15.6L11.6 9.59998L15.6 5.59998ZM2.3 12.3L7.59999 17.6L11.6 13.6L5.59999 7.59998L2.3 10.9C1.9 11.3 1.9 11.9 2.3 12.3Z" fill="#035A4B"></path>
							<path opacity="0.3" d="M17.6 15.6L12.3 20.9C11.9 21.3 11.3 21.3 10.9 20.9L7.59998 17.6L13.6 11.6L17.6 15.6ZM10.9 2.3L5.59998 7.6L9.59998 11.6L15.6 5.6L12.3 2.3C11.9 1.9 11.3 1.9 10.9 2.3Z" fill="#035A4B"></path>
							</svg>
						</span>
					</div>
					<div className="flex-grow-1 ms-3">
						<h6 className="nav-title">
							{ p.name }
						</h6>
						<p className="nav-text text-body">
							{ p.description }
						</p>
						<p>
							Maintainer: { p.maintainers.length }
						</p>
						<Link to={`packages/${p.name}`} className="btn btn-sm btn-success">
							Know More
						</Link>
					</div>
				</div>
			</li>
		</ul>
  	</div>
	});

	return <div>
		<div className="text-center mx-lg-auto mb-7 mt-4">
			<h3>The NPM Registory</h3>
			<p className="fs-6">
				The Package manager for Javascript. Publish and install Javascript packages, manage dependencies and more.
			</p>
	  	</div>
		<div className="row mt-4">
			{ renderedPackages }
		</div>
	</div>
} 
