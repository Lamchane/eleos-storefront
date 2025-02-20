import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { formatAmount } from "@lib/util/prices"
import { ProductPreviewType } from "types/global"
import { CalculatedVariant } from "types/medusa"

const transformProductPreview = (
  product: PricedProduct,
  region: Region
): ProductPreviewType => {
  const variants = product.variants as unknown as CalculatedVariant[]

  let cheapestVariant = undefined
  let inStock = true

  if (variants?.length > 0) {
    cheapestVariant = variants.reduce((acc, curr) => {
      if (acc.calculated_price > curr.calculated_price) {
        return curr
      }
      return acc
    }, variants[0])
  }

  inStock = variants?.every((variant) => {
    if (!variant) return false // Ensure variant exists

    // If inventory isn't managed, it's always available
    if (!variant.manage_inventory) return true

    // If backorders are allowed, it's available
    if (variant.allow_backorder) return true

    // If inventory exists and is greater than 0, it's available
    if (
      typeof variant.inventory_quantity === "number" &&
      variant.inventory_quantity > 0
    )
      return true

    // Otherwise, it's out of stock
    return false
  })

  return {
    id: product.id!,
    title: product.title!,
    handle: product.handle!,
    thumbnail: product.thumbnail!,
    created_at: product.created_at,
    inStock: inStock,
    price: cheapestVariant
      ? {
          calculated_price: formatAmount({
            amount: cheapestVariant.calculated_price,
            region: region,
            includeTaxes: false,
          }),
          original_price: formatAmount({
            amount: cheapestVariant.original_price,
            region: region,
            includeTaxes: false,
          }),
          difference: getPercentageDiff(
            cheapestVariant.original_price,
            cheapestVariant.calculated_price
          ),
          price_type: cheapestVariant.calculated_price_type,
        }
      : undefined,
  }
}

export default transformProductPreview
