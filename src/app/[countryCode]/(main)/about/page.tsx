import React from "react"

type Props = {}

export default function Privacy({}: Props) {
  return (
    <div className="max-w-7xl mx-auto space-y-4 py-12 px-4">
      <h2 className="font-semibold text-2xl  text-gray-800/90">About us</h2>
      <div className="max-w-6xl">
        <h2 className="font-semibold text-md  text-gray-800/80">Our Vision</h2>
        <p className="text-gray-800/60">
          At Eleos, we&apos;re dedicated to crafting luxury jewelry that&apos;s
          accessible, high&ndash;quality, and designed to delight. We believe
          that everyone deserves the beauty of luxury without the excessive
          price tags.
        </p>
      </div>
      <div className="max-w-6xl">
        <h2 className="font-semibold text-md  text-gray-800/80">
          Commitment to Quality
        </h2>
        <p className="text-gray-800/60">
          Quality and design are at the heart of Eleos. We take pride in
          creating finely crafted jewelry that stands out in both elegance and
          durability, allowing each piece to be cherished and worn by people of
          all ages and backgrounds.
        </p>
      </div>
      <div className="max-w-6xl">
        <h2 className="font-semibold text-md  text-gray-800/80">
          Accessible Pricing
        </h2>
        <p className="text-gray-800/60">
          We&apos;re committed to keeping our prices fair and reasonable. By
          maintaining minimal profit margins, we make luxury jewelry accessible
          to all, without sacrificing quality or experience.
        </p>
      </div>
      <div className="max-w-6xl">
        <h2 className="font-semibold text-md  text-gray-800/80">
          Focused on Experience
        </h2>
        <p className="text-gray-800/60">
          Our investment is in your experience. Instead of extensive marketing,
          we dedicate our resources to thoughtful details. Each Eleos piece
          arrives in a premium, leather&ndash;textured box with a matching
          leather pouch and a thank-you card, enhancing the joy of unboxing.
        </p>
      </div>
      <div className="max-w-6xl">
        <h2 className="font-semibold text-md  text-gray-800/80">
          Jewelry for Everyone
        </h2>
        <p className="text-gray-800/60">
          Eleos is designed for everyone, regardless of age, background, or
          gender. We believe in jewelry that complements individual style and is
          accessible to all, making each piece a meaningful addition to your
          collection.
        </p>
      </div>
    </div>
  )
}
