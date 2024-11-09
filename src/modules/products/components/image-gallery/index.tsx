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
import { MdClose } from "react-icons/md"
import { BsZoomIn } from "react-icons/bs"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleEnlarge = (index: number) => {
    setActiveIndex(index)
    setIsEnlarged(true)
  }

  const handleClose = () => {
    setIsEnlarged(false)
  }

  return (
    <>
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
              onClick={() => handleEnlarge(index)}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 cursor-pointer"
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

        <div className="absolute bottom-8 right-4 z-40 pointer-events-none">
          <span className="text-xs ">
            <BsZoomIn size={24} className="mix-blend-exclusion" />
          </span>
        </div>
      </Swiper>

      {isEnlarged && (
        <div className="fixed inset-0 z-50 pt-4 pb-10 flex flex-col items-center justify-center bg-black">
          <Swiper
            initialSlide={activeIndex || 0}
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

          <div className="w-full px-8 flex justify-center items-center bg-black">
            <button
              onClick={handleClose}
              className="self-end p-2 text-white uppercase z-50 border border-gray-50 rounded-full"
            >
              <MdClose size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
