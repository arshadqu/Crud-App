import React, { Component, useState , useContext } from 'react';
import data from './mock-data.json';
import AddTutorials from './add';
import EditTutorials from './edit';
import './style.css';
import { Link } from 'react-router-dom';
import ReadOnlyRow from './ReadOnlyRow';
import { GlobalContext } from '../Context/GlobalState';

const Tutorials = () =>{
    const[courses,setCourses] = useState(data);
    const[searchTerm, setSearchTerm] = useState("");
    const {users} = useContext(GlobalContext);
    console.log(users);
    return (
        
        <div className="tutorialsList">
            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                onChange = {(event)=>{
                    setSearchTerm(event.target.value)
                }}
                placeholder="Course Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            <table>
            <tr>
            <td>
            <div>
                <div>
                    <ul className = "list-group">
                        {/* {users.filter((users)=>{
                            if(searchTerm == "") {
                                return users
                            }    else if(users.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return users
                            }
                        }) */}
                        {users.map((user) => (
                        <li><button type="button" className="list-group-item list-group-item-action" >
                            {user.title} 
                            </button>
                        </li>    
                        ))}
                    </ul>
                    <button className="btn btn-danger removeAll">Remove All</button>
                </div>
            </div>
            </td>
            <td>
            <div className="details">
                    <h2>Tutorial</h2>
                    <p><strong>Title : </strong></p>
                    <p><strong>Description : </strong></p>
                    <p><strong>Status : </strong></p>
                    <Link to={`/edit/${users.id}`} className="btn btn-warning"><strong>Edit</strong></Link>
            </div>
            </td>
            </tr>
            </table>
        </div>
    );

}
 
export default Tutorials;