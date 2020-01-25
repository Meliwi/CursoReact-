import React from 'react';
import './styles/BadgesList.css'
import Gravatar from './Gravatar.js';

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length===0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <a className="btn btn-primary" href="
                    /badges/new">
                        Creat new badge
                    </a>
                </div>
            )
        }
        return (
            <div >
                <ul className="list-unstyled"> 
                {this.props.badges.map((badge) =>{
                return(
                    <li key={badge.id}>
                       <div className="BadgesListItems">
                            <Gravatar
                                className="BadgesListItem_avatar"
                                email={badge.email}
                            />
                            <div className="Badge__Data">
                                <strong>
                                {badge.firstName} {badge.lastName}
                                </strong>
                                <br/>
                                {badge.jobTitle}
                                <br/>
                                <span className="Twitter__font" > @{badge.twitter}</span>
                            </div>
                        </div>
                        <br/>
                   </li>
               ) 
            })}
        </ul>
            </div>

        )
    }
}

export default BadgesList;