"use client"

import { Button } from "@medusajs/ui"
import { ReactNode, useState } from "react"

interface TabProps {
  tabs: {
    label: string
    content: ReactNode
  }[]
}

const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label)

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        {tabs.map((tab) => (
          <Button
            variant="transparent"
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`rounded-3xl border border-gray-400 ${
              activeTab === tab.label ? "active" : ""
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            style={{ display: activeTab === tab.label ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
