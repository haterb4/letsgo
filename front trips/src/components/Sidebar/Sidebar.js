import './Sidebar.css'
import petit from './petit-cercle.png'
const Sidebar = () => {
    return(
        <div className='sidebar'>
            <h1>Let's go</h1>
            <h2>Dashboards</h2>
            <div>
            <h3>Trip</h3>
            <ul>
                <li> <img src={petit} /> my trips</li>
                <li> <img src={petit} /> trips management</li>
            </ul>
            </div>
            <h3>Drivers</h3>
            <h3>Vihicles</h3>
        </div>
        
    );

}

export default Sidebar;