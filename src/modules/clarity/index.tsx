"use client"

import { useEffect } from "react"
import Clarity from "@microsoft/clarity"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "qh9h68runk"

const ClarityInitializer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init(CLARITY_ID)
    }
  }, [])
  return null
}

export default ClarityInitializer
