export type Service = {
    id?: number;
    title: string;
    excerpt: string;
    slug: string;
    content: string;
    featuredImage: {
        node: {
            altText: string;
            sourceUrl: string
        }
    }
}

export type Project = {
    id?: number;
    title: string;
    excerpt: string;
    slug: string;
    content: string;
    customFields: { location: string }
    featuredImage: {
        node: {
            altText: string;
            sourceUrl: string
        }
    }
}

export type Team = {
    title: string;
    excerpt: string;
    featuredImage: {
        node: {
            sourceUrl: string
            altText: string
        }
    }
}

export type LegalPage = {
    title:string;
    excerpt:string;
    slug:string;
    content:string;
    date:string
}