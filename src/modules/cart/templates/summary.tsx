"use client"

import { Button } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import { CartWithCheckoutStep } from "types/global"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { placeOrder, paymentSessions } from "@modules/checkout/actions"
import useRazorpay, { RazorpayOptions } from "react-razorpay-magic"
import { useCallback, useState } from "react"
import { PixelPurchase } from "@modules/pixel"
import Spinner from "@modules/common/icons/spinner"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [Razorpay] = useRazorpay(true)

  const onPaymentCompleted = async (razorpay_order_id: string) => {
    await placeOrder(razorpay_order_id).catch((e) => {
      console.log(e)
      setErrorMessage(e.message ?? "An error occurred, please try again.")
      setSubmitting(false)
    })

    PixelPurchase({
      currency: cart.region?.currency?.code ?? "INR",
      value: cart.total ?? 0,
    })
  }

  const handlePayment = useCallback(
    (order_id: string, amount: string) => {
      const options: RazorpayOptions = {
        one_click_checkout: false,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${cart.region.countries[0].iso_2}/order`,
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY ?? "",
        amount: amount,
        order_id: order_id,
        currency: cart.region.currency_code.toLocaleUpperCase(),
        name: process.env.NEXT_PUBLIC_SHOP_NAME ?? "your company name ",
        description: `Order number ${order_id}`,
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=1080&q=75`,
        modal: {
          backdropclose: true,
          escape: true,
          handleback: true,
          confirm_close: true,
          ondismiss: () => {
            setSubmitting(false)
          },
          animation: true,
        },
        remember_customer: true,
        // handler: async ({ razorpay_order_id, razorpay_payment_id }) => {
        //   onPaymentCompleted(razorpay_order_id)
        // },
      }

      const razorpay = new Razorpay(options)
      razorpay.open()
      razorpay.on("payment.failed", function (response: any) {
        setErrorMessage(JSON.stringify(response.error))
      })
      razorpay.on("payment.authorized", function (response: any) {})
      razorpay.on("payment.captured", function (response: any) {})
    },
    [Razorpay]
  )

  const handleCheckout = async () => {
    const cart_with_payment_session = await paymentSessions()

    if (cart_with_payment_session) {
      const payment_session = cart_with_payment_session.payment_session
      const orderData = payment_session?.data as Record<string, string>

      if (payment_session && orderData) {
        handlePayment(orderData.id, payment_session.amount.toString())
      }
    }
  }

  return (
    <div className="flex flex-col gap-y-4">
      {/* <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Summary
      </Heading> */}
      {/* <DiscountCode cart={cart} /> */}
      {/* <Divider /> */}
      <CartTotals data={cart} />
      {/* <LocalizedClientLink
        href={"/checkout?step=" + cart.checkout_step}
        data-testid="checkout-button"
      >
        <Button className="w-full h-10 uppercase">Proceed to checkout</Button>
      </LocalizedClientLink> */}

      <Button
        disabled={submitting}
        onClick={handleCheckout}
        className="w-full h-10 uppercase"
      >
        {submitting ? <Spinner /> : "Proceed to checkout"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Summary
