import './Trips.css';

const Trips = () => {
    return(
        <div className='trips'>
            <h1> Recents trips</h1>
            <div className='tableau'>
                <table cellPadding={20}> 
                    <thead>
                        <tr>
                            <th>Traject</th>
                            <th>Travel date</th>
                            <th>Driver</th>
                            <th>Places</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chapitre 1: The last Man</td>
                            <td>01 Juillet 2022</td>
                            <td>03 Juillet 2022</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <td>Chapitre 1: The last Man</td>
                            <td>01 Juillet 2022</td>
                            <td>03 Juillet 2022</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <td>Chapitre 1: The last Man</td>
                            <td>01 Juillet 2022</td>
                            <td>03 Juillet 2022</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <td>Chapitre 1: The last Man</td>
                            <td>01 Juillet 2022</td>
                            <td>03 Juillet 2022</td>
                            <td>65</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            
           
        </div>
        
    );
}

export default Trips;