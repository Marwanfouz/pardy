import Nav from './Nav'
import FaBar from './FaBar'

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className="flex min-h-[91vh]">
        <FaBar />
        <div className="w-full">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Shell
