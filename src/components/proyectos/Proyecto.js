import React, {useContext} from 'react';
import proyectoContext from '../context/proyectos/ProyectoContext';
import tareaContext from '../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
// obtener el state el proyectos
const proyectosContext = useContext(proyectoContext);
const {proyectoActual} = proyectosContext;

//Obtener la funcion del context de tarea 
const tareasContext = useContext(tareaContext);
const {obtenerTareas} = tareasContext; 



//Funcion para agregar el proyecto actual 
    const seleccionarProyecto = id => {
        proyectoActual(id);//Fijar un proyecto Actual
        obtenerTareas(id)//Filtrar las tareas cuando se de click 
    }


    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick= { () => seleccionarProyecto(proyecto.id) }>

        {proyecto.nombre}
            </button>
        </li>
        )
}

export default Proyecto; 