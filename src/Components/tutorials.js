import React, { Component, useState } from 'react';
import data from './mock-data.json';
import AddTutorials from './add';
import EditTutorials from './edit';
import './style.css';
import { Link } from 'react-router-dom';
import ReadOnlyRow from './ReadOnlyRow';
const Tutorials = () =>{
    const[courses,setCourses] = useState(data);
    const[searchTerm, setSearchTerm] = useState("");
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
            <div>
                <div>
                    <ul className = "list-group">
                        {data.filter((courses)=>{
                            if(searchTerm == "") {
                                return courses
                            }    else if(courses.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return courses
                            }
                        }).map((courses) => (
                               <ReadOnlyRow courses={courses}/>
                                ))}
                    </ul>
                    <button className="btn btn-danger removeAll">Remove All</button>
                </div>
                <div className="details">
                    <h2>Tutorial</h2>
                    <p><strong>Title : </strong></p>
                    <p><strong>Description : </strong></p>
                    <p><strong>Status : </strong></p>
                    <Link to={"/edit"} className="btn btn-warning"><strong>Edit</strong></Link>
                </div>
            </div>
        </div>
    );

}
 
export default Tutorials;