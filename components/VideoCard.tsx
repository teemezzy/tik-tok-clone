import type { NextPage } from "next";
import Link from 'next/link'
import Image from 'next/image'
import { Video } from '../types'

interface Props {
    post: Video
}

const VideoCard: NextPage<Props> = ({ post }) => {
    // console.log(post.caption)
    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 w-10 h-10'>
                        <Link href='/'>
                            <>
                            <Image src='' alt='' width={62} height={62}/>
                            </>

                        </Link>
                    </div>
                </div>

            </div>
            {/* {posts.map((post: Video) => (
                <div>
                    <h1>{post.caption}</h1>
                    <video src={post.videoUrl} controls loop></video>
                </div>
            )} */}

        </div>
    )
}

export default VideoCard