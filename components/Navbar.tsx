import type { NextComponentType, NextPageContext } from "next";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import {FaHome} from 'react-icons/fa'

interface Props { 

}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (props: Props,) => {
    return (
        <div>
            <div className=" w-full flex items-center justify-between px-4 py-2 bg-white shadow-lg">
                <div className="flex items-center gap-4">
                    <Link href='/'>
                    <div className="w-[100px] md:w-[130px]">
                        <Image src="/tik-tok-logo.svg" alt='logo' width={100} height={50} className='cursor-pointer'/>

                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar