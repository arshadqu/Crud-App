import React, { Component } from 'react';

const ReadOnlyRow = ({courses}) => {
        return (
            <li><button type="button" className="list-group-item list-group-item-action" >{courses.title}</button></li>
        );
};
 
export default ReadOnlyRow;