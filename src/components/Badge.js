//Creamos nuestro primer componente  
import React from 'react';
import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css";


//A react no le gusta que useemos class para nuestros elementos
class Badge extends React.Component{
   //Todos los componentes requieren por lo menos un metodo 
//Props --> properties son argumentos a una funcion, en este caso serán atributos de nuestro componente

   render(){
       const firstName= "Melissa";
       const lastName = "González";

       return <div className="Badge">
           {/* Seccion del header */}
           <div className="Badge__header">
           <img src= {confLogo} alt="Logo de la conferencia" />
           </div>

           <div className="Badge__section-name">
               <img className="Badge__avatar" 
               src = "https://image.freepik.com/vector-gratis/buen-astronauta-equipo-kawaii-avatar_24640-31.jpg" 
               alt="Avatar" />
             <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
           </div>
           <div className="Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>@{this.props.twitter}</div>
           </div>
           <div className="Badge__footer">
               #platziconf
           </div>
       </div>
   }
}
export default Badge;
