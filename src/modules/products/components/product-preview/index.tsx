"use client"

import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

// import { retrievePricedProductById } from "@lib/data"
// import { getProductPrice } from "@lib/util/get-product-price"
import PreviewPrice from "./price"

import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"

export default function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  // const pricedProduct = await retrievePricedProductById({
  //   id: productPreview.id,
  //   regionId: region.id,
  // }).then((product) => product)

  // if (!pricedProduct) {
  //   return null
  // }

  // const { cheapestPrice } = getProductPrice({
  //   product: pricedProduct,
  //   region,
  // })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper" className="">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col txt-compact-medium mt-4 justify-between">
          <Text className="text-ui-fg-subtle" data-testid="product-title">
            {productPreview.title}
          </Text>
          <div className="flex items-center gap-x-2">
            {/* {cheapestPrice && <PreviewPrice price={cheapestPrice} />} */}
            {/* <Text>{productPreview.price?.original_price}</Text> */}

            {productPreview.price && (
              <PreviewPrice price={productPreview.price} />
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
