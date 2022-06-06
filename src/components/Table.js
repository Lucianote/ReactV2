import React from "react";
import TableRow from "./TableRow";

const Table = ({ cabeceras, datos}) => {
    return(
        <table>
            <div>
                <thead>
                    <tr>
                        {/*(valorActual , indice)*/}
                        {cabeceras.map((cabecera, indice) => {
                            return(
                                <td key={indice} title={cabecera}>{cabecera}</td>
                            );

                        })}
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato, indice) =>{
                        return(
                            <TableRow key={indice} datos={dato} />

                        )
                    })}
                </tbody>
            </div>
        </table>
    )
}
export default Table;