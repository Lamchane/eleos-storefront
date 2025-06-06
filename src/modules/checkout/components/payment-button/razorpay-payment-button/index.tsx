import { Button } from "@medusajs/ui"
import { Cart, PaymentSession } from "@medusajs/medusa"
import Spinner from "@modules/common/icons/spinner"
import React, { useCallback, useState } from "react"
import useRazorpay, { RazorpayOptions } from "react-razorpay-magic"
import { placeOrder } from "@modules/checkout/actions"
import { PixelPurchase } from "@modules/pixel"

export const RazorpayPaymentButton = ({
  session,
  notReady,
  cart,
}: {
  session: PaymentSession
  notReady: boolean
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )
  const [Razorpay] = useRazorpay(true)

  const orderData = session.data as Record<string, string>

  const onPaymentCompleted = async () => {
    PixelPurchase({
      currency: cart.region?.currency?.code ?? "INR",
      value: cart.total ?? 0,
    })

    await placeOrder("").catch(() => {
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    })
  }

  const handlePayment = useCallback(() => {
    const options: RazorpayOptions = {
      one_click_checkout: false,
      callback_url: `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/razorpay/hooks`,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY ?? "",
      amount: session.amount.toString(),
      order_id: orderData.id,
      currency: cart.region.currency_code.toLocaleUpperCase(),
      name: process.env.NEXT_PUBLIC_SHOP_NAME ?? "your company name ",
      description: `Order number ${orderData.id}`,
      image: "https://example.com/your_logo",
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
      handler: async (args) => {
        onPaymentCompleted()
      },
      prefill: {
        name:
          cart?.billing_address.first_name +
          " " +
          cart?.billing_address.last_name,
        email: cart?.email,
        contact: cart?.shipping_address?.phone ?? undefined,
      },
      notes: {
        address: cart?.billing_address,
        order_notes: session.data.notes,
      },
    }

    const razorpay = new Razorpay(options)
    razorpay.open()
    razorpay.on("payment.failed", function (response: any) {
      setErrorMessage(JSON.stringify(response.error))
    })
    razorpay.on("payment.authorized", function (response: any) {})
    razorpay.on("payment.captured", function (response: any) {})
  }, [Razorpay])

  return (
    <>
      <Button disabled={submitting || notReady} onClick={handlePayment}>
        {submitting ? <Spinner /> : "Checkout"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}
