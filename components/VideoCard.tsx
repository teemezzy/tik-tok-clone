import { NextPage } from "next";
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
                </div>

            </div>
        </div>
    )
}

export default VideoCard