import React from 'react'
interface PageHeaderProps {
  children: React.ReactNode;
  description?: string;
  image?: string;
  bg: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className={`flex items-center justify-start rounded-lg w-full h-[200px] ${props.bg} relative shadow-md`}>
      <div className={`w-full hidden md:flex items-center justify-start rounded-lg h-full ${props.image && props.image} absolute`}/>
      <div className='w-[500px] lg:px-20 px-4 flex flex-col justify-center items-start text-white relative z-20'>
        <div>{props.children}</div>
        {props?.description && <h2>{props.description}</h2>}
      </div>
    </div>
  )
}

export default PageHeader
