import { Metadata } from "next"
import "styles/globals.css"
import dynamic from "next/dynamic"
import Script from "next/script"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

// Dynamically import PixelPageView with SSR disabled
const PixelPageView = dynamic(() => import("@modules/pixel"), { ssr: false })
const ClarityInitializer = dynamic(() => import("@modules/clarity"), {
  ssr: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <Script
          id={"omnisend-init"}
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.omnisend = window.omnisend || [];
        omnisend.push(["brandID", "67f39b3622cb9bfb8c05e3fd"]);
        omnisend.push(["track", "$pageViewed"]);
        !function(){var e=document.createElement("script");
        e.type="text/javascript",e.async=!0,
        e.src="https://omnisnippet1.com/inshop/launcher-v2.js";
        var t=document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e,t)}();
        `,
          }}
        />
      </head>
      <body>
        <main className="relative">{props.children}</main>

        {/* PixelPageView dynamically imported to avoid SSR issues */}
        <PixelPageView />
        <ClarityInitializer />
      </body>
    </html>
  )
}
