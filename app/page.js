import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Solar Energy Solutions</title>
        <meta name="description" content="High-quality solar energy solutions." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">Welcome to Solar Energy Solutions</h1>
        <p className="mt-4">Discover the benefits of solar energy.</p>
      </main>
    </>
  );
}
