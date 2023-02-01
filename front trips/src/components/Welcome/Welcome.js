import "./Welcome.css";
import petit from "./petit-cercle.png";
import grand from "./grand-cercle.png"
import voiture from "./voiture.png"
import demi from "./demi-cercle.png"

const Welcome = () => {
        return(
            <div className="welcome">
                <div className="marge">
                    <h1>BIENVENUE JOHANNA</h1>
                    <p>Vous allez faire quoi aujourd'hui ?</p>
                    <div>
                        <div className="p1"> <img src={petit}/> </div>
                        <div className="p2"> <img src={petit}/> </div>
                        <div className="p3"> <img src={petit}/> </div>
                        <div className="p4"> <img src={petit}/> </div>
                        <div className="p5"> <img src={petit}/> </div>
                        <div className="g1"> <img src={grand}/> </div>
                        <div className="g2"> <img src={grand}/> </div>
                    </div>

                    <div className="ensemble">
                        <div className="demi"> <img src={demi}/> </div>
                        <div className="voiture"> <img src={voiture}/> </div>
                    </div>
                </div>

                
                
            </div>
        );
}

export default Welcome;