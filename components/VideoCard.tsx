import { NextPage } from "next";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { Video } from './../types';

interface Props {
    post: Video

}

const VideoCard: NextPage<Props> = ({ post }) => {
    const [isHover, setisHover] = useState<Boolean>(false)
    const [playing, setPlaying] = useState<Boolean>(false)
    const [muted, setMuted] = useState<Boolean>(false)

    const handleMouseEnter = () => {setisHover(true)}
    const handleMouseLeave = () => {setisHover(false)}

    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 w-10 h-{62px}'>
                        <Link href='/'>
                            <div>
<Image src={post.postedBy.image} alt='Profile Image' width={62} height={62} className='rounded-full object-contain object-center' />
                            </div>

                        </Link>
                    </div>
                    <div>
                        <Link href='/'> 
                        <div className="flex gap-2 items-center " >
                            <p className="flex gap-2 items-center md:text-md font-bold text-primary ">

{post.postedBy.userName} {``}
<GoVerified className="text-blue-400 text-md"/>
                            </p>
                            <p className="capitalize font-medium text-xs text-gray-400 hidden md:block">{post.postedBy.userName}</p>
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="ml-20 flex gap-4 relative">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="rounded-3xl">

                    <Link href='/'>
                        <video className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] rounded-2xl w-[200px] cursor-pointer bg-gray-200 " loop src={post.video.asset.url}></video>
                    </Link>
                    {isHover && (
                        <div>
                            {playing ? (
                                <button className="text-black text-2xl lg:text-4xl"><BsFillPauseFill/></button>
                            ): (<button><BsFillPlayFill/></button>)}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default VideoCard