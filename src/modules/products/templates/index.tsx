import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import ControlledImageGallery from "../components/controlled-image-gallery"
import ProductReviews from "../components/reviews"

import BottomNav from "@modules/layout/components/bottom-menu"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="block sm:hidden w-full relative">
        <ImageGallery images={product?.images || []} />
      </div>

      <div
        className="content-container py-12 grid small:grid-cols-2 grid-cols-1 gap-6 relative"
        data-testid="product-container"
      >
        <div className="hidden sm:block w-full relative">
          <ControlledImageGallery images={product?.images || []} />
        </div>

        <div className="w-full small:p-12 flex flex-col gap-y-12">
          <ProductInfo product={product} />

          {/* <ProductOnboardingCta /> */}

          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>

          <ProductTabs product={product} />

          <ProductReviews product={product} countryCode={countryCode} />
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>

      <BottomNav />
    </>
  )
}

export default ProductTemplate
