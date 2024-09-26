"use client"

import { addItem, getCart } from "@lib/data"
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
  cartId: string
}

export default function WishlistItem({
  index,
  product,
  region,
  cartId,
}: WishlistItemProps) {
  const [loading, setLoading] = useState(false)

  const handleMoveItemToCart = async () => {
    setLoading(true)

    await addItem({
      cartId: cartId,
      variantId: product.variant_id as string,
      quantity: 1,
    })

    await deleteFromWishlist({
      index,
      countryCode: region.countries[0].display_name,
    })

    setLoading(false)
  }

  const handleRemoveFromWishlist = async () => {
    setLoading(true)

    await deleteFromWishlist({
      index,
      countryCode: region.countries[0].display_name,
    })

    setLoading(false)
  }

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
          onClick={handleMoveItemToCart}
          variant={"transparent"}
          className="flex-1 uppercase border border-gray-400"
        >
          Move To Bag
        </Button>
        <Button
          onClick={handleRemoveFromWishlist}
          variant={"transparent"}
          className="border border-gray-900 p-1"
        >
          <BsTrash3 size={24} />
        </Button>
      </div>
    </div>
  )
}
