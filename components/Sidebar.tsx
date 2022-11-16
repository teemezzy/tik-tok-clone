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
  const [showSidebar, setShowSidebar] = useState(false)
  const router = useRouter()

  const handleClick = () => { showSidebar ? setShowSidebar(false) : setShowSidebar(true) }
  // const handleClick = () => { setShowSidebar((prev) => !prev) }
  const normalLink = 'flex items-center justify-center xl:justify-start cursor-pointer font-semibold text-gray-800 gap-3 px-4 py-2 rounded-md hover:bg-gray-100';

  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 bg-white text-xl shadow-2xl' onClick={handleClick}>
        {
          showSidebar ? <ImCancelCircle /> : <AiOutlineMenu /> 
        }
      </div>
      {showSidebar && (

        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
              <Link href='/'>
                <div className={normalLink}>
                  <p className='text-2xl'>
                    <AiFillHome className='text-2xl' />
                  </p>
                  <span className='text-xl hidden xl:block'>For You</span>
                </div>
              </Link>  
          </div>
        </div>
      )}
      {/* <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className=' sticky top-0 left-0 shadow-2xl'>

            </div>
      </div> */}
    </div>
  )
}

export default Sidebar

