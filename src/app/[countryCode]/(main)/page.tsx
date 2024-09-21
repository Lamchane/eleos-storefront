import { Metadata } from "next"

import { getCategoriesList, getCollectionsByDisplaySection } from "@lib/data"

import FeaturedProducts from "@modules/home/components/featured-products"

import CollectionSwiper, {
  CollectionBanner,
} from "@modules/home/components/collection-swiper"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

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
      {featuredCollections.slice(0, 2).length > 0 && (
        <FeaturedProducts
          collections={featuredCollections.slice(0, 2)}
          countryCode={countryCode}
        />
      )}

      {/* <div>
        <ul className="flex flex-col gap-4 items-start justify-start">
          <li>
            <LocalizedClientLink
              href={`/categories/rings`}
              className="text-xl leading-10 hover:text-ui-fg-disabled"
            >
              <Image
                src={"/ring.jpg"}
                alt=""
                width="400"
                height="600"
                className=""
              />
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink
              href={`/categories/earrings`}
              className="text-xl leading-10 hover:text-ui-fg-disabled"
            >
              <Image
                src={"/earring.webp"}
                alt=""
                width="400"
                height="600"
                className=""
              />
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink
              href={`/categories/pendants`}
              className="text-xl leading-10 hover:text-ui-fg-disabled"
            >
              <Image
                src={"/pendant.jpg"}
                alt=""
                width="400"
                height="600"
                className=""
              />
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink
              href={`/categories/chains`}
              className="text-xl leading-10 hover:text-ui-fg-disabled"
            >
              <Image
                src={"/chain.jpeg"}
                alt=""
                width="400"
                height="600"
                className=""
              />
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink
              href={`/categories/braclets`}
              className="text-xl leading-10 hover:text-ui-fg-disabled"
            >
              <Image
                src={"/braclet.jpeg"}
                alt=""
                width="400"
                height="600"
                className=""
              />
            </LocalizedClientLink>
          </li>
        </ul>
      </div> */}

      <div>
        <CollectionBanner collection={heroCollections[1]} />
      </div>
      {featuredCollections.slice(0, 2).length > 0 && (
        <FeaturedProducts
          collections={featuredCollections.slice(0, 2)}
          countryCode={countryCode}
        />
      )}
    </>
  )
}
