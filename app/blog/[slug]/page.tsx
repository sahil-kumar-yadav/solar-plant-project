import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'src/posts');

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

// Fetch post data by slug
async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  return { frontMatter, content };
}

// Blog Post Page Component
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    if (!postData) {
      return (
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600">Post Not Found</h1>
          <p className="text-gray-600 mt-4">
            The blog post you are looking for does not exist or has been removed.
          </p>
          <Link href="/blog" className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Back to Blog
          </Link>
        </div>
      );
    }
    
  }

  const { frontMatter, content } = postData;

  return (
    <article className="prose container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">{frontMatter.title}</h1>
      <p className="text-gray-500 mb-8">
        By <span className="font-semibold">{frontMatter.author}</span> on {frontMatter.date}
      </p>
      <MDXRemote source={content} />
    </article>
  );
}
