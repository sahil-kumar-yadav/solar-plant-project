// src/app/blog/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// Static Params Function
export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

    return files.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));
}

// Fetch Post Data Function
function getPostData(slug: string) {
    try {
        const filePath = path.join(process.cwd(), 'posts', slug + '.mdx'); // Fix path join
        const markdownFile = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(markdownFile);

        return { frontMatter: data, content };
    } catch (error) {
        console.error('Error reading file:', error);
        return { frontMatter: {}, content: '' };
    }
}

// Blog Post Component
interface BlogPostProps {
    params: {
        slug: string;
    };
}

// Next.js `app` directory expects `params` to be awaited
export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params; // Ensure params is awaited

    const { frontMatter, content } = await getPostData(slug);

    if (!frontMatter.title) {
        notFound(); // If no frontMatter, we can assume the post doesn't exist
    }

    return (
        <main className="prose container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
            <p className="text-gray-500 mb-8">By {frontMatter.author} on {frontMatter.date}</p>
            <MDXRemote source={content} />
        </main>
    );
}
