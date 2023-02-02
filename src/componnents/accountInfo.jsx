import React from "react";
import styles from '@/styles/accountInfo.module.css'

const AccountInfo =({label, value}) =>{

    return(
        <div className={styles.infoBloc}>
            <div className={styles.infoProfil}>
                <p>{label}</p>
                <p>{value}</p>
            </div>
            <div className={styles.modify}>
                <button>
                    Modify
                </button>
            </div>
        </div>
    );

}

export default AccountInfo;