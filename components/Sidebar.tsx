import type { NextComponentType, NextPageContext } from "next";
import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

interface Props { }

const Sidebar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const [showSidebar, setShowSidebar] = useState(true)
  const router = useRouter()

  const handleClick = () => { showSidebar ? setShowSidebar(false) : setShowSidebar(true) }
  // const handleClick = () => { setShowSidebar((prev) => !prev) }

  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 bg-white text-xl shadow-2xl' onClick={handleClick}>
        {
          showSidebar ? <AiOutlineMenu /> : <ImCancelCircle />
        }
      </div>
      {showSidebar && (
        <div className='w-64 h-screen fixed top-0 left-0 bg-white shadow-2xl'>
          <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>


          </div>
        </div>
      )}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
      </div>
    </div>
  )
}

export default Sidebar

