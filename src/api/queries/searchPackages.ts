import type { PackageSummery } from '../types/packageSummery';

interface SearchResponse {
    objects: {
        pacakge: {
            name: string;
            desctiption: string;
            version: string;
            keywords: string[];
        }
    }[]
}

export async function searchPackages(term: string): Promise<PackageSummery[]> {
    const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    );
    const data: SearchResponse = await response.json();

    return data.objects.map(
        ({ package: { name, description, version, keywords }}) => {
        return {
            name,
            description,
            version,
            keywords
        };
    });
}

