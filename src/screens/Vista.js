import React from "react";
import Table from "../components/Table";
import { HeaderAutos , dataAutos } from "../const/datos";

export default function Vista(){
    
    return(
        <>
        <h3>Autos</h3>
        <div>
            <Table cabeceras={HeaderAutos} datos={dataAutos}/>
        </div>
        </>
    )

}

