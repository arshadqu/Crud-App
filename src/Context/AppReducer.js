export default (state,action) =>{
    switch (action.type) {
        case 'REMOVE_USER' : 
        return {
            users : state.users.filter((users) =>   {
                return users.id !== action.payload
            }
            )
        }

        case 'VIEW_USER' : 
        return {
            users : state.users.filter((users) =>   {
                return users.id === action.payload
            }
            )
        }

        case 'ADD_USER' : 
        return {
            users : [...state.users,action.payload]
            
        }
    
        default:
            return state;
    }
}