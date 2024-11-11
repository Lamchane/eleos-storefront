import Link from "next/link"
import React from "react"

type Props = {}

export default function Return({}: Props) {
  return (
    <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 text-gray-800/80">
      <h2 className="font-bold text-xl">
        Shipping and Delivery Policy for Eleos
      </h2>

      <div className="space-y-4 text-gray-800/60 text-sm">
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
        <div>
          <span className="font-semibold text-gray-800/70 text-md">
            3. Delivery Times:
          </span>
          <ul className="py-2 list-disc list-inside">
            <li>Standard Shipping: 5 &ndash; 7 Business Days.</li>
            <li>Express Shipping: 2 &ndash; 4 Business Days.</li>
          </ul>
        </div>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            4. Tracking Your Parcel:&nbsp;
          </span>
          Orders are prepared and shipped within 24 hours of placement. Tracking
          details are sent automatically via email. If you do not receive
          tracking information, please check your spam folder. For questions,
          email us at contact@eleos.in.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            5.Order Modifications: &nbsp;
          </span>
          To cancel or modify orders, email us at contact@eleos.in as soon as
          possible. We will do our best to accommodate changes however,
          modifications are not guaranteed and depend on product availability.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            6. Duties & Taxes:&nbsp;
          </span>
          All shipments within India include taxes and duties, with no
          additional charges due at delivery.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            7. Terms & Conditions Processing Times:&nbsp;
          </span>
          Orders are processed within 1 business day, excluding Sundays and
          national holidays. A confirmation email with tracking information is
          sent once the order is shipped.
        </p>
        <div>
          <span className="font-semibold text-gray-800/70 text-md">
            8. National Holidays Observed:
          </span>
          <ul className="py-2 list-disc list-inside">
            <li>New Year&apos;s Day</li>
            <li>Republic Day</li>
            <li>Holi</li>
            <li>Eid&ndash;ul&ndash;Fitr</li>
            <li>Ram Navami</li>
            <li>Independence Day</li>
            <li>Gandhi Jayanti</li>
            <li>Diwali</li>
            <li>Christmas</li>
          </ul>
        </div>
        <p>
          Fraudulent Orders We reserve the right to cancel suspicious or
          fraudulent orders and report such transactions to relevant
          authorities.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            10. Fulfillment Issues:&nbsp;
          </span>
          If you encounter any issues with fulfillment, please contact us within
          7 days of placing the order at
          <Link href={"#"}> contact@eleos.in</Link>.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            11. Lost Packages: &nbsp;
          </span>
          Once a package is marked as delivered by the courier, Eleos is not
          responsible for lost, damaged, or stolen items. All risks are assumed
          by the courier at delivery.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            12. Delivery Attempts: &nbsp;
          </span>
          Delivery attempts will be made twice. If you cannot receive the
          package on the second attempt, the order will be returned to Eleos,
          and additional fees will apply for further shipping attempts. Please
          email <Link href={"#"}> contact@eleos.in</Link> in such cases.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            13. Delivery Delays: &nbsp;
          </span>
          Any delays caused by the courier are their responsibility. While Eleos
          will assist in expediting delivery if possible, we cannot be held
          liable for such delays post-dispatch.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            14. Damaged Packages:&nbsp;
          </span>
          If your package arrives damaged, please contact us at
          <Link href={"#"}> contact@eleos.in</Link>. We will work with you to
          resolve the issue as quickly as possible.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            15. Further Inquiries:&nbsp;
          </span>
          For additional questions or clarifications, email us at
          <Link href={"#"}> contact@eleos.in</Link>.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            16. Customer Service:&nbsp;
          </span>
          Hours Monday &ndash; Saturday | 11:00 AM &ndash; 6:00 PM IST
        </p>
      </div>
    </div>
  )
}
