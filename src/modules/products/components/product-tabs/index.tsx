"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Description",
      component: <ProductDescriptionTab product={product} />,
    },
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping Information",
      component: <ShippingInfoTab />,
    },
    {
      label: "Returns & Exchange",
      component: <ReturnInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            headingSize="medium"
            title={tab.label}
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
          // <div key={i}>
          //   <p className="font-semibold">{tab.label}</p>
          //   {tab.component}
          // </div>
        ))}
      </Accordion>
    </div>
  )
}

const ProductDescriptionTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <Text
        className="text-medium text-ui-fg-subtle"
        data-testid="product-description"
      >
        {product.description}
      </Text>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          {/* <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div> */}
          {/* <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div> */}
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
          {/* <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div> */}
        </div>
      </div>
      {/* {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null} */}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div>
          <span className="font-semibold text-gray-800/70 text-md">
            1. General Information: &nbsp;
          </span>
          Eleos (&quot;we&quot; and &quot;us&quot;) operates eleos.in. By
          placing an order through this website, you agree to the terms below,
          designed to ensure clarity and a smooth transaction for both parties.
          We strive to maintain accurate stock counts. If there are any stock
          discrepancies, we will fulfill available items and contact you to:
          <ul className="py-2 list-disc list-inside">
            <li>Await restocking of the selected product.</li>
            <li>Choose a different product of equal or greater value.</li>
            <li>Opt for store credit equal to the billed amount.</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold text-gray-800/70 text-md">
            2. Shipping Within India:
          </span>
          <ul className="py-2 list-disc list-inside">
            <li>
              Free Standard Shipping: All prepaid orders qualify for free
              standard shipping within India.
            </li>
            <li>
              Express Shipping: Available for prepaid orders at a charge of INR
              300.
            </li>
          </ul>
        </div>
        <LocalizedClientLink href="/shipping-policy" className="underline">
          read more
        </LocalizedClientLink>
        {/* <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div> */}
        {/* <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

const ReturnInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <h2 className="font-semibold text-lg">Exchange Eligibility</h2>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold text-md">Product Exchanges:&nbsp;</span>
            <span className="text-gray-800/60">
              If an item arrives damaged, defective, or incorrect, we offer
              exchanges within 7 days. Items must be returned in their original
              packaging.
            </span>
          </li>
          <li>
            <span className="font-bold text-md">Size Adjustments:&nbsp;</span>
            <span className="text-gray-800/60">
              Exchanges for size adjustments are not available. Please verify
              sizing details before placing your order.
            </span>
          </li>
          <li>
            <span className="font-bold text-md">Sales Policy:&nbsp;</span>
            <span className="text-gray-800/60">
              All sales are final, with no returns or cancellations. Exchanges
              are permitted only for items that arrive damaged, defective, or
              incorrect within the specified 7 &nbsp; &nbsp; day period.
            </span>
          </li>
          <li>
            <span className="font-bold text-md">Change of Mind:&nbsp;</span>
            <span className="text-gray-800/60">
              Returns or exchanges for changes in preference are not accepted.
            </span>
          </li>
        </ul>
        <LocalizedClientLink
          href="/return-exchange-policy"
          className="underline"
        >
          read more
        </LocalizedClientLink>
        {/* <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div> */}
        {/* <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProductTabs
