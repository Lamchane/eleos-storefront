"use client"

import { Disclosure, Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark, ChevronDown } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { ProductCategory } from "@medusajs/medusa"
import { ProductCollection } from "@medusajs/medusa"

const SideMenuItems = {
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({
  regions,
  categories,
  collections,
}: {
  regions: Region[] | null
  categories: ProductCategory[] | null
  collections: ProductCollection[] | null
}) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/4 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-end" id="xmark">
                        <button data-testid="close-menu-button" onClick={close}>
                          <XMark />
                        </button>
                      </div>

                      <ul className="mt-10 flex flex-col gap-4 items-start justify-start">
                        {collections?.map((collection) => {
                          return (
                            <li
                              key={collection.id}
                              className="w-full py-2 border-b border-gray-50 border-opacity-25"
                            >
                              <LocalizedClientLink
                                href={`/collections/${collection.handle}`}
                                className="text-xl leading-10 hover:text-ui-fg-disabled"
                                onClick={close}
                              >
                                {collection.title}
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>

                      <Disclosure
                        as="div"
                        className="w-full mt-6"
                        defaultOpen={false}
                      >
                        <div className="w-full flex justify-between items-center py-2 border-b border-gray-50 border-opacity-40">
                          <LocalizedClientLink
                            href={"/store"}
                            className="text-xl leading-10 hover:text-ui-fg-disabled"
                            onClick={close}
                          >
                            Shop
                          </LocalizedClientLink>
                          <Disclosure.Button className={"group"}>
                            <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                          </Disclosure.Button>
                        </div>

                        <Disclosure.Panel className="origin-top transition duration-200 ease-out mt-2 text-sm/5 text-white/50">
                          <ul className="flex flex-col gap-4 items-start justify-start">
                            {categories?.map((category) => {
                              return (
                                <li key={category.id}>
                                  <LocalizedClientLink
                                    href={`/categories/${category.handle}`}
                                    className="text-xl leading-10 hover:text-ui-fg-disabled"
                                    onClick={close}
                                  >
                                    {category.name}
                                  </LocalizedClientLink>
                                </li>
                              )
                            })}
                          </ul>
                        </Disclosure.Panel>
                      </Disclosure>

                      <ul className="mt-6 flex flex-col gap-4 items-start justify-start">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li
                              key={name}
                              className="w-full py-2 border-b border-gray-50 border-opacity-25"
                            >
                              <LocalizedClientLink
                                href={href}
                                className="text-xl leading-10 hover:text-ui-fg-disabled"
                                onClick={close}
                                data-testid={`${name.toLowerCase()}-link`}
                              >
                                {name}
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Eleos Store. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
