"use client"

import React, { Suspense } from "react"
import { ProductCollectionWithPreviews } from "types/global"

import { Tabs } from "@medusajs/ui"
import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
// import Tabs from "../tab"

type Props = {
  collectionWithProducts: ProductCollectionWithPreviews[]
  region: Region
}

function CollectionWithProductRail({ collectionWithProducts, region }: Props) {
  // const tabsData = collectionWithProducts.map((collection) => ({
  //   label: collection.title,
  //   content: (
  //     <ProductRail
  //       handle={collection.handle ?? ""}
  //       products={collection.products ?? []}
  //       region={region}
  //     />
  //   ),
  // }))

  return (
    <div className="w-full">
      {collectionWithProducts.length > 0 && (
        // @ts-ignore
        <Tabs defaultValue={collectionWithProducts[0].id}>
          <Tabs.List className="flex justify-center">
            {collectionWithProducts.map((collection) => (
              <Tabs.Trigger key={collection.id} value={collection.id}>
                {collection.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <div className="mt-2">
            {collectionWithProducts.map((collection) => (
              <Tabs.Content key={collection.id} value={collection.id}>
                <ProductRail
                  handle={
                    collection.handle ? `/collections/${collection.handle}` : ""
                  }
                  products={collection.products ?? []}
                  region={region}
                />
              </Tabs.Content>
            ))}
          </div>
        </Tabs>
      )}
    </div>
  )
}

export default CollectionWithProductRail
