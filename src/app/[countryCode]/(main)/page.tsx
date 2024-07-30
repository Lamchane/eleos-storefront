import { Metadata } from "next"

import { getCollectionsByDisplaySection, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import CollectionSwiper, {
  CollectionBanner,
} from "components/collection-swiper"

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
