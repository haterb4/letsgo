import './Navbar.css';
import profil from "./profil.png"
import cercle from "./grand-cercle.png"

const Navbar = () => {
    return(
        <div className='navbar'>
            <nav>
                    <div><img src={cercle}/> </div>
                    <div className='name'>
                        <div><img src={cercle}/></div>
                        <div><img src={cercle}/></div>
                        <div><img src={cercle}/></div>
                        <div><span>Johanna</span></div>
                        <div><img src={profil}/></div>
                    </div>

            </nav>
        </div>
    )
}

export default Navbar;