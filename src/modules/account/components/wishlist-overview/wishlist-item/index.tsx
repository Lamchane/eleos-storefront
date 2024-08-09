"use client"

import { LineItem, Product, Region } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { deleteFromWishlist } from "@modules/account/actions"
import ProductPreview from "@modules/products/components/product-preview"
import { useState } from "react"
import { BsTrash3 } from "react-icons/bs"

type WishlistItemProps = {
  index: number
  product: LineItem
  region: Region
}

export default function WishlistItem({
  index,
  product,
  region,
}: WishlistItemProps) {
  const [loading, setLoading] = useState(false)

  // const handleRemoveFromWishlist = async () => {

  //   setLoading(true)

  //   await deleteFromWishlist({ index, countryCode: region })

  //   setLoading(false)
  // }

  return (
    <div className="self-stretch">
      <ProductPreview
        key={product.variant.product_id}
        productPreview={
          {
            ...product,
            id: product.variant.product.id,
            handle: product.variant.product.handle,
          } as unknown as Product
        }
        region={region}
      />
      <div className="mt-2 flex items-center gap-2">
        <Button
          variant={"transparent"}
          className="flex-1 uppercase border border-gray-400"
        >
          Move To Bag
        </Button>
        <Button
          // onClick={removeFromWishlist}
          variant={"transparent"}
          className="border border-gray-900 p-1"
        >
          <BsTrash3 size={24} />
        </Button>
      </div>
    </div>
  )
}
