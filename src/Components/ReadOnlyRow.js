import React, { Component } from 'react';

const ReadOnlyRow = ({user}) => {
    const tutorialDetails = ({users}) =>{
        console.log(users);
    }
        return (
            <li><button type="button" onClick = {tutorialDetails} className="list-group-item list-group-item-action" >
                {user.title} 
                </button>
            </li>
        );
};
 
export default ReadOnlyRow;