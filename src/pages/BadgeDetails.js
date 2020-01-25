import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

//Como la única tarea que va tener este componente 
//es presentar informacion 

function BadgeDetails(props){
    const badge = props.badge;
    return (
        <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                 <div className="col-6">
                  <img src={confLogo} alt="Logo de la conferencia"/>
                 </div>
                 <div className="col-6 BadgeDetails__hero-attendant-name">
                  <h1>
                    {/* En este punto ya debemos tener los datos */}
                    {badge.firstName} {badge.lastName}
                  </h1>
                 </div>
                </div>
            </div>
        </div>
    
     <div className="container">
      <div className="row">
        <div className="col">
         <Badge 
          firstName={badge.firstName} 
          lastName= {badge.lastName}
          email={badge.email}
          twitter= {badge.twitter}
          jobTitle= {badge.jobTitle}
         />
        </div>
         <div className="col">
          <h2>Actions</h2>
          <div>
           <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
             Edit
           </Link>
          </div>
          <div>
              {/* La idea es que cuando se haga click en el boton no se borre de inmediato
              queremos hacer una accion llamada:  */}
             <button onClick={props.onOpenModal} className="btn btn-danger">
                 Delete
             </button>
             <DeleteBadgeModal 
                isOpen={props.modalIsOpen} 
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
                 Loren Ipsum
             />
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default BadgeDetails;