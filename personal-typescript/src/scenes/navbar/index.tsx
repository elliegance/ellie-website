import {useState} from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void  
}

const Navbar = ({
  selectedPage,
  setSelectedPage
}: Props) => {
    const flexBetween = "flex items-center justify-between"

    return <nav>
      <div 
        className = {`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className= {`${flexBetween} max-auto w-5/6`}>
              <div className = {`${flexBetween} w-full gap-16`}>
                {/* Left Side */}
                <img alt="logo" src={Logo} />

                {/* Right Side */}
                <div className = {`${flexBetween} w-full`}>
                  <div className = {`${flexBetween} gap-16 text-sm`}>
                    <Link 
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      page="About Me"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      />
                    <Link 
                      page="Games"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      />
                    <Link 
                      page="Projects"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      page="Contact Me"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                </div>
              </div>
          </div>
      </div>
    </nav>
}

export default Navbar