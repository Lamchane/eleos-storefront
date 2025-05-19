import Medusa from "@medusajs/medusa-js"
import Razorpay from "razorpay"
import axios from "axios"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000"

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const medusaClient = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})

export const razorpayClient = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
  headers: {
    "Content-Type": "application/json",
    "X-Razorpay-Account": process.env.RAZORPAY_ACCOUNT,
  },
})
