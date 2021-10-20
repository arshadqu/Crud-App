import React, { Component, useContext, useState } from 'react';
import data from './mock-data.json';
import { GlobalContext } from '../Context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {v4 as uuid } from 'uuid';
const AddTutorials = () => {
    const[name , setName] = useState({
        title : " ",
        desc : " ",
        status : "Publish"
    });
 const [courses,setCourses] = useState(data);
 const {users,addUser} = useContext(GlobalContext);
 const history = useHistory();
//  const [addFormData,setaddformData] = useState({
//      title : " ",
//      desc : " ",
//      status : "Publish"
//  })
//  const handleAddFormChange = (event) => {
//      event.preventDefault();
//      const fieldName = event.target.getAttribute("name");
//      const fieldValue = event.target.value;

//      const newFormData = {...addFormData};
//      newFormData[fieldName] =  fieldValue;
//      setaddformData(newFormData);
//  };
//  const handleAddFormSubmit = (event) =>{
//      event.preventDefault();
//      console.log(courses.length);
//      const newCourse = {
//          id : courses.length+1,
//          title : addFormData.title,
//          desc : addFormData.desc,
//          status : addFormData.status
//      };
//      const newCourses = [...courses,newCourse];
//      setCourses(newCourses);
//      console.log(newCourses);
//  }
    const onSubmit = () => {
        console.log(users.length);
        const newUser = {
            id : users.length+1,
            title : name.title , 
            desc : name.desc,
            status : name.status
        }
        addUser(newUser)
        history.push("/tutorials")
    }
     const onChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = {...name};
        newFormData[fieldName] =  fieldValue;
        setName(newFormData);
     }
        return (
            <div className="forms">
                <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" onChange={onChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name="desc" onChange={onChange} className="form-control"  />
                </div>
                <button type="submit" className="btn btn-success" >Submit</button>
                 </form>
            </div>
        );
}
 
export default AddTutorials;