import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const HeaderSubMenu = () => {

    const currentUser = useSelector(state => state.user.data)

    return (
        <motion.div key="headersubmenu" initial="hidden" animate="visible" exit="hidden" variants={{
            hidden: {scale: .8, opacity: 0, transition: {duration: .3}},
            visible: {scale: 1, opacity: 1, transition: {duration: .4, /*delay: .4*/}},
            }} 
        id="HeaderSubMenu" className="flex flex-col absolute top-16 right-0 bg-white rounded-md w-56 text-sm">

            <div className="uppercase font-bold flex place-items-center justify-center px-2 py-3 border-b border-gray-300">
                {currentUser.name}
            </div>
            <div className="uppercase flex place-items-center px-2 py-3  border-b border-gray-300">
                <Link href="/settings/personalInfo" className="p-1 block  w-full">
                <i className="fa-solid fa-gear pr-2"></i>Planner settings
                </Link>
            </div>
            <div className="uppercase flex place-items-center px-2 py-3">
                <Link href="/" className="p-1 block  w-full">
                <i className="fa-solid fa-arrow-right-from-bracket pr-2"></i>Log out
                </Link>
            </div>

        </motion.div>
    );
};

export default HeaderSubMenu;