'use client'
import Shell from '@/components/Shell'
import { usePathname } from 'next/navigation'

const Dashboard = ({
  children,
  rsvps,
  events,
}: {
  children: React.ReactNode
  rsvps: any
  events: any
}) => {
  const path = usePathname()

  return (
    <Shell>
      {path === '/dashboard' ? (
        <div className="flex flex-col lg:flex-row w-full min-h-[91vh]">
          <div className="w-full lg:w-1/2 border-r border-default-50">
            {rsvps}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="border-b border-default-50 w-full">
              {events}
            </div>
            <div className="w-full lg:h-1/2">{children}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </Shell>
  )
}

export default Dashboard
