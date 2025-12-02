import { allDocs } from 'contentlayer/generated';
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const projectEntries: MetadataRoute.Sitemap = allDocs.map((doc) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/projekt/${doc.path}`,
        lastModified: oneYearAgo,
        changeFrequency: "yearly",
        priority: 0.5,
    }));


    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
       /*  {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/om-mig`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/projekt`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/foto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/reklamfilmer`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/eventovrigt`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...projectEntries, */


    ]
}