"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
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

const ControlledImageGallery = ({ images }: ImageGalleryProps) => {
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  // Function to handle slide change
  const handleThumbnailClick = (index: number) => {
    if (secondSwiper) {
      secondSwiper.slideTo(index) // Change the second Swiper's active index
    }
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      <Swiper
        direction={"vertical"}
        modules={[Navigation, Controller]}
        slidesPerView={4} // Ensure at least 4 slides are visible
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        className="hidden sm:block col-span-1 w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleThumbnailClick(index)}>
            <div
              key={image.id}
              className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle cursor-pointer"
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

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
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
    </div>
  )
}

export default ControlledImageGallery
