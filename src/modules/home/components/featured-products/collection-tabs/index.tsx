"use client"

import React from "react"
import { ProductCollectionWithPreviews } from "types/global"

import { Tabs } from "@medusajs/ui"
import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"

type Props = {
  collectionWithProducts: ProductCollectionWithPreviews[]
  region: Region
}

function CollectionWithProductRail({ collectionWithProducts, region }: Props) {
  return (
    <div className="w-full px-4">
      {collectionWithProducts.length > 0 && (
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
                {/* <ProductRail
                  handle={collection.handle ?? ""}
                  products={collection.products ?? []}
                  region={region}
                /> */}
                {JSON.stringify(collection.products)}
              </Tabs.Content>
            ))}
          </div>
        </Tabs>
      )}
    </div>
  )
}

export default CollectionWithProductRail
