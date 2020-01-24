import React from 'react';
import './styles/NotFound.css';

class NotFound extends React.Component{
    render(){
        return (
            <div class="NotFound">
                <div className="NotFound-ImageContainer">
                    <img className="NotFound_Image" 
                    src = "https://estudioinfinite.es/wp-content/uploads/2019/04/astronauta-volando-dibujos-animados-by-Vexels.png" 
                    alt="NotFound" />
                </div> 
                <div className="text__NotFound">
                    <h1>404 : Not Found</h1>
                </div>
            </div>
        );
    }
}


export default NotFound;