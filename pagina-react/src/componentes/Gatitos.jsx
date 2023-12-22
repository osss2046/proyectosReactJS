import React from "react";

import '../estilo/Gatitos.css';




const Gatitos = (props) => {
    const imagenGato = new URL(`../imagenes/gato-${props.imagen}.jpg`, import.meta.url).href;
    return (
        <div className='contenedor-gatos'>
            <img
                className='imagen-gatitos'
                src={imagenGato}
                alt={`gatito ${props.imagen}`} />
            <div className='contenedor-gatos-descripcion'>
                <p className='nombre-gato'> {props.nombre} es un {props.tipo} </p>
                
                <p className='descripcion-gato'> {props.descripcion} </p>

            </div>
        </div>
    );
    }
    export default Gatitos;