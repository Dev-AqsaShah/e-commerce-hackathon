"use client"

import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SHOES = () => {
 
    const [product, setProduct] = useState<product[]>([])

    useEffect(() => {
        async function fetchproduct() {
            const fetchProduct : product[] = await client.fetch(allProducts) 
            setProduct(fetchProduct)
        }
        fetchproduct()
    },[])

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {product.map((product) => (
                <div key={product._id}>
                    {product.productName}
                </div>
            ))}
        </div>
    );
};

export default SHOES;