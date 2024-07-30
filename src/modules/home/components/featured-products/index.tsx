import { Region } from "@medusajs/medusa"
import { ProductCollection } from "@medusajs/medusa"

import { ProductPreviewType, ProductCollectionWithPreviews } from "types/global"
import {
  getProductsByCollectionHandle,
  getProductsList,
  getRegion,
} from "@lib/data"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { Badge, Button } from "@medusajs/ui"

export default async function FeaturedProducts({
  collections,
  countryCode,
}: {
  collections: ProductCollection[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)
  const defaultCollection = collections[0]
  const {
    response: { products },
  } = await getProductsByCollectionHandle({
    handle: defaultCollection.handle,
    limit: 10,
    countryCode: countryCode || "in",
  })

  return (
    <section className="py-12">
      <ul className="flex justify-center items-center gap-4">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Button
              // onClick={() => {
              //   // You may need to implement some client-side logic to handle state changes
              //   // since server components don't manage state.
              //   console.log(collection.id)
              // }}
              variant="transparent"
              className="border border-gray-400 rounded-3xl "
            >
              {collection.title}
            </Button>
          </li>
        ))}
      </ul>
      {defaultCollection && (
        <ProductRail
          collection={defaultCollection}
          products={products ?? []}
          region={region as unknown as Region}
        />
      )}
    </section>
  )
}
