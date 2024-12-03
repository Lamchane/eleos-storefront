import Link from "next/link"
import React from "react"
import { BsEnvelope, BsInstagram, BsPhone } from "react-icons/bs"

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 text-gray-800/60">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-2">
          <h2 className="font-semibold text-xl  text-gray-800/80">
            Reach Us Via
          </h2>
          <p className="py-2 font-semibold text-md text-gray-800/60">
            Monday&ndash;Saturday between 12PM to 9PM
          </p>
          <div>
            <div className="py-2 flex space-x-2 text-center">
              <div className="flex items-center justify-center">
                <BsInstagram size={15} />
              </div>
              <div className="text-sm md:text-base">
                Instagram &ndash;&nbsp;
                <Link
                  href={"https://www.instagram.com/eleos.in_/"}
                  target="_new"
                >
                  @eleos.in (Lead time: Instant)
                </Link>
              </div>
            </div>

            <div className="py-2 flex space-x-2 text-center">
              <div className="flex items-center justify-center">
                <BsEnvelope size={15} />
              </div>
              <div className="text-sm md:text-base">
                Email &ndash;&nbsp;
                <Link href={"contact@eleos.in"} target="_new">
                  contact@eleos.in (Lead time: 1-2 days)
                </Link>
              </div>
            </div>

            <div className="py-2 flex space-x-2 text-center">
              <div className="flex items-center justify-center">
                <BsPhone size={15} />
              </div>
              <div className="text-sm md:text-base">
                Phone number &ndash;&nbsp; +91 6000205304
              </div>
            </div>
          </div>
        </div>

        {/* form start here */}
        <div className="p-2">
          <h2 className="font-semibold text-xl  text-gray-800/80">
            Drop Us a Line
          </h2>

          <form
            action="https://formsubmit.co/connect@eleos.in"
            method="POST"
            className="py-6"
          >
            <div>
              <input
                type="hidden"
                name="_subject"
                value="New email for office enquiry"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-96 p-2.5 dark:text-gray-900"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-96 p-2.5 dark:text-gray-900"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="organization"
                id="organization"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-96 p-2.5 dark:text-gray-900"
                placeholder="Your Company Name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-96 p-2.5 dark:text-gray-900"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <textarea
              name="message"
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a Message..."
            ></textarea>

            <button
              type="submit"
              className="text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-600 dark:focus:ring-blue-800 w-full mt-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
