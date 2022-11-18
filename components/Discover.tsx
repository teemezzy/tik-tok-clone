import type { NextComponentType, NextPageContext } from "next";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { topics } from '../utils/constants'



interface Props { }

const Discover: NextComponentType<NextPageContext, {}, Props> = (
    props: Props,
) => {
    const router = useRouter()
    const { topic } = router.query

    const activeTopicStyle="xl:border-2 bg-primary xl:border-[#ff407b] px-3 py-2 rounded xl:rounded-full text-[#ff407b] flex gap-2 items-center justify-center font-semibold cursor-pointer"

    const topicStyle ="xl:border-2 bg-primary xl:border-gray-300 px-3 py-2 rounded-full text-black flex gap-2 items-center justify-center cursor-pointer"

    return (
        <div className='xl:border-b-2 xl: border-gray-200 pb-6'>
            <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>Popular Topics</p>
            <div className='flex flex-wrap gap-3'>
                {topics.map((link:any,index:number) => (
                    <Link href={`/?topic=${link.name}`} key={link.name}>
                        <div className={topic === link.name ? activeTopicStyle : topicStyle}>
                            <span className='text-2xl font-bold xl:text-md'>{link.icon}</span>
                            <span className='text-md font-medium xl:block hidden capitalize'>{link.name}</span>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Discover