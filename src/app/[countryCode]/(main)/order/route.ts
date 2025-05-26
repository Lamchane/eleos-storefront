import {
  addShippingMethod,
  completeCart,
  getRazorpayOrder,
  listCartShippingMethods,
  updateCart,
} from "@lib/data"
import { StorePostCartsCartReq } from "@medusajs/medusa"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils"

export async function POST(request: NextRequest) {
  const rawBody = await request.text()

  const params = new URLSearchParams(rawBody)
  const data = Object.fromEntries(params.entries())

  if (
    validatePaymentVerification(
      {
        order_id: data.razorpay_order_id,
        payment_id: data.razorpay_payment_id,
      },
      data.razorpay_signature,
      process.env.RAZORPAY_SECRET as string
    )
  ) {
    const rzp_order = await getRazorpayOrder(data.razorpay_order_id)

    console.log(rzp_order)

    const [shipping_first_name, shipping_last_name] =
      rzp_order.customer_details?.shipping_address.name?.split(" ") ?? []

    const addresses = new FormData()

    addresses.set("shipping_address.first_name", shipping_first_name)
    addresses.set("shipping_address.last_name", shipping_last_name)
    addresses.set(
      "shipping_address.address_1",
      rzp_order.customer_details?.shipping_address.line1 ?? ""
    )
    addresses.set("shipping_address.company", "")
    addresses.set(
      "shipping_address.postal_code",
      rzp_order.customer_details?.shipping_address.zipcode?.toString() ?? ""
    )
    addresses.set(
      "shipping_address.city",
      rzp_order.customer_details?.shipping_address.city ?? ""
    )
    addresses.set(
      "shipping_address.country_code",
      rzp_order.customer_details?.shipping_address.country ?? ""
    )
    addresses.set(
      "shipping_address.province",
      rzp_order.customer_details?.shipping_address.state ?? ""
    )
    addresses.set(
      "shipping_address.phone",
      rzp_order.customer_details?.contact ?? ""
    )

    const [billing_first_name, billing_last_name] =
      rzp_order.customer_details?.shipping_address.name?.split(" ") ?? []

    addresses.set("email", rzp_order.customer_details?.email ?? "")
    addresses.set("billing_address.first_name", billing_first_name)
    addresses.set("billing_address.last_name", billing_last_name)
    addresses.set(
      "billing_address.address_1",
      rzp_order.customer_details?.billing_address.line1 ?? ""
    )
    addresses.set("billing_address.company", "")
    addresses.set(
      "billing_address.postal_code",
      rzp_order.customer_details?.billing_address.zipcode?.toString() ?? ""
    )
    addresses.set(
      "billing_address.city",
      rzp_order.customer_details?.billing_address.city ?? ""
    )
    addresses.set(
      "billing_address.country_code",
      rzp_order.customer_details?.billing_address.country ?? ""
    )
    addresses.set(
      "billing_address.province",
      rzp_order.customer_details?.billing_address.state ?? ""
    )
    addresses.set(
      "billing_address.phone",
      rzp_order.customer_details?.contact ?? ""
    )

    const shipping_details = {
      email: addresses.get("email"),
      shipping_address: {
        first_name: addresses.get("shipping_address.first_name"),
        last_name: addresses.get("shipping_address.last_name"),
        address_1: addresses.get("shipping_address.address_1"),
        address_2: "",
        company: addresses.get("shipping_address.company"),
        postal_code: addresses.get("shipping_address.postal_code"),
        city: addresses.get("shipping_address.city"),
        country_code: addresses.get("shipping_address.country_code"),
        province: addresses.get("shipping_address.province"),
        phone: addresses.get("shipping_address.phone"),
      },
      billing_address: {
        first_name: addresses.get("billing_address.first_name"),
        last_name: addresses.get("billing_address.last_name"),
        address_1: addresses.get("billing_address.address_1"),
        address_2: "",
        company: addresses.get("billing_address.company"),
        postal_code: addresses.get("billing_address.postal_code"),
        city: addresses.get("billing_address.city"),
        country_code: addresses.get("billing_address.country_code"),
        province: addresses.get("billing_address.province"),
        phone: addresses.get("billing_address.phone"),
      },
    } as StorePostCartsCartReq

    const cartId = rzp_order.notes?.resource_id?.toString() ?? ""

    await updateCart(cartId, shipping_details)

    const methods = await listCartShippingMethods(cartId)
    if (!methods || methods.length === 0) {
      throw new Error("No Shipping Method found")
    }
    await addShippingMethod({ cartId, shippingMethodId: methods[0].id ?? "" })

    console.log("before complete")

    const cart = await completeCart(cartId)

    if (cart?.type === "order") {
      const countryCode = cart.data.region.countries[0].iso_2
      cookies().set("_medusa_cart_id", "", { maxAge: -1 })
      return redirect(`/${countryCode}/order/confirmed/${cart.data.id}`)
    }
  }

  return Response.json({ data })
}
