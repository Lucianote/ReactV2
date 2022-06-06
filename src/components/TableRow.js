import React from "react";

const TableRow = ({ datos }) =>{
    
    const propiedades = Object.keys(datos)

    return(
        <tr>
            { propiedades.map((ValorActual, indice)=>{
                return(
                    <td key={indice}>{datos[ValorActual]}</td>
                )
            })}
        </tr>
    )
}
export default TableRow;