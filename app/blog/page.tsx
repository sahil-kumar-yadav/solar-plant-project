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

// Function to fetch blog posts
function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      author: data.author,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Main Blog Page Component
export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="container mx-auto py-12 px-4">
      {/* Page Header */}
      <h1 className="text-center text-4xl font-extrabold text-green-700 mb-8">
        Solar Energy Blog
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Stay updated with the latest insights, tips, and guides on solar energy solutions.
      </p>

      {/* Blog Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {post.date} by {post.author}
                </p>
                <p className="mt-4 text-gray-600 line-clamp-3">
                  Dive into the latest trends and innovations in solar energy.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
