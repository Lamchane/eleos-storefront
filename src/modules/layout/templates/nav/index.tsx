import { Suspense } from "react"

import {
  getCategoriesList,
  getCollectionsByDisplaySection,
  listRegions,
} from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { BsHeart, BsPerson, BsSearch } from "react-icons/bs"
import { ProductCategory } from "@medusajs/medusa"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  const { product_categories } = await getCategoriesList()
  const { collections: heroCollections } = await getCollectionsByDisplaySection(
    "HeroSection"
  )

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <div className="sticky top-0 w-full bg-black text-white text-center py-1.5 font-medium text-sm">
        UPTO 60% OFF SITEWIDE
      </div>
      <header className="relative py-2 h-min md:h-28 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu
                regions={regions}
                categories={product_categories as ProductCategory[]}
                collections={heroCollections}
              />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-3xl hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src={"/assets/images/logo-full.png"}
                width={2166}
                height={383}
                alt="Eleos"
                className="w-24 sm:w-40"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            {process.env.FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/search"
                scroll={false}
                data-testid="nav-search-link"
              >
                <BsSearch size={24} />
              </LocalizedClientLink>
            )}
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <BsPerson size={32} />
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account/wishlist"
                data-testid="nav-account-link"
              >
                <BsHeart size={24} />
              </LocalizedClientLink>
            </div>
            <div className="hidden sm:block">
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
