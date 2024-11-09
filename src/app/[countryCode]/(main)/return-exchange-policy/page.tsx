import React from "react"

type Props = {}

export default function Return({}: Props) {
  return (
    <div>
      <h2 className="text-center font-semibold">
        Return & Exchange Policy for Eleos
      </h2>
      <h2 className="text-center font-semibold">Exchange Eligibility</h2>
      <ul>
        <li>
          <span className="font-semibold">Product Exchanges:</span>If an item
          arrives damaged, defective, or incorrect, we offer exchanges within 7
          days. Items must be returned in their original packaging.
        </li>
        <li>
          <span className="font-semibold">Size Adjustments:</span>Exchanges for
          size adjustments are not available. Please verify sizing details
          before placing your order.
        </li>
        <li>
          <span className="font-semibold">Sales Policy:</span>All sales are
          final, with no returns or cancellations. Exchanges are permitted only
          for items that arrive damaged, defective, or incorrect within the
          specified 7 day period.
        </li>
        <li>
          <span className="font-semibold">Change of Mind:</span>Returns or
          exchanges for changes in preference are not accepted.
        </li>
      </ul>

      <h2 className="text-center font-semibold">Non&ndash;Returnable Items</h2>
      <ul>
        <li>
          <span className="font-semibold">Custom Jewellery:</span>
          Custom&ndash;designed pieces are uniquely crafted and cannot be
          returned.
        </li>
        <li>
          <span className="font-semibold">Opened or Worn Products:</span>Any
          product that has been opened or worn is not eligible for return.
        </li>
        <li>
          <span className="font-semibold">Promotional & Sale Items:</span>Items
          purchased during promotions or sales are final sale and are not
          eligible for return or exchange.
        </li>
      </ul>
      {/* Warranty start here */}
      <div>
        <h2 className="font-base">Warranty Policy</h2>
        <h2 className="font-semibold">Eleos Warranty Policy</h2>
        <h2 className="font-semibold">Our Quality Promise</h2>

        <p>
          At Eleos, we&apos;re dedicated to delivering jewelry of exceptional
          quality. This warranty safeguards against any manufacturing flaws in
          materials or craftsmanship under normal conditions, ensuring each
          piece lives up to our high standards.
        </p>

        <h2>Warranty Processing Fee Structure</h2>
        <p>
          To facilitate the warranty process, we charge a nominal fee for
          handling and shipping replacements:
        </p>
        <ul>
          <li>For items under ₹2,000: ₹700</li>
          <li>For items under ₹5,000: ₹1,500</li>
          <li>For items under ₹10,000: ₹2,000</li>
        </ul>
        <h2>Single Replacement Policy</h2>
        <p>
          Issues due to perfumes, sweat exposure, or general wear are not
          covered. We&apos;re here to help ensure your Eleos jewelry shines for
          every occasion.
        </p>
        <h2 className="font-semibold">Options for Unavailable Products</h2>
        <p>
          In the event your original item is unavailable for replacement,
          you&apos;re welcome to choose an alternative piece of equal value or
          receive store credit, keeping your options open.
        </p>
        <h2 className="font-semibold">What Isn&apos;t Covered</h2>
        <p>
          This warranty does not include coverage for excessive wear, misuse, or
          improper care. Regular maintenance will help your jewelry retain its
          beauty and durability.
        </p>
        <h2>Our Commitment to Customer Care</h2>
        <p>
          This warranty reflects our commitment to both quality and customer
          satisfaction. If you have questions or need assistance, our support
          team is here to help every step of the way.
        </p>
      </div>
      {/* Warrranty end here */}

      {/* Return and refund start here */}
      <div>
        <h2>Return or refund policy</h2>
        <h2 className="font-semibold">Return & Exchange Policy for Eleos</h2>
        <h2 className="font-semibold">Confirm Sizes Before Ordering</h2>

        <p>
          We encourage customers to double&ndash;check sizing before placing an
          order to help ensure you receive the right item and avoid unnecessary
          exchanges.
        </p>

        <h2 className="font-semibold">Eligibility for Exchanges</h2>
        <ul>
          <li>
            <span>Product Exchanges:</span>Exchanges are available if an item
            arrives damaged, defective, or incorrect. Please return items in
            their original packaging.
          </li>
          <li>
            <span>Size Adjustments:</span>We do not provide exchanges for size
            adjustments. Please confirm your size before purchasing.
          </li>
          <li>
            <span>Sales are Final:</span>All sales are final, with no returns or
            cancellations. Exchanges are accepted only for items with
            manufacturing defects, damage, or errors in delivery, within 7 days
            of receipt.
          </li>
          <li>
            <span>Preference Changes:</span>Exchanges or returns due to changes
            in preference cannot be accommodated.
          </li>
        </ul>
      </div>
      {/* Return and refund end here */}

      {/* non-return items start here */}
      <div>
        <h2 className="font-semibold">Non&ndash;Returnable Items</h2>
        <ul>
          <li>
            <span>Jewelry Pieces:</span>All jewelry items, including earrings,
            are non&ndash;returnable.
          </li>
          <li>
            <span>Used or Opened Items:</span> Items that have been opened or
            worn cannot be returned.
          </li>
          <li>
            <span>Promotional and Sale Items:</span> All items purchased during
            special promotions or sales are final and are not eligible for
            return or exchange.
          </li>
        </ul>
        <div>
          <h2 className="font-semibold">Refunds and Store Credit</h2>
          <p>
            Refunds are not provided. Approved exchanges are eligible for store
            credit only.
          </p>
          <h2 className="font-semibold">Shipping Returns</h2>
          <p>
            If courier pick&ndash;up services are unavailable in your area, you
            may need to arrange for return shipping at your own cost to our
            warehouse.
          </p>
          <h2 className="font-semibold">Exchange Process</h2>
          <p>
            Exchanges depend on product availability. Should your desired
            exchange item be unavailable, you may select another item or opt for
            store credit.
          </p>
        </div>
      </div>

      {/* non-return items start here */}
    </div>
  )
}
