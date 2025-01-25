import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";

interface ProductPageProps {
  params: { slug: string };
}

async function getProductBySlug(slug: string) {
  // Query to fetch product details based on slug
  const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    productName,
    description,
    price,
    image
  }`;
  const product = await client.fetch(query, { slug });
  return product;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
          <p className="text-gray-700 text-lg mt-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mt-6">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
