"use client"

import Link from "next/link"

import { Region } from "@medusajs/medusa"
import { ProductPreviewType } from "types/global"

import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  handle,
  products,
  region,
}: {
  handle: string
  products: ProductPreviewType[]
  region: Region
}) {
  if (!products) {
    return null
  }

  return (
    <div className="content-container py-6">
      <div className="max-w-full overflow-x-auto">
        <ul className="w-max small:w-full grid grid-cols-5 gap-x-4 small:gap-x-6 gap-y-24 small:gap-y-36">
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="flex-1 pt-12 flex justify-center items-center">
        <Link
          href={`/categories/${handle}`}
          className="border border-gray-400 hover:border-gray-600 px-6 py-2"
        >
          View all
        </Link>
      </div>
    </div>
  )
}
