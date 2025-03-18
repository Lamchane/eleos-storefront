import { Region } from "@medusajs/medusa"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductInfo from "@modules/products/templates/product-info"
import { notFound } from "next/navigation"
import ProductReviewForm from "@modules/products/components/review-form"
import {
  getProductByHandle,
  getRegion,
  retrievePricedProductById,
} from "@lib/data"

type Props = {
  params: { countryCode: string; handle: string }
}

const getPricedProductByHandle = async (handle: string, region: Region) => {
  const { product } = await getProductByHandle(handle).then(
    (product) => product
  )

  return product
}

export default async function ReviewPageTemplate({ params }: Props) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getPricedProductByHandle(params.handle, region)

  if (!pricedProduct) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      {/* Product Thumbnail */}
      <div className="mb-8">
        <ImageGallery images={pricedProduct.images || []} />
      </div>

      {/* Product Info */}
      <div className="mb-12">
        <ProductInfo product={pricedProduct} />
      </div>

      {/* Review Form */}
      <div className="mb-12">
        <ProductReviewForm product_id={pricedProduct.id ?? ""} />
      </div>
    </div>
  )
}
