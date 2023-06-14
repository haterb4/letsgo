import Navbar from '@/componnents/Navbar';
import Footer from '@/componnents/Footer';
import React from 'react';
import Head from 'next/head'

const MainLayout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Let's go</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="The best car pooling app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    );
};

export default MainLayout;