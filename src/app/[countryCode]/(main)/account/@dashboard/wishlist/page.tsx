import { Metadata } from "next"

import WishlistOverview from "@modules/account/components/wishlist-overview"
import { getRegion, listCustomerWishlist, listRegions } from "@lib/data"
import { notFound } from "next/navigation"
import { Product } from "@medusajs/product"
import Login from "../../@login/page"

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Overview of your wishlist products.",
}

export default async function Wishlist() {
  const regions = await listRegions()
  const wishlist = await listCustomerWishlist()

  if (!wishlist) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Wishlist</h1>
        <p className="text-base-regular">View your wishlisted Products.</p>
      </div>
      <div>
        {regions && (
          <WishlistOverview wishlist={wishlist} region={regions[0]} />
        )}
      </div>
    </div>
  )
}
