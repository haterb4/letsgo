import React from 'react'
import style from '../app/style/style.css'


const Grid = ()=>{

    return(
        <div className='s-voyage'>
            <div>
                <div className='s-trajetInfo'>
                    <div className='s-hour'>
                        <h3>16:30</h3>
                        <p>5h45</p>
                        <h3>22:30</h3>
                    </div>
                    <div>
                        <div className='s-position'>
                            <h3>Yaoundé</h3>
                            <p>Poste centrale</p>
                        </div>
                        <div className='s-position'>
                            <h3>Douala</h3>
                            <p>Bonamoussadi</p>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className='s-price'>
                    5500FCFA
                </div>

            </div>
            <div>
                <div className='s-driverInfo'>
                    <div className='s-driverImg'>

                    </div>
                    <div>
                        <div className='s-driverName'>
                            Gael
                        </div>
                        <div className='s-level'>
                            <p>Super Driver</p>
                            <p>4,8</p>
                        </div>
                    </div>

                </div>
                <div className='s-nPlace'>
                    <div>
                      4  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Grid;