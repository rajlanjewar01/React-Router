import { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';
import PackageListItems from '../../components/PackageListItems';

export default function SearchPage() {
    const { searchResults } = useLoaderData() as SearchLoaderResult;

    const renderedResults = searchResults.map((result) => {
        return <PackageListItems pack={result} key={result.name} />
    });

    return <div>
        <h1>Search Results: </h1>
        { renderedResults }
    </div>
}
