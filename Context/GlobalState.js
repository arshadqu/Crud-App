import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State 
const initialState = {
    users : [
        {
            id : 1,
            title : "React Spring boot Tut#1" , 
            desc : "Tut#1 Description",
            status : "Published"
        },
        {
            id : 2,
            title : "Spring boot Web MVC Tut#2" , 
            desc : "Tut#2 Description",
            status : "UnPublish"
        },
        {
            id : 3,
            title : "React Hook Crud Tut#3" , 
            desc : "Tut#3 Description",
            status : "Published"
        },
        {
            id : 4,
            title : "Java Spring boot Tut#4" , 
            desc : "Tut#4 Description",
            status : "UnPublished"
        },
        {
            id : 5,
            title : "React useState Tut#5" , 
            desc : "Tut#5 Description",
            status : "UnPublished"
        }
        
    ]
}

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({children}) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);
    return(
        <GlobalContext.Provider value={{
            users : state.users
        }}>
        {children}
        </GlobalContext.Provider>
    )
}