"use client"

import React from "react"
import { useFormState } from "react-dom"
import { setReview } from "@modules/products/actions"

type ProductReviewFormProps = {
  product_id: string
}

const ProductReviewForm: React.FC<ProductReviewFormProps> = ({
  product_id,
}) => {
  const [message, formAction] = useFormState(setReview, null)

  return (
    <form
      action={formAction}
      method="POST"
      className="flex flex-col gap-4 p-4 border rounded"
    >
      {/* Include product_id as a hidden field */}
      <input type="hidden" name="product_id" value={product_id} />

      <h2 className="text-xl font-bold mb-4">Submit Your Review</h2>

      <div>
        <label htmlFor="title" className="block mb-1">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="user_name" className="block mb-1">
          Your Name
        </label>
        <input
          id="user_name"
          name="user_name"
          type="text"
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="rating" className="block mb-1">
          Rating (1-5)
        </label>
        <input
          id="rating"
          name="rating"
          type="number"
          min="1"
          max="5"
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="content" className="block mb-1">
          Review
        </label>
        <textarea
          id="content"
          name="content"
          required
          className="border p-2 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit Review
      </button>
    </form>
  )
}

export default ProductReviewForm
