import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Video } from '../types'
import VideoCard from '../components/VideoCard'
import NoVideos from '../components/NoVideos'

interface Props {
  videos: Video[]

}

const Home = ({ videos }: Props) => {
  // console.log(videos)
  return (
    <div >
      <Head>
        <title>TikTok Clone</title>
        <meta name="description" content="Tiktok Clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {videos.length? videos.map((video: Video) => (
            <VideoCard post= {video} key={video._id}/>
          )): <NoVideos text= {'No Post Found'}/>}
        </div>

      </main>

    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`)

  return {
    props: {
      videos: data,

    }
  }
}

export default Home
