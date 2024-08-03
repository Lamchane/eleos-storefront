import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const SkeletonProductGrid = ({ size = 8 }) => {
  return (
    <div className="content-container py-6">
      <div className="max-w-full overflow-x-auto">
        <ul
          className="w-max small:w-full grid grid-cols-5 gap-x-4 small:gap-x-6 gap-y-24 small:gap-y-36"
          data-testid="products-list-loader"
        >
          {repeat(size).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 py-12 flex justify-center items-center">
        <div className="w-16 h-10 bg-gray-100"></div>
      </div>
    </div>
  )
}

export default SkeletonProductGrid
