import "./Date.css";

const Date = () => {
    return(
        <div className="date">
            <div className="menu">
                <h2>Date</h2>
                <div className="t3"><h2>Juillet 2022</h2></div>
            </div>
            
            <div className="listes">
                <div className="t1">
                    <div className="t2">Mon</div>
                    <div><h1>05</h1></div>
                </div>
                <div className="t1">
                    <div className="t2">Mar</div>
                    <div><h1>06</h1></div>
                </div>
                <div className="t1">
                    <div className="t2">Mer</div>
                    <div><h1>07</h1></div>
                </div>
                <div className="t1">
                    <div className="t2">Jeu</div>
                    <div><h1>08</h1></div>
                </div>
                <div className="t1">
                    <div className="t2">Ven</div>
                    <div><h1>09</h1></div>
                </div>
            </div>

            
        </div>
        
    );
}

export default Date;