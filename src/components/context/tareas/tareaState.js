import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';


const TareaState = props => {
    const initialState = {
        tareas: [],
    }

    //crear dispatcch y state
    const [state,dispatch] = useReducer (TareaState, initialState);

    return (
        <TareaContext.Provider>
            
            {props.children}

        </TareaContext.Provider>

    )


}

export default TareaState;