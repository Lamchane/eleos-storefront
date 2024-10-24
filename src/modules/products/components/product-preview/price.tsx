"use client"

import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"
import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { useState } from "react"

function parseCurrency(currencyStr: string) {
  // Step 1: Remove currency symbols, commas, and spaces
  let cleanedStr = currencyStr.replace(/[^0-9.,-]+/g, "") // Removes everything except digits, commas, periods, and minus sign

  // Step 2: Handle cases where the decimal separator is a comma (e.g., "€1.234,56")
  // Convert the comma to a period if it's used as a decimal separator
  if (cleanedStr.includes(",") && cleanedStr.includes(".")) {
    // If both period and comma exist, remove thousand separators (commas)
    cleanedStr = cleanedStr.replace(/,/g, "")
  } else if (cleanedStr.includes(",")) {
    // If there's only a comma, assume it's a decimal separator and replace with a period
    cleanedStr = cleanedStr.replace(/,/g, ".")
  }

  // Step 3: Convert to a floating point number
  return parseFloat(cleanedStr)
}

export default function PreviewPrice({ price }: { price: PriceType }) {
  const original = parseCurrency(price.original_price ?? "")
  const calculated = parseCurrency(price.calculated_price ?? "")

  const dif = getPercentageDiff(original, calculated)

  return (
    <>
      {price.price_type === "sale" && (
        <Text
          className="line-through text-ui-fg-muted"
          // data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}

      <Text
        className={clx("text-ui-fg-muted", {
          "text-ui-fg": price.price_type === "sale",
        })}
        // data-testid="price"
      >
        {price.calculated_price}
      </Text>

      {price.price_type === "sale" && (
        <Text className="text-red-500">-{dif}%</Text>
      )}
    </>
  )
}
