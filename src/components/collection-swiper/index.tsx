"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ProductCollection } from "@medusajs/medusa"
import { getCollectionsByDisplaySection } from "@lib/data"

type Props = {
  collections: ProductCollection[]
}

export function CollectionBanner({
  collection,
}: {
  collection: ProductCollection
}) {
  return (
    <LocalizedClientLink href={`/collections/${collection.handle}`}>
      <Image
        src={(collection.metadata?.bannerImage as string) ?? ""}
        alt={`${collection.title}-banner`}
        width={1920}
        height={1080}
      />
    </LocalizedClientLink>
  )
}

function CollectionSwiper({ collections }: Props) {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {collections.map((collection) => (
        <SwiperSlide key={collection.title}>
          <CollectionBanner collection={collection} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CollectionSwiper
