"use client"

import React, { Suspense } from "react"
import {
  ProductCategoryWithPreviews,
  ProductCollectionWithPreviews,
} from "types/global"

import { Tabs } from "@medusajs/ui"
import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
// import Tabs from "../tab"

type Props = {
  categoryWithProducts: ProductCategoryWithPreviews[]
  region: Region
}

function CategoryWithProductRail({ categoryWithProducts, region }: Props) {
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
      {categoryWithProducts.length > 0 && (
        // @ts-ignore
        <Tabs defaultValue={categoryWithProducts[0].id}>
          <Tabs.List className="flex justify-center">
            {categoryWithProducts.map((category) => (
              <Tabs.Trigger key={category.id} value={category.id}>
                {category.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <div className="mt-2">
            {categoryWithProducts.map((category) => (
              <Tabs.Content key={category.id} value={category.id}>
                <ProductRail
                  handle={
                    category.handle ? `/categories/${category.handle}` : ""
                  }
                  products={category.products ?? []}
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

export default CategoryWithProductRail
