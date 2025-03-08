// src/app/blog/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  return { frontMatter, content };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  const { frontMatter, content } = postData;

  return (
    <article className="prose container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-500 mb-8">
        By {frontMatter.author} on {frontMatter.date}
      </p>
      <MDXRemote source={content} />
    </article>
  );
}
