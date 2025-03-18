"use server"

import { addProductReview } from "@lib/data"

type ProductReviewReq = {
  title: string
  user_name: string
  rating: number
  content: string
}

export async function setReview(currentState: unknown, formData: FormData) {
  if (!formData) return "No form data received"

  const productId = formData.get("product_id") as string

  const data = {
    title: formData.get("title"),
    user_name: formData.get("user_name"), // use "user_name" to match the form
    rating: parseInt(formData.get("rating") as string),
    content: formData.get("content"),
  } as ProductReviewReq

  try {
    await addProductReview(productId, data)
  } catch (error: any) {
    return error.toString()
  }
}
