// pages/products/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticPaths: GetStaticPaths = async () => {
  const products = ['solar-panel', 'inverter', 'battery', 'ev-charger']
  const paths = products.map((slug) => ({ params: { slug } }))
  
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = { slug: params.slug, name: params.slug.replace('-', ' ').toUpperCase(), price: "$500" }

  return { props: { productData } }
}

export default function ProductPage({ productData }) {
  return (
    <>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">{productData.name}</h1>
        <p className="mt-4">Price: {productData.price}</p>
      </main>
    </>
  )
}
