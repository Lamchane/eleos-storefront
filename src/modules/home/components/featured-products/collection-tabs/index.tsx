"use client"

import React from "react"
import { ProductCollectionWithPreviews } from "types/global"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { Tabs } from "@medusajs/ui"
import { Region } from "@medusajs/medusa"

type Props = {
  collectionWithProducts: ProductCollectionWithPreviews[]
  region: Region
}

function CollectionWithProdcutRail({ collectionWithProducts, region }: Props) {
  return (
    <div className="w-full px-4">
      {collectionWithProducts && (
        <Tabs defaultValue={collectionWithProducts[0].id}>
          <Tabs.List className="flex justify-center">
            {collectionWithProducts.map((collection) => (
              <Tabs.Trigger value={collection.id}>
                {collection.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <div className="mt-2">
            {collectionWithProducts.map((collection) => (
              <Tabs.Content value={collection.id}>
                <ProductRail
                  handle={collection.handle ?? ""}
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

export default CollectionWithProdcutRail
