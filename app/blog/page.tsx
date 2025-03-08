// src/app/blog/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface Post {
    slug: string;
    title: string;
    date: string;
    author: string;
}

function getPosts(): Post[] {
    const fs = require('fs');
    const path = require('path');

    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename: string) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const matter = require('gray-matter');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace('.mdx', ''),
            title: data.title,
            date: data.date,
            author: data.author,
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
    const posts = getPosts();

    return (
        <main className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Solar Energy Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mb-6">
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-xl font-semibold text-green-600 hover:text-green-800 transition duration-300">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-gray-500">
                            {post.date} by {post.author}
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
