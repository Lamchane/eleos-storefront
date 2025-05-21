"use server"

import { cookies } from "next/headers"

import {
  addShippingMethod,
  completeCart,
  createPaymentSessions,
  deleteDiscount,
  getRazorpayOrder,
  listCartShippingMethods,
  setPaymentSession,
  updateCart,
} from "@lib/data"
import { GiftCard, StorePostCartsCartReq } from "@medusajs/medusa"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function cartUpdate(data: StorePostCartsCartReq) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, data)
    revalidateTag("cart")
  } catch (error: any) {
    return error.toString()
  }
}

export async function applyDiscount(code: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, { discounts: [{ code }] }).then(() => {
      revalidateTag("cart")
    })
  } catch (error: any) {
    throw error
  }
}

export async function applyGiftCard(code: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
      revalidateTag("cart")
    })
  } catch (error: any) {
    throw error
  }
}

export async function removeDiscount(code: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await deleteDiscount(cartId, code)
    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }
}

export async function removeGiftCard(
  codeToRemove: string,
  giftCards: GiftCard[]
) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, {
      gift_cards: [...giftCards]
        .filter((gc) => gc.code !== codeToRemove)
        .map((gc) => ({ code: gc.code })),
    }).then(() => {
      revalidateTag("cart")
    })
  } catch (error: any) {
    throw error
  }
}

export async function submitDiscountForm(
  currentState: unknown,
  formData: FormData
) {
  const code = formData.get("code") as string

  try {
    await applyDiscount(code).catch(async (err) => {
      await applyGiftCard(code)
    })
    return null
  } catch (error: any) {
    return error.toString()
  }
}

export async function setAddresses(currentState: unknown, formData: FormData) {
  if (!formData) return "No form data received"

  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return { message: "No cartId cookie found" }

  const data = {
    shipping_address: {
      first_name: formData.get("shipping_address.first_name"),
      last_name: formData.get("shipping_address.last_name"),
      address_1: formData.get("shipping_address.address_1"),
      address_2: "",
      company: formData.get("shipping_address.company"),
      postal_code: formData.get("shipping_address.postal_code"),
      city: formData.get("shipping_address.city"),
      country_code: formData.get("shipping_address.country_code"),
      province: formData.get("shipping_address.province"),
      phone: formData.get("shipping_address.phone"),
    },
    email: formData.get("email"),
  } as StorePostCartsCartReq

  const sameAsBilling = formData.get("same_as_billing")

  if (sameAsBilling === "on") data.billing_address = data.shipping_address

  if (sameAsBilling !== "on")
    data.billing_address = {
      first_name: formData.get("billing_address.first_name"),
      last_name: formData.get("billing_address.last_name"),
      address_1: formData.get("billing_address.address_1"),
      address_2: "",
      company: formData.get("billing_address.company"),
      postal_code: formData.get("billing_address.postal_code"),
      city: formData.get("billing_address.city"),
      country_code: formData.get("billing_address.country_code"),
      province: formData.get("billing_address.province"),
      phone: formData.get("billing_address.phone"),
    } as StorePostCartsCartReq

  try {
    await updateCart(cartId, data)

    revalidateTag("cart")
  } catch (error: any) {
    return error.toString()
  }

  redirect(
    `/${formData.get("shipping_address.country_code")}/checkout?step=payment`
  )
}

export async function setShippingMethod(shippingMethodId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  try {
    await addShippingMethod({ cartId, shippingMethodId })
    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }
}

export async function paymentSessions() {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  try {
    const cart = await createPaymentSessions(cartId)
    revalidateTag("cart")
    return cart
  } catch (error: any) {
    throw error
  }
}

export async function setPaymentMethod(providerId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  try {
    let cart = await setPaymentSession({ cartId, providerId })

    console.log("providerID:", providerId)

    // const availableShippingMethods = await listCartShippingMethods(cartId).then(
    //   (methods) => methods
    // )

    // if (
    //   !availableShippingMethods ||
    //   availableShippingMethods.length < 1 ||
    //   availableShippingMethods[0].id === undefined
    // ) {
    //   revalidateTag("cart")
    //   return cart
    // }

    // let applicableMethods: PricedShippingOption[] = []

    // if (providerId === "manual") {
    //   applicableMethods = availableShippingMethods.filter(
    //     (m) => !m.is_return && m.metadata?.cod === "true"
    //   )
    // } else {
    //   applicableMethods = availableShippingMethods.filter(
    //     (m) => !m.is_return && m.metadata?.cod !== "true"
    //   )
    // }

    // console.log("shipping: ", applicableMethods)

    // cart = await addShippingMethod({
    //   cartId,
    //   shippingMethodId: applicableMethods[0].id as string,
    // })

    revalidateTag("cart")
    return cart
  } catch (error: any) {
    throw error
  }
}

export async function placeOrder(orderId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  let cart

  try {
    const rzp_order = await getRazorpayOrder(orderId)

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

    const data = {
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
    await updateCart(cartId, data)

    const methods = await listCartShippingMethods(cartId)
    if (!methods || methods.length === 0) {
      throw new Error("No Shipping Method found")
    }
    await addShippingMethod({ cartId, shippingMethodId: methods[0].id ?? "" })

    console.log("before complete")

    cart = await completeCart(cartId)

    console.log("after complete")

    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }

  console.log(cart)

  console.log("before redirecting")

  if (cart?.type === "order") {
    const countryCode = cart.data.shipping_address?.country_code?.toLowerCase()
    cookies().set("_medusa_cart_id", "", { maxAge: -1 })
    redirect(`/${countryCode}/order/confirmed/${cart?.data.id}`)
  }

  console.log("after redirecting")

  return cart
}
