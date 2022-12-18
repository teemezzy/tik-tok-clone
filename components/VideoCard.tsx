import type { NextPage} from "next";
import {Video} from '../types'

interface Props {
    post: Video
}

const VideoCard: NextPage<Props> = ({post}) => {
    console.log(post.caption)
  return (
    <div></div>
  )
}

export default VideoCard