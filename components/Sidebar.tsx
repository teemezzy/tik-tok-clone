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
    </div>
  )
}

export default Sidebar

