import React from 'react'
import style from '../app/style/style.css'


const Filter = ()=>{

    return(
        <div className='s-filter'>
            <form>
                <div className='s-filter-row'>
                    <label>Departure as soon as possible</label>
                    <input type="checkbox" required/>
                </div>
                <div className='s-filter-row'>
                    <label>Lowest price</label>
                    <input type="checkbox" required/>
                </div>
                <div className='s-filter-row'>
                    <label>Close to the starting point</label>
                    <input type="checkbox" required/>
                </div>
                <div className='s-filter-row'>
                    <label>Close to the point of arrival</label>
                    <input type="checkbox" required/>
                </div>
                <div className='s-filter-row'>
                    <label>Shortest route</label>
                    <input type="checkbox" required/>
                </div>
                <div className='s-filter-row'>
                    <label>Climatisation</label>
                    <input type="checkbox" required/>
                </div>
            </form>
        </div>
    )
}

export default Filter;