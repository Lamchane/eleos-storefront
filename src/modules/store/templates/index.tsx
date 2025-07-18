import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import BottomNav from "@modules/layout/components/bottom-menu"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <img
        src="/assets/images/quality-assurance.png"
        className="w-80 mx-auto md:hidden"
      />
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        <div className="mb-4 md:mb-8 text-xl-semi md:text-2xl-semi">
          <h1 data-testid="store-page-title">Store</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>

      <BottomNav />
    </div>
  )
}

export default StoreTemplate
