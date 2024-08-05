'use client'

import { Sidebar } from "lucide-react"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import Side from "./Side"

const FaBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <button
      className="lg:hidden p-4 absolute top-1"
      onClick={toggleSidebar}
      aria-label="Toggle menu"
    >
      <FaBars size={24} />
      </button>
      <Side isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default FaBar
