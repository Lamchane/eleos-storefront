import Link from "next/link"
import React from "react"
import {
  BsEnvelope,
  BsHouseCheck,
  BsHouseExclamation,
  BsInstagram,
  BsPhone,
} from "react-icons/bs"

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 text-gray-800/60">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-2">
          <h2 className="font-semibold text-xl  text-gray-800/80">
            Reach Us Via
          </h2>

          <p className="mt-6 font-semibold text-md text-gray-800/60">
            Monday&ndash;Saturday between 12PM to 9PM
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex space-x-2 text-center">
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

            <div className="flex space-x-2 text-center">
              <div className="flex items-center justify-center">
                <BsEnvelope size={15} />
              </div>
              <div className="text-sm md:text-base">
                Email &ndash;&nbsp;
                <Link href={"mailto:contact@eleos.in"} target="_new">
                  contact@eleos.in (Lead time: 1-2 days)
                </Link>
              </div>
            </div>

            <div className="flex space-x-2 text-center">
              <div className="flex items-center justify-center">
                <BsPhone size={15} />
              </div>
              <div className="text-sm md:text-base">
                Phone number &ndash;&nbsp;{" "}
                <a href="tel:+916026804180">+91 6026804180</a>
              </div>
            </div>

            <div className="flex space-x-2 md:text-center">
              <div className="flex items-center justify-center">
                <BsHouseCheck size={15} />
              </div>
              <div className="text-sm md:text-base">
                Address &ndash;&nbsp;
                <Link href={"contact@eleos.in"} target="_new">
                  6th floor, Central mall, Christian Basti, Guwahati - 781005
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.207647405168!2d91.7753679106285!3d26.15736607700995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5986cd7aa9ab%3A0x1a7946c3ae41ad3d!2sCentral%20Mall!5e0!3m2!1sen!2sin!4v1740640062645!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* form start here */}
        {/* <div className="p-2">
          <h2 className="font-semibold text-xl  text-gray-800/80">
            Drop Us a Line
          </h2>

          <form
            action="https://formsubmit.co/connect@eleos.in"
            method="POST"
            className="mt-6"
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
        </div> */}
      </div>
    </div>
  )
}
