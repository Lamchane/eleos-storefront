"use client"

import { formatAmount } from "@lib/util/prices"
import { InformationCircleSolid } from "@medusajs/icons"
import { Cart, Order } from "@medusajs/medusa"
import { Tooltip } from "@medusajs/ui"
import React from "react"

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    shipping_tax_total,
    total,
  } = data

  const getAmount = (
    amount: number | null | undefined,
    taxInclusive: boolean = true
  ) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: taxInclusive,
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center text-xl uppercase">
            Subtotal
          </span>
          <span
            data-testid="cart-subtotal "
            data-value={subtotal || 0}
            className="text-xl"
          >
            {getAmount(subtotal, true)}
          </span>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-xs">
            Shipping, taxes, and discount codes calculated at checkout.
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
