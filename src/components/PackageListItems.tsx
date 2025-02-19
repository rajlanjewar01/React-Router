import type { PackageSummery } from "../api/types/packageSummery";
import { Link } from 'react-router-dom';

interface PackageListItemProps {
	pack: PackageSummery;
}

export default function PackageListItem({ pack }: PackageListItemProps) {
	const renderedKeywords = (pack.keywords || []).map((keyword) => {
		return <span className="badge rounded-pill text-bg-light border shadow-sm me-2 mb-1" key={keyword}>
			{ keyword }
		</span>
	});

	return <div className="card p-2 mb-2">
		<div className="card-body d-flex justify-content-between lign-items-center">
			<div>
				<h5 className="card-title">
					<Link to={`/packages/${pack.name}`}>
						{ pack.name }
					</Link>
				</h5>

				<p>
					{ pack.description }
				</p>
				{ renderedKeywords }
			</div>
			<div className="mt-2">
				<Link to={`packages/${pack.name}`} className="btn btn-sm btn-warning">
					View
				</Link>
			</div>
		</div>
	</div>;
}