import React from 'react';
import './styles/BadgesList.css'

class BadgesList extends React.Component{
    render(){
        return (
            <div >
                <ul className="list-unstyled"> 
                {this.props.badges.map((badge) =>{
                return(
                    <li key={badge.id}>
                       <div className="BadgesListItems">
                            <img 
                                className="BadgesListItem_avatar"
                                src = {badge.avatarUrl}
                                alt="avatar"
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