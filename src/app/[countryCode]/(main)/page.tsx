import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CollectionSwiper from "components/collection-swiper"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
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

        collection.products = response.products.slice(
          0,
          5
        ) as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const featuedCollections =
    collections
      ?.filter((collection) => collection.metadata?.isFeatured === "true")
      .map((collection) => ({
        handle: collection.handle ?? "",
        title: collection.title,
        thumbnail: (collection.metadata?.thumbnail as string) ?? "",
      })) ?? []

  const displayCollection = collections.find(
    (collection) => collection.metadata?.display === "true"
  )

  return (
    <>
      {/* <Hero /> */}
      <CollectionSwiper collections={featuedCollections} />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts
            collections={collections.slice(-1)}
            region={region}
          />
        </ul>
      </div>
      <div>
        {displayCollection && (
          <LocalizedClientLink
            href={`/collections/${displayCollection.handle}`}
          >
            <Image
              src={displayCollection.metadata?.thumbnail as string}
              alt={`${displayCollection.title}-banner`}
              width={1920}
              height={1080}
            />
          </LocalizedClientLink>
        )}
      </div>
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts
            collections={collections.slice(0, 1)}
            region={region}
          />
        </ul>
      </div>
    </>
  )
}
