import { cache } from "react"
import {
  Product,
  Region,
  ProductCollection,
  ProductCategory,
} from "@medusajs/medusa"

import { getProductsList, getRegion } from "@lib/data"

import {
  ProductCategoryWithChildren,
  ProductCategoryWithPreviews,
  ProductCollectionWithPreviews,
} from "types/global"

import CollectionWithProductRail from "./collection-tabs"
import CategoryWithProductRail from "./category-tabs"

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

const getCategoriesWithProducts = cache(
  async (
    categories: ProductCategoryWithChildren[],
    countryCode: string
  ): Promise<ProductCategoryWithPreviews[] | null> => {
    if (!categories) {
      return null
    }

    const categoriesIds = categories.map((category) => category.id)

    await Promise.all(
      categoriesIds.map((id) =>
        getProductsList({
          queryParams: { category_id: [id], limit: 5 },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let category

        if (categories) {
          category = categories.find(
            (category) => category.id === queryParams?.category_id?.[0]
          )
        }

        if (!category) {
          return
        }

        category.products = response.products as unknown as Product[]
      })
    )

    return categories as unknown as ProductCategoryWithPreviews[]
  }
)

export async function FeaturedCollections({
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
      <CollectionWithProductRail
        collectionWithProducts={collectionWithProducts ?? []}
        region={region as Region}
      />
    </section>
  )
}

export async function FeaturedCategories({
  categories,
  countryCode,
}: {
  categories: ProductCategoryWithChildren[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  const categoryWithProducts = await getCategoriesWithProducts(
    categories,
    countryCode
  )

  return (
    <section className="py-12">
      <CategoryWithProductRail
        categoryWithProducts={categoryWithProducts ?? []}
        region={region as Region}
      />
    </section>
  )
}
