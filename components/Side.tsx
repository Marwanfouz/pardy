'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/images/pardy.png'
import { Button, cn } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { signout } from '@/actions/signout'
import { FaTimes } from 'react-icons/fa'

const isActive = (path: string, route: string) => {
  if (route === '/dashboard') {
    return path === '/dashboard'
  } else {
    return path.includes(route)
  }
}

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
]

const Side = ({
  isOpen,
  setIsOpen,
  toggleSidebar,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  toggleSidebar: () => void
}) => {
  const path = usePathname()

  const activeClass = 'bg-primary hover:bg-primary'

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <aside className="lg:static absolute top-0 left-0 lg:block w-[200px] min-w-[200px] max-w-[200px] border-r border-default-50">
      <div
        className={cn(
          'fixed lg:static lg:block w-full h-full px-3 bg-black lg:bg-transparent transition-transform duration-300 z-10',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
            'lg:translate-x-0 lg:relative': true,
          }
        )}
      >
        <button
          className="text-red-600 rtl m-2 translate-x-64 lg:hidden"
          onClick={closeSidebar}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col mb-auto">
          {links.map((link) => (
            <div className="w-full my-2" key={link.route}>
              <Link href={link.route} onClick={closeSidebar}>
                <div
                  className={cn(
                    'w-full py-2 px-2 hover:bg-content1 rounded-lg text-center lg:text-left',
                    isActive(path, link.route) ? activeClass : ''
                  )}
                >
                  {link.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full px-4 mt-12">
          <Button
            onClick={() => {
              signout()
              closeSidebar()
            }}
            fullWidth
            variant="ghost"
          >
            Sign Out
          </Button>
        </div>
      </div>
      <div
        className={cn('fixed inset-0 bg-black opacity-50 lg:hidden', {
          hidden: !isOpen,
        })}
        onClick={toggleSidebar}
      ></div>
    </aside>
  )
}

export default Side
