import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
interface SidebarLinkProps {
    active?: boolean;
    icon: IconType;
    link: {
        href: string;
        text: string
    };
    iconClass?: string;
}
const SidebarLink: React.FC<SidebarLinkProps> = (props) => {
  return (
    <Link href={props.link.href} className={`w-full flex items-center py-2 rounded-md hover:bg-gradient-to-r hover:to-[#5438CD] hover:from-[#2D3A96] ${props?.active && 'bg-gradient-to-r to-[#5438CD] from-[#2D3A96]'}`}>
      <div className='w-8 h-8 mr-2 flex justify-center items-center text-[#FE9261]'>
        <props.icon size={24} className={props.iconClass}/>
      </div>
      <h1 className='text-lg font-bold'>{props.link.text}</h1>
    </Link>
  )
}

export default SidebarLink
