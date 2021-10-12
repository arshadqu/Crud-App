import React, { Component, useState } from 'react';
import data from './mock-data.json';
const AddTutorials = () => {
 const [courses,setCourses] = useState(data);
 const [addFormData,setaddformData] = useState({
     title : " ",
     desc : " ",
     status : "Publish"
 })
 const handleAddFormChange = (event) => {
     event.preventDefault();
     const fieldName = event.target.getAttribute("name");
     const fieldValue = event.target.value;

     const newFormData = {...addFormData};
     newFormData[fieldName] =  fieldValue;
     setaddformData(newFormData);
 };
 const handleAddFormSubmit = (event) =>{
     event.preventDefault();
     console.log(courses.length);
     const newCourse = {
         id : courses.length+1,
         title : addFormData.title,
         desc : addFormData.desc,
         status : addFormData.status
     };
     const newCourses = [...courses,newCourse];
     setCourses(newCourses);
     console.log(newCourses);
 }
        return (
            <div className="forms">
                <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" onChange={handleAddFormChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name="desc" className="form-control" onChange={handleAddFormChange} />
                </div>
                <button type="submit" className="btn btn-success" onClick={handleAddFormSubmit}>Submit</button>
                 </form>
            </div>
        );
}
 
export default AddTutorials;