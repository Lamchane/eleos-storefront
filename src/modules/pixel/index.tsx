"use client"

import { useEffect } from "react"
import ReactPixel from "react-facebook-pixel"

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID ?? "1341146353567682"

export const PixelAddToCart = ({ productId }: { productId: string }) => {
  ReactPixel.track("AddToCart", {
    content_ids: [productId],
    contents: [{ id: productId, quantity: 1 }],
    content_type: "product",
  })
}

export const PixelAddToWishList = ({ productId }: { productId: string }) => {
  ReactPixel.track("AddToWishlist", {
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
      ReactPixel.track("InitiateCheckout", {
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
  ReactPixel.track("Purchase", {
    currency,
    value,
  })
}

export const PixelViewContent = ({ productId }: { productId: string }) => {
  ReactPixel.track("ViewContent", {
    content_ids: [productId],
    content_type: "product",
  })

  return null
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
