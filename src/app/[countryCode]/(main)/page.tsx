import { Metadata } from "next"

import { getCategoriesList, getCollectionsByDisplaySection } from "@lib/data"

import FeaturedProducts from "@modules/home/components/featured-products"

import CollectionSwiper, {
  CollectionBanner,
} from "@modules/home/components/collection-swiper"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { Suspense } from "react"
import BottomNav from "@modules/layout/components/bottom-menu"

export const metadata: Metadata = {
  title: "Enhance Your Style With Premium Quality Accessories - ELEOS",
  description: "Enhance Your Style With Premium Quality Accessories - ELEOS",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const { collections: heroCollections } = await getCollectionsByDisplaySection(
    "HeroSection"
  )
  const { collections: featuredCollections } =
    await getCollectionsByDisplaySection("FeaturedSection")

  return (
    <>
      <CollectionSwiper collections={heroCollections} />

      <section>
        <div className="max-w-7xl mx-auto">
          {featuredCollections.slice(0, 2).length > 0 && (
            <FeaturedProducts
              collections={featuredCollections.slice(0, 2)}
              countryCode={countryCode}
            />
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl pb-12 space-y-6 md:px-4">
          <h2 className="text-center text-3xl font-semibold">
            Shop As You Like
          </h2>
          <div className="max-w-full overflow-x-auto">
            <ul className="w-max small:w-full grid grid-cols-5 gap-x-4 small:gap-x-6 gap-y-24 small:gap-y-36">
              <li>
                <LocalizedClientLink
                  href={`/categories/rings`}
                  className="relative text-xl leading-10 hover:text-ui-fg-disabled"
                >
                  <Image
                    src={
                      "https://eleos-medusa-uploads.s3.ap-south-1.amazonaws.com/assets/rings.avif"
                    }
                    alt=""
                    width="800"
                    height="480"
                    className="w-60 h-80 object-cover"
                  />
                  <p className="absolute bottom-1 left-1 text-2xl font-semibold text-white">
                    Rings
                  </p>
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href={`/categories/earrings`}
                  className="relative text-xl leading-10 hover:text-ui-fg-disabled"
                >
                  <Image
                    src={
                      "https://eleos-medusa-uploads.s3.ap-south-1.amazonaws.com/assets/earrings.avif"
                    }
                    alt=""
                    width="300"
                    height="300"
                    className="w-60 h-80 object-cover"
                  />
                  <p className="absolute bottom-1 left-1 text-2xl font-semibold text-white">
                    Earrings
                  </p>
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href={`/categories/pendants`}
                  className="relative text-xl leading-10 hover:text-ui-fg-disabled"
                >
                  <Image
                    src={
                      "https://eleos-medusa-uploads.s3.ap-south-1.amazonaws.com/assets/pendant.avif"
                    }
                    alt=""
                    width="1100"
                    height="1100"
                    className="w-60 h-80 object-cover"
                  />
                  <p className="absolute bottom-1 left-1 text-2xl font-semibold text-white">
                    Pendants
                  </p>
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href={`/categories/chains`}
                  className="relative text-xl leading-10 hover:text-ui-fg-disabled"
                >
                  <Image
                    src={
                      "https://eleos-medusa-uploads.s3.ap-south-1.amazonaws.com/assets/chain.avif"
                    }
                    alt=""
                    width="225"
                    height="225"
                    className="w-60 h-80 object-cover"
                  />
                  <p className="absolute bottom-1 left-1 text-2xl font-semibold text-white">
                    Chains
                  </p>
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href={`/categories/braclets`}
                  className="relative text-xl leading-10 hover:text-ui-fg-disabled"
                >
                  <Image
                    src={
                      "https://eleos-medusa-uploads.s3.ap-south-1.amazonaws.com/assets/bracelet.avif"
                    }
                    alt=""
                    width="600"
                    height="799"
                    className="w-60 h-80 object-cover"
                  />
                  <p className="absolute bottom-1 left-1 text-2xl font-semibold text-white">
                    Braclets
                  </p>
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div>
        <CollectionBanner collection={heroCollections[1]} />
      </div>

      <section>
        <div className="max-w-7xl mx-auto">
          {featuredCollections.slice(0, 2).length > 0 && (
            <FeaturedProducts
              collections={featuredCollections.slice(0, 2)}
              countryCode={countryCode}
            />
          )}
        </div>
      </section>

      <BottomNav />
    </>
  )
}
