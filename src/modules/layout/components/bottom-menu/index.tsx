import React, { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { MdHome, MdShoppingBag } from "react-icons/md"
import { HiHeart, HiSparkles, HiViewGrid } from "react-icons/hi"

type Props = {}

import { retrieveCart } from "@modules/cart/actions"
const fetchCartItemCount = async () => {
  const cart = await retrieveCart()
  return cart?.items.length
}

async function CartButton() {
  const totalItems = await fetchCartItemCount()

  return (
    <LocalizedClientLink
      href="/cart"
      className="relative grid grid-cols-1 gap-1 place-items-center place-content-center"
    >
      <div className="absolute w-4 h-4 flex items-center justify-center top-0 right-4 p-1 text-xs bg-black text-white rounded-full">
        {totalItems}
      </div>

      <MdShoppingBag size={28} />
      <p className="text-xs uppercase">Bag</p>
    </LocalizedClientLink>
  )
}

export default async function BottomNav({}: Props) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full grid grid-cols-5 bg-white p-2 z-40">
      <LocalizedClientLink
        href="/"
        className="grid grid-cols-1 gap-1 place-items-center place-content-center"
      >
        <MdHome size={28} />
        <p className="text-xs uppercase">Home</p>
      </LocalizedClientLink>
      <LocalizedClientLink
        href="/collections/new-drops"
        className="grid grid-cols-1 gap-1 place-items-center place-content-center"
      >
        <HiSparkles size={28} />
        <p className="text-xs uppercase">New</p>
      </LocalizedClientLink>
      <LocalizedClientLink
        href="/store"
        className="grid grid-cols-1 gap-1 place-items-center place-content-center"
      >
        <HiViewGrid size={28} />
        <p className="text-xs uppercase">Shop</p>
      </LocalizedClientLink>
      <LocalizedClientLink
        href="/account/wishlist"
        className="grid grid-cols-1 gap-1 place-items-center place-content-center"
      >
        <HiHeart size={28} />
        <p className="text-xs uppercase">Wishlist</p>
      </LocalizedClientLink>

      <Suspense
        fallback={
          <LocalizedClientLink
            href="/cart"
            className="relative grid grid-cols-1 gap-1 place-items-center place-content-center"
          >
            <MdShoppingBag size={28} />
            <p className="text-xs uppercase">Bag</p>
          </LocalizedClientLink>
        }
      >
        <CartButton />
      </Suspense>
    </div>
  )
}
