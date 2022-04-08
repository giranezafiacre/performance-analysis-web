import React, { useState } from 'react';

var store = {
    userdata:JSON.parse(localStorage.getItem('username')),
    email:'',
    password:''
}
export const userContext = React.createContext(store);

function AppContext(props) {
    const [state, setState] = useState(store);
    return (
        <userContext.Provider value={{ state, setState }}>
            {props.children}
        </userContext.Provider>
    );

}
export default AppContext;