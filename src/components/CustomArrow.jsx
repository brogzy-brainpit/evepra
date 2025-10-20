import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CustomArrow({href="/"}) {
  return (
   <Link href={href} className='z-[3] backdrop-blur-md p-[10px] text-xs font-body rounded-full bg-white'>
        <ArrowRight className='w-6 h-6 text-[#45775F]'/>
        </Link>
  )
}

export default CustomArrow