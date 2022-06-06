import React from "react";
import Table from "../components/Table";
import { HeaderBicis, dataBicis } from "../const/datos";

export default function VistaBicis(){
    return(
        <>
        <h3>Bicicletas</h3>
        <div>
            <Table cabeceras={HeaderBicis} datos={dataBicis} />
        </div>
        </>
    )
}