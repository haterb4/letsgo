import React from 'react'
import styles from '@/styles/dashboard.module.css'

const DashoardLayout = ({ title, children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className='w-64 h-full min-h-screen bg-white border'>
        side content
      </div>
      <div className='w-full min-h-screen flex flex-col justify-between items-start'>
        <div className='w-full m-auto mt-0 mb-0 px-10 pt-4'>
          <div className='h-16 w-full bg-white rounded-lg'></div>
          {children}
        </div>
        <div className='w-full h-16 bg-white'>
          footer
        </div>
      </div>
    </div>
  )
}

export default DashoardLayout