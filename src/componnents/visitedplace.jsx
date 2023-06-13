import React from 'react';
import styles from '@/styles/visitedplace.module.css';
import Image from 'next/image';

const Visitedplace = ({name, quartier, ville, big}) => {
    return (
        <div className={`${big ? styles.container1 : styles.container}`}>
            <p className={styles.name}>{name}</p>
            <p className={styles.other}>{quartier}, {ville}</p>
        </div>
    );
};

export default Visitedplace;