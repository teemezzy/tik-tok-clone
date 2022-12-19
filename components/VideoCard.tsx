import type { NextPage } from "next";
import { Video } from '../types'

interface Props {
    post: Video
}

const VideoCard: NextPage<Props> = ({ post }) => {
    // console.log(post.caption)
    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
        
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