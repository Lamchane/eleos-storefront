import Link from "next/link"
import React from "react"

type Props = {}

export default function Return({}: Props) {
  return (
    <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 text-gray-800/60">
      <h2 className="font-bold text-xl  text-gray-800/80">
        Terms of Service for Eleos
      </h2>
      <p>
        Welcome to Eleos. By using our website and making purchases, you agree
        to follow these Terms of Service (&quot;Terms&quot;). Please read them
        carefully.
      </p>
      <div className="space-y-4">
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            1. Agreement to Terms: &nbsp;
          </span>
          By accessing our website, you confirm that you accept these Terms and
          are of legal age, or you have consent from a guardian. If you do not
          agree with our Terms, please discontinue use of our Site and services.
          We may update these Terms periodically, and continuing to use the Site
          implies acceptance of the changes.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            2. Usage Restrictions:&nbsp;
          </span>
          We strive to provide a positive experience on our Site. In using our
          Site, you agree to refrain from any illegal activities or actions that
          violate any third&ndash;party rights. Any prohibited conduct, such as
          transmitting harmful code, may result in immediate termination of
          access.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            3. Accuracy of Information:&nbsp;
          </span>
          While we strive to keep our information accurate, we cannot guarantee
          complete accuracy at all times. Information on our Site is provided
          for general use and may occasionally include errors. Use of
          information from our Site is at your discretion.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            4. Product Availability and Prices: &nbsp;
          </span>
          Products are offered exclusively online, and some may be in limited
          supply. We make every effort to accurately display product images but
          cannot guarantee perfect color matches on all screens. Prices and
          availability are subject to change without notice.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            5. Placing Orders:&nbsp;
          </span>
          We reserve the right to accept, reject, or limit orders at our
          discretion. Orders that appear fraudulent or are from unauthorized
          dealers may be declined. For full details on returns, please refer to
          our Returns Policy.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            6. Third&ndash;Party Tools:&nbsp;
          </span>
          We may provide access to third&ndash;party features, which are offered
          &quot;as is&quot; without warranties. Eleos is not responsible for any
          issues arising from the use of third&ndash;party tools or links on our
          Site.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            7. Comments and Feedback:&nbsp;
          </span>
          If you provide feedback or ideas, you grant Eleos the right to use
          your input in any medium without restrictions. We may remove content
          that violates any rights or our standards.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            8. Privacy Our Privacy:&nbsp;
          </span>
          Policy governs how we collect and handle your personal information.
          Please review it to understand how we protect your data.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            9. Errors and Corrections:&nbsp;
          </span>
          We reserve the right to correct any information errors and to update
          the Site without prior notice. Please note that any reliance on our
          Site&apos;s information is at your own risk.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            10. Liability Disclaimer:&nbsp;
          </span>
          Eleos provides its products and services &quote;as is,&quote; without
          warranties of any kind. We cannot guarantee uninterrupted access and
          are not liable for any potential issues, damages, or data loss that
          may result from use.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            11. Indemnity:&nbsp;
          </span>
          You agree to indemnify and hold Eleos harmless from any claims arising
          from your violation of these Terms or applicable laws.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            12. Governing Law: &nbsp;
          </span>
          These Terms are governed by the laws of India. All disputes will be
          resolved under Indian jurisdiction.
        </p>
        <p>
          <span className="font-semibold text-gray-800/70 text-md">
            13. Contact Us:&nbsp;
          </span>
          If you have any questions about these Terms, please reach out to{" "}
          <Link href={"#"}> contact@eleos.in</Link>.
        </p>
      </div>
    </div>
  )
}
