import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage(){
    const { details } = useLoaderData() as DetailsLoaderResult;

    return <div>
        <h4>{ details.name }</h4>
        <p>{ details.description }</p>

        <h4>License:</h4>
        <p>{ details.license }</p>

        <h4>Author:</h4>
        <p>{ details.author?.name }</p>
    </div>
}
