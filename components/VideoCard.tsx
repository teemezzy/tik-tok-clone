import type { NextPage } from "next";
import Link from 'next/link'
import Image from 'next/image'
import { Video } from '../types'
import { useState, useEffect, useRef } from "react";
// import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi'
import { BsFillPlayFill, BsFillPauseFill, BsPlay, } from "react-icons/bs";
import { GoVerified } from 'react-icons/go'

interface Props {
    post: Video
}

const VideoCard: NextPage<Props> = ({ post }) => {
    console.log(post.caption)
    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 w-10 h-10'>
                        <Link href='/'>
                            <>
                                <Image src={post.postedBy.image} alt='Profile Image' width={62} height={62}   className='rounded-full' />
                            </>

                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoCard