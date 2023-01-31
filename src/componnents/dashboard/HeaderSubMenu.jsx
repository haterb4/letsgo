import React from 'react';
import Link from 'next/link';

const HeaderSubMenu = () => {

    const currentUser = {name: 'Johanna', isOnline: true}

    return (
        <div id="HeaderSubMenu" className="flex flex-col absolute top-16 right-0 bg-white rounded-md w-56 text-sm">
            <div className="uppercase flex place-items-center justify-center px-2 py-3 border-b border-gray-300">
                {currentUser.name}
            </div>
            <div className="uppercase flex place-items-center px-2 py-3  border-b border-gray-300">
                <Link href="/settings/personalInfo" className="p-1 block  w-full">
                <i className="fa-solid fa-gear pr-2"></i>Setting informations
                </Link>
            </div>
            <div className="uppercase flex place-items-center px-2 py-3">
                <Link href="/" className="p-1 block  w-full">
                <i className="fa-solid fa-arrow-right-from-bracket pr-2"></i>Log out
                </Link>
            </div>
        </div>
    );
};

export default HeaderSubMenu;