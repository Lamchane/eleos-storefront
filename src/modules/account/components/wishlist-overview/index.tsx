import { Product } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

import { Region } from "@medusajs/medusa"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import ProductPreview from "@modules/products/components/product-preview"
import { WishlistProduct } from "types/global"

const WishlistOverview = ({
  wishlist,
  region,
}: {
  wishlist: WishlistProduct[]
  region: Region
}) => {
  if (wishlist?.length) {
    return (
      <div className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-24 small:gap-y-36">
        {wishlist &&
          wishlist.map((product) => (
            <ProductPreview
              productPreview={
                {
                  ...product,
                  id: product.variant.product.id,
                  handle: product.variant.product.handle,
                } as unknown as Product
              }
              region={region}
            />
          ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      //   data-testid="no-orders-container"
    >
      <h2 className="text-large-semi">Nothing to see here</h2>
      <p className="text-base-regular">
        You don&apos;t have any products on wishlist yet {":)"}
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button data-testid="continue-shopping-button">
            Find Products You Like
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default WishlistOverview
