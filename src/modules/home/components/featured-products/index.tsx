import { Product, Region } from "@medusajs/medusa"
import { ProductCollection } from "@medusajs/medusa"

import { getProductsList, getRegion } from "@lib/data"

import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import CollectionWithProdcutRail from "./collection-tabs"

const getCollectionsWithProducts = cache(
  async (
    collections: ProductCollection[],
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id], limit: 5 },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function FeaturedProducts({
  collections,
  countryCode,
}: {
  collections: ProductCollection[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  const collectionWithProducts = await getCollectionsWithProducts(
    collections,
    countryCode
  )

  return (
    <section className="py-12">
      <CollectionWithProdcutRail
        collectionWithProducts={collectionWithProducts ?? []}
        region={region as Region}
      />
    </section>
  )
}
