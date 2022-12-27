import type { NextComponentType, NextPageContext } from "next";
import Image from 'next/image'
import Link from 'next/link'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'
import { getUser } from "../utils";

interface Props {

}

const Navbar: NextComponentType<NextPageContext, {}, Props> = (props: Props,) => {
    const user =false
    return (
        <div>
            <div className=" w-full flex items-center justify-between px-4 py-7 bg-white shadow-lg">
                <div className="flex items-center gap-4 ">
                    <Link href='/'>
                        <div className="w-[100px] md:w-[130px]">
                            <Image src="/tik-tok-logo.svg" alt='logo' width={100} height={50} priority className='cursor-pointer w-auto h-auto'/>
                        </div>
                    </Link>

                    <div>SEARCH</div>

                    <div>
                    {user ? (
                        <div>Logged In</div>
                    ) : (
                       <div><GoogleLogin   
                       onSuccess={credentialResponse => {
                        getUser(credentialResponse)
             
                        // console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }} /></div>)
                     }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar