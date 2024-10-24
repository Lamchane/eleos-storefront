"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Controller, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Controller]}
      className="col-span-4 w-full h-min"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            key={image.id}
            className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
          >
            <Image
              src={image.url}
              priority={index <= 2 ? true : false}
              className="absolute inset-0"
              alt={`Product image ${index + 1}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageGallery
