import React, { Component, useState , useContext } from 'react';
import AddTutorials from './add';
import data from './mock-data.json'
import Tutorials from './tutorials';
import { GlobalContext } from '../Context/GlobalState';
const EditTutorials = () => {
    const [courses,setCourses] = useState(data);
    const[editCourseID, setEditCourseID] = useState(null);
    const {users} = useContext(GlobalContext);
    console.log(users);
        return(
            <div className="forms">
                <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name="desc" className="form-control"/>
                </div>
                <div>
                <button type="submit" className="btn btn-primary buttons" >UnPublish</button>
                <button type="submit" className="btn btn-danger buttons" >Delete</button>
                <button type="submit" className="btn btn-success buttons" >Update</button>
                </div>
                 </form>
            </div>
        );
        
    
}
 
export default EditTutorials;