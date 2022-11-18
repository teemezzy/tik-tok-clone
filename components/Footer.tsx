import type { NextComponentType, NextPageContext } from "next";
import {footerList1,footerList2,footerList3} from '../utils/constants'



const List =(items:any)=>{
        <div className='flex flex-col gap-2'>
            {items.map((item:any,index:number)=>(
                <p key={index} className='text-gray-400 text-sm hover:underline cursor-pointer '>
                    {item}
                </p>
            ))}
</div>
}

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="mt-6 hidden xl:block">
        <div className='flex flex-wrap gap-2 mt-5'>
            <List items={footerList1}/>
        </div>

    </div>
  )
}

export default Footer