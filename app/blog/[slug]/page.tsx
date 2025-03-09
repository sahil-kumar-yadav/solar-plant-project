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

// Fetch blog posts safely with error handling
function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src/posts');

  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Posts directory not found: ${postsDirectory}`);
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      author: data.author,
    };
  });

  // Sort posts by latest date first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  let posts: Post[] = [];

  try {
    posts = getPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <main className="text-center py-20">
        <h2 className="text-red-500 text-xl">Unable to load blog posts. Please try again later.</h2>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-4">Solar Energy Insights</h1>
      <p className="text-gray-600 text-center mb-12">Explore expert articles, tips, and guides about solar energy.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 group-hover:text-green-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="mt-4 text-gray-600 line-clamp-3">
                  Read more about {post.title.toLowerCase()}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
