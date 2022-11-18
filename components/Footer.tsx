import type { NextComponentType, NextPageContext } from "next";
import {footerList1,footerList2,footerList3} from '../utils/constants'

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="mt-6 hidden xl:block">
        <div className='flex flex-wrap gap-2 mt-5'>
            {footerList1.map((item,index)=>(
                <p key={index} className='text-gray-400 text-sm hover:underline cursor-pointer '>
                    {item}
                </p>
            ))}
        </div>

    </div>
  )
}

export default Footer