import React from 'react'
import style from '../app/style/style.css'

const SearchBar = () =>{

    return(
        <div className='searchbar'>
            <form>
                <div className='s-row'>

                    <input type="text" placeholder='Départure' requied/>
                </div>
                <div className='s-row'>

                    <input type="text" placeholder='Destination' requied/>
                </div>
                <div className='s-row'>

                    <input type="date" requied/>
                </div>
                <div className='s-row' style={{border: "none"}}>

                    <input type="number" defaultValue="1" requied/>
                </div>
                <div>
                    <input className='s-submit' type="submit" value="Search"/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;