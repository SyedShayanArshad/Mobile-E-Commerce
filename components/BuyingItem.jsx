import React from 'react'
import Image from 'next/image'
function BuyingItem(props) {
  return (
    <div className='p-4 flex gap-4 rounded-[13px] font-sfpro bg-[#f6f6f6] items-center justify-center'>
        <Image src={props.img} width={40} height={40} alt='' />
        <p className='font-medium text-base leading-6 w-[319px]'>{props.title} </p>
        <p className='font-bold text-base leading-6'>${props.price}</p>
    </div>
  )
}

export default BuyingItem