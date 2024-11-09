"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Controller, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useState } from "react"
import { MdClose } from "react-icons/md"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ControlledImageGallery = ({ images }: ImageGalleryProps) => {
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)
  const [isEnlarged, setIsEnlarged] = useState(false)

  // Function to handle slide change
  const handleThumbnailClick = (index: number) => {
    if (secondSwiper) {
      // @ts-expect-error
      secondSwiper.slideTo(index) // Change the second Swiper's active index
    }
  }

  const handleEnlarge = () => {
    setIsEnlarged(true)
  }

  const handleCloseEnlarge = () => {
    setIsEnlarged(false)
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        <Swiper
          direction={"vertical"}
          modules={[Navigation, Controller]}
          slidesPerView={4}
          // @ts-expect-error
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className="hidden sm:block col-span-1 w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleThumbnailClick(index)}
            >
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
          // @ts-expect-error
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          className="col-span-4 w-full h-min"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={handleEnlarge}>
              <div
                key={image.id}
                className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle cursor-zoom-in"
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

      {isEnlarged && (
        <div className="fixed inset-0 z-50 pt-4 pb-10 flex flex-col items-center justify-center bg-black">
          <div className="w-full px-8 flex justify-end bg-black">
            <button
              onClick={handleCloseEnlarge}
              className="self-end p-2 text-white uppercase z-50 border border-gray-50 rounded-full"
            >
              <MdClose size={32} />
            </button>
          </div>

          <Swiper
            // @ts-expect-error
            initialSlide={secondSwiper?.activeIndex || 0}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full flex items-center justify-center select-none">
                  <Image
                    src={image.url}
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default ControlledImageGallery
