import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../context/proyectos/proyectoContext';



const NuevoProyecto = () => {

    // obtener el state el formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario, agregarProyecto} = proyectosContext;


    //state para Proyecto 
    const [proyecto, guardarProyecto] = useState ({
        nombre: ''
    });

    //Extraer nombre del proyecto
    const {nombre} = proyecto;

    //Lee los contenido del input 
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario envia un proyecto 
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto
        if (nombre==="") {
            return;
        }
        //Agregar al state 
        agregarProyecto(proyecto)

        //Reiniciar el Form
        guardarProyecto ({
            nombre:''
        })
    }

    // Mostrar el Formulario 
    const onClickFormulario = () => {
        mostrarFormulario ();
    }
    return (


    <Fragment>

        <button
        type="button"
        className=" btn btn-block btn-primario"
        onClick={onClickFormulario}
        >
        Nuevo Proyecto
        </button>  

        
            {
                formulario
                ? (
                    <form 
                    onSubmit = {onSubmitProyecto}
                    className="formulario-nuevo-proyecto">
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value= {nombre}
                            onChange = {onChangeProyecto}/>
            
                        <input 
                            type="submit"
                            className="btn btn-block btn-primario"
                            value="Agregar Proyecto"
                            />
            
                    </form>
                ) : null
            }
            

    </Fragment>
);
}


export default NuevoProyecto;