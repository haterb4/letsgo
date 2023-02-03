import React from 'react'
import styles from '../styles/formitem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SarchItem = ({label, placeholder, icon, setItemState, control, value}) => {
  return (
    <div className={styles.formField}>
        <h4>{label}</h4>
        <div className={styles.formItem}>
            <div className='p-4'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <input type="text" placeholder={placeholder} onChange={ e => setItemState(e.target.value)} value={value}/>
            {control}
        </div>
    </div>
  )
}

export default SarchItem