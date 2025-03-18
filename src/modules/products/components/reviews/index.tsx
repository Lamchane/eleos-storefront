// import { useEffect, useState } from "react"

// import * as Yup from "yup"
// import { useFormik } from "formik"
// import HyperModal from "react-hyper-modal"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getProductReviews } from "@lib/data"

import { HiStar } from "react-icons/hi"

type ProductReviewsProps = {
  product: PricedProduct
  countryCode: string
}

async function ProductReviews({ product, countryCode }: ProductReviewsProps) {
  //   const [isModalOpen, setModalOpen] = useState(false)

  //   const reviewFormik = useFormik({
  //     initialValues: {
  //       title: "",
  //       user_name: "",
  //       rating: 1,
  //       content: "",
  //     },
  //     validationSchema: Yup.object().shape({
  //       title: Yup.string().required(),
  //       user_name: Yup.string().required(),
  //       rating: Yup.number().min(1).max(5),
  //       content: Yup.string().required(),
  //     }),
  //     onSubmit: (values) => {

  //         const payload = {
  //             title: values.title,
  //             user_name: values.user_name,
  //             rating: values.rating,
  //             content: values.content,
  //         }

  //         // post this data

  //         setModalOpen(false)
  //     },
  //   })

  if (!product.id) {
    return null
  }

  const productReviews = await getProductReviews(product.id).then(
    ({ reviews }) => {
      return reviews
    }
  )

  if (!productReviews.length) {
    return <div className="mt-6">There are no product reviews</div>
  }

  return (
    <>
      <div>
        <p>Product Reviews</p>

        {/* <HyperModal
          isOpen={isModalOpen}
          requestClose={() => setModalOpen(false)}
          renderOpenButton={() => {
            return (
              <button
                className={styles.addbtn}
                onClick={() => setModalOpen(true)}
              >
                Add Review
              </button>
            )
          }}
        >
          <form
            onSubmit={reviewFormik.handleSubmit}
            style={{ padding: "20px" }}
          >
            <h2>Add Review</h2>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={reviewFormik.handleChange}
                value={reviewFormik.values.title}
                style={{ display: "block", width: "100%" }}
              />
              {reviewFormik.touched.title && reviewFormik.errors.title && (
                <span style={{ color: "red" }}>
                  {reviewFormik.errors.title}
                </span>
              )}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="user_name">User Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                onChange={reviewFormik.handleChange}
                value={reviewFormik.values.user_name}
                style={{ display: "block", width: "100%" }}
              />
              {reviewFormik.touched.user_name &&
                reviewFormik.errors.user_name && (
                  <span style={{ color: "red" }}>
                    {reviewFormik.errors.user_name}
                  </span>
                )}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                name="rating"
                id="rating"
                onChange={reviewFormik.handleChange}
                value={reviewFormik.values.rating}
                min="1"
                max="5"
                style={{ display: "block", width: "100%" }}
              />
              {reviewFormik.touched.rating && reviewFormik.errors.rating && (
                <span style={{ color: "red" }}>
                  {reviewFormik.errors.rating}
                </span>
              )}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                onChange={reviewFormik.handleChange}
                value={reviewFormik.values.content}
                style={{ display: "block", width: "100%" }}
                rows={5}
              ></textarea>
              {reviewFormik.touched.content && reviewFormik.errors.content && (
                <span style={{ color: "red" }}>
                  {reviewFormik.errors.content}
                </span>
              )}
            </div>
            <button className={styles.addbtn}>Add</button>
          </form>
        </HyperModal> */}

        {productReviews.length > 0 &&
          productReviews.map((review, index) => (
            <div key={review.id} className="my-2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>{review.title}</h3>
                <div style={{ display: "flex" }}>
                  {Array(review.rating)
                    .fill("")
                    .map((_, index) => (
                      <HiStar
                        key={index}
                        style={{
                          color: "#FFDF00",
                          height: "24px",
                          width: "24px",
                        }}
                      />
                    ))}
                </div>
              </div>
              <small style={{ color: "grey" }}>By {review.user_name}</small>
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                {review.content}
              </div>
              <small style={{ color: "grey" }}>
                {new Date(review.created_at ?? new Date()).toLocaleDateString()}
              </small>
              {index !== productReviews.length - 1 && <hr />}
            </div>
          ))}
      </div>
    </>
  )
}

export default ProductReviews
