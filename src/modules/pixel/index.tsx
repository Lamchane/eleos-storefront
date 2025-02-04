"use client"

import { useEffect } from "react"
import ReactPixel from "react-facebook-pixel"

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID ?? "1831060441045088"

export const PixelAddToCart = ({ productId }: { productId: string }) => {
  ReactPixel.track("ADD_TO_CART", {
    content_ids: [productId],
    contents: [{ id: productId, quantity: 1 }],
    content_type: "product",
  })
}

export const PixelAddToWishList = ({ productId }: { productId: string }) => {
  ReactPixel.track("ADD_TO_WISHLIST", {
    content_ids: [productId],
    contents: [{ id: productId, quantity: 1 }],
  })
}

export const PixelInitiateCheckout = ({
  productIds,
  contents,
  num_items,
}: {
  productIds: string[]
  contents: { id: string; quantity: number }[]
  num_items: number
}) => {
  useEffect(() => {
    if (typeof window !== "undefined")
      ReactPixel.track("INITIATE_CHECKOUT", {
        content_ids: productIds,
        contents: contents,
        num_items: num_items,
      })
  }, [])

  return null
}

export const PixelPurchase = ({
  currency,
  value,
}: {
  currency: string
  value: number
}) => {
  ReactPixel.track("INITIATE_CHECKOUT", {
    currency,
    value,
  })
}

const PixelPageView = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactPixel.init(PIXEL_ID)
      ReactPixel.pageView()
    }
  }, [])
  return null
}

export default PixelPageView
