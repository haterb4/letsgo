import styles from '@/styles/navigation.modules.css'

function Navigation (){
    return (
        <div className={styles.compnav}>
        <nav className="nav">
            <ul className="navul">
                
                <li className="the0">
                    <link href="/about">
                    <a>Covoiturage </a>
                    </link>
                </li>
                <li className="the1">
                    <link href="/about">
                    <a>Taxi</a>
                    </link>
                </li>
                <li className="the2">
                    <link href="/about">
                    <a>Rechercher</a>
                    </link>
                </li>
                <li className="the3">
                    <link href="/about">
                    <a>Télécharger</a>
                    </link>
                </li>
                <li className="the4">
                    <link href="/about">
                    <a>Trajet</a>
                    </link>
                </li>
                <li className="the5">
                    <link href="/about">
                    <a> Partenaires</a>
                    </link>
                </li>
                <li className="the6">
                    <link href="/about">
                    <a>Tarifs</a>
                    </link>
                </li>

            </ul>
        </nav>
        </div>
    )
}

export default Navigation;