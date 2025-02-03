import { Metadata } from "next"
import "styles/globals.css"
import dynamic from "next/dynamic"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

// Dynamically import PixelPageView with SSR disabled
const PixelPageView = dynamic(() => import("@modules/pixel"), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>

        {/* PixelPageView dynamically imported to avoid SSR issues */}
        <PixelPageView />
      </body>
    </html>
  )
}
