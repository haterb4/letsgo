import React from 'react'
import styles from '@/styles/search.module.css'
import Image from 'next/image'
import Avatar from '/public/icons/Avatar.png';
import star from '/public/icons/star.png';
import star_half from '/public/icons/star_half.png';
import empty_star from '/public/icons/empty_star.png';
import group_point from '/public/icons/group_point.png';
import my_location from '/public/icons/my_location.png';
import pin_drop from '/public/icons/pin_drop.png';
import user_icon from '/public/icons/Vector.png';
import airConditioner from '/public/icons/AirConditioner.png';
import electrical from '/public/icons/Electrical.png';
import musicalNotes from '/public/icons/MusicalNotes.png';
import noSmoking from '/public/icons/NoSmoking.png';
import wifi from '/public/icons/Wi-Fi.png';
import streetFood from '/public/icons/StreetFood.png';

const TripCard = () => {
  return (
    <div className="flex flex-col  shadow  justify-center mb-4 rounded-xl ">
    <div className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row justify-between items-center">
        <Image alt="Avatar" src={Avatar} width="80" height="80" />
        <div className="flex flex-col ml-2 gap-y-6">
          <p className="text-2xl capitalize font-bold">Krys Jackson</p>
          <div className="flex flex-row justify-start">
          <Image alt="star" src={star} className={styles.star} />
          <Image alt="star" src={star} className={styles.star} />
          <Image alt="star" src={star} className={styles.star} />
          <Image alt="star" src={star_half} className={styles.star} />
          <Image alt="star" src={empty_star} className={styles.star} />
          </div>
        </div>
      </div>
      <div>
        <p className=" text-3xl font-light text-orange-500	">XAF 300</p>
      </div>
    
    </div>
    <div className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-medium">00h30</p>
        <div className='flex flex-row justify-start'>
          <div className='flex flex-col items-center gap-y-4 ml-2'>
            <Image alt="Avatar" src={my_location} className={styles.location}  />
            <Image alt="Avatar" src={group_point}  />
            <Image alt="Avatar" src={pin_drop} className={styles.pin_drop}  />
          </div>
          <div className='flex flex-col justify-between ml-2'>
            <div className="">
              <p className="font-bold">Biyem-Assi</p>
              <p className="text-gray-300 ">7:00, Today</p>
            </div>
            <div className="">
              <p className="font-bold">Melen, Polytechnique</p>
              <p className="text-gray-300 ">7:30, Today</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-end">
          <p className="font-bold text-xl">5</p>
          <Image alt="Avatar" src={user_icon} className={styles.user_icon}  />
        </div>
        <div className="flex flex-col justify-between gap-y-2 mt-4">
          <div className="flex flex-row">
            <Image alt="Avatar" src={wifi}  width="40" height="40" />
            <Image alt="Avatar" src={airConditioner} width="40" height="40"  />
            <Image alt="Avatar" src={musicalNotes} width="40" height="40"  />
          </div>
          <div className="flex flex-row">
            <Image alt="Avatar" src={noSmoking} width="40" height="40"  />
            <Image alt="Avatar" src={streetFood} width="40" height="40"  />
            <Image alt="Avatar" src={electrical} width="40" height="40"  />
          </div>
        </div>
        
      </div>
    </div>
    <div className="p-4 flex flex-row justify-between">
      <p>Reservation ends after:</p>
      <p className='font-light text-orange-500 text-base'>01d: 02h: 49min: 98s</p>
    </div>
  </div>
  )
}

export default TripCard