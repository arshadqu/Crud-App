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
    const {users ,viewUser} = useContext(GlobalContext);
    const[showDetails, setShowDetails] = useState(false);
    console.log(users);
    const Details = () =>{
        <div className="details">
            <h2>Tutorial</h2>
            <p><strong>Title : {users.title}</strong></p>
            <p><strong>Description : {users.desc}</strong></p>
            <p><strong>Status : {users.status}</strong></p>
            <Link to={"/edit"} className="btn btn-warning"><strong>Edit</strong></Link>
        </div>
    }
    const onClick = () => setShowDetails(true);
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
                    <div className = "list-group">
                        {users.filter((users)=>{
                            if(searchTerm == "") {
                                return users
                            }    else if(users.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return users
                            }
                        }).map((user) => (
                        <div><button type="button" onClick={onClick} className="list-group-item list-group-item-action" >
                            {user.title} 
                            </button>
                            {showDetails ? <Details user={user}/> : null }
                        </div>
                        ))}
                    </div>
                    <button 
                    onClick={() => {users.filter((users)=>{
                        return ;
                    })
                    }}
                    className="btn btn-danger removeAll">Remove 
                    </button>
                </div>
            </div>
            </td>
            <td>

            </td>
            </tr>
            </table>
        </div>
    );

}
 
export default Tutorials;