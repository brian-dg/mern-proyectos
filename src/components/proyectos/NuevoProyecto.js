import React, {Fragment, useState} from 'react';



const NuevoProyecto = () => {

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

        //Agregar al state 

        //Reiniciar el Form

    }

    return (


    <Fragment>

        <button
        type="button"
        className=" btn btn-block btn-primario">
        Nuevo Proyecto
        </button>  

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

    </Fragment>
);
}


export default NuevoProyecto;