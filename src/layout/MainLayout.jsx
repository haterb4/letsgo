import Navbar from '@/componnents/Navbar';
import Footer from '@/componnents/Footer';
import '@/styles/mainlayout.scss'
import React from 'react';
import Head from 'next/head'

const MainLayout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Let's go</title>
            </Head>

            <Navbar />
                <main className="mainlayout">
                    {children}
                </main>
            <Footer />
        </>
    );
};

export default MainLayout;